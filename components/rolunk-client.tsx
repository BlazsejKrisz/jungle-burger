import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PLACE = {
  mapQuery: "Budapest Jungle Burger",
};

export default function AboutPageContent() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Rólunk</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Jungle Burger = nagy ízek, letisztult menü, erős vizuál. A cél: gyors döntés, jó élmény, semmi túlbonyolítás.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* TEXT */}
        <Card className="rounded-3xl border-3 bg-card">
          <CardHeader>
            <CardTitle className="text-base">A koncepció</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Smash, crispy chicken, veggie — pár signature kedvenc, amik gyorsan választást adnak. Nincs zaj, csak
              lényeg.
            </p>
            <p>
              A Jungle vibe: friss, modern, kicsit merész. Brand-szín dominál, a tartalom pedig tiszta, fehér kártyákon
              ül — pont ezért “premium”.
            </p>
            <p className="text-xs">
              *Ez placeholder szöveg — írok hozzá “valódi” verziót is, ha megírod a sztorit (mióta, hol, mi a special).
            </p>
          </CardContent>
        </Card>

        {/* IMAGES */}
        <div className="grid gap-6">
          <Card className="overflow-hidden rounded-3xl border-3 bg-card">
            <div className="relative h-56 w-full">
              <Image src="/burger-image.jpg" alt="Jungle Burger kép 1" fill className="object-cover" />
            </div>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-3 bg-card">
            <div className="relative h-56 w-full">
              <Image src="/heropl.jpg" alt="Jungle Burger kép 2" fill className="object-cover" />
            </div>
          </Card>
        </div>
      </div>

      {/* MAP */}
      <Card className="mt-8 overflow-hidden rounded-3xl border-3 bg-card">
        <div className="p-4">
          <div className="text-sm font-semibold">Hol találsz minket</div>
          <div className="mt-1 text-xs text-muted-foreground">
            (placeholder — cseréld majd pontos címre)
          </div>
        </div>

        <div className="relative h-[360px] w-full">
          <iframe
            title="Google Maps"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(PLACE.mapQuery)}&output=embed`}
          />
        </div>
      </Card>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Jungle Burger • modern street-food • Budapest
      </p>
    </section>
  );
}
