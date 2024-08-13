import { z } from 'zod';
import { TableCreateoriginInputObjectSchema } from './TableCreateoriginInput.schema';
import { EventCreateNestedOneWithoutTablesInputObjectSchema } from './EventCreateNestedOneWithoutTablesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateWithoutEventRegistrationInput> = z
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
  })
  .strict();

export const TableCreateWithoutEventRegistrationInputObjectSchema = Schema;
