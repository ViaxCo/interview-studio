import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-negative-balance-recovery",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you design negative balance recovery?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A negative balance happens when an account owes money because refunds, disputes, returns, fees, or reversals exceed available funds.\n\nThe beginner mistake is treating recovery as simply \"take money back.\" In fintech, negative balance recovery needs clear balance display, user communication, payment collection rules, risk controls, support visibility, and escalation for disputes or hardship.\n\nThe mental model:\n\n```txt\nCause:\nWhy did the balance go negative?\n\nAmount:\nHow much is owed?\n\nRecovery path:\nHow can the account return to good standing?\n```\n\nThe TPM should make the balance understandable and prevent surprise debits."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a merchant receives a $300 payout. Later, a $500 dispute is lost. The account balance becomes negative $200.\n\nThe product should show:\n\n```txt\nReason: dispute debit\nAmount owed: $200\nRecovery options: future payments, manual payment, payout hold\nStatus: restricted until balance is resolved\n```\n\nThat is clearer than hiding the problem until the next payout fails."
    },
    {
      "title": "Make it practical",
      "body": "Here is a negative balance artifact:\n\n```txt\nBalance state:\nNegative due to dispute\n\nCustomer view:\n- Amount owed\n- Source transaction\n- Date created\n- Recovery options\n- Impact on payouts or account features\n\nRecovery methods:\n- Deduct from future incoming payments\n- Manual payment\n- Reserve adjustment\n- Collections path if unresolved\n\nControls:\n- Do not double collect\n- Show itemized history\n- Notify before major restriction\n- Support can see cause and status\n- Dispute or appeal path remains visible\n```\n\nThe product should make recovery predictable, not punitive."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is showing only one negative number. Users need to know what caused it.\n\nAnother mistake is recovering funds without clear communication. Surprise deductions create complaints.\n\nA third mistake is not guarding against duplicate recovery when multiple systems attempt collection."
    }
  ],
  "answer": "A negative balance happens when an account owes money because refunds, disputes, returns, fees, or reversals exceed available funds.",
  "reasoning": "Here is a negative balance artifact:\n\n```txt\nBalance state:\nNegative due to dispute\n\nCustomer view:\n- Amount owed\n- Source transaction\n- Date created\n- Recovery options\n- Impact on payouts or account features\n\nRecovery methods:\n- Deduct from future incoming payments\n- Manual payment\n- Reserve adjustment\n- Collections path if unresolved\n\nControls:\n- Do not double collect\n- Show itemized history\n- Notify before major restriction\n- Support can see cause and status\n- Dispute or appeal path remains visible\n```\n\nThe product should make recovery predictable, not punitive.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What can cause a negative balance?",
    "Why does the cause matter to the user?",
    "What recovery paths might exist?",
    "How would you prevent double collection?",
    "What should support be able to explain?"
  ],
  "interviewAnswer": "I would design negative balance recovery with cause attribution, itemized balance history, customer messaging, recovery options, payout or feature impacts, support visibility, duplicate-collection controls, dispute paths, and escalation for unresolved balances.\n\nA strong answer balances financial recovery with transparency and customer trust.",
  "sourceLinks": [
    {
      "label": "Stripe negative balances",
      "url": "https://docs.stripe.com/connect/account-balances?locale=en-GB"
    },
    {
      "label": "CFPB: Debt collection rule FAQs",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/debt-collection/debt-collection-rule-faqs/"
    }
  ],
  "beginnerExplanation": "A negative balance happens when an account owes money because refunds, disputes, returns, fees, or reversals exceed available funds.\n\nThe beginner mistake is treating recovery as simply \"take money back.\" In fintech, negative balance recovery needs clear balance display, user communication, payment collection rules, risk controls, support visibility, and escalation for disputes or hardship.\n\nThe mental model:\n\n```txt\nCause:\nWhy did the balance go negative?\n\nAmount:\nHow much is owed?\n\nRecovery path:\nHow can the account return to good standing?\n```\n\nThe TPM should make the balance understandable and prevent surprise debits.",
  "example": "Imagine a merchant receives a $300 payout. Later, a $500 dispute is lost. The account balance becomes negative $200.\n\nThe product should show:\n\n```txt\nReason: dispute debit\nAmount owed: $200\nRecovery options: future payments, manual payment, payout hold\nStatus: restricted until balance is resolved\n```\n\nThat is clearer than hiding the problem until the next payout fails.",
  "commonMistakes": "A common mistake is showing only one negative number. Users need to know what caused it.\n\nAnother mistake is recovering funds without clear communication. Surprise deductions create complaints.\n\nA third mistake is not guarding against duplicate recovery when multiple systems attempt collection."
};
