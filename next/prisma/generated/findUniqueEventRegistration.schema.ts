import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';

export const EventRegistrationFindUniqueSchema = z.object({
  where: EventRegistrationWhereUniqueInputObjectSchema,
});
