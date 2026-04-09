# Phase 1 — Create the Post Scaffold

**Input (what the user has done)**: User says "nouveau post sur [subject]" or "new post about [subject]"

---

## Steps

**IMPORTANT**: This phase is about creating an EMPTY scaffold. DO NOT add any content, placeholder text, or dummy images. The user will paste real images in Typora.

1. **Detect post type and infer path**:

   **Inspirations** (if user mentions month/date OR says "inspiration"):
   - Path: `posts/inspirations/YYYY-MM/`
   - Slug: `YYYY-MM` (e.g., `2022-01`)
   - Title: "Month YYYY" (e.g., "January 2022")
   - Date: First day of month (e.g., `2022-01-01`)

   **Reviews** (all other cases):
   - Path: `posts/reviews/<slug>/`
   - Slug: camelCase English (e.g., `tombOfAnnihilation`)
   - Title: Inferred from subject
   - Date: Today

   **DO NOT ask the user** - just decide based on their message.

2. **Create the directory**: `posts/<inspirations|reviews>/<slug>/`
   - If it already exists, rephrase the slug with different words
   - **DO NOT use numeric suffixes**

3. **Create `index.md`** with ONLY frontmatter:
   ```markdown
   ---
   title: "<Inferred Title>"
   date: <YYYY-MM-DD>
   tags: []
   description: ""
   ---

   ```
   - **NO placeholder text, NO dummy images, NO content**
   - Tags empty `[]` - will be inferred in Phase 4

4. **Open in Typora** (MANDATORY):
   ```bash
   typora posts/<inspirations|reviews>/<slug>/index.md > /dev/null 2>&1 &
   ```
   **DO NOT ask** - just open it immediately.

5. **Tell the user**:
   - Inspirations: **"Le dossier `inspirations/<YYYY-MM>` est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**
   - Reviews: **"Le dossier `reviews/<slug>` est prêt. Tu peux coller tes screenshots dans Typora. Dis-moi quand tu as fini."**

---

## Important Rules

### DO NOT:
- ❌ Ask the user to choose slug, title, or post type
- ❌ Ask the user if they want Typora opened
- ❌ Search or read other posts first (wastes time)
- ❌ Add placeholder text or dummy images

### DO:
- ✅ Detect post type automatically (inspirations vs reviews)
- ✅ Create in correct directory structure
- ✅ Make all decisions immediately
- ✅ Open Typora automatically

### Why?
- Automatic detection saves time
- Title/slug can be refined later in Phase 4
- Speed matters - get Typora open ASAP

---

**Next**: [Phase 2 — Number the Images](../phase2-numbering/index.md)
