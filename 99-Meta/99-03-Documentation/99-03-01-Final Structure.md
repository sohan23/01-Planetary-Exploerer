# 🗂️ FINAL Updated Obsidian Vault Structure

## Complete Folder Hierarchy (Updated with Marine Sciences Split)

```
f:\Main Local Working Folder\01-Planetary Explorer\
│
├── 00-Maps of Content/
│   ├── 00-01-Main Index.md
│   ├── 00-02-Earth Science MOC.md
│   ├── 00-03-Programming MOC.md
│   └── 00-04-Content Creation MOC.md
│
├── 01-Areas/  (Long-term responsibilities & interests)
│   │
│   ├── 01-01-Earth Science/
│   │   ├── 01-01-01-Mineralogy and Petrology/
│   │   ├── 01-01-02-Structural Geology and Geotectonics/
│   │   ├── 01-01-03-Sedimentology and Stratigraphy/
│   │   ├── 01-01-04-Paleontology/
│   │   ├── 01-01-05-Geochemistry/
│   │   ├── 01-01-06-Geophysics/
│   │   ├── 01-01-07-Geomorphology/
│   │   ├── 01-01-08-Hydrogeology/
│   │   ├── 01-01-09-Economic Geology/
│   │   ├── 01-01-10-Quaternary Geology/
│   │   ├── 01-01-11-Precambrian Geology and Crustal Evolution/
│   │   ├── 01-01-12-Marine Geology/
│   │   ├── 01-01-13-Paleooceanography/
│   │   ├── 01-01-14-Oceanography/
│   │   ├── 01-01-15-Atmospheric Sciences/
│   │   │   └── (Meteorology)
│   │   └── 01-01-16-Geography of India/
│   │
│   ├── 01-02-Programming/
│   │   ├── 01-02-01-Python/
│   │   ├── 01-02-02-Machine Learning/
│   │   └── 01-02-03-Project Documentation/
│   │
│   └── 01-03-Interview Preparation/
│       ├── 01-03-01-Technical Questions/
│       ├── 01-03-02-Behavioral Questions/
│       ├── 01-03-03-Practice Sessions/
│       └── 01-03-04-Institution Research/
│
├── 02-Research/
│   │
│   ├── 02-01-Scientific Research Paper/
│   │   ├── 02-01-01-Zotero Imports/
│   │   │   └── [Raw paper imports via Zotero plugin]
│   │   ├── 02-01-02-Literature Notes/
│   │   │   └── [Your understanding & summary of papers]
│   │   ├── 02-01-03-Synthesis Notes/
│   │   │   └── [Original insights from multiple papers]
│   │   └── README.md (Documentation)
│   │
│   └── 02-02-Content Creation/
│       │
│       ├── 02-02-01-YouTube/
│       │   ├── 02-02-01-01-Published/
│       │   ├── 02-02-01-02-In Production/
│       │   ├── 02-02-01-03-Scripts/
│       │   └── 02-02-01-04-Ideas/
│       │
│       └── 02-02-02-Blog/
│           ├── 02-02-02-01-Published/
│           ├── 02-02-02-02-Drafts/
│           └── 02-02-02-03-Ideas/
│
├── 03-Ideas/
│   ├── 03-01-Fleeting Notes/
│   │   └── [Quick captures, temporary thoughts]
│   └── 03-02-Permanent Notes/
│       └── [Processed, distilled knowledge]
│
├── 04-Archive/
│   └── [Completed/inactive content organized by year]
│
├── 05-Journals/
│   ├── 05-01-Daily Notes/
│   ├── 05-02-Weekly Reviews/
│   └── 05-03-Long Form Reflections/
│
├── 06-Media/  (All attachments & resources)
│   ├── 06-01-Images/
│   │   ├── 06-01-01-Diagrams/
│   │   ├── 06-01-02-Photos/
│   │   ├── 06-01-03-Screenshots/
│   │   └── 06-01-04-Zotero Attachments/
│   │
│   ├── 06-02-Videos/
│   ├── 06-03-Audio/
│   ├── 06-04-Documents/
│   │   └── [PDFs, slides, papers]
│   └── 06-05-Resources/
│       └── [General reference materials]
│
└── 99-Meta/  (System files)
    ├── 99-01-Scripts/
    │   ├── autoNumberFile-improved.js
    │   └── createNoteWithFolderSelection.js
    │
    ├── 99-02-Templates/
    │   ├── 99-02-00-Quick Create with Folder Selection.md
    │   ├── 99-02-01-Areas.md
    │   ├── 99-02-02-Research Notes Template.md
    │   ├── 99-02-03-Ideas.md
    │   ├── 99-02-04-Journals.md
    │   ├── 99-02-05-Fleeting Notes.md
    │   ├── 99-02-06-Earth Science Note.md
    │   ├── 99-02-07-YouTube Script.md
    │   ├── 99-02-08-Blog Post.md
    │   ├── 99-02-09-Project Template.md
    │   ├── 99-02-10-Daily Note.md
    │   └── 99-02-11-Map of Content (MOC).md
    │
    └── 99-03-Documentation/
        ├── 99-03-00-Start Here - Reading Order.md
        ├── 99-03-01-Final Structure.md (THIS FILE)
        ├── 99-03-02-Template Guide.md
        ├── 99-03-03-QUICK REFERENCE.md
        ├── 99-03-04-Quick Create Setup Guide.md
        ├── 99-03-05-Image Positioning Guide.md
        ├── 99-03-06-Implementation Checklist.md
        ├── 99-03-07-Updated Structure Plan.md
        └── 99-03-08-Research Workflow Guide.md
```

