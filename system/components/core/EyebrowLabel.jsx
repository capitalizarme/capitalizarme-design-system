import React from 'react';

/** Small uppercase eyebrow above a section heading. Space Grotesk bold — never Raleway. */
export function EyebrowLabel({ tone = 'accent', style, children, ...rest }) {
  const colors = { accent: 'var(--accent)', navy: 'var(--fg-emphasis)', muted: 'var(--muted)', onInverse: 'var(--fg-on-inverse)' };
  return (
    <p style={{
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: colors[tone],
      ...style,
    }} {...rest}>{children}</p>
  );
}
