---
id: tpm-negative-balance-recovery
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you design negative balance recovery?
sources:
  - label: Stripe negative balances
    url: https://docs.stripe.com/connect/account-balances?locale=en-GB
  - label: CFPB: Debt collection rule FAQs
    url: https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/debt-collection/debt-collection-rule-faqs/
---

## Learn it

A negative balance happens when an account owes money because refunds, disputes, returns, fees, or reversals exceed available funds.

The beginner mistake is treating recovery as simply "take money back." In fintech, negative balance recovery needs clear balance display, user communication, payment collection rules, risk controls, support visibility, and escalation for disputes or hardship.

The mental model:

```txt
Cause:
Why did the balance go negative?

Amount:
How much is owed?

Recovery path:
How can the account return to good standing?
```

The TPM should make the balance understandable and prevent surprise debits.

## Walkthrough

Imagine a merchant receives a $300 payout. Later, a $500 dispute is lost. The account balance becomes negative $200.

The product should show:

```txt
Reason: dispute debit
Amount owed: $200
Recovery options: future payments, manual payment, payout hold
Status: restricted until balance is resolved
```

That is clearer than hiding the problem until the next payout fails.

## Make it practical

Here is a negative balance artifact:

```txt
Balance state:
Negative due to dispute

Customer view:
- Amount owed
- Source transaction
- Date created
- Recovery options
- Impact on payouts or account features

Recovery methods:
- Deduct from future incoming payments
- Manual payment
- Reserve adjustment
- Collections path if unresolved

Controls:
- Do not double collect
- Show itemized history
- Notify before major restriction
- Support can see cause and status
- Dispute or appeal path remains visible
```

The product should make recovery predictable, not punitive.

## Common mistakes

A common mistake is showing only one negative number. Users need to know what caused it.

Another mistake is recovering funds without clear communication. Surprise deductions create complaints.

A third mistake is not guarding against duplicate recovery when multiple systems attempt collection.

## Check yourself

- What can cause a negative balance?
- Why does the cause matter to the user?
- What recovery paths might exist?
- How would you prevent double collection?
- What should support be able to explain?

## Interview version

I would design negative balance recovery with cause attribution, itemized balance history, customer messaging, recovery options, payout or feature impacts, support visibility, duplicate-collection controls, dispute paths, and escalation for unresolved balances.

A strong answer balances financial recovery with transparency and customer trust.
