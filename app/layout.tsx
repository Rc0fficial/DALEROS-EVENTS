import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DALEROS EVENTS — Premium Business Networking",
  description:
    "The world's premier platform for business networking — connecting executives, entrepreneurs, and leaders across Europe and Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
