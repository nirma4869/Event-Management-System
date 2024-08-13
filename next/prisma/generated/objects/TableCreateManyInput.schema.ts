import { z } from 'zod';
import { TableCreateoriginInputObjectSchema } from './TableCreateoriginInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateManyInput> = z
  .object({
    id: z.number().optional(),
    eventId: z.number(),
    capacity: z.number(),
    origin: z
      .union([
        z.lazy(() => TableCreateoriginInputObjectSchema),
        z.number().array(),
      ])
      .optional(),
    rotation: z.number(),
    publicId: z.string(),
  })
  .strict();

export const TableCreateManyInputObjectSchema = Schema;
