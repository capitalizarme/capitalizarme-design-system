import React from 'react';

const czHorizontal = {
  negro: '070726_logo-capitalizarme-negro-sin-com.png',
  blanco: '070726_logo-capitalizarme-blanco-sin-com.png',
  azul: '070726_logo-capitalizarme-azul-sin-com.png',
  'azul-oscuro': '070726_logo-capitalizarme-azul-oscuro-sin-com.png',
  verde: '070726_logo-capitalizarme-verde-sin-com.png',
  rojo: '070726_logo-capitalizarme-rojo-sin-com.png',
  amarillo: '070726_logo-capitalizarme-amarillo-sin-com.png',
};
const czIsotype = {
  negro: 'Isotipo Negro.png', blanco: 'Isotipo Blanco.png', azul: 'Isotipo Azul.png',
  celeste: 'Isotipo Celeste.png', verde: 'Isotipo Verde.png', rojo: 'Isotipo Rojo.png',
  amarillo: 'Isotipo Amarillo.png',
};

/** The Capitalizarme mark, always as a real image file — never styled text. No drop shadow, ever. */
export function Logo({ variant = 'horizontal', color = 'negro', height, basePath = 'assets/logo', style, ...rest }) {
  const isotype = variant === 'isotype';
  const file = isotype ? (czIsotype[color] || czIsotype.negro) : (czHorizontal[color] || czHorizontal.negro);
  const dir = isotype ? '/isotypes/' : '/horizontal/';
  return (
    <img
      src={basePath + dir + encodeURIComponent(file)}
      alt="Capitalizarme"
      style={{
        display: 'block',
        height: height || (isotype ? 40 : 28),
        width: 'auto',
        minWidth: isotype ? 40 : 100,
        filter: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
