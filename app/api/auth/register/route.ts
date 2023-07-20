import { hash } from 'bcrypt';
import { NextResponse as res } from 'next/server';
import prisma from '@/lib/prismadb';

type ReqBody = {
  email: string;
  name: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const { email, name, password }: ReqBody = await req.json();

    //check for if there's already an existing user
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email taken' }), { status: 422 })
    }

    const hashedPassword = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    return res.json(user);

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify(err), { status: 400 })
  }
}