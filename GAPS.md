# Design System Gaps

Things the design system does not yet define. Do not invent values to fill these. When a component needs one, stop and surface the gap to the designer (RULEBOOK §3) instead of approximating.

## No motion tokens
No duration, easing, or transition tokens exist, despite DESIGN.md having a "Depth and Motion" section. Components must not specify animation or transition timing until tokens exist.

## No elevation tokens
DESIGN.md has 17 raw shadow strings (shadow-1 through shadow-17), one malformed (missing blur value). No semantic elevation scale (elevation/00 through elevation/08) is canonical; a page attempting this exists in Figma but is flagged "DON'T USE." Components must not bind to shadow values until a semantic elevation scale is confirmed.

## No breakpoints or grid
No column count, gutter, container width, or breakpoint values are defined. Device handling exists only as per-component variant props (desktop, mobile), not as shared layout tokens.

## No icon size scale
No defined icon size steps. Sizes seen in existing components (16, 20, 24) are incidental, not a published scale.

## No z-index scale
No layering tokens exist for overlays, modals, or dropdowns.

## No opacity scale
Disabled and other reduced-emphasis states are described in prose only (DESIGN.md §8 States), not as opacity tokens.

## No stroke width tokens
Border widths (commonly 1px, 1.5px in built components) are set ad hoc per component, not from a token.

## States are prose, not tokens
DESIGN.md §8 States lists hover, focus, disabled, and error as recommended treatments in prose. No token binds these states to specific values.

## Accent color families lack full token sets
`pistachio_sand`, `lavender_mist`, `soft_butter` have primitive scales and a `color_tokens` numbered alias set, but no dedicated text, border, or icon semantic tokens (already flagged inside `Tag`'s own documentation).
