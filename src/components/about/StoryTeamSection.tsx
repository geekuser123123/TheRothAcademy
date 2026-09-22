import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function StoryTeamSection({
  kicker,
  heading,
  paragraphs,
  roles,
}: {
  kicker: string;
  heading: string[];
  paragraphs: string[];
  roles: { tag: string; name: string; description: string }[];
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-12 grid gap-8 border-t border-r-line pt-10 sm:grid-cols-3 sm:gap-6">
          {roles.map((role) => (
            <li key={role.name}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">{role.tag}</span>
              <h3 className="mt-2 text-2xl">{role.name}</h3>
              <p className="mt-2 text-sm text-r-muted font-body normal-case">{role.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
