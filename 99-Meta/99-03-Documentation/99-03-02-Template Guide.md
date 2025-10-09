# 📋 Obsidian Vault Structure & Template Guide

## 🔍 Current Structure Analysis

### ✅ Strengths
- Consistent numbering convention across all folders
- Clear separation of content types
- Well-organized meta folder with scripts and templates
- Good foundation for Zettelkasten-style note-taking

### ⚠️ Issues Found & Recommendations

#### 1. **Typo in Folder Name**
**Current:** `03-Ideas/03-02-Permenant Notes/`
**Fix:** Rename to `03-02-Permanent Notes`

#### 2. **Numbering Inconsistency**
**Current Structure:**
```
02-Research/
  └── 02-01-Scientific Research Paper/
      ├── 02-01-Zotero/           ❌ Should be 02-01-01-Zotero
      └── 02-02-Permanent Notes/  ❌ Should be 02-01-02-Permanent Notes
```

**Recommended Fix:**
- Rename `02-01-Zotero` → `02-01-01-Zotero`
- Rename `02-02-Permanent Notes` → `02-01-02-Permanent Notes`

#### 3. **Earth Science Folder - Too Deep**
**Current:**
```
01-01-Earth Science/
  └── 01-01-01-Main Notes/
      └── 01-01-01-01-Geology.md  ❌ Four levels deep
```

**Recommended:** Flatten structure
```
01-01-Earth Science/
  ├── 01-01-01-Geology/
  ├── 01-01-02-Geophysics/
  ├── 01-01-03-Mineralogy/
  └── 01-01-04-Resources/
```

---

## 🎯 Recommended Complete Structure

```
f:\Main Local Working Folder\01-Planetary Explorer\
│
├── 00-Maps of Content/
│   ├── 00-01-Main Index.md
│   ├── 00-02-Earth Science MOC.md
│   ├── 00-03-Programming MOC.md
│   └── 00-04-YouTube Content MOC.md
│
├── 01-Areas/  (Long-term responsibilities)
│   ├── 01-01-Earth Science/
│   │   ├── 01-01-01-Geology/
│   │   ├── 01-01-02-Geophysics/
│   │   ├── 01-01-03-Mineralogy/
│   │   ├── 01-01-04-Paleontology/
│   │   └── 01-01-05-Resources/
│   │
│   ├── 01-02-Programming/
│   │   ├── 01-02-01-Python/
│   │   ├── 01-02-02-JavaScript/
│   │   ├── 01-02-03-Web Development/
│   │   └── 01-02-04-Projects/
│   │
│   └── 01-03-Interview Preparation/
│       ├── 01-03-01-Technical Questions/
│       ├── 01-03-02-Behavioral Questions/
│       ├── 01-03-03-Practice Sessions/
│       └── 01-03-04-Company Research/
│
├── 02-Research/  (Deep work & study)
│   ├── 02-01-Scientific Papers/
│   │   ├── 02-01-01-Zotero Imports/
│   │   ├── 02-01-02-Literature Notes/
│   │   └── 02-01-03-Synthesis Notes/
│   │
│   └── 02-02-YouTube Scripts/
│       ├── 02-02-01-Published/
│       ├── 02-02-02-In Progress/
│       └── 02-02-03-Ideas/
│
├── 03-Ideas/  (Thoughts & brainstorming)
│   ├── 03-01-Fleeting Notes/
│   └── 03-02-Permanent Notes/
│
├── 04-Projects/  (NEW - Time-bound work)
│   ├── 04-01-Active/
│   ├── 04-02-Completed/
│   └── 04-03-On Hold/
│
├── 05-Media/  (NEW - Visual assets)
│   ├── 05-01-Images/
│   │   ├── 05-01-01-Diagrams/
│   │   ├── 05-01-02-Photos/
│   │   └── 05-01-03-Screenshots/
│   ├── 05-02-Videos/
│   └── 05-03-Audio/
│
├── 06-Journals/  (Personal reflection)
│   ├── 06-01-Daily Notes/
│   ├── 06-02-Weekly Reviews/
│   └── 06-03-Long Form Reflections/
│
├── 07-Archive/  (Completed/inactive content)
│   └── [Year-based organization]
│
└── 99-Meta/  (System files)
    ├── 99-01-Scripts/
    │   ├── autoNumberFile.js
    │   └── createNoteWithFolderSelection.js
    │
    ├── 99-02-Templates/
    │   ├── 00-Quick Create with Folder Selection.md
    │   ├── 01-Areas.md
    │   ├── 02-Research Notes Template.md
    │   ├── 03-Ideas.md
    │   ├── 05-Journals.md
    │   ├── 06-Fleeting Notes.md
    │   ├── 07-Earth Science Note.md (NEW)
    │   ├── 08-YouTube Script.md (NEW)
    │   ├── 09-Project Template.md (NEW)
    │   ├── 10-Daily Note.md (NEW)
    │   └── 11-Map of Content (MOC).md (NEW)
    │
    └── 99-03-Documentation/
        ├── Quick-Create-Setup-Guide.md
        └── Template-Guide.md (this file)
```

