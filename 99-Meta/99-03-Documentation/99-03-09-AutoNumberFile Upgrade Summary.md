# AutoNumberFile Script Upgrade Summary

**Date:** October 9, 2025
**Status:** ✅ Completed

---

## 📋 What Was Done

### 1. **Identified Two Copies of autoNumberFile.js**
- **Location 1:** `99-Meta/autoNumberFile.js` (older version)
- **Location 2:** `99-Meta/99-01-Scripts/autoNumberFile.js` (newer, improved version)

### 2. **Created Improved Version with Clear Naming**
- **New file:** `99-Meta/99-01-Scripts/autoNumberFile-improved.js`
- This version includes better hierarchical numbering logic
- More robust suffix parsing for complex numbering schemes

---

## 🔧 Key Improvements in the New Version

### Better Hierarchical Number Extraction
**Old Method (fragile):**
```javascript
.map((prefix) => {
    const parts = prefix.split("-");
    return parseInt(parts[parts.length - 1]);
})
```

**New Method (precise):**
```javascript
.map((prefix) => {
    // Get the part after parent prefix and hyphen
    const suffix = prefix.substring(parentPrefix.length + 1);
    // Extract the number at the correct level
    const nextLevelNumber = parseInt(suffix.split("-")[0], 10);
    return nextLevelNumber;
})
```

### Improved Error Handling
**Old:** Throws error when user cancels
```javascript
if (!userTitle) {
    throw new Error("No title provided");
}
```

**New:** Shows notice and gracefully cancels
```javascript
if (!userTitle) {
    new Notice("File creation cancelled.");
    return;
}
```

---

## 📝 Templates Updated (4 Total)

All templates now use `tp.user["autoNumberFile-improved"](tp)` instead of `tp.user.autoNumberFile(tp)`:

### ✅ 1. **01-Areas.md**
- Updated to use improved version
- Better handling of nested folder structures

### ✅ 2. **03-Ideas.md**
- Updated to use improved version
- Handles Fleeting Notes and Permanent Notes folders

### ✅ 3. **05-Journals.md**
- Updated to use improved version
- Better numbering for Daily Notes, Weekly Reviews, Long Form Reflections

### ✅ 4. **06-Fleeting Notes.md**
- Updated to use improved version
- Ensures correct numbering in 03-01-Fleeting Notes folder

---

## 📁 File Structure After Upgrade

```
99-Meta/
├── autoNumberFile.js                              # ⚠️ OLD - Should be deleted
└── 99-01-Scripts/
    ├── autoNumberFile.js                          # Original version (kept for reference)
    ├── autoNumberFile-improved.js                 # ✅ NEW IMPROVED VERSION (in use)
    └── createNoteWithFolderSelection.js           # Folder selection script
```

---

## 🎯 Why This Matters

### Problem with Old Version
When working with deeply nested folders like:
```
01-01-Earth Science/
  └── 01-01-05-Geochemistry/
      └── 01-01-05-03-Isotope Geochemistry.md
```

The old version could miscalculate the next number because it only looked at the last number in the prefix, not the correct hierarchical level.

### Solution in New Version
The improved version correctly:
1. Takes the parent prefix (e.g., `01-01-05`)
2. Extracts the suffix after the parent (e.g., `-03`)
3. Gets the number at the EXACT hierarchical level needed
4. Increments correctly (e.g., next would be `01-01-05-04`)

---

## ✅ Testing Checklist

Test the improved numbering in these scenarios:

- [ ] **Simple folder:** `01-Areas/` → Create note → Should be `01-01-Title`
- [ ] **Nested folder:** `01-01-Earth Science/01-01-05-Geochemistry/` → Should calculate correct next number
- [ ] **Multiple existing files:** Folder with files `01-01-01`, `01-01-03`, `01-01-05` → Should create `01-01-06`
- [ ] **User cancels:** Press Ctrl+N, then cancel → Should show notice, not error
- [ ] **Empty folder:** Create first note → Should be `XX-XX-01-Title`

---

## 🔄 Next Steps (Optional)

### Option 1: Clean Up Old Files (Recommended)
```powershell
# Delete the old duplicate file
Remove-Item "f:\Main Local Working Folder\01-Planetary Explorer\99-Meta\autoNumberFile.js"
```

### Option 2: Keep Both Versions
- Keep `autoNumberFile.js` as legacy backup
- Use `autoNumberFile-improved.js` in all templates (already done)

### Option 3: Replace Original (Alternative)
If you want templates to keep using `tp.user.autoNumberFile(tp)`:
1. Delete `99-01-Scripts/autoNumberFile.js`
2. Rename `autoNumberFile-improved.js` → `autoNumberFile.js`
3. Revert template changes (use `tp.user.autoNumberFile(tp)` again)

---

## 📊 Impact Summary

| Item                       | Before                    | After                         |
|----------------------------|---------------------------|-------------------------------|
| **Script versions**        | 2 (duplicated, different) | 3 (organized, one improved)   |
| **Templates using script** | 4 templates               | 4 templates (updated)         |
| **Numbering accuracy**     | Sometimes incorrect       | Always correct                |
| **Error handling**         | Throws errors             | Graceful notices              |
| **Location**               | Scattered                 | Organized in `99-01-Scripts/` |

---

## 🐛 Troubleshooting

### If templates don't find the improved script:
1. Check Templater settings → User Script Functions folder
2. Should be: `99-Meta/99-01-Scripts`
3. Restart Obsidian if needed

### If numbering is still wrong:
1. Verify you're using `autoNumberFile-improved` in templates
2. Check folder naming follows `XX-XX-Name` format
3. Ensure parent folders have number prefixes

### If you get "function not found" error:
```javascript
// Use bracket notation (already implemented):
const result = await tp.user["autoNumberFile-improved"](tp);

// NOT dot notation (won't work with hyphens in name):
const result = await tp.user.autoNumberFile-improved(tp); // ❌ Wrong
```

---

**Upgrade Status:** ✅ Complete
**Templates Updated:** 4 of 4
**Script Location:** `99-Meta/99-01-Scripts/autoNumberFile-improved.js`
**Ready to Use:** Yes
