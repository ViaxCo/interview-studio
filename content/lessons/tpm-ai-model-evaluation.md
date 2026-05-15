---
id: tpm-ai-model-evaluation
track: TPM
category: AI Product
level: Intermediate
question: How would you evaluate whether an AI feature is ready to launch?
sources:
  - label: OpenAI Docs: Working with evals
    url: https://platform.openai.com/docs/guides/evals
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just "does the model seem smart?" It is "does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?"

The beginner mistake is testing a few happy-path prompts and calling it done. AI systems can fail inconsistently. They can hallucinate, refuse when they should answer, answer when they should refuse, use stale context, expose sensitive data, or produce different outputs for similar inputs.

A TPM should evaluate the product behavior, not just the model.

## Walkthrough

Imagine an AI assistant that summarizes customer complaints for a fintech support team.

A weak evaluation says:

```txt
Try 20 examples. Looks good.
```

A stronger evaluation defines success:

```txt
The summary must:
- Identify the customer's issue
- Preserve amount, date, and transfer ID accurately
- Avoid inventing facts
- Flag complaint language
- Exclude sensitive internal-only fraud notes
- Be short enough for an agent to scan
```

Now the team can test outputs against criteria.

## Make it practical

Here is an evaluation plan:

```txt
Feature:
AI support case summarizer

Dataset:
- 200 historical support cases
- 50 payment delay cases
- 50 failed verification cases
- 50 refund or dispute cases
- 25 angry customer cases
- 25 cases with sensitive internal notes

Evaluation criteria:
- Factual accuracy
- Missing critical detail
- Hallucinated detail
- Sensitive information leakage
- Complaint detection
- Clarity for support agent
- Correct escalation flag

Launch threshold:
- 95 percent factual accuracy on critical fields
- 0 severe sensitive-data leaks
- 90 percent complaint detection recall
- Human agents prefer AI summary over current workflow in beta
```

The TPM should also define monitoring:

```txt
Post-launch:
- Agent edit rate
- Agent thumbs-down rate
- Escalation miss rate
- Complaint miss rate
- Sensitive leakage reports
- Latency
- Cost per summary
```

If the feature is high-risk, use human approval before outputs reach customers.

## Common mistakes

A common mistake is evaluating only average quality. A small number of severe failures can make the product unsafe.

Another mistake is using synthetic examples only. Real messy cases reveal issues polished examples miss.

A third mistake is not refreshing evals after prompts, models, tools, or policies change.

## Check yourself

- Why is AI evaluation more than trying a few prompts?
- What is a launch threshold?
- Why should evals include edge cases?
- What should be monitored after launch?
- Why might human approval be needed?

## Interview version

I would evaluate an AI feature by defining the intended workflow, creating representative and edge-case test sets, setting criteria and launch thresholds, measuring severe failures, testing human review, and monitoring post-launch quality, latency, cost, and harm signals.

A strong TPM answer shows that AI readiness is evidence-based and workflow-specific.