---

## 📝 Available Templates

### 1. **00-Quick Create with Folder Selection** ⭐
**Use Case:** General note creation with folder picker
**Hotkey:** `Ctrl+N` (auto-trigger)
**Best For:** Any quick note in any folder

### 2. **01-Areas**
**Use Case:** Notes in the Areas folder
**Best For:** Ongoing responsibilities and interests

### 3. **02-Research Notes Template**
**Use Case:** Zotero imports and research papers
**Best For:** Academic research and citations

### 4. **03-Ideas**
**Use Case:** Quick idea capture
**Best For:** Brainstorming and initial thoughts

### 5. **05-Journals**
**Use Case:** Personal journal entries
**Best For:** Reflections and personal thoughts

### 6. **06-Fleeting Notes**
**Use Case:** Temporary notes for processing
**Best For:** Quick captures that need processing later

### 7. **07-Earth Science Note** ✨ NEW
**Use Case:** Structured earth science topic notes
**Best For:** Geology, mineralogy, geophysics topics
**Features:**
- Overview with callout
- Key concepts section
- Examples & applications
- Diagram placeholders
- Related topics linking
- Status tracking

### 8. **08-YouTube Script** ✨ NEW
**Use Case:** Video script planning and production
**Best For:** YouTube content creation
**Features:**
- Hook & introduction structure
- Section-by-section breakdown
- Visual planning (B-roll, diagrams)
- Production checklist
- Video description template
- Status tracking

### 9. **09-Project Template** ✨ NEW
**Use Case:** Project planning and tracking
**Best For:** Time-bound projects with milestones
**Features:**
- Goal & success criteria
- Timeline & milestones
- Phase-based task lists
- Resource tracking
- Progress log
- Status indicators

### 10. **10-Daily Note** ✨ NEW
**Use Case:** Daily journaling and task tracking
**Best For:** Daily planning and reflection
**Features:**
- Morning planning section
- Study & learning tracking
- Content creation tasks
- Interview prep tracking
- Evening reflection
- Previous/next day navigation

### 11. **11-Map of Content (MOC)** ✨ NEW
**Use Case:** Creating topic indexes
**Best For:** Organizing related notes by topic
**Features:**
- Topic organization
- Related MOCs linking
- Resource collection
- Dataview query for recent updates
- Statistics tracking

---

## 🎯 Template Usage Guide

### For Earth Science Work

```
Use Case: Creating geology notes
1. Press Ctrl+N
2. Type: "Geology"
3. Select: 01-01-Earth Science/01-01-01-Geology/
4. Or manually use: 07-Earth Science Note template
```

### For YouTube Content

