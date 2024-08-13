import { z } from 'zod';
import { TableOrderByWithRelationInputObjectSchema } from './objects/TableOrderByWithRelationInput.schema';
import { TableWhereInputObjectSchema } from './objects/TableWhereInput.schema';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';
import { TableScalarFieldEnumSchema } from './enums/TableScalarFieldEnum.schema';

export const TableFindManySchema = z.object({
  orderBy: z
    .union([
      TableOrderByWithRelationInputObjectSchema,
      TableOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TableWhereInputObjectSchema.optional(),
  cursor: TableWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TableScalarFieldEnumSchema).optional(),
});
