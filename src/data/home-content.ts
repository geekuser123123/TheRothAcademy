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
    image: "/pathways/401k.webp",
  },
  {
    number: "02",
    title: "Self-Directed IRA",
    description: "For individual investors ready to move beyond a conventional menu.",
    href: "/services/self-directed-ira",
    image: "/pathways/ira.webp",
  },
];

export const assetClasses = [
  {
    number: "01",
    label: "Real Estate",
    description: "Direct ownership opportunities.",
    href: "/goals#real-estate",
    image: "/investments/real-estate.jpg",
  },
  {
    number: "02",
    label: "Private Lending",
    description: "Put capital to work in your community.",
    href: "/goals#private-lending",
    image: "/investments/private-lending.jpg",
  },
  {
    number: "03",
    label: "Precious Metals",
    description: "A time-tested asset class in your plan.",
    href: "/goals#precious-metals",
    image: "/investments/precious-metals.jpg",
  },
  {
    number: "04",
    label: "Digital Assets",
    description: "A modern asset class with a place in retirement.",
    href: "/goals#digital-assets",
    image: "/investments/digital-assets.jpg",
  },
  {
    number: "05",
    label: "Stocks & Bonds",
    description: "A flexible foundation for your strategy.",
    href: "/goals#stocks-bonds",
    image: "/investments/stocks-bonds.jpg",
  },
];

// No longer used on the homepage (advanced services are de-emphasized on
// Roth Academy's active sales pages), but kept for AdvancedServicesSection,
// which is preserved for reuse on Tax Academy / IRA Ideas.
export const advancedServices = [
  {
    number: "01",
    title: "Trusts & Inheritance",
    description: "CRTs, estate planning, GRATs, and powers of appointment.",
    href: "/advanced-services?filter=trusts",
  },
  {
    number: "02",
    title: "Entities & Transactions",
    description: "Preferred LLCs, ownership interests, and real estate structures.",
    href: "/advanced-services?filter=transactions",
  },
  {
    number: "03",
    title: "Roth & Contribution Planning",
    description: "The accounts, timing, and tax questions behind a move.",
    href: "/advanced-services?filter=roth",
  },
  {
    number: "04",
    title: "Protection & Plan Responsibilities",
    description: "Asset ownership, transaction review, and the details that matter.",
    href: "/advanced-services?filter=protection,compliance",
  },
];

export const standardSteps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Tell us your goals and we'll confirm whether a self-directed 401(k) or IRA fits.",
  },
  {
    number: "02",
    title: "Complete Your Setup",
    description: "Sign your paperwork and get your account established with our team's help.",
  },
  {
    number: "03",
    title: "Fund Your Account",
    description: "Move or roll over funds into your new account, ready to invest in what you understand.",
  },
];

export const libraryRows = [
  {
    number: "01",
    category: "The Foundation",
    title: "Which Plan Fits Your Goals?",
    meta: "Compare plans · 4 min read",
    link: "Self-directed 401(k) vs. self-directed IRA",
    href: "/plans",
    image: "/library/getting-started.webp",
  },
  {
    number: "02",
    category: "The Opportunity",
    title: "Explore Real Estate With Retirement Funds.",
    meta: "Real estate · 9 min read",
    link: "Before a retirement plan buys property",
    href: "/learn/real-estate",
    image: "/library/real-estate.webp",
  },
  {
    number: "03",
    category: "The Next Step",
    title: "Explore Your Rollover Options.",
    meta: "Rollovers · 7 min read",
    link: "Move an existing account into a self-directed plan",
    href: "/learn/rollovers",
    image: "/library/case-studies.webp",
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
    question: "Which plan fits my situation?",
    answer:
      "It depends on how you earn. A Self-Directed 401(k) generally fits business owners and the self-employed with no full-time employees other than a spouse. A Self-Directed IRA fits individual investors funding an account on their own, with or without an employer plan. Compare the two on our plans page, or ask the team and we'll help you choose.",
  },
  {
    question: "What can I invest in?",
    answer:
      "Real estate, private lending, precious metals, digital assets, stocks and bonds, and more, assets your account is eligible to hold, within the rules that apply to that account type and provider. See what's possible on our investment page.",
  },
  {
    question: "Can I use money from an existing retirement account?",
    answer:
      "In most cases, yes. Funds from an eligible 401(k), IRA, or other retirement account can typically be rolled over into your new self-directed plan without a taxable event when done correctly. Our team walks you through the rollover process during setup.",
  },
  {
    question: "What does setup cost?",
    answer:
      "Setup includes a one-time fee plus ongoing account fees, with some provider costs billed separately. See the full breakdown on each plan's page, or ask the team for the current pricing that fits your situation.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most accounts are established within a few weeks of completing your paperwork, though timing can vary with your current provider and how funds are being moved or rolled over.",
  },
  {
    question: "What help do I receive afterward?",
    answer:
      "Your team stays available after setup, for account questions, documentation, and ongoing support as you invest. Continuing plan administration and tax-year resources are available through the Tax Academy client experience.",
  },
];
