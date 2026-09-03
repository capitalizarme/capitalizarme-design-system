import * as React from 'react';

/** Uppercase eyebrow label above a heading, e.g. "Oportunidad de Inversión". */
export interface EyebrowLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: 'accent' | 'navy' | 'muted' | 'onInverse';
  children?: React.ReactNode;
}
export declare function EyebrowLabel(props: EyebrowLabelProps): JSX.Element;
