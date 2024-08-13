import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableEventIdPublicIdCompoundUniqueInput> = z
  .object({
    eventId: z.number(),
    publicId: z.string(),
  })
  .strict();

export const TableEventIdPublicIdCompoundUniqueInputObjectSchema = Schema;
