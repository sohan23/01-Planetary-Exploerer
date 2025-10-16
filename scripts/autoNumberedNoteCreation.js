async function autoNumberedNoteCreation(tp) {
  console.log("--- Running autoNumberedNoteCreation script ---");

  // --- Step 1: Get folder ---
  const currentFolder = app.vault.getAbstractFileByPath(tp.file.folder(true));
  if (!currentFolder) {
    new Notice("Error: Cannot find the current folder.");
    console.log("Error: currentFolder is null or undefined.");
    return null;
  }
  console.log(`1. Folder Name: "${currentFolder.name}"`);

  // --- Step 2: Extract folder prefix ---
  const folderName = currentFolder.name.trim(); // Trim whitespace just in case
  const folderPrefixMatch = folderName.match(/^(\d+(-\d+)*)/);
  const folderPrefix = folderPrefixMatch ? folderPrefixMatch[1] : null;

  if (!folderPrefix) {
    new Notice("Error: The folder name does not start with a recognized number prefix.");
    console.log(`Error: Could not find prefix in "${folderName}".`);
    return null;
  }
  console.log(`2. Extracted Folder Prefix: "${folderPrefix}"`);

  // --- Step 3: Find highest file number ---
  let highestFileNumber = 0;
  const fileNumberRegex = new RegExp(`^${folderPrefix}-(\d+)`);
  console.log(`3. Using Regex to find file numbers: ${fileNumberRegex}`);

  console.log("--- Checking files in folder ---");
  for (const file of currentFolder.children) {
    console.log(`- Checking file: "${file.name}"`);
    const match = file.name.match(fileNumberRegex);
    if (match && match[1]) {
      console.log(`  - Match found! Extracted number: "${match[1]}"`);
      const fileNumber = parseInt(match[1], 10);
      if (fileNumber > highestFileNumber) {
        highestFileNumber = fileNumber;
        console.log(`  - New highest number: ${highestFileNumber}`);
      }
    } else {
      console.log("  - No match.");
    }
  }
  console.log("--- Finished checking files ---");
  console.log(`4. Final Highest File Number: ${highestFileNumber}`);


  // --- Step 4: Calculate next file number ---
  const nextFileNumber = highestFileNumber + 1;
  const nextFileNumberPadded = nextFileNumber.toString().padStart(2, '0');
  console.log(`5. Next File Number (padded): "${nextFileNumberPadded}"`);

  // --- Step 5: Prompt for title ---
  const noteTitle = await tp.system.prompt("Enter Note Title:");
  if (!noteTitle) {
    console.log("User cancelled title prompt.");
    return null;
  }

  // --- Step 6: Construct filename ---
  const sanitizedTitle = noteTitle.replace(/[\/:'''*?<>|]+/g, '');
  const fullFilename = `${folderPrefix}-${nextFileNumberPadded}-${sanitizedTitle}`;
  console.log(`6. Final Filename: "${fullFilename}"`);

  // --- Step 7: Return data ---
  return {
    fullTitle: fullFilename,
    cleanTitle: noteTitle,
    folderPath: tp.file.folder(true)
  };
}

module.exports = autoNumberedNoteCreation;
