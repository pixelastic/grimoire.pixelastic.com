# Phase 1 — Create the Post Scaffold

**Input (what the user has done)**: User says "nouveau post sur [subject]" or "new post about [subject]"

---

## Steps

**IMPORTANT**: This phase is about creating an EMPTY scaffold. DO NOT add any content, placeholder text, or dummy images. The user will paste real images in Typora.

1. **Infer a short English slug** from the subject
   - Example: "tables de rencontre" → `encounterTables`
   - Use camelCase (preferred for this project)
   - Keep it short and descriptive
   - **DO NOT ask the user for confirmation** - just make the decision
   - **DO NOT search/read other files first** - just infer from the subject

2. **Create the directory**: `posts/<slug>/`
   - If it already exists, rephrase the slug with different words that mean the same thing
   - Example: if `encounterTables` exists, try `randomEncounters`, `encounterLists`, etc.
   - **DO NOT use numeric suffixes** - find a different way to say it

3. **Create `posts/<slug>/index.md`** with ONLY frontmatter:
   ```markdown
   ---
   title: "<Inferred Title>"
   date: <YYYY-MM-DD>
   tags: []
   description: ""
   ---

   ```
   - **NO placeholder text**
   - **NO dummy images**
   - **NO content at all** - just frontmatter + one blank line
   - The user will add images and content manually in Typora
   - Leave tags empty `[]` - will be inferred in Phase 4

4. **Open in Typora** (MANDATORY):
   ```bash
   typora posts/<slug>/index.md > /dev/null 2>&1 &
   ```
   (Run in background, suppress output)

   **This is the most important step** - ALWAYS open Typora automatically
   - **DO NOT ask the user if they want Typora opened**
   - **DO NOT wait for confirmation**
   - Just open it immediately after creating the file

5. **Tell the user**:
   **"Le dossier `<slug>` est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

## Important Rules

### DO NOT:
- ❌ Ask the user to choose a slug or title
- ❌ Ask the user if they want Typora opened
- ❌ Search or read other posts first (wastes time)
- ❌ Add placeholder text like `[Description de...]`
- ❌ Add dummy images like `image-20260407-01.png`
- ❌ Write any content in the body
- ❌ Try to "help" by pre-filling content

### DO:
- ✅ Make the slug/title decision immediately
- ✅ Create an EMPTY index.md with only frontmatter
- ✅ Open Typora automatically (no questions asked)
- ✅ Trust that the user will paste real images in Typora

### Why?
- The title and slug can be refined later in Phase 4 (SEO Enrichment)
- The user has real images ready to paste
- Placeholder content is useless and gets deleted anyway
- Speed matters - get Typora open ASAP

---

**Next**: [Phase 2 — Number the Images](../phase2-numbering/index.md)
