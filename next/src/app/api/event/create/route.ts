import prisma from "@/lib/db";
import { Table } from "@/models/table";
import { isEmptyString, isNullValue } from "@/utils/checkValues";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const username = await getDataFromToken(request);

    const mappedTables = reqBody.tables.map((table: Table) => {
      const { capacity, origin, rotation, publicId } = table;
      return {
        capacity: parseInt(capacity.toString()),
        origin,
        rotation,
        publicId,
      };
    });

    const eventCreateData: Prisma.EventCreateInput = {
      eventname: reqBody.eventname,
      startTime: reqBody.startTime,
      endTime: reqBody.endTime,
      description: isEmptyString(reqBody.description),
      adress: reqBody.adress,
      zip: reqBody.zip,
      city: reqBody.city,
      country: reqBody.country,
      contactInformation: isEmptyString(reqBody.contactInformation),
      imageUrl: isEmptyString(reqBody.imageUrl),
      invitationCode: isEmptyString(reqBody.invitationCode),
      tables: { create: mappedTables },
      status: reqBody.status,
      roomGeometry: reqBody.roomGeometry,
      registrationFormular: reqBody.registrationFormular,
      organizer: { connect: { username } },
    };

    const newEvent = await prisma.event
      .create({ data: eventCreateData, include: { tables: true } })
      .catch((error) => {
        throw new Error(error.message);
      });

    const createdEvent = {
      ...newEvent,
      description: isNullValue(newEvent.description),
      invitationCode: isNullValue(newEvent.invitationCode),
      imageUrl: isNullValue(newEvent.imageUrl),
      contactInformation: isNullValue(newEvent.contactInformation),
    };

    return NextResponse.json(
      { message: "Event created successfully", success: true, createdEvent },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
