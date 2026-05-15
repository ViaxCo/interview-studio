import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-payout-reconciliation-reporting",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you design payout reconciliation reporting?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Payout reconciliation is the process of proving which transactions make up a payout and whether the amounts match what finance, operations, and the ledger expect.\n\nThe beginner mistake is thinking \"money arrived in the bank\" means reconciliation is done. A payout may combine payments, fees, refunds, chargebacks, adjustments, currency conversion, reserves, and timing differences.\n\nThe mental model:\n\n```txt\nGross activity:\nThe original payments and movements.\n\nAdjustments:\nFees, refunds, disputes, corrections, reserves.\n\nNet payout:\nThe amount that lands in the bank.\n```\n\nThe TPM should make the path from transaction to payout traceable."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine finance sees a $98,420 payout in the bank.\n\nThey need to answer:\n\n```txt\nWhich customer payments are included?\nWhich refunds reduced the payout?\nWhich disputes or fees were deducted?\nWhich transactions are pending future payout?\nDoes the payout match the ledger?\n```\n\nIf the product cannot answer those questions, finance will build manual spreadsheets and operations will lose time."
    },
    {
      "title": "Make it practical",
      "body": "Here is a payout reconciliation artifact:\n\n```txt\nReport:\nDaily payout reconciliation\n\nColumns:\n- Payout ID\n- Bank arrival date\n- Provider payout date\n- Transaction ID\n- Transaction type\n- Gross amount\n- Fee\n- Refund amount\n- Dispute amount\n- Adjustment amount\n- Net amount\n- Currency\n- Ledger entry ID\n- Customer or merchant ID\n\nControls:\n- Payout total equals sum of included transactions\n- Ledger total equals provider total\n- Exceptions queue for mismatches\n- Export for finance\n- Drill-down from payout to transaction\n```\n\nThe report should support both human investigation and automated exception detection."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is showing only payout totals. Totals are useful, but reconciliation needs line-level traceability.\n\nAnother mistake is ignoring timing differences. A refund initiated today may affect a later payout, not the payout someone is reviewing.\n\nA third mistake is not designing exception workflows. Mismatches need owners, status, notes, and resolution."
    }
  ],
  "answer": "Payout reconciliation is the process of proving which transactions make up a payout and whether the amounts match what finance, operations, and the ledger expect.",
  "reasoning": "Here is a payout reconciliation artifact:\n\n```txt\nReport:\nDaily payout reconciliation\n\nColumns:\n- Payout ID\n- Bank arrival date\n- Provider payout date\n- Transaction ID\n- Transaction type\n- Gross amount\n- Fee\n- Refund amount\n- Dispute amount\n- Adjustment amount\n- Net amount\n- Currency\n- Ledger entry ID\n- Customer or merchant ID\n\nControls:\n- Payout total equals sum of included transactions\n- Ledger total equals provider total\n- Exceptions queue for mismatches\n- Export for finance\n- Drill-down from payout to transaction\n```\n\nThe report should support both human investigation and automated exception detection.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why does a bank deposit not prove reconciliation is complete?",
    "What adjustments can change net payout?",
    "Why do finance teams need line-level data?",
    "What mismatch states should exist?",
    "How would you make reconciliation less manual over time?"
  ],
  "interviewAnswer": "I would design payout reconciliation reporting with payout IDs, line-level transactions, fees, refunds, disputes, adjustments, currency, ledger entry IDs, totals, exports, drill-downs, and an exceptions queue. The key is proving how gross activity became the net payout.\n\nA strong answer shows that reconciliation is traceability plus exception management.",
  "sourceLinks": [
    {
      "label": "Stripe payout reconciliation reports",
      "url": "https://docs.stripe.com/reports/select-a-report?locale=en-GB"
    },
    {
      "label": "Stripe reporting and reconciliation",
      "url": "https://docs.stripe.com/plan-integration/get-started/reporting-reconciliation?locale=en-GB"
    }
  ],
  "beginnerExplanation": "Payout reconciliation is the process of proving which transactions make up a payout and whether the amounts match what finance, operations, and the ledger expect.\n\nThe beginner mistake is thinking \"money arrived in the bank\" means reconciliation is done. A payout may combine payments, fees, refunds, chargebacks, adjustments, currency conversion, reserves, and timing differences.\n\nThe mental model:\n\n```txt\nGross activity:\nThe original payments and movements.\n\nAdjustments:\nFees, refunds, disputes, corrections, reserves.\n\nNet payout:\nThe amount that lands in the bank.\n```\n\nThe TPM should make the path from transaction to payout traceable.",
  "example": "Imagine finance sees a $98,420 payout in the bank.\n\nThey need to answer:\n\n```txt\nWhich customer payments are included?\nWhich refunds reduced the payout?\nWhich disputes or fees were deducted?\nWhich transactions are pending future payout?\nDoes the payout match the ledger?\n```\n\nIf the product cannot answer those questions, finance will build manual spreadsheets and operations will lose time.",
  "commonMistakes": "A common mistake is showing only payout totals. Totals are useful, but reconciliation needs line-level traceability.\n\nAnother mistake is ignoring timing differences. A refund initiated today may affect a later payout, not the payout someone is reviewing.\n\nA third mistake is not designing exception workflows. Mismatches need owners, status, notes, and resolution."
};
