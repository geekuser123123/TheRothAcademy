import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HeroSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-32">
      <div className="container-brand">
        <Eyebrow>For the individual investor</Eyebrow>
        <h1 className="mt-6 text-6xl md:text-8xl">
          Own Your
          <br />
          <span className="text-r-gold">Next Move.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-r-muted font-body normal-case">
          {siteDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/start">Find my starting point</Button>
          <Button href="/contact" variant="outline">
            Start a conversation
          </Button>
        </div>
      </div>
    </section>
  );
}

const siteDescription =
  "Self-directed 401(k)s, self-directed IRAs, and advanced planning. Bring your ambition. Build the right foundation.";
