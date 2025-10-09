# Quick Create Note with Folder Selection - Setup Guide

## What This Does
This system allows you to press `Ctrl+N`, search for a folder by typing part of its name (like "Zotero"), select it, and create a properly numbered note in that folder automatically.

## Setup Steps

### 1. Install Templater Plugin (if not already installed)
- Go to **Settings → Community Plugins**
- Search for "Templater"
- Install and enable it

### 2. Configure Templater

#### Set Script Folder
- Go to **Settings → Templater → User Scripts**
- Set folder location: `99-Meta/99-01-Scripts`

#### Set Template Folder
- Go to **Settings → Templater → Template Folder**
- Set folder location: `99-Meta/99-02-Templates`

#### Enable Trigger on New File
- Go to **Settings → Templater → Trigger Templater on new file creation**
- **Enable this option**
- In "Folder Template" settings, click **+ Add New**
  - **Folder**: `/` (root, to apply to all folders)
  - **Template**: `99-Meta/99-02-Templates/00-Quick Create with Folder Selection.md`

### 3. Optional: Create a Hotkey
- Go to **Settings → Hotkeys**
- Search for "Templater: Create new note from template"
- Assign a hotkey (e.g., `Ctrl+Shift+N`)
- This allows you to quickly invoke a specific template

## How to Use

### Method 1: Using Ctrl+N (Automatic)
1. Press `Ctrl+N` to create a new note anywhere
2. The script will automatically trigger and ask: **"Enter folder name or part of path"**
3. Type a search term, examples:
   - Type `"Zotero"` → finds `02-Research/02-01-Scientific Research Paper/02-01-Zotero`
   - Type `"Earth"` → finds `01-Areas/01-01-Earth Science`
   - Type `"Fleeting"` → finds `03-Ideas/03-01-Fleeting Notes`
4. If multiple folders match, select from the list
5. If only one matches, confirm with "yes"
6. Enter the file name (without numbers)
7. File is created with proper numbering in the selected folder!

### Method 2: Using the Template Directly
1. Click the Templater icon in the sidebar (or use hotkey)
2. Select `00-Quick Create with Folder Selection`
3. Follow the same prompts as above

## Examples

### Example 1: Creating in Zotero Folder
```
1. Press Ctrl+N
2. Type: "Zotero"
3. Confirms: "02-Research/02-01-Scientific Research Paper/02-01-Zotero"
4. Type file name: "Climate Change Study"
5. Creates: "02-01-04-Climate Change Study.md" in Zotero folder
   (assuming 02-01-03 was the last file)
```

### Example 2: Creating in Earth Science
```
1. Press Ctrl+N
2. Type: "Geology"
3. Suggests: "01-Areas/01-01-Earth Science/01-01-01-Main Notes/01-01-01-01-Geology.md"
4. Select the parent folder (not the .md file)
5. Type file name: "Volcanic Activity"
6. Creates: "01-01-01-01-02-Volcanic Activity.md"
```

### Example 3: Creating in Fleeting Notes
```
1. Press Ctrl+N
2. Type: "Fleeting"
3. Confirms: "03-Ideas/03-01-Fleeting Notes"
4. Type file name: "Random Thought About Mars"
5. Creates: "03-01-03-Random Thought About Mars.md"
```

## Features

✅ **Smart Folder Search** - Type partial folder names
✅ **Automatic Numbering** - Finds the next available number
✅ **Multiple Matches** - Shows a picker if multiple folders match
✅ **Single Match** - Quick confirmation for exact matches
✅ **Cancellable** - Can cancel at any step
✅ **Works with all numbered folders** - 01-XX, 02-XX-XX, etc.

## Troubleshooting

### "Folder doesn't have a number prefix"
- Make sure the selected folder has a number prefix like `01-FolderName`
- All folders in your system should follow this pattern

### Template doesn't trigger on Ctrl+N
- Check that "Trigger Templater on new file creation" is enabled
- Make sure folder template is set to `/` with the correct template

### Can't find script functions
- Verify script folder is set to `99-Meta/99-01-Scripts`
- Make sure script files exist in that folder
- Try reloading Obsidian

### Script errors
- Open Developer Console (Ctrl+Shift+I)
- Check for JavaScript errors
- Ensure both script files are present:
  - `autoNumberFile.js`
  - `createNoteWithFolderSelection.js`

## Advanced: Creating Different Template Types

You can create variations of this template for different purposes:

### For Research Notes
Copy the template and modify the frontmatter to include research-specific fields

### For Quick Fleeting Notes
Create a minimal version with less frontmatter

### For Zotero Integration
Combine with the Zotero template for automatic citation imports

## Files Created

1. **Script**: `99-Meta/99-01-Scripts/createNoteWithFolderSelection.js`
2. **Template**: `99-Meta/99-02-Templates/00-Quick Create with Folder Selection.md`
3. **This Guide**: For reference

Enjoy your streamlined note-taking workflow! 🚀
