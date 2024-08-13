import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { EventRegistrationOrderByWithRelationInputObjectSchema } from './EventRegistrationOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    origin: z.lazy(() => SortOrderSchema).optional(),
    rotation: z.lazy(() => SortOrderSchema).optional(),
    publicId: z.lazy(() => SortOrderSchema).optional(),
    event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
    EventRegistration: z
      .lazy(() => EventRegistrationOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const TableOrderByWithRelationInputObjectSchema = Schema;
