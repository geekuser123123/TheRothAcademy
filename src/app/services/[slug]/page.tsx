import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceDetailBody } from "@/components/services/ServiceDetailBody";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceDetailCta } from "@/components/services/ServiceDetailCta";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ClosingStatement } from "@/components/home/ClosingStatement";
import {
  advancedServices,
  advancedServiceCategories,
  serviceEngagementSteps,
} from "@/data/advanced-services-content";

const cardLabelByCategory = Object.fromEntries(
  advancedServiceCategories.map((category) => [category.key, category.cardLabel]),
);

export function generateStaticParams() {
  return advancedServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = advancedServices.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function AdvancedServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = advancedServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const category = advancedServiceCategories.find((item) => item.key === service.category)!;
  const categoryHref = `/services?filter=${service.category}`;

  if (service.detail) {
    const detail = service.detail;
    const related = advancedServices
      .filter((item) => item.category === service.category && item.slug !== service.slug)
      .slice(0, 3);

    return (
      <>
        <ServiceDetailHero
          categoryLabel={category.cardLabel}
          categoryHref={categoryHref}
          title={service.title}
          description={service.description}
          intro={detail.heroIntro}
          badgeLabel={
            service.badge === "Specialist review"
              ? "Specialist Review"
              : service.badge === "Defined service"
                ? "Defined Service"
                : "Scoped Professional Work"
          }
          serviceTitle={service.title}
        />

        <ServiceDetailBody service={service} detail={detail} />

        <ServiceProcess
          eyebrow={serviceEngagementSteps.eyebrow}
          heading={serviceEngagementSteps.heading}
          steps={serviceEngagementSteps.steps}
          columns={3}
        />

        <ServiceFaq eyebrow="Before Your Next Move" heading={["Before", "We Begin."]} items={detail.faq} />

        <RelatedServices categoryLabel={category.cardLabel} categoryHref={categoryHref} services={related} />

        <ClosingStatement />
      </>
    );
  }

  return (
    <>
      <section className="border-b border-r-line bg-r-stripe-2 pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="container-brand max-w-3xl">
          <Link
            href="/advanced-services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-muted transition-colors hover:text-r-gold"
          >
            <ArrowLeft size={14} aria-hidden />
            Back to advanced services
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-2xl font-heading text-r-gold">{service.number}</span>
            <span className="rounded-full border border-r-gold/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-r-gold">
              {cardLabelByCategory[service.category]}
            </span>
          </div>

          <h1
            style={{
              marginTop: 35,
              fontSize: "clamp(76px, 10.8vw, 146px)",
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
            }}
          >
            {service.title}
          </h1>
          <p className="mt-6 max-w-lg text-sm text-r-muted font-body normal-case">{service.description}</p>

          <span className="mt-6 block text-xs uppercase tracking-[0.15em] text-r-muted">{service.badge}</span>
        </div>
      </section>

      <article className="border-b border-r-line bg-r-bg py-16 md:py-20">
        <div className="container-brand max-w-3xl">
          {service.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-base leading-relaxed text-r-muted font-body normal-case last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <ServiceDetailCta serviceTitle={service.title} />

      <section className="bg-r-bg py-16">
        <div className="container-brand max-w-3xl">
          <Link
            href="/advanced-services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to advanced services
          </Link>
        </div>
      </section>
    </>
  );
}
