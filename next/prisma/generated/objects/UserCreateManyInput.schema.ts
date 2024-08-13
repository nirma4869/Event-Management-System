import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    username: z.string(),
    password: z.string(),
    email: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
