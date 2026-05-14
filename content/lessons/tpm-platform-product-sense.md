---
id: tpm-platform-product-sense
track: TPM
category: Platform Product
level: Intermediate
question: How would you show product sense for a platform or developer product?
sources:
  - label: OpenAPI Initiative: OpenAPI specification
    url: https://learn.openapis.org/specification/
  - label: Google Cloud: API design guide
    url: https://cloud.google.com/apis/design
---

## Learn it

Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your "user" may be another builder.

For a platform, the user might be a developer, partner, internal team, data analyst, operations team, or third-party app. They do not only care whether the product exists. They care whether it is understandable, reliable, stable, documented, testable, and safe to build on.

The beginner mistake is judging a platform only by visible features. A platform can have few screens and still be a major product. The experience may live in APIs, SDKs, logs, docs, sandbox behavior, uptime, permissions, and support.

The mental model is:

```txt
Consumer product:
Can the user complete the task?

Platform product:
Can another team or developer reliably build their own task on top of this?
```

## Walkthrough

Imagine a company offers a payments API.

A shallow product-sense answer says:

```txt
Make the API fast and easy to use.
```

That is true but too vague.

A stronger answer names the platform experience:

```txt
Developer needs:
- Understand the API quickly.
- Test without moving real money.
- Create payments safely.
- Retry without duplicate charges.
- Receive status updates.
- Debug failures.
- Trust versioning and change management.
- Get help when production is broken.

Business needs:
- More successful integrations.
- Lower support burden.
- Higher payment volume.
- Better partner trust.
- Safer operations.
```

Now product sense becomes specific. The TPM might prioritize idempotency, sandbox data, webhook logs, clearer errors, or better onboarding before adding new endpoints.

## Make it practical

I would evaluate a platform product with a developer journey.

```txt
Developer journey for API product

1. Discovery
Can the developer understand what the product does?

2. Access
Can they get credentials and permissions?

3. First success
Can they make the first working request quickly?

4. Real integration
Can they handle auth, errors, retries, webhooks, and test data?

5. Production
Can they monitor usage, debug failures, and trust uptime?

6. Change
Can they survive version changes without surprise breakage?
```

Then I would pick metrics for each stage.

```txt
Platform metrics

Activation:
Time to first successful API call

Integration health:
Webhook delivery success, error rate, retry rate

Developer experience:
Docs search success, support tickets per integration

Business:
Active integrations, transaction volume, partner retention

Reliability:
Latency, uptime, incident count, failed requests by endpoint
```

Good platform product sense means you can see the invisible user experience.

## Common mistakes

A common mistake is treating documentation as separate from the product. For developer products, docs are part of the product surface.

Another mistake is ignoring failure paths. Developers judge platforms by what happens when things go wrong.

A third mistake is shipping breaking changes casually. Platform users build businesses and workflows on top of your contracts.

## Check yourself

- Who are the users of a platform product?
- Why are docs part of the product experience?
- What is "time to first successful API call" measuring?
- Why do webhooks and logs matter for developer experience?
- How is platform product sense different from consumer product sense?

## Interview version

I would show platform product sense by focusing on the builder journey: discovery, access, first success, real integration, production operations, and change management. I would care about docs, sandbox, auth, errors, retries, webhooks, observability, reliability, versioning, and support.

A strong answer shows that a platform product is not only endpoints. It is the full experience of building safely and confidently on top of the product.
