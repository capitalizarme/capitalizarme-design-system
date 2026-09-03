import React from 'react';

/** Label + underline-only input. Boxed or filled inputs are off-system. */
export function Field({ label, id, type = 'text', hint, disabled = false, style, inputStyle, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: 'grid', gap: 'var(--space-1)', ...style }}>
      {label ? (
        <label htmlFor={id} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-medium)', color: 'var(--fg)',
        }}>{label}</label>
      ) : null}
      <input
        id={id}
        type={type}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none',
          borderBottom: '1px solid ' + (focused ? 'var(--accent)' : 'var(--border)'),
          outline: 'none', padding: 'var(--space-2) 0',
          color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
          transition: 'border-color var(--duration-fast) var(--ease-standard)',
          opacity: disabled ? 'var(--disabled-opacity)' : 1,
          cursor: disabled ? 'not-allowed' : 'auto',
          ...inputStyle,
        }}
        {...rest}
      />
      {hint ? <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{hint}</p> : null}
    </div>
  );
}
