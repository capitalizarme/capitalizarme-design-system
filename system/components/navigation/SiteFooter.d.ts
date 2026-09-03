import * as React from 'react';

/** Site footer: link columns, logo, and the mandatory returns disclaimer. */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: Array<{ title: string; links: string[] }>;
  /** Compliance disclaimer — required on every page */
  legal?: string;
  copyright?: string;
  address?: string;
  assetBase?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
