---
id: tpm-llm-cost-latency-tradeoffs
track: TPM
category: AI Product
level: Intermediate
question: How would you manage cost and latency tradeoffs for an LLM-powered feature?
sources:
  - label: OpenAI Docs: Latency optimization
    url: https://platform.openai.com/docs/guides/latency-optimization
  - label: OpenAI Docs: Cost optimization
    url: https://platform.openai.com/docs/guides/cost-optimization
---

## Learn it

LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.

The beginner mistake is picking the strongest model for everything. That may work in a demo but fail in production if responses are too slow or too expensive.

The TPM needs to think in product tiers:

```txt
High-quality model:
Better reasoning, higher cost, often higher latency.

Smaller or faster model:
Lower cost and faster, but may need narrower tasks or stricter guardrails.

Cached or reused output:
Fast and cheap when the answer does not need fresh reasoning.

Human review:
Slower and more expensive, but safer for high-risk outcomes.
```

## Walkthrough

Imagine an AI support assistant in a remittance app.

Not every task needs the same model:

```txt
Classify ticket category:
Fast, cheap model may be enough.

Summarize long case history:
May need a model with larger context.

Draft customer response for failed transfer:
Needs accuracy and policy grounding.

Recommend fraud action:
May need human review regardless of model.
```

The TPM should map task risk and complexity before choosing model strategy.

## Make it practical

Here is a cost-latency artifact:

```txt
Feature:
AI support assistant

Task 1:
Intent classification
Target latency: under 500 ms
Quality requirement: medium
Model strategy: small model

Task 2:
Case summary
Target latency: under 3 seconds
Quality requirement: high factual accuracy
Model strategy: stronger model, structured output

Task 3:
Customer reply draft
Target latency: under 5 seconds
Quality requirement: high, policy grounded
Model strategy: stronger model plus retrieval

Task 4:
Compliance-sensitive answer
Target latency: human workflow acceptable
Quality requirement: very high
Model strategy: draft-only with human approval
```

Then define controls:

```txt
Optimization levers:
- Shorter prompts
- Retrieval only when needed
- Prompt caching
- Smaller model for classification
- Batch processing for non-urgent work
- Output length limits
- Reuse prior summaries
- Escalate high-risk tasks instead of over-automating
```

## Common mistakes

A common mistake is optimizing cost before defining acceptable quality. Cheap wrong answers are expensive.

Another mistake is optimizing quality without user patience. A perfect answer that takes too long may not work in support.

A third mistake is ignoring usage growth. A feature that is affordable with 1,000 requests may become painful at 1 million.

## Check yourself

- Why should not every task use the strongest model?
- What is a latency target?
- Why can output length affect cost and speed?
- When is human review better than a bigger model?
- What metrics show AI unit economics?

## Interview version

I would manage LLM cost and latency by splitting the workflow into tasks, setting quality and latency targets, choosing model strategy per task, using caching or smaller models where safe, limiting output, and monitoring cost per successful outcome.

A strong TPM answer connects AI model choices to user experience and unit economics.
