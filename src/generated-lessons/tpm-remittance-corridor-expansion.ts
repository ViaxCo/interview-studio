import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-remittance-corridor-expansion",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Advanced",
  "question": "How would you launch a new international remittance corridor?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A remittance corridor is a route for sending money from one country to another, such as United States to Mexico or United Kingdom to Nigeria.\n\nThe beginner mistake is thinking corridor launch is only adding a new country dropdown. A corridor touches FX, liquidity, payout partners, compliance, fraud risk, disclosures, customer support, error handling, settlement timing, and local recipient experience.\n\nThe mental model:\n\n```txt\nSender side:\nHow money is collected.\n\nMiddle:\nFX, compliance, risk, and settlement.\n\nRecipient side:\nHow money is paid out and confirmed.\n```\n\nThe TPM should prove the corridor works in normal and messy cases before launch."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine launching U.S. to Ghana bank payouts.\n\nThe happy path is simple: sender pays in dollars, recipient receives local currency. The real product questions are harder:\n\n```txt\nWhat exchange rate is shown?\nHow long does payout take?\nWhat fees are disclosed?\nWhat happens if the recipient account is invalid?\nWhat happens if the payout partner is down?\nHow does support trace a failed payout?\n```\n\nThose details determine whether the corridor is trustworthy."
    },
    {
      "title": "Make it practical",
      "body": "Here is a corridor launch artifact:\n\n```txt\nCorridor:\nUnited States to Ghana\n\nRequirements:\n- Sender eligibility\n- Recipient data fields\n- FX quote and expiry\n- Fee and amount-received disclosure\n- Payout partner status\n- Sanctions and compliance screening\n- Fraud controls\n- Settlement and reconciliation\n- Error and cancellation handling\n- Support investigation view\n\nLaunch gates:\n- 100 successful test payouts\n- Invalid recipient test passed\n- Partner outage fallback tested\n- Reconciliation file matched\n- Support runbook approved\n- Complaint and error process ready\n```\n\nThe corridor is not ready until operations can handle failure."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is testing only successful payouts. Bad account details, delayed settlement, partner downtime, and compliance holds are the real launch risks.\n\nAnother mistake is hiding fees or timing uncertainty. Remittance users care deeply about how much arrives and when.\n\nA third mistake is not building corridor-level monitoring. A global success rate can hide one corridor breaking."
    }
  ],
  "answer": "A remittance corridor is a route for sending money from one country to another, such as United States to Mexico or United Kingdom to Nigeria.",
  "reasoning": "Here is a corridor launch artifact:\n\n```txt\nCorridor:\nUnited States to Ghana\n\nRequirements:\n- Sender eligibility\n- Recipient data fields\n- FX quote and expiry\n- Fee and amount-received disclosure\n- Payout partner status\n- Sanctions and compliance screening\n- Fraud controls\n- Settlement and reconciliation\n- Error and cancellation handling\n- Support investigation view\n\nLaunch gates:\n- 100 successful test payouts\n- Invalid recipient test passed\n- Partner outage fallback tested\n- Reconciliation file matched\n- Support runbook approved\n- Complaint and error process ready\n```\n\nThe corridor is not ready until operations can handle failure.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a remittance corridor more than a country dropdown?",
    "What must be disclosed to the sender?",
    "What failure cases should be tested before launch?",
    "Why does support need payout tracing?",
    "What metrics would you monitor by corridor?"
  ],
  "interviewAnswer": "I would launch a corridor by defining sender eligibility, recipient fields, FX quote behavior, fees and disclosures, compliance screening, payout partner integration, settlement, reconciliation, support tooling, failure states, and corridor-level monitoring. I would test invalid recipient, partner outage, delayed payout, cancellation, refund, and reconciliation mismatch before launch.\n\nA strong answer shows that international money movement is a system of product, risk, operations, and customer trust.",
  "sourceLinks": [
    {
      "label": "CFPB: Remittance transfers",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/"
    },
    {
      "label": "CFPB: Remittance transfer rights",
      "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/"
    }
  ],
  "beginnerExplanation": "A remittance corridor is a route for sending money from one country to another, such as United States to Mexico or United Kingdom to Nigeria.\n\nThe beginner mistake is thinking corridor launch is only adding a new country dropdown. A corridor touches FX, liquidity, payout partners, compliance, fraud risk, disclosures, customer support, error handling, settlement timing, and local recipient experience.\n\nThe mental model:\n\n```txt\nSender side:\nHow money is collected.\n\nMiddle:\nFX, compliance, risk, and settlement.\n\nRecipient side:\nHow money is paid out and confirmed.\n```\n\nThe TPM should prove the corridor works in normal and messy cases before launch.",
  "example": "Imagine launching U.S. to Ghana bank payouts.\n\nThe happy path is simple: sender pays in dollars, recipient receives local currency. The real product questions are harder:\n\n```txt\nWhat exchange rate is shown?\nHow long does payout take?\nWhat fees are disclosed?\nWhat happens if the recipient account is invalid?\nWhat happens if the payout partner is down?\nHow does support trace a failed payout?\n```\n\nThose details determine whether the corridor is trustworthy.",
  "commonMistakes": "A common mistake is testing only successful payouts. Bad account details, delayed settlement, partner downtime, and compliance holds are the real launch risks.\n\nAnother mistake is hiding fees or timing uncertainty. Remittance users care deeply about how much arrives and when.\n\nA third mistake is not building corridor-level monitoring. A global success rate can hide one corridor breaking."
};
