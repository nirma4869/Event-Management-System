import { TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = Omit<TextFieldProps, "onChange"> & {
  name: string;
};

// ----------------------------------------------------------------------

export default function RHFDatePicker({
  name,
  label,
  helperText,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          label={label}
          slotProps={{
            textField: { helperText: error?.message, error: !!error, ...other },
          }}
        />
      )}
    />
  );
}
