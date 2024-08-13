import { BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

export type LabelColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

export type LabelVariant = "filled" | "outlined" | "soft";

export type LabelProps = BoxProps & {
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  color?: LabelColor;
  variant?: LabelVariant;
};
