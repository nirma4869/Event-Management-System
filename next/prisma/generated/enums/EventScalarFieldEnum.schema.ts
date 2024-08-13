import { z } from 'zod';

export const EventScalarFieldEnumSchema = z.enum([
  'id',
  'eventname',
  'organizerUsername',
  'startTime',
  'endTime',
  'roomGeometry',
  'description',
  'registrationFormular',
  'invitationCode',
  'status',
  'imageUrl',
  'adress',
  'zip',
  'city',
  'country',
  'contactInformation',
]);
