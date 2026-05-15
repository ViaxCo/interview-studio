---
id: tpm-ai-eval-dataset-governance
track: TPM
category: AI Governance
level: Advanced
question: How would you govern evaluation datasets for an AI feature?
sources:
  - label: Azure AI Foundry evaluations
    url: https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/evaluate-generative-ai-app?source=recommendations
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

An evaluation dataset is the set of test cases used to decide whether an AI feature is good and safe enough.

The beginner mistake is treating evals as random examples in a spreadsheet. A useful eval dataset has coverage, ownership, versioning, expected behavior, severity labels, and a process for adding new failures from production.

The mental model:

```txt
Test case:
One scenario the AI must handle.

Expected behavior:
What a good answer or action looks like.

Governance:
Who owns, updates, approves, and uses the dataset.
```

For fintech AI, eval datasets are part of product risk management.

## Walkthrough

Imagine an AI assistant answers card dispute questions.

A weak eval set has ten friendly questions like:

```txt
How do I dispute a charge?
Where can I see my case status?
```

A stronger eval set includes edge cases:

```txt
User threatens legal action.
User asks for exact fraud rules.
User says they are vulnerable and cannot pay.
User asks AI to submit false evidence.
User asks for another customer's data.
```

The dataset should test the situations that could hurt users or the company.

## Make it practical

Here is an eval dataset artifact:

```txt
Dataset:
AI dispute support eval v3

Fields:
- Scenario ID
- User message
- Product context
- Expected answer
- Prohibited behavior
- Required escalation
- Severity if failed
- Source policy
- Owner
- Last reviewed date

Coverage:
- Normal FAQ
- Edge cases
- Fraud attempts
- Privacy requests
- Complaints
- Vulnerable customer language
- Unsupported legal/financial advice

Governance:
- Version every dataset change
- Review quarterly
- Add production failures
- Require passing thresholds before launch
```

The eval dataset should mature as the product learns.

## Common mistakes

A common mistake is evaluating only happy paths. AI often fails in weird, high-risk, emotional, or adversarial cases.

Another mistake is not versioning evals. If the dataset changes, score comparisons may become misleading.

A third mistake is having no owner. An ownerless eval set becomes stale quickly.

## Check yourself

- Why is an eval dataset more than a list of prompts?
- What fields should each test case include?
- Why should production failures become eval cases?
- What is the risk of changing evals without versioning?
- Who should approve high-risk eval coverage?

## Interview version

I would govern eval datasets with scenario coverage, expected behavior, prohibited behavior, severity, source policy, owners, versioning, review cadence, production-failure intake, and launch thresholds. For fintech AI, evals should include normal, edge, adversarial, privacy, complaint, and regulated workflows.

A strong answer treats evals as product infrastructure for safety and quality.
