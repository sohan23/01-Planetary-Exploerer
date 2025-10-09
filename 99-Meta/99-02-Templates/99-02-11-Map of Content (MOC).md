---
<%*
// MOC (Map of Content) Template
const result = await tp.user.createNoteWithFolderSelection(tp);

if (!result) {
  await tp.file.delete(tp.file.find_tfile(tp.file.title));
  return;
}

await tp.file.rename(result.fullTitle);
await tp.file.move(result.targetFolder + "/" + result.fullTitle);
%>
title: <% result.fullTitle %>
aliases:
  - <% result.cleanTitle %>
tags:
  - moc
  - index
date: <% tp.date.now("YYYY-MM-DD") %>
cssclasses: moc
---

# 🗺️ <% result.cleanTitle %>

> [!abstract] Overview
> This is a Map of Content (MOC) for organizing and navigating related notes.

## 📊 Statistics

**Total Notes:** 
**Last Updated:** <% tp.date.now("YYYY-MM-DD") %>
**Status:** 🟢 Active

## 🎯 Core Concepts


## 📚 Main Topics

### Topic 1

- [[]]
- [[]]
- [[]]

### Topic 2

- [[]]
- [[]]
- [[]]

### Topic 3

- [[]]
- [[]]
- [[]]

## 🔗 Related MOCs

- [[]]
- [[]]

## 📖 Key Resources

### Books


### Papers


### Websites


### Videos


## 🚀 Projects Using This Knowledge

- [[]]

## 💡 Ideas & Questions

### Open Questions

- 

### Future Topics to Explore

- [ ] 
- [ ] 

## 📝 Recent Updates

```dataview
TABLE file.mtime as "Modified"
FROM [[<% result.cleanTitle %>]]
SORT file.mtime DESC
LIMIT 10
```

---

**Navigation:**
- [[00-Maps of Content/Main Index|← Main Index]]
