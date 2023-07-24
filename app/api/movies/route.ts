import { NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  try {
    const movies = await prisma.movie.findMany();
    return res.json(movies)
  } catch (err) {
    console.log('error')
    return new res(JSON.stringify(err), { status: 500 })
  }
}