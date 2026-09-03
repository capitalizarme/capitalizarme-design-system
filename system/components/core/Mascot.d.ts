import * as React from 'react';

/**
 * Capi mascot render, used whole for warmth in hero moments, empty states and step call-outs.
 * Never recoloured, cropped, vectorised, or used as a background for text.
 */
export interface MascotProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** File stem in assets/mascot — pick by pose/category from assets/mascot/manifest.json, e.g. 'capi-3', 'capi-searching', 'capi-cohete-rocket' */
  name?: string;
  alt?: string;
  size?: number;
  basePath?: string;
}
export declare function Mascot(props: MascotProps): JSX.Element;
