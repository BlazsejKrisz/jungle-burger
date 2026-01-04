"use client";

import * as React from "react";
import { Phone, MapPin, Clock3, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PLACE = {
  name: "Jungle Burger",
  phone: "+36 70 590 9421",
  email: "kapcsolat@jungleburger.hu",
  address: "1165 Budapest, Bökényföldi út 6",
  hours: "H–V 11:00–20:00",
  mapQuery: "1165 Budapest Bökényföldi út 6",
};

export default function ContactClient() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setName("");
      setEmail("");
      setMessage("");
      setStatus("ok");
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Kapcsolat</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Kérdés, együttműködés, feedback? Írj ránk — gyorsan reagálunk.
        </p>
      </div>

      {/* Desktop: two cards on one row, same size. Map below. Mobile unchanged. */}
      <div className="grid gap-6">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {/* FORM */}
          <Card className="rounded-3xl border-3 bg-card h-full">
            <CardHeader>
              <CardTitle className="text-base">Írj üzenetet</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-3">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Név</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Pl. Kovács Dóra"
                    className="rounded-xl"
                    autoComplete="name"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nev@email.com"
                    type="email"
                    className="rounded-xl"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-medium">Üzenet</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Írd le röviden, miben segíthetünk…"
                    className="min-h-[140px] rounded-xl"
                    required
                  />
                </div>

                <Button type="submit" className="mt-2 rounded-xl" disabled={pending}>
                  {pending ? "Küldés..." : "Küldés"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                {status === "ok" ? (
                  <div className="mt-1 rounded-2xl border-3 border-[var(--jungle)]/25 bg-[var(--jungle)]/10 p-3 text-sm text-foreground">
                    Köszönjük! Megkaptuk az üzeneted — hamarosan válaszolunk.
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="mt-1 rounded-2xl border-3 border-destructive/30 bg-destructive/10 p-3 text-sm">
                    Hiba történt a küldés közben. Próbáld újra később.
                  </div>
                ) : null}

                <p className="text-xs text-muted-foreground">
                  *Az üzenet elküldése után automatikus visszaigazolást kapsz emailben.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* CONTACT INFO */}
          <Card className="rounded-3xl border-3 bg-card h-full">
            <CardHeader>
              <CardTitle className="text-base">Elérhetőségek</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-3 text-sm">
              <div className="flex items-start gap-3 rounded-2xl border-3 bg-background/60 p-4">
                <Phone className="mt-0.5 h-5 w-5 text-[var(--jungle)]" />
                <div>
                  <div className="font-semibold">Telefon</div>
                  <a className="text-muted-foreground hover:text-foreground" href={`tel:${PLACE.phone}`}>
                    {PLACE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-3 bg-background/60 p-4">
                <Mail className="mt-0.5 h-5 w-5 text-[var(--jungle)]" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a className="text-muted-foreground hover:text-foreground" href={`mailto:${PLACE.email}`}>
                    {PLACE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-3 bg-background/60 p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-[var(--jungle)]" />
                <div>
                  <div className="font-semibold">Cím</div>
                  <div className="text-muted-foreground">{PLACE.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-3 bg-background/60 p-4">
                <Clock3 className="mt-0.5 h-5 w-5 text-[var(--jungle)]" />
                <div>
                  <div className="font-semibold">Nyitvatartás</div>
                  <div className="text-muted-foreground">{PLACE.hours}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MAP (desktop under the two cards, mobile unchanged order) */}
        <Card className="overflow-hidden rounded-3xl border-3 bg-card">
          <div className="p-4">
            <div className="text-sm font-semibold">Térkép</div>
            <div className="mt-1 text-xs text-muted-foreground">{PLACE.address}</div>
          </div>

          <div className="relative h-[340px] w-full">
            <iframe
              title="Google Maps"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(PLACE.mapQuery)}&output=embed`}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
