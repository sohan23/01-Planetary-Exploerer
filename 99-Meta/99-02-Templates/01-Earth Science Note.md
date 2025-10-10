<%*
// Earth Science Note Template
const result = await tp.user.autoNumberedNoteCreation(tp);

if (!result) {
  // User cancelled
  return;
}

// Move and rename the file
await tp.file.move(`${result.folderPath}/${result.fullTitle}`);
-%>
---
title: <% result.fullTitle %>
aliases:
  - <% result.cleanTitle %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - earth-science
  - geology
topic: ""
discipline: ""
status: 🌱 seedling
---

# <% result.cleanTitle %>

## Overview

> [!summary] Quick Summary
> Brief description of this topic


## Key Concepts

### Concept 1


### Concept 2


### Concept 3


## Detailed Explanation


## Real-World Applications


## Related Topics

- [[]]
- [[]]


## Questions & Further Study

- [ ] 
- [ ] 


## References

- 


---

**Status**: 🌱 Seedling → 🌿 Budding → 🌳 Evergreen  
**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
