import { z } from 'zod';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumregistrationStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => registrationStatusSchema).optional(),
    })
    .strict();

export const EnumregistrationStatusFieldUpdateOperationsInputObjectSchema =
  Schema;
