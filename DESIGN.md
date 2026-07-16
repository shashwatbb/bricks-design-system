# DESIGN.md -- Bricks Design System

<!-- extraction-meta
source: Figma file "Bricks Design System"
scope: 20 page(s)
date: 2026-07-16
nodes-scanned: 5982
generator: figma-cli extract
-->

> **Structure trees auto-split** (~52k tokens — too large for one AI context): per-page trees are in `DESIGN-structure/`. Use `--no-split` to force a single file.

## 1. Identity

**In one line:** A design system using Inter, Google Sans Flex, Menlo with 109 unique colors extracted directly from Figma.

**Signature Techniques:**
- Consistent auto-layout spacing system
- Component library with 160 variants across 5 component sets

## 2. Color

### Palette

| Token | Hex | Usage count |
|---|---|---|
| text-secondary | `#444444` | 472 |
| background | `#ffffff` | 250 |
| text-primary | `#0f0e0d` | 190 |
| text-primary-alt | `#000000` | 176 |
| text-secondary-alt | `#666666` | 164 |
| border | `#ddd9ce` | 110 |
| accent | `#ff0000` | 42 |
| surface | `#e5e5e5` | 41 |
| accent-alt | `#4a16d9` | 36 |
| background-alt | `#f8f8fa` | 34 |
| accent-3 | `#2f7f49` | 34 |
| accent-4 | `#edebdf` | 31 |
| background-3 | `#fcfcfd` | 30 |
| accent-5 | `#f6f4ed` | 26 |
| accent-6 | `#be3f31` | 26 |
| surface-alt | `#edf8ee` | 25 |
| text-primary-3 | `#333333` | 25 |
| text-primary-4 | `#14141a` | 20 |
| background-4 | `#faf9f5` | 17 |
| accent-7 | `#f0ece3` | 16 |
| surface-3 | `#fff0ee` | 14 |
| surface-4 | `#fff8e8` | 12 |
| background-5 | `#f5f1fe` | 9 |
| surface-5 | `#eef4ff` | 9 |
| accent-8 | `#b07f25` | 9 |
| text-primary-5 | `#222222` | 8 |
| accent-9 | `#f0d79a` | 6 |
| text-primary-6 | `#0a0a0a` | 6 |
| text-tertiary | `#a09890` | 6 |
| accent-10 | `#b7d0ff` | 5 |
| accent-11 | `#2f6fea` | 5 |
| accent-12 | `#bfe3c6` | 5 |
| accent-13 | `#7a5514` | 5 |
| accent-14 | `#f1b7ae` | 5 |
| accent-15 | `#3038d6` | 5 |
| accent-16 | `#65a724` | 4 |
| surface-6 | `#d9d9d9` | 4 |
| accent-17 | `#652a2a` | 4 |
| accent-18 | `#214ead` | 3 |
| accent-19 | `#245f36` | 3 |
| accent-20 | `#8a2b20` | 3 |
| surface-7 | `#f0eefc` | 3 |
| accent-21 | `#fdf5d0` | 2 |
| surface-8 | `#eeeeee` | 2 |
| border-alt | `#9e9e9e` | 2 |
| text-tertiary-alt | `#808080` | 2 |
| accent-22 | `#5517ff` | 2 |
| accent-23 | `#9747ff` | 2 |
| accent-24 | `#e8efda` | 1 |
| accent-25 | `#5c713c` | 1 |
| accent-26 | `#eee4f1` | 1 |
| accent-27 | `#7750a8` | 1 |
| surface-9 | `#fffbe8` | 1 |
| accent-28 | `#f3de8a` | 1 |
| accent-29 | `#ddba3e` | 1 |
| accent-30 | `#b88e12` | 1 |
| accent-31 | `#8c6900` | 1 |
| accent-32 | `#846e0a` | 1 |
| surface-10 | `#e0e0e0` | 1 |
| text-tertiary-3 | `#7d7d7d` | 1 |
| text-tertiary-4 | `#717182` | 1 |
| accent-33 | `#fdd3ce` | 1 |
| accent-34 | `#e89489` | 1 |
| accent-35 | `#de7165` | 1 |
| accent-36 | `#d4544b` | 1 |
| accent-37 | `#a3342b` | 1 |
| accent-38 | `#6a2118` | 1 |
| accent-39 | `#dce9ff` | 1 |
| accent-40 | `#7ba8f7` | 1 |
| accent-41 | `#578cef` | 1 |
| accent-42 | `#3f7dee` | 1 |
| accent-43 | `#285fcb` | 1 |
| accent-44 | `#1a3d87` | 1 |
| accent-45 | `#d6eed8` | 1 |
| accent-46 | `#8ac89a` | 1 |
| accent-47 | `#5daa71` | 1 |
| accent-48 | `#43945c` | 1 |
| accent-49 | `#2a6d3f` | 1 |
| accent-50 | `#1d4a2a` | 1 |
| accent-51 | `#fff0cf` | 1 |
| accent-52 | `#dfbd6b` | 1 |
| accent-53 | `#cda347` | 1 |
| accent-54 | `#bb8b2e` | 1 |
| accent-55 | `#976c1f` | 1 |
| accent-56 | `#5e4210` | 1 |
| background-6 | `#fff0f6` | 1 |
| accent-57 | `#ffd6ea` | 1 |
| accent-58 | `#ffa3cc` | 1 |
| accent-59 | `#ff6aaf` | 1 |
| accent-60 | `#ff3d97` | 1 |
| accent-61 | `#ff1a87` | 1 |
| accent-62 | `#d4006a` | 1 |
| accent-63 | `#a80054` | 1 |
| accent-64 | `#7c003e` | 1 |
| accent-65 | `#50002a` | 1 |
| accent-66 | `#e8dffd` | 1 |
| accent-67 | `#d4c3fb` | 1 |
| accent-68 | `#b89df5` | 1 |
| accent-69 | `#9471ec` | 1 |
| accent-70 | `#7445e3` | 1 |
| accent-71 | `#5b2cd6` | 1 |
| accent-72 | `#3a11ad` | 1 |
| accent-73 | `#2a0c7f` | 1 |
| text-primary-7 | `#3c3630` | 1 |
| text-tertiary-5 | `#7d756c` | 1 |
| border-3 | `#c5bfb0` | 1 |
| accent-74 | `#e80067` | 1 |
| accent-75 | `#8a38f5` | 1 |
| text-primary-8 | `#00020f` | 1 |

## 3. Variables

Real Figma variable collections — the authoritative tokens (names, modes, values). These come straight from the file, unlike the sampled palette above. `figma-cli import` can recreate them as variables.

### Collection: color_tokens  ·  63 variables  ·  modes: Value

