---
id: tpm-card-authorization-decline-controls
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you design card authorization and decline controls?
sources:
  - label: Stripe Issuing authorizations
    url: https://docs.stripe.com/issuing/purchases/authorizations?issuing-authorization-type=incremental_authorization
  - label: Stripe Issuing spending controls
    url: https://docs.stripe.com/issuing/controls/spending-controls?locale=en-GB
---

## Learn it

Card authorization is the moment a card transaction is approved or declined.

The beginner mistake is thinking a decline is just "not enough money." Card transactions can be declined because the card is inactive, the balance is insufficient, spending controls block the merchant, the country is restricted, the amount is too high, the transaction looks risky, or the real-time authorization system does not respond in time.

The mental model:

```txt
Authorization request:
A merchant asks, "Can this card spend this amount here?"

Decision:
Approve, decline, or apply a control.

User experience:
The cardholder needs a clear enough reason and a path to fix it if possible.
```

For a TPM, the hard part is turning a technical decision into a reliable product experience.

## Walkthrough

Imagine a company card can only be used for travel. A cardholder tries to buy electronics.

The system may decline because the merchant category is blocked.

A bad app experience says:

```txt
Transaction declined.
```

A better experience says:

```txt
Declined because this card is limited to travel purchases.
Ask your admin to update the card controls if this purchase is required.
```

That message reduces support confusion without exposing sensitive fraud systems.

## Make it practical

Here is an authorization control artifact:

```txt
Card product:
Employee expense card

Controls:
- Allowed merchant categories: travel, lodging, meals
- Blocked countries: configured by risk policy
- Per-transaction limit: $1,000
- Monthly limit: $5,000
- Real-time webhook required for high-risk authorizations

Decision reasons:
- Insufficient balance
- Card inactive
- Merchant category blocked
- Amount over limit
- Country blocked
- Suspected fraud
- Authorization timed out

User-facing copy:
- Specific for policy declines
- Generic for sensitive fraud declines
- Admin next step when applicable

Metrics:
- Approval rate
- False decline rate
- Decline reason mix
- Webhook latency
- Timeout fallback rate
```

The product should help legitimate cardholders understand fixable declines.

## Common mistakes

A common mistake is showing the same message for every decline. That drives support tickets and user frustration.

Another mistake is exposing fraud logic too directly. "Declined because your IP looks suspicious" may help attackers learn the system.

A third mistake is ignoring timeout behavior. Real-time authorization systems need a defined fallback because card networks expect fast decisions.

## Check yourself

- What are common reasons a card authorization can decline?
- Which decline reasons can be shown clearly to the user?
- Which reasons should stay generic for safety?
- Why does webhook latency matter?
- What metric would reveal too many legitimate users are being blocked?

## Interview version

I would design card authorization controls around balance, card status, merchant category, country, transaction amount, velocity, risk, and real-time decisioning. I would define decline reason codes, safe user-facing messages, admin actions, timeout behavior, audit logs, and metrics for approval rate, false declines, reason mix, and latency.

A strong answer connects payment network timing with product clarity and fraud safety.
