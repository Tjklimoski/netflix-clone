"use client";

import { useState } from "react";
import Input from "./Input";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4">
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
    </form>
  );
}