| Variable | Type | Value |
|---|---|---|
| surface/white | COLOR | → var:warm_neutral/0 |
| surface/subtle | COLOR | → var:warm_neutral/50 |
| surface/default | COLOR | → var:warm_neutral/100 |
| surface/brand | COLOR | → var:purple/700 |
| surface/brand_subtle | COLOR | → var:purple/50 |
| surface/disabled | COLOR | → var:grey_neutral/100 |
| border/subtle | COLOR | → var:warm_neutral/200 |
| border/default | COLOR | → var:warm_neutral/300 |
| border/brand | COLOR | → var:purple/700 |
| border/selected | COLOR | → var:warm_neutral/900 |
| border/disabled | COLOR | → var:grey_neutral/400 |
| text/primary | COLOR | → var:grey_neutral/900 |
| text/secondary | COLOR | → var:grey_neutral/800 |
| text/muted | COLOR | → var:grey_neutral/700 |
| text/inverse | COLOR | → var:warm_neutral/0 |
| semantic_surface/info | COLOR | → var:blue/50 |
| semantic_border/info | COLOR | → var:blue/200 |
| semantic_icons/info | COLOR | → var:blue/600 |
| semantic_text/info | COLOR | → var:blue/800 |
| semantic_surface/success | COLOR | → var:green/50 |
| semantic_border/success | COLOR | → var:green/200 |
| semantic_icons/success | COLOR | → var:green/600 |
| semantic_text/success | COLOR | → var:green/800 |
| semantic_surface/warning | COLOR | → var:yellow/50 |
| semantic_border/warning | COLOR | → var:yellow/200 |
| semantic_icons/warning | COLOR | → var:yellow/600 |
| semantic_text/warning | COLOR | → var:yellow/800 |
| semantic_surface/danger | COLOR | → var:red/50 |
| semantic_border/danger | COLOR | → var:red/200 |
| semantic_icons/danger | COLOR | → var:red/600 |
| semantic_text/danger | COLOR | → var:red/800 |
| pistachio_sand/1 | COLOR | → var:pistachio_sand/50 |
| pistachio_sand/2 | COLOR | → var:pistachio_sand/100 |
| pistachio_sand/3 | COLOR | → var:pistachio_sand/200 |
| pistachio_sand/4 | COLOR | → var:pistachio_sand/300 |
| pistachio_sand/5 | COLOR | → var:pistachio_sand/400 |
| lavender_mist/1 | COLOR | → var:lavender_mist/50 |
| lavender_mist/2 | COLOR | → var:lavender_mist/100 |
| lavender_mist/3 | COLOR | → var:lavender_mist/200 |
| lavender_mist/4 | COLOR | → var:lavender_mist/300 |
| lavender_mist/5 | COLOR | → var:lavender_mist/400 |
| soft_butter/1 | COLOR | → var:soft_butter/50 |
| soft_butter/2 | COLOR | → var:soft_butter/100 |
| soft_butter/3 | COLOR | → var:soft_butter/200 |
| soft_butter/4 | COLOR | → var:soft_butter/300 |
| soft_butter/5 | COLOR | → var:soft_butter/400 |
| grey_neutral/1 | COLOR | → var:grey_neutral/100 |
| grey_neutral/2 | COLOR | → var:grey_neutral/200 |
| grey_neutral/3 | COLOR | → var:grey_neutral/400 |
| grey_neutral/4 | COLOR | → var:grey_neutral/500 |
| grey_neutral/5 | COLOR | → var:grey_neutral/700 |
| pistachio_sand/6 | COLOR | → var:pistachio_sand/500 |
| lavender_mist/6 | COLOR | → var:lavender_mist/500 |
| soft_butter/6 | COLOR | → var:soft_butter/500 |
| grey_neutral/6 | COLOR | → var:grey_neutral/800 |
| text/brand | COLOR | → var:purple/700 |
| icon/grey_1 | COLOR | → var:grey_neutral/900 |
| icon/grey_2 | COLOR | → var:grey_neutral/0 |
| icon/grey_3 | COLOR | → var:grey_neutral/500 |
| icon/grey_4 | COLOR | → var:grey_neutral/800 |
| icon/warm_1 | COLOR | → var:warm_neutral/700 |
| icon/brand_1 | COLOR | → var:purple/700 |
| highlight | COLOR | → var:pink/500 |

### Collection: color_primitives  ·  100 variables  ·  modes: Value

| Variable | Type | Value |
|---|---|---|
| purple/50 | COLOR | `#f5f1fe` |
| purple/100 | COLOR | `#e8dffd` |
| purple/200 | COLOR | `#d4c3fb` |
| purple/300 | COLOR | `#b89df5` |
| purple/400 | COLOR | `#9471ec` |
| purple/500 | COLOR | `#7445e3` |
| purple/600 | COLOR | `#5b2cd6` |
| purple/700 | COLOR | `#4a16d9` |
| purple/800 | COLOR | `#3a11ad` |
| purple/900 | COLOR | `#2a0c7f` |
| warm_neutral/0 | COLOR | `#ffffff` |
| warm_neutral/50 | COLOR | `#faf9f5` |
| warm_neutral/100 | COLOR | `#f6f4ed` |
| warm_neutral/200 | COLOR | `#edebdf` |
| warm_neutral/300 | COLOR | `#ddd9ce` |
| warm_neutral/400 | COLOR | `#c5bfb0` |
| warm_neutral/500 | COLOR | `#a09890` |
| warm_neutral/600 | COLOR | `#7d756c` |
| warm_neutral/700 | COLOR | `#5c554d` |
| warm_neutral/800 | COLOR | `#3c3630` |
| warm_neutral/900 | COLOR | `#211d19` |
| grey_neutral/0 | COLOR | `#ffffff` |
| grey_neutral/50 | COLOR | `#f5f5f5` |
| grey_neutral/100 | COLOR | `#eeeeee` |
| grey_neutral/200 | COLOR | `#e0e0e0` |
| grey_neutral/300 | COLOR | `#bdbdbd` |
| grey_neutral/400 | COLOR | `#9e9e9e` |
| grey_neutral/500 | COLOR | `#7d7d7d` |
| grey_neutral/600 | COLOR | `#757575` |
| grey_neutral/700 | COLOR | `#666666` |
| grey_neutral/800 | COLOR | `#444444` |
| grey_neutral/900 | COLOR | `#0f0e0d` |
| pink/50 | COLOR | `#fff0f6` |
| pink/100 | COLOR | `#ffd6ea` |
| pink/200 | COLOR | `#ffa3cc` |
| pink/300 | COLOR | `#ff6aaf` |
| pink/400 | COLOR | `#ff3d97` |
| pink/500 | COLOR | `#ff1a87` |
| blue/50 | COLOR | `#eef4ff` |
| blue/100 | COLOR | `#dce9ff` |
| blue/200 | COLOR | `#b7d0ff` |
| yellow/50 | COLOR | `#fff8e8` |
| yellow/100 | COLOR | `#fff0cf` |
| yellow/200 | COLOR | `#f0d79a` |
| yellow/300 | COLOR | `#dfbd6b` |
| yellow/400 | COLOR | `#cda347` |
| yellow/500 | COLOR | `#bb8b2e` |
| yellow/600 | COLOR | `#b07f25` |
| yellow/700 | COLOR | `#976c1f` |
| yellow/800 | COLOR | `#7a5514` |
| yellow/900 | COLOR | `#5e4210` |
| green/50 | COLOR | `#edf8ee` |
| green/100 | COLOR | `#d6eed8` |
| green/200 | COLOR | `#bfe3c6` |
| green/300 | COLOR | `#8ac89a` |
| green/400 | COLOR | `#5daa71` |
| green/500 | COLOR | `#43945c` |
| green/600 | COLOR | `#2f7f49` |
| green/700 | COLOR | `#2a6d3f` |
| green/800 | COLOR | `#245f36` |
| red/50 | COLOR | `#fff0ee` |
| red/100 | COLOR | `#fdd3ce` |
| red/200 | COLOR | `#f1b7ae` |
| red/300 | COLOR | `#e89489` |
| red/400 | COLOR | `#de7165` |
| red/500 | COLOR | `#d4544b` |
| red/600 | COLOR | `#be3f31` |
| red/700 | COLOR | `#a3342b` |
| red/800 | COLOR | `#8a2b20` |
| red/900 | COLOR | `#6a2118` |
| pistachio_sand/50 | COLOR | `#f3f7ec` |
| pistachio_sand/100 | COLOR | `#e8efda` |
| pistachio_sand/200 | COLOR | `#cedfa9` |
| pistachio_sand/300 | COLOR | `#a9c46a` |
| pistachio_sand/400 | COLOR | `#7d9f3e` |
| pistachio_sand/500 | COLOR | `#5e7d24` |
| lavender_mist/50 | COLOR | `#f6f1f8` |
| lavender_mist/100 | COLOR | `#eee4f1` |
| lavender_mist/200 | COLOR | `#d6bce4` |
| lavender_mist/300 | COLOR | `#b58ad2` |
| lavender_mist/400 | COLOR | `#8c5bbb` |
| lavender_mist/500 | COLOR | `#6b3d97` |
| soft_butter/50 | COLOR | `#fffbe8` |
| soft_butter/100 | COLOR | `#fdf5d0` |
| soft_butter/200 | COLOR | `#f3de8a` |
| soft_butter/300 | COLOR | `#ddba3e` |
| soft_butter/400 | COLOR | `#b88e12` |
| soft_butter/500 | COLOR | `#8c6900` |
| blue/300 | COLOR | `#7ba8f7` |
| blue/400 | COLOR | `#578cef` |
| blue/500 | COLOR | `#3f7dee` |
| blue/600 | COLOR | `#2f6fea` |
| blue/700 | COLOR | `#285fcb` |
| blue/800 | COLOR | `#214ead` |
| blue/900 | COLOR | `#1a3d87` |
| green/900 | COLOR | `#1d4a2a` |
| pink/600 | COLOR | `#d4006a` |
| pink/700 | COLOR | `#a80054` |
| pink/800 | COLOR | `#7c003e` |
| pink/900 | COLOR | `#50002a` |

