import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    username: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
