import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fee-transparency-disclosures",
  "track": "TPM",
  "category": "Compliance UX",
  "level": "Intermediate",
  "question": "How would you design fee transparency for a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Fee transparency means users can understand what they will pay before they commit.\n\nThe beginner mistake is showing fees only after the user is emotionally invested or at the final step. In fintech, fees can affect trust, complaints, conversion quality, and regulatory risk. Good design shows fees early enough, clearly enough, and in the context where the user is making the decision.\n\nThe mental model:\n\n```txt\nBase amount:\nWhat the user wants to send, spend, borrow, or withdraw.\n\nFee:\nWhat the product charges.\n\nNet result:\nWhat the user pays or receives after fees.\n```\n\nThe TPM should make fee math visible and consistent."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user sends $100 internationally.\n\nA weak flow says:\n\n```txt\nTotal: $106\n```\n\nA better flow says:\n\n```txt\nYou send: $100\nTransfer fee: $4\nExchange rate: 1 USD = 1,540 NGN\nRecipient gets: 154,000 NGN\nTotal charged: $104\n```\n\nNow the user understands the cost and outcome."
    },
    {
      "title": "Make it practical",
      "body": "Here is a fee transparency artifact:\n\n```txt\nProduct:\nInternational transfer\n\nFee display requirements:\n- Show fee before confirmation\n- Show total charged\n- Show recipient amount if applicable\n- Show exchange rate if applicable\n- Explain variable fees\n- Preserve receipt after transaction\n\nEdge cases:\n- Fee changes before confirmation\n- Promotional fee waiver\n- Partner fee added\n- Failed transaction refund\n- Partial refund\n\nMetrics:\n- Fee-related complaints\n- Dropoff at fee step\n- Refund contacts\n- Dispute reason mentions fee\n```\n\nFee transparency should reduce surprises, not hide complexity."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is hiding fees inside totals. Users notice later and lose trust.\n\nAnother mistake is not explaining fee changes. If the fee can change because amount, method, or corridor changes, the UI should update clearly.\n\nA third mistake is having receipts that do not match checkout. That creates support pain."
    }
  ],
  "answer": "Fee transparency means users can understand what they will pay before they commit.",
  "reasoning": "Here is a fee transparency artifact:\n\n```txt\nProduct:\nInternational transfer\n\nFee display requirements:\n- Show fee before confirmation\n- Show total charged\n- Show recipient amount if applicable\n- Show exchange rate if applicable\n- Explain variable fees\n- Preserve receipt after transaction\n\nEdge cases:\n- Fee changes before confirmation\n- Promotional fee waiver\n- Partner fee added\n- Failed transaction refund\n- Partial refund\n\nMetrics:\n- Fee-related complaints\n- Dropoff at fee step\n- Refund contacts\n- Dispute reason mentions fee\n```\n\nFee transparency should reduce surprises, not hide complexity.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should fees appear before confirmation?",
    "What is the difference between fee and total charged?",
    "What fee edge cases should the product handle?",
    "How can fee confusion show up in metrics?",
    "Why should receipts match the confirmation screen?"
  ],
  "interviewAnswer": "I would design fee transparency by showing fees before confirmation, separating base amount, fee, exchange rate, recipient amount, and total charged, handling fee changes and refunds, preserving receipts, and monitoring fee-related complaints and dropoff.\n\nA strong answer shows that fee display is both UX and compliance risk control.",
  "sourceLinks": [
    {
      "label": "CFPB: Remittance transfers",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/"
    },
    {
      "label": "CFPB: Prepaid accounts rule",
      "url": "https://www.consumerfinance.gov/rules-policy/final-rules/prepaid-accounts-under-electronic-fund-transfer-act-regulation-e-and-truth-lending-act-regulation-z/"
    }
  ],
  "beginnerExplanation": "Fee transparency means users can understand what they will pay before they commit.\n\nThe beginner mistake is showing fees only after the user is emotionally invested or at the final step. In fintech, fees can affect trust, complaints, conversion quality, and regulatory risk. Good design shows fees early enough, clearly enough, and in the context where the user is making the decision.\n\nThe mental model:\n\n```txt\nBase amount:\nWhat the user wants to send, spend, borrow, or withdraw.\n\nFee:\nWhat the product charges.\n\nNet result:\nWhat the user pays or receives after fees.\n```\n\nThe TPM should make fee math visible and consistent.",
  "example": "Imagine a user sends $100 internationally.\n\nA weak flow says:\n\n```txt\nTotal: $106\n```\n\nA better flow says:\n\n```txt\nYou send: $100\nTransfer fee: $4\nExchange rate: 1 USD = 1,540 NGN\nRecipient gets: 154,000 NGN\nTotal charged: $104\n```\n\nNow the user understands the cost and outcome.",
  "commonMistakes": "A common mistake is hiding fees inside totals. Users notice later and lose trust.\n\nAnother mistake is not explaining fee changes. If the fee can change because amount, method, or corridor changes, the UI should update clearly.\n\nA third mistake is having receipts that do not match checkout. That creates support pain."
};
