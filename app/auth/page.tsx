"use client";

import { useCallback, useState } from "react";
import Input from "@/components/Input";

export default function auth() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = useCallback(() => {
    setIsLogin((currentIsLogin) => !currentIsLogin);
  }, []);

  return (
    <>
      <h2 className="text-4xl mb-8 font-semibold">
        {isLogin ? "Sign in" : "Register"}
      </h2>
      <div className="flex flex-col gap-4">
        {!isLogin && (
          <Input
            id="username"
            label="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        )}
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
        {!isLogin && (
          <Input
            id="confirmPassword"
            label="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            value={confirmPassword}
          />
        )}
      </div>
      <button className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
        {isLogin ? "Login" : "Sign up"}
      </button>
      {isLogin ? (
        <p className="text-neutral-500 mt-12">
          First time using Netflix?
          <span
            onClick={toggleIsLogin}
            className="text-white ml-1 hover:underline cursor-pointer"
          >
            Create an account
          </span>
        </p>
      ) : (
        <p className="text-neutral-500 mt-12">
          Already have an account?
          <span
            onClick={toggleIsLogin}
            className="text-white ml-1 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      )}
    </>
  );
}
