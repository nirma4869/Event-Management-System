import prisma from "@/lib/db";
import { isEmptyString, isNullValue } from "@/utils/checkValues";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------

export async function PUT(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const username = await getDataFromToken(request);

    const eventRegistrationData: Prisma.EventRegistrationCreateInput = {
      table: { connect: { id: reqBody.tableId } },
      event: { connect: { id: reqBody.eventId } },
      mainExhibitor: { connect: { username } },
      name: reqBody.name,
      description: isEmptyString(reqBody.description),
      contactInformation: isEmptyString(reqBody.contactInformation),
      formularAnswers: reqBody.formularAnswers,
      status: reqBody.status,
      submitTime: new Date(),
    };

    const newEventRegistration = await prisma.eventRegistration
      .create({ data: eventRegistrationData })
      .catch((error) => {
        throw new Error(error.message);
      });

    const createdEventRegistration = {
      ...newEventRegistration,
      description: isNullValue(newEventRegistration.description),
      contactInformation: isNullValue(newEventRegistration.contactInformation),
    };

    return NextResponse.json(
      {
        message: "EventRegistration created successfully",
        success: true,
        createdEventRegistration,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
