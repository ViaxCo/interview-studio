import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-merchant-underwriting-onboarding",
  "track": "TPM",
  "category": "Fraud & Risk",
  "level": "Advanced",
  "question": "How would you design merchant onboarding and underwriting for payments?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Merchant underwriting is the process of deciding whether a business can safely accept payments on your platform.\n\nThe beginner mistake is approving every merchant who fills out a form. A merchant can create chargeback risk, fraud risk, illegal goods risk, brand risk, money laundering risk, and financial exposure if payouts happen before disputes or refunds are known.\n\nThe mental model:\n\n```txt\nIdentity:\nWho is the merchant?\n\nBusiness model:\nWhat are they selling and how?\n\nRisk:\nWhat can go wrong after they start processing?\n```\n\nThe TPM needs to design onboarding so good merchants can start quickly while risky merchants get reviewed before harm scales."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine two merchants apply.\n\n```txt\nMerchant A:\nLocal bakery, low ticket size, in-person pickup.\n\nMerchant B:\nHigh-ticket electronics reseller, new website, no refund policy, large expected volume.\n```\n\nBoth may be legitimate, but they should not get the same underwriting path. Merchant B needs more review because disputes, fraud, and delivery failures could create larger losses."
    },
    {
      "title": "Make it practical",
      "body": "Here is a merchant onboarding artifact:\n\n```txt\nApplication fields:\n- Legal business name\n- Tax ID\n- Ownership or representative information\n- Website or product description\n- Industry category\n- Expected monthly volume\n- Average transaction size\n- Refund policy\n- Fulfillment model\n- Bank account for payouts\n\nRisk tiers:\n- Low: automated approval\n- Medium: document review or payout delay\n- High: manual underwriting before processing\n\nControls:\n- Processing limits\n- Payout delays\n- Rolling reserve\n- Restricted category review\n- Chargeback monitoring\n- Early warning alerts\n```\n\nThe product should also let merchants fix missing information without starting over."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is reviewing merchants only at signup. Risk changes after launch, especially if volume spikes or disputes rise.\n\nAnother mistake is asking too much from low-risk merchants. Overly heavy onboarding kills activation.\n\nA third mistake is not connecting underwriting to payout controls. Approval should define what limits or reserves apply."
    }
  ],
  "answer": "Merchant underwriting is the process of deciding whether a business can safely accept payments on your platform.",
  "reasoning": "Here is a merchant onboarding artifact:\n\n```txt\nApplication fields:\n- Legal business name\n- Tax ID\n- Ownership or representative information\n- Website or product description\n- Industry category\n- Expected monthly volume\n- Average transaction size\n- Refund policy\n- Fulfillment model\n- Bank account for payouts\n\nRisk tiers:\n- Low: automated approval\n- Medium: document review or payout delay\n- High: manual underwriting before processing\n\nControls:\n- Processing limits\n- Payout delays\n- Rolling reserve\n- Restricted category review\n- Chargeback monitoring\n- Early warning alerts\n```\n\nThe product should also let merchants fix missing information without starting over.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is merchant underwriting needed before payment processing?",
    "What signals make a merchant riskier?",
    "How should low-risk and high-risk onboarding differ?",
    "What payout controls can reduce exposure?",
    "Why does ongoing monitoring matter?"
  ],
  "interviewAnswer": "I would design merchant onboarding around identity, business model, ownership, industry, expected volume, fulfillment, refund policy, bank details, risk tiering, document recovery, manual review, payout controls, and ongoing monitoring. Approval should determine limits, reserves, and review cadence.\n\nA strong answer shows that merchant onboarding is activation plus risk control.",
  "sourceLinks": [
    {
      "label": "Stripe Connect identity verification",
      "url": "https://docs.stripe.com/connect/identity-verification"
    },
    {
      "label": "Stripe Connect risk management",
      "url": "https://docs.stripe.com/connect/risk-management"
    }
  ],
  "beginnerExplanation": "Merchant underwriting is the process of deciding whether a business can safely accept payments on your platform.\n\nThe beginner mistake is approving every merchant who fills out a form. A merchant can create chargeback risk, fraud risk, illegal goods risk, brand risk, money laundering risk, and financial exposure if payouts happen before disputes or refunds are known.\n\nThe mental model:\n\n```txt\nIdentity:\nWho is the merchant?\n\nBusiness model:\nWhat are they selling and how?\n\nRisk:\nWhat can go wrong after they start processing?\n```\n\nThe TPM needs to design onboarding so good merchants can start quickly while risky merchants get reviewed before harm scales.",
  "example": "Imagine two merchants apply.\n\n```txt\nMerchant A:\nLocal bakery, low ticket size, in-person pickup.\n\nMerchant B:\nHigh-ticket electronics reseller, new website, no refund policy, large expected volume.\n```\n\nBoth may be legitimate, but they should not get the same underwriting path. Merchant B needs more review because disputes, fraud, and delivery failures could create larger losses.",
  "commonMistakes": "A common mistake is reviewing merchants only at signup. Risk changes after launch, especially if volume spikes or disputes rise.\n\nAnother mistake is asking too much from low-risk merchants. Overly heavy onboarding kills activation.\n\nA third mistake is not connecting underwriting to payout controls. Approval should define what limits or reserves apply."
};
