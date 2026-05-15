---
id: tpm-prompt-versioning-change-management
track: TPM
category: AI Product
level: Intermediate
question: How would you manage prompt changes and versioning in a production AI feature?
sources:
  - label: OpenAI Docs: Prompting
    url: https://platform.openai.com/docs/guides/prompting
  - label: OpenAI Docs: Evaluation best practices
    url: https://platform.openai.com/docs/guides/evaluation-best-practices
---

## Learn it

Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.

The beginner mistake is treating prompt edits like copy tweaks. In production AI systems, prompt changes need versioning, testing, review, rollout, and rollback just like code or rules.

The mental model:

```txt
Prompt version:
What instructions were active?

Evaluation:
Did the new version improve behavior without breaking important cases?

Rollout:
Who sees the new version first?

Rollback:
How do we return to the previous version if quality drops?
```

## Walkthrough

Imagine an AI support assistant that summarizes failed transfer cases. A PM changes the prompt to make summaries shorter. Now the summary sometimes omits the transfer ID or complaint language.

That is not a small writing issue. Support agents may miss escalation requirements.

A safer system asks:

```txt
What changed?
Why did it change?
Which evals passed?
Which cases got worse?
Who approved it?
Which users or agents see it first?
Can we roll back quickly?
```

## Make it practical

Here is a prompt-change artifact:

```txt
Prompt:
Support case summarizer

Change:
Reduce summary length and force structured fields.

Reason:
Agents said long summaries slow triage.

Required evals:
- Payment delay cases
- Refund requests
- Complaint language
- KYC review cases
- Sensitive internal notes

Must not regress:
- Transfer ID accuracy
- Amount accuracy
- Complaint detection
- Sensitive note exclusion

Rollout:
10 percent of agents for 48 hours.

Monitoring:
- Agent edit rate
- Thumbs-down rate
- Escalation miss rate
- Average handle time

Rollback:
Revert to v12 if severe factual error or complaint miss exceeds threshold.
```

That makes prompt management operational instead of vibes-based.

## Common mistakes

A common mistake is not knowing which prompt produced a bad output. Without version logs, debugging is guesswork.

Another mistake is evaluating only the changed happy path. Prompt edits can break unrelated cases.

A third mistake is rolling out to everyone at once. Production prompts deserve controlled release.

## Check yourself

- Why is a prompt change a product change?
- What should be logged with each prompt version?
- Why do evals need regression cases?
- What metrics reveal prompt quality after launch?
- Why is rollback important?

## Interview version

I would manage production prompts with version history, change reason, evals, regression tests, approval, staged rollout, monitoring, and rollback.

A strong TPM answer treats prompts as part of the product contract, not informal text hidden inside the system.
