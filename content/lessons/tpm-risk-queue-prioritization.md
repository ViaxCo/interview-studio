---
id: tpm-risk-queue-prioritization
track: TPM
category: Fraud & Risk
level: Intermediate
question: How would you design a fraud risk review queue?
sources:
  - label: FFIEC: Suspicious Activity Reporting
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04
  - label: Stripe Radar rules
    url: https://docs.stripe.com/radar/rules?locale=en-GB
---

## Learn it

A fraud risk queue is the workbench where risky transactions, accounts, or customers go when automation should not make the final decision alone.

The beginner mistake is thinking the queue is just a list of alerts. A useful queue is not only a list. It decides what gets reviewed first, what information reviewers need, what actions they can take, and how the team learns from mistakes.

Think about it like triage in a busy operations team:

```txt
Low risk:
Let it pass or monitor.

Medium risk:
Send to review if the signal is unusual.

High risk:
Hold, restrict, or escalate before money moves.
```

The TPM's job is to protect users and the business without creating a queue so noisy that reviewers drown in low-quality alerts.

## Walkthrough

Imagine a fintech app that sees possible account takeover. A user logs in from a new device, changes their phone number, adds a new recipient, and tries to send $2,500 within ten minutes.

The product should not simply say "fraud score is high." It needs a queue item that explains why the case matters.

```txt
Risk reason:
New device + profile change + new recipient + high-value transfer

Customer impact:
Transfer held for review

Reviewer goal:
Decide whether to release, request step-up verification, keep hold, or escalate
```

That is much more actionable than an anonymous alert with a score.

## Make it practical

Here is a queue design artifact:

```txt
Queue item:
Suspicious transfer review

Priority:
P0 if money leaves in under 15 minutes
P1 if transfer is held before settlement
P2 if only monitoring is needed

Reviewer sees:
- Customer identity and tenure
- Recent login/device changes
- Transaction amount and destination
- Past failed attempts
- Model score and rule triggers
- Similar previous cases
- Allowed actions

Allowed actions:
- Release
- Request verification
- Hold temporarily
- Freeze account
- Escalate to compliance

Quality metrics:
- False-positive rate
- Fraud loss avoided
- Average review time
- Oldest unreviewed P0 case
- Appeal/reversal rate
```

The queue should help reviewers make consistent decisions, not force them to improvise under pressure.

## Common mistakes

A common mistake is prioritizing by alert time only. A low-risk alert from five hours ago may matter less than a high-risk transfer that settles in fifteen minutes.

Another mistake is hiding the reason for the alert. If reviewers cannot see why something was flagged, they cannot build trust or correct bad rules.

A third mistake is measuring only queue volume. A smaller queue with better precision may be healthier than a big queue that looks productive but wastes reviewer time.

## Check yourself

- What makes a risk queue different from a normal task list?
- Why does settlement timing affect queue priority?
- What information should a reviewer see before making a decision?
- What actions should require a second approval?
- How would you know the queue is creating too many false positives?

## Interview version

I would design a fraud risk queue around priority, evidence, actionability, and feedback. The queue should rank cases by customer harm, money movement timing, risk severity, and operational SLA. Reviewers need clear risk reasons, relevant context, allowed actions, audit logs, and metrics for false positives, review time, fraud prevented, and escalations.

A strong TPM answer shows that a queue is an operating system for decisions, not just a backlog of alerts.
