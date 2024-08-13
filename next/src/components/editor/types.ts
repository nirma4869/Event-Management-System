import { SxProps, Theme } from "@mui/material";
import { ReactQuillProps } from "react-quill";

// ----------------------------------------------------------------------

export type Conversion = "md-html";

export type EditorProps = ReactQuillProps & {
  value?: string;
  error?: boolean;
  simple?: boolean;
  helperText?: React.ReactNode;
  onChange?: (value: string) => void;
  sx?: SxProps<Theme>;
  conversion?: Conversion;
};
