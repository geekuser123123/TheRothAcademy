export const startHero = {
  eyebrow: "Your First Move",
  title: ["Let's Get Your", "Plan Started."],
  goldLine: 1,
  description: "Tell us the basics. The team confirms the right plan and package, then guides you through setup.",
};

export const planInterestOptions = [
  { value: "401k", label: "Self-Directed 401(k)" },
  { value: "ira", label: "Self-Directed IRA" },
  { value: "help-me-choose", label: "Help Me Choose" },
] as const;

export type PlanInterestValue = (typeof planInterestOptions)[number]["value"];

export const startFlowSteps = [
  { number: "01", title: "Request" },
  { number: "02", title: "Team Confirms Eligibility & Package" },
  { number: "03", title: "Signup & Payment" },
  { number: "04", title: "Setup" },
  { number: "05", title: "Tax Academy Onboarding" },
];
