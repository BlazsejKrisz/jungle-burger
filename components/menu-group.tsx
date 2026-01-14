  // components/menu-group.tsx
import { Card } from "@/components/ui/card";
import MenuSection from "@/components/menu-section";
import type { MenuGroup as MenuGroupType } from "@/lib/constants";

function Ft({ value }: { value: number }) {
  return <span>{value.toLocaleString("hu-HU")} Ft</span>;
}

export default function MenuGroup({ group }: { group: MenuGroupType }) {
  return (
    <section id={group.id} className="scroll-mt-24">
      {/* BIG GROUP TITLE */}
      {/* <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-2xl md:text-4xl font-black tracking-tight">
            {group.title}
          </div>
          {group.subtitle ? (
            <div className="mt-1 text-sm text-muted-foreground">{group.subtitle}</div>
          ) : null}
        </div>

        <div className="h-[2px] w-full sm:w-56 rounded-full bg-[var(--jungle)]/40" />
      </div> */}

      {/* INNER SECTIONS */}
      <div className="space-y-12">
        {group.sections.map((sec) => (
          <MenuSection
            key={sec.id}
            id={`${group.id}-${sec.id}`}
            title={sec.title}
            subtitle={sec.subtitle}
            items={sec.items}
          />
        ))}
      </div>

      {/* EXTRAS (plain text but stylish at bottom of group) */}
      {group.extras?.items?.length ? (
        <Card className="mt-10 rounded-3xl border bg-card p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-lg md:text-xl font-bold tracking-wide">
              {group.extras.title}
            </div>

            {group.extras.note ? (
              <div className="text-sm text-muted-foreground">{group.extras.note}</div>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {group.extras.items.map((x) => (
              <span
                key={x.name}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/40 px-3 py-1 text-sm font-medium text-foreground backdrop-blur"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--jungle)]" />
                <span>{x.name}</span>
                {typeof x.price === "number" ? (
                  <span className="text-muted-foreground">• <Ft value={x.price} /></span>
                ) : null}
              </span>
            ))}
          </div>
        </Card>
      ) : null}
    </section>
  );
}
