import i18n from "@/locales/i18n";
import { Box, Button, useTheme } from "@mui/material";
import Link from "next/link";

// ----------------------------------------------------------------------

export const CustomButtonNavigation = () => {
  const theme = useTheme();

  return (
    <Box boxShadow={2} borderRadius={1} bgcolor={"white"}>
      <Link href={"/"}>
        <Button
          sx={{
            m: 0.8,
            color: theme.palette.primary.main,
            textTransform: "none",
            ":hover": {
              bgcolor: "#fff",
              color: "primary.light",
            },
          }}
          variant="text"
          disableRipple
        >
          {i18n.t("loggedOut.tabs.info.label")}
        </Button>
      </Link>
      <Link href={"/create-preview"}>
        <Button
          sx={{
            m: 0.8,
            color: theme.palette.primary.main,
            textTransform: "none",
            ":hover": {
              bgcolor: "#fff",
              color: "primary.light",
            },
          }}
          variant="text"
          disableRipple
        >
          {i18n.t("loggedOut.tabs.create.label")}
        </Button>
      </Link>
      <Link href={"/login"}>
        <Button
          sx={{
            m: 0.8,
            color: theme.palette.primary.main,
            textTransform: "none",
            ":hover": {
              bgcolor: "#fff",
              color: "primary.light",
            },
          }}
          variant="text"
          disableRipple
        >
          {i18n.t("loggedOut.tabs.login.label")}
        </Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button
          sx={{
            m: 0.8,
            color: theme.palette.primary.main,
            textTransform: "none",
            ":hover": {
              bgcolor: "#fff",
              color: "primary.light",
            },
          }}
          variant="text"
          disableRipple
        >
          {i18n.t("loggedOut.tabs.signUp.label")}
        </Button>
      </Link>
    </Box>
  );
};

export default CustomButtonNavigation;
