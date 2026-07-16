// Single source of truth: the byte-verified token export in tokens/v1.2.0.
// Never add hand-made parallel token files here (RULES.md, docs site sync rules).
import colorPrimitives from '../../../tokens/v1.2.0/color_primitives.Value.tokens.json'
import colorTokens from '../../../tokens/v1.2.0/color_tokens.Value.tokens.json'
import spacing from '../../../tokens/v1.2.0/spacing.Value.tokens.json'
import radius from '../../../tokens/v1.2.0/radius.Value.tokens.json'
import typography from '../../../tokens/v1.2.0/typography.value.tokens.json'
import textStyles from '../../../tokens/v1.2.0/text.styles.tokens.json'

// Flatten one W3C token group ({name: {$type, $value}} or nested) into rows.
function flattenGroup(group, prefix = '') {
  const rows = []
  for (const [key, node] of Object.entries(group)) {
    if (node && typeof node === 'object' && '$value' in node) {
      rows.push({ name: prefix ? `${prefix}/${key}` : key, type: node.$type, value: node.$value, description: node.$description })
    } else if (node && typeof node === 'object') {
      rows.push(...flattenGroup(node, prefix ? `${prefix}/${key}` : key))
    }
  }
  return rows
}

// Resolve a "{family.step}" reference against color primitives.
export function resolveRef(ref) {
  const m = /^\{(.+)\}$/.exec(ref)
  if (!m) return ref
  const path = m[1].split('.')
  let node = colorPrimitives
  for (const p of path) node = node?.[p]
  return node?.$value ?? ref
}

// Color primitives grouped by family, steps in file order.
export const primitiveFamilies = Object.entries(colorPrimitives).map(([family, steps]) => ({
  family,
  steps: Object.entries(steps).map(([step, node]) => ({ step, hex: node.$value })),
}))

// Semantic color tokens with their reference and resolved hex.
export const semanticTokens = flattenGroup(colorTokens).map((t) => ({
  ...t,
  resolvedHex: resolveRef(t.value),
}))

export const spacingScale = flattenGroup(spacing)
export const radiusScale = flattenGroup(radius)
export const typographyVariables = flattenGroup(typography)

// Text styles: {Web: {Display: {large_bold: {...}}}, Mobile: {...}, CTA: {...}}
// CTA holds styles directly (no category level); those collapse into one group.
export function textStyleGroups() {
  const groups = []
  for (const [platform, categories] of Object.entries(textStyles)) {
    if (categories && typeof categories === 'object' && '$type' in categories) continue
    const directStyles = []
    for (const [category, styles] of Object.entries(categories)) {
      if (styles && '$value' in styles) {
        directStyles.push({ name: category, ...styles.$value })
        continue
      }
      groups.push({
        platform,
        category,
        styles: Object.entries(styles).map(([name, node]) => ({ name, ...node.$value })),
      })
    }
    if (directStyles.length > 0) {
      groups.push({ platform, category: platform, styles: directStyles })
    }
  }
  return groups
}

// Resolve a "{font_size.3xl}" style reference against typography variables.
export function resolveTypeRef(ref) {
  const m = /^\{(.+)\}$/.exec(ref)
  if (!m) return ref
  const path = m[1].split('.')
  let node = typography
  for (const p of path) node = node?.[p]
  return node?.$value ?? ref
}
