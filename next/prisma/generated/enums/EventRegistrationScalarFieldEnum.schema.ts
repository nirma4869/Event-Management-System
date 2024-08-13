import { z } from 'zod';

export const EventRegistrationScalarFieldEnumSchema = z.enum([
  'id',
  'tableId',
  'eventId',
  'mainExhibitorUsername',
  'name',
  'description',
  'contactInformation',
  'formularAnswers',
  'status',
  'submitTime',
]);
