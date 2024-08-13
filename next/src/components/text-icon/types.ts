import { StackProps, TypographyProps } from "@mui/material";

// ----------------------------------------------------------------------

type IconProps = {
  icon: React.ReactNode;
  side: "left" | "right";
};

export type TextIconProps = {
  text: string;
  iconProps: IconProps;
  stackProps?: StackProps;
  textProps?: TypographyProps;
};
