"use client";

import { useCallback, useState } from "react";
import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = useCallback(() => {
    setIsLogin((currentIsLogin) => !currentIsLogin);
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      if (password !== confirmPassword)
        throw new Error("Passwords do not match");
      await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });
      login();
    } catch (err) {
      // Not going to render errors in this project.
      // Can grab the err.response.data.error from axios to place in an alert
      // Alert can be p tag on page, or toast componenet (toastify)
      console.error("page error: ", err);
    }
  }, [email, name, password, confirmPassword, login]);

  return (
    <>
      <h2 className="text-4xl mb-8 font-semibold">
        {isLogin ? "Sign in" : "Register"}
      </h2>
      <div className="flex flex-col gap-4">
        {!isLogin && (
          <Input
            id="name"
            label="Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
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
      <button
        onClick={isLogin ? login : register}
        className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition"
      >
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
