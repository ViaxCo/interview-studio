---
id: tpm-fee-transparency-disclosures
track: TPM
category: Compliance UX
level: Intermediate
question: How would you design fee transparency for a fintech product?
sources:
  - label: CFPB: Remittance transfers
    url: https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/
  - label: CFPB: Prepaid accounts rule
    url: https://www.consumerfinance.gov/rules-policy/final-rules/prepaid-accounts-under-electronic-fund-transfer-act-regulation-e-and-truth-lending-act-regulation-z/
---

## Learn it

Fee transparency means users can understand what they will pay before they commit.

The beginner mistake is showing fees only after the user is emotionally invested or at the final step. In fintech, fees can affect trust, complaints, conversion quality, and regulatory risk. Good design shows fees early enough, clearly enough, and in the context where the user is making the decision.

The mental model:

```txt
Base amount:
What the user wants to send, spend, borrow, or withdraw.

Fee:
What the product charges.

Net result:
What the user pays or receives after fees.
```

The TPM should make fee math visible and consistent.

## Walkthrough

Imagine a user sends $100 internationally.

A weak flow says:

```txt
Total: $106
```

A better flow says:

```txt
You send: $100
Transfer fee: $4
Exchange rate: 1 USD = 1,540 NGN
Recipient gets: 154,000 NGN
Total charged: $104
```

Now the user understands the cost and outcome.

## Make it practical

Here is a fee transparency artifact:

```txt
Product:
International transfer

Fee display requirements:
- Show fee before confirmation
- Show total charged
- Show recipient amount if applicable
- Show exchange rate if applicable
- Explain variable fees
- Preserve receipt after transaction

Edge cases:
- Fee changes before confirmation
- Promotional fee waiver
- Partner fee added
- Failed transaction refund
- Partial refund

Metrics:
- Fee-related complaints
- Dropoff at fee step
- Refund contacts
- Dispute reason mentions fee
```

Fee transparency should reduce surprises, not hide complexity.

## Common mistakes

A common mistake is hiding fees inside totals. Users notice later and lose trust.

Another mistake is not explaining fee changes. If the fee can change because amount, method, or corridor changes, the UI should update clearly.

A third mistake is having receipts that do not match checkout. That creates support pain.

## Check yourself

- Why should fees appear before confirmation?
- What is the difference between fee and total charged?
- What fee edge cases should the product handle?
- How can fee confusion show up in metrics?
- Why should receipts match the confirmation screen?

## Interview version

I would design fee transparency by showing fees before confirmation, separating base amount, fee, exchange rate, recipient amount, and total charged, handling fee changes and refunds, preserving receipts, and monitoring fee-related complaints and dropoff.

A strong answer shows that fee display is both UX and compliance risk control.
