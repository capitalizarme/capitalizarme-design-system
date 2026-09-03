import * as React from 'react';

/**
 * One glyph from the official iconset. Pick by semantic label from assets/icons/iconset/labels.json
 * (e.g. 116 = property/apartment, 119 = broker/advisor, 114 = money/price).
 */
export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Position index, 1–124 (zero-padding is handled) */
  id: string | number;
  /** Colour layer folder — all 6 ship in assets/icons/iconset/ (grayscale is the default reference layer, not a color option here) */
  color?: 'azul' | 'verde' | 'rojo' | 'amarillo' | 'celeste';
  size?: number;
  /** Accessible name; omit for decorative icons */
  label?: string;
  /** Path from the consuming page to assets/icons/iconset */
  basePath?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
