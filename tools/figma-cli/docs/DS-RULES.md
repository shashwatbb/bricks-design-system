# Design System Rules — STRICT ENFORCEMENT

These rules apply to EVERY render command without exception.
No raw hex, no raw numbers for spacing/radius, no arbitrary fonts.

---

## 1. COLOR — NEVER USE RAW HEX

Every color must be a `var:` reference. Use semantic tokens first, primitives only when no semantic token fits.

### Semantic tokens (USE THESE FIRST)

**Surfaces**
| Intent | Token | Resolved hex |
|---|---|---|
| Default page/card background | `var:warm_neutral-100` | #f6f4ed |
| White surface | `var:warm_neutral-0` | #ffffff |
| Subtle background | `var:warm_neutral-50` | #faf9f5 |
| Brand background | `var:purple-700` | #4a16d9 |
| Brand subtle background | `var:purple-50` | #f5f1fe |
| Disabled background | `var:grey_neutral-100` | #eeeeee |

**Borders**
| Intent | Token | Resolved hex |
|---|---|---|
| Subtle border | `var:warm_neutral-200` | #edebdf |
| Default border | `var:warm_neutral-300` | #ddd9ce |
| Brand border | `var:purple-700` | #4a16d9 |
| Selected/strong border | `var:warm_neutral-900` | #211d19 |
| Disabled border | `var:grey_neutral-400` | #9e9e9e |

**Text**
| Intent | Token | Resolved hex |
|---|---|---|
| Primary text | `var:grey_neutral-900` | #0f0e0d |
| Secondary text | `var:grey_neutral-800` | #444444 |
| Muted/caption text | `var:grey_neutral-700` | #666666 |
| Inverse text (on dark bg) | `var:warm_neutral-0` | #ffffff |
| Brand text | `var:purple-700` | #4a16d9 |

**Semantic (info / success / warning / danger)**
| State | Surface | Border | Icon | Text |
|---|---|---|---|---|
| info | `var:blue-50` | `var:blue-200` | `var:blue-600` | `var:blue-800` |
| success | `var:green-50` | `var:green-200` | `var:green-600` | `var:green-800` |
| warning | `var:yellow-50` | `var:yellow-200` | `var:yellow-600` | `var:yellow-800` |
| danger | `var:red-50` | `var:red-200` | `var:red-600` | `var:red-800` |

**Accent palettes** (use numbered scale 1–6, lightest to darkest)
- Pistachio: `var:pistachio_sand-50` → `var:pistachio_sand-500`
- Lavender: `var:lavender_mist-50` → `var:lavender_mist-500`
- Soft butter: `var:soft_butter-50` → `var:soft_butter-500`

