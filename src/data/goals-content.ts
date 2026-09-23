export const goalsHero = {
  eyebrow: "Find Your Direction",
  title: ["Start With", "What You Want To Do."],
  goldLine: 1,
  description:
    "A property. A lending opportunity. A plan for your family. Connect the real-world goal with the questions and professional work behind it.",
};

export type Goal = { number: string; href: string; title: string; description: string };

export const goals: Goal[] = [
  { number: "01", href: "/goals/get-started", title: "Get A Plan Ready To Use", description: "Start with the account and documents." },
  {
    number: "02",
    href: "/services/self-directed-401k",
    title: "Invest On My Terms",
    description: "Discuss gold, digital assets, stocks, and bonds.",
  },
  { number: "03", href: "/goals/real-estate", title: "Put A Property Idea To Work", description: "Explore a rental, purchase, or development." },
  { number: "04", href: "/goals/private-lending", title: "Become The Lender", description: "Prepare a private lending opportunity." },
  { number: "05", href: "/goals/funding", title: "Get Money Into My Plan", description: "Prepare contributions, transfers, and rollovers." },
  { number: "06", href: "/goals/roth", title: "Explore My Roth Options", description: "Look at contributions and conversions." },
  {
    number: "07",
    href: "/services/preferred-llcs",
    title: "Bring A Complex Deal Together",
    description: "Review the parties, entities, and economics.",
  },
  {
    number: "08",
    href: "/services/charitable-remainder-trusts",
    title: "Explore A Trust Strategy",
    description: "Start with the outcome you want.",
  },
  {
    number: "09",
    href: "/services/asset-protection",
    title: "Review How My Assets Are Held",
    description: "Connect ownership with exposure.",
  },
  { number: "10", href: "/goals/succession", title: "Prepare The Next Generation", description: "Organize inheritance and succession." },
  { number: "11", href: "/goals/distributions", title: "Plan Money Coming Out", description: "Explore withdrawals and retirement income." },
  {
    number: "12",
    href: "/services/prohibited-transactions",
    title: "Get A Past Action Reviewed",
    description: "Bring the facts and timing to the team.",
  },
];
