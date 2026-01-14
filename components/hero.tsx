"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Instagram,
  Facebook,
  X,
  TicketCheckIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero({ bgSrc = "/heropl.jpg" }: { bgSrc?: string }) {
  return (
    <section
      data-anim="hero"
      className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden"
    >
      <Image
        src={bgSrc}
        alt="Jungle Burger background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      {/* Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Content */}
      <div className="relative isolate mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-4 py-10 sm:px-6">
        <div className="max-w-2xl">
          <h1
            data-anim="hero-title"
            className="md:mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl"
          >
            Jungle Burger.
            <br />
            <span className="text-[var(--jungle)] text-4xl md:text-6xl">
             Itt a dzsungel ízei uralkodnak
            </span>
          </h1>

          <p data-anim="hero-sub" className="mt-4 max-w-xl text-sm text-white/80">
           Smash burger, classic burger, crispy chicken, veggie — pár bevált kedvenc,
  amit jó választani és még jobb megenni. 
  Nincs túlbonyolítva. Csak az, ami működik. Budapesten
          </p>

          {/* SOCIALS */}
          <div
            data-anim="hero-sub"
            className="mt-6 flex items-center gap-4 text-white"
          >
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:text-[var(--jungle)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:text-[var(--jungle)]"
            >
              <Facebook className="h-5 w-5" />
            </a>
            
          </div>

          {/* CTA */}
          <div data-anim="hero-cta" className="mt-8 flex flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="flex-1 h-14 rounded-2xl text-base text-white"
            >
              <Link href="/menu">
                Menü megnyitása <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 rounded-2xl border-[var(--jungle)]/55 bg-background/10 text-base text-white hover:bg-background/20 cursor-pointer"
                >
                  Házhozszállítás
                </Button>
              </DialogTrigger>

              <DialogContent className="rounded-3xl sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    Házhozszállítás
                  </DialogTitle>
                </DialogHeader>

                <p className="mt-1 text-sm text-muted-foreground">
                  Válaszd ki a platformot:
                </p>

                <div className="mt-6 grid gap-3">
                  <Button asChild size="lg" className="rounded-xl" disabled>
                    <a href="#" target="_blank" rel="noreferrer">
                      Wolt (Hamarosan!)
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl"
                    disabled
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      Foodora (Hamarosan!)
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div
            data-anim="hero-stats"
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            <div className="min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock3 className="h-4 w-4 shrink-0" />
                <span className="truncate">Nyitvatartás</span>
              </div>
              <div className="mt-1 text-xs truncate">H–V 11:30–20:00</div>
            </div>

            <div className="min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">1165 Budapest</span>
              </div>
              <div className="mt-1 text-xs truncate">Bökényföldi út 6</div>
            </div>

            <div className="hidden sm:grid min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="text-sm font-semibold truncate">Kapcsolat</div>
              <div className="mt-1 text-xs truncate">+36 70 590 9421</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
