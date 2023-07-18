"use client";

import { useState } from "react";
import Input from "./Input";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex flex-col gap-4">
        <Input
          id="username"
          label="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <Input
          id="email"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          value={email}
        />
        <Input
          id="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          value={password}
        />
      </div>
      <button className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
        Login
      </button>
      <p className="text-neutral-500 mt-12">
        First time using Netflix?
        <span className="text-white ml-1 hover:underline cursor-pointer">
          Create an account
        </span>
      </p>
    </>
  );
}
