// components/featured-menu.tsx
"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import MenuCard from "@/components/menu-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Menü kedvencek
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              3 best-seller — letisztult kártyák, erős vizuál.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-jungle cursor-pointer"
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
                  <Button asChild size="lg" className="rounded-xl">
                    <a href="#" target="_blank" rel="noreferrer">
                      Wolt (placeholder)
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl"
                  >
                    <a href="#" target="_blank" rel="noreferrer">
                      Foodora (placeholder)
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button asChild size="lg" className="h-12 rounded-2xl cursor-pointer">
              <Link href="/menu">Teljes menü</Link>
            </Button>
          </div>
        </div>

        <div
          data-anim="grid"
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
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
