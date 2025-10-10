/*
 * Templater Script: Auto-Numbered Note Creation
 * Version: 1.0.0
 * Date: 2025-10-10
 *
 * Description:
 * Creates auto-numbered notes with proper hierarchical numbering.
 * Used by templates to generate correctly numbered files.
 *
 * Returns: { fullTitle, cleanTitle, targetFolder, folderPath, number }
 */
async function autoNumberedNoteCreation(tp) {
  const systemApi = tp.system;
  const vault = tp.app.vault;

  // --- HELPER FUNCTIONS ---

  /**
   * Gets all folder paths in the vault.
   */
  function getAllFolders() {
    return vault
      .getAllLoadedFiles()
      .filter((file) => file instanceof tp.app.TFolder);
  }

  /**
   * Extracts the number prefix from a file or folder name.
   */
  function getNumberPrefix(name) {
    if (!name) return "";
    const match = name.match(/^(\d+(?:-\d+)*)/);
    return match ? match[1] : "";
  }

  /**
   * Calculates the next available number for a new note.
   */
  function getNextNumber(folder, folderPrefix) {
    const mdFiles = folder.children.filter((child) => child.extension === "md");
    let maxNumber = 0;

    const parentPart = folderPrefix ? folderPrefix + "-" : "";

    mdFiles.forEach((file) => {
      const filePrefix = getNumberPrefix(file.basename);
      
      if (filePrefix && filePrefix.startsWith(parentPart)) {
        const parts = filePrefix.split("-");
        const lastPart = parseInt(parts[parts.length - 1], 10);
        if (lastPart > maxNumber) {
          maxNumber = lastPart;
        }
      }
    });

    const nextNumber = maxNumber + 1;
    const nextNumberPadded = String(nextNumber).padStart(2, "0");

    return folderPrefix
      ? `${folderPrefix}-${nextNumberPadded}`
      : nextNumberPadded;
  }

  // --- CORE WORKFLOW ---

  try {
    // 1. SELECT FOLDER
    const allFolders = getAllFolders();
    const folderPaths = allFolders.map((f) => f.path);

    const selectedPath = await systemApi.suggester(
      folderPaths,
      folderPaths
    );

    if (!selectedPath) {
      new Notice("Cancelled.", 2000);
      return null;
    }

    const targetFolder = vault.getAbstractFileByPath(selectedPath);

    if (!targetFolder) {
      new Notice("Error: Could not find folder.", 3000);
      return null;
    }

    // 2. GET NOTE TITLE
    const noteTitle = await systemApi.prompt("Enter note title:");
    if (!noteTitle) {
      new Notice("Cancelled.", 2000);
      return null;
    }

    // 3. CALCULATE NUMBER
    const folderPrefix = getNumberPrefix(targetFolder.name);
    const noteNumber = getNextNumber(targetFolder, folderPrefix);
    const fullTitle = `${noteNumber}-${noteTitle}`;

    // Return data for template to use
    return {
      fullTitle: fullTitle,
      cleanTitle: noteTitle,
      targetFolder: targetFolder,
      folderPath: targetFolder.path,
      number: noteNumber
    };

  } catch (error) {
    console.error("Auto-numbering script error:", error);
    new Notice("An error occurred. Check console.", 5000);
    return null;
  }
}

module.exports = autoNumberedNoteCreation;
