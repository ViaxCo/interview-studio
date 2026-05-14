---
id: tpm-post-launch-operations
track: TPM
category: Operations
level: Intermediate
question: What would you monitor after launching a high-risk product feature?
sources:
  - label: Google SRE: Monitoring distributed systems
    url: https://sre.google/sre-book/monitoring-distributed-systems/
  - label: LaunchDarkly Docs: Guarded rollouts
    url: https://launchdarkly.com/docs/home/releases/managing-guarded-rollouts
---

## Learn it

Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.

The beginner mistake is treating launch as the finish line. For risky features, launch is when the team starts learning whether the feature behaves safely in the real world.

A TPM should think about three kinds of health:

```txt
Product health:
Are users getting the intended value?

System health:
Is the product technically reliable?

Operational health:
Can support, compliance, operations, and partners handle what is happening?
```

If one of these fails, the launch may need to pause even if the code technically works.

## Walkthrough

Imagine launching a new payout partner behind a feature flag.

The team should not only watch "number of payouts." They need to know whether payouts are succeeding, how long they stay pending, whether partner errors are rising, whether support tickets are increasing, and whether reconciliation still works.

A weak launch plan says:

```txt
Launch Monday and check metrics later.
```

A stronger plan says:

```txt
Launch shape:
5 percent of eligible payouts in one corridor.

Review windows:
One hour, four hours, 24 hours, one week.

Pause criteria:
- Failure rate above threshold
- Pending duration above SLA
- Reconciliation mismatch
- Support contacts spike
- Partner incident report
```

Now launch is controlled, not hopeful.

## Make it practical

Here is a post-launch operating plan:

```txt
Feature:
New payout partner

Product metrics:
- Payout completion rate
- Median and p95 time to final status
- User retry rate
- Drop-off after partner selection

System metrics:
- API latency
- Error rate
- Timeout rate
- Webhook delivery success
- Queue backlog

Operational metrics:
- Pending payouts older than SLA
- Manual review volume
- Reconciliation exceptions
- Support tickets by reason
- Partner escalation count

Customer safety:
- Duplicate payout attempts
- Incorrect status shown to user
- Money captured but not submitted

Decision rules:
- Continue rollout if all guardrails stay healthy for 24 hours.
- Pause if failure rate doubles baseline.
- Roll back if money movement state becomes unclear.
- Escalate if partner does not respond within SLA.
```

The TPM should also define ownership:

```txt
Owner map

Engineering:
System metrics, rollback, technical investigation.

Operations:
Pending payouts, manual review, reconciliation.

Support:
Customer reports, macros, escalation tags.

Product:
Rollout decision, customer impact, tradeoffs, post-launch review.
```

## Common mistakes

A common mistake is monitoring only success metrics. You also need guardrails and failure signals.

Another mistake is waiting too long for the first review. High-risk launches need early observation.

A third mistake is not defining pause or rollback criteria before launch. Teams make worse decisions under pressure.

## Check yourself

- Why is launch not the finish line?
- What is the difference between product, system, and operational health?
- What are pause criteria?
- Why are early review windows useful?
- Who should own post-launch monitoring?

## Interview version

I would monitor product outcomes, system reliability, operational workload, customer safety, support volume, and guardrail metrics. I would define review windows, rollout stages, pause criteria, rollback criteria, owners, and communication paths before launch.

A strong TPM answer treats launch as an operating phase, not a celebration.
