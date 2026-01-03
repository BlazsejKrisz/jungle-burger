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
  description: "Finom hamburger, ide még kitaláljuk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          
        >
          <Navbar navLeft={NAV_LEFT} navRight={NAV_RIGHT} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
