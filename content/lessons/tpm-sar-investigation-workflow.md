---
id: tpm-sar-investigation-workflow
track: TPM
category: Security & Compliance
level: Advanced
question: How would you support a suspicious activity investigation workflow?
sources:
  - label: FDIC: Suspicious activity FAQ
    url: https://www.fdic.gov/news/financial-institution-letters/2025/frequently-asked-questions-regarding-suspicious-activity
  - label: FFIEC: Suspicious Activity Reporting
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04
---

## Learn it

A suspicious activity investigation workflow helps compliance teams investigate activity that may need regulatory reporting.

The beginner mistake is thinking the TPM should decide whether to file a suspicious activity report. That decision belongs to trained compliance teams. The TPM's job is to build the product and operations support: alerts, cases, evidence, controls, audit logs, confidentiality, and filing readiness.

The mental model:

```txt
Detection:
Something looks suspicious.

Investigation:
Compliance reviews facts and context.

Decision:
File, do not file, continue monitoring, or escalate.
```

The workflow must be careful because suspicious activity reporting has confidentiality expectations. Customer-facing teams may need limited information.

## Walkthrough

Imagine a money transmitter sees repeated transfers just below a review threshold, sent to many recipients, then followed by fast withdrawals.

The system should not simply create a generic alert. It should create an investigation package:

```txt
Pattern:
Possible structuring or suspicious transfer pattern

Evidence:
Transaction timeline, counterparties, amounts, geographies, customer profile, prior alerts, notes

Controls:
Compliance-only access, audit log, escalation owner
```

The product should make facts easy to review without letting sensitive investigation details leak.

## Make it practical

Here is a suspicious activity workflow artifact:

```txt
Workflow stages:
1. Alert generated
2. Case opened
3. Analyst reviews evidence
4. More information requested internally
5. Compliance decision recorded
6. Filing workflow triggered if needed
7. Supporting documentation retained
8. Monitoring plan updated

Case data:
- Customer identity profile
- Transaction history
- Counterparty network
- Risk rules triggered
- Analyst notes
- Decision rationale
- Filing deadline if applicable
- Supporting documentation links

Permissions:
- Compliance can view full case
- Support sees only safe customer-service status
- Product sees aggregated trends
- Every access is logged
```

The product requirement is not "add a SAR button." It is a controlled investigation workflow.

## Common mistakes

A common mistake is exposing investigation notes to support or broad internal audiences. Sensitive compliance work needs strict permissions.

Another mistake is losing supporting documentation. If a case is reviewed later, the evidence and decision rationale need to be available.

A third mistake is making alerts without feedback. If analysts cannot mark false positives or explain decisions, the monitoring system cannot improve.

## Check yourself

- What is the TPM's role versus compliance's role?
- Why do permissions matter in suspicious activity workflows?
- What evidence should an investigation case include?
- Why should supporting documentation be retained?
- How can analyst decisions improve future monitoring?

## Interview version

I would support suspicious activity investigations with alert intake, case management, evidence timelines, analyst notes, compliance decision states, filing readiness, retention, strict permissions, audit logs, and feedback loops into monitoring. I would not make filing decisions myself; I would design the workflow that lets compliance make and document them.

A strong answer shows respect for regulated ownership and confidentiality.
