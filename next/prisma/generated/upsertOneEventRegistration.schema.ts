import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './objects/EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationCreateInputObjectSchema } from './objects/EventRegistrationCreateInput.schema';
import { EventRegistrationUncheckedCreateInputObjectSchema } from './objects/EventRegistrationUncheckedCreateInput.schema';
import { EventRegistrationUpdateInputObjectSchema } from './objects/EventRegistrationUpdateInput.schema';
import { EventRegistrationUncheckedUpdateInputObjectSchema } from './objects/EventRegistrationUncheckedUpdateInput.schema';

export const EventRegistrationUpsertSchema = z.object({
  where: EventRegistrationWhereUniqueInputObjectSchema,
  create: z.union([
    EventRegistrationCreateInputObjectSchema,
    EventRegistrationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    EventRegistrationUpdateInputObjectSchema,
    EventRegistrationUncheckedUpdateInputObjectSchema,
  ]),
});
