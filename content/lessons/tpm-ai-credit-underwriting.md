---
id: tpm-ai-credit-underwriting
track: TPM
category: AI & Fintech
level: Intermediate
question: How would you approach AI-assisted credit underwriting as a TPM?
sources:
  - label: CFPB: Adverse action notices and complex algorithms
    url: https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/
  - label: Federal Reserve: SR 11-7 model risk management
    url: https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf
---

## Learn it

Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.

The beginner mistake is treating underwriting AI like a normal recommendation model. Credit decisions are high-stakes. They affect people's access to money, business growth, housing, and financial opportunity. They also come with regulatory, fairness, explainability, and model-risk obligations.

The TPM must ask:

```txt
What decision does the model support?
What data is used?
Can we explain adverse outcomes?
How do we test fairness and performance?
Who can override the model?
How do we monitor drift?
```

## Walkthrough

Imagine a lender wants to use cash-flow data and machine learning to approve small-business loans.

A weak product requirement says:

```txt
Use AI to approve loans faster.
```

A stronger requirement separates the system:

```txt
Inputs:
Bank transactions, revenue trends, repayment history, business age, existing debt, fraud signals.

Model output:
Risk score and recommended limit.

Decision:
Approve, decline, request more info, or route to manual review.

Explanation:
Specific principal reasons for adverse action.

Controls:
Fair lending review, model validation, override workflow, audit trail.
```

The TPM should not let the product become a black box.

## Make it practical

Here is an underwriting requirements artifact:

```txt
Feature:
AI-assisted small-business credit decisioning

User value:
Faster decisions and fairer access for businesses with strong cash flow but limited traditional credit history.

Decision states:
- Approved
- Approved with lower limit
- More information needed
- Manual review
- Declined

Required evidence:
- Model performance on historical data
- Fairness analysis across protected or proxy groups where legally appropriate
- Reason-code generation
- Manual-review policy
- Model monitoring dashboard
- Adverse-action notice workflow

Metrics:
- Approval rate
- Default rate
- Manual review rate
- Time to decision
- Override rate
- Adverse-action reason distribution
- Model drift indicators
```

The TPM should also define what the model cannot do:

```txt
Non-goals:
- The model does not make unreviewable decisions.
- The model does not use prohibited data.
- The model does not generate vague decline reasons.
- The model does not launch without validation and monitoring.
```

## Common mistakes

A common mistake is optimizing approval speed without protecting decision quality.

Another mistake is ignoring explainability until legal review. If the team cannot explain declines, the product is not ready.

A third mistake is not defining human oversight. Manual review and overrides need policy, permissions, and audit logs.

## Check yourself

- Why is credit underwriting high-stakes?
- What is an adverse action notice?
- Why does model validation matter?
- What should be monitored after launch?
- Why are vague decline reasons a problem?

## Interview version

I would approach AI-assisted underwriting by defining the decision, data inputs, model output, human review, explainability, adverse-action workflow, fairness testing, model validation, monitoring, overrides, and audit trail.

A strong TPM answer shows that AI credit products must be fast, useful, explainable, governed, and fair enough to operate responsibly.
