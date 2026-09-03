import React from 'react';

/** Blue circle + white check, then plain text. The system's one bespoke glyph — don't swap in an icon font. */
export function ChecklistItem({ children, size = 18, style, ...rest }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', listStyle: 'none', color: 'var(--fg)', ...style }} {...rest}>
      <svg width={size} height={size} viewBox="0 0 25 25" aria-hidden="true" style={{ flex: 'none', marginTop: 3 }}>
        <circle cx="12.5" cy="12.5" r="12.5" fill="var(--accent)" />
        <path d="M7 12.5l3.5 3.5 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
