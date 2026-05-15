import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-settlement-reconciliation-mismatches",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you handle settlement and reconciliation mismatches in a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.\n\nThe beginner mistake is assuming a successful payment means the money story is finished. In real fintech systems, the product may show success before funds settle. Fees, reversals, retries, settlement timing, FX, chargebacks, and partner reports can all create mismatches.\n\nReconciliation answers:\n\n```txt\nWhat did we think happened?\nWhat did the bank or partner say happened?\nWhere do they differ?\nWho owns fixing the difference?\nWhat customer or financial impact exists?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine your app shows 10,000 successful card payments yesterday, but the payout file from the processor only includes 9,980 payments. That does not automatically mean 20 payments are lost. They may be delayed, reversed, fee-adjusted, settled in a later batch, or reported under another identifier.\n\nA weak TPM says, \"Ask engineering to fix reconciliation.\"\n\nA strong TPM defines the product and operational workflow:\n\n```txt\nMismatch types:\n- Missing transaction\n- Duplicate transaction\n- Amount mismatch\n- Fee mismatch\n- Currency or FX mismatch\n- Status mismatch\n- Settlement-date mismatch\n- Unknown partner reference\n\nSeverity:\n- Customer money affected\n- Internal accounting only\n- Report delay only\n- Partner data missing\n```"
    },
    {
      "title": "Make it practical",
      "body": "Here is a reconciliation requirements artifact:\n\n```txt\nFeature:\nDaily settlement reconciliation\n\nInputs:\n- Internal ledger events\n- Processor payout report\n- Bank statement\n- Fee report\n- Dispute and refund report\n\nMatching keys:\n- Internal transaction ID\n- Processor charge ID\n- Payout ID\n- Bank reference\n- Amount\n- Currency\n- Settlement date\n\nOutput states:\n- Matched\n- Pending external settlement\n- Internal-only\n- External-only\n- Amount mismatch\n- Duplicate candidate\n- Needs manual review\n\nOperations workflow:\n- Show mismatch reason\n- Assign owner\n- Add notes\n- Mark resolved\n- Export audit report\n```\n\nThe TPM should also define customer impact rules:\n\n```txt\nIf mismatch affects customer-visible balance:\nEscalate same day.\n\nIf mismatch is only report timing:\nKeep operations informed but do not message customers.\n\nIf mismatch suggests duplicate debit or missing payout:\nPause related automation until reviewed.\n```\n\nThat is how reconciliation becomes a product capability, not a spreadsheet ritual."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is building reconciliation as an internal afterthought. If money moves, reconciliation is part of product safety.\n\nAnother mistake is not preserving identifiers across systems. Without shared IDs, operations waste hours manually matching records.\n\nA third mistake is treating every mismatch equally. A delayed report and a missing customer payout need different urgency."
    }
  ],
  "answer": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.",
  "reasoning": "Here is a reconciliation requirements artifact:\n\n```txt\nFeature:\nDaily settlement reconciliation\n\nInputs:\n- Internal ledger events\n- Processor payout report\n- Bank statement\n- Fee report\n- Dispute and refund report\n\nMatching keys:\n- Internal transaction ID\n- Processor charge ID\n- Payout ID\n- Bank reference\n- Amount\n- Currency\n- Settlement date\n\nOutput states:\n- Matched\n- Pending external settlement\n- Internal-only\n- External-only\n- Amount mismatch\n- Duplicate candidate\n- Needs manual review\n\nOperations workflow:\n- Show mismatch reason\n- Assign owner\n- Add notes\n- Mark resolved\n- Export audit report\n```\n\nThe TPM should also define customer impact rules:\n\n```txt\nIf mismatch affects customer-visible balance:\nEscalate same day.\n\nIf mismatch is only report timing:\nKeep operations informed but do not message customers.\n\nIf mismatch suggests duplicate debit or missing payout:\nPause related automation until reviewed.\n```\n\nThat is how reconciliation becomes a product capability, not a spreadsheet ritual.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between settlement and reconciliation?",
    "Why can a successful payment still create reconciliation work?",
    "What identifiers help match records?",
    "Which mismatch types are most urgent?",
    "What should operations be able to do in a reconciliation tool?"
  ],
  "interviewAnswer": "I would handle settlement and reconciliation by defining data sources, matching keys, mismatch types, severity levels, operational workflow, customer-impact rules, and audit reporting.\n\nA strong TPM answer shows that reconciliation protects customer trust, finance accuracy, and operational control.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: Bank reconciliation",
      "url": "https://docs.stripe.com/reconciliation"
    },
    {
      "label": "Stripe Docs: Payout reconciliation",
      "url": "https://docs.stripe.com/payouts/reconciliation"
    }
  ],
  "beginnerExplanation": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.\n\nThe beginner mistake is assuming a successful payment means the money story is finished. In real fintech systems, the product may show success before funds settle. Fees, reversals, retries, settlement timing, FX, chargebacks, and partner reports can all create mismatches.\n\nReconciliation answers:\n\n```txt\nWhat did we think happened?\nWhat did the bank or partner say happened?\nWhere do they differ?\nWho owns fixing the difference?\nWhat customer or financial impact exists?\n```",
  "example": "Imagine your app shows 10,000 successful card payments yesterday, but the payout file from the processor only includes 9,980 payments. That does not automatically mean 20 payments are lost. They may be delayed, reversed, fee-adjusted, settled in a later batch, or reported under another identifier.\n\nA weak TPM says, \"Ask engineering to fix reconciliation.\"\n\nA strong TPM defines the product and operational workflow:\n\n```txt\nMismatch types:\n- Missing transaction\n- Duplicate transaction\n- Amount mismatch\n- Fee mismatch\n- Currency or FX mismatch\n- Status mismatch\n- Settlement-date mismatch\n- Unknown partner reference\n\nSeverity:\n- Customer money affected\n- Internal accounting only\n- Report delay only\n- Partner data missing\n```",
  "commonMistakes": "A common mistake is building reconciliation as an internal afterthought. If money moves, reconciliation is part of product safety.\n\nAnother mistake is not preserving identifiers across systems. Without shared IDs, operations waste hours manually matching records.\n\nA third mistake is treating every mismatch equally. A delayed report and a missing customer payout need different urgency."
};
