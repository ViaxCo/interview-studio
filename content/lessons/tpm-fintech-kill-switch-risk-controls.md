---
id: tpm-fintech-kill-switch-risk-controls
track: TPM
category: Observability & Operations
level: Advanced
question: How would you design kill switches for high-risk fintech features?
sources:
  - label: Atlassian: Incident communication
    url: https://www.atlassian.com/incident-management/incident-communication
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

A kill switch is a control that lets the company quickly pause or limit a feature when continuing would create harm.

The beginner mistake is thinking kill switches are only engineering toggles. In fintech, a kill switch is a product safety tool. It needs owners, triggers, customer states, rollback behavior, support scripts, monitoring, and audit logs.

The mental model:

```txt
Detect:
A metric or incident shows danger.

Disable or limit:
Stop the risky action without breaking everything.

Recover:
Explain state, fix root cause, and safely re-enable.
```

The TPM should define what happens to users already inside the flow.

## Walkthrough

Imagine an AI fraud rule starts blocking too many legitimate transfers.

A weak kill switch disables all transfers. That may create more harm.

A better design offers levels:

```txt
Level 1:
Turn off the new AI rule only.

Level 2:
Route high-risk transfers to manual review.

Level 3:
Pause new transfers in one corridor.

Level 4:
Pause all transfers if financial harm is severe.
```

Granularity matters.

## Make it practical

Here is a kill-switch artifact:

```txt
Feature:
AI transfer risk decisioning

Kill switch levels:
- Disable AI recommendation
- Force human review
- Block only high-risk corridor
- Pause all outbound transfers

Triggers:
- False-positive rate above threshold
- Fraud loss spike
- Model unavailable
- Partner outage
- Severe customer complaint pattern

Requirements:
- Owner and backup owner
- Audit log for switch changes
- Customer-facing state
- Support macro
- Re-enable checklist
- Post-incident review
```

The switch should be tested before it is needed.

## Common mistakes

A common mistake is making the switch too broad. Pausing an entire product for a narrow issue can hurt customers.

Another mistake is having no owner. During incidents, unclear authority wastes time.

A third mistake is re-enabling without evidence that the failure is fixed.

## Check yourself

- Why is a kill switch more than a feature flag?
- What should happen to in-progress transactions?
- Why are switch levels useful?
- Who should be allowed to activate it?
- What should be checked before re-enable?

## Interview version

I would design kill switches with scoped levels, trigger thresholds, owners, audit logs, customer states, support scripts, monitoring, rollback behavior, and re-enable criteria. For high-risk fintech or AI features, the switch should reduce harm without unnecessarily breaking safe workflows.

A strong answer shows operational maturity under pressure.
