import * as React from 'react';

/**
 * Form field: label above, underline-only input below. The only input treatment in the system.
 */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  hint?: string;
  disabled?: boolean;
  inputStyle?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
