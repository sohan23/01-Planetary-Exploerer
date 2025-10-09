---
<%*
// Use the improved auto-numbering module with better hierarchical numbering
const result = await tp.user["autoNumberFile-improved"](tp);

// Rename the file with the full numbered title
await tp.file.rename(result.fullTitle);

// Detect journal type based on title or prompt user
let journalType = "long-form";
let targetFolder = "05-Journals/05-03-Long Form Reflections/";
let suggestedTags = ["journal", "reflection"];

// Check if this is a weekly review (contains "week" in title)
if (result.cleanTitle.toLowerCase().includes("week")) {
    journalType = "weekly";
    targetFolder = "05-Journals/05-02-Weekly Reviews/";
    suggestedTags = ["journal", "weekly-review"];
}

// Auto-move to the correct journal subfolder
const fileName = result.fullTitle + ".md";
await tp.file.move(targetFolder + fileName);
%>
title: <% result.fullTitle %>
aliases:
 - <% result.cleanTitle %>
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
type: <% journalType %>
tags: <% suggestedTags.join(", ") %>
cssclasses: 
---

# <% result.cleanTitle %>

**Date:** <%tp.date.now("YYYY-MM-DD HH:mm")%>

<% if (journalType === "weekly") { %>
## 📅 Week Overview
**Week of:** <%tp.date.now("YYYY-MM-DD")%>

## ✅ Accomplishments
- 
- 

## 📚 Learning Highlights
**Earth Science:**
- 

**Programming/ML:**
- 

**Content Creation:**
- YouTube: 
- Blog: 

## 🎯 Challenges & Solutions


## 🔄 What Went Well


## 🔧 What Needs Improvement


## 📈 Next Week's Focus
- [ ] 
- [ ] 
- [ ] 

<% } else { %>
## 💭 Today's Thoughts


## 🧠 Learning & Insights
**What did I learn today?**


**Key insights:**
- 


## 🎯 Progress & Achievements
**What did I accomplish?**
- 


## 🔬 Research Progress
- Literature notes: [[02-01-02-Literature Notes/]]
- Synthesis: [[02-01-03-Synthesis Notes/]]


## 🎬 Content Creation Progress
- YouTube: [[02-02-01-YouTube/]]
- Blog: [[02-02-02-Blog/]]


## 📝 Questions & Curiosities


## 🔮 Looking Forward
**Tomorrow's priorities:**
- [ ] 
- [ ] 

<% } %>

---
**Related:**
- [[05-Journals/05-01-Daily Notes/]] - Daily notes
- [[05-Journals/05-02-Weekly Reviews/]] - Weekly reviews
- [[05-Journals/05-03-Long Form Reflections/]] - Long reflections

**Created:** <% tp.date.now("YYYY-MM-DD HH:mm") %>
**Last Modified:** <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>


