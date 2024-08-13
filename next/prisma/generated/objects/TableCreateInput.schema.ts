import { z } from 'zod';
import { TableCreateoriginInputObjectSchema } from './TableCreateoriginInput.schema';
import { EventCreateNestedOneWithoutTablesInputObjectSchema } from './EventCreateNestedOneWithoutTablesInput.schema';
import { EventRegistrationCreateNestedOneWithoutTableInputObjectSchema } from './EventRegistrationCreateNestedOneWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateInput> = z
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
    event: z.lazy(() => EventCreateNestedOneWithoutTablesInputObjectSchema),
    EventRegistration: z
      .lazy(() => EventRegistrationCreateNestedOneWithoutTableInputObjectSchema)
      .optional(),
  })
  .strict();

export const TableCreateInputObjectSchema = Schema;
