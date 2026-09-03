import * as React from 'react';

/**
 * Fixed translucent site header — logo left, flat nav links, single pill CTA right.
 */
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  links?: Array<{ label: string; href: string }>;
  cta?: string;
  ctaHref?: string;
  /** Path from the consuming page to the assets/ folder */
  assetBase?: string;
  fixed?: boolean;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
