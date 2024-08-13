import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';

export const TableFindUniqueSchema = z.object({
  where: TableWhereUniqueInputObjectSchema,
});
