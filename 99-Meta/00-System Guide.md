# Template & Script System Guide

## Overview

This vault now has a complete auto-numbering system for both folders and notes. All scripts and templates follow the hierarchical numbering convention.

---

## 📁 Scripts (`99-Meta/99-01-Scripts/`)

### 1. `dynamicFolderCreation.js`
**Purpose**: Creates new numbered folders anywhere in the vault  
**Hotkey**: Set up your own (e.g., `Ctrl+Shift+F`)  

**How it works**:
1. Shows list of all folders + "(Root)" option
2. You select where to create the new folder
3. Prompts for folder name
4. Automatically calculates the next number
5. Creates folder with format: `NN-FolderName`

**Example**:
- Parent: `01-Areas`
- Existing: `01-01-Earth Science`, `01-02-Programming`
- New: `01-03-Your New Folder`

---

### 2. `autoNumberedNoteCreation.js`
**Purpose**: Core script used by ALL templates for note creation  
**Do NOT bind to a hotkey** - Templates call this automatically  

**How it works**:
1. Shows list of all folders
2. You select target folder
3. Prompts for note title
4. Returns data to template (title, number, folder path)
5. Template handles file creation and formatting

---

### 3. `dynamicNoteCreation.js`
**Purpose**: Combined note creation (includes folder creation option)  
**Status**: Alternative workflow - can be ignored if using templates  

---

## 📝 Templates (`99-Meta/99-02-Templates/`)

### Template Mapping by Folder

| Folder                            | Template                          | Use Case                              |
|-----------------------------------|-----------------------------------|---------------------------------------|
| `01-01-Earth Science/`            | `01-Earth Science Note.md`        | Geology, climate, oceanography topics |
| `01-02-01-Python/`                | `02-Programming Learning Note.md` | Python concepts, syntax, examples     |
| `01-02-02-Machine Learning/`      | `02-Programming Learning Note.md` | ML algorithms, implementations        |
| `01-02-03-Project Documentation/` | `03-Project Documentation.md`     | Software projects, documentation      |
| `01-03-Interview Preparation/`    | `04-Interview Question.md`        | Interview prep, questions, answers    |
| `03-Ideas/`                       | `05-Ideas.md`                     | Brainstorming, concepts, plans        |
| `05-01-Daily Notes/`              | `06-Daily Note.md`                | Daily journaling                      |
| `05-02-Weekly Reviews/`           | `07-Weekly Note.md`               | Weekly reflections                    |
| `05-03-Long Form Reflections/`    | `08-Long Form Reflection.md`      | Deep thoughts, long essays            |

---

## 🚀 How to Use

### Creating a New Note

**Method 1: Using Templates (Recommended)**

1. Press your template hotkey (e.g., `Ctrl+N` or `Alt+T`)
2. Select the appropriate template from the list
3. Script prompts: "Select folder" → Choose your target folder
4. Script prompts: "Enter note title" → Type your title
5. Note is automatically created with proper numbering

**Example Workflow - Earth Science Note**:
```
1. Press Ctrl+N
2. Select "01-Earth Science Note"
3. Select folder: "01-Areas/01-01-Earth Science/"
4. Enter title: "Plate Tectonics"
5. Created: "01-01-XX-Plate Tectonics.md" (XX = next available number)
```

**Method 2: Direct Script Execution**

If you prefer the older combined workflow:
1. Bind `dynamicNoteCreation.js` to a hotkey
2. Choose existing folder OR create new folder
3. Enter note title
4. Note is created

---

### Creating a New Folder

1. Bind `dynamicFolderCreation.js` to a hotkey (e.g., `Ctrl+Shift+F`)
2. Press the hotkey
3. Select parent folder (or Root)
4. Enter folder name
5. Folder is created with proper numbering

**Example**:
```
Parent: "01-Areas/"
Existing children: 01-01, 01-02, 01-03
New folder: "01-04-Your New Area"
```

---

## ⚙️ Setup Instructions

### 1. Configure Templater Plugin

**Settings → Templater**:
- ✅ Enable Templater
- Template folder location: `99-Meta/99-02-Templates`
- Script files folder location: `99-Meta/99-01-Scripts`
- ✅ Trigger Templater on new file creation: OFF
- ✅ Enable System Commands: ON

### 2. Set Up Hotkeys

