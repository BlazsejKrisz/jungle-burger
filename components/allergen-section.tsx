// components/allergens-section.tsx
import Image from "next/image";
import { ALLERGENS } from "@/lib/constants";

export default function AllergensSection({
  imageSrc = "/burger-image.jpg",
}: {
  imageSrc?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="mt-8 overflow-hidden rounded-3xl border">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Étlap alapanyag allergén jelölések
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Object.entries(ALLERGENS).map(([key, meta]) => {
                const Icon = meta.Icon;
                return (
                  <div key={key} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border bg-[var(--jungle)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm leading-snug">
                      {meta.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              *Az allergén információk tájékoztató jellegűek. Pontos részletekért kérdezz rá rendeléskor.
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <Image
              src={imageSrc}
              alt="Allergének"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
