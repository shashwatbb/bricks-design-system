# Handoff Prompt — Token-ize an Existing Frontend Without Touching the UI

Paste the block below into the new project's Claude session. It encodes everything we learned in the figma-cli project so the next agent can rip out raw hex / arbitrary sizes / arbitrary spacing and replace them with a real design system — **without changing layout, structure, components, or visual behavior**.

---

## MISSION

You are inheriting a frontend project that uses **raw hex colors, arbitrary font sizes, arbitrary spacing, and arbitrary radii** throughout. Your job:

1. Define a **complete, token-based design system** (CSS variables / Tailwind theme / DS module — whichever fits the stack).
2. **Replace every raw value with the nearest correct token.**
3. Leave the project visually identical (or as close as a sane token mapping allows) — **no UI, no layout, no structural changes**.

The DS is the single source of truth. Raw values are bugs. But the existing UI is not.

---

## 🛑 ABSOLUTE NO-TOUCH RULES

These are non-negotiable. If you catch yourself doing any of them, STOP and revert.

1. **DO NOT change the UI.** No new components, no removed components, no re-laid-out screens, no "while I'm here" cleanup. Pixel-level visual parity is the target.
2. **DO NOT delete files, components, exports, props, or routes.** Users may have things you don't understand the purpose of.
3. **DO NOT restructure JSX / HTML / templates.** Don't reorder children, don't change tags, don't merge or split elements.
4. **DO NOT rename components, props, classes, files, or variables** unless the rename is the literal mechanic of swapping a raw value for a token reference.
5. **DO NOT add features, refactor, introduce abstractions, or add error handling/validation.** Bug-fix-only mindset.
6. **DO NOT add comments** explaining what changed. The diff and `MIGRATION.md` are the record.
7. **DO NOT change library versions, build config, lint config, or formatter rules** unless required to define tokens (e.g. adding a `tokens.css` import or a Tailwind theme block).
8. **DO NOT alter behavior:** event handlers, state, fetch logic, routing, conditionals — leave them alone. You are only touching style values.
9. **DO NOT introduce dark mode, themes, or breakpoints** that don't already exist. Match the existing surface area exactly.
10. **DO NOT auto-format unrelated files.** Disable format-on-save during this migration if needed; only the lines you change should change.
11. **DO NOT commit without showing the diff.** Land in small, reviewable commits — one logical group per commit (e.g. "tokens: define color scale", "migrate Button color refs", etc.).
12. **NO emojis** in code or comments.
13. **NO raw hex anywhere in the final diff outside the single tokens definition file.**

If a raw value has no clean token mapping, **ask the user** — do not silently pick a "close enough" token.

---

## DESIGN SYSTEM SPEC (the single source of truth)

### Colors

Define these as CSS variables (or Tailwind theme tokens — match the stack). Every color reference in the codebase must use a token name.

| Token | Hex | Role |
|---|---|---|
| `--warm-neutral-100` | `#f6f4ed` | Page background |
| `--warm-neutral-0`   | `#ffffff` | Cards / white surfaces |
| `--warm-neutral-50`  | `#faf9f5` | Subtle surface (header, icon buttons) |
| `--warm-neutral-200` | `#edebdf` | Subtle divider / card stroke |
| `--warm-neutral-300` | `#ddd9ce` | Default border |
| `--warm-neutral-800` | `#3c3630` | Dark surface (footer) |
| `--grey-neutral-900` | `#0f0e0d` | Primary text |
| `--grey-neutral-800` | `#444444` | Secondary text |
| `--grey-neutral-700` | `#666666` | Muted text / caption |
| `--purple-700`       | `#4a16d9` | Brand CTA, brand text, brand icon |
| `--purple-50`        | Brand subtle | Brand subtle bg |
| `--pink-500`         | Highlight | Highlight text only (max 2 words) |
| `--green-800`        | `#245f36` | Semantic success text (e.g. EMI/affordability) |
| `--blue-*` / `--green-*` / `--yellow-*` / `--red-*` | — | Semantic info / success / warning / danger scales |

