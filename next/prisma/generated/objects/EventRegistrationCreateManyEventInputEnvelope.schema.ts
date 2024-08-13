import { z } from 'zod';
import { EventRegistrationCreateManyEventInputObjectSchema } from './EventRegistrationCreateManyEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateManyEventInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EventRegistrationCreateManyEventInputObjectSchema),
        z.lazy(() => EventRegistrationCreateManyEventInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EventRegistrationCreateManyEventInputEnvelopeObjectSchema = Schema;
