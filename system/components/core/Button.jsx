import React from 'react';

const czButtonBase = {
  fontFamily: 'var(--font-accent)',
  fontWeight: 'var(--weight-bold)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-cta)',
  fontSize: 'var(--text-sm)',
  lineHeight: 1,
  borderRadius: 'var(--radius-pill)',
  border: '2px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  textDecoration: 'none',
  transition: 'opacity var(--duration-slow) var(--ease-standard), background-color var(--duration-slow) var(--ease-standard), color var(--duration-slow) var(--ease-standard)',
};

const czButtonSizes = {
  sm: { padding: '8px 20px' },
  md: { padding: '12px 32px' },
  lg: { padding: '16px 40px', fontSize: 'var(--text-base)' },
};

const czButtonVariants = {
  primary: { background: 'var(--accent)', color: 'var(--accent-contrast)' },
  secondary: { background: 'var(--accent-cta-secondary)', color: 'var(--accent-contrast)' },
  onAccent: { background: '#ffffff', color: 'var(--accent)' },
  outline: { background: '#ffffff', color: 'var(--accent)', borderColor: 'var(--accent)' },
};

const czButtonHover = {
  primary: { opacity: 'var(--hover-opacity)' },
  secondary: { opacity: 'var(--hover-opacity)' },
  onAccent: { opacity: 'var(--hover-opacity)' },
  outline: { background: 'var(--accent)', color: '#ffffff' },
};

/** Pill CTA. Raleway bold uppercase — the brand's one recognisable UI signature. */
export function Button({ variant = 'primary', size = 'md', href, disabled = false, fullWidth = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const merged = {
    ...czButtonBase,
    ...czButtonSizes[size],
    ...czButtonVariants[variant],
    ...(hover && !disabled ? czButtonHover[variant] : null),
    ...(fullWidth ? { width: '100%' } : null),
    ...(disabled ? { opacity: 'var(--disabled-opacity)', cursor: 'not-allowed', pointerEvents: 'none' } : null),
    ...style,
  };
  return (
    <Tag
      href={href}
      style={merged}
      aria-disabled={disabled || undefined}
      disabled={!href && disabled ? true : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >{children}</Tag>
  );
}
