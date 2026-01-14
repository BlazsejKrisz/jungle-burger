"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu as MenuIcon, Phone, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      <div className="mx-auto grid h-16 w-full  grid-cols-3 items-center px-4 sm:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-xl border-border"
                  aria-label="Menü"
                >
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[320px] border-r border-border bg-popover text-popover-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <div className="relative h-24 w-24">
                      <Link href="/">
                      <Image
                        src={logoSrc}
                        alt="Jungle Burger logo"
                        fill
                        className="object-contain"
                      />
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-2">
                  {[...navLeft, ...navRight].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* <div className="mt-6 rounded-2xl border border-border bg-card/60 p-4 text-xs text-muted-foreground backdrop-blur">
                    <div className="flex items-center gap-2 text-foreground">
                      <Sparkles className="h-4 w-4 text-[var(--jungle)]" />
                      <span className="font-semibold">Jungle Burger</span>
                    </div>
                    <div className="mt-2">
                      Street-food landing •{" "}
                      <span className="text-foreground">menü & vibe</span>
                    </div>
                  </div>*/}
                </div> 
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop left nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLeft.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <Link href="/">
            <div className="relative h-16 w-36">
              <Image
                src={logoSrc}
                alt="Jungle Burger logo"
                fill
                className="object-contain scale-[1.5] md:scale-[1.5]"
                priority
              />
            </div>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end gap-2">
          {/* Mobile phone */}
          <div className="md:hidden">
            <Button asChild className="rounded-xl">
              <a href="tel:+36705909421" aria-label="Telefonhívás">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Desktop right nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navRight.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild className="rounded-xl px-5">
              <a href="tel:+36705909421"><Phone className="h-5 w-5" /> Hívj minket!</a>
            </Button>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
