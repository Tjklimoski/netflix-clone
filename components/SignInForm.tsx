"use client";

import Input from "./Input";

export default function SignInForm() {
  return (
    <form>
      <Input
        id="email"
        label="Email"
        onChange={() => {}}
        type="email"
        value=""
      />
    </form>
  );
}
