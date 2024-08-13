import { z } from 'zod';
import { TableCreateManyEventInputObjectSchema } from './TableCreateManyEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateManyEventInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TableCreateManyEventInputObjectSchema),
      z.lazy(() => TableCreateManyEventInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TableCreateManyEventInputEnvelopeObjectSchema = Schema;
