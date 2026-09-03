import React from 'react';

/** Flat text nav link: navy at rest, brand blue on hover. No underline, no pill. */
export function NavLink({ href = '#', active = false, onInverse = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const restColor = onInverse ? 'var(--fg-on-inverse)' : 'var(--fg-emphasis)';
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: hover || active ? (onInverse ? 'var(--fg-on-inverse)' : 'var(--accent)') : restColor,
        textDecoration: 'none',
        transition: 'color var(--duration-base) var(--ease-standard)',
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >{children}</a>
  );
}
