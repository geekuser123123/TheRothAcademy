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
  badge: "Explore the work" | "Specialist review" | "Defined service";
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
    badge: "Defined service",
    body: [
      "If you already have a self-directed 401(k) or IRA, this service keeps the plan's paperwork, participant records, and administrative history organized — so nothing falls through the cracks between reviews.",
      "The team confirms what documents exist, what's missing, and what needs updating, then helps you get the plan's records into a clear, current state.",
    ],
    detail: {
      heroIntro:
        "Describe the change or unfinished task. The team identifies the records, documents, and responsibilities involved before quoting additional work.",
      audience: "Existing clients with a document, sponsor, participant, amendment, or termination question.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Identify the appropriate administrative process",
        "Confirm included coverage and any extra work",
        "Organize the completed records",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A client has changed businesses and needs to know what must be updated.",
        approach: "The team reviews the request and separates routine record updates from any required professional work.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Plan documents and amendments",
        "Sponsor and participant changes",
        "Beneficiary and successor records",
        "Plan termination preparation",
      ],
      considerationsNote:
        "Your service agreement controls included maintenance. Renewal is separate from completing required filings or other plan obligations.",
      questions: [
        "What already exists, and what needs to change?",
        "Which people and businesses are involved?",
        "What does the plan actually permit?",
      ],
      questionsNote: "A defined document or support scope, the information needed to complete it, and clear responsibilities.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Current documents", "What is changing and why", "Requested timing"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/plan-changes",
      faq: [
        {
          question: "Do you need my existing plan documents?",
          answer:
            "Current documents help, but they aren't required to start. Basic facts about what exists and what's changing are enough for the team to identify what's needed.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team handles routine record updates directly, with an attorney involved wherever a document, amendment, or termination question calls for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — a new amendment, a changed sponsor, a termination — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Review business ownership, participating family members, and how the plan is intended to operate. Begin with the actual employment and account facts.",
      audience: "Family businesses exploring participation or investments involving several plan accounts.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the family and business facts",
        "Identify participation and ownership questions",
        "Define the plan or transaction work required",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "Several family members work in a business and want to explore participation in one plan.",
        approach: "An attorney reviews the applicable facts before the team prepares the agreed next steps.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Family participation",
        "Business ownership and attribution",
        "Joint investments among plan accounts",
        "Traditional, Roth, and profit-sharing records",
      ],
      considerationsNote: "Family relationships alone do not establish eligibility or permit a joint investment.",
      questions: [
        "What already exists, and what needs to change?",
        "Which people and businesses are involved?",
        "What does the plan actually permit?",
      ],
      questionsNote: "A defined document or support scope, the information needed to complete it, and clear responsibilities.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Ownership and employment information", "Existing plan records", "Proposed participants and investments"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/getting-started",
      faq: [
        {
          question: "Do you need my existing plan documents?",
          answer:
            "Current documents help, but they aren't required to start. Basic facts about the family, the business, and what you want to accomplish are enough for the team to identify what's needed.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney reviews the ownership and participation facts. The Roth Academy team coordinates intake, scheduling, and the paperwork moving between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an added family member, a changed ownership structure, another account — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Bring employee, employer, and after-tax contribution questions together with your business and account records. Specialized noncash proposals begin with a separate review.",
      audience: "Plan owners coordinating contributions across income sources and account types.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the relevant inputs and classifications",
        "Identify calculations and supporting valuations needed",
        "Document an agreed contribution process",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A business owner wants to coordinate employee and profit-sharing contributions.",
        approach: "The review identifies applicable inputs, responsibilities, and records before funds or assets move.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Employee and employer contributions",
        "Voluntary after-tax contributions",
        "Compensation and other plans",
        "Noncash and ownership-interest proposals",
      ],
      considerationsNote: "Amounts, eligibility, deadlines, and any noncash treatment require current review.",
      questions: [
        "Where is the money now?",
        "Which plan features and funding rules apply?",
        "What tax and cash-flow questions need review?",
      ],
      questionsNote:
        "A documented assessment of the proposed move and the steps to coordinate with your tax adviser and account provider.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Compensation and business records", "Other plan participation", "Proposed amounts, assets, and year"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/contributions",
      faq: [
        {
          question: "Is a conversion or contribution automatically the right move?",
          answer:
            "No. Each has its own tax and timing consequences. The review looks at your actual income, other plans, and cash flow before recommending a specific contribution or conversion.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team organizes the inputs and coordinates with your tax adviser, with an attorney involved wherever a noncash or ownership-interest proposal calls for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — a different contribution type, a new income source, a following tax year — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Identify the source, destination, and proposed method before initiating a rollover. Keep the instructions, dates, and tax records together.",
      audience: "People moving retirement assets or evaluating a change in account arrangement.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the proposed movement",
        "Identify institution instructions and professional questions",
        "Define the recordkeeping and reporting responsibilities",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "An investor has several older retirement accounts and wants to evaluate a transfer.",
        approach: "The team organizes each source separately for review and coordinated next steps.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Source and destination eligibility",
        "Direct and indirect movements",
        "Inherited-account distinctions",
        "Property distribution and rollover questions",
      ],
      considerationsNote: "Not every distribution or account is eligible for every destination. A general guide does not authorize a movement.",
      questions: [
        "Where is the money now?",
        "Which plan features and funding rules apply?",
        "What tax and cash-flow questions need review?",
      ],
      questionsNote:
        "A documented assessment of the proposed move and the steps to coordinate with your tax adviser and account provider.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Source and destination account types", "Recent statements and prior movements", "Relevant deadlines"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/rollovers",
      faq: [
        {
          question: "Is a conversion or contribution automatically the right move?",
          answer:
            "No — and neither is a rollover. Each depends on the accounts, timing, and rules involved. The review looks at your actual source and destination before recommending a method.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team organizes the institution instructions and records, with an attorney involved wherever an inherited account or property distribution calls for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — another account, a different destination, a following tax year — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
  },
  {
    number: "05",
    slug: "participant-loans",
    title: "Participant Loan Documentation",
    description: "Put the loan and its repayment records in order.",
    category: "plans",
    badge: "Defined service",
    body: [
      "A participant loan against your own plan balance needs a promissory note, a repayment schedule, and ongoing records — not just a transfer of funds.",
      "The team helps put the loan's documentation in order, whether you're setting one up for the first time or catching up records on an existing loan.",
    ],
    detail: {
      heroIntro:
        "Request help with a proposed participant loan, its documentation, and the repayment process. Existing loans and plan terms are part of the review.",
      audience: "Plan participants considering a loan or needing help with an existing loan record.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the applicable plan and loan facts",
        "Prepare the agreed documentation",
        "Identify ongoing repayment records",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A participant wants to assess a loan and know how repayments will be tracked.",
        approach: "The team gathers the inputs and coordinates the agreed calculation and documentation.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Plan permission and loan calculations",
        "Loan documents",
        "Repayment schedules",
        "Missed-payment questions",
      ],
      considerationsNote: "A request does not approve a loan or determine the amount available.",
      questions: [
        "What already exists, and what needs to change?",
        "Which people and businesses are involved?",
        "What does the plan actually permit?",
      ],
      questionsNote: "A defined document or support scope, the information needed to complete it, and clear responsibilities.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Current plan and account records", "Existing loan balances", "Proposed amount and purpose"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/participant-loans",
      faq: [
        {
          question: "Do you need my existing plan documents?",
          answer:
            "Current documents help, but they aren't required to start. Basic facts about the plan and any existing loan are enough for the team to identify what's needed.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team prepares the loan documentation and repayment records directly, with an attorney involved wherever the plan terms call for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — a missed payment, a second loan, a changed repayment schedule — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Review the account, asset, basis records, and proposed conversion. Complex interests need an analysis of both the structure and its supportable value.",
      audience: "People considering a Roth conversion, including one involving noncash assets.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review the proposed conversion and supporting records",
        "Identify valuation and tax-analysis needs",
        "Define the implementation and reporting scope",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A client wants to explore converting an ownership interest rather than cash.",
        approach: "The attorney examines the proposed interest and identifies the valuation and tax work needed before implementation.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Pretax and after-tax records",
        "Property and LLC interests",
        "Preferred and common units",
        "Valuation and separate accounting",
      ],
      considerationsNote: "A valuation illustration does not establish an allowable discount or guarantee a tax result.",
      questions: [
        "Where is the money now?",
        "Which plan features and funding rules apply?",
        "What tax and cash-flow questions need review?",
      ],
      questionsNote:
        "A documented assessment of the proposed move and the steps to coordinate with your tax adviser and account provider.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Account and basis records", "Asset descriptions and proposed valuations", "Desired timing and wider planning questions"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/roth-strategies",
      faq: [
        {
          question: "Is a conversion or contribution automatically the right move?",
          answer:
            "No. Each has its own tax and timing consequences. The review looks at your actual income, other plans, and cash flow before recommending a specific conversion.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney examines any noncash interest and its valuation, with the Roth Academy team coordinating intake, scheduling, and the paperwork moving between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — a different asset, a following tax year, a related account — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Explore an entity with preferred and common interests, including how capital, income, and appreciation would be allocated. Review the participants and economics before drafting.",
      audience: "Investors and business owners considering different economic interests within one entity.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Analyze the proposed economics and parties",
        "Identify valuation and transaction restrictions",
        "Prepare the agreed entity and transaction documents",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A developer and outside investors want different rights to investment returns.",
        approach:
          "The attorney reviews the economics, ownership, and proposed retirement-account participation before defining the documents.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Preferred returns and common interests",
        "Capital and distribution rights",
        "Outside investors and syndications",
        "Traditional and Roth account participation",
      ],
      considerationsNote:
        "Different ownership classes do not by themselves establish tax treatment or make a related-party transaction permissible.",
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
        "Participants and relationships",
        "Proposed contributions and distribution terms",
        "Existing documents and investment details",
      ],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/advanced-planning",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the structure touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just the interests in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney reviews the economics and drafts the entity documents. The Roth Academy team coordinates intake, scheduling, and the paperwork moving between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an added investor, a changed allocation, a following transaction — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Work through tenancy-in-common interests, ownership restrictions, and valuation questions connected to a proposed contribution, conversion, sale, or distribution.",
      audience: "Owners evaluating a transaction involving less than the entire asset.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Identify the legal interest and its restrictions",
        "Coordinate the required valuation questions",
        "Review the proposed transfer and documentation",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A plan owns an interest in a property and its owner is considering a distribution.",
        approach: "The review focuses on the exact interest, debt, and valuation evidence relevant to that proposed transfer.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Tenancy in common",
        "Control and marketability",
        "Restrictions and debt",
        "Valuation for retirement transactions",
      ],
      considerationsNote:
        "Appraisals and specialized valuation work may require a separate provider. No particular discount is promised.",
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
      prepare: ["Ownership and title records", "Relevant debt and restrictions", "The action being considered"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/advanced-planning",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the interest touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just the fraction in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "The Roth Academy team coordinates the valuation and documentation, with an attorney involved wherever the transfer or restrictions call for it.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — another interest, a different valuation date, a related transaction — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Review lifetime or fixed-term interests and the remainder that follows. The legal rights, parties, valuation, and planned transaction all need to work together.",
      audience: "Clients considering split interests in property or other assets.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Analyze the proposed rights and transaction",
        "Identify valuation and tax questions",
        "Define the agreed documents and implementation steps",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "Two investors want to explore separate rights to property income and future ownership.",
        approach: "The attorney examines the proposed division of rights and determines what further analysis is needed.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Lifetime and fixed-term interests",
        "Split purchases",
        "Sales of income and remainder interests",
        "Combinations with fractional interests or LLCs",
      ],
      considerationsNote:
        "Specialized short-duration examples require individual review and are not standardized offers.",
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
      prepare: ["Asset and ownership information", "Proposed term and parties", "Income, debt, and valuation records"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/advanced-planning",
      faq: [
        {
          question: "Will this review cover every entity in my business?",
          answer:
            "Scope is set by your proposal. If the split interest touches other entities or accounts you own, say so up front so the review — and its fee — reflects the actual structure, not just the interests in front of you.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney examines the division of rights and drafts the agreed documents, with the Roth Academy team coordinating intake, scheduling, and the paperwork between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — a different term, an added party, a related transaction — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Evaluate whether a charitable remainder trust fits the assets, people, and objectives involved. The engagement may cover design, funding, and coordination with other advisers.",
      audience: "Asset owners exploring charitable planning, income arrangements, or a future sale.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review goals, assets, and beneficiaries",
        "Analyze the proposed trust arrangement",
        "Prepare agreed documents and a funding or coordination plan",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A property owner is considering a sale and wants to explore a CRT.",
        approach:
          "The review addresses the asset, timing, income objectives, and charitable purpose before any transfer.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Trust funding and asset sales",
        "Income arrangements",
        "Charitable beneficiaries",
        "Remainder-interest valuation",
        "Retirement-account beneficiary planning",
      ],
      considerationsNote:
        "Trust distributions and underlying transactions have their own tax rules. The teaching examples do not promise tax-free proceeds to the client.",
      questions: [
        "Who should receive income, control, and remaining value?",
        "Which assets, obligations, and jurisdictions are involved?",
        "What must the structure accomplish over time?",
      ],
      questionsNote:
        "A clearly defined planning direction and, when separately agreed, the drafting and implementation work behind it.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Asset and basis records", "Debt and proposed sale timing", "Income goals and intended beneficiaries"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/succession",
      faq: [
        {
          question: "Do I need a retirement plan for this work?",
          answer:
            "No. This service reviews trusts, income arrangements, and charitable structures involving any qualifying asset — a retirement account is not required to begin.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney reviews the proposed trust arrangement and prepares the agreed documents, with the Roth Academy team coordinating intake, scheduling, and the paperwork between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an additional beneficiary, a later sale, a related structure — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Coordinate beneficiary records, successor responsibilities, and the broader planning questions around retirement wealth and related structures.",
      audience: "People planning for family, successors, or inherited retirement assets.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Review existing records and intended outcomes",
        "Identify conflicts, gaps, and professional work needed",
        "Prepare the agreed updates and handoff instructions",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario:
          "A client wants family members to receive organized instructions and appropriately coordinated beneficiary arrangements.",
        approach:
          "The attorney reviews the actual records and the team helps assemble the agreed updates and handoff materials.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Beneficiary and successor designations",
        "Children and grandchildren",
        "Inherited Roth accounts",
        "Business or LLC beneficiaries",
        "CRTs as beneficiaries",
      ],
      considerationsNote:
        "The exact scope identifies which estate documents and jurisdictions are covered. Existing forms should not be changed from a general example.",
      questions: [
        "Who should receive income, control, and remaining value?",
        "Which assets, obligations, and jurisdictions are involved?",
        "What must the structure accomplish over time?",
      ],
      questionsNote:
        "A clearly defined planning direction and, when separately agreed, the drafting and implementation work behind it.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Current designations and relevant estate documents", "People and structures involved", "An inventory of relevant assets and records"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/succession",
      faq: [
        {
          question: "Do I need a retirement plan for this work?",
          answer:
            "No. This service reviews beneficiary records and estate structures across any account or asset you hold — a retirement plan is not required to begin.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney reviews your existing records and prepares the agreed updates, with the Roth Academy team coordinating intake, scheduling, and the paperwork between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "A new question outside the original scope — an additional beneficiary, a new structure, a related transaction — becomes its own proposal, defined and priced the same way as the first.",
        },
      ],
    },
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
    detail: {
      heroIntro:
        "Bring a question about a grantor retained annuity trust and the interests it creates. Begin with an assessment of the proposed assets, parties, and objective.",
      audience: "Clients asking whether a GRAT merits further analysis in their circumstances.",
      workIntro:
        "Your proposal defines the included deliverables. Depending on the facts and professional review, the work may include:",
      workSteps: [
        "Assess the proposed objective and available facts",
        "Identify the legal, tax, and valuation research needed",
        "Define any subsequent planning engagement",
      ],
      example: {
        heading: ["A Real-World Question.", "A Considered Approach."],
        scenario: "A client has been advised to explore a GRAT and wants an independent planning assessment.",
        approach: "The attorney reviews the proposed approach before any document or implementation engagement is quoted.",
        disclaimer: "This example explains the service. It is not a client result or a promise of tax treatment.",
      },
      considerations: [
        "Grantor retained annuity trusts",
        "Retained and remainder interests",
        "Valuation and transfer questions",
      ],
      considerationsNote:
        "GRATs are briefly referenced in the teaching material. This page offers an assessment path, not a predetermined structure or outcome.",
      questions: [
        "Who should receive income, control, and remaining value?",
        "Which assets, obligations, and jurisdictions are involved?",
        "What must the structure accomplish over time?",
      ],
      questionsNote:
        "A clearly defined planning direction and, when separately agreed, the drafting and implementation work behind it.",
      nextMove: {
        heading: ["Bring The Goal.", "We'll Define The Work."],
        paragraph: "The team organizes the facts before an attorney appointment or engagement is arranged.",
        ctaLabel: "Start With This Service",
        details: ["Written scope & fee", "Assigned professional & coordinator", "Defined deliverables & review date"],
      },
      prepare: ["Asset and ownership records", "Proposed beneficiaries and timing", "Existing adviser recommendations"],
      prepareNote: "Basic facts are enough to start. Detailed records follow at the appropriate stage.",
      relatedGuideHref: "/learn/succession",
      faq: [
        {
          question: "Do I need a retirement plan for this work?",
          answer:
            "No. A GRAT assessment addresses whichever assets are proposed for the trust — a retirement account is not required to begin.",
        },
        {
          question: "What will the engagement include?",
          answer:
            "A written scope of work, the assigned professional and coordinator, and the deliverables and review date the fee covers — confirmed before any billable work begins.",
        },
        {
          question: "Who will handle the professional work?",
          answer:
            "An attorney conducts the assessment and identifies the legal, tax, and valuation questions involved, with the Roth Academy team coordinating intake, scheduling, and the paperwork between you and the professional.",
        },
        {
          question: "What happens if I need more help later?",
          answer:
            "If the assessment supports moving forward, drafting and implementation becomes its own proposal, defined and priced separately from this initial review.",
        },
      ],
    },
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
  badge: "Explore the work" | "Specialist review" | "Defined service";
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
