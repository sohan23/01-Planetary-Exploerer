<%*
// Daily Note Template
const result = await tp.user.autoNumberedNoteCreation(tp);

if (!result) {
  return;
}

await tp.file.move(`${result.folderPath}/${result.fullTitle}`);
-%>
---
title: <% tp.date.now("dddd, MMMM DD, YYYY") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - daily-note
  - journal
week: <% tp.date.now("YYYY-[W]WW") %>
---

# <% tp.date.now("dddd, MMMM DD, YYYY") %>

## 🌅 Morning

**Weather**: 
**Energy**: ⚪⚪⚪⚪⚪  
**Mood**: 😊 😐 😔

### Today's Focus
- 


### Top 3 Priorities
1. [ ] 
2. [ ] 
3. [ ] 


## 📚 Learning & Work

### Earth Science
- 

### Programming
- 

### Content Creation
- 


## ✅ Accomplishments


## 💡 Ideas & Insights


## 📝 Notes


## 🌙 Evening Reflection

### What Went Well
- 

### What Could Be Better
- 

### Grateful For
1. 
2. 
3. 


### Tomorrow's Prep
- [ ] 
- [ ] 


---

**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
