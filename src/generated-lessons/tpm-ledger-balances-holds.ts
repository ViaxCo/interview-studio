import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ledger-balances-holds",
  "track": "TPM",
  "category": "Fintech Infrastructure",
  "level": "Intermediate",
  "question": "How would you define product requirements for a ledger, balances, and holds system?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?\n\nThe beginner mistake is thinking a balance is just one number in a database row. In fintech, a user can have several balance concepts at the same time.\n\n```txt\nCurrent balance:\nAll funds recorded in the account.\n\nAvailable balance:\nFunds the user can actually spend or withdraw.\n\nPending balance:\nFunds not final yet, such as incoming settlement or card authorization.\n\nHeld balance:\nFunds reserved for risk, dispute, compliance, or operational reasons.\n```\n\nIf the product mixes these up, users may spend money they should not spend, support may give wrong answers, and finance may fail reconciliation."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a marketplace wallet. A seller receives a $100 payment. The platform holds $10 as a risk reserve, charges a $3 fee, and makes $87 available for payout after settlement.\n\nA weak requirement says:\n\n```txt\nShow seller balance.\n```\n\nA strong requirement asks:\n\n```txt\nWhich balance is shown?\nWhen does it become available?\nWhat is held and why?\nCan the hold expire?\nWho can override it?\nWhat audit trail proves the calculation?\nWhat happens if the payment is reversed?\n```\n\nThe product needs to explain money states without exposing accounting internals to the user."
    },
    {
      "title": "Make it practical",
      "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nSeller wallet balance\n\nUser-facing balances:\n- Available for payout\n- Pending settlement\n- Held in reserve\n\nLedger events:\n- Payment received\n- Platform fee assessed\n- Risk reserve hold created\n- Funds settled\n- Payout initiated\n- Payout completed\n- Dispute opened\n- Hold released or extended\n\nRules:\n- Users can only withdraw available balance.\n- Pending funds become available after settlement.\n- Risk holds reduce available balance.\n- Every balance change must be traceable to a ledger event.\n- Manual adjustments require reason code, approver, and audit log.\n\nSupport view:\n- Current balance\n- Available balance\n- Pending amount\n- Held amount\n- Hold reason\n- Expected release date\n- Related transaction IDs\n```\n\nThe TPM also needs to define user copy:\n\n```txt\n$87.00 available\n$10.00 held until June 2 for standard risk review\n$100.00 payment received, $3.00 platform fee applied\n```\n\nThat copy is short, but it is backed by a precise ledger model."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is letting engineers build ledger states without product definitions. That leads to support and UI confusion later.\n\nAnother mistake is hiding holds from users. If money is unavailable, the product should explain why and what happens next where legally and operationally safe.\n\nA third mistake is allowing manual adjustments without auditability. In money systems, manual fixes need controls."
    }
  ],
  "answer": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?",
  "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nSeller wallet balance\n\nUser-facing balances:\n- Available for payout\n- Pending settlement\n- Held in reserve\n\nLedger events:\n- Payment received\n- Platform fee assessed\n- Risk reserve hold created\n- Funds settled\n- Payout initiated\n- Payout completed\n- Dispute opened\n- Hold released or extended\n\nRules:\n- Users can only withdraw available balance.\n- Pending funds become available after settlement.\n- Risk holds reduce available balance.\n- Every balance change must be traceable to a ledger event.\n- Manual adjustments require reason code, approver, and audit log.\n\nSupport view:\n- Current balance\n- Available balance\n- Pending amount\n- Held amount\n- Hold reason\n- Expected release date\n- Related transaction IDs\n```\n\nThe TPM also needs to define user copy:\n\n```txt\n$87.00 available\n$10.00 held until June 2 for standard risk review\n$100.00 payment received, $3.00 platform fee applied\n```\n\nThat copy is short, but it is backed by a precise ledger model.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is available balance different from current balance?",
    "What is a hold?",
    "Why does every balance change need an event?",
    "What should support see when a user asks about missing money?",
    "Why are manual adjustments risky?"
  ],
  "interviewAnswer": "I would define ledger requirements by separating current, available, pending, and held balances; mapping every balance change to immutable events; defining hold reasons and release rules; adding support visibility; and requiring audit logs for manual changes.\n\nA strong TPM answer shows that balances are product promises backed by accounting-grade system behavior.",
  "sourceLinks": [
    {
      "label": "Modern Treasury: Ledgers",
      "url": "https://www.moderntreasury.com/ledgers"
    },
    {
      "label": "Stripe Treasury: Working with balances and transactions",
      "url": "https://docs.stripe.com/treasury/account-management/working-with-balances-and-transactions"
    }
  ],
  "beginnerExplanation": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?\n\nThe beginner mistake is thinking a balance is just one number in a database row. In fintech, a user can have several balance concepts at the same time.\n\n```txt\nCurrent balance:\nAll funds recorded in the account.\n\nAvailable balance:\nFunds the user can actually spend or withdraw.\n\nPending balance:\nFunds not final yet, such as incoming settlement or card authorization.\n\nHeld balance:\nFunds reserved for risk, dispute, compliance, or operational reasons.\n```\n\nIf the product mixes these up, users may spend money they should not spend, support may give wrong answers, and finance may fail reconciliation.",
  "example": "Imagine a marketplace wallet. A seller receives a $100 payment. The platform holds $10 as a risk reserve, charges a $3 fee, and makes $87 available for payout after settlement.\n\nA weak requirement says:\n\n```txt\nShow seller balance.\n```\n\nA strong requirement asks:\n\n```txt\nWhich balance is shown?\nWhen does it become available?\nWhat is held and why?\nCan the hold expire?\nWho can override it?\nWhat audit trail proves the calculation?\nWhat happens if the payment is reversed?\n```\n\nThe product needs to explain money states without exposing accounting internals to the user.",
  "commonMistakes": "A common mistake is letting engineers build ledger states without product definitions. That leads to support and UI confusion later.\n\nAnother mistake is hiding holds from users. If money is unavailable, the product should explain why and what happens next where legally and operationally safe.\n\nA third mistake is allowing manual adjustments without auditability. In money systems, manual fixes need controls."
};
