// components/footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer({ logoSrc = "/jungle-logo.png" }: { logoSrc?: string }) {
  return (
    <footer className="border-t border-[var(--jungle)]/25">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-muted-foreground sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            
            <div className="text-xs">
              <div className="text-foreground">Jungle Burger</div>
              <div>© {new Date().getFullYear()} • Minden jog fenntartva</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <Link className="hover:text-foreground" href="/rolunk">
              Rólunk
            </Link>
            <Link className="hover:text-foreground" href="/menu">
              Menü
            </Link>
            <span className="opacity-60">Adatvédelem</span>
            <span className="opacity-60">ÁSZF</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
