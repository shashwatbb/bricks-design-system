# Shared Canvas — Project Rules

Rules accumulate here over time. Read before every task in this project.

## 1. Never touch the design system without exact source
- `DESIGN.md` is a raw, verbatim extract from the live Bricks Design System Figma file (`figma-cli extract`).
- Never invent, rename, approximate, or "round" a color/spacing/radius/typography/token value.
- If a token isn't in `DESIGN.md`, it doesn't exist yet — re-run `figma-cli extract` against the real file, don't guess or backfill.
- Naming, casing, and structure of tokens must match Figma exactly (e.g. `surface/brand`, `warm_neutral/700`, `font_size/3xl`) — no renaming for "cleaner" naming.

## 2. Always listen to the user
- Do exactly what's asked. No unrequested scope, no unrequested "improvements," no silent extra additions.
- If instructions are ambiguous, ask — don't assume.

## 3. Verify the Figma source before extracting
- `figma-cli` reads whichever Figma desktop tab is frontmost/focused — always confirm the correct file is active before running `extract`, `render`, or any write.

## 4. Never write outside Shared Canvas
- All file writes/edits/creates for this work MUST stay inside `/Users/shashwat/Documents/Work/Cursor:Claude/Shared Canvas/` — no exceptions.
- Never touch `Homepage` or any other sibling project folder, even incidentally.
- Shell cwd may default elsewhere (e.g. Homepage) — that's fine, but every write command must use a full/explicit path into `Shared Canvas/`. Confirm target path before every Write/Edit.

## 5. Component work follows RULEBOOK.md
- `RULEBOOK.md` (verbatim, confidential Design System Foundation Rulebook) governs every component built here — read it before any component task.
- Confirmed file identity: "Bricks Design System" (`ZGl9LhEtqlE9JiMKBuYrdT`) is the single file for tokens, variables, styles, AND all new component pages — renamed at one point to/from "New Bricks Design System," same file, no separate file exists.
- Iconography library (icons only, separate file): https://www.figma.com/design/Rq1j8iqvbJBYRb52tdpgFg/Iconography--Bricks- — icons in components must be instance-swapped from here, never raw vector icons (e.g. not figma-cli's `<Icon name="lucide:...">`).

## 6. Token source policy (decided, since rulebook allows either)
- Rulebook default wants a designer-provided JSON export (not live Figma queries) because live access "has proven unreliable" for tokens.
- Decision: `DESIGN.md` in this folder is already byte-verified against a real token export (`bricks_design_system_tokens_v1.2.0.zip`) — treat it as the canonical, non-live token source for component work, not `figma-cli var list` calls mid-task.
- Refresh rule: only update tokens when the designer supplies a new export zip/JSON; re-run `figma-cli extract` + re-diff against the new export before trusting it, same process already used once.
- Live `figma-cli` access is still fine for non-token operations: searching for existing components, placing/building components, screenshots/verification.
- Outstanding: the test "Checkbox" component set built earlier (node `1455:2048`) used raw `<Icon name="lucide:check">` vectors, not instance-swapped icons — non-compliant with §9. User deleted it — resolved, no rebuild needed unless Checkbox is requested for real.

## 7. Pages only for real components — no random/test pages
- A new Figma page Must Not be created except for an actual component build, matching RULEBOOK.md §14: page name **must exactly match** the component name (e.g. `RadioButton`, `InputField`).
- Never create scratch/test/throwaway pages. If verification or experimentation is needed, do it without a dedicated page (or ask first).
- One page per component, created only when real work on that component begins — not speculatively, not in advance of a brief.

## 8. This folder is now the master kit — read CLAUDE.md first
- `CLAUDE.md` auto-loads every session and sets read order, token truth scoping, brief intake, docs style, and Figma mechanics. Read it before this file.
- `COMPONENT-RULES.md` is the only place component-specific styling decisions live (e.g. checkbox stroke/fill colors). Never scatter these across other files or memory.
- `REGISTRY.md` must be updated whenever a component is created, its status changes (`production`/`do-not-use`/`planned`), or its variant count changes. Check it before building anything — RULEBOOK §4 step 1.
- `GAPS.md` lists known design system holes. Never invent a value to fill one — surface the gap instead (RULEBOOK §3).
- `templates/` holds the documentation and component-brief templates. Use them, don't freehand new structures.
- `tokens/vX.Y.Z/` holds versioned, byte-verified token exports. `WORKFLOW.md` covers the git branch/PR/token-refresh process for distributing this kit to the team.

## 9. Docs site sync — Figma and the public site never drift
- `site/` is the public documentation interface (Vite + React, deploys to github.com/shashwatbb/bricks-design-system via gh-pages).
- A component cannot be marked `production` in REGISTRY.md without a site page. Same PR must contain: the REGISTRY.md status change, `site/src/pages/components/<Name>.jsx` following RULEBOOK §13 structure and `site/CONTENT.md` style, and the `PAGES` entry in `site/src/components/Documentation.jsx`.
- The sidebar's Components section renders from REGISTRY.md (production rows only) — never hardcode component nav entries, and never show `planned` or `do-not-use` components on the site.
- The site reads tokens ONLY via `site/src/data/loadTokens.js`, which imports `tokens/v1.2.0/*.json` directly. Never create hand-made parallel token data files inside `site/`.
- All site copy follows `site/CONTENT.md`: sentence case, no em dashes, no emoji, minimal plain voice.