### Collection: spacing  ·  15 variables  ·  modes: Value

| Variable | Type | Value |
|---|---|---|
| none | FLOAT | 0 |
| 3xs | FLOAT | 2 |
| 2xs | FLOAT | 4 |
| xs | FLOAT | 8 |
| s | FLOAT | 12 |
| m | FLOAT | 16 |
| l | FLOAT | 20 |
| xl | FLOAT | 24 |
| 2xl | FLOAT | 32 |
| 3xl | FLOAT | 40 |
| 4xl | FLOAT | 48 |
| 5xl | FLOAT | 64 |
| 6xl | FLOAT | 80 |
| 7xl | FLOAT | 96 |
| 8xl | FLOAT | 128 |

### Collection: radius  ·  9 variables  ·  modes: Value

| Variable | Type | Value |
|---|---|---|
| none | FLOAT | 0 |
| xs | FLOAT | 4 |
| s | FLOAT | 8 |
| m | FLOAT | 12 |
| l | FLOAT | 16 |
| xl | FLOAT | 20 |
| 2xl | FLOAT | 24 |
| 3xl | FLOAT | 32 |
| full | FLOAT | 999 |

### Collection: typography  ·  34 variables  ·  modes: value

| Variable | Type | value |
|---|---|---|
| font_family/primary | STRING | "Google Sans Flex" |
| font_weight/regular | STRING | "Regular" |
| font_weight/medium | STRING | "Medium" |
| font_weight/semibold | STRING | "SemiBold" |
| font_weight/bold | STRING | "Bold" |
| font_size/xs | FLOAT | 10 |
| font_size/s | FLOAT | 12 |
| font_size/m | FLOAT | 14 |
| font_size/lg | FLOAT | 16 |
| font_size/xl | FLOAT | 18 |
| font_size/2xl | FLOAT | 20 |
| font_size/3xl | FLOAT | 24 |
| font_size/4xl | FLOAT | 28 |
| font_size/5xl | FLOAT | 32 |
| font_size/6xl | FLOAT | 36 |
| font_size/7xl | FLOAT | 40 |
| font_size/8xl | FLOAT | 48 |
| font_size/9xl | FLOAT | 56 |
| font_height/xs | FLOAT | 12 |
| font_height/s | FLOAT | 16 |
| font_height/m | FLOAT | 20 |
| font_height/l | FLOAT | 22 |
| font_height/xl | FLOAT | 26 |
| font_height/2xl | FLOAT | 28 |
| font_height/3xl | FLOAT | 32 |
| font_height/4xl | FLOAT | 36 |
| font_height/5xl | FLOAT | 40 |
| font_height/6xl | FLOAT | 44 |
| font_height/7xl | FLOAT | 48 |
| font_height/8xl | FLOAT | 56 |
| font_height/9xl | FLOAT | 64 |
| letter_spacing/none | FLOAT | 0 |
| letter_spacing/s | FLOAT | 0.10000000149011612 |
| letter_spacing/md | FLOAT | 0.20000000298023224 |

## 4. Typography

### Fonts

- Inter
- Google Sans Flex
- Menlo

### Scale

| Token | Family | Size | Weight | Line height |
|---|---|---|---|---|
| h1 | Inter | 30px | 600 | 36px |
| h2 | Inter | 28px | 700 | auto |
| h3 | Google Sans Flex | 24px | 600 | 32px |
| h3-2 | Inter | 24px | 700 | auto |
| h3-3 | Google Sans Flex | 24px | 700 | auto |
| h3-4 | Inter | 24px | 600 | 32px |
| h3-5 | Google Sans Flex | 24px | 500 | auto |
| h3-6 | Inter | 24px | 500 | 36px |
| h3-7 | Inter | 24px | 500 | auto |
| h4 | Inter | 22px | 700 | auto |
| h5 | Google Sans Flex | 20px | 500 | auto |
| h5-2 | Inter | 20px | 500 | 30px |
| h5-3 | Inter | 20px | 500 | auto |
| h5-4 | Inter | 20px | 700 | auto |
| h5-5 | Google Sans Flex | 20px | 600 | 28px |
| h6 | Inter | 18px | 600 | 28px |
| h6-2 | Inter | 18px | 500 | auto |
| h6-3 | Inter | 18px | 400 | auto |
| body-lg | Google Sans Flex | 16px | 600 | 24px |
| body-lg-2 | Google Sans Flex | 16px | 500 | 24px |
| body-lg-3 | Inter | 16px | 700 | auto |
| body-lg-4 | Inter | 16px | 600 | auto |
| body-lg-5 | Google Sans Flex | 16px | 500 | 20px |
| body-lg-6 | Google Sans Flex | 16px | 400 | 22px |
| body-lg-7 | Inter | 16px | 400 | 24px |
| body-lg-8 | Google Sans Flex | 16px | 600 | 20px |
| body | Inter | 15px | 700 | auto |
| body-2 | Inter | 14px | 500 | auto |
| body-3 | Inter | 14px | 400 | 22px |
| body-4 | Google Sans Flex | 14px | 400 | 20px |
| body-5 | Inter | 14px | 700 | auto |
| body-6 | Inter | 14px | 400 | 20px |
| body-7 | Google Sans Flex | 14px | 500 | 16px |
| body-8 | Inter | 14px | 400 | 20px |
| body-9 | Inter | 14px | 400 | 36px |
| body-10 | Inter | 14px | 500 | 20px |
| body-11 | Inter | 14px | 400 | auto |
| body-12 | Inter | 14px | 600 | 20px |
| body-13 | Inter | 14px | 400 | 24px |
| body-14 | Google Sans Flex | 14px | 400 | 18px |
| body-15 | Google Sans Flex | 14px | 400 | 16px |
| body-16 | Google Sans Flex | 14px | 600 | 20px |
| body-17 | Google Sans Flex | 14px | 400 | 24px |
| body-18 | Menlo | 13px | 400 | 19.5px |
| body-19 | Inter | 13px | 500 | auto |
| body-20 | Inter | 13px | 400 | 20px |
| body-21 | Inter | 13px | 600 | auto |
| body-22 | Inter | 13px | 400 | auto |
| body-23 | Inter | 13px | 700 | auto |
| caption | Inter | 12px | 400 | auto |
| caption-2 | Google Sans Flex | 12px | 400 | 16px |
| caption-3 | Inter | 12px | 500 | auto |
| caption-4 | Inter | 12px | 600 | auto |
| caption-5 | Google Sans Flex | 12px | 400 | auto |
| caption-6 | Inter | 12px | 700 | auto |
| caption-7 | Inter | 12px | 400 | 16px |
| caption-8 | Inter | 12px | 400 | 16px |
| caption-9 | Inter | 12px | 400 | auto |
| caption-10 | Google Sans Flex | 12px | 600 | 20px |
| caption-11 | Inter | 11px | 400 | auto |
| caption-12 | Inter | 11px | 600 | auto |
| caption-13 | Inter | 11px | 500 | 16.5px |
| caption-14 | Inter | 11px | 700 | auto |
| caption-15 | Inter | 10px | 500 | auto |
| caption-16 | Inter | 10px | 400 | auto |
| caption-17 | Google Sans Flex | 10px | 400 | 12px |
| caption-18 | Google Sans Flex | 10px | 600 | 12px |
| caption-19 | Inter | 10px | 500 | 12px |

## 5. Spacing & Layout

### Base Unit

2px

### Border Radius

| Token | Value |
|---|---|
| radius-sm | 2px |
| radius-md | 3px |
| radius-lg | 4px |
| radius-lg-2 | 5px |
| radius-lg-3 | 6px |
| radius-lg-4 | 8px |
| radius-lg-5 | 10px |
| radius-lg-6 | 12px |
| radius-lg-7 | 16px |
| radius-lg-8 | 24px |
| radius-lg-9 | 32px |
| radius-full | 999px |
| radius-full-2 | 16777200px |

## 6. Depth & Motion

### Elevation