**Icon-specific tokens** (use these for any icon fill — never raw hex on an icon):
`icon/grey_1`, `icon/grey_2`, `icon/grey_3`, `icon/grey_4`, `icon/warm_1`, `icon/brand_1`,
`semantic_icons/info`, `semantic_icons/success`, `semantic_icons/warning`, `semantic_icons/danger`.

### Typography — Google Sans Flex only

- Font family: **Google Sans Flex** everywhere. Zero exceptions — not Inter, not system fonts, not fallbacks in component styles. (Set a global fallback once in the root font-face declaration; never per component.)
- Weights (named, never numeric `400/600/700`): `Regular`, `Medium`, `SemiBold`, `Bold`.
- Letter spacing:
  - Display / Heading / Body = `0`
  - Label / Caption / CTA = `0.1` default, `0.2` small.

**Web sizes — ONLY these (size / line-height) pairs are legal:**

| Size | LH | Role |
|---|---|---|
| 56 | 64 | Display Large |
| 48 | 56 | Display Medium |
| 40 | 48 | Display Small |
| 32 | 40 | H1 |
| 28 | 36 | H2 |
| 24 | 32 | H3 |
| 20 | 28 | H4 |
| 18 | 26 | H5 / Body Large |
| 16 | 22 | H6 / Body Default |
| 14 | 20 | Body Small / CTA |
| 12 | 16 | Label / Caption Default |
| 10 | 12 | Label / Caption Small |

**Mobile sizes:**

| Size | LH | Role |
|---|---|---|
| 40 | 48 | Display Large |
| 36 | 44 | Display Medium |
| 32 | 40 | Display Small |
| 28 | 36 | H1 |
| 24 | 32 | H2 |
| 20 | 28 | H3 |
| 18 | 26 | H4 |
| 16 | 22 | H5 / Body Large |
| 14 | 20 | H6 / Body Default / CTA |
| 12 | 16 | Body Small / Label / Caption |
| 10 | 12 | Label Small / Caption Small |

**Forbidden sizes:** `13, 15, 17, 19, 21, 22, 23, 25, 26, 27` and anything else not in the tables. Snap to the **nearest legal size**. Body 16/22 wins over Figma-observed 16/24 — DS definition is authoritative.

### Spacing scale

Only: `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`.
Anything else (`7px`, `18px`, `30px`, etc.) is a violation — snap to nearest legal step.

### Radius scale

Only: `0, 4, 8, 12, 16, 20, 24, 32, 999` (999 = pill).

### Radius + padding nesting hierarchy

Each nested layer steps **down** one radius tier — never match the parent's radius. Apply this only when you encounter a clear nesting violation; do NOT restructure markup to enforce it.

| Layer | Web radius | Web padding | Mobile radius | Mobile padding |
|---|---|---|---|---|
| Outer section / page container | 24 | 24 | 16 | 16 |
| Inner card / sub-card | 16 | 16 | 12 | 12 |
| Chip / badge / tag | 999 or 8 | 8H / 4V | 999 or 8 | 8H / 4V |
| Button | 12 | 12V / 24H | 12 | 12V / 20H |
| Input | 12 | 12V / 16H | 12 | 12V / 16H |

### Icons

- Stroke width is **literally 1.5px** at every size — never scale it proportionally.
- Provide the full size set: `14, 16, 18, 20, 22, 24px`. Default = `16px`.
- Icon color must be one of the `icon/*` or `semantic_icons/*` tokens above — never raw hex.

### Dividers / separators

Never use unrounded 1px lines for dividers. Use a thin rounded element:
```css
height: 1px; width: 100%; border-radius: 9999px; background: var(--warm-neutral-200);
```
(Vertical equivalent: `width: 1px; height: 32px;` etc.) Token-backed, always rounded.

### Layout (informational — do not refactor existing layouts)

- Containers should use flex/grid auto-layout; flex columns containing text should let text fill width.
- This is documented for context. **Do not rewrite existing layouts to match.** Only fix layout when explicitly asked.

### Color highlights & semantics

- `--pink-500` is for text-only highlight, max 2 words. Don't use for backgrounds.
- `--green-800` for positive financial / success callouts (e.g. EMI line). Don't substitute generic green.
- `--purple-700` is the brand action color — CTAs, brand text, primary icons.

