export const plansHero = {
  eyebrow: "Self-Directed Retirement",
  title: ["Your Plan.", "Your Starting Point."],
  goldLine: 1,
  description:
    "Two paths to explore a different kind of retirement investing. Start with your situation, then build the right foundation.",
};

export const plansPanels = [
  {
    number: "01 / The Business Owner",
    label: "Self-Directed",
    type: "401(k)",
    description: "Build a retirement plan around your business, your ambitions, and the way you want to invest.",
    tags: ["Business-sponsored", "Plan features", "Investment flexibility"],
    linkLabel: "Explore the 401(k)",
    href: "/services/self-directed-401k",
    variant: "dark" as const,
  },
  {
    number: "02 / The Individual Investor",
    label: "Self-Directed",
    type: "IRA",
    description: "Explore a wider investment world inside an individual retirement account, with the right provider and a clear plan.",
    tags: ["Individual account", "Traditional or Roth", "Provider coordination"],
    linkLabel: "Explore the IRA",
    href: "/services/self-directed-ira",
    variant: "gold" as const,
  },
];

export const plansComparison = {
  eyebrow: "A Clearer First Decision",
  heading: ["Which Starting Point", "Fits Your World?"],
  intro: "This is a starting comparison. Eligibility, provider capabilities, and the actual account or plan terms still need review.",
  columns: ["Self-Directed 401(k)", "Self-Directed IRA"],
  columnCtas: [
    { label: "Open My 401(k)", href: "/start?plan=401k" },
    { label: "Open My IRA", href: "/start?plan=ira" },
  ],
  rows: [
    {
      question: "Who does it serve?",
      answers: [
        "Business owners — sole proprietors, partnerships, and corporations.",
        "Individual investors, with or without business ownership.",
      ],
    },
    {
      question: "Business eligibility",
      answers: [
        "Owner-only businesses with no full-time employees other than an owner or spouse.",
        "None required — anyone with earned income or funds to roll over can open one.",
      ],
    },
    {
      question: "Funding options",
      answers: [
        "Employee deferral and employer profit-sharing contributions, plus rollovers from eligible plans.",
        "Annual contributions plus rollovers from an old 401(k) or existing IRA.",
      ],
    },
    {
      question: "Key features",
      answers: [
        "Higher contribution limits, checkbook-level control, and a built-in loan provision where the plan allows.",
        "Traditional, Roth, or SEP options, with checkbook-level control available through certain structures.",
      ],
    },
    {
      question: "Setup cost",
      answers: ["[Setup fee — TBD]", "[Setup fee — TBD]"],
    },
    {
      question: "Ongoing cost",
      answers: ["[Ongoing fee — TBD]", "[Ongoing fee — TBD]"],
    },
  ],
};

export const existingPlanBanner = {
  heading: "Already Have An Account Or Plan?",
  description: "Bring the current arrangement and the change you have in mind.",
  cta: "Explore existing plan support",
  href: "/services/existing-plan-support",
};

export const plansProcess = {
  eyebrow: "From Interest To Action",
  heading: ["A Good Start", "Has A Clear Process."],
};

export const plansFaq = {
  eyebrow: "Before Your Next Move",
  heading: ["Good Questions.", "Clear Answers."],
};
