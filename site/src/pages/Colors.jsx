import React from 'react';
import { primitiveFamilies, semanticTokens } from '../data/loadTokens';

function textColorFor(hex) {
  const v = hex.replace('#', '');
  if (v.length < 6) return '#0f0e0d';
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#0f0e0d' : '#ffffff';
}

const Colors = () => (
  <div className="doc-section">
    <h1>Colors</h1>
    <p className="lead-text">
      Two collections define color in Bricks. <strong>color_primitives</strong> holds the raw scales.
      <strong> color_tokens</strong> holds the semantic aliases components bind to.
      Always bind to a semantic token when one exists for the role.
    </p>

    <div className="platform-section">
      <div className="platform-header">
        <span className="platform-tag">color_primitives</span>
        <h2>Primitive scales</h2>
      </div>
      <div className="ramp-list">
        {primitiveFamilies.map((fam) => (
          <div className="ramp-row" key={fam.family}>
            <div className="ramp-name"><code className="token-tag">{fam.family}</code></div>
            <div className="ramp-swatches">
              {fam.steps.map((s) => (
                <div
                  className="ramp-swatch"
                  key={s.step}
                  style={{ background: s.hex, color: textColorFor(s.hex) }}
                  title={`${fam.family}/${s.step} ${s.hex}`}
                >
                  <span className="ramp-step">{s.step}</span>
                  <span className="ramp-hex">{s.hex}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="platform-section" style={{ marginTop: 64 }}>
      <div className="platform-header">
        <span className="platform-tag">color_tokens</span>
        <h2>Semantic tokens</h2>
      </div>
      <div className="typo-table-container">
        <table className="typo-table">
          <thead>
            <tr>
              <th>Swatch</th>
              <th>Token</th>
              <th>Resolves to</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {semanticTokens.map((t) => (
              <tr key={t.name}>
                <td className="col-preview">
                  <div className="semantic-swatch" style={{ background: t.resolvedHex }} />
                </td>
                <td className="col-token"><code className="token-tag">{t.name}</code></td>
                <td className="col-weight">{String(t.value).replace(/[{}]/g, '').replace('.', '/')}</td>
                <td className="col-size">{t.resolvedHex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Colors;
