---
id: tpm-ai-aml-alert-triage-copilot
track: TPM
category: AI & Risk
level: Advanced
question: How would you design an AI copilot for AML alert triage?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: FFIEC: Suspicious Activity Reporting
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04
---

## Learn it

An AML alert triage copilot helps analysts review possible suspicious activity faster.

The beginner mistake is thinking the AI should decide whether something is suspicious. In regulated workflows, the safer starting point is usually assistance, not replacement. The AI can summarize facts, organize evidence, surface similar cases, and suggest questions, but trained compliance staff should own the decision.

The mental model:

```txt
AI helps with:
Finding, summarizing, organizing, drafting.

Human owns:
Judgment, escalation, final decision, regulated filing choices.
```

The TPM's job is to design the copilot so it reduces analyst load without creating overtrust.

## Walkthrough

Imagine an analyst opens an alert for repeated transfers just below a review threshold.

The copilot should not say:

```txt
This is money laundering.
```

It can safely say:

```txt
The activity includes 12 transfers over 5 days, all between $900 and $990, to 6 recipients.
The customer changed device once during the period.
Two recipients are newly added.
Prior similar cases were escalated when volume continued for more than 7 days.
```

That helps the analyst think without pretending the AI is the investigator.

## Make it practical

Here is a copilot design artifact:

```txt
Copilot scope:
AML alert triage assistant

Allowed:
- Summarize transaction timeline
- Highlight rule triggers
- Pull customer profile facts
- Show linked alerts
- Draft analyst note for review
- Suggest missing evidence

Not allowed:
- Close case automatically
- File suspicious activity report
- Tell customer about investigation
- Override compliance decision

Guardrails:
- Cite source records
- Show confidence and missing data
- Require analyst approval for notes
- Log prompt, output, sources, and user action
- Evaluate against expert-reviewed cases
```

The copilot should be useful even when it refuses to make the final call.

## Common mistakes

A common mistake is measuring only time saved. A faster wrong investigation is not success.

Another mistake is not showing sources. Analysts need to know which transactions or records support the summary.

A third mistake is letting AI-generated notes enter the case file without human review.

## Check yourself

- What should the AI be allowed to do in AML triage?
- What decisions should stay with humans?
- Why do citations matter?
- How could overtrust create risk?
- What eval set would prove the copilot is safe enough to launch?

## Interview version

I would design an AML copilot as an assistant that summarizes evidence, cites source records, highlights triggers, suggests missing information, and drafts notes for human approval. It should not close cases, file reports, or make final suspicious-activity decisions. I would monitor quality, overtrust, analyst overrides, and audit logs.

A strong answer keeps compliance judgment with trained humans while using AI to reduce investigation friction.
