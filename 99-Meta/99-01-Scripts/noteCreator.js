/*
 * ==========================================================================
 * Templater User Script: Interactive Note Creator (v2 - Smart Templates)
 * ==========================================================================
 *
 * - Prompts for a folder, allowing search and creation.
 * - Automatically calculates and prepends a numbered prefix.
 * - Prompts for the note title.
 * - **NEW**: Automatically selects a template based on folder rules.
 * - Creates, renames, and moves the note to the correct location.
 *
 */

// =========================================================================
//                            USER CONFIGURATION
// =========================================================================
const CONFIG = {
  // Path to the template used as a fallback.
  normalTemplatePath: "99-Meta/99-02-Templates/Normal Template.md",

  // Folder containing all your 'pre-made' content templates.
  premadeTemplatesFolder: "99-Meta/99-02-Templates",

  // List of folders to EXCLUDE from all folder selection prompts.
  foldersToIgnore: ["04-Archive", "06-Media", "99-Meta/99-02-Templates"],

  // =====================================================================
  //          *** FOLDER TO TEMPLATE MAPPING ***
  //  Define your rules here. The script will check if a folder path
  //  *includes* the keyword and use the corresponding template.
  //  The first match wins.
  // =====================================================================
  folderTemplateMap: {
    // Keyword (in folder name) : Template Path
    "Earth Science": "99-Meta/99-02-Templates/Earth Science Note.md",
    Programming: "99-Meta/99-02-Templates/Programming Note.md",
    "Project Documentation": "99-Meta/99-02-Templates/Project Documentation.md",
    YouTube: "99-Meta/99-02-Templates/Content Idea.md",
    Blog: "99-Meta/99-02-Templates/Blog Post.md",
    Ideas: "99-Meta/99-02-Templates/Idea Note.md",
  },
};

