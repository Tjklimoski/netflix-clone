import { NextResponse as res } from "next/server";
import serverAuth from "@/lib/ServerAuth";

export default async function GET(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    //no need to check that we got back a currentUser because serverAuth validated the user. If there was no user an error will be thrown and we'd go to the catch block.
    return res.json(currentUser)
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify(err), { status: 400 })
  }
}