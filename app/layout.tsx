import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Odd or Even ???",
  description: "Odd or Even",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="py-20 overflow-x-hidden [*>&]:break-words">
        <header className="w-screen flex justify-center align-center">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
