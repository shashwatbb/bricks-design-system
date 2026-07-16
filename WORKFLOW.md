# Team Workflow

## Ownership

Shashwat owns `main`. `main` is protected: no direct pushes, no force pushes. All work happens on branches and merges in through review.

## Branch model

One branch per component, named `component/ComponentName`, matching the Figma page name exactly (RULEBOOK §14, RULES §7).

## Build flow

1. Fill out `templates/component-brief-template.md` for the component.
2. Create the branch: `git checkout -b component/ComponentName`.
3. Check `REGISTRY.md`. If the component already exists as `production`, extend it instead of rebuilding (RULEBOOK §1, §4).
4. Read `COMPONENT-RULES.md` for any prior decisions about this component.
5. Build in Figma following RULEBOOK.md in full: anatomy, property typing, variants, states, naming, accessibility.
6. Write documentation using `templates/documentation-template.md`.
7. Update `REGISTRY.md` with the new status, node reference, and variant count.
8. If a new styling decision was made during the build, add it to `COMPONENT-RULES.md`.
9. Open a pull request into `main`.

## Review

Shashwat reviews every pull request against the RULEBOOK §15 checklist before merging. A component is not merged until every item on that checklist is satisfied.

## Token refresh flow

1. Designer exports a new token package from Figma (Design Token Manager plugin), following the naming convention `bricks_design_system_tokens_v<major>.<minor>.<patch>`.
2. Unzip into `tokens/vX.Y.Z/`.
3. Re-run `figma-cli extract` against the live Bricks Design System file.
4. Diff the new extract against `tokens/vX.Y.Z/` field by field. Every collection, every variable name, every value must match exactly.
5. Once confirmed matching, update `DESIGN.md` and open a pull request.

## Versioning

Follows the existing convention: major for structural or architecture changes, minor for new variables, styles, or components, patch for refinements to existing ones.
