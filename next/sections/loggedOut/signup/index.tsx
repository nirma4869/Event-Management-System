"use client";

import i18n from "@/locales/i18n";
import { User, UserSchema, initialUser } from "@/models/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import { Trans } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import SignUpInputArea from "./SignUpInputArea";

// ----------------------------------------------------------------------

export const SignUpPageContent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const theme = useTheme();

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
    <Container sx={{ pt: 15 }}>
      <Stack>
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ pb: 5 }}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            {i18n.t("loggedOut.tabs.signUp.label")}
          </Typography>
        </Stack>

        <SignUpInputArea />

        <Stack
          direction={"row"}
          spacing={1}
          sx={{ pt: 3 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Trans
            i18nKey={"loggedOut.tabs.signUp.accountAvailable"}
            components={{
              1: <Typography variant="body2" />,
              2: (
                <Typography
                  variant="body2"
                  component={Link}
                  href={"/login"}
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

export default SignUpPageContent;