**Highlight** — `var:pink-500` (#ff1a87) — text only, max two words.

**Icons**
| Intent | Token |
|---|---|
| Default icon | `var:grey_neutral-900` |
| Inverse icon | `var:warm_neutral-0` |
| Muted icon | `var:grey_neutral-500` |
| Dark icon | `var:grey_neutral-800` |
| Warm icon | `var:warm_neutral-700` |
| Brand icon | `var:purple-700` |

---

## 2. TYPOGRAPHY — NEVER USE ARBITRARY FONT SIZES

**Font family:** `Google Sans Flex` — ALWAYS. No Inter, no system fonts, no fallbacks. Ever.

**Figma text style path:** `Web/<Group>/<Name>` or `Mobile/<Group>/<Name>` (defined in "Bricks Typography" collection).

**Weights (exact Figma style names):** `Regular` · `Medium` · `SemiBold` · `Bold`

**Letter spacing:** Display/Heading/Body = 0px · Label/Caption/CTA = 0.1px (Default) or 0.2px (Small)

### Web scale (use for all web/desktop frames)
| Style name | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display/Large Bold | 56 | Bold | 64 | 0 |
| Display/Medium Bold | 48 | Bold | 56 | 0 |
| Display/Small Bold | 40 | Bold | 48 | 0 |
| Heading/H1 Bold | 32 | Bold | 40 | 0 |
| Heading/H1 SemiBold | 32 | SemiBold | 40 | 0 |
| Heading/H2 Bold | 28 | Bold | 36 | 0 |
| Heading/H2 SemiBold | 28 | SemiBold | 36 | 0 |
| Heading/H2 Medium | 28 | Medium | 36 | 0 |
| Heading/H3 SemiBold | 24 | SemiBold | 32 | 0 |
| Heading/H3 Medium | 24 | Medium | 32 | 0 |
| Heading/H4 SemiBold | 20 | SemiBold | 28 | 0 |
| Heading/H4 Medium | 20 | Medium | 28 | 0 |
| Heading/H5 SemiBold | 18 | SemiBold | 26 | 0 |
| Heading/H5 Medium | 18 | Medium | 26 | 0 |
| Heading/H6 SemiBold | 16 | SemiBold | 22 | 0 |
| Heading/H6 Medium | 16 | Medium | 22 | 0 |
| Heading/H6 Regular | 16 | Regular | 22 | 0 |
| Body/Large Regular | 18 | Regular | 26 | 0 |
| Body/Large Medium | 18 | Medium | 26 | 0 |
| Body/Default Regular | 16 | Regular | 22 | 0 |
| Body/Default Medium | 16 | Medium | 22 | 0 |
| Body/Small Regular | 14 | Regular | 20 | 0 |
| Body/Small Medium | 14 | Medium | 20 | 0 |
| Label/Default Regular | 12 | Regular | 16 | 0.1 |
| Label/Default Medium | 12 | Medium | 16 | 0.1 |
| Label/Small Regular | 10 | Regular | 12 | 0.2 |
| Label/Small Medium | 10 | Medium | 12 | 0.2 |
| Caption/Default Regular | 12 | Regular | 16 | 0.1 |
| Caption/Default Medium | 12 | Medium | 16 | 0.1 |
| Caption/Small Regular | 10 | Regular | 12 | 0.2 |
| Caption/Small Medium | 10 | Medium | 12 | 0.2 |
| CTA/Large Medium | 14 | Medium | 20 | 0.1 |
| CTA/Medium Medium | 14 | Medium | 20 | 0.1 |
| CTA/Small Medium | 14 | Medium | 20 | 0.1 |

### Mobile scale (use for all mobile/390px frames)
| Style name | Size | Weight | Line Height |
|---|---|---|---|
| Display/Large Bold | 40 | Bold | 48 |
| Display/Medium Bold | 36 | Bold | 44 |
| Display/Small Bold | 32 | Bold | 40 |
| Heading/H1 Bold/SemiBold | 28 | Bold/SemiBold | 36 |
| Heading/H2 Bold/SemiBold/Medium | 24 | — | 32 |
| Heading/H3 SemiBold/Medium | 20 | — | 28 |
| Heading/H4 SemiBold/Medium | 18 | — | 26 |
| Heading/H5 SemiBold/Medium | 16 | — | 22 |
| Heading/H6 SemiBold/Medium/Regular | 14 | — | 20 |
| Body/Large Regular/Medium | 16 | — | 22 |
| Body/Default Regular/Medium | 14 | — | 20 |
| Body/Small Regular/Medium | 12 | — | 16 |
| Label/Caption Default | 12 | — | 16 |
| Label/Caption Small | 10 | — | 12 |
| CTA (all) | 14 | Medium | 20 |

### FORBIDDEN — never use these
- `font="Inter"` or any font other than `font="Google Sans Flex"`
- Any size not in this table (e.g. 13px, 15px, 17px, 22px, 26px, etc.)
- Any line height not in this table
- Numeric weight values (400, 500, 600, 700) — use name strings only

---

## 3. SPACING — ONLY USE THESE VALUES

Never invent spacing. Use only:
`0 · 2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`

Token names: `none · 3xs · 2xs · xs · s · m · l · xl · 2xl · 3xl · 4xl · 5xl · 6xl · 7xl · 8xl`

---

## 4. BORDER RADIUS — ONLY USE THESE VALUES

`0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 999`

Token names: `none · xs · s · m · l · xl · 2xl · 3xl · full`

---

## 5. ELEVATION SHADOWS

Use only the 8-step scale. Apply via `shadow=` prop.

| Level | Use case | Shadow value |
|---|---|---|
| 01 | Cards at rest | `0px 1px 2px #0000000d, 0px 1px 3px #00000014` |
| 02 | Card hover, raised buttons | `0px 2px 4px #00000012, 0px 2px 8px #0000001a` |
| 03 | Dropdowns, tooltips | `0px 4px 6px #00000014, 0px 4px 12px #0000001f` |
| 04 | Popovers, date pickers | `0px 6px 8px #00000017, 0px 6px 16px #00000024` |
| 05 | Side panels, drawers | `0px 8px 10px #0000001a, 0px 8px 24px #00000029` |
| 06 | Modals, bottom sheets | `0px 12px 16px #0000001c, 0px 12px 32px #0000002e` |
| 07 | Lightboxes, system alerts | `0px 16px 24px #0000001f, 0px 16px 48px #00000033` |
| 08 | Immersive overlays (rare) | `0px 24px 32px #00000024, 0px 24px 64px #00000038` |

---

## 6. LAYOUT RULES

- **ALL frames use auto layout** (`flex="row"` or `flex="col"`). Never `flex="none"` unless building a full-screen phone frame that contains positioned layers.
- **All spacing** uses values from the spacing scale above.
- **All padding** uses spacing scale values.
- **All gap** uses spacing scale values.
- Text always gets `w="fill"` when inside a flex column to prevent clipping.

### Radius + padding hierarchy — STRICT

| Layer | Web radius | Web padding | Mobile radius | Mobile padding |
|---|---|---|---|---|
| Outer section / page-level container | 24 | 24 | 16 | 16 |
| Inner card / sub-card within section | 16 | 16 | 12 | 12 |
| Small chip / badge / tag | 999 (pill) or 8 | 8px H · 4px V | 999 (pill) or 8 | 8px H · 4px V |
| Button | 12 | 12px V · 24px H | 12 | 12px V · 20px H |
| Input field | 12 | 12px V · 16px H | 12 | 12px V · 16px H |

**The rule:** each nested layer steps DOWN one radius tier and uses its own defined padding — never inheriting the parent's. Outer wraps inner; inner never matches outer.

### Spacing minimums — NEVER go below these
| Context | Min padding | Min gap |
|---|---|---|
| Section container (web) | 24px | 16px |
| Section container (mobile) | 16px | 12px |
| Card content area (web) | 16px | 12px |
| Card content area (mobile) | 12px | 8px |
| Inline chips / badges | 8px horizontal, 4px vertical | 4px |
| Buttons (web) | 12px vertical, 24px horizontal | — |
| Buttons (mobile) | 12px vertical, 20px horizontal | — |

### Visual quality rules — every render must pass these
1. **No cramped text** — body text never sits closer than 8px to any edge or sibling
2. **Breathable sections** — gap between section heading and first content item: 12px minimum
3. **Balanced cards** — top and bottom padding must be equal; left and right padding must be equal
4. **Readable type hierarchy** — section heading always visually heavier than body (size or weight step up)
5. **Dividers always rounded** — NEVER use a `LINE` node for separators. Always use `<Frame w="fill" h={1} rounded={999} bg="#edebdf" />`. LINE nodes have sharp square ends; rounded frames give clean, finished edges.
6. **Consistent inner padding** — all cards in a row must use the same padding value
7. **Stats/metric rows** — equal grow={1} columns, vertical dividers 1px `#edebdf`, height 28–32px

---

## 7. RENDER RULES

- **DO NOT import tokens into the working file.** Never run `figma-cli import` on the PDP or any working file. Variables are managed separately by the user.
- **Use raw hex values directly** — do NOT use `var:` syntax in `figma-cli render`. The `var:` resolver produces grey `#808080` placeholders when the collection context doesn't match. Use the resolved hex from the DS color table above instead.
- **Always use `figma-cli eval`** for creating frames with proper fills — it gives full control. Only use `figma-cli render` for simple quick tests.
- Font always: `font="Google Sans Flex"`
- **All layouts must use auto layout** — set `layoutMode`, `primaryAxisAlignItems`, `counterAxisAlignItems` in eval.
- **ALWAYS set `primaryAxisSizingMode = "FIXED"` and `counterAxisSizingMode = "FIXED"` on every frame** — without these, auto layout shrinks the frame to hug its children, ignoring the requested dimensions entirely.
- **ALWAYS follow the exact dimensions the user specifies** — read the numbers carefully, confirm width AND height before creating.
- When using eval to create frames with children inside auto layout, set `layoutSizingHorizontal = "FIXED"` and `layoutSizingVertical = "FIXED"` on children that need fixed size.
- **Never create multiple broken frames** — if a render fails or produces wrong output, delete the bad node immediately before retrying.
