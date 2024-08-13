import { z } from 'zod';
import { EventRegistrationUpdateInputObjectSchema } from './objects/EventRegistrationUpdateInput.schema';
import { EventRegistrationUncheckedUpdateInputObjectSchema } from './objects/EventRegistrationUncheckedUpdateInput.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';

export const EventRegistrationUpdateOneSchema = z.object({
  data: z.union([
    EventRegistrationUpdateInputObjectSchema,
    EventRegistrationUncheckedUpdateInputObjectSchema,
  ]),
  where: EventRegistrationWhereUniqueInputObjectSchema,
});
