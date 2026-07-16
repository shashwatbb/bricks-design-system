# Component-Specific Rules

Styling decisions for individual components, dictated by the designer over time. One section per component, PascalCase, matching the component name in `REGISTRY.md`. Append new sections as they are given. Do not remove or soften an existing rule without the designer's confirmation.

Format per component:

```
## ComponentName
- rule
- rule
Status: confirmed | unconfirmed
```

---

## InputField

- Anatomy: Container > Label (12 Medium, `text/secondary`) > Field (280w, padding `m`/`s`, radius `m`, `surface/white`, 1.5px `border/default`) > Helper Text (12 Regular, `text/muted`).
- States on one `State` axis: Default, Hover (`border/brand`), Focus (`border/brand` + 4px `purple/300` outside ring), Filled (`text/primary` value), Error (`semantic_border/danger` border, `semantic_text/danger` helper), Disabled (`surface/disabled`, `border/disabled`, muted text).
- No icons yet (needs Iconography instance swap), no Show Label / Show Helper Text booleans wired yet, single size only.

Status: unconfirmed test build (node 1459:2134); every choice above pending Shashwat's review

## Checkbox

- Stroke uses the primary stroke color token (`border/default`).
- Checked and active fill uses `lavender_mist/2`.

Status: unconfirmed (stated once, not yet applied to a built component)

## RadioButton

- Stroke uses the primary stroke color token (`border/default`).
- Checked and active fill uses `lavender_mist/2`.
- Selected dot: `icon/brand_1`. Disabled: `surface/disabled` + `border/disabled`, dot `icon/grey_3`. Hover: stroke `border/brand`. Focus: 4px ring `purple/300`, matching the production Button's focus treatment.
- Control size 20px, dot 8px, full radius.

Status: confirmed for stroke + active fill (dictated by Shashwat in session, applied in test build node 1459:2077); dot/disabled/hover/focus/size choices pending his review of the test build