---

## EXECUTION PLAN

Do these in order. Don't skip steps. Show output to the user between steps when noted.

### Step 1 — Audit (read-only, show output)
Grep the codebase for raw values:
- `#[0-9a-fA-F]{3,8}` — raw hex
- `rgb(`, `rgba(`, `hsl(`, `hsla(` — raw color functions
- `font-size:` / `fontSize:` / `text-[...]` — values outside the legal scale
- `padding`, `margin`, `gap`, `border-radius`, `rounded-[...]` — values outside the scales
- Any non-`Google Sans Flex` font family

Produce a punch list grouped by file with line numbers. **Stop and show the user.** Do not edit yet.

### Step 2 — Define tokens
Create ONE tokens definition file matching the stack:
- CSS: `src/styles/tokens.css` with `:root { --... }` declarations.
- Tailwind: extend `tailwind.config.{js,ts}` `theme.colors`, `theme.fontSize`, `theme.spacing`, `theme.borderRadius`, `theme.fontFamily`.
- Styled-components / Emotion / Vanilla Extract: a `theme.ts` module.
Wire it into the existing entry point with a single import. Do not touch other config.

### Step 3 — Map raw → token (show user, get sign-off)
For every unique raw value found in Step 1, write `MIGRATION.md` with a mapping table:
```
raw value | token | confidence | files
#f6f4ed   | --warm-neutral-100 | exact | App.tsx, Layout.tsx
#f5f3ec   | --warm-neutral-100 | close (Δ ~1) | Header.tsx
#e1e1e1   | ???                | AMBIGUOUS — ask user | Card.tsx
```
**Stop and ask the user to resolve all `AMBIGUOUS` rows before proceeding.**

### Step 4 — Replace (mechanical only)
Apply the approved mapping. Rules:
- Replace **only the value** — leave the surrounding code byte-identical.
- Prefer codemods / scripted find-replace over hand edits to avoid collateral changes.
- One logical commit per group (colors, font sizes, spacing, radius, font-family).
- After each commit: build + typecheck + lint must pass.

### Step 5 — Verify
- Re-grep for raw hex / illegal sizes — zero hits outside the tokens file.
- Build, typecheck, lint, and existing tests pass.
- Visual smoke test on the golden paths (3–5 key screens). Screenshot before/after if feasible. **Any visual regression = revert that commit and investigate.**

### Step 6 — Report
Summarize:
- Tokens defined (counts per category).
- Files touched (count + list).
- Raw values removed (count by category).
- Ambiguous mappings resolved (with the user's chosen token).
- Anything skipped and why.

---

## TOKEN HYGIENE (from prior project)

- Don't dump giant tool output into context. Pipe greps to files / `wc -l` when scanning the whole repo.
- Use terse status commands; don't re-fetch full file dumps mid-task.
- Keep edits small and reviewable — context bloat causes drift and wrong recall.

---

## ACCEPTANCE CRITERIA (all must pass)

- `grep -rE '#[0-9a-fA-F]{3,8}' src/` returns matches **only** inside the tokens definition file.
- Every font-size in component code matches the legal size table; every line-height matches its pair.
- Every spacing / radius value matches the legal scales.
- Font family in component code is `Google Sans Flex` (or inherits from root); no Inter/system fonts in component-level styles.
- Tokens file exports every color / size / spacing / radius from the spec above.
- `MIGRATION.md` documents every raw→token mapping that landed.
- Build / typecheck / lint / existing tests pass.
- Visual smoke test of key screens shows no regressions.
- Git diff contains **only** style-value changes — no markup, layout, prop, or logic changes.

---

## INTERACTION STYLE

- Be terse. Show the user the audit and the mapping; don't narrate your thinking.
- Ask before any ambiguous decision (token mapping, scope question, "should I also fix X").
- Never claim "done" without running the verification grep and at least one build.
- If you can't visually verify a screen, say so explicitly.

---

End of handoff. Begin with Step 1 (audit) and report the punch list before making any changes.