---

## 🔄 Key Changes from Previous Version

### Earth Science Folders (16 total)
**Split Marine Sciences into 3 separate folders:**
- `01-01-12-Marine Geology`
- `01-01-13-Paleooceanography`
- `01-01-14-Oceanography`

**Total Earth Science Subfolders:** 16
- All major topics have their own numbered folder
- Easier to organize and find specific topics
- Better for creating topic-specific MOCs

### Content Creation Structure
**Explicit cross-linking support:**
- YouTube template includes blog post linking
- Blog template includes YouTube video linking
- Both track publication dates and URLs
- Content relationship tracking (companion, expanded, summary, independent)

### Blog Template (Astro Framework)
**Frontmatter matches your Astro site:**
```yaml
title: Post Title
author: Your Name
pubDatetime: 2024-10-09T12:00:00Z
modDatetime: 2024-10-09T12:00:00Z
slug: auto-generated-slug
featured: false
draft: true
tags:
  - earth-science
  - geology
description: |
  Multi-line description
```

---

## 📚 Scientific Research Workflow Documentation

### Folder Purpose & Workflow

#### `02-01-01-Zotero Imports/`
**Purpose:** Raw paper imports using Obsidian Zotero Desktop Connector plugin

**What goes here:**
- Papers imported directly from Zotero
- Full citation metadata
- PDF annotations from Zotero
- Tags from Zotero library
- DOI, URL, publication info

**Template Used:** `02-Research Notes Template.md` (auto-imports from Zotero)

**Example filename:** `02-01-Climate-Change-Impact-on-Coastal-Erosion.md`

**Workflow:**
1. Use Zotero Desktop Connector in Obsidian
2. Select paper from your Zotero library
3. Import with template
4. File created automatically in this folder
5. Contains: Citation, abstract, your Zotero annotations, PDF link

---

#### `02-01-02-Literature Notes/`
**Purpose:** Your personal understanding of papers in your own words

**What goes here:**
- Summary of the paper
- Key concepts explained simply
- Important findings
- Methodology notes
- Your questions and thoughts
- How it relates to your work

**Template Used:** Create manually or use Earth Science Note template

**Example filename:** `02-02-Understanding-Coastal-Erosion-Mechanisms.md`

**Workflow:**
1. Read the paper from Zotero Imports
2. Create new note in this folder
3. Write summary in YOUR words (not copy-paste)
4. Extract key concepts
5. Link back to Zotero Import: `Source: [[02-01-Climate-Change-Impact]]`
6. Tag with relevant topics

**Why separate from import?**
- Zotero imports are "what the paper says"
- Literature notes are "what you understand"
- Forces you to process information
- Writing = learning

---

#### `02-01-03-Synthesis Notes/`
**Purpose:** Original insights from connecting multiple papers

**What goes here:**
- Themes across multiple papers
- Contradictions between studies
- Patterns you've noticed
- Your original insights
- Research gaps you've identified
- New questions generated

**Template Used:** Create manually

**Example filename:** `03-The-Role-of-Sea-Level-Rise-in-Coastal-Erosion.md`

**Workflow:**
1. Read multiple literature notes on related topics
2. Notice patterns, contradictions, or gaps
3. Create synthesis note
4. Connect multiple literature notes
5. Write YOUR insights and analysis
6. Generate questions for further research

**Example structure:**
```markdown
# The Role of Sea Level Rise in Coastal Erosion

## Papers Reviewed
- [[02-Climate-Change-Impact]] (Smith 2023)
- [[03-Sea-Level-Trends]] (Jones 2022)
- [[04-Erosion-Patterns]] (Lee 2024)

## Common Findings
[What do all papers agree on?]

## Contradictions
[Where do papers disagree?]

## My Synthesis
[Your original insights connecting these papers]

## Research Gaps
[What's missing? What needs more study?]

## Questions Generated
- [ ] Does X affect Y?
- [ ] How does Z relate to W?
```

---

#### Result → `03-02-Permanent Notes/`
**Purpose:** Distilled atomic knowledge for long-term use

**What goes here:**
- One concept per note
- Written clearly for future you
- Heavily linked to other notes
- Standalone understanding
- Becomes your knowledge base

**Workflow:**
From synthesis notes → Extract key concepts → Create permanent notes

**Example:**
Synthesis note about coastal erosion might generate permanent notes:
- `Sea Level Rise Mechanisms.md`
- `Coastal Sediment Transport.md`
- `Wave Action Effects.md`

