import * as React from 'react';

/** One row of a benefit checklist: filled blue circle with a white check, plus text. */
export interface ChecklistItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  size?: number;
  children?: React.ReactNode;
}
export declare function ChecklistItem(props: ChecklistItemProps): JSX.Element;
