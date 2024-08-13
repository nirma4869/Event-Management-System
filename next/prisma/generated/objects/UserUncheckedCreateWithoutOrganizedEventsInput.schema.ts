import { z } from 'zod';
import { EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrganizedEventsInput> =
  z
    .object({
      username: z.string(),
      password: z.string(),
      email: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      firstName: z.string(),
      lastName: z.string(),
      eventRegistrations: z
        .lazy(
          () =>
            EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema =
  Schema;
