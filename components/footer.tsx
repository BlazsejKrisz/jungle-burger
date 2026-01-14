import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs">
            <div className="text-foreground">Jungle Burger</div>
            <div>© {new Date().getFullYear()} • Minden jog fenntartva</div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <Link className="hover:text-foreground" href="/rolunk">
              Rólunk
            </Link>
            <Link className="hover:text-foreground" href="/menu">
              Menü
            </Link>
             <Link className="hover:text-foreground" href="/kapcsolat">
              Kapcsolat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
