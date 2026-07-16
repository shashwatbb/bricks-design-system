# Component Registry

Every component that exists, is planned, or is off limits. Check this before building anything (RULEBOOK §4 step 1). Update this file whenever a component is created, its status changes, or its variant count changes.

Status values: `production` (built, documented, safe to reuse or extend), `do-not-use` (exists in Figma but flagged not ready), `planned` (named as an intended atom or molecule, not built).

| Component | Status | Figma page | Variant axes | Variants | Docs |
|---|---|---|---|---|---|
| Button | production | Buttons | Variant x Size x State | 108 | DESIGN-structure/buttons.md |
| Tag | production | Tag | Size x Color | 30 | DESIGN-structure/tag.md |
| Modal (dismissible) | do-not-use | Modal | device x size x state | 12 | DESIGN-structure/modal.md |
| Modal (non-dismissible) | do-not-use | Modal | device x intent | 8 | DESIGN-structure/modal.md |
| Overlay | do-not-use | Overlay | Device | 2 | DESIGN-structure/overlay.md |
| Bottom bar | do-not-use | Bottom bar | none (raw frames, no component set) | 0 | DESIGN-structure/bottom-bar.md |
| Checkbox | planned | none | none | 0 | none |
| RadioButton | planned | none | none | 0 | none (test build was deleted from Figma by Shashwat 2026-07-16) |
| InputField | do-not-use | Input fields | State | 6 | none (rebuilt 2026-07-16, node 1459:2178, fully variable-bound, awaiting Shashwat's review) |
| Toggle | planned | none | none | 0 | none |
| Dropdown | planned | none | none | 0 | none |
| Toast | planned | none | none | 0 | none |
| Chip | planned | none | none | 0 | none |
| BottomSheet | planned | none | none | 0 | none |
| Accordion | planned | none | none | 0 | none |
| Tooltip | planned | none | none | 0 | none |

Do-not-use components must not be extended, copied, or used as a reference pattern until the designer moves them to production.
