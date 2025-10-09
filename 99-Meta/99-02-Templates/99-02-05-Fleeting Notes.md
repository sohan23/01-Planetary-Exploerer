---
<%*
// Use the improved auto-numbering module with better hierarchical numbering
const result = await tp.user["autoNumberFile-improved"](tp);

// Rename the file with the full numbered title
await tp.file.rename(result.fullTitle);

// Auto-move to Fleeting Notes folder
const fileName = result.fullTitle + ".md";
await tp.file.move("03-Ideas/03-01-Fleeting Notes/" + fileName);
%>
title: <% result.fullTitle %>
aliases:
 - <% result.cleanTitle %>
tags: 
  - fleeting
  - quick-capture
date: <% tp.date.now("YYYY-MM-DD") %>
captured: <% tp.date.now("YYYY-MM-DD HH:mm") %>
status: raw
cssclasses: 
---

# <% result.cleanTitle %>

## 💡 Quick Capture
<!-- Write down the idea/thought as quickly as possible -->


## 🎯 Category
- [ ] YouTube video idea
- [ ] Blog post topic
- [ ] Research topic
- [ ] Learning note
- [ ] Project idea
- [ ] Content idea
- [ ] Random thought

## 🔗 Possible Next Steps
<!-- Where should this go next? -->
- [ ] Refine into permanent note: [[03-02-Permanent Notes/]]
- [ ] Turn into content: [[02-02-Content Creation/]]
- [ ] Research further: [[02-01-Scientific Research Paper/]]
- [ ] Archive: [[04-Archive/]]

## 📝 Context
<!-- Any additional context or related information -->


---
**Related:**
- [[03-01-Fleeting Notes/]] - Other fleeting notes
- [[03-02-Permanent Notes/]] - Refine into permanent note

**Captured:** <% tp.date.now("YYYY-MM-DD HH:mm") %>
**Review by:** <% tp.date.now("YYYY-MM-DD", 7) %> (7 days from now)