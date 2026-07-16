# Structure: Documentation

- **Design system — Documentation** · `FRAME` · 780×2157 · vertical stack, gap 40px, padding 44px · 14 children
  - **Frame** · `FRAME` · 692×127 · vertical stack, gap 10px, padding 24px · 2 children
    - **Design system** · `TEXT` · 145×24 · “Design system”
    - **This document defines the structure, ownership, hierarchy, and naming standards of the design system. It serves as the source of truth for designers and engineers to understand where assets should be created, maintained, and consumed.** · `TEXT` · 644×45 · “This document defines the structure, ownership, hierarchy, and naming standards ”
  - **Frame** · `FRAME` · 692×219 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×219 · vertical stack, gap 4px · 2 children
      - **Naming Convention** · `TEXT` · 135×17 · “Naming Convention”
      - **All design system assets must follow the snake_case naming convention. This applies to foundations, variables, tokens, styles, components, variants, and documentation references. Maintaining a single naming convention across design and engineering ensures consistency and reduces implementation discrepancies. Examples color_primitive semantic_surface font_size** · `TEXT` · 692×198 · “All design system assets must follow the snake_case naming convention. This appl”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×112 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×112 · vertical stack, gap 4px · 2 children
      - **Architecture** · `TEXT` · 87×17 · “Architecture”
      - **The design system is organized into three layers: Foundations Core components  Pod design kits** · `TEXT` · 692×91 · “The design system is organized into three layers:

Foundations

Core components ”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×281 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×281 · vertical stack, gap 4px · 2 children
      - **Foundations** · `TEXT` · 86×17 · “Foundations”
      - **Foundations contain the fundamental building blocks that establish the visual language of the product. This layer includes: Color color_primitives color_tokens Typography typography_variables typography_styles spacing radius effects Note:   Color primitives contain the complete color palette available within the system. Color tokens define semantic usage and are mapped to primitives. Typography variables define font properties, while typography styles are created using those variables. Foundations are centrally managed and act as the source of truth for all visual properties used across components and products.** · `TEXT` · 692×260 · “Foundations contain the fundamental building blocks that establish the visual la”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×190 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×190 · vertical stack, gap 4px · 2 children
      - **Core Components** · `TEXT` · 125×17 · “Core Components”
      - **Core components are reusable UI building blocks intended for usage across multiple pods and products. This layer includes: Atoms - Atoms represent the smallest functional UI elements such as button, input, checkbox, and radio_button. Molecules - Molecules are combinations of atoms that form reusable interaction patterns such as modal, bottom_sheet, dropdown, and toast. Note:   Components should be added to the core design system only when they are generic, reusable, and have clear cross pod applicability. Core components are centrally owned and maintained.** · `TEXT` · 692×169 · “Core components are reusable UI building blocks intended for usage across multip”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×216 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×216 · vertical stack, gap 4px · 2 children
      - **Pod Design Kits** · `TEXT` · 108×17 · “Pod Design Kits”
      - **Each pod maintains its own design kit containing domain specific patterns and components. This layer includes: Pod specific molecules Organisms Workflow components Note:   Pod design kits allow teams to create and evolve business specific experiences without introducing unnecessary complexity into the core design system. Organisms do not belong to the central design system and should be maintained within the relevant pod design kit. Any component that is tied to a specific workflow, business logic, or product area should reside within the owning pod. Pod design kits are owned and maintained by their respective teams.** · `TEXT` · 692×195 · “Each pod maintains its own design kit containing domain specific patterns and co”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×143 · vertical stack, gap 14px · 2 children
    - **Frame** · `FRAME` · 121×17 · vertical stack, gap 4px · 1 children
      - **Ownership Model** · `TEXT` · 121×17 · “Ownership Model”
    - **Frame** · `FRAME` · 692×112 · vertical stack · 4 children
      - **Frame** · `FRAME` · 692×31 · horizontal row, padding 9/14/9/14px · 2 children
        - **Layer** · `TEXT` · 220×13 · “Layer”
        - **Ownership** · `TEXT` · 220×13 · “Ownership”
      - **Frame** · `FRAME` · 692×27 · horizontal row, padding 7/14/7/14px · 2 children
        - **Foundations** · `TEXT` · 220×13 · “Foundations”
        - **Central design system** · `TEXT` · 220×13 · “Central design system”
      - **Frame** · `FRAME` · 692×27 · horizontal row, padding 7/14/7/14px · 2 children
        - **Core Components** · `TEXT` · 220×13 · “Core Components”
        - **Central design system** · `TEXT` · 220×13 · “Central design system”
      - **Frame** · `FRAME` · 692×27 · horizontal row, padding 7/14/7/14px · 2 children
        - **Pod Design Kits** · `TEXT` · 220×13 · “Pod Design Kits”
        - **Respective pod teams** · `TEXT` · 220×13 · “Respective pod teams”
  - **Rectangle** · `RECTANGLE` · 692×1
  - **Frame** · `FRAME` · 692×255 · vertical stack, gap 14px · 1 children
    - **Frame** · `FRAME` · 692×255 · vertical stack, gap 4px · 2 children
      - **Token Export** · `TEXT` · 91×17 · “Token Export”
      - **Design system variables and styles are exported as JSON using the “Design Token Manager” plugin and shared with engineering for implementation. File Naming Convention:  Exported token packages should follow the naming convention: bricks_design_system_tokens_v<major>.<minor>.<patch> Example: bricks_design_system_tokens_v1.0.0 Versioning Guidelines Major version should be updated when there is a significant change to the design system structure, architecture, or overall framework. Minor version should be updated when new variables, styles, or components are introduced. Patch version should be updated when existing variables, styles, or components are refined, updated, or corrected. The version number should be updated whenever a new token package is shared with engineering.** · `TEXT` · 692×234 · “Design system variables and styles are exported as JSON using the “Design Token ”