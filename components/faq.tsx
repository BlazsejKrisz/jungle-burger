import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PLACE = {
  address: "1165 Budapest, Bökényföldi út 6",
  mapQuery: "1165 Budapest, Bökényföldi út 6",
};

export default function Faq() {
  return (
    <section data-anim="section" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* TOP GRID */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* FAQ */}
          <Card className="rounded-3xl border-3 border-border bg-card backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">GYIK</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="a1">
                  <AccordionTrigger>Van vegetáriánus opció?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Igen — van tálunk is és hamburgerünk is.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a2">
                  <AccordionTrigger>Van parkolás a közelben?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Igen, az üzlet közelében sok szabad parkolóhely van.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a3">
                  <AccordionTrigger>Elfogadtok SZÉP-kártyát?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Igen, SZÉP-kártyával is tudsz fizetni.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a4">
                  <AccordionTrigger>
                    Hozhatok magammal kisállatot?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Igen, kisállatbarát hely vagyunk.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a5">
                  <AccordionTrigger>Kell asztalt foglalni?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nem szükséges asztalt foglalni.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="a6">
                  <AccordionTrigger>Van házhozszállítás?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Hamarosan elérhető lesz.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[2rem] border-3 border-border bg-card/60 p-6 backdrop-blur">
            <div
              data-anim="glow"
              className="pointer-events-none absolute -top-14 right-0 h-64 w-64 rounded-full bg-white/20 blur-3xl"
            />
            <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-white/14 blur-3xl" />

            <div className="relative">
              <h3 className="text-xl font-semibold tracking-tight">
                Nézd meg a menüt — és válassz kedvencet.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kattints, nézelődj, inspirálódj. Ez a site a hangulatról és az
                ajánlatról szól.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl px-8 text-base font-semibold"
                >
                  <Link href="/menu">Menü megnyitása</Link>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-2xl px-8 text-base font-semibold border-border"
                    >
                      Házhozszállítás
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="rounded-3xl sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-lg font-semibold">
                        Házhozszállítás
                      </DialogTitle>
                    </DialogHeader>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Válaszd ki, melyik platformon rendelnél:
                    </p>

                    <div className="mt-6 grid gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="rounded-2xl text-base font-semibold"
                        disabled
                      >
                        <a
                          href="https://wolt.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Wolt (Hamarosan!)
                        </a>
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="rounded-2xl text-base font-semibold"
                        disabled
                      >
                        <a
                          href="https://foodora.hu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Foodora (Hamarosan!)
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">Nyitvatartás</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    H–V 11:30–20:00
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">Helyszín</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    1165 Budapest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <Card className="mt-24 overflow-hidden rounded-3xl border-3 border-border bg-card">
          <div className="p-4">
            <div className="text-sm font-semibold">Hol találsz minket</div>
            <div className="mt-1 text-xs text-muted-foreground">
              {PLACE.address}
            </div>
          </div>

          <div className="relative h-[320px] w-full sm:h-[380px]">
            <iframe
              title="Google Maps"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                PLACE.mapQuery
              )}&output=embed`}
            />
          </div>
        </Card>

        {/* <p className="mt-10 text-center text-xs text-muted-foreground">
          Jungle Burger • modern street-food • Budapest
        </p> */}
      </div>
    </section>
  );
}
