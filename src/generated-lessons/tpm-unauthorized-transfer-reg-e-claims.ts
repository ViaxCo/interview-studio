import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-unauthorized-transfer-reg-e-claims",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you handle unauthorized transfer claims in a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An unauthorized transfer claim happens when a customer says money moved without their permission.\n\nThe beginner mistake is treating it like an ordinary support ticket. In consumer fintech, unauthorized electronic fund transfers can trigger specific investigation, timing, communication, provisional credit, and recordkeeping obligations. The exact obligations depend on product, jurisdiction, partner bank, account type, and facts, so the TPM must work with legal and compliance.\n\nThe mental model:\n\n```txt\nCustomer report:\nThe user says the transfer was not authorized.\n\nInvestigation:\nThe company reviews evidence and timelines.\n\nOutcome:\nThe company corrects the error, denies with explanation, or continues under required rules.\n```\n\nThis is both a customer-trust workflow and a regulated operations workflow."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user says a $900 debit card transaction was not theirs.\n\nA weak product flow says:\n\n```txt\nSubmit a ticket. We will get back to you.\n```\n\nA stronger flow collects structured information:\n\n```txt\nWhich transaction are you reporting?\nDid you lose your card or phone?\nDo you recognize the merchant?\nDid anyone else have access?\nWhen did you notice it?\nCan we contact you for more information?\n```\n\nThe product should also show status so the user is not left guessing."
    },
    {
      "title": "Make it practical",
      "body": "Here is an unauthorized-transfer workflow artifact:\n\n```txt\nClaim intake:\n- Customer selects transaction\n- Customer states why it is unauthorized\n- Product captures report time\n- Product shows next steps and expected timing\n\nInvestigation view:\n- Transaction details\n- Device and login history\n- Card-present or card-not-present details\n- Prior customer activity with merchant\n- Support contact history\n- Linked fraud alerts\n\nCustomer states:\n- Received\n- Under review\n- Temporary credit issued if applicable\n- More information needed\n- Resolved in customer's favor\n- Denied with explanation\n\nControls:\n- Freeze card or account if needed\n- Block merchant or recipient if needed\n- Escalate suspected fraud pattern\n- Preserve evidence\n```\n\nThe user experience should be humane, but the workflow must be precise."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is asking the customer to explain everything in free text. Structured intake makes investigation faster and more consistent.\n\nAnother mistake is giving a denial without useful reasoning or access to next steps.\n\nA third mistake is failing to separate customer-facing status from internal investigation details. Users need clarity, but not sensitive fraud logic."
    }
  ],
  "answer": "An unauthorized transfer claim happens when a customer says money moved without their permission.",
  "reasoning": "Here is an unauthorized-transfer workflow artifact:\n\n```txt\nClaim intake:\n- Customer selects transaction\n- Customer states why it is unauthorized\n- Product captures report time\n- Product shows next steps and expected timing\n\nInvestigation view:\n- Transaction details\n- Device and login history\n- Card-present or card-not-present details\n- Prior customer activity with merchant\n- Support contact history\n- Linked fraud alerts\n\nCustomer states:\n- Received\n- Under review\n- Temporary credit issued if applicable\n- More information needed\n- Resolved in customer's favor\n- Denied with explanation\n\nControls:\n- Freeze card or account if needed\n- Block merchant or recipient if needed\n- Escalate suspected fraud pattern\n- Preserve evidence\n```\n\nThe user experience should be humane, but the workflow must be precise.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is an unauthorized transfer claim more than a normal support ticket?",
    "What information should claim intake collect?",
    "What should the user see while the investigation is active?",
    "What internal evidence might an investigator review?",
    "Why should legal and compliance be involved in requirements?"
  ],
  "interviewAnswer": "I would handle unauthorized transfer claims with structured intake, transaction selection, report timestamping, investigation workflow, customer status states, evidence review, required communications, provisional credit handling where applicable, and audit records. I would partner with legal, compliance, operations, support, and the sponsor bank because the workflow may be regulated.\n\nA strong answer shows that consumer harm, regulatory timing, and operational evidence all matter.",
  "sourceLinks": [
    {
      "label": "CFPB: Unauthorized transaction guidance",
      "url": "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/"
    },
    {
      "label": "CFPB: Electronic Fund Transfers FAQs",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/electronic-fund-transfers/electronic-fund-transfers-faqs/"
    }
  ],
  "beginnerExplanation": "An unauthorized transfer claim happens when a customer says money moved without their permission.\n\nThe beginner mistake is treating it like an ordinary support ticket. In consumer fintech, unauthorized electronic fund transfers can trigger specific investigation, timing, communication, provisional credit, and recordkeeping obligations. The exact obligations depend on product, jurisdiction, partner bank, account type, and facts, so the TPM must work with legal and compliance.\n\nThe mental model:\n\n```txt\nCustomer report:\nThe user says the transfer was not authorized.\n\nInvestigation:\nThe company reviews evidence and timelines.\n\nOutcome:\nThe company corrects the error, denies with explanation, or continues under required rules.\n```\n\nThis is both a customer-trust workflow and a regulated operations workflow.",
  "example": "Imagine a user says a $900 debit card transaction was not theirs.\n\nA weak product flow says:\n\n```txt\nSubmit a ticket. We will get back to you.\n```\n\nA stronger flow collects structured information:\n\n```txt\nWhich transaction are you reporting?\nDid you lose your card or phone?\nDo you recognize the merchant?\nDid anyone else have access?\nWhen did you notice it?\nCan we contact you for more information?\n```\n\nThe product should also show status so the user is not left guessing.",
  "commonMistakes": "A common mistake is asking the customer to explain everything in free text. Structured intake makes investigation faster and more consistent.\n\nAnother mistake is giving a denial without useful reasoning or access to next steps.\n\nA third mistake is failing to separate customer-facing status from internal investigation details. Users need clarity, but not sensitive fraud logic."
};
