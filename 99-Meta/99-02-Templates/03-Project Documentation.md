<%*
// Project Documentation Template
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
  - project
  - documentation
project-type: ""
status: 🔵 planning
priority: low | medium | high
---

# <% result.cleanTitle %>

## Project Overview

**Purpose**: 
**Start Date**: <% tp.date.now("YYYY-MM-DD") %>
**Target Completion**: 
**Status**: 🔵 Planning → 🟡 In Progress → 🟢 Complete


## Goals & Objectives

### Primary Goals
- [ ] 
- [ ] 

### Success Criteria
- 
- 


## Technical Stack

**Language**: 
**Framework**: 
**Libraries**: 
**Tools**: 


## Project Structure

\`\`\`
project-root/
├── src/
├── tests/
├── docs/
└── README.md
\`\`\`


## Features

### Core Features
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

### Optional Features
- [ ] Optional 1
- [ ] Optional 2


## Implementation Plan

### Phase 1: Setup
- [ ] 
- [ ] 

### Phase 2: Development
- [ ] 
- [ ] 

### Phase 3: Testing
- [ ] 
- [ ] 

### Phase 4: Deployment
- [ ] 
- [ ] 


## Code Snippets

### Key Function 1
\`\`\`python

\`\`\`

### Key Function 2
\`\`\`python

\`\`\`


## Challenges & Solutions

### Challenge 1
**Problem**: 
**Solution**: 


## Related Projects

- [[]]
- [[]]


## Resources & References

- 
- 


## Notes


---

**Repository**: 
**Demo**: 
**Created**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
