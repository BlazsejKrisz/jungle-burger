"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch: render a stable placeholder until mounted
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-xl border-[var(--jungle)]/35">
        <span className="sr-only">Téma váltás</span>
      </Button>
    );
  }

  const current = (theme === "system" ? resolvedTheme : theme) ?? "light";
  const isDark = current === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-xl border-[var(--jungle)]/35"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Téma váltás"
      title="Téma váltás"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
