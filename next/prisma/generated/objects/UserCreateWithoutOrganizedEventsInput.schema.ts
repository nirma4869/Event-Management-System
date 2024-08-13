import { z } from 'zod';
import { EventRegistrationCreateNestedManyWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateNestedManyWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutOrganizedEventsInput> = z
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
          EventRegistrationCreateNestedManyWithoutMainExhibitorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateWithoutOrganizedEventsInputObjectSchema = Schema;
