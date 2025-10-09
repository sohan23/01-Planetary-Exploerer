# 🎨 Graph View Configuration Guide

**Date:** October 9, 2025

Your Obsidian graph view has been configured with a beautiful color-coded system that visually represents your vault's structure!

---

## 🌈 **Color Legend**

### **Maps of Content (MOCs)** 🟣
**Color:** Purple (`rgb: 14701138`)
- **Path:** `00-Maps of Content/`
- **Purpose:** Central hub notes that link related topics
- **Examples:** Earth Science MOC, Programming MOC, Content Creation MOC

---

### **Earth Science Notes** 🟢
**Color:** Green (`rgb: 5419488`)
- **Path:** `01-Areas/01-01-Earth Science/`
- **Purpose:** All 16 Earth Science disciplines
- **Includes:** Mineralogy, Geology, Paleontology, Oceanography, etc.

---

### **Programming Notes** 🔵
**Color:** Blue (`rgb: 11621088`)
- **Path:** `01-Areas/01-02-Programming/`
- **Purpose:** Python, Machine Learning, Project Documentation
- **Includes:** Code snippets, tutorials, project notes

---

### **Interview Preparation** 🟡
**Color:** Yellow (`rgb: 16777011`)
- **Path:** `01-Areas/01-03-Interview/`
- **Purpose:** Career preparation, technical questions
- **Includes:** DSA, System Design, Behavioral Questions

---

### **Research Papers (Zotero Imports)** 🟠
**Color:** Orange (`rgb: 16755763`)
- **Path:** `02-01-01-Zotero/`
- **Purpose:** Direct imports from Zotero Desktop
- **Includes:** Citations, abstracts, PDF annotations

---

### **Literature Notes** 🍑
**Color:** Peach (`rgb: 16744272`)
- **Path:** `02-01-02-Literature Notes/`
- **Purpose:** Your reading notes and thoughts on papers
- **Includes:** Summaries, key insights, questions

---

### **Synthesis Notes** 🧡
**Color:** Dark Orange (`rgb: 16738740`)
- **Path:** `02-01-03-Synthesis Notes/`
- **Purpose:** Combined insights from multiple sources
- **Includes:** Cross-referenced ideas, original thoughts

---

### **YouTube Content** 🔴
**Color:** Red (`rgb: 16711680`)
- **Path:** `02-02-01-YouTube/`
- **Purpose:** Video scripts and production notes
- **Includes:** Scripts, ideas, published videos

---

### **Blog Posts** 🟦
**Color:** Cyan (`rgb: 5592575`)
- **Path:** `02-02-02-Blog/`
- **Purpose:** Astro blog posts and drafts
- **Includes:** Published posts, drafts, ideas

---

### **Fleeting Notes** 💛
**Color:** Bright Yellow (`rgb: 16776960`)
- **Path:** `03-01-Fleeting Notes/`
- **Purpose:** Quick capture, unprocessed ideas
- **Includes:** Raw thoughts, brainstorming, quick captures

---

### **Permanent Notes** 🟨
**Color:** Gold (`rgb: 16763904`)
- **Path:** `03-02-Permanent Notes/`
- **Purpose:** Refined, well-developed ideas
- **Includes:** Polished thoughts, evergreen notes

---

### **Journals** 🟣
**Color:** Light Purple (`rgb: 11657298`)
- **Path:** `05-Journals/`
- **Purpose:** Daily notes, weekly reviews, reflections
- **Includes:** Daily logs, weekly summaries, long-form writing

---

### **Meta/Documentation** ⚫
**Color:** Gray (`rgb: 8421504`)
- **Path:** `99-Meta/`
- **Purpose:** Templates, scripts, documentation
- **Includes:** System files, guides, configuration

---

## ⚙️ **Graph Settings Explained**

### **Display Settings:**
- ✅ **Show Tags:** Tags are visible on graph
- ✅ **Show Arrows:** Direction of links visible
- ✅ **Hide Unresolved:** Broken links hidden
- ✅ **Hide Orphans:** Unlinked notes hidden (keeps graph clean)

### **Visual Settings:**
- **Text Fade:** -1 (always visible, no fading)
- **Node Size:** 1.2x (larger nodes, easier to see)
- **Line Size:** 1.5x (thicker connections, easier to follow)

### **Physics Settings:**
- **Center Strength:** 0.4 (moderate clustering)
- **Repel Strength:** 12 (good spacing between nodes)
- **Link Strength:** 0.8 (strong connections)
- **Link Distance:** 300 (spacious layout)

---

## 🎯 **How to Use the Graph View**

### **1. Open Graph View**
- Click the graph icon in the left sidebar
- Or use command palette: `Ctrl+Shift+P` → "Graph view: Open"

### **2. Navigate the Graph**
- **Pan:** Click and drag background
- **Zoom:** Scroll wheel
- **Focus:** Click on a node to see its connections
- **Open Note:** Double-click a node

### **3. Use Filters**
Search for specific notes or paths:
```
path:"01-01-Earth Science"  → Show only Earth Science notes
tag:#research                → Show only research-tagged notes
path:"02-01-01-Zotero"      → Show only Zotero imports
```

### **4. Analyze Connections**
- **Hub notes** (many connections) = MOCs or central concepts
- **Isolated clusters** = Related topic groups
- **Bridge notes** = Notes connecting different areas

---

## 🔍 **What Your Graph Reveals**

### **Knowledge Hubs:**
Large nodes with many connections are your most important notes:
- MOCs (purple) should be the biggest hubs
- Well-connected Earth Science notes show deep understanding
- Research papers (orange) connected to synthesis (dark orange) show active research

