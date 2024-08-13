import { z } from 'zod';
import { TableEventIdPublicIdCompoundUniqueInputObjectSchema } from './TableEventIdPublicIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    eventId_publicId: z
      .lazy(() => TableEventIdPublicIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const TableWhereUniqueInputObjectSchema = Schema;
