import React from 'react';
import { radiusScale } from '../data/loadTokens';

const Radius = () => (
  <div className="doc-section">
    <h1>Radius</h1>
    <p className="lead-text">
      Nine steps. Nested layers step down one tier so an inner card is never as round as its container.
      The full step (999px) is reserved for pills and circular controls.
    </p>
    <div className="radius-grid">
      {radiusScale.map((t) => {
        const px = parseInt(t.value, 10);
        return (
          <div className="radius-cell" key={t.name}>
            <div className="radius-box" style={{ borderRadius: `${Math.min(px, 48)}px` }} />
            <code className="token-tag">{t.name}</code>
            <span className="scale-value">{t.value}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export default Radius;
