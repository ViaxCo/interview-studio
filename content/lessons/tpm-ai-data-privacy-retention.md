---
id: tpm-ai-data-privacy-retention
track: TPM
category: AI Governance
level: Intermediate
question: How would you handle data privacy and retention for an AI feature?
sources:
  - label: NIST: Privacy Framework
    url: https://www.nist.gov/privacy-framework
  - label: ICO: Data protection by design and by default
    url: https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/
---

## Learn it

AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.

The beginner mistake is thinking "we do not train the model" solves privacy. Even if training is disabled, the feature may still log prompts, store outputs, send data to vendors, or expose sensitive context to users or staff.

The TPM should ask:

```txt
What data goes into the AI system?
Why is each field needed?
Where is it stored?
How long is it kept?
Who can see it?
Can users request deletion?
Does a vendor process it?
```

## Walkthrough

Imagine an AI assistant summarizes support cases. The case may contain names, phone numbers, transfer IDs, document-review notes, fraud flags, and complaint language.

The product should not blindly send every field into the model. It should minimize.

```txt
Need:
Transfer status, public reason, customer question, safe support notes.

Do not need:
Full ID document number, internal fraud rule, analyst private note, unrelated account history.
```

Privacy design shapes the data pipeline.

## Make it practical

Here is a privacy and retention artifact:

```txt
Feature:
AI support case summarizer

Data used:
- Customer message
- Transfer status
- Support-safe case notes
- Public reason codes

Data excluded:
- Full identity document number
- Internal fraud rules
- Sanctions match details
- Raw payment credentials

Retention:
- Prompt and output logs kept for 30 days for quality review.
- Audit metadata kept according to compliance policy.
- Sensitive fields redacted before logging.

Access:
- Support lead can review samples.
- Product can review anonymized quality data.
- Engineering can debug traces with masked data.

Vendor controls:
- Confirm data processing terms.
- Confirm training settings.
- Confirm deletion/export process.
```

The TPM should also define user-facing and internal policy language. People should know what the AI feature uses and what it does not do.

## Common mistakes

A common mistake is sending all available context because it improves quality. More context can create more privacy risk.

Another mistake is logging raw prompts forever. AI logs can contain sensitive information.

A third mistake is forgetting vendor data flow. If data leaves your system, contracts and controls matter.

## Check yourself

- Why is "not used for training" not the whole privacy story?
- What does data minimization mean for AI?
- Why do AI logs need retention rules?
- Who should access AI traces?
- What vendor controls matter?

## Interview version

I would handle AI privacy by mapping data inputs, minimizing sensitive fields, defining retention, redaction, access controls, vendor terms, deletion process, audit logs, and user-facing transparency.

A strong TPM answer shows that AI privacy covers prompts, context, outputs, logs, vendors, and lifecycle.
