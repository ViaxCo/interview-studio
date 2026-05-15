import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-settlement-cutoff-pending-states",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you design pending states around settlement cutoffs?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Settlement cutoffs are timing boundaries that affect when money actually moves or becomes available.\n\nThe beginner mistake is showing one vague \"pending\" state for everything. A payment pending before cutoff, after cutoff, during partner processing, under review, or waiting for settlement are different states with different customer expectations.\n\nThe mental model:\n\n```txt\nUser action time:\nWhen the user initiated the transfer.\n\nProcessing window:\nWhen partners and networks process it.\n\nAvailability:\nWhen money can be used, paid out, refunded, or considered final.\n```\n\nThe TPM should make timing understandable without overpromising."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user submits a transfer at 4:58 p.m. and the bank cutoff is 5:00 p.m.\n\nIf the transfer misses cutoff, the user may think the app failed. The product should show:\n\n```txt\nTransfer submitted\nProcessing starts next business day\nEstimated arrival updated\nCancellation available until processing begins\n```\n\nThat is more helpful than a generic spinner."
    },
    {
      "title": "Make it practical",
      "body": "Here is a pending-state artifact:\n\n```txt\nPayment flow:\nBank payout\n\nStates:\n- Draft\n- Submitted before cutoff\n- Submitted after cutoff\n- Processing\n- Partner accepted\n- Settled\n- Failed\n- Returned\n- Canceled\n\nUser copy:\n- \"Submitted after today's cutoff\"\n- \"Processing starts next business day\"\n- \"Expected arrival: Tuesday\"\n- \"You can cancel until processing begins\"\n\nSystem fields:\n- User submission time\n- Partner cutoff time\n- Business calendar\n- Current state\n- Estimated availability\n- Cancellation eligibility\n```\n\nPending states should explain time, not hide it."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using \"pending\" for every non-final state. Users and support need more detail.\n\nAnother mistake is ignoring weekends and holidays. Settlement timing is often business-day based.\n\nA third mistake is promising arrival times that partners or networks do not guarantee."
    }
  ],
  "answer": "Settlement cutoffs are timing boundaries that affect when money actually moves or becomes available.",
  "reasoning": "Here is a pending-state artifact:\n\n```txt\nPayment flow:\nBank payout\n\nStates:\n- Draft\n- Submitted before cutoff\n- Submitted after cutoff\n- Processing\n- Partner accepted\n- Settled\n- Failed\n- Returned\n- Canceled\n\nUser copy:\n- \"Submitted after today's cutoff\"\n- \"Processing starts next business day\"\n- \"Expected arrival: Tuesday\"\n- \"You can cancel until processing begins\"\n\nSystem fields:\n- User submission time\n- Partner cutoff time\n- Business calendar\n- Current state\n- Estimated availability\n- Cancellation eligibility\n```\n\nPending states should explain time, not hide it.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is one pending state not enough?",
    "What happens when a payment misses cutoff?",
    "Why do holidays matter?",
    "What should support see?",
    "How would you avoid overpromising arrival time?"
  ],
  "interviewAnswer": "I would design settlement pending states around submission time, cutoff, business calendar, partner processing, settlement, returns, cancellation eligibility, estimated availability, support visibility, and customer copy. The goal is to explain timing and options clearly.\n\nA strong answer shows that money movement UX depends on operational timing.",
  "sourceLinks": [
    {
      "label": "Stripe balance availability",
      "url": "https://docs.stripe.com/payments/balances"
    },
    {
      "label": "CFPB: Remittance transfers",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/"
    }
  ],
  "beginnerExplanation": "Settlement cutoffs are timing boundaries that affect when money actually moves or becomes available.\n\nThe beginner mistake is showing one vague \"pending\" state for everything. A payment pending before cutoff, after cutoff, during partner processing, under review, or waiting for settlement are different states with different customer expectations.\n\nThe mental model:\n\n```txt\nUser action time:\nWhen the user initiated the transfer.\n\nProcessing window:\nWhen partners and networks process it.\n\nAvailability:\nWhen money can be used, paid out, refunded, or considered final.\n```\n\nThe TPM should make timing understandable without overpromising.",
  "example": "Imagine a user submits a transfer at 4:58 p.m. and the bank cutoff is 5:00 p.m.\n\nIf the transfer misses cutoff, the user may think the app failed. The product should show:\n\n```txt\nTransfer submitted\nProcessing starts next business day\nEstimated arrival updated\nCancellation available until processing begins\n```\n\nThat is more helpful than a generic spinner.",
  "commonMistakes": "A common mistake is using \"pending\" for every non-final state. Users and support need more detail.\n\nAnother mistake is ignoring weekends and holidays. Settlement timing is often business-day based.\n\nA third mistake is promising arrival times that partners or networks do not guarantee."
};
