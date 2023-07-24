import { NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  try {
    const movieCount = await prisma.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    // will return an array with 1 movie document
    const randomMovie = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    })

    return res.json(randomMovie[0])
  } catch (err) {

  }
}