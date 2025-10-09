---
<%*
// YouTube Script Template
const result = await tp.user.createNoteWithFolderSelection(tp);

if (!result) {
  await tp.file.delete(tp.file.find_tfile(tp.file.title));
  return;
}

await tp.file.rename(result.fullTitle);
await tp.file.move(result.targetFolder + "/" + result.fullTitle);
%>
title: <% result.fullTitle %>
aliases:
  - <% result.cleanTitle %>
tags:
  - youtube
  - script
  - video-production
video-length: ""
target-audience: ""
date: <% tp.date.now("YYYY-MM-DD") %>
status: 🔴 draft
publish-date: ""
cssclasses: 
---

# <% result.cleanTitle %>

## Video Metadata

**Target Length:** 
**Target Audience:** 
**Thumbnail Idea:** 
**SEO Keywords:** 

## Hook (First 15 seconds)

> [!important] Attention Grabber
> What will make viewers stop scrolling?

```
[Opening line - make it compelling!]
```

## Introduction (30-60 seconds)

- Who am I?
- What's this video about?
- Why should they watch?
- What will they learn?

## Main Content

### Section 1: 

**Key Points:**
- 
- 

**Visuals Needed:**
- 
- 

**B-Roll Ideas:**
- 

---

### Section 2: 

**Key Points:**
- 
- 

**Visuals Needed:**
- 

**B-Roll Ideas:**
- 

---

### Section 3: 

**Key Points:**
- 
- 

**Visuals Needed:**
- 

**B-Roll Ideas:**
- 

## Conclusion

**Summary:**
- Recap main points

**Call to Action:**
- [ ] Like & Subscribe
- [ ] Check out related video: [[]]
- [ ] Join community/Discord
- [ ] Download resources

## Production Notes

### Research Sources
- [[]]
- 

### Assets Needed
- [ ] Diagrams
- [ ] Stock footage
- [ ] Music
- [ ] Sound effects

### Filming Notes
- Location:
- Equipment:
- Lighting:

### Post-Production
- [ ] Edit rough cut
- [ ] Add graphics/animations
- [ ] Color correction
- [ ] Sound mixing
- [ ] Create thumbnail
- [ ] Write description
- [ ] Add chapters/timestamps

## Cross-Platform Content

**Related Blog Post:**
- [[02-02-02-Blog/]] (if same topic)
- Blog URL: 
- Published: 

**Content Relationship:**
- [ ] Blog post is companion piece
- [ ] Blog post is expanded version
- [ ] Blog post is summary
- [ ] Independent content

## Video Description Template

```
[Compelling first line with keywords]

In this video, I explain...

🎯 Timestamps:
0:00 - Introduction
0:30 - 
2:15 - 
5:00 - Conclusion

📚 Resources mentioned:
- 

🔗 Related Videos:
- 

📝 Read the full blog post: [Link]

💬 Let me know in the comments...

#EarthScience #Geology #Education
```

---

**Script Draft:** 🔴 Draft → 🟡 Review → 🟢 Final  
**Production:** ⬜ Pre-prod → 🎬 Filming → ✂️ Editing → ✅ Published
