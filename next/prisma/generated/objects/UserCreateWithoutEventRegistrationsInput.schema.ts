import { z } from 'zod';
import { EventCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventCreateNestedManyWithoutOrganizerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutEventRegistrationsInput> = z
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
  })
  .strict();

export const UserCreateWithoutEventRegistrationsInputObjectSchema = Schema;
