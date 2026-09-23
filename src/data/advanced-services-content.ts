export const advancedServicesHero = {
  eyebrow: "Advanced Services",
  title: ["Go Beyond", "The Ordinary."],
  goldLine: 1,
  description:
    "Trusts. Ownership structures. Complex transactions. The planning questions that deserve a deeper look, with a team to organize the work.",
  stats: ["29 Service Paths", "6 Areas Of Focus", "One Clear Starting Point"],
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

export const serviceDirectoryHero = {
  eyebrow: "The Service Directory",
  title: ["The Right Work.", "For Your Next Move."],
  goldLine: 1,
  description:
    "Trusts. Ownership structures. Complex transactions. The planning questions that deserve a deeper look, with a team to organize the work.",
  stats: ["31 Service Paths", "6 Areas Of Focus", "One Clear Starting Point"],
};

export const advancedServiceCategories: { key: ServiceCategoryKey; tabLabel: string; cardLabel: string }[] = [
  { key: "plans", tabLabel: "Plan support", cardLabel: "Plan Design & Support" },
  { key: "roth", tabLabel: "Roth & funding", cardLabel: "Roth & Contribution Planning" },
  { key: "trusts", tabLabel: "Trusts & legacy", cardLabel: "Trusts, Estate & Inheritance" },
  { key: "transactions", tabLabel: "Entities & deals", cardLabel: "LLCs, Real Estate & Transactions" },
  { key: "protection", tabLabel: "Asset protection", cardLabel: "Asset Protection" },
  { key: "compliance", tabLabel: "Plan responsibilities", cardLabel: "Plan Taxes, Distributions & Compliance" },
];

export const serviceEngagementSteps = {
  eyebrow: "How The Work Moves Forward",
  heading: ["A Clear Start.", "A Defined Engagement."],
  steps: [
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
  ],
};

export type ServiceDetail = {
  heroIntro: string;
  audience: string;
  workIntro: string;
  workSteps: string[];
  example: {
    heading: string[];
    scenario: string;
    approach: string;
    disclaimer: string;
  };
  considerations: string[];
  considerationsNote: string;
  questions: string[];
  questionsNote: string;
  nextMove: {
    heading: string[];
    paragraph: string;
    ctaLabel: string;
    details: string[];
  };
  prepare: string[];
  prepareNote: string;
  relatedGuideHref?: string;
  faq: { question: string; answer: string }[];
};

export type AdvancedService = {
  number: string;
  slug: string;
  title: string;
  description: string;
  category: ServiceCategoryKey;
  badge: "Explore the work" | "Specialist review";
  body: string[];
  detail?: ServiceDetail;
};

export const advancedServices: AdvancedService[] = [
  {
    number: "01",
    slug: "existing-plan-support",
    title: "Existing Plan Support",
    description: "Keep your plan paperwork and next steps organized.",
    category: "plans",
    badge: "Explore the work",
    body: [
      "If you already have a self-directed 401(k) or IRA, this service keeps the plan's paperwork, participant records, and administrative history organized — so nothing falls through the cracks between reviews.",
      "The team confirms what documents exist, what's missing, and what needs updating, then helps you get the plan's records into a clear, current state.",
    ],
  },
  {
    number: "02",
    slug: "family-business-plans",
    title: "Family Business Plan Planning",
    description: "Coordinate the people and accounts in a family business.",
    category: "plans",
    badge: "Explore the work",
    body: [
      "When a retirement plan sits inside a family business, the accounts, ownership, and people involved can overlap in ways a standard plan doesn't anticipate.",
      "This service coordinates the plan design around your specific family and business structure, so contributions, eligibility, and ownership stay properly separated and documented.",
    ],
  },
  {
    number: "03",
    slug: "contribution-planning",
    title: "Contribution Planning",
    description: "Make a clear plan for money going in.",
    category: "roth",
    badge: "Explore the work",
    body: [
      "Contribution planning maps out what money is going into your plan, from which source, under which rules — before the contribution happens, not after.",
      "The team helps you identify the right contribution type and timing for your account, so your records stay clean and your limits stay respected.",
    ],
  },
  {
    number: "04",
    slug: "rollover-planning",
    title: "Rollover Planning",
    description: "Prepare for assets moving between retirement arrangements.",
    category: "roth",
    badge: "Explore the work",
    body: [
      "Moving retirement assets from one arrangement to another — an old 401(k) into a self-directed IRA, for instance — has its own paperwork and timing requirements.",
      "This service prepares the rollover correctly from the start: confirming the receiving account, the transfer method, and the documentation that shows it was done right.",
    ],
  },
  {
    number: "05",
    slug: "participant-loans",
    title: "Participant Loan Documentation",
    description: "Put the loan and its repayment records in order.",
    category: "plans",
    badge: "Explore the work",
    body: [
      "A participant loan against your own plan balance needs a promissory note, a repayment schedule, and ongoing records — not just a transfer of funds.",
      "The team helps put the loan's documentation in order, whether you're setting one up for the first time or catching up records on an existing loan.",
    ],
  },
  {
    number: "06",
    slug: "roth-conversion-planning",
    title: "Roth Conversion Planning",
    description: "Evaluate the move before moving the assets.",
    category: "roth",
    badge: "Explore the work",
    body: [
      "Converting pre-tax retirement funds to Roth is a decision worth evaluating carefully — it has tax consequences the year it happens, not just later.",
      "This service walks through the numbers and the timing with you before any assets move, so the conversion reflects an informed decision, not a rushed one.",
    ],
  },
  {
    number: "07",
    slug: "preferred-llcs",
    title: "Preferred LLCs & Partnerships",
    description: "Structure different rights to capital and future growth.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Not every owner in an LLC or partnership needs the same rights to capital, income, or future growth — a preferred structure can separate those interests deliberately.",
      "This service structures the ownership interests to match what you're actually trying to accomplish, with the appropriate professional reviewing the entity documents.",
    ],
  },
  {
    number: "08",
    slug: "fractional-ownership",
    title: "Fractional Ownership & Valuation",
    description: "Review exactly which interest is being transferred.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "When a retirement plan holds a partial interest in an asset — a fraction of a property, a share of an entity — the exact interest being transferred needs to be precisely defined.",
      "This service reviews what is actually being bought, sold, or held, and confirms the valuation and documentation support that specific interest.",
    ],
  },
  {
    number: "09",
    slug: "life-estates-remainders",
    title: "Life Estates & Remainder Interests",
    description: "Explore separate rights to income and future ownership.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "A life estate separates the right to use or receive income from an asset now from who owns it later — two distinct interests in the same property.",
      "This service reviews how that separation would work for your situation, and what documentation is needed to make both interests clear and enforceable.",
    ],
  },
  {
    number: "10",
    slug: "charitable-remainder-trusts",
    title: "Charitable Remainder Trust Planning",
    description: "Connect an asset, income needs, and a charitable purpose.",
    category: "trusts",
    badge: "Explore the work",
    body: [
      "A charitable remainder trust connects an asset, an income stream, and a charitable gift — but the structure only works if all three are set up correctly together.",
      "This service brings your asset, your income needs, and your charitable intent into one conversation with the appropriate professional, before any trust is drafted.",
    ],
  },
  {
    number: "11",
    slug: "estate-inheritance-planning",
    title: "Estate & Inheritance Planning",
    description: "Make the intended handoff clear.",
    category: "trusts",
    badge: "Explore the work",
    body: [
      "How your accounts and assets pass to the people you intend requires more than a will — beneficiary designations, account titling, and trust provisions all play a role.",
      "This service reviews what you have in place today and where it may not say what you think it says, so the intended handoff is actually clear.",
    ],
  },
  {
    number: "12",
    slug: "grat-planning",
    title: "GRAT Planning Assessment",
    description: "Evaluate a specialized trust question with an attorney.",
    category: "trusts",
    badge: "Specialist review",
    body: [
      "A Grantor Retained Annuity Trust is a specialized estate planning structure with real tax mechanics and real risk if the assumptions behind it don't hold.",
      "This is a specialist review: an attorney evaluates whether a GRAT fits your specific facts before any structure is recommended or built.",
    ],
  },
  {
    number: "13",
    slug: "powers-of-appointment",
    title: "Powers of Appointment",
    description: "Review who has authority over a future transfer.",
    category: "trusts",
    badge: "Explore the work",
    body: [
      "A power of appointment gives someone the authority to direct where a trust's assets go in the future — a quiet but significant provision worth understanding clearly.",
      "This service reviews who holds that authority in your documents today, and whether it reflects who you actually want making that decision.",
    ],
  },
  {
    number: "14",
    slug: "unchained-roth-review",
    title: "Unchained Roth Assessment",
    description: "Bring the full structure into the conversation.",
    category: "trusts",
    badge: "Specialist review",
    body: [
      "Some Roth structures involve more than one account or entity working together — which means evaluating one piece in isolation can miss the bigger picture.",
      "This is a specialist review: an attorney looks at the full structure together, not just the account in front of you, before offering an assessment.",
    ],
  },
  {
    number: "15",
    slug: "real-estate-transactions",
    title: "Real Estate & Development Transactions",
    description: "Put the legal structure around the actual deal.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Buying, developing, or holding real estate inside a retirement plan involves contracts, financing, and ownership questions specific to that plan type.",
      "This service puts the legal structure around your actual deal — reviewing the transaction's terms and documents before you're committed to them.",
    ],
    detail: {
      heroIntro:
        "Bring the property, financing, parties, and proposed ownership together for review. The scope may cover one purchase or a defined part of a larger development.",
      audience: "Plan owners, developers, and investors preparing a property transaction.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the proposed deal and relevant restrictions",
        "Identify the agreed transaction documents",
        "Coordinate the defined closing and follow-through work",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A developer is evaluating a project involving outside investors and a retirement plan.",
        approach:
          "The team prepares a concise deal brief, then an attorney defines the review and documentation required.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Acquisitions, rentals, and sales",
        "Development and syndication",
        "Ownership and signature responsibilities",
        "Retirement-account participation",
        "Ongoing transaction records",
      ],
      considerationsNote:
        "Each transaction is evaluated on its own facts. This service does not provide investment selection or guarantee returns.",
      questions: [
        "Who owns what, and who receives the economics?",
        "How do funding, debt, services, and control interact?",
        "Which documents and independent advisers are needed?",
      ],
      questionsNote: "A review of the actual transaction, identified issues, and an agreed path for documents and coordination.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: [
        "Property and party details",
        "Contracts, financing, and ownership proposal",
        "Deadlines and adviser information",
      ],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/real-estate",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the transaction touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just the property in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney handles the legal review and documentation. The Roth Academy team coordinates intake, scheduling, and the paperwork moving between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — another property, a changed structure, a follow-on transaction — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
  {
    number: "16",
    slug: "private-lending",
    title: "Private Lending & Loan Documents",
    description: "Organize the terms, security, and responsibilities.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Lending plan funds to another party requires a promissory note, security terms, and a repayment structure that protects the plan's interest.",
      "This service organizes the borrower's terms, the security involved, and each party's responsibilities into documents that hold up if a question comes up later.",
    ],
    detail: {
      heroIntro:
        "Review a proposed investment loan and define the documentation and follow-through needed. This is separate from a participant loan.",
      audience: "Investors and plan owners considering private lending.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the parties and proposed terms",
        "Prepare or review the agreed loan documents",
        "Identify recording and servicing responsibilities",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A client wants their plan to make a loan secured by real estate.",
        approach:
          "The attorney reviews the proposed transaction and the team coordinates the agreed document and record tasks.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Borrower and related parties",
        "Notes, collateral, and security instruments",
        "Repayment and servicing",
        "Existing loan document review",
      ],
      considerationsNote:
        "Collateral, enforceability, licensing, and jurisdiction may require additional work or other providers.",
      questions: [
        "Who owns what, and who receives the economics?",
        "How do funding, debt, services, and control interact?",
        "Which documents and independent advisers are needed?",
      ],
      questionsNote: "A review of the actual transaction, identified issues, and an agreed path for documents and coordination.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: [
        "Borrower and relationship information",
        "Amount, terms, and proposed collateral",
        "Existing drafts and timing",
      ],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/private-lending",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the loan touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just the note in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney handles the legal review and documentation. The Roth Academy team coordinates intake, scheduling, and the paperwork moving between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — another loan, a changed structure, a servicing issue — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
  {
    number: "17",
    slug: "shared-equity-financing",
    title: "Shared Equity & Appreciation Financing",
    description: "Evaluate financing tied to the economics of a property.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Some financing arrangements tie repayment to a property's appreciation rather than a fixed interest rate — a structure that needs its own careful documentation.",
      "This service evaluates financing tied to a property's economics, so the terms reflect what both parties actually agreed to.",
    ],
  },
  {
    number: "18",
    slug: "income-interest-planning",
    title: "Income Interests & Depreciation Planning",
    description: "Review the rights and deductions in a split-interest proposal.",
    category: "transactions",
    badge: "Specialist review",
    body: [
      "A split-interest proposal — where one party receives income and another the underlying asset — raises specific questions about rights, deductions, and tax treatment.",
      "This is a specialist review: an attorney evaluates the rights and deductions involved in your specific proposal before it moves forward.",
    ],
  },
  {
    number: "19",
    slug: "ubit-planning",
    title: "UBIT & Debt-Financed Income Review",
    description: "Find the tax questions behind the investment.",
    category: "compliance",
    badge: "Explore the work",
    body: [
      "Certain income inside a retirement plan — from an active business, or property financed with debt — can trigger a tax at the plan level worth understanding in advance.",
      "This service finds the tax questions behind your specific investment, so you know what applies before the transaction, not after a filing.",
    ],
  },
  {
    number: "20",
    slug: "blocker-corporations",
    title: "Blocker Corporation Assessment",
    description: "Examine the full costs and consequences of an entity layer.",
    category: "compliance",
    badge: "Specialist review",
    body: [
      "A blocker corporation can shield a retirement plan from certain tax exposure, but it adds its own costs, filings, and complexity that need to be weighed honestly.",
      "This is a specialist review: an attorney examines the full costs and consequences of adding an entity layer before recommending one.",
    ],
  },
  {
    number: "21",
    slug: "private-company-investments",
    title: "Private Company & Founder Investments",
    description: "Review the shares, rights, and relationships behind a proposal.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Investing plan funds in a private company or alongside a founder involves share classes, rights, and relationships that deserve the same scrutiny as any other transaction.",
      "This service reviews the shares, rights, and relationships behind the proposal, so you understand what you'd actually own and on what terms.",
    ],
  },
  {
    number: "22",
    slug: "distributions-rmds",
    title: "Distributions & RMD Planning",
    description: "Plan the withdrawal and its follow-through.",
    category: "compliance",
    badge: "Explore the work",
    body: [
      "Required minimum distributions and other withdrawals need to be planned, not just requested — the timing and amount affect your taxes and your plan's records.",
      "This service plans the withdrawal and its follow-through, so the distribution is documented correctly and fits into your broader retirement income picture.",
    ],
  },
  {
    number: "23",
    slug: "asset-protection",
    title: "Asset Protection Planning",
    description: "Review how ownership and exposure fit together.",
    category: "protection",
    badge: "Explore the work",
    body: [
      "Asset protection planning is highly fact-specific: what works depends on your state, your existing structures, and the timing of any steps you take.",
      "This service reviews how your current ownership and exposure fit together, as the starting point for a plan built around your actual situation.",
    ],
  },
  {
    number: "24",
    slug: "protective-documents",
    title: "Ownership & Protective Document Review",
    description: "Read the restrictions before relying on them.",
    category: "protection",
    badge: "Explore the work",
    body: [
      "A trust, LLC, or insurance policy is only as protective as its actual language — restrictions you assume exist may not be written the way you think.",
      "This service reads the documents you already have and identifies where they do, and don't, provide the protection you're relying on.",
    ],
  },
  {
    number: "25",
    slug: "prohibited-transactions",
    title: "Prohibited-Transaction Review",
    description: "Ask before a transaction, or get help reviewing what happened.",
    category: "compliance",
    badge: "Explore the work",
    body: [
      "Certain transactions between a retirement plan and disqualified persons are restricted by rule, with real consequences if one happens — intentionally or not.",
      "This service reviews a transaction before it happens, or helps assess what occurred if a question has already come up, with the appropriate professional involved.",
    ],
  },
  {
    number: "26",
    slug: "reporting-notices",
    title: "Plan Reporting & Notice Support",
    description: "Identify the required work and who will complete it.",
    category: "compliance",
    badge: "Explore the work",
    body: [
      "Retirement plans carry their own reporting and notice requirements, separate from personal tax filings — easy to miss if no one is tracking them.",
      "This service identifies the required work for your plan and who is responsible for completing it, so nothing is filed late or missed entirely.",
    ],
  },
  {
    number: "27",
    slug: "precious-metals",
    title: "Precious Metals Custody & Compliance",
    description: "Hold approved metals the right way inside your plan.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Precious metals held inside a retirement plan have to meet specific purity standards and be held through an approved custodian and depository — not kept at home or in a personal safe.",
      "This service confirms which metals and products qualify, then coordinates the custodian and depository arrangement so the holding stays properly documented.",
    ],
    detail: {
      heroIntro:
        "Review the metals you want to hold, the purity and storage rules that apply, and the custodian arrangement your plan requires.",
      audience: "Plan owners and investors who want to add precious metals inside a retirement account.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Confirm which metals and products meet the plan's purity requirements",
        "Identify the custodian and approved depository arrangement",
        "Coordinate the purchase, storage, and reporting records",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "An investor wants to move part of an IRA into gold and silver coins.",
        approach:
          "The team confirms which products qualify, then coordinates the custodian and depository arrangement before any purchase is made.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Approved metals, coins, and purity standards",
        "Custodian and depository requirements",
        "Storage, insurance, and access rules",
        "Reporting and valuation records",
      ],
      considerationsNote:
        "Metals held outside an approved custodian arrangement can jeopardize the account's tax treatment. This service does not provide investment selection or guarantee returns.",
      questions: [
        "Which metals and products actually qualify?",
        "Who is the custodian, and where is the depository?",
        "How is the holding valued and reported each year?",
      ],
      questionsNote: "A review of the actual proposal, the applicable rules, and an agreed path for the custodian and records.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before a custodian and depository arrangement is confirmed.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Account and provider details", "Metals, products, and proposed amount", "Timing and funding source"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the purchase touches other accounts or entities you own, say so up front so the review — and its fee — reflects the actual structure, not just the metals in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team coordinates the custodian and depository arrangement, with an attorney involved wherever the purity, storage, or compliance questions call for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an additional purchase, a different metal, a change in custodian — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
  {
    number: "28",
    slug: "digital-assets",
    title: "Digital Asset Custody & Compliance",
    description: "Hold digital assets inside your plan with the right custody in place.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Holding digital assets inside a retirement plan raises its own custody and security questions — the keys and the account need to be structured so the plan, not you personally, is the owner of record.",
      "This service confirms which platforms and custody arrangements the plan can use, then coordinates the account setup so the holding stays properly documented.",
    ],
    detail: {
      heroIntro:
        "Review the digital assets you want to hold, the custody and security requirements that apply, and the provider arrangement your plan requires.",
      audience: "Plan owners and investors who want to add digital assets inside a retirement account.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Confirm which digital assets and platforms the plan can use",
        "Identify the custody, wallet, and security arrangement",
        "Coordinate the purchase, custody, and reporting records",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "An investor wants to hold bitcoin inside a self-directed IRA.",
        approach:
          "The team confirms the custody arrangement and provider, then coordinates the account setup before any purchase is made.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Approved platforms and custody arrangements",
        "Wallet security and access controls",
        "Prohibited-transaction and related-party rules",
        "Reporting and valuation records",
      ],
      considerationsNote:
        "Digital assets held outside an approved custody arrangement can jeopardize the account's tax treatment. This service does not provide investment selection or guarantee returns.",
      questions: [
        "Which platforms and custody arrangements actually qualify?",
        "Who holds the keys, and how is access controlled?",
        "How is the holding valued and reported each year?",
      ],
      questionsNote: "A review of the actual proposal, the applicable rules, and an agreed path for custody and records.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before a custody and provider arrangement is confirmed.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Account and provider details", "Digital assets and proposed amount", "Timing and funding source"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the purchase touches other accounts or entities you own, say so up front so the review — and its fee — reflects the actual structure, not just the assets in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team coordinates the custody and provider arrangement, with an attorney involved wherever the security, prohibited-transaction, or compliance questions call for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an additional purchase, a different platform, a change in custody — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
  {
    number: "29",
    slug: "stocks-bonds",
    title: "Brokerage Account Setup & Coordination",
    description: "Bring a traditional brokerage account into your self-directed plan.",
    category: "transactions",
    badge: "Explore the work",
    body: [
      "Stocks and bonds are the most familiar part of the menu, but inside a self-directed plan the account still has to be titled and funded correctly alongside your other holdings.",
      "This service confirms the broker and account structure, then coordinates the paperwork so the brokerage side of your plan stays properly documented.",
    ],
    detail: {
      heroIntro: "Review the brokerage arrangement you want to use, and confirm how it fits inside your self-directed plan.",
      audience: "Plan owners who want a traditional brokerage account alongside their other self-directed investments.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Confirm the proposed broker and account structure",
        "Identify the required account titling and paperwork",
        "Coordinate funding and the account opening process",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "An investor wants part of a self-directed IRA in stocks and bonds alongside real estate.",
        approach:
          "The team confirms the account titling and broker, then coordinates the paperwork so both sides of the plan stay properly documented.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Broker selection and account titling",
        "Funding source and timing",
        "Coordination with other plan holdings",
        "Ongoing statements and recordkeeping",
      ],
      considerationsNote:
        "This service does not recommend or manage investments held in the brokerage account. It coordinates the account's setup within your plan.",
      questions: [
        "Which broker and account type fit the plan?",
        "How is the account titled, and who has authority?",
        "How does this account coordinate with other plan holdings?",
      ],
      questionsNote: "A review of the actual proposal, the applicable rules, and an agreed path for the account and records.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before the brokerage account is opened.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Account and provider details", "Proposed broker and funding amount", "Timing and existing account information"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the account touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just this account.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team coordinates the account opening and titling with the broker, with an attorney involved wherever a coordination or compliance question calls for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an additional account, a change in broker, a funding change — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
];

export type DirectoryCard = {
  number: string;
  slug: string;
  title: string;
  description: string;
  category: ServiceCategoryKey;
  badge: "Explore the work" | "Specialist review";
};

// The full service directory ("/services"): the two plan pages up front,
// followed by every advanced service, renumbered 01–28.
export const allServiceCards: DirectoryCard[] = [
  {
    number: "01",
    slug: "self-directed-401k",
    title: "Self-Directed 401(k)",
    description: "Build a plan around how you want to invest.",
    category: "plans",
    badge: "Explore the work",
  },
  {
    number: "02",
    slug: "self-directed-ira",
    title: "Self-Directed IRA",
    description: "Explore a wider investment menu with the right structure.",
    category: "plans",
    badge: "Explore the work",
  },
  ...advancedServices.map((service, index) => ({
    number: String(index + 3).padStart(2, "0"),
    slug: service.slug,
    title: service.title,
    description: service.description,
    category: service.category,
    badge: service.badge,
  })),
];
