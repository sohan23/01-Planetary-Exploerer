<%-*
// --- CONFIGURATION ---
// 1. Set the hierarchical prefix for Zotero imports in the 02-01-01-Zotero folder
const filePrefix = "02-01-01";

// 2. Get the title from the Zotero {{title}} placeholder.
// This is the raw title, which might contain characters illegal for filenames.
const zoteroTitle = "{{title}}";

// 3. Sanitize the title to make it a valid filename.
// This removes characters like : / \ ? * | " < >
const sanitizedTitle = zoteroTitle.replace(/[:/\\?*|"<>\n]/g, " ").replace(/\s+/g, ' ').trim();

// --- SCRIPT (Auto-Numbering Logic) ---
// Get the current folder where this note is being created
const currentFolder = tp.file.folder(true);

// Get all files in the current folder (Zotero folder)
const folder = this.app.vault.getAbstractFileByPath(currentFolder);
const files = folder ? folder.children.filter(f => f.extension === "md") : [];

// Regular expression to find files that match the pattern "02-01-01-XX"
const regex = new RegExp(`^${filePrefix}-(\\d+)`);

let maxNumber = 0;

// Loop through files in the Zotero folder to find the highest number
files.forEach(file => {
  const match = file.basename.match(regex);
  if (match) {
    const number = parseInt(match[1], 10);
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
});

// Calculate the next number
const nextNumber = maxNumber + 1;

// Format the number to always have at least two digits (e.g., 1 -> "01")
const formattedNumber = String(nextNumber).padStart(2, '0');

// Create the new file name with hierarchical numbering
// This will look like: "02-01-01-01-Your Sanitized Zotero Title"
const newFileName = `${filePrefix}-${formattedNumber}-${sanitizedTitle}`;

// Rename the file
await tp.file.rename(newFileName);
-%>
---
title: "{{title}}"
aliases:
  - "{{citekey}}"
DOI: "{{DOI}}"
URL: "{{url}}"
tags: {% if allTags %}{{allTags}}{% endif %}
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
updated: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
---
  
> [!Cite]  
> {{bibliography}}  
  
>[!Synth]  
>**Contribution**::  
>  
>**Related**:: {% for relation in relations | selectattr("citekey") %} [[@{{relation.citekey}}]]{% if not loop.last %}, {% endif%} {% endfor %}  
>  
  
>[!md]  
{% for type, creators in creators | groupby("creatorType") -%}  
{%- for creator in creators -%}  
> **{{"First" if loop.first}}{{type | capitalize}}**::  
{%- if creator.name %} {{creator.name}}  
{%- else %} {{creator.lastName}}, {{creator.firstName}}  
{%- endif %}  
{% endfor %}~  
{%- endfor %}  
> **Title**:: {{title}}  
> **Year**:: {{date | format("YYYY")}}  
> **Citekey**:: {{citekey}} {%- if itemType %}  
> **itemType**:: {{itemType}}{%- endif %}{%- if itemType == "journalArticle" %}  
> **Journal**:: *{{publicationTitle}}* {%- endif %}{%- if volume %}  
> **Volume**:: {{volume}} {%- endif %}{%- if issue %}  
> **Issue**:: {{issue}} {%- endif %}{%- if itemType == "bookSection" %}  
> **Book**:: {{publicationTitle}} {%- endif %}{%- if publisher %}  
> **Publisher**:: {{publisher}} {%- endif %}{%- if place %}  
> **Location**:: {{place}} {%- endif %}{%- if pages %}  
> **Pages**:: {{pages}} {%- endif %}{%- if DOI %}  
> **DOI**:: {{DOI}} {%- endif %}{%- if ISBN %}  
> **ISBN**:: {{ISBN}} {%- endif %}  
  
> [!LINK]  
> {%- for attachment in attachments | filterby("path", "endswith", ".pdf") %}  
> [{{attachment.title}}](file://{{attachment.path | replace(" ", "%20")}}) {%- endfor -%}.  
  
> [!Abstract]  
> {%- if abstractNote %}  
> {{abstractNote}}  
> {%- endif -%}.  
>  
# Notes  
> {%- if markdownNotes %}  
>{{markdownNotes}}{%- endif -%}.  
  
  
# Annotations 

{%- macro calloutHeader(type, color) -%}  
{%- if type == "highlight" -%}  
<mark style="background-color: {{color}}">Quote</mark>  
{%- endif -%}  
  
{%- if type == "text" -%}  
Note  
{%- endif -%}  
{%- endmacro -%}  
  
{% persist "annotations" %}  
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}  
{% if newAnnotations.length > 0 %}  
  
### Imported: {{importDate | format("YYYY-MM-DD h:mm a")}}  
  
  
{% for a in newAnnotations %}  
{{calloutHeader(a.type, a.color)}}  
> {{a.annotatedText}}  
{% endfor %}  
{% endif %}  
{% endpersist %}