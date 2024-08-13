import { z } from 'zod';
import { EventRegistrationScalarWhereInputObjectSchema } from './EventRegistrationScalarWhereInput.schema';
import { EventRegistrationUpdateManyMutationInputObjectSchema } from './EventRegistrationUpdateManyMutationInput.schema';
import { EventRegistrationUncheckedUpdateManyWithoutEventRegistrationsInputObjectSchema } from './EventRegistrationUncheckedUpdateManyWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpdateManyWithWhereWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EventRegistrationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EventRegistrationUncheckedUpdateManyWithoutEventRegistrationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationUpdateManyWithWhereWithoutEventInputObjectSchema =
  Schema;
