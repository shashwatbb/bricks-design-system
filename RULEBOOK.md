# Design System Foundation Rulebook

**Confidential — Internal Use Only.** Internal design standard for this organization's design team. Not for public distribution or use outside the organization.

This document is the universal rulebook for every component built in this design system. It governs **how** components are built, not **what** any single component is. Attach it to any prompt used to create or document a component; the prompt supplies the component-specific brief, this document supplies the constraints that must hold regardless of author.

**Key terms** (RFC 2119 convention):
- **Must / Must Not** — non-negotiable
- **Should / Should Not** — strong defaults requiring a documented reason to deviate
- **May** — permitted option

Design tokens (color, typography, spacing, radius, elevation) are pre-established elsewhere. This document does not define tokens — it defines how components must consume them.

---

## Working Context

- This design system is built and maintained inside the [New Bricks Design System](https://www.figma.com/design/ZGl9LhEtqlE9JiMKBuYrdT/New-Bricks-Design-System?node-id=1008-39&p=f&t=GgBcRnqitUFqhtaJ-11) Figma file. This file already contains the established design tokens, variables, styles, and existing components.
- Icons are maintained separately in the [Iconography (Bricks) library](https://www.figma.com/design/Rq1j8iqvbJBYRb52tdpgFg/Iconography--Bricks-?node-id=7484-1322&p=f&t=hSKbBTJmEtpb5sYj-11).
- Design tokens, variables, styles, and icons **Must Not** be recreated or modified unless explicitly instructed — always reference the existing definitions in the files above.
- Component briefs **Must** be accompanied by the current Design System token export (JSON, covering color, spacing, radius, and typography) provided by the designer. Claude **Must** read tokens from this export rather than querying the Figma file live — live access to this file has proven unreliable for this purpose.

---

## 1. Design Principles

- Components **Must** be designed for composition over duplication: extend, compose, or add a variant to an existing component before creating a new one.
- Components **Must** be predictable: their name and exposed properties **Must** fully describe their behavior without requiring inspection of internal layers.
- Components **Must** be built to scale: capable of absorbing reasonable future variation without structural rebuild.
- Simplicity **Must** take precedence over flexibility. A component **Should** do one job well rather than many jobs adequately.
- Consistency **Must** outrank individual preference. Deviation from this rulebook is only permitted with a documented, reviewed exception.

---

## 2. Information Expected in the Component Brief

Before creating a component, Claude **Must** ensure it has the minimum information required to generate a consistent, reusable Design System component. If any of the following is missing from the designer's request, Claude **Must** ask for clarification before proceeding:

- Component name
- Intended use
- Whether device variants are required
- Supported sizes or size constraints
- Any optional structural elements the component should support (e.g. icon, avatar, dismiss control)
- Any product-specific constraints or business rules

Claude **Should Not** ask for information that can reasonably be inferred from this rulebook. Component anatomy, properties, variants, states, documentation structure, naming conventions, and implementation details **Should** be determined by Claude using the rules defined elsewhere in this document. Claude **Must** only raise follow-up questions when the missing information would materially affect the resulting component.

---

## 3. Rulebook Conflicts & Design System Gaps

- If a designer's request conflicts with this rulebook, Claude **Must** identify the conflict and explain why the request cannot be implemented under the current Design System standards.
- Claude **Must Not** proceed with component creation, or implement a solution that violates this rulebook.
- If a required Design System variable, style, or token does not exist, Claude **Must** identify it as a Design System gap and explain why the requirement cannot be implemented using the current Design System foundations.
- Claude **Must Not** create new variables, styles, or tokens unless explicitly instructed.

---

## 4. Component Creation Workflow

1. Search the Design System for an existing component that already meets the need.
2. Extend or compose existing components where appropriate, rather than building new.
3. Create a new component only when a reusable component does not already exist.
4. Define the component anatomy (§5) before applying visual styling.
5. Bind all visual properties to the established Design System variables, styles, and tokens.
6. Assign property types using the Property Decision Framework (§7).
7. Build the required variants and states (§8).
8. Complete documentation (§13) and the review checklist (§15).

---

## 5. Component Anatomy

- Every component **Must** be decomposed into a clear hierarchy before visual work begins: Container → Content areas → Support elements.
- Every layer **Must** be named for the role it plays (see §11) — Figma default names **Must Not** persist.
- Every component **Must** be built with Auto Layout. Absolute positioning **Must Not** be used except where structurally unavoidable (e.g. an overlay), and such exceptions **Must** be documented.
- Nesting **Must** reflect the anatomy hierarchy; multiple roles **Must Not** be flattened into a single frame.
- Padding, gap, and spacing **Must** be set via Auto Layout properties bound to spacing tokens — manually entered values **Must Not** be used.

---

## 6. Device & Responsive Handling

- Components are device agnostic by default.
- A Device property (`Device=mobile`, `Device=desktop`) **Must** only be created when it is explicitly requested in the component brief by the designer.
- When a mobile variant is requested, it **Must** be designed and validated using a 360px frame width as the standard mobile working constraint — this is a Design System implementation standard.
- Desktop variants **Must** follow the layout specified in the component brief.
- Claude **Must** implement only the device variants explicitly requested. Claude **Must Not** introduce additional device variants or responsive behaviors that were not explicitly requested.

---

## 7. Property Decision Framework

Assign property types using this decision order:

1. Does the change require substituting a different nested component instance (icon, avatar, embedded component)? → **Instance swap**.
2. Is the element's only behavior presence or absence, with no accompanying style change? → **Boolean**.
3. Does the change alter visual treatment, structure, or layout (size, emphasis, state)? → **Variant**.
4. Is the change limited to editable copy only? → **Text property**.

Rules:

- Every property **Must** map to exactly one of these four types.
- If more than one type appears applicable, follow the decision order above — the first applicable type takes precedence.
- A property **Must Not** be modeled as a variant if it can be fully expressed as a boolean.
- Instance swap **Must** be used instead of duplicating layer structures per possible child component.
- Text properties **Must Not** control visibility or structure — that responsibility belongs to booleans or variants.

---

## 8. Variant Philosophy

- A property **Should** become a variant only if its values are finite, known in advance, and mutually exclusive (size, emphasis, state).
- A property **Must Not** become a variant if it can instead be expressed as a boolean or instance swap.
- Variants **Must Not** be created for: copy; spacing; alignment; product or page context; or one-off product requirements. These **Must** instead be handled through composition or within the consuming product.
- Every new variant dimension **Must** be justified against a real, existing use case, not a hypothetical one.
- Variant matrices **Should** be audited before finalization. As a guideline, more than 2–3 combined variant dimensions **Should** trigger reconsideration — split into multiple components or restructure using instance swaps instead of continuing to expand the matrix.
- When multiple implementation approaches are possible, the solution that introduces the fewest variants while maintaining flexibility and reusability **Should** be preferred.

---

## 9. Figma Standards

- Auto Layout **Must** be used for all components; nested Auto Layout **Must** mirror the anatomy hierarchy (§5).
- Resizing **Must** be set intentionally per layer: Hug for content-driven sizing, Fill for container-driven sizing, Fixed only for a genuinely constant dimension.
- Constraints **Must** be set correctly for any layer outside Auto Layout flow so behavior remains predictable under resize.
- Every fill, stroke, text style, spacing, radius, and effect **Must** be bound to an established variable/token. Detached or raw values **Must Not** exist in a published component.
- Local variables, styles, or tokens **Must Not** be created inside component pages. Components **Must** always reference the existing Design System variables, styles, and tokens.
- Icons **Must** always be used via instance swap from the shared [Iconography library](https://www.figma.com/design/Rq1j8iqvbJBYRb52tdpgFg/Iconography--Bricks-?node-id=7484-1322&p=f&t=hSKbBTJmEtpb5sYj-11). Icon vectors **Must Not** be recreated, detached, duplicated, or imported directly into a component.
- Components **Must** be composed from existing components/instances wherever a suitable one exists, rather than rebuilt from scratch.
- Nested components **Must** remain live instances — flattening or detaching nested instances is not permitted.
- Instance safety: overrides **Must** be limited to exposed properties. If achieving a common need requires detaching an instance, that need **Must** instead be added as a property.
- Existing components **Must Not** be detached to achieve new behavior. If a recurring requirement cannot be met using the existing component structure, the component **Should** be evolved through the Design System rather than by creating detached copies.
- Detached layers, styles, or components **Must Not** exist anywhere in the published library.

---

## 10. Existing Design System Component Protection

- Existing Design System components **Must Not** be modified without explicit approval from the designer.
- If the requested component requires a change to an existing Design System component — a new property, variant, state, slot, behavior, or structural modification — Claude **Must** identify the required change and explain why the existing component would need to evolve.
- Claude **Must** stop and ask the designer for confirmation before making any change to an existing component.
- Claude **Must Not** modify an existing component solely to satisfy a new use case.
- If approval is not given, Claude **Should** propose an alternative solution that does not modify the existing component.

This protects the integrity, consistency, and backward compatibility of the shared Design System.

---

## 11. Naming Conventions

A single naming convention applies across the Design System. Naming **Must Not** vary by property type — Boolean, Variant, Text, and Instance Swap properties all follow the same convention below.

| Entity | Convention | Example |
|---|---|---|
| Tokens, Variables, Styles | snake_case | `color_brand_600`, `space_16` |
| Components | PascalCase, singular noun, named for function not appearance | `Button`, `BottomSheet`, `TextField` |
| Internal Layers | Title Case, named for role | `Container`, `Content`, `Leading Icon`, `Trailing Icon`, `Helper Text` |
| Component Properties | Title Case, regardless of property type | `State`, `Size`, `Leading Icon`, `Trailing Icon`, `Show Icon`, `Helper Text` |
| Property Values | lowercase (abbreviated form allowed where full value hurts readability) | `default`, `hover`, `disabled`, `small`/`s`, `medium`/`m`, `large`/`l` |

- Figma default names (`Frame 12`, `Rectangle 3`) **Must Not** persist.
- Top-level frames **Must** describe their content or purpose, not remain unnamed defaults.
- Documentation frames **Must** match their component's name exactly, with a consistent identifying prefix/suffix so they are locatable at a glance.

---

## 12. Accessibility Baseline

Universal expectations, applicable regardless of component type:

- Every interactive state **Must** have a visible focus indicator that does not rely on color alone.
- Any interaction available via pointer **Must** also be operable via keyboard.
- State or meaning (error, success, required, etc.) **Must Not** be conveyed by color alone — pair with icon, text, or shape.
- Color values **Must** come only from the established token set; token-defined pairings **Must Not** be manually overridden.
- Component-specific requirements (minimum tap target, minimum text size, ARIA role, specific keyboard patterns) belong in that component's own documentation (§13), not in this baseline.

---

## 13. Documentation Requirements

Every component's documentation **Must** include:

- **Overview** — what the component is, in one or two sentences.
- **Purpose** — the problem it solves.
- **When to use** — valid use cases.
- **When not to use** — cases where a different component or pattern applies.
- **Anatomy** — labeled diagram of all parts.
- **Properties** — full table of name, type (§7), accepted values, default.
- **Variants** — visual matrix across all variant dimensions.
- **States** — every supported interaction state, shown visually.
- **Behaviors** — interaction, motion, or responsive behavior not evident from static properties.
- **Accessibility** — component-specific requirements per §12.
- **Specs** — redline measurements (padding, gap, sizing, radius) referencing token names, not raw values, plus resizing behavior and constraints wherever applicable.
- **Do's and Don'ts** — minimum two correct and two incorrect usage examples.

---

## 14. Page & File Organization

- New component pages **Must** be created inside the [New Bricks Design System](https://www.figma.com/design/ZGl9LhEtqlE9JiMKBuYrdT/New-Bricks-Design-System?node-id=1008-39&p=f&t=GgBcRnqitUFqhtaJ-11) file — the same file where tokens, variables, and styles live. A separate file **Must Not** be created for component work.
- Each component **Must** have its own dedicated page within that file, created as soon as work begins on it — the page name **Must** match the component name (§11) so it's locatable regardless of who created it.
- Revisions or follow-up changes **Must** happen on that same page — a new page or duplicate copy **Must Not** be created to handle revisions.

---

## 15. Review Checklist

Before marking a component system-ready, confirm:

- [ ] No equivalent component or variant already exists.
- [ ] Every value is bound to an established token — no raw or detached values.
- [ ] Layers, frames, and documentation follow §11 naming conventions.
- [ ] Every property is typed correctly per §7.
- [ ] No unnecessary variants or properties have been introduced.
- [ ] Device treatment (§6) matches exactly what was requested in the component brief — no unrequested device variants were introduced.
- [ ] Variant matrix has been audited per §8 — no unjustified dimensions, and no variants created for copy, spacing, alignment, or product/page context.
- [ ] All applicable states are built; no inapplicable states forced in.
- [ ] Component is composed from existing components/instances wherever possible.
- [ ] Existing Design System components have not been modified without explicit designer approval.
- [ ] Icons are sourced from the Iconography library via instance swap.
- [ ] No local variables, styles, or tokens were created inside the component page.
- [ ] No detached layers, styles, or overrides exist.
- [ ] Any rulebook conflicts or Design System gaps (§3) were surfaced rather than worked around.
- [ ] Accessibility baseline (§12) is met.
- [ ] Documentation (§13) is complete.
- [ ] Component page follows §14 organization.
