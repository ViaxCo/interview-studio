import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-payments-remittance-requirements",
  "track": "TPM",
  "category": "Product Requirements",
  "level": "Intermediate",
  "question": "How would you define requirements for a payments or remittance feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.\n\nThe beginner mistake is writing only the happy path: \"User sends money to a recipient.\" A real payments feature has states, limits, fees, exchange rates, funding methods, compliance checks, partner statuses, reversals, refunds, retries, reconciliation, notifications, and support visibility.\n\nThe TPM's job is to turn the money movement into a clear product and system contract."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user sends $100 to a family member in another country.\n\nThe product must answer:\n\n- Who is the sender?\n- Who is the recipient?\n- Is the sender verified?\n- Is the recipient allowed?\n- What is the exchange rate?\n- What fees apply?\n- How will the sender fund the transfer?\n- Which payout partner will deliver it?\n- What happens if funding succeeds but payout fails?\n- What status does the user see?\n- What does support see?\n\nThis is why requirements should include a state model.\n\n```txt\nTransfer states\n\nDraft\nQuote shown\nUser confirmed\nFunding pending\nFunded\nCompliance review\nPayout processing\nPaid\nFailed\nReversed\nRefunded\nUnknown\n```\n\nEach state should have allowed actions, user copy, support visibility, and system owner."
    },
    {
      "title": "Make it practical",
      "body": "I would write requirements across product, technical, risk, and operations.\n\n```txt\nCore requirements\n\n- User can enter amount, recipient, funding method, and payout method.\n- User sees fees, exchange rate, estimated delivery time, and total cost before confirming.\n- System checks user eligibility, recipient eligibility, limits, sanctions, and fraud risk before payout.\n- Each transfer has a unique idempotency key so retries do not create duplicates.\n- User receives clear status updates.\n- Support can search by transfer ID and see status history.\n- Reconciliation identifies partner mismatches.\n```\n\nThen I would define edge cases:\n\n```txt\nEdge cases\n\n- Funding fails.\n- Funding succeeds but payout fails.\n- Partner timeout.\n- Duplicate submit.\n- Exchange rate expires.\n- Recipient details are invalid.\n- Compliance review is required.\n- User cancels before funding.\n- Refund is required.\n```\n\nGood requirements make these cases explicit before engineering has to guess."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating payment status as a single success or failure. Real money movement often has pending, uncertain, reversed, and manually reviewed states.\n\nAnother mistake is ignoring idempotency. Retrying money movement without duplicate protection is dangerous.\n\nA third mistake is forgetting support and reconciliation. If customers ask where their money is, the company needs evidence."
    }
  ],
  "answer": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.",
  "reasoning": "I would write requirements across product, technical, risk, and operations.\n\n```txt\nCore requirements\n\n- User can enter amount, recipient, funding method, and payout method.\n- User sees fees, exchange rate, estimated delivery time, and total cost before confirming.\n- System checks user eligibility, recipient eligibility, limits, sanctions, and fraud risk before payout.\n- Each transfer has a unique idempotency key so retries do not create duplicates.\n- User receives clear status updates.\n- Support can search by transfer ID and see status history.\n- Reconciliation identifies partner mismatches.\n```\n\nThen I would define edge cases:\n\n```txt\nEdge cases\n\n- Funding fails.\n- Funding succeeds but payout fails.\n- Partner timeout.\n- Duplicate submit.\n- Exchange rate expires.\n- Recipient details are invalid.\n- Compliance review is required.\n- User cancels before funding.\n- Refund is required.\n```\n\nGood requirements make these cases explicit before engineering has to guess.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is the happy path not enough for payments?",
    "What states might a transfer move through?",
    "Why does idempotency matter?",
    "What should users see before confirming?",
    "Why do support and reconciliation need requirements?"
  ],
  "interviewAnswer": "I would define payments or remittance requirements by covering the full money-movement lifecycle: quote, confirmation, funding, compliance, payout, status updates, failure handling, refunds or reversals, idempotency, reconciliation, notifications, limits, and support tooling.\n\nA strong answer makes edge cases explicit and shows that customer trust depends on accurate status, safe retries, and operational visibility.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: PaymentIntents",
      "url": "https://docs.stripe.com/payments/payment-intents"
    },
    {
      "label": "Stripe Docs: Idempotent requests",
      "url": "https://docs.stripe.com/api/idempotent_requests"
    }
  ],
  "beginnerExplanation": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.\n\nThe beginner mistake is writing only the happy path: \"User sends money to a recipient.\" A real payments feature has states, limits, fees, exchange rates, funding methods, compliance checks, partner statuses, reversals, refunds, retries, reconciliation, notifications, and support visibility.\n\nThe TPM's job is to turn the money movement into a clear product and system contract.",
  "example": "Imagine a user sends $100 to a family member in another country.\n\nThe product must answer:\n\n- Who is the sender?\n- Who is the recipient?\n- Is the sender verified?\n- Is the recipient allowed?\n- What is the exchange rate?\n- What fees apply?\n- How will the sender fund the transfer?\n- Which payout partner will deliver it?\n- What happens if funding succeeds but payout fails?\n- What status does the user see?\n- What does support see?\n\nThis is why requirements should include a state model.\n\n```txt\nTransfer states\n\nDraft\nQuote shown\nUser confirmed\nFunding pending\nFunded\nCompliance review\nPayout processing\nPaid\nFailed\nReversed\nRefunded\nUnknown\n```\n\nEach state should have allowed actions, user copy, support visibility, and system owner.",
  "commonMistakes": "A common mistake is treating payment status as a single success or failure. Real money movement often has pending, uncertain, reversed, and manually reviewed states.\n\nAnother mistake is ignoring idempotency. Retrying money movement without duplicate protection is dangerous.\n\nA third mistake is forgetting support and reconciliation. If customers ask where their money is, the company needs evidence."
};
