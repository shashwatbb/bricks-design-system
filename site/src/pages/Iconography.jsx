import React from 'react';

const Iconography = () => (
  <div className="doc-section">
    <h1>Iconography</h1>
    <p className="lead-text">
      Icons live in a dedicated Figma library, <strong>Iconography (Bricks)</strong>.
      Components consume them by instance swap only. Icon vectors are never redrawn,
      detached, or imported directly into a component.
    </p>
    <div className="guide-grid">
      <div className="guide-card">
        <h3>Source</h3>
        <p>
          The glyph set matches Phosphor Icons at regular stroke. Sizes observed in production
          components are 16, 20, and 24px. A formal size scale is not yet tokenized.
        </p>
      </div>
      <div className="guide-card">
        <h3>Color</h3>
        <p>
          Icon fills bind to the icon and semantic_icons token groups in color_tokens.
          Raw hex values are never used.
        </p>
      </div>
      <div className="guide-card">
        <h3>Library</h3>
        <p>
          <a href="https://www.figma.com/design/Rq1j8iqvbJBYRb52tdpgFg/Iconography--Bricks-" target="_blank" rel="noreferrer">
            Open the Iconography (Bricks) library in Figma
          </a>
          . The full icon inventory will appear here once it is exported.
        </p>
      </div>
    </div>
  </div>
);

export default Iconography;
