---
id: tpm-settlement-reconciliation-mismatches
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you handle settlement and reconciliation mismatches in a fintech product?
sources:
  - label: Stripe Docs: Bank reconciliation
    url: https://docs.stripe.com/reconciliation
  - label: Stripe Docs: Payout reconciliation
    url: https://docs.stripe.com/payouts/reconciliation
---

## Learn it

Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.

The beginner mistake is assuming a successful payment means the money story is finished. In real fintech systems, the product may show success before funds settle. Fees, reversals, retries, settlement timing, FX, chargebacks, and partner reports can all create mismatches.

Reconciliation answers:

```txt
What did we think happened?
What did the bank or partner say happened?
Where do they differ?
Who owns fixing the difference?
What customer or financial impact exists?
```

## Walkthrough

Imagine your app shows 10,000 successful card payments yesterday, but the payout file from the processor only includes 9,980 payments. That does not automatically mean 20 payments are lost. They may be delayed, reversed, fee-adjusted, settled in a later batch, or reported under another identifier.

A weak TPM says, "Ask engineering to fix reconciliation."

A strong TPM defines the product and operational workflow:

```txt
Mismatch types:
- Missing transaction
- Duplicate transaction
- Amount mismatch
- Fee mismatch
- Currency or FX mismatch
- Status mismatch
- Settlement-date mismatch
- Unknown partner reference

Severity:
- Customer money affected
- Internal accounting only
- Report delay only
- Partner data missing
```

## Make it practical

Here is a reconciliation requirements artifact:

```txt
Feature:
Daily settlement reconciliation

Inputs:
- Internal ledger events
- Processor payout report
- Bank statement
- Fee report
- Dispute and refund report

Matching keys:
- Internal transaction ID
- Processor charge ID
- Payout ID
- Bank reference
- Amount
- Currency
- Settlement date

Output states:
- Matched
- Pending external settlement
- Internal-only
- External-only
- Amount mismatch
- Duplicate candidate
- Needs manual review

Operations workflow:
- Show mismatch reason
- Assign owner
- Add notes
- Mark resolved
- Export audit report
```

The TPM should also define customer impact rules:

```txt
If mismatch affects customer-visible balance:
Escalate same day.

If mismatch is only report timing:
Keep operations informed but do not message customers.

If mismatch suggests duplicate debit or missing payout:
Pause related automation until reviewed.
```

That is how reconciliation becomes a product capability, not a spreadsheet ritual.

## Common mistakes

A common mistake is building reconciliation as an internal afterthought. If money moves, reconciliation is part of product safety.

Another mistake is not preserving identifiers across systems. Without shared IDs, operations waste hours manually matching records.

A third mistake is treating every mismatch equally. A delayed report and a missing customer payout need different urgency.

## Check yourself

- What is the difference between settlement and reconciliation?
- Why can a successful payment still create reconciliation work?
- What identifiers help match records?
- Which mismatch types are most urgent?
- What should operations be able to do in a reconciliation tool?

## Interview version

I would handle settlement and reconciliation by defining data sources, matching keys, mismatch types, severity levels, operational workflow, customer-impact rules, and audit reporting.

A strong TPM answer shows that reconciliation protects customer trust, finance accuracy, and operational control.
