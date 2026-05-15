---
id: tpm-ai-vendor-evaluation
track: TPM
category: AI Product
level: Intermediate
question: How would you evaluate an AI vendor for a fintech product?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: OWASP: Top 10 for Large Language Model Applications
    url: https://owasp.org/www-project-top-10-for-large-language-model-applications/
---

## Learn it

AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.

The beginner mistake is evaluating only demo quality. A demo can look impressive while the vendor fails on latency, cost, privacy, auditability, uptime, eval tooling, data controls, or security.

For fintech, vendor questions are sharper because the product may touch money, identity, support, fraud, or compliance.

## Walkthrough

Imagine a vendor offers an AI support agent for financial services.

A weak evaluation asks:

```txt
Can it answer our help center questions?
```

A stronger evaluation asks:

```txt
Can it answer accurately from approved sources?
Can it refuse prohibited topics?
Can it avoid exposing sensitive account data?
Can it escalate complaints and fraud cases?
Can we audit what it said and why?
Can we control data retention?
Can it meet latency and uptime needs?
Can we leave the vendor later?
```

The TPM should test the riskiest assumptions, not the prettiest demo path.

## Make it practical

Here is an AI vendor scorecard:

```txt
Product fit:
- Supported use cases
- Quality on our real cases
- Multilingual support
- Human handoff

Risk and safety:
- Refusal behavior
- Prompt injection handling
- Sensitive data handling
- Audit logs
- Red-team results

Data and compliance:
- Data retention
- Training-on-customer-data controls
- Subprocessors
- Region controls
- Deletion and export

Operations:
- SLA
- Latency
- Incident communication
- Monitoring dashboard
- Support escalation

Commercials:
- Pricing model
- Cost at projected volume
- Overages
- Contract lock-in

Exit:
- Data export
- Prompt/config export
- Fallback provider
- Migration effort
```

The proof of concept should use real scenarios:

```txt
POC cases:
- Failed transfer
- KYC pending
- Refund request
- Sanctions review
- Angry complaint
- Prompt injection attempt
- Unauthenticated account question
```

## Common mistakes

A common mistake is evaluating vendors with sanitized test cases. Real support and risk cases are messy.

Another mistake is ignoring data terms. AI vendors may have different retention, training, and logging policies.

A third mistake is not planning exit. AI vendor lock-in can be hidden in prompts, tools, eval datasets, and workflows.

## Check yourself

- Why is demo quality not enough?
- What should an AI vendor POC test?
- What data terms matter?
- Why is auditability important in fintech AI?
- What makes AI vendor lock-in painful?

## Interview version

I would evaluate an AI vendor across product quality, safety, privacy, compliance, auditability, latency, uptime, cost, data controls, operational support, and exit path. I would run a POC on real high-risk scenarios before recommending adoption.

A strong answer treats AI vendor choice as a product, risk, and operating decision.
