<%*
// Blog Post Note Template
const result = await tp.user.autoNumberedNoteCreation(tp);

if (!result) {
  // User cancelled
  return;
}

// Move and rename the file
await tp.file.move(`${result.folderPath}/${result.fullTitle}`);
-%>
---
title: <% result.cleanTitle %>
author: "Your Name"
pubDatetime: <% tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
modDatetime: 
slug: <% result.cleanTitle.toLowerCase().replace(/ /g, '-') %>
featured: false
draft: false
tags:
  - 
description: ""
ogImage: 
canonicalURL: 
---

## Table of contents

## Introduction

- 

## Section 1

- 

## Section 2

- 

## Conclusion

- 