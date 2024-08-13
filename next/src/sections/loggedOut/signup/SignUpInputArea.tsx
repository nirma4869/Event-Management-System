import FormProvider, { RHFTextField } from "@/components/hook-form";
import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import { User, UserSchema, initialUser } from "@/models/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, IconButton, InputAdornment, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useForm } from "react-hook-form";

// ----------------------------------------------------------------------

export const SignUpInputArea = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const FormSchema = UserSchema();
  const methods = useForm<User>({
    defaultValues: initialUser,
    resolver: zodResolver(FormSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const handleSignUp = async (data: User) => {
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        enqueueSnackbar(i18n.t("messages.success.signup"), {
          variant: "success",
        });
        router.push("/login");
      }
    } catch (error: any) {
      enqueueSnackbar(i18n.t(`messages.error.signup.${error.message}`), {
        variant: "error",
      });
    }
  };

  const onSignUp = () => {
    if (!isValid) {
      enqueueSnackbar(i18n.t("messages.error.signup.missingFields"), {
        variant: "error",
      });
    }

    handleSubmit(handleSignUp)();
  };

  return (
    <FormProvider methods={methods}>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={6}>
          <Stack spacing={2}>
            <RHFTextField
              name="firstName"
              label={i18n.t("loggedOut.tabs.signUp.firstName")}
              required
            />
            <RHFTextField
              name="lastName"
              label={i18n.t("loggedOut.tabs.signUp.lastName")}
              required
            />
            <RHFTextField
              name="username"
              label={i18n.t("loggedOut.tabs.signUp.userName")}
              type="text"
              required
            />
            <RHFTextField
              name="password"
              label={i18n.t("loggedOut.tabs.signUp.password")}
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
            <RHFTextField
              name="email"
              label={i18n.t("loggedOut.tabs.signUp.email")}
              required
            />
            <Button
              variant="contained"
              onClick={onSignUp}
              sx={{ textTransform: "none" }}
            >
              {i18n.t("loggedOut.tabs.signUp.button")}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SignUpInputArea;
