// components/featured-menu.tsx
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MenuCard from "@/components/menu-card";

import type { FeaturedItem, MenuItem } from "@/lib/types";

function toMenuItem(item: FeaturedItem): MenuItem {
  return {
    ...item,
    // MenuCard expects `badge`, FeaturedItem has `tag`
    badge: item.tag ?? "Best seller",
  } as MenuItem;
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
            <Link
              key={item.name}
              href="/menu"
              className="block"
              aria-label={`${item.name} megnyitása a menüben`}
            >
              <div data-anim="card">
                <MenuCard item={toMenuItem(item)} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
