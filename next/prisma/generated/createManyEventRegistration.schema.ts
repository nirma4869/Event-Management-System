import { z } from 'zod';
import { EventRegistrationCreateManyInputObjectSchema } from './objects/EventRegistrationCreateManyInput.schema';

export const EventRegistrationCreateManySchema = z.object({
  data: z.union([
    EventRegistrationCreateManyInputObjectSchema,
    z.array(EventRegistrationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
