---
id: tpm-ai-governance-risk-tiering
track: TPM
category: AI Governance
level: Intermediate
question: How would you create a risk-tiering model for AI features?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Microsoft: Responsible AI principles
    url: https://www.microsoft.com/en-us/ai/principles-and-approach/
---

## Learn it

AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.

The beginner mistake is treating all AI features the same. An AI that rewrites marketing copy is not the same as an AI that recommends whether a customer gets credit, flags fraud, blocks an account, or drafts regulated support responses.

The mental model:

```txt
Low-risk AI:
Helps with low-stakes productivity. Human can easily verify output.

Medium-risk AI:
Influences user experience or business decisions, but humans can review before harm.

High-risk AI:
Affects money, access, eligibility, identity, compliance, safety, or legal outcomes.
```

The TPM's job is to make the risk visible early so the team does not discover governance requirements after building the wrong product.

## Walkthrough

Imagine three AI ideas:

```txt
Idea 1:
Summarize internal meeting notes.

Idea 2:
Draft support replies about failed transfers.

Idea 3:
Recommend whether to block a suspicious account.
```

All use AI, but they should not share the same launch process. The account-blocking system needs stricter review, human oversight, audit logs, false-positive monitoring, and appeal paths.

## Make it practical

Here is a risk-tiering artifact:

```txt
AI feature:
Fraud risk recommendation

Decision influence:
Model recommends allow, review, hold, or block.

Potential harms:
- Legitimate user blocked
- Fraud allowed
- Compliance issue missed
- Analyst overtrusts model

Risk tier:
High

Required controls:
- Human review before block
- Model score explanation for analyst
- Audit trail for recommendation and decision
- False-positive monitoring
- Drift monitoring
- Weekly risk review during beta
- Clear appeal or support path
```

For lower-risk features, controls can be lighter. But every tier should have a clear reason.

## Common mistakes

A common mistake is tiering based on model sophistication instead of user harm. A simple model can be high risk if it affects money or access.

Another mistake is using governance as a blocker only at the end. Tiering should happen during discovery.

A third mistake is not revisiting risk after launch. A feature can become higher risk as usage grows.

## Check yourself

- Why should AI features be risk-tiered?
- What makes an AI feature high risk?
- Why is user harm more important than model complexity?
- What controls might a high-risk AI feature need?
- When should the risk tier be revisited?

## Interview version

I would create AI risk tiers by looking at the decision the AI influences, potential user harm, data sensitivity, reversibility, human oversight, regulatory exposure, and operational impact.

A strong TPM answer shows that AI governance is proportional: light enough for low-risk features, strict enough for money, identity, compliance, and access decisions.
