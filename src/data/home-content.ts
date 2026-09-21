export const heroCapabilities = [
  { icon: "landmark", label: "Self-directed plans" },
  { icon: "layers", label: "Advanced structures" },
  { icon: "book-open", label: "Knowledge with purpose" },
  { icon: "compass", label: "A team behind the work" },
] as const;

export const twoWaysCards = [
  {
    step: "01 / The Business Owner",
    kicker: "Self-Directed",
    title: "401(k)",
    href: "/services/self-directed-401k",
    description:
      "Build a retirement plan around your business, your ambitions, and the way you want to invest.",
    tags: ["Business-sponsored", "Plan features", "Investment flexibility"],
    cta: "Explore the 401(k)",
  },
  {
    step: "02 / The Individual Investor",
    kicker: "Self-Directed",
    title: "IRA",
    href: "/services/self-directed-ira",
    description:
      "Explore a wider investment world inside an individual retirement account, with the right provider and a clear plan.",
    tags: ["Individual account", "Traditional or Roth", "Provider coordination"],
    cta: "Explore the IRA",
  },
];

export const assetClasses = [
  {
    icon: "house",
    label: "Real Estate",
    description: "Rentals, land, and property opportunities.",
    href: "/services/real-estate-transactions",
  },
  {
    icon: "landmark",
    label: "Private Lending",
    description: "Notes, collateral, and the lender's perspective.",
    href: "/services/private-lending",
  },
  {
    icon: "coins",
    label: "Precious Metals",
    description: "Eligibility, custody, and account requirements.",
    href: "/learn",
  },
  {
    icon: "bitcoin",
    label: "Digital Assets",
    description: "Provider options, ownership, and recordkeeping.",
    href: "/learn",
  },
  {
    icon: "chart-no-axes-combined",
    label: "Stocks & Bonds",
    description: "Brokerage access within the right arrangement.",
    href: undefined,
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

export const libraryCards = [
  {
    category: "The Foundation",
    title: "Start With the Right Plan.",
    meta: "Getting started · 6 min read",
    link: "Your plan, from paperwork to practice",
    highlight: false,
  },
  {
    category: "The Opportunity",
    title: "A Different Way to Think Property.",
    meta: "Real estate · 9 min read",
    link: "Before a retirement plan buys property",
    highlight: true,
  },
  {
    category: "The Bigger Picture",
    title: "Ask the Questions That Matter.",
    meta: "Advanced case studies · 9 min read",
    link: "Evaluate an advanced planning idea",
    highlight: false,
  },
];

export const checklistItems = [
  "The account and its features",
  "The people and proposed transaction",
  "The documents and open questions",
  "The help needed to move forward",
];

// NOTE: accordion answer copy was not captured from the source page — the
// answers are hidden until each accordion item is expanded, so the saved
// page never included them in the DOM. Placeholder text is marked clearly
// below; replace with the real copy once we have it.
export const faqItems = [
  { question: "Where should I start?", answer: "PLACEHOLDER — needs source copy." },
  { question: "What does self-directed mean?", answer: "PLACEHOLDER — needs source copy." },
  {
    question: "Is Roth Academy a law firm or investment custodian?",
    answer: "PLACEHOLDER — needs source copy.",
  },
  {
    question: "Do I need a retirement plan to use advanced services?",
    answer: "PLACEHOLDER — needs source copy.",
  },
  { question: "How do I speak with the team?", answer: "PLACEHOLDER — needs source copy." },
];
