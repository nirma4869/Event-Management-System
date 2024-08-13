import { NextRequest, NextResponse } from "next/server";

// ----------------------------------------------------------------------

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/create-preview" ||
    path === "/" ||
    path === "/login" ||
    path === "/sign-up";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/create-event",
    "/dashboard",
    "/user",
    "/create-preview",
    "/login",
    "/sign-up",
  ],
};
