<%*
// Interview Question Template
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
  - interview
  - preparation
type: technical | behavioral | case-study
difficulty: easy | medium | hard
company: ""
status: 📝 preparing
---

# <% result.cleanTitle %>

## Question Details

**Type**: Technical | Behavioral | Case Study  
**Difficulty**: ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard  
**Category**: 
**Companies**: 


## The Question


### Follow-up Questions
1. 
2. 
3. 


## Your Answer

### STAR Method (Behavioral)
- **Situation**: 
- **Task**: 
- **Action**: 
- **Result**: 

### Technical Approach
**Step 1**: 


**Step 2**: 


**Step 3**: 


## Code Solution (if applicable)

\`\`\`python
# Your solution


\`\`\`

**Time Complexity**: O(?)  
**Space Complexity**: O(?)


## Key Points to Cover

1. 
2. 
3. 


## What They're Looking For


## Common Mistakes to Avoid

- ❌ 
- ❌ 


## Best Practices

- ✅ 
- ✅ 


## Practice Log

### Practice 1
- **Date**: 
- **Performance**: ⭐⭐⭐☆☆
- **Notes**: 


## Related Questions

- [[]]
- [[]]


## Resources

- 
- 


---

**Last Practiced**: 
**Confidence Level**: 🔴 Low | 🟡 Medium | 🟢 High  
**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
