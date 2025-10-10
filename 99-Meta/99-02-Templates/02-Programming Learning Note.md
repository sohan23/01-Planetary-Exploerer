<%*
// Programming Learning Note Template
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
  - programming
  - learning
language: ""
difficulty: beginner | intermediate | advanced
status: 📝 learning
---

# <% result.cleanTitle %>

## Overview

**Language/Framework**: 
**Category**: 
**Difficulty**: ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard


## Concept Explanation


## Syntax

\`\`\`python
# Basic syntax example

\`\`\`


## Code Example

\`\`\`python
"""
Complete working example
"""


\`\`\`


## Use Cases

1. **Use Case 1**: 
2. **Use Case 2**: 
3. **Use Case 3**: 


## Common Mistakes

### ❌ Mistake 1


### ❌ Mistake 2


## Best Practices

### ✅ Practice 1


### ✅ Practice 2


## Related Concepts

- [[]]
- [[]]


## Practice Exercises

### Exercise 1

**Problem**: 

**Solution**: 
\`\`\`python

\`\`\`


## Resources

- 
- 


---

**Status**: 📝 Learning → ✅ Understood → 🚀 Mastered  
**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
