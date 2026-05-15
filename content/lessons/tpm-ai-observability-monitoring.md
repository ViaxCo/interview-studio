---
id: tpm-ai-observability-monitoring
track: TPM
category: AI Operations
level: Intermediate
question: What would you monitor for an AI feature in production?
sources:
  - label: Microsoft Learn: Agent monitoring dashboard
    url: https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/how-to-monitor-agents-dashboard
  - label: OpenAI Agents SDK: Tracing
    url: https://openai.github.io/openai-agents-js/guides/tracing/
---

## Learn it

AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.

The beginner mistake is monitoring only uptime. An AI feature can be "up" while giving wrong, unsafe, expensive, slow, or unhelpful answers.

The mental model:

```txt
Traditional monitoring:
Is the system available and fast?

AI monitoring:
Is the system available, fast, useful, safe, grounded, and cost-controlled?
```

## Walkthrough

Imagine a fintech AI assistant that answers support questions.

You need to know:

```txt
Quality:
Are answers accurate?

Grounding:
Did the answer use the right source?

Safety:
Did it reveal sensitive info or give prohibited advice?

Operations:
Did it escalate when needed?

Cost:
Are token costs growing unexpectedly?

Latency:
Are users waiting too long?
```

Without these, the team will not know whether the feature is helping or quietly creating risk.

## Make it practical

Here is a production monitoring plan:

```txt
Feature:
AI transfer-status assistant

Operational metrics:
- Request volume
- Error rate
- Latency p50/p95
- Tool-call failure rate
- Retrieval failure rate
- Cost per conversation

Quality metrics:
- Thumbs-up/down
- Human escalation rate
- Agent correction rate
- Factual error reports
- Unsupported answer rate

Safety metrics:
- Sensitive data leakage reports
- Policy violation rate
- Fraud/compliance escalation misses
- Prompt injection attempts

Trace data:
- User intent
- Retrieved documents or records
- Model version
- Prompt version
- Tool calls
- Final answer
- Refusal or escalation reason
```

The TPM should define alert thresholds before launch. For example, if support corrections spike after a prompt change, pause the rollout.

## Common mistakes

A common mistake is not logging enough context to debug failures. If you only store the final answer, you may not know whether retrieval, prompt, model, or tool call failed.

Another mistake is monitoring user satisfaction without safety. Users may like fast answers that are wrong.

A third mistake is ignoring cost. AI features can become financially unhealthy before they become technically broken.

## Check yourself

- Why is uptime not enough for AI monitoring?
- What trace data helps debug an AI failure?
- Why should cost be monitored?
- What safety metrics matter in fintech support?
- What should trigger a rollout pause?

## Interview version

I would monitor AI features across availability, latency, cost, quality, grounding, safety, escalation, tool use, and user feedback. I would log prompts, model versions, retrieved context, tool calls, outputs, and decisions so failures are debuggable.

A strong answer shows that AI production health includes behavior, not just infrastructure.
