// components/menu-client.tsx
import MenuHero from "@/components/menu-hero";
import MenuSection from "@/components/menu-section";
import MenuGroup from "@/components/menu-group";

import { MENU_GROUPS } from "@/lib/constants";
import AllergenSection from "./allergen-section";

export default function MenuPage() {
  return (
    <main className="pb-16">
      <MenuHero />

      <div className="mx-auto w-full max-w-8xl px-4 sm:px-6">
        <div className="mt-8 max-w-6xl justify-self-center rounded-3xl border bg-card p-6">
          <div className="text-sm font-semibold">A menüről</div>
          <p className="mt-2 text-sm text-muted-foreground">
A menü nálunk nem véletlenül ilyen.
A kedvenceinket raktuk össze — azokat, amiket mi is szívesen eszünk újra meg újra.
Friss alapanyagok, karakteres ízek, laktató burgerek.
Nincs túlgondolva, nincs felesleges kör — csak jó kaják, őszintén.          </p>
        </div>

        <div className="mt-10 space-y-14">
          {MENU_GROUPS.map((g) =>
            // If you want: render BURGEREK as a big group, others can still be simple sections
            g.id === "burgerek" ? (
              <MenuGroup key={g.id} group={g} />
            ) : (
              <section key={g.id} className="space-y-12">
                {/* For non-burger groups, just render their sections as normal sections */}
                {g.sections.map((sec) => (
                  <MenuSection
                    key={sec.id}
                    id={`${g.id}-${sec.id}`}
                    title={sec.title}
                    subtitle={sec.subtitle}
                    items={sec.items}
                  />
                ))}
              </section>
            )
          )}
        </div>
      </div>

      <AllergenSection />
    </main>
  );
}
