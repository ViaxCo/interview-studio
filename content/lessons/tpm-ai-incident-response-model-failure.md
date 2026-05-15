---
id: tpm-ai-incident-response-model-failure
track: TPM
category: AI Governance
level: Advanced
question: How would you handle an incident caused by an AI model failure?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Microsoft Responsible AI principles
    url: https://www.microsoft.com/en-us/ai/principles-and-approach/
---

## Learn it

An AI incident happens when an AI feature causes or could cause meaningful harm: wrong decisions, unsafe messages, privacy leakage, tool misuse, unfair outcomes, or operational failure.

The beginner mistake is treating AI incidents like normal software bugs only. Some AI failures are probabilistic, data-dependent, prompt-dependent, or tied to model behavior that changed. The response needs product, engineering, risk, legal, compliance, support, and sometimes vendor coordination.

The mental model:

```txt
Contain:
Stop or limit harm.

Investigate:
Find the failure pattern and affected users.

Recover:
Correct outcomes, communicate, and prevent recurrence.
```

The TPM helps coordinate decisions and customer impact.

## Walkthrough

Imagine an AI support assistant gives wrong advice about dispute deadlines to 800 users.

The team should not only fix the prompt. It needs to answer:

```txt
Which users received the wrong answer?
Did anyone miss a deadline?
Should we contact affected users?
Should the assistant be disabled or limited?
What eval case failed to catch this?
What policy source was stale?
```

That is incident response, not prompt tweaking.

## Make it practical

Here is an AI incident artifact:

```txt
Incident:
AI assistant gave incorrect dispute deadline guidance

Immediate actions:
- Disable disputed topic answer
- Route questions to human support
- Preserve logs
- Identify affected conversations
- Notify legal/compliance

Investigation:
- Prompt version
- Model version
- Retrieved sources
- Bad answer pattern
- Affected user count
- Severity and harm assessment

Recovery:
- Correct knowledge source
- Add eval cases
- Contact affected users if required
- Review support scripts
- Retest before re-enabling
- Write postmortem
```

The incident should produce a stronger system, not just a patched answer.

## Common mistakes

A common mistake is fixing the visible prompt and skipping affected-user analysis.

Another mistake is leaving the feature live while the risky failure mode is still unknown.

A third mistake is not adding the incident to evals. If the system failed once, the test suite should learn from it.

## Check yourself

- How is an AI incident different from a normal bug?
- What does containment mean for an AI feature?
- Why do affected-user lists matter?
- What should be preserved for investigation?
- How should the incident improve future evals?

## Interview version

I would handle an AI model failure by containing the feature, preserving logs, identifying affected users, assessing harm, coordinating legal/compliance/support/vendor response, correcting outcomes, updating prompts or sources, adding eval cases, retesting, communicating as needed, and writing a postmortem.

A strong answer focuses on customer harm and recurrence prevention, not only technical fix.
