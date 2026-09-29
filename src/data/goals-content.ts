export const goalsHero = {
  eyebrow: "What Would You Invest In?",
  title: ["What Would You", "Invest In?"],
  goldLine: 1,
  description:
    "Real estate, private lending, precious metals, digital assets, stocks and bonds — put your self-directed 401(k) or IRA to work in opportunities you understand.",
};

export type InvestmentPossibility = {
  id: string;
  number: string;
  label: string;
  image: string;
  description: string;
  example: string;
};

export const investmentPossibilities: InvestmentPossibility[] = [
  {
    id: "real-estate",
    number: "01",
    label: "Real Estate",
    image: "/investments/real-estate.jpg",
    description:
      "Your plan can directly own real property — rental homes, land, or commercial buildings — instead of investing indirectly through a REIT or fund.",
    example:
      "For example, a plan might purchase a rental property with plan funds, with rental income and expenses flowing back through the account.",
  },
  {
    id: "private-lending",
    number: "02",
    label: "Private Lending",
    image: "/investments/private-lending.jpg",
    description:
      "Put plan funds to work as the lender — financing another party's real estate purchase, business venture, or project — and collect the interest inside your plan.",
    example:
      "For example, a plan might issue a short-term loan secured by real estate, earning interest as the borrower repays.",
  },
  {
    id: "precious-metals",
    number: "03",
    label: "Precious Metals",
    image: "/investments/precious-metals.jpg",
    description:
      "Hold IRS-approved gold, silver, platinum, or palladium inside your plan as a long-standing store of value, held by an approved custodian or depository.",
    example:
      "For example, a plan might hold approved gold bullion through a depository arrangement coordinated by the account provider.",
  },
  {
    id: "digital-assets",
    number: "04",
    label: "Digital Assets",
    image: "/investments/digital-assets.jpg",
    description:
      "Some providers support holding digital assets like Bitcoin inside a self-directed plan, offering exposure to a newer, more volatile asset class.",
    example:
      "For example, a plan might allocate a portion of funds to a digital asset held through a supporting provider's platform.",
  },
  {
    id: "stocks-bonds",
    number: "05",
    label: "Stocks & Bonds",
    image: "/investments/stocks-bonds.jpg",
    description:
      "Your plan can still hold traditional investments — individual stocks, bonds, and funds — alongside the alternative assets you add.",
    example:
      "For example, a plan might keep a core position in stocks and bonds while directing a portion toward real estate or private lending.",
  },
];

export const investmentPossibilitiesFootnote =
  "Investment availability depends on the account, provider, and applicable rules, and asset availability and risks vary with the arrangement. The academy does not recommend or custody investments.";
