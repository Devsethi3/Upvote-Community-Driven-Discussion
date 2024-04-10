import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Extract user ID from authentication
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { title } = body;

    // Create a new course using Prisma
    const course = await prisma.course.create({
      data: {
        userId,
        title,
      },
    });

    // Return JSON response with the created course
    return new NextResponse(JSON.stringify(course), { status: 201 }); // 201 Created
  } catch (error) {
    console.error("[COURSES]", error);
    // Return 500 Internal Server Error if an error occurs
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
