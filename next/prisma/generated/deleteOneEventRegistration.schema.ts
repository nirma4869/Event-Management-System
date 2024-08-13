import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';

export const EventRegistrationDeleteOneSchema = z.object({
  where: EventRegistrationWhereUniqueInputObjectSchema,
});
