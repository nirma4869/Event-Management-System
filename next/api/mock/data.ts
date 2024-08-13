import { Event } from "@/models/event";
import { EventRegistration } from "@/models/eventRegistration";
import { Table } from "@/models/table";
import { User } from "@/models/user";
import { eventStatus, registrationStatus } from "@prisma/client";

// ----------------------------------------------------------------------

const date = new Date();

const mockTable1: Table = {
  id: 1,
  eventId: 1234,
  capacity: 4,
  origin: [501, 155, 294, 184],
  rotation: 0,
  publicId: "Table1",
};

const mockTable2: Table = {
  id: 2,
  eventId: 987,
  capacity: 6,
  origin: [465, 56, 361, 76],
  rotation: 0,
  publicId: "Table2",
};

const mockTable3: Table = {
  id: 3,
  eventId: 987,
  capacity: 2,
  origin: [198.148, 158.672, 161, 149],
  rotation: 68.51651286555344,
  publicId: "Table3",
};

const mockTable4: Table = {
  id: 4,
  eventId: 987,
  capacity: 0,
  origin: [922, 100, 202, 315],
  rotation: 0,
  publicId: "Bühne",
};

export const mockTables: Table[] = [
  mockTable1,
  mockTable2,
  mockTable3,
  mockTable4,
];

export const mockEventRegistration1: EventRegistration = {
  id: 6789,
  tableId: mockTable3.id,
  eventId: 1234,
  mainExhibitorUsername: "",
  name: "Ree(n)vent",
  description: "",
  contactInformation: "",
  formularAnswers: null,
  status: registrationStatus.ACCEPTED,
  submitTime: new Date(),
};

export const mockEventRegistration2: EventRegistration = {
  id: 2945,
  tableId: mockTable1.id,
  eventId: 1234,
  mainExhibitorUsername: "",
  name: "Ree(n)vent",
  description: "",
  contactInformation: "",
  formularAnswers: null,
  status: registrationStatus.ACCEPTED,
  submitTime: new Date(),
};

export const mockEventRegistrations: EventRegistration[] = [
  mockEventRegistration1,
  mockEventRegistration2,
];

export const mockEvent1: Event = {
  id: 1234,
  eventname: "SemCon",
  organizerUsername: "Hairy Potter",
  startTime: addDaysToDate(date, -8),
  endTime: addDaysToDate(date, 8),
  roomGeometry: null,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  registrationFormular:
    '[{"id":"dbd645d7-8a78-48d8-9ab3-667cfebe72a6","type":0,"name":"TextFieldFrage","isRequired":true},{"id":"951fcbd7-e357-40d5-9878-ee8d0f6093b1","type":1,"name":"DropDownFrage","isRequired":false,"options":["A1","A2","A3"]},{"id":"dc4bea84-c729-4d15-a711-c3cb4b1656a1","type":2,"name":"CheckBoxFrage","isRequired":false,"options":["A1","A2"]},{"id":"4bcb33ac-3e9b-4204-b2fc-27f29271562f","type":3,"name":"RadioButtonsFrage","isRequired":false,"options":["A1","A2"]},{"id":"fe6d1a0c-75b5-4926-af3a-2e517d7480a4","type":4,"name":"DatumFrage","isRequired":true,"options":[""]}]',
  invitationCode: "Qwertz4",
  status: eventStatus.ONGOING,
  imageUrl:
    "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  zip: "74081",
  city: "Heilbronn",
  country: "Deutschland",
  contactInformation: "dummy@gmail.com",
  adress: "Max-Plack-Straße 39",
  tables: mockTables,
  eventRegistrations: mockEventRegistrations,
};

export const mockEvent2: Event = {
  id: 987,
  eventname: "Hele Fischer Konzert",
  organizerUsername: "jbi",
  startTime: addDaysToDate(date, -8),
  endTime: addDaysToDate(date, 8),
  roomGeometry: null,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  registrationFormular: null,
  invitationCode: "Qwertz4",
  status: eventStatus.ONGOING,
  imageUrl:
    "https://images.pexels.com/photos/167478/pexels-photo-167478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  zip: "74081",
  city: "Heilbronn",
  country: "Deutschland",
  contactInformation: "dummy@gmail.com",
  adress: "Max-Plack-Straße 39",
  tables: [mockTable1, mockTable2],
  eventRegistrations: [],
};

export const mockUser: User = {
  username: "Hairy Potter",
  password: "FuckPython123",
  email: "dummy@gmail.com",
  imageUrl: null,
  firstName: "John",
  lastName: "Doe",
  organizedEvents: [mockEvent1],
  eventRegistrations: [],
};

export const mockEvents: Event[] = [
  mockEvent1,
  mockEvent2,
  mockEvent1,
  mockEvent2,
  mockEvent1,
  mockEvent2,
  mockEvent1,
  mockEvent2,
];

function addDaysToDate(date: Date, daysToAdd: number): Date {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + daysToAdd);
  return newDate;
}
