async function createNoteWithFolderSelection(tp) {
  // Function to search for folders by partial name with intelligent scoring
  function searchFolders(searchTerm) {
    const allFolders = app.vault
      .getAllLoadedFiles()
      .filter((f) => f.children) // Only folders
      .map((f) => f.path);

    if (!searchTerm) return allFolders;

    const lowerSearch = searchTerm.toLowerCase();

    // Filter and score matches
    const scoredFolders = allFolders
      .map((path) => {
        const lowerPath = path.toLowerCase();
        const folderName = path.split("/").pop().toLowerCase();

        // Exact match in folder name gets highest score
        if (folderName.includes(lowerSearch)) {
          return { path, score: 100 };
        }
        // Match anywhere in path
        else if (lowerPath.includes(lowerSearch)) {
          return { path, score: 50 };
        }
        return null;
      })
      .filter((item) => item !== null)
      .sort((a, b) => b.score - a.score);

    return scoredFolders.map((item) => item.path);
  }

  // Function to extract number prefix from folder/file name
  function getNumberPrefix(name) {
    const match = name.match(/^(\d+(?:-\d+)*)/);
    return match ? match[1] : null;
  }

  // Function to get the next number for a given level
  function getNextNumber(folderPath, parentPrefix) {
    const folder = app.vault.getAbstractFileByPath(folderPath);

    if (!folder || !folder.children || folder.children.length === 0) {
      return parentPrefix + "-01";
    }

    const children = folder.children;

    const matchingItems = children
      .map((f) => getNumberPrefix(f.name))
      .filter((prefix) => prefix && prefix.startsWith(parentPrefix + "-"))
      .map((prefix) => {
        const suffix = prefix.substring(parentPrefix.length + 1);
        const nextLevelNumber = parseInt(suffix.split("-")[0], 10);
        return nextLevelNumber;
      })
      .filter((num) => !isNaN(num));

    if (matchingItems.length === 0) {
      return parentPrefix + "-01";
    }

    const maxNum = Math.max(...matchingItems);
    const nextNum = (maxNum + 1).toString().padStart(2, "0");

    return parentPrefix + "-" + nextNum;
  }

  // Step 1: Ask user for folder search term
  const searchTerm = await tp.system.prompt(
    "Enter folder name or part of path (e.g., 'Zotero', 'Earth Science'):"
  );

  if (!searchTerm) {
    new Notice("Folder selection cancelled.");
    return null;
  }

  // Step 2: Search for matching folders
  const matchingFolders = searchFolders(searchTerm);

  if (matchingFolders.length === 0) {
    new Notice("No folders found matching: " + searchTerm);
    return null;
  }

  // Step 3: Let user select from matching folders
  let selectedFolder;

  if (matchingFolders.length === 1) {
    // Only one match, confirm with user
    const confirm = await tp.system.prompt(
      `Use folder: "${matchingFolders[0]}"? (yes/no)`,
      "yes"
    );

    if (confirm && confirm.toLowerCase() === "yes") {
      selectedFolder = matchingFolders[0];
    } else {
      new Notice("Folder selection cancelled.");
      return null;
    }
  } else {
    // Multiple matches, show suggester
    selectedFolder = await tp.system.suggester(
      matchingFolders,
      matchingFolders,
      false,
      "Select the target folder:"
    );

    if (!selectedFolder) {
      new Notice("Folder selection cancelled.");
      return null;
    }
  }

  // Step 4: Get parent folder prefix from the selected folder's name
  const folderName = selectedFolder.split("/").pop();
  const parentPrefix = getNumberPrefix(folderName);

  if (!parentPrefix) {
    new Notice(
      `Selected folder "${folderName}" doesn't have a number prefix. Please use numbered folders (e.g., 00-FolderName)`
    );
    return null;
  }

  // Step 5: Get the next available number prefix
  const nextPrefix = getNextNumber(selectedFolder, parentPrefix);

  // Step 6: Prompt for the file title (just the name, no numbers)
  const userTitle = await tp.system.prompt(
    "Enter file name (without numbers):"
  );

  if (!userTitle) {
    new Notice("File creation cancelled.");
    return null;
  }

  // Step 7: Combine prefix and title for the full filename
  const fullTitle = nextPrefix + "-" + userTitle;

  // Step 8: Template selection based on folder context
  const templateOptions = getRelevantTemplates(selectedFolder);

  let selectedTemplate = null;

  if (templateOptions.length > 1) {
    selectedTemplate = await tp.system.suggester(
      templateOptions.map((t) => t.name),
      templateOptions.map((t) => t.path),
      false,
      "Select a template (or cancel for blank note):"
    );
  } else if (templateOptions.length === 1) {
    // Auto-select if only one relevant template
    selectedTemplate = templateOptions[0].path;
  }

  // Return all the information needed to create the file
  return {
    fullTitle: fullTitle,
    cleanTitle: userTitle,
    numberPrefix: nextPrefix,
    parentPrefix: parentPrefix,
    targetFolder: selectedFolder,
    fullPath: selectedFolder + "/" + fullTitle + ".md",
    template: selectedTemplate, // Can be null for blank note
  };
}

