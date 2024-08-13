import { z } from 'zod';

export const TableScalarFieldEnumSchema = z.enum([
  'id',
  'eventId',
  'capacity',
  'origin',
  'rotation',
  'publicId',
]);
