import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutOrganizerNestedInputObjectSchema } from './EventUpdateManyWithoutOrganizerNestedInput.schema';
import { EventRegistrationUpdateManyWithoutMainExhibitorNestedInputObjectSchema } from './EventRegistrationUpdateManyWithoutMainExhibitorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
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
      .lazy(() => EventUpdateManyWithoutOrganizerNestedInputObjectSchema)
      .optional(),
    eventRegistrations: z
      .lazy(
        () =>
          EventRegistrationUpdateManyWithoutMainExhibitorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
