---
id: tpm-payout-reconciliation-reporting
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you design payout reconciliation reporting?
sources:
  - label: Stripe payout reconciliation reports
    url: https://docs.stripe.com/reports/select-a-report?locale=en-GB
  - label: Stripe reporting and reconciliation
    url: https://docs.stripe.com/plan-integration/get-started/reporting-reconciliation?locale=en-GB
---

## Learn it

Payout reconciliation is the process of proving which transactions make up a payout and whether the amounts match what finance, operations, and the ledger expect.

The beginner mistake is thinking "money arrived in the bank" means reconciliation is done. A payout may combine payments, fees, refunds, chargebacks, adjustments, currency conversion, reserves, and timing differences.

The mental model:

```txt
Gross activity:
The original payments and movements.

Adjustments:
Fees, refunds, disputes, corrections, reserves.

Net payout:
The amount that lands in the bank.
```

The TPM should make the path from transaction to payout traceable.

## Walkthrough

Imagine finance sees a $98,420 payout in the bank.

They need to answer:

```txt
Which customer payments are included?
Which refunds reduced the payout?
Which disputes or fees were deducted?
Which transactions are pending future payout?
Does the payout match the ledger?
```

If the product cannot answer those questions, finance will build manual spreadsheets and operations will lose time.

## Make it practical

Here is a payout reconciliation artifact:

```txt
Report:
Daily payout reconciliation

Columns:
- Payout ID
- Bank arrival date
- Provider payout date
- Transaction ID
- Transaction type
- Gross amount
- Fee
- Refund amount
- Dispute amount
- Adjustment amount
- Net amount
- Currency
- Ledger entry ID
- Customer or merchant ID

Controls:
- Payout total equals sum of included transactions
- Ledger total equals provider total
- Exceptions queue for mismatches
- Export for finance
- Drill-down from payout to transaction
```

The report should support both human investigation and automated exception detection.

## Common mistakes

A common mistake is showing only payout totals. Totals are useful, but reconciliation needs line-level traceability.

Another mistake is ignoring timing differences. A refund initiated today may affect a later payout, not the payout someone is reviewing.

A third mistake is not designing exception workflows. Mismatches need owners, status, notes, and resolution.

## Check yourself

- Why does a bank deposit not prove reconciliation is complete?
- What adjustments can change net payout?
- Why do finance teams need line-level data?
- What mismatch states should exist?
- How would you make reconciliation less manual over time?

## Interview version

I would design payout reconciliation reporting with payout IDs, line-level transactions, fees, refunds, disputes, adjustments, currency, ledger entry IDs, totals, exports, drill-downs, and an exceptions queue. The key is proving how gross activity became the net payout.

A strong answer shows that reconciliation is traceability plus exception management.
