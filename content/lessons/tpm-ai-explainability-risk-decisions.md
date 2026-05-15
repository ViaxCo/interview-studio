---
id: tpm-ai-explainability-risk-decisions
track: TPM
category: AI & Risk
level: Advanced
question: How would you make AI-assisted risk decisions explainable?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Federal Reserve: Model Risk Management
    url: https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf
---

## Learn it

Explainability means the team can understand and communicate why an AI-assisted risk decision happened at the right level for the audience.

The beginner mistake is thinking explainability means showing every model detail to every user. Different audiences need different explanations: analysts need evidence, support needs safe summaries, customers need understandable reasons, and auditors need records.

The mental model:

```txt
Internal explanation:
What signals influenced the recommendation?

Customer explanation:
What can we safely and clearly tell the user?

Audit explanation:
What evidence proves the process was controlled?
```

The TPM should define explanation requirements before launch.

## Walkthrough

Imagine an AI model recommends holding a suspicious payout.

An analyst may need:

```txt
New device, new bank account, high amount, recipient country risk, similar prior fraud pattern
```

A customer may only see:

```txt
We need to review this payout before it can be completed. We will update you when review is complete.
```

Those are not contradictions. They are explanations for different audiences.

## Make it practical

Here is an explainability artifact:

```txt
AI decision:
Recommend payout hold

Audience explanations:

Analyst:
- Top risk signals
- Similar cases
- Missing data
- Model/rule version
- Confidence band

Support:
- Customer-visible status
- Approved next steps
- What not to disclose

Customer:
- Clear status
- Expected next step
- Appeal or support path if applicable

Audit:
- Input data snapshot
- Recommendation
- Human decision
- Timestamp
- Override reason
```

Explainability should help decisions be reviewed, challenged, and improved.

## Common mistakes

A common mistake is exposing sensitive fraud signals to customers. That can teach attackers.

Another mistake is giving analysts only a score. A score without reasons makes human review weak.

A third mistake is forgetting audit needs. Months later, the company may need to reconstruct why a decision happened.

## Check yourself

- Why do different audiences need different explanations?
- What should analysts see that customers should not?
- What records matter for audit?
- How can explanations improve model quality?
- Why is a risk score alone insufficient?

## Interview version

I would make AI-assisted risk decisions explainable by defining audience-specific explanations for analysts, support, customers, and audit. I would show analysts signals and evidence, give support safe status and next steps, give customers clear allowed reasons, and log inputs, model version, recommendation, human decision, and overrides.

A strong answer balances transparency, safety, and auditability.
