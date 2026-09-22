export const advancedServicesHero = {
  eyebrow: "Advanced Services",
  title: ["Go Beyond", "The Ordinary."],
  goldLine: 1,
  description:
    "Trusts. Ownership structures. Complex transactions. The planning questions that deserve a deeper look, with a team to organize the work.",
  stats: ["26 Service Paths", "6 Areas Of Focus", "One Clear Starting Point"],
};

export const advancedServicesIntro = {
  lines: ["You do not need to know the name of the structure.", "Start with what you want it to accomplish."],
  cta: "Talk through my situation",
};

export const advancedServicesApproach = {
  eyebrow: "Serious Work Starts Here",
  heading: ["The Strategy Is", "Only As Good As The Review."],
  paragraphs: [
    "These services organize a conversation about your actual facts. A presentation, a structure's name, or another person's experience is a starting point for questions.",
    "The appropriate professional determines whether the idea fits, what work is needed, and who should handle it. Your engagement puts those decisions in writing.",
  ],
  linkLabel: "How we define the work",
  linkHref: "/work-with-us",
};

export type ServiceCategoryKey =
  | "plans"
  | "roth"
  | "trusts"
  | "transactions"
  | "protection"
  | "compliance";

export const advancedServiceCategories: { key: ServiceCategoryKey; tabLabel: string; cardLabel: string }[] = [
  { key: "plans", tabLabel: "Plan support", cardLabel: "Plan Design & Support" },
  { key: "roth", tabLabel: "Roth & funding", cardLabel: "Roth & Contribution Planning" },
  { key: "trusts", tabLabel: "Trusts & legacy", cardLabel: "Trusts, Estate & Inheritance" },
  { key: "transactions", tabLabel: "Entities & deals", cardLabel: "LLCs, Real Estate & Transactions" },
  { key: "protection", tabLabel: "Asset protection", cardLabel: "Asset Protection" },
  { key: "compliance", tabLabel: "Plan responsibilities", cardLabel: "Plan Taxes, Distributions & Compliance" },
];

export type AdvancedService = {
  number: string;
  title: string;
  description: string;
  category: ServiceCategoryKey;
  badge: "Explore the work" | "Specialist review";
};

export const advancedServices: AdvancedService[] = [
  {
    number: "01",
    title: "Existing Plan Support",
    description: "Keep your plan paperwork and next steps organized.",
    category: "plans",
    badge: "Explore the work",
  },
  {
    number: "02",
    title: "Family Business Plan Planning",
    description: "Coordinate the people and accounts in a family business.",
    category: "plans",
    badge: "Explore the work",
  },
  {
    number: "03",
    title: "Contribution Planning",
    description: "Make a clear plan for money going in.",
    category: "roth",
    badge: "Explore the work",
  },
  {
    number: "04",
    title: "Rollover Planning",
    description: "Prepare for assets moving between retirement arrangements.",
    category: "roth",
    badge: "Explore the work",
  },
  {
    number: "05",
    title: "Participant Loan Documentation",
    description: "Put the loan and its repayment records in order.",
    category: "plans",
    badge: "Explore the work",
  },
  {
    number: "06",
    title: "Roth Conversion Planning",
    description: "Evaluate the move before moving the assets.",
    category: "roth",
    badge: "Explore the work",
  },
  {
    number: "07",
    title: "Preferred LLCs & Partnerships",
    description: "Structure different rights to capital and future growth.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "08",
    title: "Fractional Ownership & Valuation",
    description: "Review exactly which interest is being transferred.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "09",
    title: "Life Estates & Remainder Interests",
    description: "Explore separate rights to income and future ownership.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "10",
    title: "Charitable Remainder Trust Planning",
    description: "Connect an asset, income needs, and a charitable purpose.",
    category: "trusts",
    badge: "Explore the work",
  },
  {
    number: "11",
    title: "Estate & Inheritance Planning",
    description: "Make the intended handoff clear.",
    category: "trusts",
    badge: "Explore the work",
  },
  {
    number: "12",
    title: "GRAT Planning Assessment",
    description: "Evaluate a specialized trust question with an attorney.",
    category: "trusts",
    badge: "Specialist review",
  },
  {
    number: "13",
    title: "Powers of Appointment",
    description: "Review who has authority over a future transfer.",
    category: "trusts",
    badge: "Explore the work",
  },
  {
    number: "14",
    title: "Unchained Roth Assessment",
    description: "Bring the full structure into the conversation.",
    category: "trusts",
    badge: "Specialist review",
  },
  {
    number: "15",
    title: "Real Estate & Development Transactions",
    description: "Put the legal structure around the actual deal.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "16",
    title: "Private Lending & Loan Documents",
    description: "Organize the terms, security, and responsibilities.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "17",
    title: "Shared Equity & Appreciation Financing",
    description: "Evaluate financing tied to the economics of a property.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "18",
    title: "Income Interests & Depreciation Planning",
    description: "Review the rights and deductions in a split-interest proposal.",
    category: "transactions",
    badge: "Specialist review",
  },
  {
    number: "19",
    title: "UBIT & Debt-Financed Income Review",
    description: "Find the tax questions behind the investment.",
    category: "compliance",
    badge: "Explore the work",
  },
  {
    number: "20",
    title: "Blocker Corporation Assessment",
    description: "Examine the full costs and consequences of an entity layer.",
    category: "compliance",
    badge: "Specialist review",
  },
  {
    number: "21",
    title: "Private Company & Founder Investments",
    description: "Review the shares, rights, and relationships behind a proposal.",
    category: "transactions",
    badge: "Explore the work",
  },
  {
    number: "22",
    title: "Distributions & RMD Planning",
    description: "Plan the withdrawal and its follow-through.",
    category: "compliance",
    badge: "Explore the work",
  },
  {
    number: "23",
    title: "Asset Protection Planning",
    description: "Review how ownership and exposure fit together.",
    category: "protection",
    badge: "Explore the work",
  },
  {
    number: "24",
    title: "Ownership & Protective Document Review",
    description: "Read the restrictions before relying on them.",
    category: "protection",
    badge: "Explore the work",
  },
  {
    number: "25",
    title: "Prohibited-Transaction Review",
    description: "Ask before a transaction, or get help reviewing what happened.",
    category: "compliance",
    badge: "Explore the work",
  },
  {
    number: "26",
    title: "Plan Reporting & Notice Support",
    description: "Identify the required work and who will complete it.",
    category: "compliance",
    badge: "Explore the work",
  },
];
