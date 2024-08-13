import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TableUpdateoriginInputObjectSchema } from './TableUpdateoriginInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EventUpdateOneRequiredWithoutTablesNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutTablesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpdateWithoutEventRegistrationInput> = z
  .object({
    capacity: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    origin: z
      .union([
        z.lazy(() => TableUpdateoriginInputObjectSchema),
        z.number().array(),
      ])
      .optional(),
    rotation: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    publicId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    event: z
      .lazy(() => EventUpdateOneRequiredWithoutTablesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TableUpdateWithoutEventRegistrationInputObjectSchema = Schema;