**Settings → Hotkeys**:

**For Templates** (Recommended):
- Search: "Templater: Create new note from template"
- Assign hotkey: `Ctrl+N` or `Alt+N`

**For Folder Creation**:
- Search: "Templater: Open user script modal"
- Assign hotkey: `Ctrl+Shift+F`
- When modal opens, select `dynamicFolderCreation`

**Alternative - Direct Script Binding**:
- Some community plugins allow direct script binding
- This eliminates the script selection step

---

## 📋 Template Details

### 01-Earth Science Note
- **Purpose**: Geology, climate, oceanography topics
- **Features**: Concept breakdown, real-world applications, related topics
- **Status Tracking**: 🌱 Seedling → 🌿 Budding → 🌳 Evergreen

### 02-Programming Learning Note
- **Purpose**: Code learning (Python, ML, etc.)
- **Features**: Syntax examples, use cases, mistakes, best practices
- **Status Tracking**: 📝 Learning → ✅ Understood → 🚀 Mastered

### 03-Project Documentation
- **Purpose**: Software project planning and documentation
- **Features**: Goals, tech stack, implementation plan, code snippets
- **Status Tracking**: 🔵 Planning → 🟡 In Progress → 🟢 Complete

### 04-Interview Question
- **Purpose**: Interview preparation
- **Features**: STAR method, technical approach, code solutions
- **Status Tracking**: 📝 Preparing → 🟢 Ready

### 05-Ideas
- **Purpose**: Brainstorming and ideation
- **Features**: Core concept, applications, implementation thoughts
- **Status Tracking**: 💡 Idea → 📋 Planned → 🚀 In Progress → ✅ Done

### 06-Daily Note
- **Purpose**: Daily journaling
- **Features**: Morning routine, priorities, reflection
- **Auto-dates**: Uses today's date automatically

### 07-Weekly Note
- **Purpose**: Weekly reviews
- **Features**: Accomplishments, learning highlights, goals review
- **Auto-dates**: Uses current week number

### 08-Long Form Reflection
- **Purpose**: Deep thoughts and long-form writing
- **Features**: Minimalistic structure (Thoughts, Insights, Notes)

---

## 🔢 Numbering Logic

### Folder Numbering
- **Root level**: `01-`, `02-`, `03-`, etc.
- **First sublevel**: `01-01-`, `01-02-`, `01-03-`
- **Second sublevel**: `01-01-01-`, `01-01-02-`
- Pattern: Extends parent prefix with new number

### Note Numbering
- **In numbered folder**: Inherits folder prefix
- Example: Folder `01-01-Earth Science/` → Note `01-01-XX-NoteName`
- **In unnumbered folder**: Starts at `01-`, `02-`, etc.

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'autoNumberedNoteCreation'"
**Solution**: Check Templater settings → Script files folder location is set to `99-Meta/99-01-Scripts`

### Issue: Template doesn't prompt for folder
**Solution**: Template file might be corrupted. Re-check the `<%* ... %>` code block at the top

### Issue: Note created in wrong location
**Solution**: The script moves the file AFTER creation. Wait for the move operation to complete

### Issue: Numbering is incorrect
**Solution**: Script calculates based on existing files. Check for gaps or duplicates in folder

---

## 💡 Tips

1. **Template Selection**: Keep template names descriptive for quick identification
2. **Folder Organization**: Create folders before creating many notes (easier workflow)
3. **Status Tracking**: Use emoji status fields to visualize progress
4. **Linking**: Templates include link sections - use them to build your knowledge graph
5. **Customization**: Edit templates to match your personal workflow

---

## 📚 Further Customization

### Adding a New Template

1. Create new file in `99-Meta/99-02-Templates/`
2. Copy the structure from an existing template
3. Ensure it calls `tp.user.autoNumberedNoteCreation(tp)`
4. Ensure it moves file: `await tp.file.move(\`${result.folderPath}/${result.fullTitle}\`);`
5. Customize the frontmatter and body

### Modifying Numbering Logic

Edit `autoNumberedNoteCreation.js`:
- `getNumberPrefix()`: Changes prefix extraction pattern
- `getNextNumber()`: Changes numbering calculation
- Both folder and note creation use similar logic

---

**Version**: 1.0.0  
**Last Updated**: 2025-10-10  
**Maintained by**: GitHub Copilot
