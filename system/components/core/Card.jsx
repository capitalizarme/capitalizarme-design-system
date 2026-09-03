import React from 'react';

/** White rounded-2xl panel with a hairline border and shadow-sm. The system's only container shape. */
export function Card({ pad = 'md', tint = false, bordered = true, elevation = 'sm', style, children, ...rest }) {
  const pads = { none: 0, md: 'var(--card-pad)', lg: 'var(--card-pad-lg)' };
  const shadows = { none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' };
  return (
    <div style={{
      background: tint ? 'var(--surface-tint-alt)' : 'var(--surface)',
      border: bordered ? 'var(--hairline)' : 'none',
      borderRadius: 'var(--radius-md)',
      boxShadow: shadows[elevation],
      padding: pads[pad],
      ...style,
    }} {...rest}>{children}</div>
  );
}
