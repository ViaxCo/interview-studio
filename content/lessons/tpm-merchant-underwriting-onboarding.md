---
id: tpm-merchant-underwriting-onboarding
track: TPM
category: Fraud & Risk
level: Advanced
question: How would you design merchant onboarding and underwriting for payments?
sources:
  - label: Stripe Connect identity verification
    url: https://docs.stripe.com/connect/identity-verification
  - label: Stripe Connect risk management
    url: https://docs.stripe.com/connect/risk-management
---

## Learn it

Merchant underwriting is the process of deciding whether a business can safely accept payments on your platform.

The beginner mistake is approving every merchant who fills out a form. A merchant can create chargeback risk, fraud risk, illegal goods risk, brand risk, money laundering risk, and financial exposure if payouts happen before disputes or refunds are known.

The mental model:

```txt
Identity:
Who is the merchant?

Business model:
What are they selling and how?

Risk:
What can go wrong after they start processing?
```

The TPM needs to design onboarding so good merchants can start quickly while risky merchants get reviewed before harm scales.

## Walkthrough

Imagine two merchants apply.

```txt
Merchant A:
Local bakery, low ticket size, in-person pickup.

Merchant B:
High-ticket electronics reseller, new website, no refund policy, large expected volume.
```

Both may be legitimate, but they should not get the same underwriting path. Merchant B needs more review because disputes, fraud, and delivery failures could create larger losses.

## Make it practical

Here is a merchant onboarding artifact:

```txt
Application fields:
- Legal business name
- Tax ID
- Ownership or representative information
- Website or product description
- Industry category
- Expected monthly volume
- Average transaction size
- Refund policy
- Fulfillment model
- Bank account for payouts

Risk tiers:
- Low: automated approval
- Medium: document review or payout delay
- High: manual underwriting before processing

Controls:
- Processing limits
- Payout delays
- Rolling reserve
- Restricted category review
- Chargeback monitoring
- Early warning alerts
```

The product should also let merchants fix missing information without starting over.

## Common mistakes

A common mistake is reviewing merchants only at signup. Risk changes after launch, especially if volume spikes or disputes rise.

Another mistake is asking too much from low-risk merchants. Overly heavy onboarding kills activation.

A third mistake is not connecting underwriting to payout controls. Approval should define what limits or reserves apply.

## Check yourself

- Why is merchant underwriting needed before payment processing?
- What signals make a merchant riskier?
- How should low-risk and high-risk onboarding differ?
- What payout controls can reduce exposure?
- Why does ongoing monitoring matter?

## Interview version

I would design merchant onboarding around identity, business model, ownership, industry, expected volume, fulfillment, refund policy, bank details, risk tiering, document recovery, manual review, payout controls, and ongoing monitoring. Approval should determine limits, reserves, and review cadence.

A strong answer shows that merchant onboarding is activation plus risk control.
