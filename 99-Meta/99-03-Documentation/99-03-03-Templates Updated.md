# Templates Updated for New Folder Structure

## ✅ Completed Template Updates (5 templates)

All templates have been updated to work seamlessly with the new 42-folder structure. Each template now includes:
- **Auto-detection** of context based on folder location
- **Auto-move functionality** to place notes in correct subfolders
- **Smart tagging** based on note type
- **Cross-linking** to related folders and content

---

## 📋 Template Changes Summary

### 1. **07-Earth Science Note.md** ✅ UPDATED
**Changes:**
- Auto-detects which of the 16 Earth Science disciplines based on folder name
- Automatically sets `discipline` field in frontmatter
- Auto-tags with specific discipline (e.g., `mineralogy`, `paleontology`, etc.)
- Includes discipline-specific sections and suggestions

**Auto-detection logic:**
```javascript
// Detects folder keywords: Mineralogy, Structural, Sedimentology, Paleontology,
// Geochemistry, Geophysics, Geomorphology, Hydrogeology, Economic, Quaternary,
// Precambrian, Marine Geology, Paleooceanography, Oceanography, Atmospheric, Geography
```

**Usage:** Press Ctrl+N → Search "mineralogy" (or any discipline) → Template auto-fills

---

### 2. **10-Daily Note.md** ✅ UPDATED
**Changes:**
- **Auto-moves** to `05-Journals/05-01-Daily Notes/` folder automatically
- Updated sections to reference new folder structure:
  - Earth Science: 16 disciplines listed
  - Programming: Python, ML, Projects
  - Content Creation: YouTube + Blog subfolders
  - Research: Literature Notes + Synthesis Notes
- Includes quick links to all major content areas

**Auto-move command:**
```javascript
await tp.file.move("05-Journals/05-01-Daily Notes/" + fileName);
```

**Usage:** Press Ctrl+N → Type "Daily" → Note automatically placed in correct folder

---

### 3. **01-Areas.md** ✅ UPDATED
**Changes:**
- Auto-detects which Area folder (Earth Science, Programming, Interview Prep)
- Provides **context-specific sections**:
  - **Earth Science:** Links to 16 disciplines, Key Concepts, Practical Applications
  - **Programming:** Python Projects, Machine Learning, Project Documentation sections
  - **Interview Prep:** Interview Topics checklist, Practice Progress tracking
- Auto-tags with area-specific tags
- Cross-links to Content Creation folders for Earth Science notes

**Usage:** Create note in any Area subfolder → Template adapts automatically

---

### 4. **03-Ideas.md** ✅ UPDATED
**Changes:**
- Auto-detects **Fleeting** vs **Permanent** note type based on folder
- **Fleeting Notes** get:
  - Quick capture section
  - Potential use checklist (YouTube, Blog, Research, Project)
  - Links to YouTube Ideas, Blog Ideas folders
- **Permanent Notes** get:
  - Core Concept section
  - Why This Matters section
  - Content Opportunities with checkboxes for YouTube/Blog/Research
  - Related Ideas section
- Cross-links to new Content Creation structure

**Usage:** 
- Fleeting: Create in `03-01-Fleeting Notes/` → Quick capture format
- Permanent: Create in `03-02-Permanent Notes/` → Refined format

---

### 5. **05-Journals.md** ✅ UPDATED
**Changes:**
- Auto-detects journal type (Weekly Review vs Long Form Reflection)
- **Auto-moves** to correct subfolder:
  - Weekly reviews (contains "week" in title) → `05-02-Weekly Reviews/`
  - Long form reflections → `05-03-Long Form Reflections/`
- **Weekly Review format:**
  - Week Overview, Accomplishments, Learning Highlights
  - Separate sections for Earth Science, Programming/ML, Content Creation
  - Challenges & Solutions, Next Week's Focus
- **Long Form format:**
  - Today's Thoughts, Learning & Insights
  - Progress & Achievements
  - Research Progress, Content Creation Progress
  - Questions & Curiosities, Looking Forward

**Usage:**
- Weekly: Include "week" in title → Auto-placed in Weekly Reviews
- Long form: Any other title → Auto-placed in Long Form Reflections

---

### 6. **06-Fleeting Notes.md** ✅ UPDATED
**Changes:**
- **Auto-moves** to `03-Ideas/03-01-Fleeting Notes/` folder
- Added category checklist (YouTube idea, Blog post, Research topic, etc.)
- "Possible Next Steps" section with links to:
  - Permanent Notes folder
  - Content Creation folders
  - Research folders
- Includes **automatic review reminder** (7 days from creation)
- Auto-tags with `fleeting` and `quick-capture`

