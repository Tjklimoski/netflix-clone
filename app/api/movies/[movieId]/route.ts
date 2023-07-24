import { NextResponse, NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

interface Params {
  params: {
    movieId: string
  }
}

export async function GET(req: NextRequest, { params }: Params) {
  const { movieId } = params

  try {

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}