import Link from "next/link";

export function ClosingStatement() {
  return (
    <section className="border-t border-r-line bg-r-bg py-24">
      <div className="container-brand flex items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">
            The next move is yours.
          </p>
          <h2 className="mt-4 text-6xl md:text-8xl">
            Make It <span className="text-r-gold">Count.</span>
          </h2>
        </div>
        <Link
          href="/contact"
          aria-label="Start a conversation"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-r-gold text-r-gold transition-colors hover:bg-r-gold hover:text-r-bg md:h-20 md:w-20"
        >
          <span aria-hidden className="text-2xl">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
