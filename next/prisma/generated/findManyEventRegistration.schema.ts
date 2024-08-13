import { z } from 'zod';
import { EventRegistrationOrderByWithRelationInputObjectSchema } from './objects/EventRegistrationOrderByWithRelationInput.schema';
import { EventRegistrationWhereInputObjectSchema } from './objects/EventRegistrationWhereInput.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationScalarFieldEnumSchema } from './enums/EventRegistrationScalarFieldEnum.schema';

export const EventRegistrationFindManySchema = z.object({
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
  distinct: z.array(EventRegistrationScalarFieldEnumSchema).optional(),
});
