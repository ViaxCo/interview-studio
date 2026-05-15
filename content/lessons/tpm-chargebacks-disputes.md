---
id: tpm-chargebacks-disputes
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you design a product workflow for chargebacks and payment disputes?
sources:
  - label: Stripe Docs: Disputes
    url: https://docs.stripe.com/disputes
  - label: Stripe Docs: How disputes work
    url: https://docs.stripe.com/disputes/how-disputes-work
---

## Learn it

A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.

The beginner mistake is thinking disputes are only a finance problem. Disputes affect risk, customer experience, merchant trust, support, evidence collection, product policy, and account health.

The product must answer:

```txt
Who is notified?
What evidence is needed?
Who decides whether to fight or accept?
What deadlines apply?
How does the disputed amount affect balances?
What happens if the dispute is won or lost?
```

## Walkthrough

Imagine a marketplace seller receives a $500 order. Two weeks later, the buyer disputes the payment as unauthorized.

The product cannot simply show "payment failed." The seller needs to know money is being held, what the reason is, what evidence is needed, and when a response is due.

A weak workflow says:

```txt
Send dispute email. Let support handle it.
```

A stronger workflow has states:

```txt
Dispute opened
-> Evidence needed
-> Evidence submitted
-> Under review
-> Won
or
-> Lost
or
-> Accepted
```

Each state needs UI, notifications, support visibility, ledger impact, and audit history.

## Make it practical

Here is a dispute workflow artifact:

```txt
Dispute intake:
- Dispute ID
- Payment ID
- Amount
- Currency
- Reason code
- Evidence deadline
- Current balance impact
- Seller account
- Buyer transaction details

Evidence checklist:
- Receipt
- Delivery proof
- Customer communication
- Login or device evidence
- Refund policy acceptance
- Service usage logs
- Identity verification evidence, if relevant

Decision rules:
- Auto-accept low-value disputes below cost threshold.
- Fight disputes with strong evidence and high value.
- Escalate repeat buyer abuse.
- Block seller payouts if dispute risk exceeds threshold.
```

The TPM also needs balance behavior:

```txt
When dispute opens:
Move disputed amount from available balance to held/disputed balance.

If won:
Release funds back to available balance.

If lost:
Record loss, fee, and final ledger adjustment.
```

This protects both accounting accuracy and user understanding.

## Common mistakes

A common mistake is not collecting evidence before disputes happen. If logs and receipts are missing, the team cannot reconstruct the story later.

Another mistake is treating dispute response as purely manual. The product can pre-fill evidence and guide the user.

A third mistake is hiding deadlines. Missing a response deadline can turn a possibly winnable dispute into a loss.

## Check yourself

- Why are disputes a product problem?
- What states should a dispute workflow have?
- What evidence might be needed?
- How should disputes affect available balance?
- Why do deadlines matter?

## Interview version

I would design disputes around lifecycle states, evidence collection, deadlines, balance impact, decision rules, notifications, support tooling, and audit history.

A strong TPM answer shows that disputes are not just finance operations. They are a risk and trust workflow that needs product design.
