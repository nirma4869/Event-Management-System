import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password, email, imageUrl, firstName, lastName } =
      reqBody;

    //check if user already exists
    const user = await prisma.user.findUnique({ where: { username } });
    const uniqueEmail = await prisma.user.findUnique({ where: { email } });

    if (user) {
      throw new Error("usernameAlreadyExists");
    }

    if (uniqueEmail) {
      throw new Error("emailAlreadyExists");
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser: Prisma.UserCreateInput = {
      username,
      password: hashedPassword,
      email,
      imageUrl,
      firstName,
      lastName,
    };

    const savedUser = await prisma.user
      .create({ data: newUser })
      .catch((error) => {
        throw new Error(error.message);
      });

    return NextResponse.json(
      { message: "User created successfully", success: true, savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
