"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Profiles() {
  const router = useRouter();
  const { data: user, error, isLoading } = useCurrentUser();

  return (
    <div className="grid place-items-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-center">Who is watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/")}>
            <div className="group w-44 mx-auto hover:cursor-pointer">
              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden">
                <img src="/images/default-blue.png" alt="" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-inherit select-none">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
