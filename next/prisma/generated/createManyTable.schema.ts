import { z } from 'zod';
import { TableCreateManyInputObjectSchema } from './objects/TableCreateManyInput.schema';

export const TableCreateManySchema = z.object({
  data: z.union([
    TableCreateManyInputObjectSchema,
    z.array(TableCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
