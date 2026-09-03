import React from 'react';

/** Renders one glyph from the official 124-icon Capitalizarme iconset (position-indexed filenames). */
export function Icon({ id, color = 'azul', size = 24, label, basePath = 'assets/icons/iconset', style, ...rest }) {
  const n = String(id).padStart(3, '0');
  return (
    <img
      src={basePath + '/' + color + '/icon-' + n + '.svg'}
      alt={label || ''}
      aria-hidden={label ? undefined : true}
      style={{ maxWidth: size, maxHeight: size, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', ...style }}
      {...rest}
    />
  );
}
