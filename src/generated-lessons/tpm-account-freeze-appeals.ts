import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-account-freeze-appeals",
  "track": "TPM",
  "category": "Fraud & Risk",
  "level": "Intermediate",
  "question": "How would you design an account freeze and appeal experience?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An account freeze is a restriction that prevents some or all account activity because the company sees risk.\n\nThe beginner mistake is thinking the product requirement is just \"block the account.\" In real life, freezing an account can stop a fraudster, but it can also trap a legitimate user away from their own money. That means the product needs clear states, careful permissions, safe customer messaging, and a path to resolve the issue.\n\nThe mental model:\n\n```txt\nRestriction:\nWhat the user cannot do right now.\n\nReason:\nWhy the restriction exists internally.\n\nResolution path:\nWhat evidence or action can remove it.\n```\n\nThe user does not need every internal fraud detail, but they do need enough information to know what is happening and how to move forward."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a customer tries to send money after suspicious login behavior. The system freezes outgoing transfers.\n\nA bad experience says:\n\n```txt\nYour account is locked. Contact support.\n```\n\nA better experience says:\n\n```txt\nWe paused transfers from your account while we review unusual activity.\nYou can still sign in and view your balance.\nTo help us review this faster, confirm your identity.\n```\n\nThe second message is calmer. It says what is restricted, what still works, and what the user can do."
    },
    {
      "title": "Make it practical",
      "body": "Here is a freeze and appeal artifact:\n\n```txt\nFreeze type:\nOutgoing transfer restriction\n\nUser can still:\n- Sign in\n- View balance\n- Download statements\n- Contact support\n\nUser cannot:\n- Send money\n- Add new recipients\n- Change security settings\n\nInternal reason:\nPossible account takeover\n\nResolution paths:\n- Step-up identity verification\n- Analyst review\n- Customer support callback\n- Compliance escalation if required\n\nAppeal requirements:\n- Clear status page\n- Evidence upload if needed\n- SLA by risk tier\n- Human review for account closure\n- Audit log for every restriction change\n```\n\nThe product should avoid turning risk controls into a dead end."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using one generic frozen state for every risk. A sanctions hold, account takeover hold, failed KYC hold, and compliance review are not the same product state.\n\nAnother mistake is giving support no visibility. If support cannot explain allowed next steps, the user gets bounced around.\n\nA third mistake is forgetting that restrictions can create harm. A false positive can affect rent, payroll, medical bills, or family support."
    }
  ],
  "answer": "An account freeze is a restriction that prevents some or all account activity because the company sees risk.",
  "reasoning": "Here is a freeze and appeal artifact:\n\n```txt\nFreeze type:\nOutgoing transfer restriction\n\nUser can still:\n- Sign in\n- View balance\n- Download statements\n- Contact support\n\nUser cannot:\n- Send money\n- Add new recipients\n- Change security settings\n\nInternal reason:\nPossible account takeover\n\nResolution paths:\n- Step-up identity verification\n- Analyst review\n- Customer support callback\n- Compliance escalation if required\n\nAppeal requirements:\n- Clear status page\n- Evidence upload if needed\n- SLA by risk tier\n- Human review for account closure\n- Audit log for every restriction change\n```\n\nThe product should avoid turning risk controls into a dead end.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What should the user know during a freeze?",
    "What internal details should not be exposed?",
    "Which account actions should remain available?",
    "When should an appeal require human review?",
    "What metrics would show freeze false positives are too high?"
  ],
  "interviewAnswer": "I would design account freezes as specific restriction states with clear user messaging, safe internal reason codes, support visibility, appeal paths, SLAs, and audit logs. The user should know what is restricted, what still works, and what they can do next, while sensitive fraud logic stays protected.\n\nA strong TPM answer balances fraud prevention with legitimate-user access and resolution.",
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
  "beginnerExplanation": "An account freeze is a restriction that prevents some or all account activity because the company sees risk.\n\nThe beginner mistake is thinking the product requirement is just \"block the account.\" In real life, freezing an account can stop a fraudster, but it can also trap a legitimate user away from their own money. That means the product needs clear states, careful permissions, safe customer messaging, and a path to resolve the issue.\n\nThe mental model:\n\n```txt\nRestriction:\nWhat the user cannot do right now.\n\nReason:\nWhy the restriction exists internally.\n\nResolution path:\nWhat evidence or action can remove it.\n```\n\nThe user does not need every internal fraud detail, but they do need enough information to know what is happening and how to move forward.",
  "example": "Imagine a customer tries to send money after suspicious login behavior. The system freezes outgoing transfers.\n\nA bad experience says:\n\n```txt\nYour account is locked. Contact support.\n```\n\nA better experience says:\n\n```txt\nWe paused transfers from your account while we review unusual activity.\nYou can still sign in and view your balance.\nTo help us review this faster, confirm your identity.\n```\n\nThe second message is calmer. It says what is restricted, what still works, and what the user can do.",
  "commonMistakes": "A common mistake is using one generic frozen state for every risk. A sanctions hold, account takeover hold, failed KYC hold, and compliance review are not the same product state.\n\nAnother mistake is giving support no visibility. If support cannot explain allowed next steps, the user gets bounced around.\n\nA third mistake is forgetting that restrictions can create harm. A false positive can affect rent, payroll, medical bills, or family support."
};
