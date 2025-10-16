async function autoNumberedNoteCreation(tp) {
  // --- Step 1: Get the folder where the new note is being created. ---
  const currentFolder = app.vault.getAbstractFileByPath(tp.file.folder(true));
  if (!currentFolder) {
    new Notice("Error: Cannot find the current folder.");
    return null;
  }

  // --- Step 2: Extract the number-based prefix from the folder's name. ---
  const folderName = currentFolder.name.trim();
  const folderPrefixMatch = folderName.match(/^(\d+(-\d+)*)/);
  const folderPrefix = folderPrefixMatch ? folderPrefixMatch[1] : null;

  if (!folderPrefix) {
    new Notice("Error: The folder name does not start with a recognized number prefix (e.g., '01-Topic' or '01-01-Subtopic').");
    return null;
  }

  // --- Step 3: Find the highest existing file number in this folder. ---
  // The backslash for \d must be double-escaped in a string for the RegExp constructor.
  const fileNumberRegex = new RegExp(`^${folderPrefix}-(\\d+)`);

  let highestFileNumber = 0;
  for (const file of currentFolder.children) {
    if (file.extension) {
      const match = file.name.match(fileNumberRegex);
      if (match && match[1]) {
        const fileNumber = parseInt(match[1], 10);
        if (fileNumber > highestFileNumber) {
          highestFileNumber = fileNumber;
        }
      }
    }
  }

  // --- Step 4: Calculate the next file number. ---
  const nextFileNumber = highestFileNumber + 1;
  const nextFileNumberPadded = nextFileNumber.toString().padStart(2, '0');

  // --- Step 5: Ask the user for the note's title. ---
  const noteTitle = await tp.system.prompt("Enter Note Title:");
  if (!noteTitle) {
    return null; // User cancelled.
  }

  // --- Step 6: Construct the new, full filename. ---
  const sanitizedTitle = noteTitle.replace(/[\/:'''*?<>|]+/g, '');
  const fullFilename = `${folderPrefix}-${nextFileNumberPadded}-${sanitizedTitle}`;

  // --- Step 7: Return the data to the Templater template. ---
  return {
    fullTitle: fullFilename,
    cleanTitle: noteTitle,
    folderPath: tp.file.folder(true)
  };
}

module.exports = autoNumberedNoteCreation;