// Function to suggest relevant templates based on folder path
function getRelevantTemplates(folderPath) {
  const templates = [];
  const lowerPath = folderPath.toLowerCase();

  // Always include blank note option first
  templates.push({
    name: "📄 Blank Note (No Template)",
    path: null,
  });

  // Earth Science folders - All 16 disciplines
  const earthScienceKeywords = [
    "earth science",
    "01-01",
    "mineralogy",
    "petrology",
    "structural",
    "geotectonics",
    "sedimentology",
    "stratigraphy",
    "paleontology",
    "geochemistry",
    "geophysics",
    "geomorphology",
    "hydrogeology",
    "economic geology",
    "quaternary",
    "precambrian",
    "marine geology",
    "paleooceanography",
    "oceanography",
    "atmospheric",
    "geography",
  ];

  if (earthScienceKeywords.some((keyword) => lowerPath.includes(keyword))) {
    templates.push({
      name: "🌍 Earth Science Note",
      path: "99-Meta/99-02-Templates/99-02-06-Earth Science Note.md",
    });
  }

  // Programming folders (Python, Machine Learning, Projects)
  if (
    lowerPath.includes("programming") ||
    lowerPath.includes("01-02") ||
    lowerPath.includes("python") ||
    lowerPath.includes("machine learning") ||
    lowerPath.includes("project documentation")
  ) {
    templates.push({
      name: "🐍 Python Code Note",
      path: "99-Meta/99-02-Templates/99-02-13-Python Code Note.md",
    });
    templates.push({
      name: "🤖 Machine Learning Project",
      path: "99-Meta/99-02-Templates/99-02-14-Machine Learning Earth Science.md",
    });
    templates.push({
      name: "📋 Project Template",
      path: "99-Meta/99-02-Templates/99-02-09-Project Template.md",
    });
  }

  // Interview Preparation folders
  if (lowerPath.includes("interview") || lowerPath.includes("01-03")) {
    templates.push({
      name: "� Interview Preparation",
      path: "99-Meta/99-02-Templates/99-02-16-Interview Preparation.md",
    });
  }

  // Research folders (Scientific Papers, Zotero, Literature, Synthesis)
  if (
    lowerPath.includes("research") ||
    lowerPath.includes("02-01") ||
    lowerPath.includes("zotero") ||
    lowerPath.includes("literature") ||
    lowerPath.includes("synthesis")
  ) {
    templates.push({
      name: "� Research Note",
      path: "99-Meta/99-02-Templates/99-02-02-Research Notes.md",
    });
    // Also suggest Earth Science template for research topics
    if (!templates.some((t) => t.name === "🌍 Earth Science Note")) {
      templates.push({
        name: "🌍 Earth Science Note",
        path: "99-Meta/99-02-Templates/99-02-06-Earth Science Note.md",
      });
    }
  }

  // Content Creation folders (YouTube, Blog)
  if (
    lowerPath.includes("content creation") ||
    lowerPath.includes("02-02") ||
    lowerPath.includes("youtube") ||
    lowerPath.includes("blog")
  ) {
    if (lowerPath.includes("youtube")) {
      templates.push({
        name: "🎥 YouTube Script",
        path: "99-Meta/99-02-Templates/99-02-07-YouTube Script.md",
      });
    }
    if (lowerPath.includes("blog")) {
      templates.push({
        name: "✍️ Blog Post",
        path: "99-Meta/99-02-Templates/99-02-08-Blog Post.md",
      });
    }
  }

  // Ideas/Fleeting Notes folders
  if (
    lowerPath.includes("ideas") ||
    lowerPath.includes("fleeting") ||
    lowerPath.includes("03-01")
  ) {
    templates.push({
      name: "💡 Fleeting Note",
      path: "99-Meta/99-02-Templates/99-02-05-Fleeting Notes.md",
    });
    templates.push({
      name: "💭 Ideas Note",
      path: "99-Meta/99-02-Templates/99-02-03-Ideas.md",
    });
  }

  // Permanent Notes folders
  if (lowerPath.includes("permanent") || lowerPath.includes("03-02")) {
    templates.push({
      name: "📚 Research Note",
      path: "99-Meta/99-02-Templates/99-02-02-Research Notes.md",
    });
  }

  // Journal folders
  if (lowerPath.includes("journal") || lowerPath.includes("05-")) {
    templates.push({
      name: "📔 Journal Entry",
      path: "99-Meta/99-02-Templates/99-02-04-Journals.md",
    });
    templates.push({
      name: "📅 Daily Note",
      path: "99-Meta/99-02-Templates/99-02-10-Daily Note.md",
    });
  }

  // Maps of Content folder
  if (
    lowerPath.includes("maps of content") ||
    lowerPath.includes("00-") ||
    lowerPath.includes("moc")
  ) {
    templates.push({
      name: "🗺️ Map of Content (MOC)",
      path: "99-Meta/99-02-Templates/99-02-11-Map of Content (MOC).md",
    });
  }

  // If no specific templates were added (besides blank), add general template
  if (templates.length === 1) {
    templates.push({
      name: "📝 General Note",
      path: "99-Meta/99-02-Templates/99-02-01-Areas.md",
    });
  }

  return templates;
}

module.exports = createNoteWithFolderSelection;
