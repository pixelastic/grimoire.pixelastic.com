# Phase 3.1 — Translation

## Step 1: Parse and Group Descriptions

1. **Parse the text** and extract all references to image numbers

2. **Identify image groups** - Look for these patterns:

   **Explicit grouping phrases:**
   - "Les images 1, 2 et 3" / "Images 1, 2 and 3"
   - "L'image 1, l'image 2 et l'image 3"
   - "Images 4-7" / "Images 4 à 7"

   **Contextual grouping:**
   - Multiple consecutive images mentioned in the same sentence/paragraph
   - Example: "L'image 1, l'image 2 et l'image 3, c'est des machines de guerre parce que..."
   - This means images 1-3 share one description and should be in `<ImageGallery>`

   **Single images:**
   - Each image has its own dedicated paragraph/description
   - These remain standalone (no `<ImageGallery>`)

3. **Group the text by image number or group**
   - Create a mapping: `{imageNumbers: [1,2,3], description: "text about all three"}`
   - Or: `{imageNumbers: [15], description: "text about just this one"}`

4. **Check for missing descriptions**:
   - If some images have no description, ask:
   **"Je n'ai pas de description pour l'image X et l'image Y. Tu veux ajouter quelque chose, ou on les laisse sans texte ?"**

5. **Clarify if needed**:
   - If something is unclear or ambiguous, ask for clarification BEFORE translating

6. **Once confirmed**, proceed to Step 2

---

## Step 2: Translate Image Descriptions

### Core Principles

1. **Apply the glossary from workflows/glossary.md**
2. **Preserve technical precision**: Game names, system names, book titles stay as-is
   - Example: "Old-School Essentials", "Mörk Borg", "Dungeon Crawl Classics"
3. **Use first person voice**: "I usually run", not "you usually run"
4. **Keep it straightforward**: Just translate the content, don't worry about style yet

### Glossary FR → EN

**IMPORTANT**: Read the glossary file at `workflows/glossary.md` and apply those translations.

The glossary may be empty initially - it will be filled over time with RPG-specific terms.

### Important

- **NO italic text** in descriptions (only for special terms like book titles)
- Translate faithfully but naturally
- Don't try to make it sound polished yet (that comes later)

---

## Step 3: Write the Intro Paragraph

**Length**: 2-4 sentences

**Placement**: At the very top, BEFORE all images

### What to Include

- What is this discovery?
- What source/book/game is this from?
- Why did it catch your attention?
- One hook that makes the reader want to keep reading

### Keep It Simple

- Write a straightforward intro
- Don't overthink the style
- Just set up the story
- If user already described an intro in their French narration, use that
- If not, infer one from the overall content

---

## Step 4: Write the Conclusion Paragraph

**Length**: 2-4 sentences

**Placement**: At the very end, after all image descriptions

### What to Include

- What did you think of this discovery?
- What did you learn?
- How might you use it?
- Future plans or related ideas?

**Example**:
```
These tables stayed in my mind for quite a while. I eventually used them in my urban campaign, and they worked perfectly for generating emergent situations. The simplicity is what makes them so versatile.
```

---

## Step 5: Assemble the Full index.md

### Structure

For **single images**:
```markdown
<!-- Image 1 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 1>
```

For **grouped images** (multiple images with shared description):
```markdown
<ImageGallery>

<!-- Image 2 -->
![](image-YYYYMMDDHHMMSS.png)

<!-- Image 3 -->
![](image-YYYYMMDDHHMMSS.png)

<!-- Image 4 -->
![](image-YYYYMMDDHHMMSS.png)

</ImageGallery>

<shared description for images 2, 3, and 4>
```

### Full Document Structure

```markdown
---
title: "<Title in English>"
date: <YYYY-MM-DD>
tags: []
description: ""
---

<intro paragraph - 2-4 sentences, BEFORE images>

<!-- Image 1 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 1>

<ImageGallery>

<!-- Image 2 -->
![](image-YYYYMMDDHHMMSS.png)

<!-- Image 3 -->
![](image-YYYYMMDDHHMMSS.png)

</ImageGallery>

<shared description for images 2-3>

...

<conclusion paragraph - 2-4 sentences>
```

### Critical Rules

1. **Intro goes BEFORE all images** - not after Image 1
2. **ALL images get descriptions** - including Image 1
3. **NO duplicate images**
4. **NO italic text** - Write descriptions as regular paragraphs (only use italic for book titles)
5. **First person voice** - "I usually run", not "you usually run"
6. **ImageGallery for groups** - When multiple images share a description, wrap them in `<ImageGallery>` tags with the description AFTER the closing tag
7. **Standalone for singles** - Single images with their own description don't use ImageGallery

---

**Next**: Continue to [2-flow-polish.md](2-flow-polish.md)
