# Zotero Configuration Fix Summary

**Date:** October 9, 2025
**Issue:** Zotero imports not working + numbering discrepancy

---

## 🔍 **Problems Found:**

### 1. Folder Path Issues
- ❌ Zotero config pointed to old folder names
- ❌ Folders didn't follow hierarchical numbering convention

### 2. Numbering Discrepancy
- **Folder:** `02-01-01-Zotero/`
- **Files:** `02-01-Integration...`, `02-02-A review...`
- ❌ Files didn't match folder prefix (02-01-01-XX)

### 3. Template Issues
- ❌ Research Notes template used wrong prefix (`02-XX` instead of `02-01-01-XX`)
- ❌ Template searched entire vault instead of just Zotero folder

---

## ✅ **Fixes Applied:**

### 1. **Renamed Folders**
- ✅ `02-01-Zotero/` → `02-01-01-Zotero/`
- ✅ `02-02-Permanent Notes/` → `02-01-02-Literature Notes/`

### 2. **Renamed Existing Zotero Files**
- ✅ `02-01-Integration...` → `02-01-01-01-Integration...`
- ✅ `02-02-A review...` → `02-01-01-02-A review...`

### 3. **Updated Zotero Plugin Configuration**
Updated `.obsidian/plugins/obsidian-zotero-desktop-connector/data.json`:
```json
{
  "noteImportFolder": "02-Research/02-01-Scientific Research Paper/02-01-01-Zotero/",
  "outputPathTemplate": "02-Research/02-01-Scientific Research Paper/02-01-01-Zotero/{{citekey}}.md",
  "imageOutputPathTemplate": "06-Media/06-01-Images/06-01-03-Zotero Attachments/{{citekey}}/",
  "templatePath": "99-Meta/99-02-Templates/99-02-02-Research Notes.md"
}
```

### 4. **Updated Research Notes Template**
Changed auto-numbering logic in `99-02-02-Research Notes.md`:
- ✅ Changed prefix from `02` to `02-01-01`
- ✅ Changed to search only current folder (Zotero folder) instead of entire vault
- ✅ New imports will be numbered: `02-01-01-03`, `02-01-01-04`, etc.

### 5. **Created Media Folder**
- ✅ Created `06-Media/06-01-Images/06-01-03-Zotero Attachments/` for PDF images

---

## 📁 **Final Folder Structure:**

```
02-Research/
└── 02-01-Scientific Research Paper/
    ├── 02-01-01-Zotero/                              ← Zotero imports
    │   ├── 02-01-01-01-Integration of Google...      ← Proper numbering
    │   └── 02-01-01-02-A review of the potential...  ← Proper numbering
    │
    ├── 02-01-02-Literature Notes/                    ← Your reading notes
    │   └── (your literature notes go here)
    │
    └── 02-01-03-Synthesis Notes/                     ← Combined insights
        └── (synthesis notes go here)

06-Media/
└── 06-01-Images/
    └── 06-01-03-Zotero Attachments/                  ← PDF annotations/images
        └── (Zotero PDF images go here)
```

---

## 🎯 **Numbering Convention:**

### **Hierarchical Numbering Explained:**

**Folder:** `02-01-01-Zotero/`
- `02` = Research (top level)
- `01` = Scientific Research Paper
- `01` = Zotero (subfolder)

**Files:** `02-01-01-XX-Title`
- `02-01-01` = Inherits from folder prefix
- `XX` = Sequential number (01, 02, 03...)
- `Title` = Paper title from Zotero

### **Example:**
```
02-01-01-Zotero/
├── 02-01-01-01-Integration of Google Earth Engine...
├── 02-01-01-02-A review of the potential impacts...
├── 02-01-01-03-Next paper title...  ← Future imports
└── 02-01-01-04-Another paper...     ← Future imports
```

---

## 🧪 **How to Test:**

