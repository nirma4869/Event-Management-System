import { z } from 'zod';
import { EventRegistrationUpdateWithoutTableInputObjectSchema } from './EventRegistrationUpdateWithoutTableInput.schema';
import { EventRegistrationUncheckedUpdateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutTableInput.schema';
import { EventRegistrationCreateWithoutTableInputObjectSchema } from './EventRegistrationCreateWithoutTableInput.schema';
import { EventRegistrationUncheckedCreateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpsertWithoutTableInput> = z
  .object({
    update: z.union([
      z.lazy(() => EventRegistrationUpdateWithoutTableInputObjectSchema),
      z.lazy(
        () => EventRegistrationUncheckedUpdateWithoutTableInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => EventRegistrationCreateWithoutTableInputObjectSchema),
      z.lazy(
        () => EventRegistrationUncheckedCreateWithoutTableInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const EventRegistrationUpsertWithoutTableInputObjectSchema = Schema;
