import { advancedServices } from "@/data/advanced-services-content";
import { learnGuides } from "@/data/learn-content";

const STATIC_PAGE_LABELS: Record<string, string> = {
  "/": "Homepage",
  "/about": "Our Story",
  "/advanced-services": "Advanced Services",
  "/contact": "Contact",
  "/events": "Events",
  "/goals": "Goals",
  "/learn": "Learn",
  "/plans": "Plans",
  "/services": "Services",
  "/services/self-directed-401k": "Self-Directed 401(k)",
  "/services/self-directed-ira": "Self-Directed IRA",
  "/start": "Find My Plan",
  "/work-with-us": "Work With Us",
};

// Human-readable label for the page a contact form was submitted from,
// falling back to the raw path for any route not covered above.
export function getPageLabel(pathname: string): string {
  const staticLabel = STATIC_PAGE_LABELS[pathname];
  if (staticLabel) return staticLabel;

  const learnMatch = pathname.match(/^\/learn\/([^/]+)$/);
  if (learnMatch) {
    const guide = learnGuides.find((g) => g.slug === learnMatch[1]);
    if (guide) return guide.title;
  }

  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = advancedServices.find((s) => s.slug === serviceMatch[1]);
    if (service) return service.title;
  }

  return pathname;
}
