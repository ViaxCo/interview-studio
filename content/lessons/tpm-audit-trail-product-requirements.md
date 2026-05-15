---
id: tpm-audit-trail-product-requirements
track: TPM
category: Security & Compliance
level: Intermediate
question: What audit trail requirements would you define for a fintech workflow?
sources:
  - label: NIST Privacy Framework
    url: https://www.nist.gov/privacy-framework
  - label: FFIEC: Information Security
    url: https://ithandbook.ffiec.gov/it-booklets/information-security.aspx
---

## Learn it

An audit trail is a record of important actions and changes in a system.

The beginner mistake is logging only technical errors. In fintech, the audit trail should capture business actions: who changed a limit, who released a hold, who updated bank details, who approved a refund, and what reason they selected.

The mental model:

```txt
Actor:
Who did it?

Action:
What changed?

Reason and evidence:
Why was it changed?

Time:
When did it happen?
```

The TPM should define audit requirements while designing the workflow, not after launch.

## Walkthrough

Imagine a support agent releases a transfer hold. Two weeks later, the transfer is disputed.

The company needs to know:

```txt
Who released the hold?
What case were they viewing?
What reason did they choose?
Was approval required?
What was the customer told?
What data changed?
```

Without an audit trail, the team cannot reconstruct the decision.

## Make it practical

Here is an audit trail artifact:

```txt
Workflow:
Manual transfer hold release

Audit fields:
- Event ID
- Actor ID and role
- Customer/account ID
- Object changed
- Previous state
- New state
- Reason code
- Free-text note if required
- Approval ID
- Timestamp
- Source IP/device if relevant
- Related case ID

Controls:
- Audit events are append-only
- Sensitive data is minimized
- Access is restricted
- Export is available for review
- Product metrics count risky actions
```

Good audit logs make investigation possible without exposing everything to everyone.

## Common mistakes

A common mistake is logging only "updated successfully." That does not explain what changed.

Another mistake is allowing important changes without reason codes. Free text alone is hard to analyze.

A third mistake is making logs editable by the same people whose actions are being audited.

## Check yourself

- What is the difference between technical logging and audit logging?
- What fields should an audit event include?
- Why are previous and new states useful?
- Which actions need reason codes?
- Why should audit logs be append-only?

## Interview version

I would define audit trails for sensitive fintech actions with actor, role, object, previous state, new state, reason, related case, approval, timestamp, and access controls. Logs should be append-only, searchable, exportable, and privacy-aware.

A strong answer shows that audit trails are product requirements, not only engineering implementation details.
