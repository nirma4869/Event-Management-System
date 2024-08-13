import { z } from 'zod';
import { eventStatusSchema } from '../enums/eventStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumeventStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => eventStatusSchema).optional(),
  })
  .strict();

export const EnumeventStatusFieldUpdateOperationsInputObjectSchema = Schema;
