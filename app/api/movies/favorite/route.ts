import { NextResponse, NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import { without } from "lodash";
import serverAuth from "@/lib/ServerAuth";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  try {

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  // Route to add a single favorite movie to the user's favoriteMovies field
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json()

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!movie) {
      throw new Error('invlaid ID')
    }

    const user = await prisma.user.update({
      where: {
        email: currentUser.email || ''
      },
      data: {
        favoriteIds: {
          push: movieId
        }
      }
    });

    return res.json(user)

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

export async function DELETE(req: NextRequest) {
  try {

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

export async function PUT(req: NextRequest) {
  try {

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}