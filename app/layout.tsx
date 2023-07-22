import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix clone tutorial from Code With Antonio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`${inter.className} bg-zinc-950 h-full overflow-x-hidden text-zinc-200`}
      >
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
