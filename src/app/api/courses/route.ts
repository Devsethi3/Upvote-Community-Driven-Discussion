import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { title } = body;

    const course = await prisma.course.create({
      data: {
        userId,
        title,
      },
    });

    return new NextResponse(JSON.stringify(course), { status: 201 }); // 201 Created
  } catch (error) {
    console.error("[COURSES]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