1. **Restart Obsidian** to reload plugin configuration
2. **Open Zotero Desktop** application
3. **Import a test paper:**
   - In Obsidian: Ctrl+Shift+P → "Zotero: Import"
   - Select a paper from your library
4. **Verify:**
   - ✅ Note created in `02-01-01-Zotero/`
   - ✅ Filename starts with `02-01-01-03-` (next number)
   - ✅ PDF images saved to `06-01-03-Zotero Attachments/`

---

## 📝 **How Auto-Numbering Works Now:**

### **Template Logic:**
1. Sets prefix: `02-01-01`
2. Gets current folder (Zotero folder)
3. Scans files in that folder only
4. Finds highest number after `02-01-01-XX`
5. Increments by 1
6. Creates filename: `02-01-01-{next}-{sanitized title}`

### **Example Workflow:**
- **Current files:** `02-01-01-01`, `02-01-01-02`
- **Template finds:** Highest = 02
- **Next number:** 03
- **New file:** `02-01-01-03-Your Paper Title.md`

---

## 🔄 **Research Workflow (Zettelkasten):**

### **Phase 1: Import (Zotero)**
📥 **Folder:** `02-01-01-Zotero/`
- Import research papers directly from Zotero
- Files numbered: `02-01-01-XX-Title`
- Contains: Citation, abstract, PDF annotations

### **Phase 2: Literature Notes**
📝 **Folder:** `02-01-02-Literature Notes/`
- Your notes and thoughts on papers
- Files can reference Zotero imports: `[[02-01-01-01-Integration...]]`
- Files numbered: `02-01-02-XX-Note Title`

### **Phase 3: Synthesis Notes**
🔗 **Folder:** `02-01-03-Synthesis Notes/`
- Combine insights from multiple papers
- Files numbered: `02-01-03-XX-Synthesis Topic`
- Links to multiple literature notes

### **Phase 4: Content Creation**
🎬 **Folders:** `02-02-01-YouTube/` or `02-02-02-Blog/`
- Turn research into videos or blog posts
- Reference your synthesis notes

---

## ⚙️ **Zotero Plugin Settings:**

### **Current Configuration:**
- **Import Folder:** `02-01-01-Zotero/`
- **Template:** `99-02-02-Research Notes.md`
- **Image Folder:** `06-01-03-Zotero Attachments/`
- **Cite Format:** APA
- **Auto-open:** Last imported note

### **To Change Settings:**
1. Settings → Community Plugins → Zotero Desktop Connector
2. Modify paths if needed (but current setup is correct!)

---

## 🐛 **Troubleshooting:**

### **If import fails:**
1. Check Zotero Desktop is running
2. Restart Obsidian
3. Verify folders exist:
   - `02-01-01-Zotero/`
   - `06-01-03-Zotero Attachments/`

### **If numbering is wrong:**
1. Check existing files in Zotero folder
2. Template will find highest number and increment
3. Manual fix: Rename file to correct number

### **If template not found:**
1. Check template exists: `99-02-02-Research Notes.md`
2. Check path in Zotero settings
3. Restart Obsidian

---

## 📊 **Before vs After:**

| Aspect              | Before                 | After              |
|---------------------|------------------------|--------------------|
| **Folder name**     | `02-01-Zotero/`        | `02-01-01-Zotero/` |
| **File numbering**  | `02-01-XX`, `02-02-XX` | `02-01-01-XX`      |
| **Template prefix** | `02`                   | `02-01-01`         |
| **Search scope**    | Entire vault           | Zotero folder only |
| **Consistency**     | ❌ Mismatched           | ✅ Consistent       |

---

## ✅ **Status:**

- ✅ Folders renamed and properly numbered
- ✅ Existing files renamed to match convention
- ✅ Zotero plugin configuration updated
- ✅ Template updated with correct numbering
- ✅ Media folder created for attachments
- ✅ Ready to import new papers!

---

**Next Import Will Be:** `02-01-01-03-{Your Next Paper Title}.md`

**Test by importing a paper from Zotero Desktop now!** 🎯
