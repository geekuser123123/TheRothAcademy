export const siteConfig = {
  name: "Roth Academy",
  headline: "Own Your Next Move",
  description:
    "Self-directed 401(k)s, self-directed IRAs, and advanced planning. Bring your ambition. Build the right foundation.",
  url: "https://therothacademy.com",
  email: "access@therothacademy.com",
  phone: "(888) 988-8509",
  phoneTel: "+18889888509",
  disclaimer:
    "Roth Academy provides education, onboarding, administrative support, and implementation coordination. It is not a law firm, investment adviser, or custodian. Individual professional advice and legal work require the appropriate separate engagement. No investment, tax treatment, or financial result is guaranteed.",
};

export const mainNav = [
  { label: "401(k)", href: "/services/self-directed-401k" },
  { label: "IRA", href: "/services/self-directed-ira" },
  { label: "Advanced services", href: "/advanced-services" },
  { label: "Learn", href: "/learn" },
  { label: "Events", href: "/events" },
  { label: "Our story", href: "/about" },
];

export const footerNav = {
  startHere: {
    title: "Start Here",
    links: [
      { label: "Self-Directed 401(k)", href: "/services/self-directed-401k" },
      { label: "Self-Directed IRA", href: "/services/self-directed-ira" },
      { label: "Advanced services", href: "/advanced-services" },
      { label: "All services", href: "/services" },
      { label: "Find my starting point", href: "/goals" },
    ],
  },
  academy: {
    title: "The Academy",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Knowledge library", href: "/learn" },
      { label: "Explore by goal", href: "/goals" },
      { label: "Events & workshops", href: "/events" },
      { label: "How we work", href: "/work-with-us" },
    ],
  },
  nextStep: {
    title: "Your Next Step",
    links: [
      { label: "Contact the team", href: "/contact" },
    ],
  },
};

// Features referenced in navigation but not yet built. Rendered as
// disabled, non-interactive items with a "Coming soon" badge rather
// than a dead or placeholder link.
export const comingSoon = [
  { label: "Client login" },
  { label: "Tax Academy" },
];

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
];
