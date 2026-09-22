export const serviceIraHero = {
  eyebrow: "For Individual Investors",
  title: ["Move Beyond", "The Usual", "Menu."],
  goldLine: 2,
  description:
    "A self-directed IRA puts your retirement savings to work in the assets you already understand — real estate, private lending, and more — inside an account built for individual investors.",
  whoItsFor:
    "Built for individuals with an existing IRA, a former employer's 401(k), or new contributions to direct toward a wider range of assets.",
};

export const serviceIraOverview = {
  eyebrow: "The Account",
  heading: ["What Is A", "Self-Directed IRA?"],
  paragraphs: [
    "A self-directed IRA is an individual retirement account administered under the same IRS rules as any traditional or Roth IRA — held with a custodian that allows a broader range of assets than a typical brokerage IRA.",
    "Instead of a fixed menu of mutual funds and stocks, the account can hold real estate, private lending, precious metals, and other alternative investments, alongside traditional ones.",
  ],
  image: "/services/ira/overview.jpg",
  placeholderVariant: "b" as const,
  features: [
    "Available as Traditional, Roth, or SEP IRA",
    "No business ownership required to open one",
    "Checkbook-level control available through certain account structures",
    "Roll over funds from an old 401(k) or existing IRA",
    "Annual contributions on top of any rollover",
  ],
};

export const serviceIraProcess = {
  eyebrow: "How It Works",
  heading: ["From Account", "To Investment."],
  steps: [
    {
      number: "01",
      title: "Account Setup",
      description: "Choose the IRA type that matches your goals — Traditional, Roth, or SEP.",
    },
    {
      number: "02",
      title: "Fund The Account",
      description: "Roll over an old 401(k) or IRA, or make a new contribution.",
    },
    {
      number: "03",
      title: "Choose Your Structure",
      description: "Select the custodial or checkbook-control setup that fits how you invest.",
    },
    {
      number: "04",
      title: "Direct Your Investments",
      description: "Put the account to work in the assets you understand.",
    },
  ],
};

export const serviceIraFaq = {
  eyebrow: "Before Your Next Move",
  heading: ["IRA Questions.", "Answered."],
  items: [
    {
      question: "Who can open a self-directed IRA?",
      answer:
        "Generally, any individual with earned income or existing retirement funds to roll over can open a self-directed IRA. No business ownership is required.",
    },
    {
      question: "How much can I contribute?",
      answer:
        "Annual IRA contribution limits are set by the IRS and apply across all your IRAs combined, regardless of how many accounts you hold. Your exact limit depends on your age and income.",
    },
    {
      question: "Can I take a loan from my IRA?",
      answer:
        "No. Unlike a 401(k), IRAs do not permit loans. Early withdrawals may trigger taxes and penalties outside of specific exceptions.",
    },
    {
      question: "Can I roll over an old 401(k) or IRA?",
      answer:
        "In most cases, yes. Funds from a former employer's plan or an existing IRA can typically be rolled into a self-directed IRA without triggering taxes or penalties, when done correctly.",
    },
    {
      question: "What is checkbook control?",
      answer:
        "Some self-directed IRA structures, like an IRA-owned LLC, let you write checks or wire funds directly for an investment without routing each transaction through a custodian.",
    },
  ],
};
