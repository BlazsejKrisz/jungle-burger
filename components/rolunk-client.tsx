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
       
      </div>

      <div className="grid gap-6">
        {/* TEXT */}
        <Card className="rounded-3xl border-3 bg-card">
          <CardHeader>
            <CardTitle className="text-base">A Jungle Burger sztorija</CardTitle>
          </CardHeader>
         <CardContent className="space-y-4 text-sm text-muted-foreground">
  <p>
    A Jungle Burger egy baráti beszélgetésből született – meg persze abból,
    hogy egyszerűen imádjuk a jó hamburgereket.
    Először csak egy ötlet volt, aztán jött egy lehetőség,
    amire nem lehetett nemet mondani.
  </p>

  <p>
    Egy olyan helyet szerettünk volna létrehozni,
    ami laza, hangulatos, mégis mindenki számára otthonos.
    Ahol jó leülni, jó enni,
    és ahová szívesen visszatérsz.
    Legyen szó egy gyors ebédről vagy egy baráti összejövetelről,
    a Jungleben mindig lesz helyed.
  </p>

  <p>
    A dzsungel törvénye nálunk is érvényes:
    friss alapanyagok, vad ízek
    és laktató burgerek uralják a tálat.
    Nincs túlbonyolítás —
    minden falatban ott az igazi dzsungelélmény.
  </p>

  <p className="pt-2 font-medium text-foreground">
    A Jungle Burger egy érzés.
    Laza, vagány,
    és olyan, hogy amikor elmész,
    már azon gondolkodsz, mikor jössz vissza.
  </p>
</CardContent>

        </Card>

        {/* IMAGES */}
       
      </div>

      {/* MAP */}
      <Card className="mt-8 overflow-hidden rounded-3xl border-3 bg-card">
        <div className="p-4">
          <div className="text-sm font-semibold">Hol találsz minket</div>
          
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

      {/* <p className="mt-10 text-center text-xs text-muted-foreground">
        Jungle Burger • modern street-food • Budapest
      </p> */}
    </section>
  );
}
