import { z } from 'zod';
import { EventCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventCreateNestedManyWithoutOrganizerInput.schema';
import { EventRegistrationCreateNestedManyWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateNestedManyWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    username: z.string(),
    password: z.string(),
    email: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    firstName: z.string(),
    lastName: z.string(),
    organizedEvents: z
      .lazy(() => EventCreateNestedManyWithoutOrganizerInputObjectSchema)
      .optional(),
    eventRegistrations: z
      .lazy(
        () =>
          EventRegistrationCreateNestedManyWithoutMainExhibitorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