---

## 🔗 Cross-Platform Content Workflow

### Creating Content for Both YouTube & Blog

**Scenario:** You want to create content on "How Minerals Form"

#### Step 1: Research Phase
```
Location: 02-01-Scientific Research Paper/
1. Import papers via Zotero → 02-01-01-Zotero Imports/
2. Create literature notes → 02-01-02-Literature Notes/
3. Synthesize insights → 02-01-03-Synthesis Notes/
```

#### Step 2: Content Planning
```
Location: 02-02-Content Creation/

Create two linked notes:
1. YouTube Script: 02-02-01-03-Scripts/XX-How-Minerals-Form.md
2. Blog Draft: 02-02-02-02-Drafts/XX-How-Minerals-Form.md
```

#### Step 3: Cross-Linking
**In YouTube Script:**
```yaml
Related Blog Post: [[02-02-02-XX-How-Minerals-Form]]
Blog URL: https://yourblog.com/how-minerals-form
```

**In Blog Post:**
```yaml
Related YouTube Video: [[02-02-01-XX-How-Minerals-Form]]
Video URL: https://youtube.com/watch?v=xxxxx
```

#### Step 4: Content Creation
- **Video:** More visual, demonstrations, personality
- **Blog:** More depth, step-by-step, SEO optimized
- Both link to each other
- Both cite same research sources

#### Step 5: Publishing
**YouTube:**
- Move to: `02-02-01-01-Published/`
- Add video URL and publish date
- Link in video description to blog

**Blog:**
- Move to: `02-02-02-01-Published/`
- Set `draft: false` in frontmatter
- Deploy to Vercel
- Add video embed or link

---

## 🎯 Astro Blog Frontmatter Explained

```yaml
title: How Minerals Form in Nature
# Main title - appears in browser tab and H1

author: Your Name
# Your name or brand name

pubDatetime: 2024-10-09T14:30:00Z
# Publication date in ISO format (UTC)
# Astro uses this for sorting posts

modDatetime: 2024-10-09T14:30:00Z
# Last modified date - updates when you edit
# Good for showing "Updated: ..." on posts

slug: how-minerals-form-in-nature
# URL slug - appears in blog.com/posts/how-minerals-form
# Auto-generated from title (lowercase, hyphens)

featured: true
# Set to true for featured posts (homepage, spotlight)
# False for regular posts

draft: true
# true = not visible on live site
# false = published and visible

tags:
  - mineralogy
  - geology
  - earth-science
# Tags for categorization and filtering
# Astro can generate tag pages from these

description: |
  Discover the fascinating processes behind mineral
  formation, from crystallization to metamorphism.
# Meta description for SEO (150-160 characters)
# Appears in search results and social shares
```

---

## 🚀 Quick Start Guide

### Day 1: Setup
1. Create all Earth Science subfolders (16 folders)
2. Rename existing folders to match new structure
3. Move YouTube scripts to `02-02-01-03-Scripts/`
4. Test `Ctrl+N` with new folder names

### Week 1: Research Workflow
1. Import first paper via Zotero
2. Create literature note
3. Link to permanent notes
4. Practice the workflow

### Week 2: Content Creation
1. Create first YouTube script with blog linking
2. Create companion blog post
3. Cross-reference both
4. Test publishing workflow

---

## 📊 Folder Count Summary

- **Earth Science Topics:** 16 folders
- **Programming:** 3 folders
- **Interview Prep:** 4 folders (Technical, Behavioral, Practice, Institution Research)
- **Research - Scientific:** 3 subfolders (Zotero Imports, Literature Notes, Synthesis Notes)
- **Research - YouTube:** 4 subfolders (Published, In Production, Scripts, Ideas)
- **Research - Blog:** 3 subfolders (Published, Drafts, Ideas)
- **Ideas:** 2 subfolders (Fleeting Notes, Permanent Notes)
- **Journals:** 3 subfolders (Daily Notes, Weekly Reviews, Long Form Reflections)
- **Media - Images:** 4 subfolders (Diagrams, Photos, Screenshots, Zotero Attachments)
- **Media - Other:** 4 subfolders (Videos, Audio, Documents, Resources)
- **Meta - Scripts:** 2 files
- **Meta - Templates:** 12 templates
- **Meta - Documentation:** 9 files
- **Total Main Folders:** 7 (00-Maps, 01-Areas, 02-Research, 03-Ideas, 04-Archive, 05-Journals, 06-Media, 99-Meta)
- **Total Numbered Subfolders:** 42+

---

## ✅ Final Checklist

- [x] Marine Sciences split into 3 folders
- [x] Blog template updated for Astro framework
- [x] Cross-platform linking in templates
- [x] Geography of India under Earth Science
- [x] Research workflow documentation created
- [x] Zotero plugin integration explained
- [ ] Migrate existing content to new structure
- [ ] Test Zotero import workflow
- [ ] Create first cross-linked content
- [ ] Set up Astro blog deployment

**Ready to implement! 🎉**
