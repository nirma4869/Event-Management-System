import { Stack, Typography } from "@mui/material";
import { TextIconProps } from ".";

// ----------------------------------------------------------------------

export const TextIcon = ({
  text,
  iconProps,
  stackProps,
  textProps,
}: TextIconProps) => {
  const { icon, side } = iconProps;
  return (
    <Stack {...stackProps}>
      {side === "left" && (
        <>
          {icon}
          <Typography {...textProps}>{text}</Typography>
        </>
      )}
      {side === "right" && (
        <>
          <Typography {...textProps}>{text}</Typography> {icon}
        </>
      )}
    </Stack>
  );
};