async function noteCreator(tp) {
  // Helper function to get the correct template for a given folder path
  function getTemplateForFolder(path) {
    for (const keyword in CONFIG.folderTemplateMap) {
      if (path.toLowerCase().includes(keyword.toLowerCase())) {
        return CONFIG.folderTemplateMap[keyword];
      }
    }
    return null; // No match found
  }

  // Helper function to get all folders, excluding ignored ones.
  function getAllFolders() {
    return tp.app.vault
      .getAllLoadedFiles()
      .filter(
        (file) =>
          file.children &&
          !CONFIG.foldersToIgnore.some((ignored) =>
            file.path.startsWith(ignored)
          )
      )
      .map((folder) => folder.path);
  }

  // Helper function to calculate the next numbered prefix.
  async function getNextPrefix(parentFolderPath) {
    try {
      const parentFolder = tp.app.vault.getAbstractFileByPath(parentFolderPath);
      if (!parentFolder || !parentFolder.children) {
        const rootFiles = await tp.app.vault.adapter.list(parentFolderPath);
        const items = [...rootFiles.files, ...rootFiles.folders];
        const existingPrefixes = items
          .map((item) =>
            item
              .split("/")
              .pop()
              .match(/^(\d+)-/)
          )
          .filter((match) => match)
          .map((match) => parseInt(match[1], 10));

        if (existingPrefixes.length === 0) return "01-";
        const maxPrefix = Math.max(...existingPrefixes);
        return `${String(maxPrefix + 1).padStart(2, "0")}-`;
      }

      const children = parentFolder.children;
      const existingPrefixes = children
        .map((child) => child.name.match(/^(\d+)-/))
        .filter((match) => match)
        .map((match) => parseInt(match[1], 10));

      const parentPrefix = parentFolder.name.match(/^(\d+(-\d+)*)-/);
      const basePrefix = parentPrefix ? parentPrefix[0] : "";

      if (existingPrefixes.length === 0) return `${basePrefix}01-`;

      const maxPrefix = Math.max(...existingPrefixes);
      return `${basePrefix}${String(maxPrefix + 1).padStart(2, "0")}-`;
    } catch (e) {
      new Notice("Error calculating prefix.", 5000);
      console.error(e);
      return "01-";
    }
  }

  // Main logic starts here
  try {
    // 1. SELECT FOLDER
    const allFolders = getAllFolders();
    const searchQuery = await tp.system.prompt(
      "Enter folder search term (or leave blank):"
    );

    let targetFolder;
    const matchingFolders = allFolders.filter((path) =>
      path.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && matchingFolders.length > 0) {
      const choice = await tp.system.suggester(
        ["Use selected folder", "Select from all folders"],
        ["use_selected", "select_all"],
        false,
        `Found: ${matchingFolders[0]}`
      );
      if (choice === "use_selected") {
        targetFolder = matchingFolders[0];
      } else if (choice === null) return;
    }

    if (!targetFolder) {
      const allOptions = ["(Vault Root)", ...allFolders, "[Create New Folder]"];
      targetFolder = await tp.system.suggester(
        allOptions,
        allOptions,
        false,
        "Select a destination folder:"
      );
      if (!targetFolder) {
        new Notice("Cancelled. Creating note in vault root.");
        targetFolder = "/";
      }
    }

    let isNewFolder = false;
    let parentFolderForNew = null;
    // 2. CREATE NEW FOLDER IF REQUESTED
    if (targetFolder === "[Create New Folder]") {
      isNewFolder = true;
      parentFolderForNew = await tp.system.suggester(
        ["(Vault Root)", ...allFolders],
        ["/", ...allFolders],
        false,
        "Select parent for new folder:"
      );
      if (!parentFolderForNew) return;

      const newFolderName = await tp.system.prompt("Enter new folder name:");
      if (!newFolderName) return;

      const prefix = await getNextPrefix(
        parentFolderForNew === "/" ? "" : parentFolderForNew
      );
      const fullFolderName = `${prefix}${newFolderName}`;
      const newFolderPath =
        parentFolderForNew === "/"
          ? fullFolderName
          : `${parentFolderForNew}/${fullFolderName}`;
      await tp.app.vault.createFolder(newFolderPath);
      targetFolder = newFolderPath;
      new Notice(`Created folder: ${targetFolder}`);
    }

    if (targetFolder === "(Vault Root)") targetFolder = "/";

    // 3. GET NOTE TITLE
    const noteTitle = await tp.system.prompt("Enter the note title:");
    if (!noteTitle) return;

    const filePrefix = await getNextPrefix(
      targetFolder === "/" ? "" : targetFolder
    );
    const fullNoteTitle = `${filePrefix}${noteTitle}`;

    // 4. SELECT TEMPLATE (NEW SMART LOGIC)
    let templatePath = "";
    if (isNewFolder) {
      if (parentFolderForNew === "/") {
        // New folder in ROOT: Prompt the user.
        const premadeTemplates = tp.app.vault
          .getFiles()
          .filter((f) => f.path.startsWith(CONFIG.premadeTemplatesFolder));
        const templateChoices = premadeTemplates.map((f) => f.path);
        templatePath = await tp.system.suggester(
          templateChoices.map((p) => p.split("/").pop()),
          templateChoices,
          false,
          "Select a template for the new root folder:"
        );
        if (!templatePath) return;
      } else {
        // New folder in SUB-FOLDER: Inherit from parent.
        templatePath = getTemplateForFolder(parentFolderForNew);
      }
    } else {
      // Existing folder: Find the template automatically.
      templatePath = getTemplateForFolder(targetFolder);
    }

    // Fallback to normal template if no rule was found
    if (!templatePath) {
      templatePath = CONFIG.normalTemplatePath;
      new Notice(
        "No specific template rule found. Using Normal Template.",
        3000
      );
    }

    // 5. CREATE AND MOVE THE NOTE
    const targetPath =
      targetFolder === "/" ? fullNoteTitle : `${targetFolder}/${fullNoteTitle}`;

    const templateFile = tp.app.vault.getAbstractFileByPath(templatePath);
    if (!templateFile) {
      new Notice(
        `ERROR: Template file not found at path: ${templatePath}`,
        10000
      );
      return;
    }
    const templateContent = await tp.app.vault.read(templateFile);

    const newFile = await tp.app.vault.create(
      targetPath + ".md",
      templateContent
    );

    await tp.app.workspace.getLeaf(false).openFile(newFile);
  } catch (e) {
    console.error("Templater Script Error:", e);
    new Notice("An error occurred. Check the developer console.", 10000);
  }
}

module.exports = noteCreator;
