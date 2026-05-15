---
id: tpm-aml-transaction-monitoring
track: TPM
category: Compliance & Risk
level: Intermediate
question: How would you define requirements for AML transaction monitoring?
sources:
  - label: eCFR: MSB suspicious activity reporting
    url: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-C/section-1022.320
  - label: eCFR: Reports by financial institutions of suspicious transactions
    url: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.320
---

## Learn it

AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.

The beginner mistake is thinking monitoring is just a list of rules like "flag transactions over $10,000." Real monitoring looks for patterns, context, risk, customer history, geography, velocity, counterparties, and unusual behavior.

A TPM does not decide legal obligations alone. Compliance owns policy. But the TPM helps turn policy into a product and system workflow that can be built, tested, operated, and audited.

## Walkthrough

Imagine a remittance product. A user sends five transfers just below a review threshold to different recipients in a short period.

That pattern may be normal for a business user, suspicious for a new consumer, or explainable during a family emergency. The product must route it to the right review, not automatically accuse the user.

A monitoring system needs:

```txt
Signals:
Amount, velocity, corridor, recipient count, device, funding source, user age, risk tier.

Rules:
Thresholds, combinations, patterns, and escalation logic.

Cases:
A place for analysts to review alerts and record decisions.

Outcomes:
Clear, release, request information, limit account, file report, or escalate.
```

## Make it practical

Here is a requirements artifact:

```txt
Feature:
AML transaction monitoring for remittance

Alert examples:
- Rapid increase in transfer volume
- Multiple recipients added in one day
- Repeated transfers just below review threshold
- High-risk corridor plus new device
- Sender and recipient data mismatch

Case workflow:
1. Alert generated
2. Analyst reviews customer profile and transaction history
3. Analyst records disposition
4. Product action applied if needed
5. Audit trail preserved

Analyst tools:
- User profile
- KYC/KYB status
- Transaction history
- Recipient graph
- Device and IP signals
- Previous alerts
- Notes and evidence
```

The TPM also needs to define metrics:

```txt
Operational metrics:
- Alert volume
- Case backlog
- Average review time
- Escalation rate
- False-positive rate
- Repeat alert rate

Risk metrics:
- Confirmed suspicious cases
- Loss prevented
- Policy breaches
- Late review count
```

The product should avoid telling users "you triggered AML monitoring." User-facing copy should be safe and plain, such as: "We need more information before this transfer can continue."

## Common mistakes

A common mistake is creating too many alerts. If analysts drown in low-quality alerts, real risk may be missed.

Another mistake is not designing case management. Detection without review workflow is not operationally useful.

A third mistake is exposing sensitive compliance logic to users. The product can explain next steps without revealing monitoring rules.

## Check yourself

- What does AML transaction monitoring try to detect?
- Why are patterns more useful than single thresholds?
- What should an analyst case view include?
- Why is false-positive rate important?
- Why should user-facing copy avoid exposing monitoring logic?

## Interview version

I would define AML monitoring requirements with compliance by mapping risk signals, alert rules, case workflow, analyst tools, dispositions, user actions, audit trail, and metrics like alert volume, backlog, review time, false positives, and confirmed suspicious cases.

A strong TPM answer shows that monitoring is both a detection system and an operations product.