- 0px 1px 2px 0px #000000 @ 5% (used 1×)
- 0px 1px 3px 0px #000000 @ 8% (used 1×)
- 0px 2px 4px -1px #000000 @ 7% (used 1×)
- 0px 2px 8px 0px #000000 @ 10% (used 1×)
- 0px 4px 6px -2px #000000 @ 8% (used 1×)
- 0px 4px 12px 0px #000000 @ 12% (used 1×)
- 0px 6px 8px -3px #000000 @ 9% (used 1×)
- 0px 6px 16px 0px #000000 @ 14% (used 1×)
- 0px 8px 10px -4px #000000 @ 10% (used 1×)
- 0px 8px 24px 0px #000000 @ 16% (used 1×)
- 0px 12px 16px -6px #000000 @ 11% (used 1×)
- 0px 12px 32px 0px #000000 @ 18% (used 1×)
- 0px 16px 24px -8px #000000 @ 12% (used 1×)
- 0px 16px 48px 0px #000000 @ 20% (used 1×)
- 0px 24px 32px -12px #000000 @ 14% (used 1×)
- 0px 24px 64px 0px #000000 @ 22% (used 1×)
- 0px -2px 6px 0px #ffffff @ 100% (used 1×)
- NOISE blur undefinedpx (used 1×)

## 7. Components

### buttons

Page:       ↳ Buttons · 108 variants

Reuse: import existing — key `adf6574a62186980662b60cf98b928aca07971cd` · node `128:60`

| Property | Values |
|---|---|
| Variant | Primary, Secondary, Tertiary, Destructive, Link purple, Link black |
| Size | S, M, L |
| State | Default, Hover, Pressed, Focus, Disabled, Loading |

Sample variant structure:

- **Variant=Primary, Size=S, State=Default** · `COMPONENT` · 70×32 · horizontal row, gap 4px, padding 8/12/8/12px · 3 children
  - **leading-icon** · `INSTANCE` · 16×16 · instance of leading-icon
  - **Button** · `TEXT` · 46×16 · “Button”
  - **trailing-icon** · `INSTANCE` · 16×16 · instance of trailing-icon

### .modal_non-dismissible

Page:       ↳ Modal · 8 variants

Reuse: import existing — key `d3b924810ac12e3e6875de4f55a973b6d24e5be0` · node `889:1043`

| Property | Values |
|---|---|
| device | desktop, mobile |
| intent | acknowledge, destructive, successful, warning |

Sample variant structure:

- **device=desktop, intent=destructive** · `COMPONENT` · 480×204 · vertical stack · 2 children
  - **Header** · `FRAME` · 480×116 · vertical stack, gap 16px, padding 24/24/0/24px · 2 children
    - **Trash** · `INSTANCE` · 24×24 · instance of Trash
    - **Text Container** · `FRAME` · 432×52 · vertical stack, gap 8px · 2 children
      - **Title** · `TEXT` · 432×28 · “Destructive non-dismissible modal”
      - **Subtitle** · `TEXT` · 432×16 · “Optional subtitle text”
  - **Body** · `FRAME` · 480×88 · horizontal row, gap 16px, padding 24px · 2 children
    - **buttons** · `INSTANCE` · 80×40 · horizontal row, gap 8px, padding 12/16/12/16px · instance of buttons
    - **buttons** · `INSTANCE` · 80×40 · horizontal row, gap 8px, padding 12/16/12/16px · instance of buttons

### .modal_dismissible

Page:       ↳ Modal · 12 variants

Reuse: import existing — key `5f3e309d5e7d2049325cb5fedc15a4b3ec0ed0d2` · node `889:1324`

| Property | Values |
|---|---|
| device | desktop, mobile |
| size | medium, large, small |
| state | default, scrolled |

Sample variant structure:

- **device=desktop, size=small, state=default** · `COMPONENT` · 480×516 · vertical stack · 6 children
  - **X** · `FRAME` · 480×48 · horizontal row, gap 392px, padding 8/12/8/12px · 1 children
    - **Close** · `FRAME` · 32×32 · horizontal row, gap 10px, padding 10px · 1 children
      - **X** · `INSTANCE` · 20×20 · instance of X
  - **Vector 407** · `VECTOR` · 480×0
  - **Header** · `FRAME` · 480×108 · vertical stack, gap 16px, padding 0/24/16/24px · 2 children
    - **Icon** · `INSTANCE` · 24×24 · instance of Icon
    - **Text Container** · `FRAME` · 432×52 · vertical stack, gap 8px · 2 children
      - **Title** · `TEXT` · 432×28 · “Small sized dismissible modal”
      - **Subtitle** · `TEXT` · 432×16 · “Optional subtitle text”
  - **Slot** · `SLOT` · 480×272 · vertical stack, gap 10px, padding 0/24/0/24px
  - **Vector 406** · `VECTOR` · 480×0
  - **Body** · `FRAME` · 480×88 · horizontal row, gap 16px, padding 24px · 2 children
    - **buttons** · `INSTANCE` · 80×40 · horizontal row, gap 8px, padding 12/16/12/16px · instance of buttons
    - **buttons** · `INSTANCE` · 81×40 · horizontal row, gap 8px, padding 12/16/12/16px · instance of buttons

### Overlay

Page:       ↳ Overlay · 2 variants

Reuse: import existing — key `c7f5951efd9f91e3d57608f1a8a3838405a06684` · node `211:731`

| Property | Values |
|---|---|
| Device | Desktop, Mobile |

Sample variant structure:

- **Device=Mobile** · `COMPONENT` · 360×844 · horizontal row, gap 10px

### Tag

Page: Tag · 30 variants

Reuse: import existing — key `3d24211858697b2ef7914200235ac44934dfd151` · node `1409:48`

| Property | Values |
|---|---|
| Size | s, m, l |
| Color | neutral, brand, info, success, warning, danger, accentPistachio, accentLavender, accentButter, accentGrey |

Sample variant structure:

- **Size=s, Color=neutral** · `COMPONENT` · 43×18 · horizontal row, gap 4px, padding 0/8/0/8px · 3 children
  - **Leading Icon** · `INSTANCE` · 16×16 · instance of Leading Icon
  - **Label** · `TEXT` · 27×12 · “Label”
  - **Trailing Icon** · `INSTANCE` · 16×16 · instance of Trailing Icon

## 8. States

State tokens should be derived from the base palette above. Recommended mappings:

| State | Treatment |
|-------|-----------|
| Hover | Lighten/darken accent by 10% |
| Focus | 2px ring using accent color with 30% opacity |
| Disabled | 40% opacity, no pointer events |
| Error | Use danger color for border and text |

## 9. Rules

### Do

- Use the 2px base unit for all spacing decisions
- Use `#ff0000` (accent) as the primary accent color
- Bind colors to the tokens below instead of hardcoding hex values

### Don't

- Introduce new colors without adding them to the palette
- Mix corner radii outside the radius scale

## 10. Extending this system

### How to reuse this DESIGN.md

Import into Figma with `figma-cli import <this file>` — colors, radii and typography become variables.

### When to add a new token vs reuse

Reuse the closest existing token; add a new one only when a new semantic role appears.

## 11. Machine-readable tokens

The block below is the canonical token map. It mirrors the tables above but is unambiguous and parseable.