```
Use Case: Planning a new video
1. Press Ctrl+N
2. Type: "YouTube"
3. Select: 02-02-YouTube Scripts/02-02-02-In Progress/
4. Or manually use: 08-YouTube Script template
```

### For Daily Journaling

```
Use Case: Creating today's daily note
1. Use template: 10-Daily Note
2. Auto-creates with today's date
3. Saves to: 06-Journals/06-01-Daily Notes/
```

### For Project Management

```
Use Case: Starting a new project
1. Press Ctrl+N
2. Type: "Projects/Active"
3. Select: 04-Projects/04-01-Active/
4. Or use: 09-Project Template
```

---

## 🚀 Workflow Recommendations

### Daily Workflow

**Morning:**
1. Open Daily Note (10-Daily Note)
2. Set top 3 priorities
3. Review ongoing projects

**Throughout Day:**
- Use Ctrl+N for quick note creation
- Capture fleeting ideas immediately
- Process research papers into Literature Notes

**Evening:**
- Complete evening reflection in Daily Note
- Move fleeting notes to permanent notes
- Update project progress

### Weekly Workflow

**Weekly Review:**
1. Review all Daily Notes from the week
2. Update Project statuses
3. Process Fleeting Notes → Permanent Notes
4. Update relevant MOCs
5. Archive completed projects

### Content Creation Workflow

**YouTube Video Process:**
1. Brainstorm idea → Fleeting Note
2. Research topic → Literature Notes
3. Create script → YouTube Script template
4. Gather visuals → Media folder
5. Publish → Move to Published folder
6. Archive script → Archive folder

---

## 🔧 Setup Steps

### Step 1: Fix Current Structure
```
1. Rename: 03-02-Permenant Notes → 03-02-Permanent Notes
2. Rename: 02-01-Zotero → 02-01-01-Zotero
3. Rename: 02-02-Permanent Notes → 02-01-02-Permanent Notes
4. Restructure Earth Science folder (see recommended structure)
```

### Step 2: Create New Folders
```
1. Create: 04-Projects/ with subfolders
2. Create: 05-Media/ with subfolders
3. Reorganize: 05-Journals → 06-Journals
4. Rename: 04-Archive → 07-Archive
5. Create: 99-03-Documentation/
```

### Step 3: Configure Templates
```
1. Verify Templater settings
2. Test each new template
3. Assign hotkeys if needed
4. Configure Daily Notes plugin for folder: 06-01-Daily Notes
```

---

## 💡 Tips & Best Practices

### Naming Convention
✅ **Do:**
- `01-02-03-Descriptive Name`
- Use hyphens for multi-word names
- Always pad numbers (01, not 1)

❌ **Don't:**
- `FolderName` (no numbers)
- `01_Folder_Name` (underscores)
- `1-Folder` (unpadded)

### Note Linking
- Use `[[]]` for internal links
- Create MOCs for topic clusters
- Link fleeting → permanent notes
- Use aliases for easier linking

### Tag Strategy
- Use hierarchical tags: `#earth-science/geology`
- Tag by type: `#note-type/fleeting`
- Tag by status: `#status/draft`
- Tag by project: `#project/youtube-series`

### Status Indicators
Use emoji for quick visual status:
- 🔴 Not Started / Draft
- 🟡 In Progress
- 🟢 Complete
- 🔵 On Hold
- ⚫ Cancelled

---

## 📊 Summary

**New Templates Added:** 5
**Recommended Folder Changes:** 6
**Suggested New Folders:** 3

This structure supports:
✅ Earth Science study & note-taking
✅ YouTube content creation workflow
✅ Programming & interview preparation
✅ Research paper management
✅ Daily journaling & reflection
✅ Project management
✅ Media asset organization

**Next Steps:**
1. Review recommended structural changes
2. Test new templates
3. Adjust workflows to your needs
4. Create MOCs for your main topics
5. Start daily note habit
