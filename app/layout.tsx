import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio/Mini Project 2",
  description:
    "A sleek animated portfolio to draw potential client's attention",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
