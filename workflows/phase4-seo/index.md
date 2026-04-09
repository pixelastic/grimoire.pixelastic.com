# Phase 4 — SEO Enrichment

**Input (what the user has done)**: User has approved the content (said "c'est bon, ça me va" or similar)

This phase enriches the frontmatter with optimized title, tags, and meta description.

---

## Step 1: Optimize the Title

Read the current `title` in the frontmatter and the post content.

### Guidelines

- **Keep it descriptive and specific**
- **Include the main subject** (what RPG concept/rule/tool this is about)
- **Avoid clickbait or over-the-top language**
- **Length**: 40-60 characters ideal
- **Format examples**:
  - "Urban Encounter Tables"
  - "Character Death Mechanics"
  - "Wilderness Exploration Rules"

### What NOT to do

- ❌ Don't add "Tutorial" or "How to" unless it genuinely is one
- ❌ Don't add "RPG" or "TTRPG" (it's implied by the blog)
- ❌ Don't use superlatives ("Amazing", "Epic", "Ultimate")
- ❌ Don't make it too generic ("My Latest Discovery")

### Process

1. Analyze the post content
2. Evaluate if the current title is good enough:
   - If it follows the guidelines above → **Keep it, don't change it**
   - If it clearly violates guidelines (too generic, has superlatives, missing subject) → **Change it automatically**
3. **DO NOT ask the user to choose between alternatives**
   - You are the SEO expert, make the decision yourself
   - Only change the title if there's a clear improvement to be made
   - When in doubt, keep the existing title

---

## Step 2: Infer Tags

Based on the content, infer 1-3 tags that best describe the post.

### Guidelines

- **Use 1-3 tags maximum**
- **Create tags from the content**: Infer appropriate tags based on what the post discusses
- **Use lowercase, hyphen-separated**: Examples: `encounter-tables`, `osr`, `character-creation`
- **Be specific but not overly narrow**: Balance between descriptive and reusable
- **Consider**: Game systems mentioned, content type, mechanics discussed, setting elements

### Process

1. Read the post content
2. Identify the main themes (system type, mechanic category, content type)
3. Create 1-3 descriptive tags
4. Use existing tags if they already appear in other posts (check posts/*/index.md), or create new ones if needed

---

## Step 3: Write Meta Description

Create a `description` field for the frontmatter.

### Guidelines

- **Length**: 150-160 characters ideal
- **Quick capture format**: What you found + where + why it's interesting
- **Write naturally**: Conversational, not keyword-stuffed
- **End with a period**
- **SEO principles**:
  - Front-load important keywords in first 120 characters (what shows in mobile results)
  - Make it compelling enough to earn clicks
  - Reflect the actual content (avoid clickbait)

### Format for Quick Captures

```
<What you found> in <source>. <Key interesting element>. <Why it caught your attention>.
```

### Examples

**Good**:
```
Encounter tables with simple d6 rolls for urban adventures. Creates emergent storytelling moments without complex preparation.
```

**Good**:
```
Character death rules with permanent consequences but interesting narrative elements. Brutal mechanics with poetic outcomes.
```

**Bad** (too generic):
```
RPG inspiration and discoveries.
```

**Bad** (too long, over 180 chars):
```
I found these really interesting encounter tables in Old-School Essentials that are designed for urban adventures and use simple d6 rolls to create emergent storytelling moments.
```

**Bad** (keyword stuffing):
```
OSR encounter tables RPG tools urban adventures emergent narrative random generators.
```

---

## Step 4: Update Frontmatter

Update the frontmatter with optimized title (if needed), inferred tags, and description:

```markdown
---
title: "<Optimized Title>"
date: YYYY-MM-DD
tags: [<inferred-tag-1>, <inferred-tag-2>]
description: "<Meta description 150-160 chars.>"
---
```

Use the Edit tool to modify the frontmatter.

---

## Step 5: Find Internal Link Opportunities

Search for related posts in the blog that could be linked to.

### Strategy

1. **Identify key themes** in the current post:
   - Main RPG systems or books mentioned
   - Content type (encounter tables, character creation, etc.)
   - Similar concepts (death mechanics, exploration rules, etc.)

2. **Search other posts** in `posts/*/index.md`:
   - Use Grep to find posts mentioning the same themes
   - Read promising posts to verify relevance

3. **Suggest 2-3 internal links** where appropriate:
   - Link naturally within the text (not forced)
   - Link to posts that add value for the reader
   - Prefer linking from specific mentions

### Guidelines

**Good internal links:**
- ✅ "Similar to the [exploration rules](/posts/explorationRules/) I found in another book"
- ✅ "These encounter tables work well with the [urban tools](/posts/urbanTools/) from earlier"
- ✅ Natural flow, adds context

**Bad internal links:**
- ❌ Don't force links where they don't fit
- ❌ Don't link just for SEO (must add value for reader)
- ❌ Don't add too many links (2-3 max per post)
- ❌ Don't link to unrelated posts

### Link Format

Use relative or absolute paths:
```markdown
[link text](/posts/other-post-slug/)
```

### If No Good Links Found

If you can't find 2-3 relevant posts to link to, **that's fine**. Don't force it.

Tell the user: **"Je n'ai pas trouvé de posts pertinents à linker pour celui-ci."**

---

## Step 6: Update File with Links (if found)

If you found good internal link opportunities:

1. **Use the Edit tool** to add the links in the post body
2. **Integrate them naturally** into existing sentences

---

## Step 7: Add Alt Text to Images

Add descriptive alt text to all images by paraphrasing the text description below each image.

### Guidelines

**Alt text format:**
- 1 sentence summary of what the image shows
- Based on the text description below the image, NOT visual analysis
- 40-80 characters ideal (screen readers)
- Describe what matters for understanding the content

**Examples:**

```markdown
<!-- Before -->
![](image-20260409110901122.png)

These encounter tables use simple d6 rolls...

<!-- After -->
![Encounter tables with d6 rolls for random encounters](image-20260409110901122.png)

These encounter tables use simple d6 rolls...
```

### Process

1. Read each image's descriptive text (the paragraph below it)
2. Write a 1-sentence summary as alt text
3. Use the Edit tool to add alt text to all images in the file

### What to Include in Alt Text

- **What the image shows** (the subject)
- **Key details mentioned in the text** (table type, mechanic, etc.)
- **Context if needed** (system name, source)

### What NOT to Include

- ❌ Don't say "image of" or "screenshot of" (redundant)
- ❌ Don't describe irrelevant visual details
- ❌ Don't copy the entire paragraph
- ❌ Don't exceed 100 characters if possible

---

## Step 8: Present to User

Show the user what was done (concisely):

- **Title**: kept ✓ (or "changed to '...'")
- **Tags**: added [tag1, tag2]
- **Meta description**: added
- **Alt text**: added to X images
- **Internal links**: X link(s) added (or "none found")

Tell the user: **"SEO enrichment terminé. Le fichier est prêt pour le commit."**

---

## Anti-Patterns

| ❌ Don't | ✅ Do |
|---------|--------|
| "Amazing Encounter Tables!" | "Urban Encounter Tables" |
| Generic: "My latest discovery" | Specific: "Character Death Mechanics" |
| Keyword stuff: "RPG tools tables mechanics" | Natural: "Encounter tables with simple d6 rolls..." |
| Too long (>180 chars) | Concise, under 180 chars |
| No period at end | End with proper punctuation. |

---

## Completion

Tell the user:

**"Le SEO est optimisé. À toi de faire le commit maintenant."**

---

**FIN** - User commits the changes manually
