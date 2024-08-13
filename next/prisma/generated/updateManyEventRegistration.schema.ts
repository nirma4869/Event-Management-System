import { z } from 'zod';
import { EventRegistrationUpdateManyMutationInputObjectSchema } from './objects/EventRegistrationUpdateManyMutationInput.schema';
import { EventRegistrationWhereInputObjectSchema } from './objects/EventRegistrationWhereInput.schema';

export const EventRegistrationUpdateManySchema = z.object({
  data: EventRegistrationUpdateManyMutationInputObjectSchema,
  where: EventRegistrationWhereInputObjectSchema.optional(),
});
