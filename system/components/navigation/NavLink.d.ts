import * as React from 'react';

/** Header / footer text link — navy resting, brand blue on hover. */
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  /** On a navy or brand-blue surface */
  onInverse?: boolean;
  children?: React.ReactNode;
}
export declare function NavLink(props: NavLinkProps): JSX.Element;
