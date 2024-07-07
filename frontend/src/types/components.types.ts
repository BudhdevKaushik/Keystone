import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export interface Children {
  children: ReactNode;
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface FormValuesTypes {
  [key: string]: string | number | File | boolean;
}

export type DataArray = FormValuesTypes[] | [];
export type StringsArray = string[] | [];

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

// export interface FormFieldProps {
//   id?: string;
//   name: string;
//   type: string;
//   label: string;
//   icon?: ReactNode;
// }
