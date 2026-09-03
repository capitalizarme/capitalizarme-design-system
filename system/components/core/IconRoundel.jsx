import React from 'react';

/** 100px tinted circle holding one iconset glyph. Used once per "how it works" step. */
export function IconRoundel({ size = 100, tint = 'var(--surface-tint-alt)', style, children, ...rest }) {
  return (
    <div style={{
      width: size, height: size, flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: tint,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }} {...rest}>{children}</div>
  );
}
