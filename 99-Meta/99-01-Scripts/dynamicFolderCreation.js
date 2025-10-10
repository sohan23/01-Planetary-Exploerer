/*/*

 * Templater Script: Unified Note Creation Workflow * Templater Script: Dynamic Folder Creation

 * Version: 3.0.0 * Version: 2.1.0

 * Date: 2025-10-10 * Date: 2025-10-10

 * *

 * Description: * Description:

 * Complete unified workflow: search folder → confirm → create note with template * Creates numbered folders with keyword search and flexible parent selection.

 * OR create new folder → create note */

 *async function dynamicFolderCreation(tp) {

 * Workflow:  const systemApi = tp.system;

 * 1. Search for folder by keyword  const vault = tp.app.vault;

 * 2. If found → confirm Yes/No

 * 3. If Yes → auto-select template → create note  // --- HELPER FUNCTIONS ---

 * 4. If No → manual folder selection OR create new folder at root

 * 5. Create note with appropriate template  function getAllFolders() {

 */    return vault

async function dynamicFolderCreation(tp) {      .getAllLoadedFiles()

  const systemApi = tp.system;      .filter((file) => file instanceof tp.app.TFolder);

  const vault = tp.app.vault;  }



  // --- FOLDER-TO-TEMPLATE MAPPING ---  function getNumberPrefix(name) {

  const TEMPLATE_MAP = {    if (!name) return "";

    "01-01-Earth Science": "01-Earth Science Note.md",    const match = name.match(/^(\d+(?:-\d+)*)/);

    "01-02-01-Python": "02-Programming Learning Note.md",    return match ? match[1] : "";

    "01-02-02-Machine Learning": "02-Programming Learning Note.md",  }

    "01-02-03-Project Documentation": "03-Project Documentation.md",

    "01-03-Interview Preparation": "04-Interview Question.md",  function getNextNumber(parentFolder, parentPrefix) {

    "03-Ideas": "05-Ideas.md",    const children = parentFolder.children.filter(

    "05-01-Daily Notes": "06-Daily Note.md",      (child) => child instanceof tp.app.TFolder

    "05-02-Weekly Reviews": "07-Weekly Note.md",    );

    "05-03-Long Form Reflections": "08-Long Form Reflection.md"    let maxNumber = 0;

  };    const parentPart = parentPrefix ? parentPrefix + "-" : "";



  // --- HELPER FUNCTIONS ---    children.forEach((child) => {

      const childPrefix = getNumberPrefix(child.name);

  function getAllFolders() {      if (childPrefix && childPrefix.startsWith(parentPart)) {

    return vault.getAllLoadedFiles().filter((file) => file instanceof tp.app.TFolder);        const parts = childPrefix.split("-");

  }        const lastPart = parseInt(parts[parts.length - 1], 10);

        if (lastPart > maxNumber) {

  function getNumberPrefix(name) {          maxNumber = lastPart;

    if (!name) return "";        }

    const match = name.match(/^(\d+(?:-\d+)*)/);      }

    return match ? match[1] : "";    });

  }

    const nextNumber = maxNumber + 1;

  function getNextNumber(parentFolder, parentPrefix, forFolder = false) {    const nextNumberPadded = String(nextNumber).padStart(2, "0");

    const children = forFolder    return parentPrefix ? `${parentPrefix}-${nextNumberPadded}` : nextNumberPadded;

      ? parentFolder.children.filter((child) => child instanceof tp.app.TFolder)  }

      : parentFolder.children.filter((child) => child.extension === "md");

      function searchFoldersByKeyword(keyword, folders) {

    let maxNumber = 0;    const lowerKeyword = keyword.toLowerCase();

    const parentPart = parentPrefix ? parentPrefix + "-" : "";    return folders.filter((folder) =>

      folder.name.toLowerCase().includes(lowerKeyword)

    children.forEach((child) => {    );

      const childPrefix = getNumberPrefix(forFolder ? child.name : child.basename);  }

      if (childPrefix && childPrefix.startsWith(parentPart)) {

        const parts = childPrefix.split("-");  // --- CORE WORKFLOW ---

        const lastPart = parseInt(parts[parts.length - 1], 10);

        if (lastPart > maxNumber) maxNumber = lastPart;  try {

      }    // 1. PROMPT FOR FOLDER NAME

    });    const folderName = await systemApi.prompt("Enter folder name:");

    if (!folderName) {

    const nextNumber = maxNumber + 1;      new Notice("Cancelled.", 2000);

    return parentPrefix      return "";

      ? `${parentPrefix}-${String(nextNumber).padStart(2, "0")}`    }

      : String(nextNumber).padStart(2, "0");

  }    // 2. SEARCH FOR KEYWORD

    const allFolders = getAllFolders();

  function searchFolders(keyword, folders) {    const matchingFolders = searchFoldersByKeyword(folderName, allFolders);

    const lower = keyword.toLowerCase();

    return folders.filter(f =>    let parentFolder;

      f.path.toLowerCase().includes(lower) ||

      f.name.toLowerCase().includes(lower)    if (matchingFolders.length > 0) {

    );      // 3. SHOW MATCHES AND CONFIRM

  }      const folderOptions = matchingFolders.map((f) => f.path);

      const selectedMatch = await systemApi.suggester(

  function getTemplateForFolder(folderPath) {        folderOptions,

    // Exact match first        matchingFolders,

    for (const [key, template] of Object.entries(TEMPLATE_MAP)) {        false,

      if (folderPath.includes(key)) return template;        "Select the correct folder:"

    }      );

    

    // Pattern matching      if (!selectedMatch) {

    if (folderPath.includes("Earth Science")) return "01-Earth Science Note.md";        new Notice("No folder selected.", 2000);

    if (folderPath.includes("Python") || folderPath.includes("Machine Learning")) {        return "";

      return "02-Programming Learning Note.md";      }

    }

    if (folderPath.includes("Project")) return "03-Project Documentation.md";      const confirmation = await systemApi.suggester(

    if (folderPath.includes("Interview")) return "04-Interview Question.md";        [`Yes, use: ${selectedMatch.path}`, "No, select manually"],

    if (folderPath.includes("Ideas")) return "05-Ideas.md";        [true, false]

    if (folderPath.includes("Daily")) return "06-Daily Note.md";      );

    if (folderPath.includes("Weekly")) return "07-Weekly Note.md";

    if (folderPath.includes("Long Form")) return "08-Long Form Reflection.md";      if (confirmation === true) {

            parentFolder = selectedMatch;

    return null;      } else if (confirmation === false) {

  }        // 4. MANUAL SELECTION WITH ROOT OPTION

        const folderPaths = allFolders.map((f) => f.path);

  async function createNote(targetFolder, templateName) {        const manualSelection = await systemApi.suggester(

    const noteTitle = await systemApi.prompt("Enter note title:");          ["(Root)", ...folderPaths],

    if (!noteTitle) {          ["ROOT", ...allFolders],

      new Notice("Cancelled.", 2000);          false,

      return;          "Select parent folder (or cancel for root):"

    }        );



    const folderPrefix = getNumberPrefix(targetFolder.name);        if (!manualSelection) {

    const noteNumber = getNextNumber(targetFolder, folderPrefix, false);          // 5. NO SELECTION - CREATE AT ROOT

    const fullFileName = `${noteNumber}-${noteTitle}`;          new Notice("No selection. Creating at root.", 2000);

    const notePath = `${targetFolder.path}/${fullFileName}.md`;          parentFolder = vault.getRoot();

        } else if (manualSelection === "ROOT") {

    if (!templateName) {          parentFolder = vault.getRoot();

      // Create basic note        } else {

      const content = `# ${noteTitle}\n\n`;          parentFolder = manualSelection;

      const newFile = await vault.create(notePath, content);        }

      app.workspace.getLeaf(false).openFile(newFile);      } else {

      new Notice(`Note created: ${notePath}`, 3000);        new Notice("Cancelled.", 2000);

      return;        return "";

    }      }

    } else {

    // Load and process template      // NO MATCHES - CREATE AT ROOT

    const templatePath = `99-Meta/99-02-Templates/${templateName}`;      new Notice("No matching folders found. Creating at root.", 3000);

    const templateFile = vault.getAbstractFileByPath(templatePath);      parentFolder = vault.getRoot();

        }

    if (!templateFile) {

      new Notice(`Template not found: ${templateName}`, 3000);    // CREATE NUMBERED FOLDER

      return;    const parentPath = parentFolder === vault.getRoot() ? "" : parentFolder.path;

    }    const parentPrefix = parentFolder === vault.getRoot() ? "" : getNumberPrefix(parentFolder.name);

    

    let content = await vault.read(templateFile);    const folderNumber = getNextNumber(parentFolder, parentPrefix);

        const fullFolderName = `${folderNumber}-${folderName}`;

    // Replace Templater placeholders    const newFolderPath = parentPath ? `${parentPath}/${fullFolderName}` : fullFolderName;

    const now = new Date();

    const dateStr = now.toISOString().split('T')[0];    await vault.createFolder(newFolderPath);

    const timeStr = now.toTimeString().split(' ')[0].substring(0, 5);    new Notice(`Folder created: ${newFolderPath}`, 3000);

    const weekNum = String(Math.ceil((now.getDate()) / 7)).padStart(2, '0');

    const weekStr = `${now.getFullYear()}-W${weekNum}`;  } catch (error) {

        console.error("Templater script error:", error);

    content = content    new Notice("An error occurred. Check console.", 5000);

      .replace(/<%\*[\s\S]*?-%>/g, '') // Remove execution blocks  }

      .replace(/<% result\.fullTitle %>/g, fullFileName)

      .replace(/<% result\.cleanTitle %>/g, noteTitle)  return "";

      .replace(/<% tp\.date\.now\("YYYY-MM-DD"\) %>/g, dateStr)}

      .replace(/<% tp\.date\.now\("YYYY-MM-DD HH:mm"\) %>/g, `${dateStr} ${timeStr}`)

      .replace(/<% tp\.date\.now\("dddd, MMMM DD, YYYY"\) %>/g, module.exports = dynamicFolderCreation;

        now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      .replace(/<% tp\.date\.now\("YYYY-\[W\]WW"\) %>/g, weekStr)
      .replace(/<% tp\.date\.now\("WW YYYY"\) %>/g, `${weekNum} ${now.getFullYear()}`)
      .replace(/<% tp\.date\.now\("WW"\) %>/g, weekNum)
      .replace(/<% tp\.date\.now\("YYYY"\) %>/g, now.getFullYear().toString())
      .replace(/<% tp\.date\.now\("MMMM DD, YYYY"\) %>/g,
        now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

    const newFile = await vault.create(notePath, content);
    app.workspace.getLeaf(false).openFile(newFile);
    new Notice(`Note created: ${notePath}`, 3000);
  }

  // --- MAIN WORKFLOW ---

  try {
    // STEP 1: PROMPT FOR FOLDER KEYWORD
    const keyword = await systemApi.prompt("Type folder name/keyword:");
    if (!keyword) {
      new Notice("Cancelled.", 2000);
      return "";
    }

    const allFolders = getAllFolders();
    const matches = searchFolders(keyword, allFolders);

    if (matches.length > 0) {
      // STEP 2: FOLDER FOUND - SHOW MATCHES
      const paths = matches.map(f => f.path);
      const selected = await systemApi.suggester(paths, matches);
      
      if (!selected) {
        new Notice("Cancelled.", 2000);
        return "";
      }

      // STEP 3: CONFIRM SELECTION (YES/NO)
      const confirm = await systemApi.suggester(
        [`✅ Yes, use: ${selected.path}`, "❌ No, choose different option"],
        [true, false]
      );

      if (confirm === true) {
        // STEP 3A: YES - CREATE NOTE WITH TEMPLATE
        const template = getTemplateForFolder(selected.path);
        await createNote(selected, template);
        return "";
      }
      
      // STEP 4: NO - SHOW OPTIONS
    }

    // STEP 4: FOLDER NOT FOUND OR USER SAID NO
    const action = await systemApi.suggester(
      [
        "📁 Manually select existing folder",
        "➕ Create new folder at root",
        "❌ Cancel"
      ],
      ["manual", "create", "cancel"]
    );

    if (!action || action === "cancel") {
      new Notice("Cancelled.", 2000);
      return "";
    }

    if (action === "manual") {
      // STEP 5A: MANUAL SELECTION
      const paths = allFolders.map(f => f.path);
      const selectedPath = await systemApi.suggester(paths, paths);
      
      if (!selectedPath) {
        new Notice("Cancelled.", 2000);
        return "";
      }

      const folder = vault.getAbstractFileByPath(selectedPath);
      const template = getTemplateForFolder(selectedPath);
      await createNote(folder, template);

    } else if (action === "create") {
      // STEP 5B: CREATE NEW FOLDER AT ROOT
      const folderName = await systemApi.prompt("Enter new folder name:");
      if (!folderName) {
        new Notice("Cancelled.", 2000);
        return "";
      }

      const root = vault.getRoot();
      const folderNum = getNextNumber(root, "", true);
      const fullFolderName = `${folderNum}-${folderName}`;
      
      await vault.createFolder(fullFolderName);
      new Notice(`Folder created: ${fullFolderName}`, 3000);

      // Ask if user wants to create note
      const createNow = await systemApi.suggester(
        ["Yes, create note now", "No, just the folder"],
        [true, false]
      );

      if (createNow) {
        const newFolder = vault.getAbstractFileByPath(fullFolderName);
        await createNote(newFolder, null); // No template for new folders
      }
    }

  } catch (error) {
    console.error("Dynamic folder creation error:", error);
    new Notice("Error occurred. Check console.", 5000);
  }

  return "";
}

module.exports = dynamicFolderCreation;
