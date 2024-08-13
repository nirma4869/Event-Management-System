import { TextFieldProps } from "@mui/material";
import { RHFTextField } from ".";
import RHFDatePicker from "./RHFDatePicker";
import { InputFieldType, RHFInputFieldProps } from "./types";

// ----------------------------------------------------------------------

export default function RHFInputField<Name extends string>({
  field,
  sx,
}: RHFInputFieldProps<Name>) {
  if (!field) {
    return null;
  }

  const { name, translation, required, disabled, inputType, props, size } =
    field;

  return (
    <>
      {inputType === InputFieldType.DatePicker && (
        <RHFDatePicker
          name={name}
          label={translation}
          multiline
          fullWidth
          required={required}
          disabled={disabled}
          sx={sx}
          {...(props as TextFieldProps)}
        />
      )}

      {inputType === InputFieldType.TextField && (
        <RHFTextField
          name={name}
          label={translation}
          multiline
          fullWidth
          required={required}
          disabled={disabled}
          size={size}
          sx={sx}
          {...(props as TextFieldProps)}
        />
      )}
    </>
  );
}
