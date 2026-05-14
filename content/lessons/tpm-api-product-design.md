---
id: tpm-api-product-design
track: TPM
category: API & Partner Integration
level: Intermediate
question: How would you design an API product from scratch?
sources:
  - label: Google Cloud: API design guide
    url: https://cloud.google.com/apis/design
  - label: Microsoft Azure: Web API design best practices
    url: https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design
---

## Learn it

An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.

The beginner mistake is thinking API design starts with endpoints. It does not. It starts with the job the API helps another system complete. What action is the partner trying to perform? What data do they need? What errors will they see? How will they test? How will they know whether the integration is working?

An API product needs a clear promise. For example: "This API lets partners create payouts, track payout status, receive status updates, and reconcile final outcomes." That promise is more useful than starting with `/v1/payouts`.

## Walkthrough

Imagine a company wants to expose a payout API to partners.

The API needs more than a create endpoint. A partner needs to:

1. Authenticate safely.
2. Create a payout request.
3. Avoid duplicate payouts if they retry.
4. Know whether the payout is accepted, processing, paid, failed, reversed, or unknown.
5. Receive webhook events when status changes.
6. Query status later.
7. Understand errors.
8. Test in a sandbox.
9. Reconcile their records with yours.

That means the TPM should think in resources, workflows, states, and operating needs.

```txt
Core resources
- Partner
- Recipient
- Payout
- Payout status event
- Reconciliation report

Core actions
- Create payout
- Retrieve payout
- Cancel payout if still cancellable
- Receive status webhook
- List reports
```

Now engineering can discuss endpoints, schemas, auth, rate limits, and versioning with a real product shape.

## Make it practical

I would define the API product in layers.

First, define the user and use case. Is this API for public developers, strategic partners, internal teams, or one integration?

Second, define the resource model. What are the nouns? What state transitions are allowed? Which fields are required? Which fields are returned?

Third, define reliability behavior. What happens on timeout? Can clients retry? Is the API idempotent? Are webhooks guaranteed, duplicated, delayed, or best effort?

Fourth, define developer experience. The API needs docs, examples, sandbox data, test credentials, error-code explanations, SDK decisions, changelog, and support path.

Fifth, define operations. What dashboards show API health? Who sees partner errors? How are rate limits enforced? What happens during incidents?

```txt
API readiness checklist

- Authentication model approved.
- Resource names and status model documented.
- Error codes written in developer-friendly language.
- Idempotency behavior tested.
- Webhook retry behavior documented.
- Sandbox supports happy and failure paths.
- Monitoring includes latency, error rate, webhook delivery, and partner-level failures.
- Support knows how to identify a partner request by ID.
```

## Common mistakes

A common mistake is designing around internal database tables. API users do not care how your tables are shaped. They need stable product concepts.

Another mistake is treating docs as an afterthought. For an API product, documentation is part of the product experience.

A third mistake is ignoring failure behavior. A partner needs to know what to do when a request times out, a webhook is late, or a status is unknown.

## Check yourself

- Who are the users of an API product?
- Why should API design start with workflows instead of endpoints?
- What does idempotency protect against?
- Why do webhook behavior and retry rules matter?
- What should be in an API readiness checklist?

## Interview version

I would design an API product by starting with the developer or partner workflow, then defining resources, state transitions, request and response contracts, errors, authentication, idempotency, webhooks, versioning, documentation, sandbox, monitoring, and support paths.

A strong TPM answer treats the API as a product experience, not just a set of endpoints. The API must be understandable, reliable, testable, operable, and safe to change.
