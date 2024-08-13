import { z } from 'zod';
import { TableCreateInputObjectSchema } from './objects/TableCreateInput.schema';
import { TableUncheckedCreateInputObjectSchema } from './objects/TableUncheckedCreateInput.schema';

export const TableCreateOneSchema = z.object({
  data: z.union([
    TableCreateInputObjectSchema,
    TableUncheckedCreateInputObjectSchema,
  ]),
});
