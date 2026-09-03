import React from 'react';

/** Capi, the 3D-rendered brand mascot. Always a whole, untinted, uncropped image. */
export function Mascot({ name = 'capi-front-wave', alt = 'Capi', size = 240, basePath = 'assets/mascot', style, ...rest }) {
  return (
    <img
      src={basePath + '/' + name + '.png'}
      alt={alt}
      style={{ display: 'block', width: size, height: 'auto', objectFit: 'contain', filter: 'none', ...style }}
      {...rest}
    />
  );
}
