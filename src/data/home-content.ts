export const heroCapabilities = [
  { icon: "landmark", label: "Self-directed plans" },
  { icon: "layers", label: "Advanced structures" },
  { icon: "book-open", label: "Knowledge with purpose" },
  { icon: "compass", label: "A team behind the work" },
] as const;

export const pathways = [
  {
    number: "01",
    title: "Self-Directed 401(k)",
    description: "For business owners building a plan around their own structure.",
    href: "/services/self-directed-401k",
    // Real photo path once provided — falls back to an abstract
    // placeholder until then. See ImagePlaceholder.
    image: "/pathways/401k.jpg",
    placeholderVariant: "a" as const,
  },
  {
    number: "02",
    title: "Self-Directed IRA",
    description: "For individual investors ready to move beyond a conventional menu.",
    href: "/services/self-directed-ira",
    image: "/pathways/ira.jpg",
    placeholderVariant: "b" as const,
  },
  {
    number: "03",
    title: "Existing Plan Support",
    description: "For accounts already in place that need review or coordination.",
    href: "/services/existing-plan-support",
    image: "/pathways/existing-plan.jpg",
    placeholderVariant: "c" as const,
  },
  {
    number: "04",
    title: "Advanced Planning",
    description: "For trusts, entities, and transactions beyond the basics.",
    href: "/advanced-services",
    image: "/pathways/advanced-planning.jpg",
    placeholderVariant: "d" as const,
  },
];

export const assetClasses = [
  {
    number: "01",
    label: "Real Estate",
    description: "Direct ownership opportunities.",
    href: "/services/real-estate-transactions",
    image: "/investments/real-estate.jpg",
    placeholderVariant: "a" as const,
  },
  {
    number: "02",
    label: "Private Lending",
    description: "Put capital to work in your community.",
    href: "/services/private-lending",
    image: "/investments/private-lending.jpg",
    placeholderVariant: "b" as const,
  },
  {
    number: "03",
    label: "Precious Metals",
    description: "A time-tested asset class in your plan.",
    href: "/learn",
    image: "/investments/precious-metals.jpg",
    placeholderVariant: "c" as const,
  },
  {
    number: "04",
    label: "Digital Assets",
    description: "A modern asset class with a place in retirement.",
    href: "/learn",
    image: "/investments/digital-assets.jpg",
    placeholderVariant: "d" as const,
  },
  {
    number: "05",
    label: "Stocks & Bonds",
    description: "A flexible foundation for your strategy.",
    href: undefined,
    image: "/investments/stocks-bonds.jpg",
    placeholderVariant: "e" as const,
  },
];

export const advancedServices = [
  {
    number: "01",
    title: "Trusts & Inheritance",
    description: "CRTs, estate planning, GRATs, and powers of appointment.",
    href: "/advanced-services/trusts",
  },
  {
    number: "02",
    title: "Entities & Transactions",
    description: "Preferred LLCs, ownership interests, and real estate structures.",
    href: "/advanced-services/transactions",
  },
  {
    number: "03",
    title: "Roth & Contribution Planning",
    description: "The accounts, timing, and tax questions behind a move.",
    href: "/advanced-services/roth",
  },
  {
    number: "04",
    title: "Protection & Plan Responsibilities",
    description: "Asset ownership, transaction review, and the details that matter.",
    href: "/advanced-services/protection",
  },
];

export const standardSteps = [
  {
    number: "01",
    title: "The Conversation",
    description: "Tell the team what you want to accomplish and what is already in place.",
  },
  {
    number: "02",
    title: "The Right Scope",
    description: "The appropriate professional reviews the matter. Your proposal defines the work and fee.",
  },
  {
    number: "03",
    title: "The Follow-Through",
    description: "Confirm your engagement and required funding. Follow the work with an assigned team.",
  },
];

export const libraryRows = [
  {
    number: "01",
    category: "The Foundation",
    title: "Start With the Right Plan.",
    meta: "Getting started · 6 min read",
    link: "Your plan, from paperwork to practice",
  },
  {
    number: "02",
    category: "The Opportunity",
    title: "A Different Way to Think Property.",
    meta: "Real estate · 9 min read",
    link: "Before a retirement plan buys property",
  },
  {
    number: "03",
    category: "The Bigger Picture",
    title: "Ask the Questions That Matter.",
    meta: "Advanced case studies · 9 min read",
    link: "Evaluate an advanced planning idea",
  },
];

export const checklistItems = [
  "The account and its features",
  "The people and proposed transaction",
  "The documents and open questions",
  "The help needed to move forward",
];

export const faqItems = [
  {
    question: "Where should I start?",
    answer:
      "Start with the account you already have, or the goal you're working toward. The team reviews your current setup, the assets you're interested in, and what's involved before recommending a next step.",
  },
  {
    question: "What does self-directed mean?",
    answer:
      "A self-directed 401(k) or IRA lets the account hold a wider range of assets — like real estate or private lending — instead of a conventional menu of stocks, bonds, and funds, within the rules that apply to that account type.",
  },
  {
    question: "Is Roth Academy a law firm or investment custodian?",
    answer:
      "No. Roth Academy provides education, onboarding, administrative support, and implementation coordination. It is not a law firm, investment adviser, or custodian. Legal work and individual professional advice require a separate engagement with the appropriate licensed professional.",
  },
  {
    question: "Do I need a retirement plan to use advanced services?",
    answer:
      "No. Advanced services like trusts, entity structuring, and transaction coordination are available on their own — a self-directed 401(k) or IRA is not required for every engagement.",
  },
  {
    question: "How do I speak with the team?",
    answer:
      "Use the contact form or the phone number and email in the footer. Tell the team a bit about what you're trying to accomplish so the conversation starts in the right place.",
  },
];
