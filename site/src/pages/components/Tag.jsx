import React from 'react';

const TagPage = () => (
  <div className="doc-section component-doc">
    <h1>Tag</h1>
    <p className="lead-text">
      Static, read only label component. Categorizes, classifies, or flags the status of an
      item at a glance. Non interactive.
    </p>

    <h2>Overview</h2>
    <p>
      Tag renders a short label in a colored pill. It carries meaning through its color
      variant and label text together, never color alone.
    </p>

    <h2>Purpose</h2>
    <p>
      Gives lists, cards, and tables a compact way to show category or status without
      adding interactive weight.
    </p>

    <h2>When to use</h2>
    <ul>
      <li>Categorizing content by topic, type, or attribute.</li>
      <li>Communicating a status at a glance, such as Verified, Sold, or Pending.</li>
      <li>Labeling grouped or filtered content in a list, card, or table.</li>
    </ul>

    <h2>When not to use</h2>
    <ul>
      <li>When the element must be removable or selectable. That is an interactive Chip, a separate component not built yet.</li>
      <li>When the label should trigger navigation or an action. Use a Button or Link.</li>
      <li>For copy longer than a couple of words.</li>
    </ul>

    <h2>Anatomy</h2>
    <p>
      Container (Auto Layout, horizontal, hug width by fixed height, radius full, 1px border),
      then Leading Icon (instance swap, optional), Label (text), Trailing Icon (instance swap,
      optional). Icons come from the Iconography (Bricks) library by instance swap.
    </p>

    <h2>Properties</h2>
    <div className="typo-table-container">
      <table className="typo-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="token-tag">Color</code></td>
            <td>Variant</td>
            <td>neutral, brand, info, success, warning, danger, accentPistachio, accentLavender, accentButter, accentGrey</td>
            <td>neutral</td>
          </tr>
          <tr>
            <td><code className="token-tag">Size</code></td>
            <td>Variant</td>
            <td>s, m, l</td>
            <td>m</td>
          </tr>
          <tr>
            <td><code className="token-tag">Show Leading Icon</code></td>
            <td>Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code className="token-tag">Leading Icon</code></td>
            <td>Instance swap</td>
            <td>any Iconography component</td>
            <td>none</td>
          </tr>
          <tr>
            <td><code className="token-tag">Show Trailing Icon</code></td>
            <td>Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code className="token-tag">Trailing Icon</code></td>
            <td>Instance swap</td>
            <td>any Iconography component</td>
            <td>Info glyph</td>
          </tr>
          <tr>
            <td><code className="token-tag">Label</code></td>
            <td>Text</td>
            <td>free text, one to two words recommended</td>
            <td>Label</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Variants</h2>
    <p>
      Two dimensions: Color (10) by Size (3), 30 combinations. Neutral, brand, and semantic
      status variants use text tokens matched to their hue. Accent variants keep neutral
      text primary for legibility, see the gap note below.
    </p>

    <h2>States</h2>
    <p>
      Tag is static and non interactive: one rendered state per variant combination.
      No hover, focus, pressed, or disabled states are built, since inapplicable states
      are never forced in.
    </p>

    <h2>Behaviors</h2>
    <p>None. Tag has no interaction, motion, or responsive behavior.</p>

    <h2>Accessibility</h2>
    <ul>
      <li>Meaning is never conveyed by color alone. Status tags always pair color with label text.</li>
      <li>Semantic variants use the 800 step text against the 50 step surface for AA contrast at small sizes.</li>
      <li>Icons hold 3:1 or better non text contrast against their background.</li>
    </ul>

    <h2>Specs</h2>
    <ul>
      <li>Size s: height 18px fixed, padding spacing xs (8px), gap spacing 2xs (4px), Label small_medium (10/12), icon 16px.</li>
      <li>Size m: height 20px fixed, padding spacing s (12px), gap spacing 2xs (4px), Label default_medium (12/16), icon 16px.</li>
      <li>Size l: height 24px fixed, padding spacing s (12px), gap spacing 2xs (4px), Body small_medium (14/20), icon 20px.</li>
      <li>Radius full on all sizes. Border 1px, inside aligned, bound to each variant's border token.</li>
    </ul>

    <h2>Known gap</h2>
    <p>
      The accent color families only have surface steps. No text, border, or icon pairing
      tokens exist for them the way brand and semantic groups have. Accent variant labels
      render in text primary until the design system owner adds deeper accent text tokens.
    </p>

    <h2>Do's and don'ts</h2>
    <div className="dos-donts-grid">
      <div className="do-card">
        <h4>Do</h4>
        <p>Use one semantic status color per meaningfully different state, with labels of one or two words.</p>
      </div>
      <div className="do-card">
        <h4>Do</h4>
        <p>Use accent colors interchangeably for arbitrary categorization with no inherent status meaning.</p>
      </div>
      <div className="dont-card">
        <h4>Don't</h4>
        <p>Use Tag as a button or make it dismissible. That behavior belongs to a separate Chip component.</p>
      </div>
      <div className="dont-card">
        <h4>Don't</h4>
        <p>Override the fixed height or hardcode padding outside the spec tokens. Shorten the label instead.</p>
      </div>
    </div>
  </div>
);

export default TagPage;
