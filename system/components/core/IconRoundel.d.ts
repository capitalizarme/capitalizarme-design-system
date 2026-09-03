import * as React from 'react';

/** Tinted circle that frames a single icon in step grids and feature cards. */
export interface IconRoundelProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  /** Fill colour; defaults to the evidenced #E8F0FC tint */
  tint?: string;
  children?: React.ReactNode;
}
export declare function IconRoundel(props: IconRoundelProps): JSX.Element;
