import prisma from "@/lib/prismadb"; // Import Prisma client
import { auth } from "@clerk/nextjs"; // Import auth function from Clerk for user authentication
import { NextResponse } from "next/server"; // Import NextResponse for handling responses

export async function POST(request: Request) {
  try {
    const { userId } = auth(); // Extract userId from authentication
    const { title } = await request.json(); // Extract title from request body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 }); // Return 401 Unauthorized response
    }

    // Create a new course using Prisma client
    const course = await prisma.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course); // Return JSON response with the created course
  } catch (error) {
    console.error("[COURSES]", error); // Log error
    return new NextResponse("Internal Server Error", { status: 500 }); // Return 500 Internal Server Error response
  }
}