```json design-tokens
{
  "$schema": "design-tokens.v1",
  "meta": {
    "source": "Bricks Design System",
    "generated": "2026-07-16"
  },
  "color": {
    "text-secondary": "#444444",
    "background": "#ffffff",
    "text-primary": "#0f0e0d",
    "text-primary-alt": "#000000",
    "text-secondary-alt": "#666666",
    "border": "#ddd9ce",
    "accent": "#ff0000",
    "surface": "#e5e5e5",
    "accent-alt": "#4a16d9",
    "background-alt": "#f8f8fa",
    "accent-3": "#2f7f49",
    "accent-4": "#edebdf",
    "background-3": "#fcfcfd",
    "accent-5": "#f6f4ed",
    "accent-6": "#be3f31",
    "surface-alt": "#edf8ee",
    "text-primary-3": "#333333",
    "text-primary-4": "#14141a",
    "background-4": "#faf9f5",
    "accent-7": "#f0ece3",
    "surface-3": "#fff0ee",
    "surface-4": "#fff8e8",
    "background-5": "#f5f1fe",
    "surface-5": "#eef4ff",
    "accent-8": "#b07f25",
    "text-primary-5": "#222222",
    "accent-9": "#f0d79a",
    "text-primary-6": "#0a0a0a",
    "text-tertiary": "#a09890",
    "accent-10": "#b7d0ff",
    "accent-11": "#2f6fea",
    "accent-12": "#bfe3c6",
    "accent-13": "#7a5514",
    "accent-14": "#f1b7ae",
    "accent-15": "#3038d6",
    "accent-16": "#65a724",
    "surface-6": "#d9d9d9",
    "accent-17": "#652a2a",
    "accent-18": "#214ead",
    "accent-19": "#245f36",
    "accent-20": "#8a2b20",
    "surface-7": "#f0eefc",
    "accent-21": "#fdf5d0",
    "surface-8": "#eeeeee",
    "border-alt": "#9e9e9e",
    "text-tertiary-alt": "#808080",
    "accent-22": "#5517ff",
    "accent-23": "#9747ff",
    "accent-24": "#e8efda",
    "accent-25": "#5c713c",
    "accent-26": "#eee4f1",
    "accent-27": "#7750a8",
    "surface-9": "#fffbe8",
    "accent-28": "#f3de8a",
    "accent-29": "#ddba3e",
    "accent-30": "#b88e12",
    "accent-31": "#8c6900",
    "accent-32": "#846e0a",
    "surface-10": "#e0e0e0",
    "text-tertiary-3": "#7d7d7d",
    "text-tertiary-4": "#717182",
    "accent-33": "#fdd3ce",
    "accent-34": "#e89489",
    "accent-35": "#de7165",
    "accent-36": "#d4544b",
    "accent-37": "#a3342b",
    "accent-38": "#6a2118",
    "accent-39": "#dce9ff",
    "accent-40": "#7ba8f7",
    "accent-41": "#578cef",
    "accent-42": "#3f7dee",
    "accent-43": "#285fcb",
    "accent-44": "#1a3d87",
    "accent-45": "#d6eed8",
    "accent-46": "#8ac89a",
    "accent-47": "#5daa71",
    "accent-48": "#43945c",
    "accent-49": "#2a6d3f",
    "accent-50": "#1d4a2a",
    "accent-51": "#fff0cf",
    "accent-52": "#dfbd6b",
    "accent-53": "#cda347",
    "accent-54": "#bb8b2e",
    "accent-55": "#976c1f",
    "accent-56": "#5e4210",
    "background-6": "#fff0f6",
    "accent-57": "#ffd6ea",
    "accent-58": "#ffa3cc",
    "accent-59": "#ff6aaf",
    "accent-60": "#ff3d97",
    "accent-61": "#ff1a87",
    "accent-62": "#d4006a",
    "accent-63": "#a80054",
    "accent-64": "#7c003e",
    "accent-65": "#50002a",
    "accent-66": "#e8dffd",
    "accent-67": "#d4c3fb",
    "accent-68": "#b89df5",
    "accent-69": "#9471ec",
    "accent-70": "#7445e3",
    "accent-71": "#5b2cd6",
    "accent-72": "#3a11ad",
    "accent-73": "#2a0c7f",
    "text-primary-7": "#3c3630",
    "text-tertiary-5": "#7d756c",
    "border-3": "#c5bfb0",
    "accent-74": "#e80067",
    "accent-75": "#8a38f5",
    "text-primary-8": "#00020f"
  },
  "typography": {
    "h1": {
      "fontFamily": "Inter",
      "fontSize": 30,
      "fontWeight": 600,
      "lineHeight": 36,
      "letterSpacing": 0.3955078125
    },
    "h2": {
      "fontFamily": "Inter",
      "fontSize": 28,
      "fontWeight": 700
    },
    "h3": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 24,
      "fontWeight": 600,
      "lineHeight": 32
    },
    "h3-2": {
      "fontFamily": "Inter",
      "fontSize": 24,
      "fontWeight": 700
    },
    "h3-3": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 24,
      "fontWeight": 700
    },
    "h3-4": {
      "fontFamily": "Inter",
      "fontSize": 24,
      "fontWeight": 600,
      "lineHeight": 32,
      "letterSpacing": 0.0703125
    },
    "h3-5": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 24,
      "fontWeight": 500
    },
    "h3-6": {
      "fontFamily": "Inter",
      "fontSize": 24,
      "fontWeight": 500,
      "lineHeight": 36,
      "letterSpacing": 0.0703125
    },
    "h3-7": {
      "fontFamily": "Inter",
      "fontSize": 24,
      "fontWeight": 500
    },
    "h4": {
      "fontFamily": "Inter",
      "fontSize": 22,
      "fontWeight": 700
    },
    "h5": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 20,
      "fontWeight": 500
    },
    "h5-2": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": 500,
      "lineHeight": 30,
      "letterSpacing": -0.44921875
    },
    "h5-3": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": 500
    },
    "h5-4": {
      "fontFamily": "Inter",
      "fontSize": 20,
      "fontWeight": 700
    },
    "h5-5": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 20,
      "fontWeight": 600,
      "lineHeight": 28
    },
    "h6": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": 600,
      "lineHeight": 28,
      "letterSpacing": -0.439453125
    },
    "h6-2": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": 500,
      "letterSpacing": 0.4099999964237213
    },
    "h6-3": {
      "fontFamily": "Inter",
      "fontSize": 18,
      "fontWeight": 400
    },
    "body-lg": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 24
    },
    "body-lg-2": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 16,
      "fontWeight": 500,
      "lineHeight": 24
    },
    "body-lg-3": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": 700
    },
    "body-lg-4": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": 600
    },
    "body-lg-5": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 16,
      "fontWeight": 500,
      "lineHeight": 20
    },
    "body-lg-6": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 16,
      "fontWeight": 400,
      "lineHeight": 22
    },
    "body-lg-7": {
      "fontFamily": "Inter",
      "fontSize": 16,
      "fontWeight": 400,
      "lineHeight": 24,
      "letterSpacing": -0.3125
    },
    "body-lg-8": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 16,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": 15,
      "fontWeight": 700
    },
    "body-2": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 500
    },
    "body-3": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 22
    },
    "body-4": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 20
    },
    "body-5": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 700
    },
    "body-6": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 20
    },
    "body-7": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 500,
      "lineHeight": 16
    },
    "body-8": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 20,
      "letterSpacing": -0.150390625
    },
    "body-9": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 36
    },
    "body-10": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 500,
      "lineHeight": 20,
      "letterSpacing": -0.150390625
    },
    "body-11": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400
    },
    "body-12": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 20,
      "letterSpacing": -0.150390625
    },
    "body-13": {
      "fontFamily": "Inter",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 24
    },
    "body-14": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 18
    },
    "body-15": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 16
    },
    "body-16": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "body-17": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 14,
      "fontWeight": 400,
      "lineHeight": 24
    },
    "body-18": {
      "fontFamily": "Menlo",
      "fontSize": 13,
      "fontWeight": 400,
      "lineHeight": 19.5
    },
    "body-19": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 500
    },
    "body-20": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 400,
      "lineHeight": 20
    },
    "body-21": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 600
    },
    "body-22": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 400
    },
    "body-23": {
      "fontFamily": "Inter",
      "fontSize": 13,
      "fontWeight": 700
    },
    "caption": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 400
    },
    "caption-2": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 12,
      "fontWeight": 400,
      "lineHeight": 16
    },
    "caption-3": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 500
    },
    "caption-4": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 600
    },
    "caption-5": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 12,
      "fontWeight": 400
    },
    "caption-6": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 700
    },
    "caption-7": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 400,
      "lineHeight": 16
    },
    "caption-8": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 400,
      "lineHeight": 16,
      "letterSpacing": 5
    },
    "caption-9": {
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": 400,
      "letterSpacing": 5
    },
    "caption-10": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 12,
      "fontWeight": 600,
      "lineHeight": 20
    },
    "caption-11": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": 400
    },
    "caption-12": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": 600
    },
    "caption-13": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": 500,
      "lineHeight": 16.5,
      "letterSpacing": 0.614453136920929
    },
    "caption-14": {
      "fontFamily": "Inter",
      "fontSize": 11,
      "fontWeight": 700
    },
    "caption-15": {
      "fontFamily": "Inter",
      "fontSize": 10,
      "fontWeight": 500
    },
    "caption-16": {
      "fontFamily": "Inter",
      "fontSize": 10,
      "fontWeight": 400
    },
    "caption-17": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 10,
      "fontWeight": 400,
      "lineHeight": 12
    },
    "caption-18": {
      "fontFamily": "Google Sans Flex",
      "fontSize": 10,
      "fontWeight": 600,
      "lineHeight": 12
    },
    "caption-19": {
      "fontFamily": "Inter",
      "fontSize": 10,
      "fontWeight": 500,
      "lineHeight": 12,
      "letterSpacing": 0.20000000298023224
    }
  },
  "spacing": {
    "base-unit": 2
  },
  "radius": {
    "radius-sm": "2px",
    "radius-md": "3px",
    "radius-lg": "4px",
    "radius-lg-2": "5px",
    "radius-lg-3": "6px",
    "radius-lg-4": "8px",
    "radius-lg-5": "10px",
    "radius-lg-6": "12px",
    "radius-lg-7": "16px",
    "radius-lg-8": "24px",
    "radius-lg-9": "32px",
    "radius-full": "999px",
    "radius-full-2": "16777200px"
  },
  "shadow": {
    "shadow-1": "0px 1px 2px 0px #0000000d",
    "shadow-2": "0px 1px 3px 0px #00000014",
    "shadow-3": "0px 2px 4px -1px #00000012",
    "shadow-4": "0px 2px 8px 0px #0000001a",
    "shadow-5": "0px 4px 6px -2px #00000014",
    "shadow-6": "0px 4px 12px 0px #0000001f",
    "shadow-7": "0px 6px 8px -3px #00000017",
    "shadow-8": "0px 6px 16px 0px #00000024",
    "shadow-9": "0px 8px 10px -4px #0000001a",
    "shadow-10": "0px 8px 24px 0px #00000029",
    "shadow-11": "0px 12px 16px -6px #0000001c",
    "shadow-12": "0px 12px 32px 0px #0000002e",
    "shadow-13": "0px 16px 24px -8px #0000001f",
    "shadow-14": "0px 16px 48px 0px #00000033",
    "shadow-15": "0px 24px 32px -12px #00000024",
    "shadow-16": "0px 24px 64px 0px #00000038",
    "shadow-17": "0px -2px 6px 0px #ffffff"
  },
  "fonts": [
    "Inter",
    "Google Sans Flex",
    "Menlo"
  ],
  "variables": {
    "color_tokens": {
      "modes": [
        "Value"
      ],
      "variables": {
        "surface/white": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/0"
            }
          }
        },
        "surface/subtle": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/50"
            }
          }
        },
        "surface/default": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/100"
            }
          }
        },
        "surface/brand": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "purple/700"
            }
          }
        },
        "surface/brand_subtle": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "purple/50"
            }
          }
        },
        "surface/disabled": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/100"
            }
          }
        },
        "border/subtle": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/200"
            }
          }
        },
        "border/default": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/300"
            }
          }
        },
        "border/brand": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "purple/700"
            }
          }
        },
        "border/selected": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/900"
            }
          }
        },
        "border/disabled": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/400"
            }
          }
        },
        "text/primary": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/900"
            }
          }
        },
        "text/secondary": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/800"
            }
          }
        },
        "text/muted": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/700"
            }
          }
        },
        "text/inverse": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/0"
            }
          }
        },
        "semantic_surface/info": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "blue/50"
            }
          }
        },
        "semantic_border/info": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "blue/200"
            }
          }
        },
        "semantic_icons/info": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "blue/600"
            }
          }
        },
        "semantic_text/info": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "blue/800"
            }
          }
        },
        "semantic_surface/success": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "green/50"
            }
          }
        },
        "semantic_border/success": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "green/200"
            }
          }
        },
        "semantic_icons/success": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "green/600"
            }
          }
        },
        "semantic_text/success": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "green/800"
            }
          }
        },
        "semantic_surface/warning": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "yellow/50"
            }
          }
        },
        "semantic_border/warning": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "yellow/200"
            }
          }
        },
        "semantic_icons/warning": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "yellow/600"
            }
          }
        },
        "semantic_text/warning": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "yellow/800"
            }
          }
        },
        "semantic_surface/danger": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "red/50"
            }
          }
        },
        "semantic_border/danger": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "red/200"
            }
          }
        },
        "semantic_icons/danger": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "red/600"
            }
          }
        },
        "semantic_text/danger": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "red/800"
            }
          }
        },
        "pistachio_sand/1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/50"
            }
          }
        },
        "pistachio_sand/2": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/100"
            }
          }
        },
        "pistachio_sand/3": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/200"
            }
          }
        },
        "pistachio_sand/4": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/300"
            }
          }
        },
        "pistachio_sand/5": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/400"
            }
          }
        },
        "lavender_mist/1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/50"
            }
          }
        },
        "lavender_mist/2": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/100"
            }
          }
        },
        "lavender_mist/3": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/200"
            }
          }
        },
        "lavender_mist/4": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/300"
            }
          }
        },
        "lavender_mist/5": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/400"
            }
          }
        },
        "soft_butter/1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/50"
            }
          }
        },
        "soft_butter/2": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/100"
            }
          }
        },
        "soft_butter/3": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/200"
            }
          }
        },
        "soft_butter/4": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/300"
            }
          }
        },
        "soft_butter/5": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/400"
            }
          }
        },
        "grey_neutral/1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/100"
            }
          }
        },
        "grey_neutral/2": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/200"
            }
          }
        },
        "grey_neutral/3": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/400"
            }
          }
        },
        "grey_neutral/4": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/500"
            }
          }
        },
        "grey_neutral/5": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/700"
            }
          }
        },
        "pistachio_sand/6": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pistachio_sand/500"
            }
          }
        },
        "lavender_mist/6": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "lavender_mist/500"
            }
          }
        },
        "soft_butter/6": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "soft_butter/500"
            }
          }
        },
        "grey_neutral/6": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/800"
            }
          }
        },
        "text/brand": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "purple/700"
            }
          }
        },
        "icon/grey_1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/900"
            }
          }
        },
        "icon/grey_2": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/0"
            }
          }
        },
        "icon/grey_3": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/500"
            }
          }
        },
        "icon/grey_4": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "grey_neutral/800"
            }
          }
        },
        "icon/warm_1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "warm_neutral/700"
            }
          }
        },
        "icon/brand_1": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "purple/700"
            }
          }
        },
        "highlight": {
          "type": "COLOR",
          "values": {
            "Value": {
              "alias": "pink/500"
            }
          }
        }
      }
    },
    "color_primitives": {
      "modes": [
        "Value"
      ],
      "variables": {
        "purple/50": {
          "type": "COLOR",
          "values": {
            "Value": "#f5f1fe"
          }
        },
        "purple/100": {
          "type": "COLOR",
          "values": {
            "Value": "#e8dffd"
          }
        },
        "purple/200": {
          "type": "COLOR",
          "values": {
            "Value": "#d4c3fb"
          }
        },
        "purple/300": {
          "type": "COLOR",
          "values": {
            "Value": "#b89df5"
          }
        },
        "purple/400": {
          "type": "COLOR",
          "values": {
            "Value": "#9471ec"
          }
        },
        "purple/500": {
          "type": "COLOR",
          "values": {
            "Value": "#7445e3"
          }
        },
        "purple/600": {
          "type": "COLOR",
          "values": {
            "Value": "#5b2cd6"
          }
        },
        "purple/700": {
          "type": "COLOR",
          "values": {
            "Value": "#4a16d9"
          }
        },
        "purple/800": {
          "type": "COLOR",
          "values": {
            "Value": "#3a11ad"
          }
        },
        "purple/900": {
          "type": "COLOR",
          "values": {
            "Value": "#2a0c7f"
          }
        },
        "warm_neutral/0": {
          "type": "COLOR",
          "values": {
            "Value": "#ffffff"
          }
        },
        "warm_neutral/50": {
          "type": "COLOR",
          "values": {
            "Value": "#faf9f5"
          }
        },
        "warm_neutral/100": {
          "type": "COLOR",
          "values": {
            "Value": "#f6f4ed"
          }
        },
        "warm_neutral/200": {
          "type": "COLOR",
          "values": {
            "Value": "#edebdf"
          }
        },
        "warm_neutral/300": {
          "type": "COLOR",
          "values": {
            "Value": "#ddd9ce"
          }
        },
        "warm_neutral/400": {
          "type": "COLOR",
          "values": {
            "Value": "#c5bfb0"
          }
        },
        "warm_neutral/500": {
          "type": "COLOR",
          "values": {
            "Value": "#a09890"
          }
        },
        "warm_neutral/600": {
          "type": "COLOR",
          "values": {
            "Value": "#7d756c"
          }
        },
        "warm_neutral/700": {
          "type": "COLOR",
          "values": {
            "Value": "#5c554d"
          }
        },
        "warm_neutral/800": {
          "type": "COLOR",
          "values": {
            "Value": "#3c3630"
          }
        },
        "warm_neutral/900": {
          "type": "COLOR",
          "values": {
            "Value": "#211d19"
          }
        },
        "grey_neutral/0": {
          "type": "COLOR",
          "values": {
            "Value": "#ffffff"
          }
        },
        "grey_neutral/50": {
          "type": "COLOR",
          "values": {
            "Value": "#f5f5f5"
          }
        },
        "grey_neutral/100": {
          "type": "COLOR",
          "values": {
            "Value": "#eeeeee"
          }
        },
        "grey_neutral/200": {
          "type": "COLOR",
          "values": {
            "Value": "#e0e0e0"
          }
        },
        "grey_neutral/300": {
          "type": "COLOR",
          "values": {
            "Value": "#bdbdbd"
          }
        },
        "grey_neutral/400": {
          "type": "COLOR",
          "values": {
            "Value": "#9e9e9e"
          }
        },
        "grey_neutral/500": {
          "type": "COLOR",
          "values": {
            "Value": "#7d7d7d"
          }
        },
        "grey_neutral/600": {
          "type": "COLOR",
          "values": {
            "Value": "#757575"
          }
        },
        "grey_neutral/700": {
          "type": "COLOR",
          "values": {
            "Value": "#666666"
          }
        },
        "grey_neutral/800": {
          "type": "COLOR",
          "values": {
            "Value": "#444444"
          }
        },
        "grey_neutral/900": {
          "type": "COLOR",
          "values": {
            "Value": "#0f0e0d"
          }
        },
        "pink/50": {
          "type": "COLOR",
          "values": {
            "Value": "#fff0f6"
          }
        },
        "pink/100": {
          "type": "COLOR",
          "values": {
            "Value": "#ffd6ea"
          }
        },
        "pink/200": {
          "type": "COLOR",
          "values": {
            "Value": "#ffa3cc"
          }
        },
        "pink/300": {
          "type": "COLOR",
          "values": {
            "Value": "#ff6aaf"
          }
        },
        "pink/400": {
          "type": "COLOR",
          "values": {
            "Value": "#ff3d97"
          }
        },
        "pink/500": {
          "type": "COLOR",
          "values": {
            "Value": "#ff1a87"
          }
        },
        "blue/50": {
          "type": "COLOR",
          "values": {
            "Value": "#eef4ff"
          }
        },
        "blue/100": {
          "type": "COLOR",
          "values": {
            "Value": "#dce9ff"
          }
        },
        "blue/200": {
          "type": "COLOR",
          "values": {
            "Value": "#b7d0ff"
          }
        },
        "yellow/50": {
          "type": "COLOR",
          "values": {
            "Value": "#fff8e8"
          }
        },
        "yellow/100": {
          "type": "COLOR",
          "values": {
            "Value": "#fff0cf"
          }
        },
        "yellow/200": {
          "type": "COLOR",
          "values": {
            "Value": "#f0d79a"
          }
        },
        "yellow/300": {
          "type": "COLOR",
          "values": {
            "Value": "#dfbd6b"
          }
        },
        "yellow/400": {
          "type": "COLOR",
          "values": {
            "Value": "#cda347"
          }
        },
        "yellow/500": {
          "type": "COLOR",
          "values": {
            "Value": "#bb8b2e"
          }
        },
        "yellow/600": {
          "type": "COLOR",
          "values": {
            "Value": "#b07f25"
          }
        },
        "yellow/700": {
          "type": "COLOR",
          "values": {
            "Value": "#976c1f"
          }
        },
        "yellow/800": {
          "type": "COLOR",
          "values": {
            "Value": "#7a5514"
          }
        },
        "yellow/900": {
          "type": "COLOR",
          "values": {
            "Value": "#5e4210"
          }
        },
        "green/50": {
          "type": "COLOR",
          "values": {
            "Value": "#edf8ee"
          }
        },
        "green/100": {
          "type": "COLOR",
          "values": {
            "Value": "#d6eed8"
          }
        },
        "green/200": {
          "type": "COLOR",
          "values": {
            "Value": "#bfe3c6"
          }
        },
        "green/300": {
          "type": "COLOR",
          "values": {
            "Value": "#8ac89a"
          }
        },
        "green/400": {
          "type": "COLOR",
          "values": {
            "Value": "#5daa71"
          }
        },
        "green/500": {
          "type": "COLOR",
          "values": {
            "Value": "#43945c"
          }
        },
        "green/600": {
          "type": "COLOR",
          "values": {
            "Value": "#2f7f49"
          }
        },
        "green/700": {
          "type": "COLOR",
          "values": {
            "Value": "#2a6d3f"
          }
        },
        "green/800": {
          "type": "COLOR",
          "values": {
            "Value": "#245f36"
          }
        },
        "red/50": {
          "type": "COLOR",
          "values": {
            "Value": "#fff0ee"
          }
        },
        "red/100": {
          "type": "COLOR",
          "values": {
            "Value": "#fdd3ce"
          }
        },
        "red/200": {
          "type": "COLOR",
          "values": {
            "Value": "#f1b7ae"
          }
        },
        "red/300": {
          "type": "COLOR",
          "values": {
            "Value": "#e89489"
          }
        },
        "red/400": {
          "type": "COLOR",
          "values": {
            "Value": "#de7165"
          }
        },
        "red/500": {
          "type": "COLOR",
          "values": {
            "Value": "#d4544b"
          }
        },
        "red/600": {
          "type": "COLOR",
          "values": {
            "Value": "#be3f31"
          }
        },
        "red/700": {
          "type": "COLOR",
          "values": {
            "Value": "#a3342b"
          }
        },
        "red/800": {
          "type": "COLOR",
          "values": {
            "Value": "#8a2b20"
          }
        },
        "red/900": {
          "type": "COLOR",
          "values": {
            "Value": "#6a2118"
          }
        },
        "pistachio_sand/50": {
          "type": "COLOR",
          "values": {
            "Value": "#f3f7ec"
          }
        },
        "pistachio_sand/100": {
          "type": "COLOR",
          "values": {
            "Value": "#e8efda"
          }
        },
        "pistachio_sand/200": {
          "type": "COLOR",
          "values": {
            "Value": "#cedfa9"
          }
        },
        "pistachio_sand/300": {
          "type": "COLOR",
          "values": {
            "Value": "#a9c46a"
          }
        },
        "pistachio_sand/400": {
          "type": "COLOR",
          "values": {
            "Value": "#7d9f3e"
          }
        },
        "pistachio_sand/500": {
          "type": "COLOR",
          "values": {
            "Value": "#5e7d24"
          }
        },
        "lavender_mist/50": {
          "type": "COLOR",
          "values": {
            "Value": "#f6f1f8"
          }
        },
        "lavender_mist/100": {
          "type": "COLOR",
          "values": {
            "Value": "#eee4f1"
          }
        },
        "lavender_mist/200": {
          "type": "COLOR",
          "values": {
            "Value": "#d6bce4"
          }
        },
        "lavender_mist/300": {
          "type": "COLOR",
          "values": {
            "Value": "#b58ad2"
          }
        },
        "lavender_mist/400": {
          "type": "COLOR",
          "values": {
            "Value": "#8c5bbb"
          }
        },
        "lavender_mist/500": {
          "type": "COLOR",
          "values": {
            "Value": "#6b3d97"
          }
        },
        "soft_butter/50": {
          "type": "COLOR",
          "values": {
            "Value": "#fffbe8"
          }
        },
        "soft_butter/100": {
          "type": "COLOR",
          "values": {
            "Value": "#fdf5d0"
          }
        },
        "soft_butter/200": {
          "type": "COLOR",
          "values": {
            "Value": "#f3de8a"
          }
        },
        "soft_butter/300": {
          "type": "COLOR",
          "values": {
            "Value": "#ddba3e"
          }
        },
        "soft_butter/400": {
          "type": "COLOR",
          "values": {
            "Value": "#b88e12"
          }
        },
        "soft_butter/500": {
          "type": "COLOR",
          "values": {
            "Value": "#8c6900"
          }
        },
        "blue/300": {
          "type": "COLOR",
          "values": {
            "Value": "#7ba8f7"
          }
        },
        "blue/400": {
          "type": "COLOR",
          "values": {
            "Value": "#578cef"
          }
        },
        "blue/500": {
          "type": "COLOR",
          "values": {
            "Value": "#3f7dee"
          }
        },
        "blue/600": {
          "type": "COLOR",
          "values": {
            "Value": "#2f6fea"
          }
        },
        "blue/700": {
          "type": "COLOR",
          "values": {
            "Value": "#285fcb"
          }
        },
        "blue/800": {
          "type": "COLOR",
          "values": {
            "Value": "#214ead"
          }
        },
        "blue/900": {
          "type": "COLOR",
          "values": {
            "Value": "#1a3d87"
          }
        },
        "green/900": {
          "type": "COLOR",
          "values": {
            "Value": "#1d4a2a"
          }
        },
        "pink/600": {
          "type": "COLOR",
          "values": {
            "Value": "#d4006a"
          }
        },
        "pink/700": {
          "type": "COLOR",
          "values": {
            "Value": "#a80054"
          }
        },
        "pink/800": {
          "type": "COLOR",
          "values": {
            "Value": "#7c003e"
          }
        },
        "pink/900": {
          "type": "COLOR",
          "values": {
            "Value": "#50002a"
          }
        }
      }
    },
    "spacing": {
      "modes": [
        "Value"
      ],
      "variables": {
        "none": {
          "type": "FLOAT",
          "values": {
            "Value": 0
          }
        },
        "3xs": {
          "type": "FLOAT",
          "values": {
            "Value": 2
          }
        },
        "2xs": {
          "type": "FLOAT",
          "values": {
            "Value": 4
          }
        },
        "xs": {
          "type": "FLOAT",
          "values": {
            "Value": 8
          }
        },
        "s": {
          "type": "FLOAT",
          "values": {
            "Value": 12
          }
        },
        "m": {
          "type": "FLOAT",
          "values": {
            "Value": 16
          }
        },
        "l": {
          "type": "FLOAT",
          "values": {
            "Value": 20
          }
        },
        "xl": {
          "type": "FLOAT",
          "values": {
            "Value": 24
          }
        },
        "2xl": {
          "type": "FLOAT",
          "values": {
            "Value": 32
          }
        },
        "3xl": {
          "type": "FLOAT",
          "values": {
            "Value": 40
          }
        },
        "4xl": {
          "type": "FLOAT",
          "values": {
            "Value": 48
          }
        },
        "5xl": {
          "type": "FLOAT",
          "values": {
            "Value": 64
          }
        },
        "6xl": {
          "type": "FLOAT",
          "values": {
            "Value": 80
          }
        },
        "7xl": {
          "type": "FLOAT",
          "values": {
            "Value": 96
          }
        },
        "8xl": {
          "type": "FLOAT",
          "values": {
            "Value": 128
          }
        }
      }
    },
    "radius": {
      "modes": [
        "Value"
      ],
      "variables": {
        "none": {
          "type": "FLOAT",
          "values": {
            "Value": 0
          }
        },
        "xs": {
          "type": "FLOAT",
          "values": {
            "Value": 4
          }
        },
        "s": {
          "type": "FLOAT",
          "values": {
            "Value": 8
          }
        },
        "m": {
          "type": "FLOAT",
          "values": {
            "Value": 12
          }
        },
        "l": {
          "type": "FLOAT",
          "values": {
            "Value": 16
          }
        },
        "xl": {
          "type": "FLOAT",
          "values": {
            "Value": 20
          }
        },
        "2xl": {
          "type": "FLOAT",
          "values": {
            "Value": 24
          }
        },
        "3xl": {
          "type": "FLOAT",
          "values": {
            "Value": 32
          }
        },
        "full": {
          "type": "FLOAT",
          "values": {
            "Value": 999
          }
        }
      }
    },
    "typography": {
      "modes": [
        "value"
      ],
      "variables": {
        "font_family/primary": {
          "type": "STRING",
          "values": {
            "value": "Google Sans Flex"
          }
        },
        "font_weight/regular": {
          "type": "STRING",
          "values": {
            "value": "Regular"
          }
        },
        "font_weight/medium": {
          "type": "STRING",
          "values": {
            "value": "Medium"
          }
        },
        "font_weight/semibold": {
          "type": "STRING",
          "values": {
            "value": "SemiBold"
          }
        },
        "font_weight/bold": {
          "type": "STRING",
          "values": {
            "value": "Bold"
          }
        },
        "font_size/xs": {
          "type": "FLOAT",
          "values": {
            "value": 10
          }
        },
        "font_size/s": {
          "type": "FLOAT",
          "values": {
            "value": 12
          }
        },
        "font_size/m": {
          "type": "FLOAT",
          "values": {
            "value": 14
          }
        },
        "font_size/lg": {
          "type": "FLOAT",
          "values": {
            "value": 16
          }
        },
        "font_size/xl": {
          "type": "FLOAT",
          "values": {
            "value": 18
          }
        },
        "font_size/2xl": {
          "type": "FLOAT",
          "values": {
            "value": 20
          }
        },
        "font_size/3xl": {
          "type": "FLOAT",
          "values": {
            "value": 24
          }
        },
        "font_size/4xl": {
          "type": "FLOAT",
          "values": {
            "value": 28
          }
        },
        "font_size/5xl": {
          "type": "FLOAT",
          "values": {
            "value": 32
          }
        },
        "font_size/6xl": {
          "type": "FLOAT",
          "values": {
            "value": 36
          }
        },
        "font_size/7xl": {
          "type": "FLOAT",
          "values": {
            "value": 40
          }
        },
        "font_size/8xl": {
          "type": "FLOAT",
          "values": {
            "value": 48
          }
        },
        "font_size/9xl": {
          "type": "FLOAT",
          "values": {
            "value": 56
          }
        },
        "font_height/xs": {
          "type": "FLOAT",
          "values": {
            "value": 12
          }
        },
        "font_height/s": {
          "type": "FLOAT",
          "values": {
            "value": 16
          }
        },
        "font_height/m": {
          "type": "FLOAT",
          "values": {
            "value": 20
          }
        },
        "font_height/l": {
          "type": "FLOAT",
          "values": {
            "value": 22
          }
        },
        "font_height/xl": {
          "type": "FLOAT",
          "values": {
            "value": 26
          }
        },
        "font_height/2xl": {
          "type": "FLOAT",
          "values": {
            "value": 28
          }
        },
        "font_height/3xl": {
          "type": "FLOAT",
          "values": {
            "value": 32
          }
        },
        "font_height/4xl": {
          "type": "FLOAT",
          "values": {
            "value": 36
          }
        },
        "font_height/5xl": {
          "type": "FLOAT",
          "values": {
            "value": 40
          }
        },
        "font_height/6xl": {
          "type": "FLOAT",
          "values": {
            "value": 44
          }
        },
        "font_height/7xl": {
          "type": "FLOAT",
          "values": {
            "value": 48
          }
        },
        "font_height/8xl": {
          "type": "FLOAT",
          "values": {
            "value": 56
          }
        },
        "font_height/9xl": {
          "type": "FLOAT",
          "values": {
            "value": 64
          }
        },
        "letter_spacing/none": {
          "type": "FLOAT",
          "values": {
            "value": 0
          }
        },
        "letter_spacing/s": {
          "type": "FLOAT",
          "values": {
            "value": 0.10000000149011612
          }
        },
        "letter_spacing/md": {
          "type": "FLOAT",
          "values": {
            "value": 0.20000000298023224
          }
        }
      }
    }
  }
}
```
