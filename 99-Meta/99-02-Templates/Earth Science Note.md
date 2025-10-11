---
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
updated: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
tags:
  - earth-science
aliases: []
---

# <% tp.file.title %>

> [!summary] **Abstract**
> A brief, one-sentence summary of the main topic.

---

### Key Concepts
- 

### Detailed Notes
- 

### Open Questions
- What am I still unsure about?
- 

### Related Notes
- `$=dv.list(dv.pages('"01-Areas/01-01-Earth Science"').where(p => p.file.name != dv.current().file.name).limit(5).file.link)`