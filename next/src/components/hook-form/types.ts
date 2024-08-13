import { SxProps, TextFieldProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

export enum InputFieldType {
  TextField,
  DatePicker,
}

export type BasicField<Name> = {
  name: Name;
  translation: string;
  inputType: InputFieldType;
  required?: boolean;
  disabled?: boolean;
  size?: "small" | "medium";
};

export type FieldText<Name> = BasicField<Name> & {
  props?: TextFieldProps;
};

export type Field<Name extends string = string> = FieldText<Name> | undefined;

export type RHFInputFieldProps<Name extends string = string> = {
  field: Field<Name>;
  sx?: SxProps<Theme>;
};
