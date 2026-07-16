# Team Workflow

## Ownership

Shashwat owns the repo and `main`. Nothing merges into `main` without his approval.

## Access model — fork based, decided 2026-07-16

Nobody except Shashwat is ever added as a collaborator on `github.com/shashwatbb/bricks-design-system`. This is the merge protection: with no write access, no one can push or merge anything.

- Teammates (Nishant and others) FORK the repo to their own account.
- All work happens on a branch in their fork.
- They open a pull request from their fork into `main`.
- Only Shashwat reviews and merges. His approval is the gate, enforced by access, not by convention.
- Never add a collaborator with write access to satisfy convenience. If that ever seems needed, ask Shashwat first (RULES §2).

## Branch model

One branch per component, named `component/ComponentName` (on the teammate's fork). The matching Figma page uses the human-readable name per RULES §7 (e.g. page "Input fields" for component `InputField`).

## Build flow

1. Fill out `templates/component-brief-template.md` for the component.
2. Create the branch: `git checkout -b component/ComponentName`.
3. Check `REGISTRY.md`. If the component already exists as `production`, extend it instead of rebuilding (RULEBOOK §1, §4).
4. Read `COMPONENT-RULES.md` for any prior decisions about this component.
5. Build in Figma following RULEBOOK.md in full: anatomy, property typing, variants, states, naming, accessibility.
6. Write documentation using `templates/documentation-template.md`.
7. Update `REGISTRY.md` with the new status, node reference, and variant count.
8. Documentation on the site: `site/` is Shashwat's exact design and is locked (RULES §10). Site content for a new component is added only when and how Shashwat directs it.
9. If a new styling decision was made during the build, add it to `COMPONENT-RULES.md`.
10. Open a pull request into `main`.

## Review

Shashwat reviews every pull request against the RULEBOOK §15 checklist before merging. A component is not merged until every item on that checklist is satisfied.

## Docs site deploy

After a merge to `main`: `cd site && npm run deploy` builds and publishes to GitHub Pages (`gh-pages` branch of github.com/shashwatbb/bricks-design-system). Vercel can replace this later without changing the repo layout.

Note for this machine: the parent folder name `Cursor:Claude` contains a colon, which breaks the PATH npm builds for scripts, so `npm run <script>` fails locally. Run binaries directly instead (`node node_modules/vite/bin/vite.js build`, `node node_modules/gh-pages/bin/gh-pages.js -d dist`). Do not edit `site/package.json` to work around this; the site is locked (RULES §10).

Repo visibility note: `RULEBOOK.md` is marked confidential and internal. If the GitHub repo is public, everything in it is public. Decide visibility before the first push (private repo + Vercel serves the site publicly while keeping the kit private).

## Token refresh flow

1. Designer exports a new token package from Figma (Design Token Manager plugin), following the naming convention `bricks_design_system_tokens_v<major>.<minor>.<patch>`.
2. Unzip into `tokens/vX.Y.Z/`.
3. Re-run `figma-cli extract` against the live Bricks Design System file.
4. Diff the new extract against `tokens/vX.Y.Z/` field by field. Every collection, every variable name, every value must match exactly.
5. Once confirmed matching, update `DESIGN.md` and open a pull request.

## Versioning

Follows the existing convention: major for structural or architecture changes, minor for new variables, styles, or components, patch for refinements to existing ones.
