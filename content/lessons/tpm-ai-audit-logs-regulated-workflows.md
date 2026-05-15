---
id: tpm-ai-audit-logs-regulated-workflows
track: TPM
category: AI Governance
level: Advanced
question: What should AI audit logs capture in regulated fintech workflows?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Federal Reserve: Model Risk Management
    url: https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf
---

## Learn it

AI audit logs are records that help the company understand what the AI did, why it did it, who used it, and what happened next.

The beginner mistake is logging only the final answer. In regulated workflows, the useful record includes input, retrieved context, model or prompt version, tool calls, human approvals, decisions, and outcomes.

The mental model:

```txt
Trace:
What happened during one AI interaction.

Decision record:
What business action resulted.

Audit trail:
Can we reconstruct and review it later?
```

The TPM should define logs before launch because retroactive logging rarely captures what reviewers need.

## Walkthrough

Imagine an AI assistant recommends holding a transfer.

Three months later, the company investigates a complaint. It needs to know:

```txt
What did the user ask?
What data did the AI see?
Which policy was retrieved?
Which model and prompt version ran?
Did the AI call any tools?
Who approved the hold?
Was the customer notified?
```

Without those records, the team is guessing.

## Make it practical

Here is an AI audit log artifact:

```txt
Log fields:
- Interaction ID
- User ID or analyst ID
- Customer/account ID if applicable
- Timestamp
- Feature name
- Model version
- Prompt version
- Retrieved sources
- Input classification
- Output summary
- Tool calls and arguments
- Guardrail result
- Human approval or override
- Final business action
- Error or refusal reason

Controls:
- Sensitive data minimization
- Access permissions
- Retention policy
- Tamper resistance
- Export for review
```

The audit log should be useful without becoming an uncontrolled dump of sensitive data.

## Common mistakes

A common mistake is logging too little. A final answer without context is hard to review.

Another mistake is logging too much sensitive data forever. Audit logs also need privacy and retention controls.

A third mistake is not linking AI output to the business action. The question is not only what the AI said; it is what changed afterward.

## Check yourself

- Why is the final AI answer not enough for audit?
- What versions should be logged?
- Why should tool calls be captured?
- How can audit logs create privacy risk?
- What business action should the log connect to?

## Interview version

AI audit logs should capture interaction ID, actor, timestamp, model and prompt versions, retrieved sources, input category, output summary, tool calls, guardrail results, human approvals or overrides, final business action, errors, and retention controls.

A strong answer makes AI behavior reconstructable without ignoring privacy and access risk.
