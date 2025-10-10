<%*
// Ideas Template
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
  - idea
  - brainstorming
category: content | project | research | other
priority: low | medium | high
status: 💡 idea
---

# <% result.cleanTitle %>

## The Idea

> [!idea] Core Concept
> One-sentence description of the idea


## Why This Matters


## Potential Applications

1. 
2. 
3. 


## Implementation Thoughts

### What Would Be Needed
- 
- 
- 

### Challenges
- 
- 

### Opportunities
- 
- 


## Related Ideas

- [[]]
- [[]]


## Next Steps

- [ ] 
- [ ] 
- [ ] 


## Research/Resources

- 
- 


## Notes & Brainstorming


---

**Status**: 💡 Idea → 📋 Planned → 🚀 In Progress → ✅ Done  
**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
