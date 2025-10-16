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
Date Created: <% tp.date.now("YYYY-MM-DD") %>
cssclasses: 
Tags: 
 - earth-science
---

# <% result.cleanTitle %>

## Topic

-

## Sub-topic

-

## Related Notes

-

---

## Content

-
