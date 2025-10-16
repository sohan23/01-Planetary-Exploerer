<%*
// Python Note Template
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
date Created: <% tp.date.now("YYYY-MM-DD") %>
cssclass: 
tags: 
 - python
---

# <% result.cleanTitle %>

## Module/Concept

-

## Related Notes

-

---

## Code Snippet

```python

```

## Explanation

-
