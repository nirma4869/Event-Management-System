import { z } from 'zod';
import { EventRegistrationWhereInputObjectSchema } from './objects/EventRegistrationWhereInput.schema';

export const EventRegistrationDeleteManySchema = z.object({
  where: EventRegistrationWhereInputObjectSchema.optional(),
});
