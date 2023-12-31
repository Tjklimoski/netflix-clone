import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prismadb"
import { compare } from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    Credentials({
      // unique identifier for the provider
      id: 'credentials',
      // name to display on the sign in form
      name: 'Credentials',
      // What info are we requesting from the user on the sign in form
      // Will be used to generate the form, so pass in the html input attributes.
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        }
      },
      // func to handle auth with the user's passed in credentials defined above.
      // func must return either a user object or false/null if credentials are invalid
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error('Invalid username or password');
        }

        const validPassword = await compare(credentials.password, user.hashedPassword)

        if (!validPassword) {
          throw new Error('Invalid username or password')
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }