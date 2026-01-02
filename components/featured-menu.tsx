// components/featured-menu.tsx
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { FeaturedItem } from "@/lib/types";

function Ft({ value }: { value: number }) {
  return <span>{value.toLocaleString("hu-HU")} Ft</span>;
}

export default function FeaturedMenu({ items }: { items: FeaturedItem[] }) {
  return (
    <section data-anim="section" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Menü kedvencek</h2>
            <p className="mt-1 text-sm text-muted-foreground">3 best-seller — letisztult kártyák, erős vizuál.</p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline" className="rounded-xl border-jungle">
              <Link href="/rolunk">Rólunk</Link>
            </Button>
            <Button asChild className="rounded-xl">
              <Link href="/menu">Teljes menü</Link>
            </Button>
          </div>
        </div>

        <div data-anim="grid" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} data-anim="card" className="group overflow-hidden rounded-3xl border-jungle bg-jungle">
              <div className="relative">
                <Image
                  src={item.imageSrc}
                  alt={`${item.name} kép`}
                  width={1200}
                  height={800}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  {item.tag ? (
                    <Badge className="rounded-xl bg-jungle text-foreground hover:bg-[var(--jungle)]/16">
                      {item.tag}
                    </Badge>
                  ) : null}
                  <Badge variant="secondary" className="rounded-xl border border-[var(--jungle)]/20">
                    Best seller
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <div className="shrink-0 rounded-2xl border border-[var(--jungle)]/25 bg-[var(--jungle)]/10 px-3 py-1 text-sm font-semibold">
                    <Ft value={item.price} />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>

              <div className="px-6 pb-6">
                <Button asChild variant="outline" className="w-full rounded-xl border-[var(--jungle)]/35">
                  <Link href="/menu">Megnézem a menüben</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
