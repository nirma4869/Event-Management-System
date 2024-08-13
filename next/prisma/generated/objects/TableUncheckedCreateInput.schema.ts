import { z } from 'zod';
import { TableCreateoriginInputObjectSchema } from './TableCreateoriginInput.schema';
import { EventRegistrationUncheckedCreateNestedOneWithoutTableInputObjectSchema } from './EventRegistrationUncheckedCreateNestedOneWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUncheckedCreateInput> = z
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
    EventRegistration: z
      .lazy(
        () =>
          EventRegistrationUncheckedCreateNestedOneWithoutTableInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TableUncheckedCreateInputObjectSchema = Schema;
