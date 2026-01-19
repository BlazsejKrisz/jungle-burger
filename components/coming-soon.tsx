export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* LOGO */}
        <img
          src="/jungle-logo.png"
          alt="Jungle Burger"
          className="h-50 w-auto"
        />

        {/* TEXT */}
        <div className="text-xl font-semibold tracking-wide text-[var(--jungle)]">
          HAMAROSAN
        </div>
      </div>
    </main>
  );
}
