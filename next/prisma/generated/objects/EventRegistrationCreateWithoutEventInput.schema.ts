import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { TableCreateNestedOneWithoutEventRegistrationInputObjectSchema } from './TableCreateNestedOneWithoutEventRegistrationInput.schema';
import { UserCreateNestedOneWithoutEventRegistrationsInputObjectSchema } from './UserCreateNestedOneWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.EventRegistrationCreateWithoutEventInput> = z
  .object({
    name: z.string(),
    description: z.string().optional().nullable(),
    contactInformation: z.string().optional().nullable(),
    formularAnswers: z.union([
      z.lazy(() => JsonNullValueInputSchema),
      jsonSchema,
    ]),
    status: z.lazy(() => registrationStatusSchema).optional(),
    submitTime: z.coerce.date().optional(),
    table: z.lazy(
      () => TableCreateNestedOneWithoutEventRegistrationInputObjectSchema,
    ),
    mainExhibitor: z.lazy(
      () => UserCreateNestedOneWithoutEventRegistrationsInputObjectSchema,
    ),
  })
  .strict();

export const EventRegistrationCreateWithoutEventInputObjectSchema = Schema;
