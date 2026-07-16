// REGISTRY.md at the repo root is the canonical component inventory.
// The sidebar and component pages render from it: only status `production`
// components ever appear on the public site.
import registryRaw from '../../../REGISTRY.md?raw'

function parseRegistryTable(md) {
  const rows = []
  const lines = md.split('\n')
  let inTable = false
  for (const line of lines) {
    const cells = line.split('|').map((c) => c.trim())
    // A table row looks like: | Button | production | Buttons | ... |
    if (cells.length < 7) {
      inTable = false
      continue
    }
    if (cells[1] === 'Component') {
      inTable = true
      continue
    }
    if (!inTable || cells[1].startsWith('---')) continue
    rows.push({
      name: cells[1],
      status: cells[2],
      figmaPage: cells[3],
      axes: cells[4],
      variants: Number(cells[5]) || 0,
      docs: cells[6],
    })
  }
  return rows
}

export const registry = parseRegistryTable(registryRaw)

export const productionComponents = registry.filter((r) => r.status === 'production')
