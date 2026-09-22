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
  rows: [
    {
      question: "What is the starting point?",
      answers: ["A business-sponsored retirement plan.", "An individual retirement account with an appropriate provider."],
    },
    {
      question: "What will we review first?",
      answers: [
        "Business ownership, eligible participants, other plans, and intended investments.",
        "Existing retirement accounts, intended assets, provider capabilities, and funding.",
      ],
    },
    {
      question: "What are we setting up?",
      answers: [
        "The agreed plan documents and account-opening preparation.",
        "The agreed provider and structure coordination for your IRA.",
      ],
    },
    {
      question: "What happens after setup?",
      answers: [
        "Records, plan administration, and separately scoped help as needed.",
        "Custodian records, account responsibilities, and separately scoped help as needed.",
      ],
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
