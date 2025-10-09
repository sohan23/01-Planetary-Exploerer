<%*
// Use the folder selection and auto-numbering script with template selection
const result = await tp.user.createNoteWithFolderSelection(tp);

// If user cancelled, stop
if (!result) {
  new Notice("Note creation cancelled");
  return;
}

// Create the new file in the target folder
const targetFolder = app.vault.getAbstractFileByPath(result.targetFolder);
let newFile;
let content;

if (result.template) {
  // User selected a template - read its content
  const templateFile = app.vault.getAbstractFileByPath(result.template);
  
  if (templateFile) {
    let templateContent = await app.vault.read(templateFile);
    
    // Detect Earth Science discipline from folder path
    const folder = result.targetFolder.toLowerCase();
    let discipline = "earth-science";
    let disciplineName = "Earth Science";
    
    if (folder.includes("mineralogy")) { discipline = "mineralogy-petrology"; disciplineName = "Mineralogy and Petrology"; }
    else if (folder.includes("structural")) { discipline = "structural-geology"; disciplineName = "Structural Geology and Geotectonics"; }
    else if (folder.includes("sedimentology")) { discipline = "sedimentology-stratigraphy"; disciplineName = "Sedimentology and Stratigraphy"; }
    else if (folder.includes("paleontology")) { discipline = "paleontology"; disciplineName = "Paleontology"; }
    else if (folder.includes("geochemistry")) { discipline = "geochemistry"; disciplineName = "Geochemistry"; }
    else if (folder.includes("geophysics")) { discipline = "geophysics"; disciplineName = "Geophysics"; }
    else if (folder.includes("geomorphology")) { discipline = "geomorphology"; disciplineName = "Geomorphology"; }
    else if (folder.includes("hydrogeology")) { discipline = "hydrogeology"; disciplineName = "Hydrogeology"; }
    else if (folder.includes("economic")) { discipline = "economic-geology"; disciplineName = "Economic Geology"; }
    else if (folder.includes("quaternary")) { discipline = "quaternary-geology"; disciplineName = "Quaternary Geology"; }
    else if (folder.includes("precambrian")) { discipline = "precambrian-geology"; disciplineName = "Precambrian Geology"; }
    else if (folder.includes("marine geology")) { discipline = "marine-geology"; disciplineName = "Marine Geology"; }
    else if (folder.includes("paleooceanography")) { discipline = "paleooceanography"; disciplineName = "Paleooceanography"; }
    else if (folder.includes("oceanography")) { discipline = "oceanography"; disciplineName = "Oceanography"; }
    else if (folder.includes("atmospheric")) { discipline = "atmospheric-sciences"; disciplineName = "Atmospheric Sciences"; }
    else if (folder.includes("geography")) { discipline = "geography-india"; disciplineName = "Geography of India"; }
    
    // Detect project type for programming folders
    let projectType = "";
    let language = "";
    if (folder.includes("python")) { language = "python"; projectType = "python"; }
    else if (folder.includes("machine learning")) { language = "python"; projectType = "machine-learning"; }
    else if (folder.includes("programming")) { language = "python"; projectType = "programming"; }
    
    // Replace template placeholders with actual values
    templateContent = templateContent
      .replace(/{{title}}/g, result.cleanTitle)
      .replace(/{{date}}/g, tp.date.now("YYYY-MM-DD"))
      .replace(/{{time}}/g, tp.date.now("HH:mm"))
      .replace(/{{discipline}}/g, discipline)
      .replace(/{{disciplineName}}/g, disciplineName)
      .replace(/{{language}}/g, language)
      .replace(/{{projectType}}/g, projectType)
      .replace(/{{priority}}/g, "medium");
    
    content = templateContent;
  } else {
    // Template not found, use basic content
    content = `---
title: ${result.fullTitle}
aliases:
  - ${result.cleanTitle}
tags: 
date: ${tp.date.now("YYYY-MM-DD")}
cssclasses: 
---

# ${result.cleanTitle}


`;
  }
} else {
  // No template selected - create with basic frontmatter
  content = `---
title: ${result.fullTitle}
aliases:
  - ${result.cleanTitle}
tags: 
date: ${tp.date.now("YYYY-MM-DD")}
cssclasses: 
---

# ${result.cleanTitle}


`;
}

// Create the file with content
newFile = await tp.file.create_new(content, result.fullTitle, false, targetFolder);

if (newFile) {
  await app.workspace.getLeaf(false).openFile(newFile);
  const templateName = result.template ? result.template.split('/').pop().replace('.md', '') : 'blank note';
  new Notice(`Created "${result.fullTitle}" using ${templateName}`);
}
-%>





