// components/menu-hero.tsx
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MenuHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border">
        {/* background image */}
        <div className="relative h-42 w-full sm:h-52">
          <Image
            src="https://aehgjym3dpgi0paj.public.blob.vercel-storage.com/junglesmash%20%E2%80%93%20nagy.jpeg" // swap to a real menu hero image
            alt="Étlap / Menü"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Étlap / Menü
            </h1>
            <div className="mt-3 flex items-center gap-3">
             {/* <Badge className="bg-[var(--jungle)] text-white">Signature</Badge>
               <Button
                asChild
                variant="outline"
                className="h-9 rounded-xl border bg-white/10 text-white hover:bg-white/15"
              >
                <Link href="#smash">Ugrás a burgerekhez</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
