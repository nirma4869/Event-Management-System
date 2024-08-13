"use client";

import i18n from "@/locales/i18n";

import { Container, Stack, Typography, useTheme } from "@mui/material";
import { Trans } from "next-i18next";
import Link from "next/link";
import LoginInputArea from "./LoginInputArea";

// ----------------------------------------------------------------------

export const LogInPageContent = () => {
  const theme = useTheme();

  return (
    <Container sx={{ pt: 15 }}>
      <Stack>
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ pb: 5 }}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            {i18n.t("loggedOut.tabs.login.title")}
          </Typography>
        </Stack>

        <LoginInputArea />

        <Stack
          direction={"row"}
          spacing={1}
          sx={{ pt: 3 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Trans
            i18nKey={"loggedOut.tabs.login.noAccount"}
            components={{
              1: <Typography variant="body2" />,
              2: (
                <Typography
                  variant="body2"
                  component={Link}
                  href={"/sign-up"}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                  }}
                />
              ),
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default LogInPageContent;
