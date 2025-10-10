/*
 * Templater Script: Dynamic Folder Creation
 * Version: 2.1.0
 * Date: 2025-10-10
 *
 * Description:
 * Creates numbered folders with keyword search and flexible parent selection.
 */
async function dynamicFolderCreation(tp) {
  const systemApi = tp.system;
  const vault = tp.app.vault;

  // --- HELPER FUNCTIONS ---

  function getAllFolders() {
    return vault
      .getAllLoadedFiles()
      .filter((file) => file instanceof tp.app.TFolder);
  }

  function getNumberPrefix(name) {
    if (!name) return "";
    const match = name.match(/^(\d+(?:-\d+)*)/);
    return match ? match[1] : "";
  }

  function getNextNumber(parentFolder, parentPrefix) {
    const children = parentFolder.children.filter(
      (child) => child instanceof tp.app.TFolder
    );
    let maxNumber = 0;
    const parentPart = parentPrefix ? parentPrefix + "-" : "";

    children.forEach((child) => {
      const childPrefix = getNumberPrefix(child.name);
      if (childPrefix && childPrefix.startsWith(parentPart)) {
        const parts = childPrefix.split("-");
        const lastPart = parseInt(parts[parts.length - 1], 10);
        if (lastPart > maxNumber) {
          maxNumber = lastPart;
        }
      }
    });

    const nextNumber = maxNumber + 1;
    const nextNumberPadded = String(nextNumber).padStart(2, "0");
    return parentPrefix ? `${parentPrefix}-${nextNumberPadded}` : nextNumberPadded;
  }

  function searchFoldersByKeyword(keyword, folders) {
    const lowerKeyword = keyword.toLowerCase();
    return folders.filter((folder) =>
      folder.name.toLowerCase().includes(lowerKeyword)
    );
  }

  // --- CORE WORKFLOW ---

  try {
    // 1. PROMPT FOR FOLDER NAME
    const folderName = await systemApi.prompt("Enter folder name:");
    if (!folderName) {
      new Notice("Cancelled.", 2000);
      return "";
    }

    // 2. SEARCH FOR KEYWORD
    const allFolders = getAllFolders();
    const matchingFolders = searchFoldersByKeyword(folderName, allFolders);

    let parentFolder;

    if (matchingFolders.length > 0) {
      // 3. SHOW MATCHES AND CONFIRM
      const folderOptions = matchingFolders.map((f) => f.path);
      const selectedMatch = await systemApi.suggester(
        folderOptions,
        matchingFolders,
        false,
        "Select the correct folder:"
      );

      if (!selectedMatch) {
        new Notice("No folder selected.", 2000);
        return "";
      }

      const confirmation = await systemApi.suggester(
        [`Yes, use: ${selectedMatch.path}`, "No, select manually"],
        [true, false]
      );

      if (confirmation === true) {
        parentFolder = selectedMatch;
      } else if (confirmation === false) {
        // 4. MANUAL SELECTION WITH ROOT OPTION
        const folderPaths = allFolders.map((f) => f.path);
        const manualSelection = await systemApi.suggester(
          ["(Root)", ...folderPaths],
          ["ROOT", ...allFolders],
          false,
          "Select parent folder (or cancel for root):"
        );

        if (!manualSelection) {
          // 5. NO SELECTION - CREATE AT ROOT
          new Notice("No selection. Creating at root.", 2000);
          parentFolder = vault.getRoot();
        } else if (manualSelection === "ROOT") {
          parentFolder = vault.getRoot();
        } else {
          parentFolder = manualSelection;
        }
      } else {
        new Notice("Cancelled.", 2000);
        return "";
      }
    } else {
      // NO MATCHES - CREATE AT ROOT
      new Notice("No matching folders found. Creating at root.", 3000);
      parentFolder = vault.getRoot();
    }

    // CREATE NUMBERED FOLDER
    const parentPath = parentFolder === vault.getRoot() ? "" : parentFolder.path;
    const parentPrefix = parentFolder === vault.getRoot() ? "" : getNumberPrefix(parentFolder.name);
    
    const folderNumber = getNextNumber(parentFolder, parentPrefix);
    const fullFolderName = `${folderNumber}-${folderName}`;
    const newFolderPath = parentPath ? `${parentPath}/${fullFolderName}` : fullFolderName;

    await vault.createFolder(newFolderPath);
    new Notice(`Folder created: ${newFolderPath}`, 3000);

  } catch (error) {
    console.error("Templater script error:", error);
    new Notice("An error occurred. Check console.", 5000);
  }

  return "";
}

module.exports = dynamicFolderCreation;
