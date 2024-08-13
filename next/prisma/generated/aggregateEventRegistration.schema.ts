import { z } from 'zod';
import { EventRegistrationOrderByWithRelationInputObjectSchema } from './objects/EventRegistrationOrderByWithRelationInput.schema';
import { EventRegistrationWhereInputObjectSchema } from './objects/EventRegistrationWhereInput.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationCountAggregateInputObjectSchema } from './objects/EventRegistrationCountAggregateInput.schema';
import { EventRegistrationMinAggregateInputObjectSchema } from './objects/EventRegistrationMinAggregateInput.schema';
import { EventRegistrationMaxAggregateInputObjectSchema } from './objects/EventRegistrationMaxAggregateInput.schema';
import { EventRegistrationAvgAggregateInputObjectSchema } from './objects/EventRegistrationAvgAggregateInput.schema';
import { EventRegistrationSumAggregateInputObjectSchema } from './objects/EventRegistrationSumAggregateInput.schema';

export const EventRegistrationAggregateSchema = z.object({
  orderBy: z
    .union([
      EventRegistrationOrderByWithRelationInputObjectSchema,
      EventRegistrationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: EventRegistrationWhereInputObjectSchema.optional(),
  cursor: EventRegistrationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EventRegistrationCountAggregateInputObjectSchema])
    .optional(),
  _min: EventRegistrationMinAggregateInputObjectSchema.optional(),
  _max: EventRegistrationMaxAggregateInputObjectSchema.optional(),
  _avg: EventRegistrationAvgAggregateInputObjectSchema.optional(),
  _sum: EventRegistrationSumAggregateInputObjectSchema.optional(),
});
