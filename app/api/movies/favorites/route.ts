import { NextResponse, NextResponse as res } from "next/server";
import type { NextRequest } from "next/server";
import { without } from "lodash";
import serverAuth from "@/lib/ServerAuth";
import prisma from "@/lib/prismadb";

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

// Route to get the movie object based on current user's favoriteIds field
export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();

    // fetch and return the favorite movies with most recently added first
    const userFavoritesList = currentUser?.favoriteIds.reverse() || [];
    const favoriteMovies: Movie[] = [];
    for (let i = 0; i < userFavoritesList.length; i++) {
      const id = userFavoritesList[i];
      const movie = await prisma.movie.findUnique({
        where: {
          id
        }
      })
      console.log('api, movie: ', movie)
      if (movie) favoriteMovies[favoriteMovies.length] = movie;
    }

    return res.json(favoriteMovies)
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

// Route to add a single favorite movie to the user's favoriteMovies field
export async function POST(req: NextRequest) {
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

    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser.email || ''
      },
      data: {
        favoriteIds: {
          push: movieId
        }
      }
    });

    return res.json(updatedUser)

  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

// Route to remove a single favorited movie from the user's favoriteMovies field
export async function DELETE(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId
      }
    });

    if (!movie) {
      throw new Error('Invalid movie ID')
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)

    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser.email || ''
      },
      data: {
        favoriteIds: updatedFavoriteIds
      }
    })

    return res.json(updatedUser)
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 })
  }
}

// don't need a PUT request because POST and DELETE handle adding and removing IDs.