import React from 'react';
import { textStyleGroups, resolveTypeRef } from '../data/loadTokens';

const WEIGHT_MAP = { Regular: 400, Medium: 500, SemiBold: 600, Bold: 700 };

function StyleTable({ styles }) {
  return (
    <div className="typo-table-container">
      <table className="typo-table">
        <thead>
          <tr>
            <th>Preview</th>
            <th>Style</th>
            <th>Weight</th>
            <th>Size</th>
            <th>Line height</th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {styles.map((s) => {
            const size = resolveTypeRef(s.fontSize);
            const lh = resolveTypeRef(s.lineHeight);
            const weightName = resolveTypeRef(s.fontWeight);
            const tracking = resolveTypeRef(s.letterSpacing);
            return (
              <tr key={s.name}>
                <td className="col-preview">
                  <div
                    style={{
                      fontFamily: '"Google Sans Flex", sans-serif',
                      fontSize: `${Math.min(size, 40)}px`,
                      lineHeight: 1,
                      fontWeight: WEIGHT_MAP[weightName] ?? 400,
                      letterSpacing: `${tracking}px`,
                    }}
                  >
                    Aa
                  </div>
                </td>
                <td className="col-token"><code className="token-tag">{s.name}</code></td>
                <td className="col-weight">{weightName}</td>
                <td className="col-size">{size}px</td>
                <td className="col-lh">{lh}px</td>
                <td className="col-tracking">{tracking}px</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const Typography = () => {
  const groups = textStyleGroups();
  const platforms = ['Web', 'Mobile', 'CTA'];
  return (
    <div className="doc-section typography-page">
      <h1>Typography</h1>
      <p className="lead-text">
        One typeface, <strong>Google Sans Flex</strong>, in four weights.
        Every style below resolves from the typography variable collection in the token export.
        Sizes, line heights, and tracking are fixed pairs. Do not create one-off sizes.
      </p>

      <div className="typo-sections">
        {platforms.map((platform) => {
          const platformGroups = groups.filter((g) => g.platform === platform);
          if (platformGroups.length === 0) return null;
          return (
            <div className="platform-section" key={platform}>
              <div className="platform-header">
                <span className="platform-tag">{platform}</span>
                <h2>{platform === 'CTA' ? 'CTA styles' : `${platform} styles`}</h2>
              </div>
              {platformGroups.map((g) => (
                <div key={`${g.platform}-${g.category}`}>
                  {g.category !== g.platform && <h3 className="type-category">{g.category}</h3>}
                  <StyleTable styles={g.styles} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Typography;
