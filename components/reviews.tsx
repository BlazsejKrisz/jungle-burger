// components/reviews.tsx
import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { Review } from "@/lib/types";

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section data-anim="section" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--jungle)]/25 bg-muted/20 p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Nem kell túlbeszélni.
              <br />
              <span className="text-[var(--jungle)]">Csak működik.</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              A koncepció: nagy ízek, modern megjelenés, gyors döntés. Ez a site egy clean landing — menü + vibe + infó.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl border border-[var(--jungle)]/25 bg-background/70 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-[var(--jungle)]">★</span> 4.8/5 (placeholder)
                </div>
                <div className="mt-1 text-xs text-muted-foreground">értékelés a vendégektől</div>
              </div>

              <div className="rounded-3xl border border-[var(--jungle)]/25 bg-background/70 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Mobil-first</div>
                <div className="mt-1 text-xs text-muted-foreground">tiszta kártyák + átlátható tartalom</div>
              </div>
            </div>
          </div>

          <div data-anim="grid" className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} data-anim="card" className="rounded-3xl border-[var(--jungle)]/25">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="grid h-8 w-8 place-items-center rounded-2xl bg-[var(--jungle)]/12 text-sm font-bold text-foreground">
                      {r.name.slice(0, 1)}
                    </span>
                    {r.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  “{r.text}”
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[var(--jungle)]" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
