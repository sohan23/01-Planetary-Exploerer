
async function autoNumberedNoteCreation(tp) {
  // 1. Get the current folder where the note is being created.
  const currentFolder = tp.file.folder(true); // Get relative folder path, e.g., "01-Areas/Sub-Folder"
  if (!currentFolder) {
    new Notice("Error: Cannot determine the current folder.");
    return null;
  }

  const folder = app.vault.getAbstractFileByPath(currentFolder);
  if (!folder || !folder.children) {
    new Notice("Error: Cannot read the contents of the folder.");
    return null;
  }

  // 2. Extract the prefix from the folder's name (e.g., "01-Areas" -> "01").
  const folderName = folder.name;
  const folderPrefixMatch = folderName.match(/^(\d+(-\d+)*)/);
  const folderPrefix = folderPrefixMatch ? folderPrefixMatch[1] : '';

  if (!folderPrefix) {
      new Notice("Folder name does not have a recognized number prefix (e.g., '01-Topic', '02-01-Subtopic').");
      return null;
  }

  // 3. Find the highest existing file number within that folder.
  let maxFileNum = 0;
  // This regex looks for filenames starting with the exact folder prefix, followed by a dash and a number.
  const fileRegex = new RegExp(`^${folderPrefix}-(\d+)`);

  for (const file of folder.children) {
    const match = file.name.match(fileRegex);
    if (match && match[1]) {
      const fileNum = parseInt(match[1], 10);
      if (fileNum > maxFileNum) {
        maxFileNum = fileNum;
      }
    }
  }

  // 4. Calculate the next file number and pad it with a leading zero if needed.
  const nextFileNum = maxFileNum + 1;
  const newFileNumberPadded = nextFileNum.toString().padStart(2, '0');

  // 5. Prompt the user for the desired title of the note.
  const cleanTitle = await tp.system.prompt("Enter Note Title:");
  if (!cleanTitle) {
    // This happens if the user presses escape or cancels the prompt.
    return null;
  }

  // 6. Construct the full, final filename.
  // We sanitize the title to remove characters that are invalid in filenames.
  const sanitizedTitle = cleanTitle.replace(/[\/:"*?<>|]+/g, '');
  const fullTitle = `${folderPrefix}-${newFileNumberPadded}-${sanitizedTitle}`;

  // 7. Return an object with all the details. The calling template will use this.
  return {
    fullTitle: fullTitle,
    cleanTitle: cleanTitle, // The original title for use in aliases
    folderPath: currentFolder
  };
}

module.exports = autoNumberedNoteCreation;
