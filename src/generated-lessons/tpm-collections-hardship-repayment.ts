import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-collections-hardship-repayment",
  "track": "TPM",
  "category": "Credit & Lending",
  "level": "Intermediate",
  "question": "How would you design a collections and hardship repayment experience?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Collections is the process of helping a lender recover unpaid debt. Hardship is the user situation where repayment is difficult because of income loss, illness, emergency, or other financial stress.\n\nThe beginner mistake is designing collections like a punishment system. A good fintech product needs to recover money, but it also needs clear communication, fair options, regulatory review, accurate balances, and humane paths for people who are trying to pay.\n\nThe mental model:\n\n```txt\nDelinquency:\nPayment is late.\n\nCollections:\nThe company tries to resolve the unpaid balance.\n\nHardship:\nThe customer may need a different plan.\n```\n\nThe TPM should design options that are operationally real, not just comforting copy."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a borrower misses two payments and says they lost their job.\n\nA poor experience sends escalating threats and confusing fees.\n\nA better experience offers structured paths:\n\n```txt\nConfirm the amount owed.\nExplain fees and due dates.\nOffer payment plan options.\nLet the user request hardship review.\nShow what happens if they miss the plan.\nSend confirmations in writing.\n```\n\nThis helps the customer understand the situation and helps the company keep records."
    },
    {
      "title": "Make it practical",
      "body": "Here is a hardship repayment artifact:\n\n```txt\nCustomer state:\n30 days past due\n\nAvailable options:\n- Pay full amount\n- Pay minimum amount\n- Set up repayment plan\n- Request hardship review\n- Contact support\n\nHardship intake:\n- Reason for hardship\n- Temporary or long-term\n- Affordable payment amount\n- Preferred contact method\n- Supporting documents if required\n\nPlan requirements:\n- Start date\n- Payment amount\n- Number of payments\n- Fees or interest treatment\n- Credit reporting impact if applicable\n- Confirmation message\n- Missed-plan consequences\n```\n\nThe experience should be clear enough that the customer knows what they agreed to."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is hiding the balance breakdown. Customers need to understand principal, fees, interest, and due dates.\n\nAnother mistake is offering plans that operations cannot service. A plan is not real unless billing, reminders, support, and reporting can handle it.\n\nA third mistake is using aggressive copy that creates complaints and compliance risk."
    }
  ],
  "answer": "Collections is the process of helping a lender recover unpaid debt. Hardship is the user situation where repayment is difficult because of income loss, illness, emergency, or other financial stress.",
  "reasoning": "Here is a hardship repayment artifact:\n\n```txt\nCustomer state:\n30 days past due\n\nAvailable options:\n- Pay full amount\n- Pay minimum amount\n- Set up repayment plan\n- Request hardship review\n- Contact support\n\nHardship intake:\n- Reason for hardship\n- Temporary or long-term\n- Affordable payment amount\n- Preferred contact method\n- Supporting documents if required\n\nPlan requirements:\n- Start date\n- Payment amount\n- Number of payments\n- Fees or interest treatment\n- Credit reporting impact if applicable\n- Confirmation message\n- Missed-plan consequences\n```\n\nThe experience should be clear enough that the customer knows what they agreed to.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should collections not feel like a punishment system?",
    "What information should hardship intake collect?",
    "What should a repayment plan confirmation include?",
    "Why do support and billing systems need to understand the plan?",
    "What metrics would show whether hardship options are working?"
  ],
  "interviewAnswer": "I would design collections and hardship around clear balance details, repayment options, hardship intake, plan terms, confirmations, reminders, support visibility, compliance-approved messaging, credit reporting considerations, and metrics for cure rate, complaints, broken plans, and customer harm.\n\nA strong answer balances recovery, compliance, and humane user experience.",
  "sourceLinks": [
    {
      "label": "CFPB: Debt collection rule FAQs",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/debt-collection/debt-collection-rule-faqs/"
    },
    {
      "label": "CFPB: Negotiating with a debt collector",
      "url": "https://www.consumerfinance.gov/ask-cfpb/how-do-i-negotiate-a-settlement-with-a-debt-collector-en-1447/"
    }
  ],
  "beginnerExplanation": "Collections is the process of helping a lender recover unpaid debt. Hardship is the user situation where repayment is difficult because of income loss, illness, emergency, or other financial stress.\n\nThe beginner mistake is designing collections like a punishment system. A good fintech product needs to recover money, but it also needs clear communication, fair options, regulatory review, accurate balances, and humane paths for people who are trying to pay.\n\nThe mental model:\n\n```txt\nDelinquency:\nPayment is late.\n\nCollections:\nThe company tries to resolve the unpaid balance.\n\nHardship:\nThe customer may need a different plan.\n```\n\nThe TPM should design options that are operationally real, not just comforting copy.",
  "example": "Imagine a borrower misses two payments and says they lost their job.\n\nA poor experience sends escalating threats and confusing fees.\n\nA better experience offers structured paths:\n\n```txt\nConfirm the amount owed.\nExplain fees and due dates.\nOffer payment plan options.\nLet the user request hardship review.\nShow what happens if they miss the plan.\nSend confirmations in writing.\n```\n\nThis helps the customer understand the situation and helps the company keep records.",
  "commonMistakes": "A common mistake is hiding the balance breakdown. Customers need to understand principal, fees, interest, and due dates.\n\nAnother mistake is offering plans that operations cannot service. A plan is not real unless billing, reminders, support, and reporting can handle it.\n\nA third mistake is using aggressive copy that creates complaints and compliance risk."
};
