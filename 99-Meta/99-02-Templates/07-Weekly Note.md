<%*
// Weekly Note Template
const result = await tp.user.autoNumberedNoteCreation(tp);

if (!result) {
  return;
}

await tp.file.move(`${result.folderPath}/${result.fullTitle}`);
-%>
---
title: <% result.fullTitle %>
aliases:
  - Week <% tp.date.now("WW YYYY") %>
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - weekly-review
  - journal
week: <% tp.date.now("YYYY-[W]WW") %>
---

# Week <% tp.date.now("WW") %> - <% tp.date.now("YYYY") %>

**Week of**: <% tp.date.now("MMMM DD, YYYY") %>

---

## 📅 Week Overview


## ✅ Accomplishments

### Earth Science
- 
- 

### Programming/ML
- 
- 

### Content Creation
- YouTube: 
- Blog: 


## 📚 Learning Highlights

### New Concepts Learned
1. 
2. 
3. 

### Key Insights
- 
- 


## 🎯 Goals Review

### Completed
- [x] 
- [x] 

### In Progress
- [ ] 
- [ ] 

### Deferred
- [ ] 
- [ ] 


## 🔄 What Went Well


## 🔧 What Needs Improvement


## 🌱 Personal Growth


## 📈 Next Week's Focus

### Primary Goals
1. [ ] 
2. [ ] 
3. [ ] 

### Areas to Improve
- 
- 


## 📊 Metrics

**Daily Notes Completed**: / 7  
**Study Hours**: 
**Content Created**: 


---

**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
