---
id: tpm-usage-based-pricing-packaging
track: TPM
category: Pricing & Packaging
level: Intermediate
question: How would you design pricing and packaging for an API or usage-based product?
sources:
  - label: Stripe: Usage-based billing
    url: https://stripe.com/billing/usage-based-billing
  - label: Stripe Docs: Usage-based pricing models
    url: https://docs.stripe.com/billing/subscriptions/usage-based-legacy/pricing-models
---

## Learn it

Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.

For API and platform products, pricing is often usage-based. Customers may pay per API call, transaction, active user, document processed, webhook delivery, seat, storage unit, or money movement volume.

The beginner mistake is choosing a meter only because it is easy to count. A good pricing meter should be understandable, connected to customer value, hard to accidentally abuse, and possible to measure accurately.

The mental model is:

```txt
Packaging:
What is included?

Pricing:
What does it cost?

Metering:
What unit do we count?

Entitlements:
What is the customer allowed to use?

Billing experience:
Can the customer predict, understand, and trust the bill?
```

## Walkthrough

Imagine a company sells a fraud-screening API.

Possible meters:

```txt
Per API request:
Easy to measure, but customers may worry retries or failed requests cost money.

Per completed screening:
Closer to value, but the system must define what "completed" means.

Per approved transaction:
Very tied to value, but the vendor takes revenue risk if fraud checks block many transactions.

Monthly platform fee plus usage:
Predictable base revenue, then scales with customer usage.
```

The TPM has to think beyond revenue. Pricing affects product behavior. If customers pay per request, they may avoid useful checks. If the free tier is too generous, heavy users may never convert. If overages are confusing, finance and support will get angry tickets.

## Make it practical

Here is a pricing design artifact:

```txt
Product:
Fraud screening API

Primary value:
Reduce fraud losses while allowing good users through.

Customer segments:
- Startup: low volume, needs simple setup
- Growth: medium volume, needs rules and dashboard
- Enterprise: high volume, needs SLA, audit logs, custom limits

Packages:

Starter:
- 5,000 screenings/month included
- Basic risk score
- Standard support

Growth:
- 50,000 screenings/month included
- Rules engine
- Webhooks
- Dashboard exports

Enterprise:
- Custom volume
- SLA
- SSO and audit logs
- Dedicated support
- Contracted data-retention terms

Meter:
Completed screening event

Why this meter:
It maps to customer value better than raw API calls and avoids charging for failed retries.

Guardrails:
- Usage dashboard
- Threshold alerts at 80 percent and 100 percent
- Idempotency to avoid duplicate billing
- Clear overage pricing
```

The TPM also needs to define billing edge cases.

```txt
Billing edge cases

- What counts if the API times out?
- What counts if the customer retries with the same idempotency key?
- Are sandbox calls billable?
- Are failed screenings billable?
- Can customers set spend limits?
- How are refunds or billing disputes handled?
- What usage is shown in real time versus after invoice close?
```

This is the part interviewers listen for. A strong TPM understands that pricing is also a product experience.

## Common mistakes

A common mistake is picking a meter that customers do not understand. Confusing bills create distrust.

Another mistake is ignoring cost drivers. If the product has expensive third-party checks or compute costs, pricing must account for them.

A third mistake is forgetting entitlements. The app must know what each plan can use before the bill is generated.

## Check yourself

- What is the difference between pricing and packaging?
- Why should a usage meter map to customer value?
- What billing edge cases matter for API products?
- Why do usage alerts improve trust?
- How can pricing accidentally shape bad product behavior?

## Interview version

I would design usage-based pricing by identifying customer segments, the value metric, packages, entitlements, usage meter, billing edge cases, cost drivers, and customer controls like dashboards, alerts, and spend limits.

A strong answer treats billing as a product surface. Customers should understand what they are paying for, why it maps to value, and how to avoid surprise.
