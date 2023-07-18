export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* To have page background go black on smaller screens */}
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 md:w-1/2 md:max-w-lg rounded-md w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
