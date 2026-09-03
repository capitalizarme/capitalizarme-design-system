import * as React from 'react';

/** Rounded-2xl white panel — hairline border, shadow-sm, 24px padding (40px on desktop). */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  pad?: 'none' | 'md' | 'lg';
  /** Pale blue tint fill (#E8F0FC) instead of white */
  tint?: boolean;
  bordered?: boolean;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
