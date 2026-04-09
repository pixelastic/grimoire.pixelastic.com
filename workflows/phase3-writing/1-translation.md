# Phase 3.1 — Translation

## Step 1: Parse and Group Descriptions

1. **Parse the text** and extract all references to image numbers

2. **Group the text by image number**

3. **Check for missing descriptions**:
   - If some images have no description, ask:
   **"Je n'ai pas de description pour l'image X et l'image Y. Tu veux ajouter quelque chose, ou on les laisse sans texte ?"**

4. **Clarify if needed**:
   - If something is unclear or ambiguous, ask for clarification BEFORE translating

5. **Once confirmed**, proceed to Step 2

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

**Placement**: Directly after Image 1 (Image 1 serves as the header)

### What to Include

- What is this discovery?
- What source/book/game is this from?
- Why did it catch your attention?
- One hook that makes the reader want to keep reading

### Keep It Simple

- Write a straightforward intro
- Don't overthink the style
- Just set up the story

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

```markdown
---
title: "<Title in English>"
date: <YYYY-MM-DD>
tags: []
description: ""
---

<!-- Image 1 -->
![](image-YYYYMMDDHHMMSS.png)

<brief intro - 1-2 sentences>

<!-- Image 2 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 2>

<!-- Image 3 -->
![](image-YYYYMMDDHHMMSS.png)

<description for image 3>

...

<conclusion - 1 sentence, OPTIONAL>
```

### Critical Rules

1. **Image 1 is the header** - appears only ONCE
2. **Intro goes after Image 1** - not before it (2-4 sentences)
3. **NO duplicate images**
4. **NO italic text** - Write descriptions as regular paragraphs without `_underscores_` or `*asterisks*` (only use italic for book titles)
5. **First person voice** - "I usually run", not "you usually run"

---

**Next**: Continue to [2-flow-polish.md](2-flow-polish.md)
