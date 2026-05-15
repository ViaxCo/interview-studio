---
id: tpm-ledger-balances-holds
track: TPM
category: Fintech Infrastructure
level: Intermediate
question: How would you define product requirements for a ledger, balances, and holds system?
sources:
  - label: Modern Treasury: Ledgers
    url: https://www.moderntreasury.com/ledgers
  - label: Stripe Treasury: Working with balances and transactions
    url: https://docs.stripe.com/treasury/account-management/working-with-balances-and-transactions
---

## Learn it

A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?

The beginner mistake is thinking a balance is just one number in a database row. In fintech, a user can have several balance concepts at the same time.

```txt
Current balance:
All funds recorded in the account.

Available balance:
Funds the user can actually spend or withdraw.

Pending balance:
Funds not final yet, such as incoming settlement or card authorization.

Held balance:
Funds reserved for risk, dispute, compliance, or operational reasons.
```

If the product mixes these up, users may spend money they should not spend, support may give wrong answers, and finance may fail reconciliation.

## Walkthrough

Imagine a marketplace wallet. A seller receives a $100 payment. The platform holds $10 as a risk reserve, charges a $3 fee, and makes $87 available for payout after settlement.

A weak requirement says:

```txt
Show seller balance.
```

A strong requirement asks:

```txt
Which balance is shown?
When does it become available?
What is held and why?
Can the hold expire?
Who can override it?
What audit trail proves the calculation?
What happens if the payment is reversed?
```

The product needs to explain money states without exposing accounting internals to the user.

## Make it practical

Here is a requirements artifact:

```txt
Feature:
Seller wallet balance

User-facing balances:
- Available for payout
- Pending settlement
- Held in reserve

Ledger events:
- Payment received
- Platform fee assessed
- Risk reserve hold created
- Funds settled
- Payout initiated
- Payout completed
- Dispute opened
- Hold released or extended

Rules:
- Users can only withdraw available balance.
- Pending funds become available after settlement.
- Risk holds reduce available balance.
- Every balance change must be traceable to a ledger event.
- Manual adjustments require reason code, approver, and audit log.

Support view:
- Current balance
- Available balance
- Pending amount
- Held amount
- Hold reason
- Expected release date
- Related transaction IDs
```

The TPM also needs to define user copy:

```txt
$87.00 available
$10.00 held until June 2 for standard risk review
$100.00 payment received, $3.00 platform fee applied
```

That copy is short, but it is backed by a precise ledger model.

## Common mistakes

A common mistake is letting engineers build ledger states without product definitions. That leads to support and UI confusion later.

Another mistake is hiding holds from users. If money is unavailable, the product should explain why and what happens next where legally and operationally safe.

A third mistake is allowing manual adjustments without auditability. In money systems, manual fixes need controls.

## Check yourself

- Why is available balance different from current balance?
- What is a hold?
- Why does every balance change need an event?
- What should support see when a user asks about missing money?
- Why are manual adjustments risky?

## Interview version

I would define ledger requirements by separating current, available, pending, and held balances; mapping every balance change to immutable events; defining hold reasons and release rules; adding support visibility; and requiring audit logs for manual changes.

A strong TPM answer shows that balances are product promises backed by accounting-grade system behavior.
