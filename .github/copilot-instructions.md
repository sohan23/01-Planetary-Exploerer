# Copilot Instructions: Planetary Explorer Obsidian Vault

## Project Overview
This is an **Obsidian knowledge management vault** for Earth Science learning, research, programming projects, and content creation. It uses a hierarchical numbering system (e.g., `01-02-03-Filename.md`) for organization and Templater plugin for automated note creation.

## Core Architecture

### Folder Structure Philosophy
- **Hierarchical numbering**: All folders/files use pattern `NN-NN-Name` (e.g., `01-01-02-Structural Geology`)
- **Eight main categories**: 00-Maps, 01-Areas, 02-Research, 03-Ideas, 04-Archive, 05-Journals, 06-Media, 99-Meta
- **Auto-numbering**: Numbers are automatically assigned based on parent folder prefix (e.g., in `01-02/`, next file is `01-02-01-`)
- **Reference**: See `99-Meta/99-03-Documentation/99-03-01-Final Structure.md` for complete hierarchy

### Key Components
1. **Templater Scripts** (`99-Meta/99-01-Scripts/`):
   - `createNoteWithFolderSelection.js`: Powers Alt+N hotkey for smart note creation with folder search, auto-numbering, and context-aware template selection
   - Returns object with `{fullTitle, cleanTitle, numberPrefix, targetFolder, template}` properties
   
2. **Templates** (`99-Meta/99-02-Templates/`): 17 specialized templates
   - `99-02-00-Quick Create with Folder Selection.md`: Main template bound to Alt+N
   - Earth Science: 99-02-06 (quick), 99-02-12 (comprehensive)
   - Programming: 99-02-09 (tracker), 99-02-13 (Python), 99-02-14 (ML), 99-02-15 (full docs)
   - Other: Research (02), Ideas (03), Journals (04), Fleeting (05), Interview (16)

3. **Plugins in Use**:
   - Templater (auto-numbering, hotkeys, template logic)
   - Obsidian Icon Folder (Tabler icons, kebab-case format)
   - Zotero Desktop Connector (02-01-01-Zotero Imports)
   - Dataview, Excalidraw, Citation Plugin, LaTeX Suite

## Critical Workflows

### Creating Notes (Alt+N Workflow)
**Command**: Press Alt+N anywhere in vault
1. User searches for folder (e.g., "Earth Science", "Zotero")
2. User enters filename (no numbers needed)
3. **Context-aware template menu appears** based on folder:
   - Earth Science folders → Quick Note + Comprehensive Topic
   - Programming folders → Python + ML + Project templates
   - Research folders → Research Note + Earth Science Topic
   - Interview folders → Interview Prep template
4. Script auto-generates number prefix and creates file with selected template

**Implementation Details**:
- Template paths must match exactly (e.g., `99-Meta/99-02-Templates/99-02-06-Earth Science Note.md`)
- Template content is read directly (not executed) to avoid recursive script calls
- Uses `app.vault.read()` to load template, then `tp.file.create_new()` to create file
- Function `getRelevantTemplates(folderPath)` maps folder patterns to template lists

### Modifying Templates or Scripts
1. **Never use `tp.file.include()`** - it executes templates recursively
2. **Read template content directly**: `await app.vault.read(templateFile)`
3. **Replace placeholders**: Use `.replace(/{{title}}/g, actualTitle)` pattern
4. **Test in a sandbox folder first** to avoid breaking numbering sequence
5. **Update `Template Selection Guide.md`** when adding new templates

### Auto-Numbering Logic
- **Pattern**: Extracts `^(\d+(?:-\d+)*)` from folder name (e.g., `01-02` from `01-02-Programming`)
- **Next number**: Scans children, finds max suffix, increments (e.g., `01-02-03` → `01-02-04`)
- **Zero-padding**: Always 2 digits (01, 02, ..., 10, 11)
- **No manual numbering**: System maintains sequence integrity automatically

## Project-Specific Conventions

### Template Design Patterns
1. **Dual templates for major topics**: Simple (quick capture) + Comprehensive (deep dive)
   - Example: 99-02-06 Earth Science Note vs 99-02-12 Earth Science Topic
2. **Frontmatter structure**:
   ```yaml
   ---
   title: {{Full numbered title}}
   aliases: [{{Clean title without numbers}}]
   tags: [category-specific]
   date: {{YYYY-MM-DD}}
   ---
   ```
3. **Template placeholders**: Use `{{title}}`, `{{date}}`, `{{time}}` for script replacement

### File Naming Rules
- **Format**: `NN-NN-...-Title with Spaces.md`
- **Never start with letters**: All files/folders must begin with numbers
- **Human-readable titles**: After numbers, use descriptive names with spaces
- **Examples**: 
  - `01-01-12-Marine Geology.md` ✅
  - `Marine Geology.md` ❌ (no numbers)
  - `01-Marine Geology.md` ❌ (incomplete prefix)

### Icon Configuration
- **Plugin**: Obsidian Icon Folder using Tabler icon pack
- **Format**: All icon names use kebab-case (e.g., `tabler-icons:flask-2`, not `flaskTwo`)
- **Config file**: `.obsidian/plugins/obsidian-icon-folder/data.json`

## Integration Points

### Templater Configuration
- **Hotkey binding**: `.obsidian/hotkeys.json` maps Alt+N to Quick Create template
- **Script folder**: `user_scripts_folder: "99-Meta/99-01-Scripts"`
- **Template folder**: `templates_folder: "99-Meta/99-02-Templates"`
- **Trigger on creation**: Enabled for root folder `/`

### Zotero Workflow
- **Import target**: `02-Research/02-01-Scientific Research Paper/02-01-01-Zotero Imports/`
- **Processing flow**: Zotero Imports → Literature Notes → Synthesis Notes
- **Citation format**: Uses obsidian-citation-plugin for [@citekey] references

## Common Pitfalls to Avoid
1. ❌ **Don't call templates recursively** - causes infinite prompt loops
2. ❌ **Don't skip number prefixes** - breaks auto-numbering algorithm
3. ❌ **Don't use camelCase for icons** - Tabler requires kebab-case
4. ❌ **Don't hardcode dates** - use `tp.date.now()` in templates
5. ❌ **Don't edit template file names** without updating `createNoteWithFolderSelection.js` paths

## Quick Reference Files
- **Structure overview**: `99-Meta/99-03-Documentation/99-03-01-Final Structure.md`
- **Template guide**: `99-Meta/Template Selection Guide.md`
- **Setup instructions**: `99-Meta/99-03-Documentation/99-03-04-Quick Create Setup Guide.md`
- **Reading order**: `99-Meta/99-03-Documentation/99-03-00-START HERE-Reading Order.md`

## When Adding New Features
1. Check if template system needs update (new folder type? new template?)
2. Update `getRelevantTemplates()` function in `createNoteWithFolderSelection.js`
3. Create/modify template in `99-Meta/99-02-Templates/`
4. Update `Template Selection Guide.md` with new mappings
5. Test Alt+N workflow in target folder
6. Document in `99-Meta/99-03-Documentation/`
