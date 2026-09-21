import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const paths = [
  {
    title: "401(k)",
    href: "/services/self-directed-401k",
    description: "For active employer plans and solo entrepreneurs building their own structure.",
  },
  {
    title: "IRA",
    href: "/services/self-directed-ira",
    description: "For individual retirement accounts ready to move beyond a conventional menu.",
  },
];

export function TwoWaysInSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20">
      <div className="container-brand">
        <Eyebrow>Two starting points</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Two Ways In.
          <br />
          <span className="text-r-gold">A World Beyond.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group rounded-sm border border-r-line bg-r-panel p-8 transition-colors hover:border-r-gold"
            >
              <h3 className="text-3xl">{path.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-r-muted font-body normal-case">
                {path.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-r-gold">
                Explore
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
