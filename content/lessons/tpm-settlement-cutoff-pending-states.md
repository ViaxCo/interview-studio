---
id: tpm-settlement-cutoff-pending-states
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you design pending states around settlement cutoffs?
sources:
  - label: Stripe balance availability
    url: https://docs.stripe.com/payments/balances
  - label: CFPB: Remittance transfers
    url: https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/
---

## Learn it

Settlement cutoffs are timing boundaries that affect when money actually moves or becomes available.

The beginner mistake is showing one vague "pending" state for everything. A payment pending before cutoff, after cutoff, during partner processing, under review, or waiting for settlement are different states with different customer expectations.

The mental model:

```txt
User action time:
When the user initiated the transfer.

Processing window:
When partners and networks process it.

Availability:
When money can be used, paid out, refunded, or considered final.
```

The TPM should make timing understandable without overpromising.

## Walkthrough

Imagine a user submits a transfer at 4:58 p.m. and the bank cutoff is 5:00 p.m.

If the transfer misses cutoff, the user may think the app failed. The product should show:

```txt
Transfer submitted
Processing starts next business day
Estimated arrival updated
Cancellation available until processing begins
```

That is more helpful than a generic spinner.

## Make it practical

Here is a pending-state artifact:

```txt
Payment flow:
Bank payout

States:
- Draft
- Submitted before cutoff
- Submitted after cutoff
- Processing
- Partner accepted
- Settled
- Failed
- Returned
- Canceled

User copy:
- "Submitted after today's cutoff"
- "Processing starts next business day"
- "Expected arrival: Tuesday"
- "You can cancel until processing begins"

System fields:
- User submission time
- Partner cutoff time
- Business calendar
- Current state
- Estimated availability
- Cancellation eligibility
```

Pending states should explain time, not hide it.

## Common mistakes

A common mistake is using "pending" for every non-final state. Users and support need more detail.

Another mistake is ignoring weekends and holidays. Settlement timing is often business-day based.

A third mistake is promising arrival times that partners or networks do not guarantee.

## Check yourself

- Why is one pending state not enough?
- What happens when a payment misses cutoff?
- Why do holidays matter?
- What should support see?
- How would you avoid overpromising arrival time?

## Interview version

I would design settlement pending states around submission time, cutoff, business calendar, partner processing, settlement, returns, cancellation eligibility, estimated availability, support visibility, and customer copy. The goal is to explain timing and options clearly.

A strong answer shows that money movement UX depends on operational timing.
