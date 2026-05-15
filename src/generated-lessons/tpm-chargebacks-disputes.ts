import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-chargebacks-disputes",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you design a product workflow for chargebacks and payment disputes?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.\n\nThe beginner mistake is thinking disputes are only a finance problem. Disputes affect risk, customer experience, merchant trust, support, evidence collection, product policy, and account health.\n\nThe product must answer:\n\n```txt\nWho is notified?\nWhat evidence is needed?\nWho decides whether to fight or accept?\nWhat deadlines apply?\nHow does the disputed amount affect balances?\nWhat happens if the dispute is won or lost?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a marketplace seller receives a $500 order. Two weeks later, the buyer disputes the payment as unauthorized.\n\nThe product cannot simply show \"payment failed.\" The seller needs to know money is being held, what the reason is, what evidence is needed, and when a response is due.\n\nA weak workflow says:\n\n```txt\nSend dispute email. Let support handle it.\n```\n\nA stronger workflow has states:\n\n```txt\nDispute opened\n-> Evidence needed\n-> Evidence submitted\n-> Under review\n-> Won\nor\n-> Lost\nor\n-> Accepted\n```\n\nEach state needs UI, notifications, support visibility, ledger impact, and audit history."
    },
    {
      "title": "Make it practical",
      "body": "Here is a dispute workflow artifact:\n\n```txt\nDispute intake:\n- Dispute ID\n- Payment ID\n- Amount\n- Currency\n- Reason code\n- Evidence deadline\n- Current balance impact\n- Seller account\n- Buyer transaction details\n\nEvidence checklist:\n- Receipt\n- Delivery proof\n- Customer communication\n- Login or device evidence\n- Refund policy acceptance\n- Service usage logs\n- Identity verification evidence, if relevant\n\nDecision rules:\n- Auto-accept low-value disputes below cost threshold.\n- Fight disputes with strong evidence and high value.\n- Escalate repeat buyer abuse.\n- Block seller payouts if dispute risk exceeds threshold.\n```\n\nThe TPM also needs balance behavior:\n\n```txt\nWhen dispute opens:\nMove disputed amount from available balance to held/disputed balance.\n\nIf won:\nRelease funds back to available balance.\n\nIf lost:\nRecord loss, fee, and final ledger adjustment.\n```\n\nThis protects both accounting accuracy and user understanding."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is not collecting evidence before disputes happen. If logs and receipts are missing, the team cannot reconstruct the story later.\n\nAnother mistake is treating dispute response as purely manual. The product can pre-fill evidence and guide the user.\n\nA third mistake is hiding deadlines. Missing a response deadline can turn a possibly winnable dispute into a loss."
    }
  ],
  "answer": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.",
  "reasoning": "Here is a dispute workflow artifact:\n\n```txt\nDispute intake:\n- Dispute ID\n- Payment ID\n- Amount\n- Currency\n- Reason code\n- Evidence deadline\n- Current balance impact\n- Seller account\n- Buyer transaction details\n\nEvidence checklist:\n- Receipt\n- Delivery proof\n- Customer communication\n- Login or device evidence\n- Refund policy acceptance\n- Service usage logs\n- Identity verification evidence, if relevant\n\nDecision rules:\n- Auto-accept low-value disputes below cost threshold.\n- Fight disputes with strong evidence and high value.\n- Escalate repeat buyer abuse.\n- Block seller payouts if dispute risk exceeds threshold.\n```\n\nThe TPM also needs balance behavior:\n\n```txt\nWhen dispute opens:\nMove disputed amount from available balance to held/disputed balance.\n\nIf won:\nRelease funds back to available balance.\n\nIf lost:\nRecord loss, fee, and final ledger adjustment.\n```\n\nThis protects both accounting accuracy and user understanding.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why are disputes a product problem?",
    "What states should a dispute workflow have?",
    "What evidence might be needed?",
    "How should disputes affect available balance?",
    "Why do deadlines matter?"
  ],
  "interviewAnswer": "I would design disputes around lifecycle states, evidence collection, deadlines, balance impact, decision rules, notifications, support tooling, and audit history.\n\nA strong TPM answer shows that disputes are not just finance operations. They are a risk and trust workflow that needs product design.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: Disputes",
      "url": "https://docs.stripe.com/disputes"
    },
    {
      "label": "Stripe Docs: How disputes work",
      "url": "https://docs.stripe.com/disputes/how-disputes-work"
    }
  ],
  "beginnerExplanation": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.\n\nThe beginner mistake is thinking disputes are only a finance problem. Disputes affect risk, customer experience, merchant trust, support, evidence collection, product policy, and account health.\n\nThe product must answer:\n\n```txt\nWho is notified?\nWhat evidence is needed?\nWho decides whether to fight or accept?\nWhat deadlines apply?\nHow does the disputed amount affect balances?\nWhat happens if the dispute is won or lost?\n```",
  "example": "Imagine a marketplace seller receives a $500 order. Two weeks later, the buyer disputes the payment as unauthorized.\n\nThe product cannot simply show \"payment failed.\" The seller needs to know money is being held, what the reason is, what evidence is needed, and when a response is due.\n\nA weak workflow says:\n\n```txt\nSend dispute email. Let support handle it.\n```\n\nA stronger workflow has states:\n\n```txt\nDispute opened\n-> Evidence needed\n-> Evidence submitted\n-> Under review\n-> Won\nor\n-> Lost\nor\n-> Accepted\n```\n\nEach state needs UI, notifications, support visibility, ledger impact, and audit history.",
  "commonMistakes": "A common mistake is not collecting evidence before disputes happen. If logs and receipts are missing, the team cannot reconstruct the story later.\n\nAnother mistake is treating dispute response as purely manual. The product can pre-fill evidence and guide the user.\n\nA third mistake is hiding deadlines. Missing a response deadline can turn a possibly winnable dispute into a loss."
};
