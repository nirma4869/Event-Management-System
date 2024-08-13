"use client";

import FormProvider, { RHFTextField } from "@/components/hook-form";
import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, IconButton, InputAdornment, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Login, LoginSchema, defaultLogin } from "./types";

// ----------------------------------------------------------------------

export const LoginInputArea = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const FormSchema = LoginSchema();
  const methods = useForm<Login>({
    defaultValues: defaultLogin,
    resolver: zodResolver(FormSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleLogin = async (data: Login) => {
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        router.push("/dashboard");
      }
    } catch (error: any) {
      enqueueSnackbar(i18n.t(`messages.error.login.${error.message}`), {
        variant: "error",
      });
    }
  };

  const onLogin = () => {
    if (!isValid) {
      enqueueSnackbar(i18n.t("messages.error.login.missingFields"), {
        variant: "error",
      });
    }

    handleSubmit(handleLogin)();
  };
  return (
    <FormProvider methods={methods}>
      <Grid
        container
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={6}>
          <Stack spacing={2}>
            <RHFTextField
              name="username"
              label={i18n.t("loggedOut.tabs.login.userName")}
              required
            />
            <RHFTextField
              name="password"
              label={i18n.t("loggedOut.tabs.login.password")}
              type={isPasswordVisible ? "text" : "password"}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      edge="end"
                    >
                      {isPasswordVisible ? (
                        <Iconify icon="ic:round-visibility" />
                      ) : (
                        <Iconify icon="ph:eye-closed" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={onLogin}>
              {i18n.t("loggedOut.tabs.login.button")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default LoginInputArea;
