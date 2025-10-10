/*
 * ==========================================================================
 * Templater User Script: Interactive Note Creator
 * ==========================================================================
 *
 * - Prompts for a folder, allowing search and creation.
 * - Automatically calculates and prepends a numbered prefix (e.g., 01-01-)
 * to new notes and folders.
 * - Prompts for the note title.
 * - Conditionally selects a template based on the creation context.
 * - Creates, renames, and moves the note to the correct location.
 *
 */

// User Configuration
const CONFIG = {
  // Path to the template used when the process is cancelled or for generic new files.
  normalTemplatePath: "99-Meta/99-02-Templates/Normal Template.md",
  // Folder containing all your 'pre-made' content templates.
  premadeTemplatesFolder: "99-Meta/99-02-Templates",
  // List of folders to EXCLUDE from all folder selection prompts.
  foldersToIgnore: [
    "04-Archive",
    "06-Media",
    "99-Meta/99-02-Templates",
  ],
};

async function noteCreator(tp) {
  // Helper function to get all folders in the vault, excluding ignored ones.
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

  // Helper function to calculate the next numbered prefix for a file or folder.
  async function getNextPrefix(parentFolderPath) {
    try {
      const parentFolder = tp.app.vault.getAbstractFileByPath(parentFolderPath);
      if (!parentFolder || !parentFolder.children) {
        // If it's the root or folder not found, start with '01-'
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
      new Notice("Error calculating prefix. Defaulting to '01-'", 5000);
      console.error(e);
      return "01-";
    }
  }

  // Main logic starts here
  try {
    // 1. SELECT FOLDER
    const allFolders = getAllFolders();
    const searchQuery = await tp.system.prompt(
      "Enter folder search term (or leave blank to see all):"
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
      } else if (choice === null) return; // User cancelled
    }

    // If no choice yet, show the full list
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
    // 2. CREATE NEW FOLDER IF REQUESTED
    if (targetFolder === "[Create New Folder]") {
      isNewFolder = true;
      const parentFolder = await tp.system.suggester(
        ["(Vault Root)", ...allFolders],
        ["/", ...allFolders],
        false,
        "Select parent for new folder:"
      );
      if (!parentFolder) return; // User cancelled

      const newFolderName = await tp.system.prompt("Enter new folder name:");
      if (!newFolderName) return; // User cancelled

      const prefix = await getNextPrefix(
        parentFolder === "/" ? "" : parentFolder
      );
      const fullFolderName = `${prefix}${newFolderName}`;
      const newFolderPath =
        parentFolder === "/"
          ? fullFolderName
          : `${parentFolder}/${fullFolderName}`;
      await tp.app.vault.createFolder(newFolderPath);
      targetFolder = newFolderPath;
      new Notice(`Created folder: ${targetFolder}`);
    }

    if (targetFolder === "(Vault Root)") targetFolder = "/";

    // 3. GET NOTE TITLE
    const noteTitle = await tp.system.prompt("Enter the note title:");
    if (!noteTitle) return; // User cancelled

    const filePrefix = await getNextPrefix(
      targetFolder === "/" ? "" : targetFolder
    );
    const fullNoteTitle = `${filePrefix}${noteTitle}`;

    // 4. SELECT TEMPLATE
    let templatePath = "";
    if (targetFolder === "/" && !isNewFolder) {
      templatePath = CONFIG.normalTemplatePath;
    } else if (isNewFolder) {
      const premadeTemplates = tp.app.vault
        .getFiles()
        .filter((f) => f.path.startsWith(CONFIG.premadeTemplatesFolder));
      const templateChoices = {
        [CONFIG.normalTemplatePath]: "Normal Template",
      };
      premadeTemplates.forEach((f) => (templateChoices[f.path] = f.basename));

      templatePath = await tp.system.suggester(
        Object.values(templateChoices),
        Object.keys(templateChoices),
        false,
        "Select a template for the new folder:"
      );
      if (!templatePath) return; // User cancelled
    } else {
      const premadeTemplates = tp.app.vault
        .getFiles()
        .filter((f) => f.path.startsWith(CONFIG.premadeTemplatesFolder));
      const templateChoices = premadeTemplates.map((f) => f.path);
      templatePath = await tp.system.suggester(
        templateChoices.map((p) => p.split("/").pop()),
        templateChoices,
        false,
        "Select a template:"
      );
      if (!templatePath) return; // User cancelled
    }

    // 5. CREATE AND MOVE THE NOTE
    const targetPath =
      targetFolder === "/" ? fullNoteTitle : `${targetFolder}/${fullNoteTitle}`;

    // Use the chosen template's content
    const templateFile = tp.app.vault.getAbstractFileByPath(templatePath);
    const templateContent = await tp.app.vault.read(templateFile);

    // Create the file at the final destination with the template content
    const newFile = await tp.app.vault.create(
      targetPath + ".md",
      templateContent
    );

    // Open the new file
    await tp.app.workspace.getLeaf(false).openFile(newFile);
  } catch (e) {
    console.error("Templater Script Error:", e);
    new Notice("An error occurred. Check the developer console.", 10000);
  }
}

module.exports = noteCreator;
