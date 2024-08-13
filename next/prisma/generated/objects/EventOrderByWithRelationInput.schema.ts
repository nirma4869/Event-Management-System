import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TableOrderByRelationAggregateInputObjectSchema } from './TableOrderByRelationAggregateInput.schema';
import { EventRegistrationOrderByRelationAggregateInputObjectSchema } from './EventRegistrationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventname: z.lazy(() => SortOrderSchema).optional(),
    organizerUsername: z.lazy(() => SortOrderSchema).optional(),
    startTime: z.lazy(() => SortOrderSchema).optional(),
    endTime: z.lazy(() => SortOrderSchema).optional(),
    roomGeometry: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    registrationFormular: z.lazy(() => SortOrderSchema).optional(),
    invitationCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    adress: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    contactInformation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    organizer: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    tables: z
      .lazy(() => TableOrderByRelationAggregateInputObjectSchema)
      .optional(),
    eventRegistrations: z
      .lazy(() => EventRegistrationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventOrderByWithRelationInputObjectSchema = Schema;
