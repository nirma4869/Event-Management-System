import { z } from 'zod';
import { EventRegistrationWhereInputObjectSchema } from './objects/EventRegistrationWhereInput.schema';
import { EventRegistrationOrderByWithAggregationInputObjectSchema } from './objects/EventRegistrationOrderByWithAggregationInput.schema';
import { EventRegistrationScalarWhereWithAggregatesInputObjectSchema } from './objects/EventRegistrationScalarWhereWithAggregatesInput.schema';
import { EventRegistrationScalarFieldEnumSchema } from './enums/EventRegistrationScalarFieldEnum.schema';

export const EventRegistrationGroupBySchema = z.object({
  where: EventRegistrationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EventRegistrationOrderByWithAggregationInputObjectSchema,
      EventRegistrationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    EventRegistrationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EventRegistrationScalarFieldEnumSchema),
});