### **Knowledge Flow:**
Follow the colors to see your knowledge pipeline:
1. **Orange** (Zotero) → **Peach** (Literature Notes) → **Dark Orange** (Synthesis)
2. **Dark Orange** (Synthesis) → **Red** (YouTube) or **Cyan** (Blog)
3. **Yellow** (Fleeting) → **Gold** (Permanent) → Content

### **Gaps & Opportunities:**
- **Isolated notes:** Need more connections (add links!)
- **Missing colors:** Areas you haven't explored yet
- **Weak clusters:** Topics that need development

---

## 🎨 **Color Grouping Strategy**

### **Research Workflow (Orange Gradient):**
```
🟠 Zotero Imports
  ↓
🍑 Literature Notes
  ↓
🧡 Synthesis Notes
  ↓
🔴 YouTube / 🟦 Blog
```

### **Idea Development (Yellow Gradient):**
```
💛 Fleeting Notes (bright)
  ↓
🟨 Permanent Notes (gold)
  ↓
Content
```

### **Learning Areas (Cool Colors):**
```
🟢 Earth Science (green)
🔵 Programming (blue)
🟡 Interview Prep (yellow)
```

---

## 🧪 **Try These Views**

### **Research Focus:**
Filter: `path:"02-Research"`
- See your entire research workflow
- Trace paper → literature → synthesis → content

### **Earth Science Only:**
Filter: `path:"01-01-Earth Science"`
- See connections between disciplines
- Find gaps in your knowledge

### **Content Pipeline:**
Filter: `path:"02-02-Content Creation"`
- See YouTube and Blog connections
- Track content from idea to publication

### **Daily Work:**
Filter: `path:"05-Journals" OR path:"03-01-Fleeting"`
- See your daily capture and reflection notes

---

## 🛠️ **Customization Tips**

### **Change Colors:**
1. Settings → Graph view → Color groups
2. Click a color to change it
3. Use colors that match your theme

### **Adjust Physics:**
- **More clustered:** Increase center strength
- **More spread out:** Increase repel strength
- **Tighter connections:** Decrease link distance

### **Filter Examples:**
```
tag:#mineralogy              → Mineralogy notes only
-path:"99-Meta"              → Exclude meta files
path:"02-01-01" OR path:"02-01-02"  → Research papers + lit notes
file:"MOC"                   → Show only MOCs
```

---

## 📊 **Ideal Graph Structure**

### **Healthy Vault Characteristics:**
✅ **Central MOC hubs** - Purple nodes with many connections
✅ **Clustered topics** - Related notes grouped by color
✅ **Clear pathways** - Visible research → content flow
✅ **Bridge notes** - Notes connecting different areas
✅ **No orphans** - All notes connected (if Hide Orphans is on)

### **Signs of Growth:**
📈 **Increasing connections** - More links between notes
📈 **Larger synthesis cluster** - More dark orange nodes
📈 **Content clusters** - Red (YouTube) and Cyan (Blog) growing
📈 **Strong MOCs** - Purple hubs getting bigger

---

## 🎯 **Graph View Goals**

### **Short-term (This Week):**
- [ ] Create at least 1 MOC (purple hub)
- [ ] Connect 5 unlinked notes
- [ ] Link Zotero papers to literature notes

### **Medium-term (This Month):**
- [ ] Each Earth Science discipline has 3+ notes
- [ ] 3+ synthesis notes connecting research
- [ ] 1+ piece of content (YouTube/Blog) from research

### **Long-term (This Year):**
- [ ] Strong MOC network (3+ purple hubs)
- [ ] Complete research pipeline visible in graph
- [ ] 10+ pieces of published content

---

## 💡 **Pro Tips**

### **1. Use Local Graph**
- Open any note
- Click local graph icon
- See immediate connections only

### **2. Create Visual Hierarchy**
MOCs should link to:
- Related area notes
- Key synthesis notes
- Important content

### **3. Regular Graph Reviews**
Weekly: Check graph for:
- New isolated notes
- Weak connections
- Opportunities for synthesis

### **4. Color-Code Your Work**
When creating notes, think:
- "This is a fleeting idea" → Save to 03-01-Fleeting Notes (yellow)
- "This is from research" → Create in Literature Notes (peach)
- "This synthesizes multiple sources" → Synthesis Notes (dark orange)

---

## 🔗 **Quick Reference**

| Color             | Path                | Type              |
|-------------------|---------------------|-------------------|
| 🟣 Purple         | 00-Maps of Content  | MOCs              |
| 🟢 Green          | 01-01-Earth Science | Study notes       |
| 🔵 Blue           | 01-02-Programming   | Code notes        |
| 🟡 Yellow (light) | 01-03-Interview     | Career prep       |
| 🟠 Orange         | 02-01-01-Zotero     | Research papers   |
| 🍑 Peach          | 02-01-02-Literature | Reading notes     |
| 🧡 Dark Orange    | 02-01-03-Synthesis  | Combined insights |
| 🔴 Red            | 02-02-01-YouTube    | Videos            |
| 🟦 Cyan           | 02-02-02-Blog       | Blog posts        |
| 💛 Bright Yellow  | 03-01-Fleeting      | Quick captures    |
| 🟨 Gold           | 03-02-Permanent     | Refined ideas     |
| 🟣 Light Purple   | 05-Journals         | Daily notes       |
| ⚫ Gray            | 99-Meta             | System files      |

---

**Your graph view is now optimized! Open it to see your knowledge network in beautiful color!** 🎨✨
