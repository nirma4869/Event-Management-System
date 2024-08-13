import { z } from 'zod';
import { EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutOrganizerInput.schema';
import { EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
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
    eventRegistrations: z
      .lazy(
        () =>
          EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
