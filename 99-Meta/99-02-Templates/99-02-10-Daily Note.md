---
<%*
// Daily Note Template - Updated for new folder structure
const todayDate = tp.date.now("YYYY-MM-DD");
const todayFormatted = tp.date.now("dddd, MMMM DD, YYYY");
const fileName = tp.date.now("YYYY-MM-DD-ddd");

// Move to Daily Notes folder
await tp.file.rename(fileName);
await tp.file.move("05-Journals/05-01-Daily Notes/" + fileName);
%>
title: <% todayFormatted %>
date: <% todayDate %>
tags:
  - daily-note
  - journal
week: <% tp.date.now("YYYY-[W]WW") %>
cssclasses: daily-note
---

# <% todayFormatted %>

## 🌅 Morning

**Weather:** 
**Energy Level:** ⚪⚪⚪⚪⚪
**Mood:** 😊 😐 😔

**Today's Focus:**
- 

**Top 3 Priorities:**
1. [ ] 
2. [ ] 
3. [ ] 

## 📚 Study & Learning

**Earth Science Topics:**
- [ ] Mineralogy/Petrology
- [ ] Structural Geology
- [ ] Sedimentology
- [ ] Other: 

**Programming/ML:**
- [ ] Python
- [ ] Machine Learning
- [ ] Projects: 

**Notes Created/Updated:**
- [[01-01-Earth Science/]]
- [[01-02-Programming/]]

## 🎬 Content Creation

**YouTube:**
- [ ] Script: [[02-02-01-YouTube/]]
- [ ] Production: 

**Blog:**
- [ ] Draft: [[02-02-02-Blog/]]
- [ ] Published: 

**Research for Content:**
- [ ] Literature note: [[02-01-02-Literature Notes/]]
- [ ] Synthesis: [[02-01-03-Synthesis Notes/]] 

## 💼 Interview Prep

**Practice:**
- [ ] 
- [ ] 

**Questions Reviewed:**
- 

## ✅ Tasks Completed


## 💡 Ideas & Insights

**Fleeting Thoughts:**
- 

**New Ideas:**
- 

## 📖 What I Learned Today


## 🌙 Evening Reflection

**What went well:**
- 

**What could be improved:**
- 

**Grateful for:**
1. 
2. 
3. 

**Tomorrow's Prep:**
- [ ] 
- [ ] 

---

## Quick Links
- [[<% tp.date.now("YYYY-MM-DD", -1, todayDate, "YYYY-MM-DD") %>-<% tp.date.now("ddd", -1) %>|← Yesterday]]
- [[<% tp.date.now("YYYY-MM-DD", 1, todayDate, "YYYY-MM-DD") %>-<% tp.date.now("ddd", 1) %>|Tomorrow →]]
- [[<% tp.date.now("YYYY-[W]WW") %>|This Week]]
