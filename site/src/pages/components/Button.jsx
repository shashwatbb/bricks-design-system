import React from 'react';

const ButtonPage = () => (
  <div className="doc-section component-doc">
    <h1>Button</h1>
    <p className="lead-text">
      The primary interactive control in Bricks. Six variants across three sizes with a
      consistent interaction model in every state.
    </p>

    <h2>Overview</h2>
    <p>
      Button triggers an action. Variant communicates emphasis, size matches the density of
      the context, and state reflects the interaction model shared across all variants.
    </p>

    <h2>Purpose</h2>
    <p>
      One component covers every action emphasis level, so screens never need one-off
      buttons. Pick the right hierarchy for the context instead of restyling.
    </p>

    <h2>When to use</h2>
    <ul>
      <li>Primary: the single most important action in a section. One per section, never competing.</li>
      <li>Secondary and Tertiary: supporting actions paired with a primary.</li>
      <li>Destructive: delete, remove, cancel. Reserved for irreversible operations, with confirmation.</li>
      <li>Link (purple or black): inline navigation, form level links, helper text.</li>
    </ul>

    <h2>When not to use</h2>
    <ul>
      <li>Static labels or status. Use Tag instead.</li>
      <li>Link variants as isolated primary calls to action. They work in inline text contexts.</li>
      <li>Destructive for reversible actions. Clearing filters is reversible, use Tertiary.</li>
    </ul>

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
            <td><code className="token-tag">Variant</code></td>
            <td>Variant</td>
            <td>primary, secondary, tertiary, destructive, link purple, link black</td>
            <td>primary</td>
          </tr>
          <tr>
            <td><code className="token-tag">Size</code></td>
            <td>Variant</td>
            <td>s, m, l</td>
            <td>m</td>
          </tr>
          <tr>
            <td><code className="token-tag">State</code></td>
            <td>Variant</td>
            <td>default, hover, pressed, focus, disabled, loading</td>
            <td>default</td>
          </tr>
          <tr>
            <td><code className="token-tag">Has Leading Icon</code></td>
            <td>Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code className="token-tag">Has Trailing Icon</code></td>
            <td>Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td><code className="token-tag">Leading Icon / Trailing Icon</code></td>
            <td>Instance swap</td>
            <td>any Iconography (Bricks) component</td>
            <td>none</td>
          </tr>
          <tr>
            <td><code className="token-tag">Label</code></td>
            <td>Text</td>
            <td>free text, verb first</td>
            <td>Label</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Variants</h2>
    <p>
      Three dimensions: Variant (6) by Size (3) by State (6), 108 combinations in the component set.
      Figma properties map one to one to code component props.
    </p>

    <h2>States</h2>
    <ul>
      <li>Hover: fill one step darker, slightly elevated feel.</li>
      <li>Pressed: fill two steps darker, confirms input.</li>
      <li>Focus: 4px solid shadow ring in a brand or semantic tint. No fill change.</li>
      <li>Disabled: muted tokens, no pointer events, legible but de-emphasised.</li>
      <li>Loading: default fill preserved, label replaced by a loading animation, width unchanged.</li>
    </ul>

    <h2>Behaviors</h2>
    <p>
      Icons scale with the button height. Link variants show an underline only when no icons
      are present. All fills, text, and strokes are bound to library variables.
    </p>

    <h2>Accessibility</h2>
    <ul>
      <li>All default fill and text pairs meet the 4.5:1 contrast minimum, verified for WCAG AA.</li>
      <li>Focus ring holds 3:1 or better contrast against adjacent color.</li>
      <li>Disabled never relies on color alone. Pair with aria-disabled and a tooltip.</li>
      <li>Loading uses aria-busy with an aria-label describing the pending action.</li>
      <li>Size s is 32px tall. Wrap it in a 44px minimum tap zone on mobile.</li>
    </ul>

    <h2>Specs</h2>
    <p>
      4pt grid throughout. Radius binds to the radius m token (12px). Padding and gaps bind to the
      spacing collection. Exact per size measurements live in the Buttons page of the Figma file.
    </p>

    <h2>Do's and don'ts</h2>
    <div className="dos-donts-grid">
      <div className="do-card">
        <h4>Do</h4>
        <p>Use one primary action per section. Clear hierarchy means users know what to do.</p>
      </div>
      <div className="do-card">
        <h4>Do</h4>
        <p>Pair a primary with a lower emphasis button for secondary actions.</p>
      </div>
      <div className="dont-card">
        <h4>Don't</h4>
        <p>Place two primary buttons side by side. It creates ambiguity about the main action.</p>
      </div>
      <div className="dont-card">
        <h4>Don't</h4>
        <p>Use Destructive for reversible operations. Reserve it for irreversible ones only.</p>
      </div>
    </div>
  </div>
);

export default ButtonPage;
