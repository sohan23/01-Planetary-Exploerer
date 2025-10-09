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
  - python
  - programming
  - coding
category: 
difficulty: beginner | intermediate | advanced
date: ${tp.date.now("YYYY-MM-DD")}
status: 📝 draft
cssclasses: 
---

# ${result.cleanTitle}

## 📋 Overview

> [!summary] What You'll Learn
> Brief description of what this Python concept/script does

**Use Case**: 
**Prerequisites**: 

---

## 🎯 Concept Explanation

<!-- Explain the Python concept in simple terms -->


---

## 💻 Code Implementation

### Basic Syntax

\`\`\`python
# Basic example


\`\`\`

### Complete Example

\`\`\`python
"""
Module docstring explaining what this does
"""

# Imports


# Constants


# Main code


if __name__ == "__main__":
    # Test/demo code
    pass
\`\`\`

---

## 🔧 Parameters & Arguments

### Function Signature
\`\`\`python
def function_name(param1, param2, *args, **kwargs):
    """Docstring"""
    pass
\`\`\`

### Parameters
- **param1** (type): Description
- **param2** (type): Description
- **returns**: Description of return value

---

## 📊 Examples & Use Cases

### Example 1: Basic Usage
\`\`\`python
# Example code


# Expected output:
# 
\`\`\`

### Example 2: Advanced Usage
\`\`\`python
# Example code


# Expected output:
# 
\`\`\`

### Example 3: Real-World Application
\`\`\`python
# Practical example


\`\`\`

---

## ⚠️ Common Pitfalls & Best Practices

### ❌ Common Mistakes

\`\`\`python
# Bad approach


\`\`\`

### ✅ Best Practices

\`\`\`python
# Good approach


\`\`\`

### 💡 Tips
- Tip 1
- Tip 2
- Tip 3

---

## 🔗 Related Concepts

### Python Basics
- [[Python Data Types]]
- [[Python Functions]]
- [[Python Classes]]

### Related Topics
- 
- 

### Libraries/Modules
- \`module_name\`: Description

---

## 🐛 Debugging & Troubleshooting

### Common Errors

**Error 1**: \`ErrorType\`
- **Cause**: 
- **Solution**: 

**Error 2**: \`ErrorType\`
- **Cause**: 
- **Solution**: 

---

## 🚀 Performance Considerations

- **Time Complexity**: O(?)
- **Space Complexity**: O(?)
- **Optimization Tips**: 

---

## 📚 Resources & References

### Official Documentation
- [Python Docs](https://docs.python.org/3/)
- 

### Tutorials & Articles
- 

### Videos
- 

### Books
- 

---

## 🧪 Practice Exercises

### Exercise 1
**Problem**: 
**Solution**: 
\`\`\`python
# Your solution here

\`\`\`

### Exercise 2
**Problem**: 
**Solution**: 
\`\`\`python
# Your solution here

\`\`\`

---

## 📝 Personal Notes

<!-- Your observations, insights, or additional notes -->


---

## 🗂️ Metadata

**Created**: ${tp.date.now("YYYY-MM-DD")}
**Last Modified**: ${tp.date.now("YYYY-MM-DD")}
**Python Version**: 3.x
**Status**: 📝 Draft | ✅ Tested | 🚀 Production
**Review Date**: 

---

## 📌 Quick Reference

> [!tip] Key Takeaway
> One-sentence summary of the most important point

> [!example] Quick Example
> \`\`\`python
> # Minimal working example
> 
> \`\`\`
`;

// Create the new file in the target folder
const targetFolder = app.vault.getAbstractFileByPath(result.targetFolder);
const newFile = await tp.file.create_new(content, result.fullTitle, false, targetFolder);

// Open the newly created file
if (newFile) {
  await app.workspace.getLeaf(false).openFile(newFile);
}
-%>
