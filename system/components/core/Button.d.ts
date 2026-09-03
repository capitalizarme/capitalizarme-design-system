import * as React from 'react';

/**
 * Pill call-to-action button — Raleway 700 uppercase, tracked out, always fully rounded.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = filled brand blue; secondary = blue-dark fill; onAccent = white on a blue surface; outline = fills blue on hover */
  variant?: 'primary' | 'secondary' | 'onAccent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor instead of a button */
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
