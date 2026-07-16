import React from 'react';
import { spacingScale } from '../data/loadTokens';

const Spacing = () => (
  <div className="doc-section">
    <h1>Spacing</h1>
    <p className="lead-text">
      Fifteen steps from 0 to 128px. All padding and gaps in components use these values through the
      spacing variable collection. Any other value is a violation.
    </p>
    <div className="scale-list">
      {spacingScale.map((t) => {
        const px = parseInt(t.value, 10);
        return (
          <div className="scale-row" key={t.name}>
            <code className="token-tag scale-token">{t.name}</code>
            <span className="scale-value">{t.value}</span>
            <div className="scale-bar" style={{ width: `${Math.max(px, 2)}px` }} />
          </div>
        );
      })}
    </div>
  </div>
);

export default Spacing;
