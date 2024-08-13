import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { EnumregistrationStatusFieldUpdateOperationsInputObjectSchema } from './EnumregistrationStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TableUpdateOneRequiredWithoutEventRegistrationNestedInputObjectSchema } from './TableUpdateOneRequiredWithoutEventRegistrationNestedInput.schema';
import { EventUpdateOneRequiredWithoutEventRegistrationsNestedInputObjectSchema } from './EventUpdateOneRequiredWithoutEventRegistrationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutEventRegistrationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEventRegistrationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.EventRegistrationUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    contactInformation: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    formularAnswers: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    status: z
      .union([
        z.lazy(() => registrationStatusSchema),
        z.lazy(
          () => EnumregistrationStatusFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
    submitTime: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    table: z
      .lazy(
        () =>
          TableUpdateOneRequiredWithoutEventRegistrationNestedInputObjectSchema,
      )
      .optional(),
    event: z
      .lazy(
        () =>
          EventUpdateOneRequiredWithoutEventRegistrationsNestedInputObjectSchema,
      )
      .optional(),
    mainExhibitor: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutEventRegistrationsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EventRegistrationUpdateInputObjectSchema = Schema;
