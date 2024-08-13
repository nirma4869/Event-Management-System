import { Box, Typography, useTheme } from "@mui/material";
import MarkdownRenderer from "../markdown-renderer";
import { DescriptionFieldProps } from "./types";

// ----------------------------------------------------------------------

const DescriptionField = ({ field, onClick, isNew }: DescriptionFieldProps) => {
  const { value, translation } = field;

  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `solid 1px ${theme.palette.grey[400]}`,
        borderRadius: 1,
        padding: theme.spacing(1),
        cursor: "pointer",
        listStylePosition: "inside",
      }}
      onClick={onClick}
    >
      <Typography variant="overline" sx={{ color: "text.disabled" }}>
        {translation}
      </Typography>
      <Typography
        component="div"
        variant="body1"
        fontStyle={isNew ? "italic" : ""}
        sx={{ color: isNew ? "text.disabled" : "" }}
      >
        <MarkdownRenderer value={value} />
      </Typography>
    </Box>
  );
};

export default DescriptionField;
