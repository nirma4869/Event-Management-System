import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutOrganizerNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutOrganizerNestedInput.schema';
import { EventRegistrationUncheckedUpdateManyWithoutMainExhibitorNestedInputObjectSchema } from './EventRegistrationUncheckedUpdateManyWithoutMainExhibitorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    imageUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    organizedEvents: z
      .lazy(
        () => EventUncheckedUpdateManyWithoutOrganizerNestedInputObjectSchema,
      )
      .optional(),
    eventRegistrations: z
      .lazy(
        () =>
          EventRegistrationUncheckedUpdateManyWithoutMainExhibitorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;
