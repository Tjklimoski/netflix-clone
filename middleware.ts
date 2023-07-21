export { default } from 'next-auth/middleware'

//check for a logged in user on all routes EXCEPT the ones specified below
export const config = {
  matcher: '/((?!api|auth|images|_next/static|_next/image|favicon.ico).*)',
}

// If user is NOT logged in they will be redirected to /auth