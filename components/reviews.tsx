import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Review } from "@/lib/types";

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section data-anim="section" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border-3 border-border bg-card/60 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold tracking-tight">
              Nem kell túlbeszélni.
              <br />
              <span className="text-[var(--jungle)]">Csak működik.</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
 A vendégeink szerint a Jungle Burger pontosan az, aminek látszik.
  Jó ízek, korrekt adagok, laza hangulat.
  Beülsz, választasz, eszel — és legközelebb is visszajössz.            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="text-[var(--jungle)]">★</span> 4.8/5 
                </div>
                <div className="mt-1 text-xs text-muted-foreground">értékelés a vendégektől</div>
              </div>

              <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                <div className="text-sm font-semibold">Gyere és próbáld ki te is!</div>
                <div className="mt-1 text-xs text-muted-foreground">Nem fogsz csalódni!</div>
              </div>
            </div>
          </div>

          <div data-anim="grid" className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <Card
                key={r.name}
                data-anim="card"
                className="rounded-3xl border-3 border-border bg-card text-card-foreground backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    
                    {r.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  “{r.text}”
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-(--jungle) fill-(--jungle)" />
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