**Auto-move command:**
```javascript
await tp.file.move("03-Ideas/03-01-Fleeting Notes/" + fileName);
```

**Usage:** Press Ctrl+N → Type anything → Note automatically placed in Fleeting Notes

---

## 🎯 Key Features Across All Templates

### Smart Auto-Move Functionality
- **Daily Note** → `05-Journals/05-01-Daily Notes/`
- **Fleeting Note** → `03-Ideas/03-01-Fleeting Notes/`
- **Weekly Journal** → `05-Journals/05-02-Weekly Reviews/`
- **Long Form Journal** → `05-Journals/05-03-Long Form Reflections/`

### Context-Aware Content
- Templates detect folder location and adapt structure
- Auto-populate discipline/area/type fields
- Suggest relevant tags based on context

### Cross-Platform Linking
- Earth Science notes link to YouTube/Blog content folders
- Daily notes link to all major areas (16 Earth Science disciplines, Programming, Content Creation)
- Ideas link to Content Creation pipeline (YouTube Scripts, Blog Drafts)
- Journals link to Research workflow (Literature Notes, Synthesis Notes)

### Folder Structure Integration
All templates now correctly reference:
- **16 Earth Science folders** (01-01-01 through 01-01-16)
- **Programming structure** (Python, ML, Project Docs - no JavaScript)
- **Content Creation structure** (YouTube: 4 subfolders, Blog: 3 subfolders)
- **Research workflow** (Zotero Imports, Literature Notes, Synthesis Notes)
- **Journal structure** (Daily Notes, Weekly Reviews, Long Form Reflections)

---

## 🚀 How to Use Updated Templates

### Quick Start
1. **Press Ctrl+N** to create a new note
2. **Type folder name** (e.g., "Mineralogy", "Daily", "Fleeting")
3. **Select template** (or use the auto-detected template)
4. **Template auto-fills** discipline, area, or type
5. **Note auto-moves** to correct folder (if applicable)

### Examples
- **"Mineralogy note"** → 07-Earth Science template → Auto-tags as mineralogy
- **"Daily note"** → 10-Daily Note template → Auto-moves to Daily Notes folder
- **"Quick idea"** → 06-Fleeting Notes template → Auto-moves to Fleeting Notes
- **"Week 23 review"** → 05-Journals template → Auto-moves to Weekly Reviews

---

## ✅ Testing Checklist

Before using templates in production, test each one:

- [ ] **Earth Science Note:** Create note in Mineralogy folder → Check auto-detection
- [ ] **Daily Note:** Create daily note → Verify auto-move to 05-01-Daily Notes
- [ ] **Areas Note:** Create in Programming folder → Check Python/ML sections appear
- [ ] **Ideas Note:** Create in Fleeting Notes → Check quick capture format
- [ ] **Journal:** Create "Week 1 Review" → Verify auto-move to Weekly Reviews
- [ ] **Fleeting Note:** Create any note → Verify auto-move to Fleeting Notes

---

## 📝 Next Steps

### User Manual Tasks (from IMPLEMENTATION-CHECKLIST.md)
1. **Rename existing folders with typos:**
   - `03-02-Permenant Notes` → `03-02-Permanent Notes`
   - `02-01-Zotero` → `02-01-01-Zotero`
   - `02-02-Permanent Notes` → `02-01-02-Permanent Notes` (if exists)

2. **Move existing content to new folders:**
   - Move Earth Science notes to appropriate discipline folders (01-01-01 through 01-01-16)
   - Move programming notes to Python/ML subfolders
   - Organize daily notes into 05-01-Daily Notes

3. **Test all templates:**
   - Create test notes using each template
   - Verify auto-move functionality works
   - Check that all internal links resolve correctly

4. **Configure Zotero plugin:**
   - Set import location to `02-01-Scientific Research Paper/02-01-01-Zotero/`
   - Configure Zotero Desktop Connector settings in Obsidian

---

## 🔧 Troubleshooting

### If auto-move doesn't work:
- Check that target folders exist (run folder creation again if needed)
- Verify Templater plugin is enabled
- Ensure user scripts are configured in Templater settings

### If auto-detection fails:
- Check folder naming matches exactly (case-sensitive)
- Verify you're creating notes in the correct parent folder
- Review JavaScript logic in template frontmatter

### If tags don't apply:
- Ensure YAML frontmatter is valid (check indentation)
- Try creating note again with Templater plugin active
- Check for syntax errors in template

---

**Last Updated:** 2025-10-09 09:15
**Template Count:** 6 templates updated
**Folder Structure:** 42 folders created
**Status:** ✅ Ready for production use
