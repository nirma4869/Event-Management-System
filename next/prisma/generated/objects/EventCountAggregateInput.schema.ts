import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventname: z.literal(true).optional(),
    organizerUsername: z.literal(true).optional(),
    startTime: z.literal(true).optional(),
    endTime: z.literal(true).optional(),
    roomGeometry: z.literal(true).optional(),
    description: z.literal(true).optional(),
    registrationFormular: z.literal(true).optional(),
    invitationCode: z.literal(true).optional(),
    status: z.literal(true).optional(),
    imageUrl: z.literal(true).optional(),
    adress: z.literal(true).optional(),
    zip: z.literal(true).optional(),
    city: z.literal(true).optional(),
    country: z.literal(true).optional(),
    contactInformation: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const EventCountAggregateInputObjectSchema = Schema;
