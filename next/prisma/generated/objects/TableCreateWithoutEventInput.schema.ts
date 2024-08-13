import { z } from 'zod';
import { TableCreateoriginInputObjectSchema } from './TableCreateoriginInput.schema';
import { EventRegistrationCreateNestedOneWithoutTableInputObjectSchema } from './EventRegistrationCreateNestedOneWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateWithoutEventInput> = z
  .object({
    capacity: z.number(),
    origin: z
      .union([
        z.lazy(() => TableCreateoriginInputObjectSchema),
        z.number().array(),
      ])
      .optional(),
    rotation: z.number(),
    publicId: z.string(),
    EventRegistration: z
      .lazy(() => EventRegistrationCreateNestedOneWithoutTableInputObjectSchema)
      .optional(),
  })
  .strict();

export const TableCreateWithoutEventInputObjectSchema = Schema;
