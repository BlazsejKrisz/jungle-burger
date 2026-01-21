// components/menu-card.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import type { MenuItem } from "@/lib/types";
import { ALLERGENS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Ft({ value }: { value: number }) {
  return <span>{value.toLocaleString("hu-HU")} Ft</span>;
}

export default function MenuCard({
  item,
  className,
}: {
  item: MenuItem;
  className?: string;
}) {
  const hasImage = Boolean(item.imageSrc);

  return (
    <Card
      className={cn(
        hasImage
          ? "group overflow-hidden rounded-3xl border-3 border-border bg-card text-card-foreground py-0 gap-0 min-h-[360px]"
          : "group overflow-hidden rounded-3xl border-3 border-border bg-card text-card-foreground",
        className
      )}
    >
      {hasImage ? (
        /* ================= IMAGE CARD ================= */
        <div className="flex flex-1">
          {/* LEFT: TEXT */}
          <div className="flex flex-1 flex-col px-6 py-5 pt-8">
            <div className="min-w-0">
              <div className="text-lg font-semibold leading-snug">
                {item.name}
              </div>

              {item.desc ? (
                <div className="mt-8 text-sm text-muted-foreground">
                  {item.desc}
                </div>
              ) : null}
            </div>

            {/* Allergens */}
            {item.allergens?.length ? (
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                {item.allergens.map((a) => {
                  const meta = ALLERGENS[a];
                  if (!meta) return null;
                  const Icon = meta.Icon;

                  return (
                    <span
                      key={a}
                      title={`${meta.code}. ${meta.label}`}
                      className="inline-flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-2xl border border-border bg-card/70"
                    >
                      <Icon className="h-4 w-4 text-[var(--jungle)]" />
                    </span>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-1/2 border-l border-border">
            <Image
              src={item.imageSrc!}
              alt={`${item.name} kép`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <div className="absolute bottom-3 right-3 rounded-2xl border border-border bg-card/80 px-3 py-1 text-sm font-semibold backdrop-blur">
              <Ft value={item.price} />
            </div>
          </div>
        </div>
      ) : (
        /* ================= TEXT-ONLY CARD ================= */
        <>
          {/* HEADER */}
          <div className="flex items-start justify-between gap-3 border-b border-border/70 px-6 pb-4 pt-5">
            <div className="min-w-0">
              <div className="text-lg font-semibold leading-snug">
                {item.name}
              </div>
              {item.badge ? (
                <div className="mt-2">
                  <Badge variant="secondary" className="rounded-xl">
                    {item.badge}
                  </Badge>
                </div>
              ) : null}
            </div>

            <div className="shrink-0 rounded-2xl border border-border bg-card/70 px-3 py-1 text-sm font-semibold">
              <Ft value={item.price} />
            </div>
          </div>

          {/* BODY */}
          <CardContent className="px-6 pb-6 pt-4">
            {item.desc ? (
              <div className="text-sm text-muted-foreground">
                {item.desc}
              </div>
            ) : null}

            {/* Allergens for text-only cards */}
            {item.allergens?.length ? (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {item.allergens.map((a) => {
                  const meta = ALLERGENS[a];
                  if (!meta) return null;
                  const Icon = meta.Icon;

                  return (
                    <span
                      key={a}
                      title={`${meta.code}. ${meta.label}`}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-xl border border-border bg-card/70"
                    >
                      <Icon className="h-4 w-4 text-[var(--jungle)]" />
                    </span>
                  );
                })}
              </div>
            ) : null}
          </CardContent>
        </>
      )}
    </Card>
  );
}
