---
id: tpm-transaction-limits-velocity-controls
track: TPM
category: Fraud & Risk
level: Intermediate
question: How would you design transaction limits and velocity controls?
sources:
  - label: Stripe Radar rules
    url: https://docs.stripe.com/radar/rules?locale=en-GB
  - label: Marqeta: Velocity controls
    url: https://www.marqeta.com/docs/core-api/velocity-controls
---

## Learn it

Transaction limits and velocity controls define how much activity is allowed within a time window.

The beginner mistake is thinking limits are only about maximum dollar amounts. Limits can also control number of attempts, new recipients, risky merchants, countries, device changes, failed logins, account age, funding method, or total exposure across a customer.

The mental model:

```txt
Limit:
How much is allowed.

Velocity:
How quickly activity is happening.

Control:
What the system does when the line is crossed.
```

Controls can approve, decline, hold, request verification, or send to review.

## Walkthrough

Imagine a new user creates an account and tries to send five transfers in ten minutes to five new recipients.

The total amount may not look huge, but the pattern is risky. A good system looks at both amount and behavior.

```txt
Single transfer:
$200

Five transfers in ten minutes:
$1,000 total, five new recipients, new account

Possible action:
Allow first low-risk transfer, hold the rest, request verification, or send to review.
```

That is why velocity matters. Fraud often appears as speed and repetition before it appears as one large transaction.

## Make it practical

Here is a limits artifact:

```txt
Control:
New-account transfer velocity

Applies to:
Accounts less than 7 days old

Limits:
- Max $500 per transfer
- Max $1,000 per 24 hours
- Max 2 new recipients per 24 hours
- Max 3 failed funding attempts per hour

Step-up triggers:
- New device plus new recipient
- High-risk destination
- Multiple failed attempts
- Recipient previously associated with fraud

Actions:
- Allow
- Require verification
- Hold for review
- Decline

Metrics:
- Fraud loss
- False declines
- Manual review rate
- Completion rate for legitimate users
- Limit override requests
```

The important product decision is not only where the limit sits. It is what happens when the user reaches it.

## Common mistakes

A common mistake is setting hard limits without explaining the user path. A user who hits a limit needs a next step, not a confusing failure.

Another mistake is applying the same limit to every customer. Tenure, verification level, behavior, product type, and risk tier should matter.

A third mistake is optimizing only for fraud loss. Overly strict limits can block good users and hurt activation.

## Check yourself

- What is the difference between amount limits and velocity controls?
- Why are new recipients risky in money movement?
- When should a limit trigger verification instead of decline?
- What metrics reveal false positives?
- How would limits change for a verified long-tenured customer?

## Interview version

I would design limits around amount, frequency, account age, recipient risk, device risk, funding method, and verification level. When a limit is reached, the product should choose the right action: allow, step up, hold, review, or decline. I would monitor fraud loss, false declines, review load, and legitimate completion rate.

A strong answer shows that limits are product controls, not just backend constants.
