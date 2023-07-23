import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prismadb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function serverAuth() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
}
