---
id: tpm-payments-remittance-requirements
track: TPM
category: Product Requirements
level: Intermediate
question: How would you define requirements for a payments or remittance feature?
sources:
  - label: Stripe Docs: PaymentIntents
    url: https://docs.stripe.com/payments/payment-intents
  - label: Stripe Docs: Idempotent requests
    url: https://docs.stripe.com/api/idempotent_requests
---

## Learn it

Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.

The beginner mistake is writing only the happy path: "User sends money to a recipient." A real payments feature has states, limits, fees, exchange rates, funding methods, compliance checks, partner statuses, reversals, refunds, retries, reconciliation, notifications, and support visibility.

The TPM's job is to turn the money movement into a clear product and system contract.

## Walkthrough

Imagine a user sends $100 to a family member in another country.

The product must answer:

- Who is the sender?
- Who is the recipient?
- Is the sender verified?
- Is the recipient allowed?
- What is the exchange rate?
- What fees apply?
- How will the sender fund the transfer?
- Which payout partner will deliver it?
- What happens if funding succeeds but payout fails?
- What status does the user see?
- What does support see?

This is why requirements should include a state model.

```txt
Transfer states

Draft
Quote shown
User confirmed
Funding pending
Funded
Compliance review
Payout processing
Paid
Failed
Reversed
Refunded
Unknown
```

Each state should have allowed actions, user copy, support visibility, and system owner.

## Make it practical

I would write requirements across product, technical, risk, and operations.

```txt
Core requirements

- User can enter amount, recipient, funding method, and payout method.
- User sees fees, exchange rate, estimated delivery time, and total cost before confirming.
- System checks user eligibility, recipient eligibility, limits, sanctions, and fraud risk before payout.
- Each transfer has a unique idempotency key so retries do not create duplicates.
- User receives clear status updates.
- Support can search by transfer ID and see status history.
- Reconciliation identifies partner mismatches.
```

Then I would define edge cases:

```txt
Edge cases

- Funding fails.
- Funding succeeds but payout fails.
- Partner timeout.
- Duplicate submit.
- Exchange rate expires.
- Recipient details are invalid.
- Compliance review is required.
- User cancels before funding.
- Refund is required.
```

Good requirements make these cases explicit before engineering has to guess.

## Common mistakes

A common mistake is treating payment status as a single success or failure. Real money movement often has pending, uncertain, reversed, and manually reviewed states.

Another mistake is ignoring idempotency. Retrying money movement without duplicate protection is dangerous.

A third mistake is forgetting support and reconciliation. If customers ask where their money is, the company needs evidence.

## Check yourself

- Why is the happy path not enough for payments?
- What states might a transfer move through?
- Why does idempotency matter?
- What should users see before confirming?
- Why do support and reconciliation need requirements?

## Interview version

I would define payments or remittance requirements by covering the full money-movement lifecycle: quote, confirmation, funding, compliance, payout, status updates, failure handling, refunds or reversals, idempotency, reconciliation, notifications, limits, and support tooling.

A strong answer makes edge cases explicit and shows that customer trust depends on accurate status, safe retries, and operational visibility.
