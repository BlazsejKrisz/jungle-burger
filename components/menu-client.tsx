// components/menu-page.tsx
import MenuHero from "@/components/menu-hero";
import MenuSection from "@/components/menu-section";

import { MENU_CATEGORIES } from "@/lib/constants";
import AllergenSection from "./allergen-section";

export default function MenuPage() {
  return (
    <main className="pb-16">
      <MenuHero />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Optional intro block (matches the reference spacing) */}
        <div className="mt-8 rounded-3xl border bg-card p-6">
          <div className="text-sm font-semibold">Röviden</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Best-sellerek, signature szószok, letisztult választék. Itt a teljes menü — ugyanazzal a kártya UI-val, mint a landing.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-12">
          {MENU_CATEGORIES.map((cat) => (
            <MenuSection
              key={cat.id}
              id={cat.id}
              title={cat.title}
              subtitle={cat.subtitle}
              items={cat.items}
            />
          ))}
        </div>
      </div>
      <AllergenSection/>
    </main>
  );
}
