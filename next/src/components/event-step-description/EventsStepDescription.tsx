import { Divider, Stack, Typography, useTheme } from "@mui/material";
import { EventStepDescriptionProps } from "./types";

// ----------------------------------------------------------------------

export const EventStepDescription = ({
  title,
  description,
  divider,
}: EventStepDescriptionProps) => {
  const theme = useTheme();

  return (
    <Stack>
      {divider && divider === "top" && (
        <Divider sx={{ borderBottomWidth: 3, p: 3 }} />
      )}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{ p: 3 }}
      >
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          sx={{ pt: 3 }}
        >
          {title}
        </Typography>
        <Typography textAlign={"center"} color={theme.palette.grey[600]}>
          {description}
        </Typography>
      </Stack>
      {divider && divider === "bottom" && (
        <Divider sx={{ borderBottomWidth: 3, pb: 3 }} />
      )}
    </Stack>
  );
};

export default EventStepDescription;
