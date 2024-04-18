import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const q = url.searchParams.get("url");

  if (!q) return new Response("Inavalid query", { status: 400 });

  const results = await db.subreddit.findMany({
    where: {
      name: {
        startsWith: q,
      },
    },
    include: {
      _count: true,
    },
    take: 5,
  });

  return new NextResponse(JSON.stringify(results));
}
