import prisma from "@/lib/db";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    //check if user exists
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new Error("invalidUserName");
    }

    //check if password is correct
    const isValidPassword = await bcryptjs.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("invalidPassword");
    }

    //create token data
    const tokenData = {
      id: user.username,
    };

    //create token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      messages: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
