import SignInForm from "@/components/SignInForm";

export default function auth() {
  return (
    <>
      <h2 className="text-4xl mb-8 font-semibold">Sign in</h2>
      <div className="flex flex-col gap-4">
        <SignInForm />
      </div>
    </>
  );
}
