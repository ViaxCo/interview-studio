import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-credit-bureau-dispute-workflow",
  "track": "TPM",
  "category": "Credit & Lending",
  "level": "Advanced",
  "question": "How would you design a credit bureau dispute workflow?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A credit bureau dispute workflow helps a company investigate when a consumer says reported credit information is wrong.\n\nThe beginner mistake is treating credit reporting as a one-way export. If the company furnishes data, it also needs a way to investigate disputes, review relevant information, correct errors, and communicate outcomes through the proper channel.\n\nThe mental model:\n\n```txt\nReported data:\nWhat the company sent to credit bureaus.\n\nDispute:\nThe consumer says some reported data is inaccurate.\n\nInvestigation:\nThe company checks its records and decides whether to update, delete, verify, or correct.\n```\n\nThis workflow needs precision because bad credit data can affect someone's ability to borrow, rent, or get services."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a borrower says their account is incorrectly reported as 30 days late.\n\nThe company needs to check:\n\n```txt\nWas the payment due date correct?\nWhen did payment arrive?\nWas there a payment processing delay?\nWas a hardship plan active?\nWas the account already corrected internally?\nDid the bureau receive an old file?\n```\n\nThe investigation should be evidence-based, not just \"our system says it is right.\""
    },
    {
      "title": "Make it practical",
      "body": "Here is a dispute workflow artifact:\n\n```txt\nDispute type:\nIncorrect delinquency status\n\nCase data:\n- Consumer identifier\n- Account identifier\n- Bureau dispute code\n- Reported field being disputed\n- Payment history\n- Due dates and grace periods\n- Hardship or deferment status\n- Prior corrections\n- Supporting documents\n\nDecision outcomes:\n- Verify as accurate\n- Correct reported value\n- Delete disputed item\n- Mark as disputed\n- Request more information if allowed\n\nOperational controls:\n- SLA tracking\n- Reviewer assignment\n- Evidence checklist\n- Bureau update file\n- Consumer response record\n- Quality review sampling\n```\n\nThe TPM should make it hard to close a dispute without reviewing the relevant facts."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is designing the workflow around internal convenience instead of the disputed field. The reviewer needs the facts that explain that exact field.\n\nAnother mistake is failing to reconcile bureau files after a correction. A fix that does not reach the bureau is not a real fix.\n\nA third mistake is not tracking repeat disputes. Repeated complaints about the same field may indicate a systemic reporting bug."
    }
  ],
  "answer": "A credit bureau dispute workflow helps a company investigate when a consumer says reported credit information is wrong.",
  "reasoning": "Here is a dispute workflow artifact:\n\n```txt\nDispute type:\nIncorrect delinquency status\n\nCase data:\n- Consumer identifier\n- Account identifier\n- Bureau dispute code\n- Reported field being disputed\n- Payment history\n- Due dates and grace periods\n- Hardship or deferment status\n- Prior corrections\n- Supporting documents\n\nDecision outcomes:\n- Verify as accurate\n- Correct reported value\n- Delete disputed item\n- Mark as disputed\n- Request more information if allowed\n\nOperational controls:\n- SLA tracking\n- Reviewer assignment\n- Evidence checklist\n- Bureau update file\n- Consumer response record\n- Quality review sampling\n```\n\nThe TPM should make it hard to close a dispute without reviewing the relevant facts.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What makes credit reporting disputes high stakes?",
    "What data should a reviewer see for a delinquency dispute?",
    "Why should the disputed field drive the evidence checklist?",
    "How would you detect a systemic reporting error?",
    "What should happen after a correction is approved?"
  ],
  "interviewAnswer": "I would design credit bureau disputes as structured investigations with disputed-field mapping, evidence checklists, SLA tracking, reviewer ownership, decision outcomes, bureau correction files, consumer response records, and quality review. I would also monitor repeat disputes to find systemic reporting issues.\n\nA strong TPM answer shows that furnishing data creates responsibility for corrections, not just export jobs.",
  "sourceLinks": [
    {
      "label": "CFPB: Dispute credit report errors",
      "url": "https://www.consumerfinance.gov/askcfpb/1303"
    },
    {
      "label": "CFPB: Furnisher investigation bulletin",
      "url": "https://www.consumerfinance.gov/compliance/supervisory-guidance/bulletin-fcra-requirement-furnishers-conduct-investigations/"
    }
  ],
  "beginnerExplanation": "A credit bureau dispute workflow helps a company investigate when a consumer says reported credit information is wrong.\n\nThe beginner mistake is treating credit reporting as a one-way export. If the company furnishes data, it also needs a way to investigate disputes, review relevant information, correct errors, and communicate outcomes through the proper channel.\n\nThe mental model:\n\n```txt\nReported data:\nWhat the company sent to credit bureaus.\n\nDispute:\nThe consumer says some reported data is inaccurate.\n\nInvestigation:\nThe company checks its records and decides whether to update, delete, verify, or correct.\n```\n\nThis workflow needs precision because bad credit data can affect someone's ability to borrow, rent, or get services.",
  "example": "Imagine a borrower says their account is incorrectly reported as 30 days late.\n\nThe company needs to check:\n\n```txt\nWas the payment due date correct?\nWhen did payment arrive?\nWas there a payment processing delay?\nWas a hardship plan active?\nWas the account already corrected internally?\nDid the bureau receive an old file?\n```\n\nThe investigation should be evidence-based, not just \"our system says it is right.\"",
  "commonMistakes": "A common mistake is designing the workflow around internal convenience instead of the disputed field. The reviewer needs the facts that explain that exact field.\n\nAnother mistake is failing to reconcile bureau files after a correction. A fix that does not reach the bureau is not a real fix.\n\nA third mistake is not tracking repeat disputes. Repeated complaints about the same field may indicate a systemic reporting bug."
};
