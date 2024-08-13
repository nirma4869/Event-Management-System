import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';

export const TableDeleteOneSchema = z.object({
  where: TableWhereUniqueInputObjectSchema,
});
