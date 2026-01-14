// components/menu-section.tsx
import MenuCard from "@/components/menu-card";
import type { MenuItem } from "@/lib/types";

export default function MenuSection({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {/* Section header (like the reference orange bars, but jungle style) */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-md md:text-xl font-semibold tracking-wide text-[var(--jungle)]">
            {title}
          </div>
          {/* {subtitle ? (
            <div className="mt-1 text-xs md:text-md text-muted-foreground">{subtitle}</div>
          ) : null} */}
        </div>

      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
