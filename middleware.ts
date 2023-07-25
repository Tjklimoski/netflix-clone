import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (token) {
    if (req.nextUrl.pathname.startsWith('/auth')) {
      //if logged in and navigating to login page, redirect user to root route
      return NextResponse.redirect(new URL('/', req.nextUrl.origin))
    }
  } else {
    if (!req.nextUrl.pathname.startsWith('/auth')) {
      //if logged out and navigating to '/' or '/profiles' then redirect user to log in.
      return NextResponse.redirect(new URL('/auth', req.nextUrl.origin))
    }
  }
}

export const config = {
  matcher: ['/', '/profiles', '/watch', '/auth', '/api/movies/:paths*'],
}