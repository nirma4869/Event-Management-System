import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutOrganizerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutEventRegistrationsInput> =
  z
    .object({
      username: z.string(),
      password: z.string(),
      email: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      firstName: z.string(),
      lastName: z.string(),
      organizedEvents: z
        .lazy(
          () => EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema =
  Schema;
