---
<%*
// Blog Post Template for Astro Framework
const result = await tp.user.createNoteWithFolderSelection(tp);

if (!result) {
  await tp.file.delete(tp.file.find_tfile(tp.file.title));
  return;
}

await tp.file.rename(result.fullTitle);
await tp.file.move(result.targetFolder + "/" + result.fullTitle);

// Generate slug from title (lowercase, hyphens, no special chars)
const slug = result.cleanTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
%>
title: <% result.cleanTitle %>
author: Your Name
pubDatetime: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>Z
modDatetime: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>Z
slug: <% slug %>
featured: false
draft: true
tags:
  - earth-science
  - blog
description: |
  Write your meta description here (150-160 characters).
  This appears in search results and social media shares.
---

# <% result.cleanTitle %>

> [!abstract] Meta Description
> Write your SEO meta description here (150-160 characters)

## Article Info

**Category:** 
**Keywords:** 
**Target Audience:** 
**Reading Time:** ~X minutes
**Featured Image:** `06-Media/06-01-Images/`

---

## Opening Hook

[Start with a compelling opening that grabs attention]


## Introduction

[Set the context and tell readers what they'll learn]


## Main Content

### Section 1: 

[Content here]

**Key Takeaway:** 


### Section 2: 

[Content here]

**Key Takeaway:** 


### Section 3: 

[Content here]

**Key Takeaway:** 


## Practical Examples

[Real-world examples, case studies, or demonstrations]


## Common Mistakes / FAQ

**Q: **
A: 

**Q: **
A: 


## Conclusion

[Summarize main points and provide clear next steps]


## Call to Action

[What should readers do next?]
- [ ] Subscribe to newsletter
- [ ] Share on social media
- [ ] Read related post: [[]]
- [ ] Try the technique


## Related Content

**Related Blog Posts:**
- [[]]
- [[]]

**Related YouTube Video:**
- [[02-02-01-YouTube/]] (if same topic)

**YouTube Video Link:**
- Video ID: 
- Video URL: 
- Published: 

**Source Research:**
- [[02-01-02-Literature Notes/]]
- [[03-02-Permanent Notes/]]


## Images & Media

### Featured Image
```
Location: 06-Media/06-01-Images/
Alt Text: 
Caption: 
```

### Inline Images
- [ ] Image 1: 
- [ ] Image 2: 
- [ ] Diagram: 


## SEO Checklist

- [ ] Title is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] Featured image is optimized (< 200KB)
- [ ] All images have alt text
- [ ] Keywords in first paragraph
- [ ] Keywords in headings
- [ ] Internal links added
- [ ] External authoritative links added
- [ ] Clear H2/H3 structure
- [ ] Readability score checked


## Publishing Checklist

- [ ] Proofread and spell-check
- [ ] Check formatting
- [ ] Add featured image
- [ ] Optimize images
- [ ] Add internal links
- [ ] Add external links
- [ ] Preview on mobile
- [ ] Schedule social media posts
- [ ] Set publish date
- [ ] Move to Published folder


## Social Media Posts

### Twitter/X Thread
```
1/ [Hook tweet]

2/ [Main point 1]

3/ [Main point 2]

4/ [Call to action + link]
```

### LinkedIn Post
```
[Professional angle on the topic]

[Link to blog post]

#Hashtag1 #Hashtag2
```

### Instagram Caption
```
[Visual description]

[Key takeaway]

Link in bio!

#hashtag1 #hashtag2
```


## Analytics Notes

**Target Metrics:**
- Page views: 
- Avg. time on page: 
- Bounce rate: 
- Conversions: 


## Update Log

**<% tp.date.now("YYYY-MM-DD") %>:** Initial draft created
**:** 


---

**Status:** 🔴 Draft → 🟡 In Review → 🟢 Published → 🔵 Update Needed
