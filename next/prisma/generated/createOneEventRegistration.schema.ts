import { z } from 'zod';
import { EventRegistrationCreateInputObjectSchema } from './objects/EventRegistrationCreateInput.schema';
import { EventRegistrationUncheckedCreateInputObjectSchema } from './objects/EventRegistrationUncheckedCreateInput.schema';

export const EventRegistrationCreateOneSchema = z.object({
  data: z.union([
    EventRegistrationCreateInputObjectSchema,
    EventRegistrationUncheckedCreateInputObjectSchema,
  ]),
});
