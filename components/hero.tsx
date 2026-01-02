// components/hero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

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
            className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            Jungle Burger.
            <br />
            <span className="text-[var(--jungle)]">Nagy ízek, tiszta döntés.</span>
          </h1>

          <p data-anim="hero-sub" className="mt-4 max-w-xl text-sm text-white/80">
            3 best-sellerrel kezdünk: smash, crispy chicken, veggie. Letisztult menü, erős vizuál — egy landing, ami
            azonnal “premium”-nek hat.
          </p>

          {/* CTA — ONE LINE on mobile */}
          <div data-anim="hero-cta" className="mt-6 flex flex-row gap-3">
            <Button asChild className="flex-1 rounded-xl">
              <Link href="/menu">
                Menü megnyitása <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="flex-1 rounded-xl border-[var(--jungle)]/55 bg-background/10 text-white hover:bg-background/20"
            >
              <Link href="/rolunk">Rólunk</Link>
            </Button>
          </div>

          {/* Stats — same size + one row on mobile */}
          <div
            data-anim="hero-stats"
            className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3"
          >
            <div className="min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock3 className="h-4 w-4 shrink-0" />
                <span className="truncate">Nyitvatartás</span>
              </div>
              <div className="mt-1 text-xs truncate">H–V 11:00–22:00</div>
            </div>

            <div className="min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">Helyszín</span>
              </div>
              <div className="mt-1 text-xs truncate">Budapest</div>
            </div>

            <div className="min-w-0 rounded-3xl bg-[var(--jungle)] p-4 text-white">
              <div className="text-sm font-semibold truncate">Valami még ide</div>
              <div className="mt-1 text-xs truncate">talán socialek</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
