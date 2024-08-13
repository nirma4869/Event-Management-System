import prisma from "@/lib/db";
import { isNullValue } from "@/utils/checkValues";
import { NextResponse } from "next/server";

// ----------------------------------------------------------------------

export async function GET() {
  try {
    const events = await prisma.event
      .findMany({ include: { tables: true, eventRegistrations: true } })
      .catch((error) => {
        throw new Error(error.message);
      });

    const fetchedEvents = events.map((event) => {
      return {
        ...event,
        description: isNullValue(event.description),
        invitationCode: isNullValue(event.invitationCode),
        imageUrl: isNullValue(event.imageUrl),
        contactInformation: isNullValue(event.contactInformation),
      };
    });

    return NextResponse.json({ message: "Events found", data: fetchedEvents });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
