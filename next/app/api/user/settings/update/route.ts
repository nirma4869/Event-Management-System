import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  let requestBody = await request.json();
  let user;
  try {
    const user = await prisma.user.update({
      where: { username: requestBody.username },
      data: {
        email: requestBody.email,
        imageUrl: requestBody.imageUrl,
        firstName: requestBody.firstName,
        lastName: requestBody.lastName,
      },
    });
    return new Response(JSON.stringify({ response: user }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      headers: { "content-type": "application/json" },
      status: 500,
    });
  }
}
