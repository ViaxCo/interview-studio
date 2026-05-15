import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ach-return-risk-monitoring",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you monitor ACH return risk?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "ACH return risk is the risk that bank transfers come back unpaid, unauthorized, invalid, or otherwise rejected after you thought they were moving successfully.\n\nThe beginner mistake is treating ACH like instant card authorization. ACH has delayed outcomes. A debit can appear successful and then return later because of insufficient funds, invalid account details, revoked authorization, or an unauthorized claim.\n\nThe mental model:\n\n```txt\nSubmitted:\nWe sent the ACH entry.\n\nSettled-looking:\nMoney movement appears to be progressing.\n\nReturned:\nThe network or receiving bank sends back a reason code.\n```\n\nA TPM needs to design for delayed truth."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a lending app pulls repayment by ACH. On Monday, the debit is submitted. On Tuesday, the app gives the user more credit because the repayment appears successful. On Thursday, the debit returns unauthorized.\n\nNow the company has credit exposure and a risk signal.\n\nThe product should not only show \"payment failed.\" It should connect return behavior to risk controls.\n\n```txt\nReturn reason:\nUnauthorized\n\nProduct impact:\nPause future ACH debits, restrict credit increases, request updated payment authorization, review account.\n```"
    },
    {
      "title": "Make it practical",
      "body": "Here is an ACH return monitoring artifact:\n\n```txt\nMetrics:\n- Overall return rate\n- Unauthorized return rate\n- Administrative return rate\n- Insufficient funds return rate\n- Return rate by originator\n- Return rate by product\n- Return rate by onboarding cohort\n\nControls:\n- Verify bank account before first debit\n- Delay risky benefits until return window passes\n- Cap first debit amount for new users\n- Stop retrying unauthorized returns\n- Alert when return thresholds trend upward\n\nCase triggers:\n- Multiple returns from same customer\n- Spike by partner or product\n- Unauthorized return after recent account change\n- Return after benefit already granted\n```\n\nACH product design should answer, \"What can the user do before the transfer is truly final?\""
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is granting irreversible value too early. If the ACH later returns, the business may lose money.\n\nAnother mistake is treating all return codes the same. Insufficient funds, invalid account, and unauthorized debit require different product responses.\n\nA third mistake is monitoring only total returns. Unauthorized returns may matter more than overall volume because they signal permission and compliance problems."
    }
  ],
  "answer": "ACH return risk is the risk that bank transfers come back unpaid, unauthorized, invalid, or otherwise rejected after you thought they were moving successfully.",
  "reasoning": "Here is an ACH return monitoring artifact:\n\n```txt\nMetrics:\n- Overall return rate\n- Unauthorized return rate\n- Administrative return rate\n- Insufficient funds return rate\n- Return rate by originator\n- Return rate by product\n- Return rate by onboarding cohort\n\nControls:\n- Verify bank account before first debit\n- Delay risky benefits until return window passes\n- Cap first debit amount for new users\n- Stop retrying unauthorized returns\n- Alert when return thresholds trend upward\n\nCase triggers:\n- Multiple returns from same customer\n- Spike by partner or product\n- Unauthorized return after recent account change\n- Return after benefit already granted\n```\n\nACH product design should answer, \"What can the user do before the transfer is truly final?\"",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is ACH different from instant card authorization?",
    "What can go wrong if benefits are granted before return risk is known?",
    "Why should return reason codes drive different actions?",
    "What return metrics should a TPM monitor?",
    "How would you reduce unauthorized return risk during onboarding?"
  ],
  "interviewAnswer": "I would monitor ACH return risk by tracking return rates by reason, product, cohort, originator, and time window. I would design controls for account verification, delayed benefit release, first-transaction caps, retry rules, unauthorized return handling, and alerts when thresholds worsen.\n\nA strong answer shows that ACH has delayed failure modes and that product behavior must account for them.",
  "sourceLinks": [
    {
      "label": "Nacha: ACH Network Risk and Enforcement Topics",
      "url": "https://www.nacha.org/rules/ach-network-risk-and-enforcement-topics"
    },
    {
      "label": "Nacha: Unauthorized Entry Fee",
      "url": "https://www.nacha.org/rules/improving-ach-network-quality-unauthorized-entry-fee"
    }
  ],
  "beginnerExplanation": "ACH return risk is the risk that bank transfers come back unpaid, unauthorized, invalid, or otherwise rejected after you thought they were moving successfully.\n\nThe beginner mistake is treating ACH like instant card authorization. ACH has delayed outcomes. A debit can appear successful and then return later because of insufficient funds, invalid account details, revoked authorization, or an unauthorized claim.\n\nThe mental model:\n\n```txt\nSubmitted:\nWe sent the ACH entry.\n\nSettled-looking:\nMoney movement appears to be progressing.\n\nReturned:\nThe network or receiving bank sends back a reason code.\n```\n\nA TPM needs to design for delayed truth.",
  "example": "Imagine a lending app pulls repayment by ACH. On Monday, the debit is submitted. On Tuesday, the app gives the user more credit because the repayment appears successful. On Thursday, the debit returns unauthorized.\n\nNow the company has credit exposure and a risk signal.\n\nThe product should not only show \"payment failed.\" It should connect return behavior to risk controls.\n\n```txt\nReturn reason:\nUnauthorized\n\nProduct impact:\nPause future ACH debits, restrict credit increases, request updated payment authorization, review account.\n```",
  "commonMistakes": "A common mistake is granting irreversible value too early. If the ACH later returns, the business may lose money.\n\nAnother mistake is treating all return codes the same. Insufficient funds, invalid account, and unauthorized debit require different product responses.\n\nA third mistake is monitoring only total returns. Unauthorized returns may matter more than overall volume because they signal permission and compliance problems."
};
