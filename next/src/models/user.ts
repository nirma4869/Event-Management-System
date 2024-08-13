import i18n from "@/locales/i18n";
import { Prisma } from "@prisma/client";

import { validatePasswordSaftey } from "@/utils/validatePasswordSaftey";
import { z } from "zod";
import {
  EventCreateInputObjectSchema,
  EventRegistrationCreateOneSchema,
} from "../../prisma/generated/schemas";

// ----------------------------------------------------------------------

export type User = Prisma.UserGetPayload<{
  include: { organizedEvents: true; eventRegistrations: true };
}>;

export const initialUser: User = {
  username: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
  imageUrl: "",
  eventRegistrations: [],
  organizedEvents: [],
};

export const UserSchema = () => {
  const invalidInputErrorMessage = i18n.t(
    "messages.validation.signUp.invalidInput"
  );
  const invalidEmailErrorMessage = i18n.t(
    "messages.validation.signUp.invalidEmail"
  );
  const passwordTooShortErrorMessage = i18n.t(
    "messages.validation.signUp.passwordTooShort"
  );
  const passwordNotSafeEnoughErrorMessage = i18n.t(
    "messages.validation.signUp.passwordNotSafeEnough"
  );

  return z.object({
    username: z.string().min(1, invalidInputErrorMessage),
    password: z
      .string()
      .min(8, passwordTooShortErrorMessage)
      .refine(
        (password) => validatePasswordSaftey(password),
        passwordNotSafeEnoughErrorMessage
      ),
    email: z
      .string()
      .min(1, invalidInputErrorMessage)
      .email(invalidEmailErrorMessage),
    imageUrl: z.string().optional().nullable(),
    firstName: z.string().min(1, invalidInputErrorMessage),
    lastName: z.string().min(1, invalidInputErrorMessage),
    eventRegistrations: z.array(EventRegistrationCreateOneSchema).optional(),
    organizedEvents: z.array(EventCreateInputObjectSchema).optional(),
  });
};
