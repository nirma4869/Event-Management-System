import i18n from "@/locales/i18n";
import { z } from "zod";

// ----------------------------------------------------------------------

export type Login = { username: string; password: string };

export const defaultLogin: Login = { username: "", password: "" };

export const LoginSchema = () => {
  const emptyFieldErrorMessage = i18n.t("messages.validation.login.emptyField");

  return z.object({
    username: z.string().min(1, emptyFieldErrorMessage),
    password: z.string().min(1, emptyFieldErrorMessage),
  });
};
