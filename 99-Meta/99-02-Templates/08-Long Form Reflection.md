<%*
// Long Form Reflection Template
const result = await tp.user.autoNumberedNoteCreation(tp);

if (!result) {
  return;
}

await tp.file.move(`${result.folderPath}/${result.fullTitle}`);
-%>
---
title: <% result.fullTitle %>
aliases:
  - <% result.cleanTitle %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - journal
  - reflection
  - long-form
---

# <% result.cleanTitle %>

**Date**: <% tp.date.now("YYYY-MM-DD HH:mm") %>

---

## 💭 Thoughts






---

## 🧠 Insights






---

## 📝 Notes






---

**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
