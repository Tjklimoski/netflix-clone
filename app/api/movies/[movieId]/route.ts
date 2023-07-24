import { NextResponse, NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  try {

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}