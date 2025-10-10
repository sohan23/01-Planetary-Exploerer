# Unified Note Creation Workflow Guide

## Overview

The `dynamicFolderCreation.js` script now provides a **complete unified workflow** for creating notes with automatic template selection.

---

## 🎯 The Workflow

### When you press your hotkey (e.g., `Alt+N`):

```
1. Type folder keyword (e.g., "Earth", "Python", "Ideas")
   ↓
2. Script searches all folders
   ↓
3a. FOUND? → Shows matching folders
    → You select one
    → Confirm: "Yes" or "No"
    ↓
    YES → Auto-selects template → Creates note ✅
    ↓
    NO → Go to Step 4
   
3b. NOT FOUND? → Go to Step 4
   ↓
4. Choose action:
   - 📁 Manually select existing folder → Creates note with template
   - ➕ Create new folder at root → Optionally create note
   - ❌ Cancel
```

---

## 📋 Examples

### Example 1: Creating an Earth Science Note

```
1. Press Alt+N
2. Type: "Earth"
3. Script shows: "01-Areas/01-01-Earth Science/"
4. Select it
5. Confirm: "✅ Yes, use: 01-Areas/01-01-Earth Science/"
6. Script auto-selects: "01-Earth Science Note.md" template
7. Enter note title: "Plate Tectonics"
8. Note created: "01-01-XX-Plate Tectonics.md" (with full template)
```

### Example 2: Creating a Python Note

```
1. Press Alt+N
2. Type: "Python"
3. Script shows: "01-Areas/01-02-Programming/01-02-01-Python/"
4. Select it
5. Confirm: "✅ Yes"
6. Script auto-selects: "02-Programming Learning Note.md"
7. Enter title: "List Comprehensions"
8. Note created: "01-02-01-XX-List Comprehensions.md"
```

### Example 3: Folder Not Found

```
1. Press Alt+N
2. Type: "Geology" (keyword not found)
3. Script shows:
   - 📁 Manually select existing folder
   - ➕ Create new folder at root
   - ❌ Cancel
4. Choose "Manually select"
5. Browse and select: "01-Areas/01-01-Earth Science/"
6. Template auto-selected, note created
```

### Example 4: Creating New Folder

```
1. Press Alt+N
2. Type: "Projects" (not found)
3. Choose: "➕ Create new folder at root"
4. Enter folder name: "Projects"
5. Folder created: "07-Projects" (auto-numbered)
6. Prompt: "Create note now?"
7. If Yes → Enter title → Basic note created
```

---

## 🗂️ Auto-Template Selection

The script automatically selects templates based on folder path:

| Folder Contains                | Template Used                     |
|--------------------------------|-----------------------------------|
| `Earth Science`                | `01-Earth Science Note.md`        |
| `Python` or `Machine Learning` | `02-Programming Learning Note.md` |
| `Project Documentation`        | `03-Project Documentation.md`     |
| `Interview`                    | `04-Interview Question.md`        |
| `Ideas`                        | `05-Ideas.md`                     |
| `Daily Notes`                  | `06-Daily Note.md`                |
| `Weekly`                       | `07-Weekly Note.md`               |
| `Long Form`                    | `08-Long Form Reflection.md`      |

---

## ⚙️ Setup

### 1. Bind Hotkey

**Option A: Direct Script Binding (Recommended)**
- Go to Obsidian Settings → Hotkeys
- Search for "Templater: Run user script"
- Assign: `Alt+N` (or your preferred hotkey)
- When you press it, select `dynamicFolderCreation` from the modal

**Option B: Custom Hotkey Plugin**
- Install a plugin that allows direct script binding
- Bind `Alt+N` directly to `dynamicFolderCreation.js`
- This eliminates the modal selection step

### 2. Verify Templater Settings

**Settings → Templater**:
- ✅ Script files folder location: `99-Meta/99-01-Scripts`
- ✅ Template folder location: `99-Meta/99-02-Templates`
- ✅ Enable System Commands: ON

---

## ✨ Key Features

### 1. **Keyword Search**
- Type partial folder names (e.g., "Earth", "Ideas", "Python")
- Searches both folder names and full paths
- Case-insensitive matching

### 2. **Confirmation Step**
- Always confirms before creating note
- Prevents accidental selections
- "Yes" = proceed, "No" = show other options

### 3. **Auto-Template Selection**
- No manual template selection needed
- Script intelligently matches folder to template
- Falls back to basic note if no template mapped

### 4. **Auto-Numbering**
- Both folders and notes are auto-numbered
- Follows hierarchical pattern (01-02-03)
- Calculates next available number automatically

### 5. **Flexible Fallbacks**
- Keyword not found? → Manual selection available
- Need new folder? → Create at root
- No template? → Basic note created anyway

---

## 🔧 Customization

### Adding New Template Mappings

Edit `dynamicFolderCreation.js`, find the `TEMPLATE_MAP`:

```javascript
const TEMPLATE_MAP = {
  "Your-Folder-Path": "YourTemplate.md",
  // Add more mappings here
};
```

### Changing Search Behavior

Find the `searchFolders()` function to modify search logic:

```javascript
function searchFolders(keyword, folders) {
  const lower = keyword.toLowerCase();
  return folders.filter(f =>
    f.path.toLowerCase().includes(lower) ||
    f.name.toLowerCase().includes(lower)
    // Add more search conditions here
  );
}
```

---

## 🐛 Troubleshooting

### Issue: Template not loading
**Check**:
1. Template exists in `99-Meta/99-02-Templates/`
2. Template name matches exactly in `TEMPLATE_MAP`
3. Template file is valid Markdown

### Issue: Wrong template selected
**Cause**: Folder path doesn't match any pattern in `getTemplateForFolder()`  
**Solution**: Add your folder pattern to the function

### Issue: Numbering incorrect
**Cause**: Existing files have non-standard numbering  
**Solution**: Script calculates based on highest number found. Check for gaps or duplicates

### Issue: Script shows "undefined" or errors
**Cause**: Templater not configured properly  
**Solution**: Check Settings → Templater → Script files folder location

---

## 💡 Tips

1. **Use Short Keywords**: Type "Earth" instead of full path
2. **Consistent Naming**: Keep folder names descriptive for better matching
3. **Template Customization**: Edit templates to fit your workflow
4. **Backup First**: Always have backups before testing scripts
5. **Check Console**: Press `Ctrl+Shift+I` to see error messages if something fails

---

## 📊 Workflow Comparison

### Old Workflow (Multiple Steps)
```
1. Navigate to folder manually
2. Create new note
3. Select template manually
4. Wait for template to load
5. Rename file with numbering
6. Move to correct location
```

### New Workflow (One Hotkey)
```
1. Press Alt+N
2. Type keyword
3. Confirm
4. Enter title
✅ Done!
```

---

**Version**: 3.0.0  
**Last Updated**: 2025-10-10  
**Script**: `dynamicFolderCreation.js`
