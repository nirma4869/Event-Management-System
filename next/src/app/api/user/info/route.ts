import prisma from "@/lib/db";
import { UserData } from "@/models/userData";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const username = await getDataFromToken(request);

    const userData: UserData | null = await prisma.user.findUnique({
      where: { username },
      select: {
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
        eventRegistrations: true,
        organizedEvents: true,
      },
    });

    return NextResponse.json({ message: "User found", data: userData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
