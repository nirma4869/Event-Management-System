import { FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Editor from "../editor/Editor";
import { EditorProps } from "../editor/types";

// ----------------------------------------------------------------------

type Props = EditorProps & {
  name: string;
  placeholder?: string;
};

// ----------------------------------------------------------------------

export default function RHFEditor({
  name,
  helperText,
  placeholder,
  ...other
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor
          id={name.split(".").join("-")}
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          helperText={
            (!!error || helperText) && (
              <FormHelperText error={!!error} sx={{ px: 2 }}>
                {error ? error?.message : helperText}
              </FormHelperText>
            )
          }
          {...other}
        />
      )}
    />
  );
}
