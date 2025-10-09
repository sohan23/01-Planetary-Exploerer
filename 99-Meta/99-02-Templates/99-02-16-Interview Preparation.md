---
<%*
// Use the folder selection and auto-numbering script
const result = await tp.user.createNoteWithFolderSelection(tp);

// If user cancelled, stop
if (!result) {
  new Notice("Note creation cancelled");
  return;
}

// Build the note content
const content = `---
title: ${result.fullTitle}
aliases:
  - ${result.cleanTitle}
tags:
  - interview
  - job-search
  - career
interview-type: technical | behavioral | case-study | coding
difficulty: easy | medium | hard
company: 
position: 
date: ${tp.date.now("YYYY-MM-DD")}
status: 📝 preparing
cssclasses: 
---

# ${result.cleanTitle}

## 📋 Overview

> [!summary] Topic Summary
> Brief description of this interview topic or question

**Type**: Technical | Behavioral | System Design | Coding
**Difficulty**: ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard
**Category**: Data Structures | Algorithms | Earth Science Domain | Management
**Companies Asked**: Company names (if known)

---

## ❓ Question / Topic

### Main Question


### Follow-up Questions
1. Follow-up 1?
2. Follow-up 2?
3. Follow-up 3?

### What They're Really Asking
<!-- What the interviewer wants to assess -->


---

## 💡 Key Concepts to Cover

### Must-Know Points
1. **Point 1**: 
2. **Point 2**: 
3. **Point 3**: 

### Technical Terms
- **Term 1**: Definition
- **Term 2**: Definition
- **Term 3**: Definition

---

## 📝 Your Answer / Approach

### STAR Method (for Behavioral)
- **Situation**: 
- **Task**: 
- **Action**: 
- **Result**: 

### Technical Approach (for Technical)
**Step 1**: 


**Step 2**: 


**Step 3**: 


### Code Solution (if applicable)
\`\`\`python
# Your solution


\`\`\`

**Time Complexity**: O(?)
**Space Complexity**: O(?)

---

## 🎯 Example Scenarios

### Example 1
**Scenario**: 
**Your Response**: 


### Example 2
**Scenario**: 
**Your Response**: 


---

## ✅ Best Practices & Tips

### Do's ✅
- Do this
- Do that
- Remember to mention X

### Don'ts ❌
- Avoid this
- Don't forget Y
- Never say Z

### Pro Tips 💡
- Tip 1
- Tip 2
- Tip 3

---

## 🔗 Related Topics

### Similar Questions
- [[Related Question 1]]
- [[Related Question 2]]

### Prerequisites
- [[Concept 1]]
- [[Concept 2]]

### Follow-up Topics
- 
- 

---

## 🏢 Company-Specific Notes

### Company Culture Fit


### Company Values to Highlight
- Value 1
- Value 2
- Value 3

### Role-Specific Considerations


---

## 📊 Practice Log

### Practice Session 1
- **Date**: 
- **Duration**: 
- **Performance**: ⭐⭐⭐☆☆
- **Notes**: 
- **Areas to Improve**: 

### Practice Session 2
- **Date**: 
- **Duration**: 
- **Performance**: ⭐⭐⭐⭐☆
- **Notes**: 
- **Areas to Improve**: 

---

## 🎥 Resources & References

### Videos
- [Video Title](URL)
- 

### Articles & Guides
- [Article Title](URL)
- 

### Books
- Book Title (Chapter/Page)
- 

### Practice Platforms
- LeetCode Problem #
- HackerRank Challenge
- 

---

## 🧠 Mental Models & Frameworks

### Framework to Use


### Key Questions to Ask Yourself
1. 
2. 
3. 

### Red Flags to Avoid


---

## 📌 Talking Points

### Opening Statement
> "I'd like to share an experience where..."

### Key Stories to Tell
1. **Story 1**: 
2. **Story 2**: 
3. **Story 3**: 

### Quantifiable Achievements
- Improved X by Y%
- Reduced Z from A to B
- Managed team of N people

---

## 🎓 Domain Knowledge (Earth Science Specific)

### Technical Expertise to Highlight
- Expertise in [specific area]
- Experience with [tool/method]
- Knowledge of [domain concept]

### Projects to Mention
- [[Project 1]]: Brief description
- [[Project 2]]: Brief description

### Publications/Research
- Paper/Research work
- 

---

## 🤔 Common Mistakes & How to Avoid

### Mistake 1
**What**: 
**Why It's Wrong**: 
**How to Avoid**: 

### Mistake 2
**What**: 
**Why It's Wrong**: 
**How to Avoid**: 

---

## 💬 Sample Dialogue

**Interviewer**: [Question]

**You**: [Your response]

**Interviewer**: [Follow-up]

**You**: [Your response]

---

## 📝 Personal Notes

### Strengths
- 
- 

### Areas for Improvement
- 
- 

### Feedback Received
- 
- 

### Next Steps
- [ ] Practice this scenario 3 more times
- [ ] Research company-specific examples
- [ ] Review related technical concepts
- [ ] Mock interview with friend/mentor

---

## 🗂️ Metadata

**Created**: ${tp.date.now("YYYY-MM-DD")}
**Last Practiced**: 
**Next Practice**: 
**Confidence Level**: 🔴 Low | 🟡 Medium | 🟢 High
**Interview Date**: 
**Outcome**: 

---

## 📌 Quick Reference Card

> [!tip] 30-Second Version
> Ultra-condensed answer for quick recall:
> 
> 1. Point 1
> 2. Point 2
> 3. Point 3

> [!example] One Key Example
> Brief example to illustrate your point
`;

// Create the new file in the target folder
const targetFolder = app.vault.getAbstractFileByPath(result.targetFolder);
const newFile = await tp.file.create_new(content, result.fullTitle, false, targetFolder);

// Open the newly created file
if (newFile) {
  await app.workspace.getLeaf(false).openFile(newFile);
}
-%>
