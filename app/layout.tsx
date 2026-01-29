import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NAV_LEFT, NAV_RIGHT } from "@/lib/constants";

import { ThemeProvider } from "next-themes" ;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jungle Burger Budapest",
  description: "Jungle Burger Budapest – smash és klasszikus burgerek, hotdogok és tálak friss alapanyagokból. Laza hangulat, őszinte ízek a XVI. kerületben."
,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-full overflow-x-hidden`}>
          <Navbar navLeft={NAV_LEFT} navRight={NAV_RIGHT} />
          {children}
          <Footer />
      </body>
    </html>
  );
}
