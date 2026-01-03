import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import type { MenuItem } from "@/lib/types";
import { ALLERGENS } from "@/lib/constants";

function Ft({ value }: { value: number }) {
  return <span>{value.toLocaleString("hu-HU")} Ft</span>;
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group overflow-hidden rounded-3xl border-3 border-border bg-card text-card-foreground backdrop-blur">
      {/* IMAGE AREA */}
      <div className="relative h-52 w-full">
        {/* scale wrapper */}
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.04]">
          <Image src={item.imageSrc} alt={`${item.name} kép`} fill className="object-cover" />

          {/* overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        {/* Badge (doesn't scale) */}
        <div className="absolute bottom-3 left-3 z-10">
          {item.badge ? (
            <Badge variant="secondary" className="rounded-xl">
              {item.badge}
            </Badge>
          ) : null}
        </div>

        {/* Price (token-based, no white pill) */}
        <div className="absolute bottom-3 right-3 z-10 rounded-2xl border border-border bg-card/80 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur">
          <Ft value={item.price} />
        </div>
      </div>

      {/* TEXT */}
      <CardContent className="px-6 pb-6 pt-5">
        <div className="text-lg font-semibold leading-snug">{item.name}</div>

        <div className="mt-2 text-sm text-muted-foreground">{item.desc}</div>

        {/* Allergens */}
        {item.allergens?.length ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.allergens.map((a) => {
              const meta = ALLERGENS[a];
              if (!meta) return null;
              const Icon = meta.Icon;

              return (
                <span
                  key={a}
                  title={meta.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-border bg-card/70 text-foreground backdrop-blur"
                >
                  <Icon className="h-4 w-4 text-[var(--jungle)]" />
                </span>
              );
            })}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
