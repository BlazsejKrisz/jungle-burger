"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu as MenuIcon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import type { NavItem } from "@/lib/types";
import ThemeToggle from "./theme-toggle";

export default function Navbar({
  navLeft,
  navRight,
  logoSrc = "/jungle-logo.png",
}: {
  navLeft: NavItem[];
  navRight: NavItem[];
  logoSrc?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/60 backdrop-blur">
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl border-border" aria-label="Menü">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[320px] border-r border-border bg-popover text-popover-foreground">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <div className="relative h-7 w-24">
                    <Image src={logoSrc} alt="Jungle Burger logo" fill className="object-contain" />
                  </div>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {[...navLeft, ...navRight].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-6 rounded-2xl border border-border bg-card/60 p-4 text-xs text-muted-foreground backdrop-blur">
                  <div className="flex items-center gap-2 text-foreground">
                    <Sparkles className="h-4 w-4 text-[var(--jungle)]" />
                    <span className="font-semibold">Jungle Burger</span>
                  </div>
                  <div className="mt-2">
                    Street-food landing • csak infó • <span className="text-foreground">menü & vibe</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Left nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLeft.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <div className="relative h-16 w-28">
            <Image src={logoSrc} alt="Jungle Burger logo" fill className="object-cover" priority />
          </div>
        </Link>

        {/* Right nav (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {navRight.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
