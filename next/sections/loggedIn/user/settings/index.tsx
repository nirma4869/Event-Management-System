"use client";

import FormProvider from "@/components/hook-form";
import i18n from "@/locales/i18n";
import { User } from "@/models/user";
import { UserSettingsForm } from "@/sections/loggedIn/user/settings/Form";
import { UserSettingsToolbar } from "@/sections/loggedIn/user/settings/Toolbar";
import { Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const UserSettingsContent = () => {
  const methods = useForm<User>();
  return (
    <FormProvider methods={methods}>
      <Container sx={{ pt: 10, alignItems: "center" }}>
        <Typography variant="h4">
          {i18n.t("loggedIn.user.settings.title")}
        </Typography>
        <UserSettingsForm />
        <UserSettingsToolbar methods={methods} />
      </Container>
    </FormProvider>
  );
};
