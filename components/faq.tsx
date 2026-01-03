import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section data-anim="section" className="py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border-3 border-border bg-card text-card-foreground backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">GYIK</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="a1">
                  <AccordionTrigger>Van vegetáriánus opció?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Igen, a Veggie Green fix opció. A menü később bővíthető.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>Mennyire csípős a Jungle szósz?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Enyhén pikáns, inkább krémes és karakteres.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>Van rendelés a site-on?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nem — ez egy landing + menü oldal. Később lehet linkelni külső platformra, ha kell.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="relative overflow-hidden rounded-[2rem] border-3 border-border bg-card/60 p-6 backdrop-blur">
            <div data-anim="glow" className="pointer-events-none absolute -top-14 right-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-white/14 blur-3xl" />

            <div className="relative">
              <h3 className="text-xl font-semibold tracking-tight">Nézd meg a menüt — és válassz kedvencet.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kattints, nézelődj, inspirálódj. Ez a site a hangulatról és az ajánlatról szól.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-xl">
                  <Link href="/menu">Menü</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-border">
                  <Link href="/rolunk">Rólunk</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">Nyitvatartás</div>
                  <div className="mt-1 text-xs text-muted-foreground">H–V 11:00–22:00 (placeholder)</div>
                </div>
                <div className="rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">Helyszín</div>
                  <div className="mt-1 text-xs text-muted-foreground">Budapest (placeholder)</div>
                </div>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                *Ha megvan a valódi logo + fotók, ettől a layouttól azonnal “premium” lesz.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">Jungle Burger • modern street-food • Budapest</p>
      </div>
    </section>
  );
}
