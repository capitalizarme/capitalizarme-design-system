import * as React from 'react';

/**
 * The brand mark as a preserved image file. Horizontal lockup wherever the wordmark fits;
 * isotype at favicon/avatar/watermark scale. Blanco is for navy/blue surfaces only — never box it
 * (or any variant) in a white "badge" tile to fake contrast on a dark surface; place it directly.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'horizontal' | 'isotype';
  /** 'celeste' exists at isotype scale only; 'azul-oscuro' only in the horizontal set */
  color?: 'negro' | 'blanco' | 'azul' | 'azul-oscuro' | 'celeste' | 'verde' | 'rojo' | 'amarillo';
  /** Rendered height in px. Minimum legible: 100px wide horizontal, 40px isotype. */
  height?: number;
  /** Path from the consuming page to assets/logo */
  basePath?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
