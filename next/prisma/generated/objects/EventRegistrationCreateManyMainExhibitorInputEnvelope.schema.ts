import { z } from 'zod';
import { EventRegistrationCreateManyMainExhibitorInputObjectSchema } from './EventRegistrationCreateManyMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateManyMainExhibitorInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EventRegistrationCreateManyMainExhibitorInputObjectSchema),
        z
          .lazy(() => EventRegistrationCreateManyMainExhibitorInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EventRegistrationCreateManyMainExhibitorInputEnvelopeObjectSchema =
  Schema;
