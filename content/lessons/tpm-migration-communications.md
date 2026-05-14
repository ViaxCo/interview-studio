---
id: tpm-migration-communications
track: TPM
category: Migration & Change Management
level: Intermediate
question: How would you communicate a technical migration to customers and internal teams?
sources:
  - label: AWS: Migration strategies
    url: https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html
  - label: Martin Fowler: Strangler Fig Application
    url: https://martinfowler.com/bliki/StranglerFigApplication.html
---

## Learn it

A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.

The beginner mistake is treating migration communication as a launch announcement. Migration communication is really change management. Different groups need different information at different times.

Customers care about:

```txt
Will anything break?
Will my data change?
Do I need to do anything?
When is this happening?
Who do I contact if something looks wrong?
```

Internal teams care about:

```txt
What is changing?
Who is affected?
What is the rollout plan?
What are the known risks?
How do we support, monitor, and roll back?
```

## Walkthrough

Imagine the company is migrating customers from an old reporting system to a new analytics platform.

A weak communication plan says:

```txt
Email customers when the migration is done.
```

That is too late. If reports look different, exports change, or data refresh timing changes, customers and support will be surprised.

A better plan segments the audience:

```txt
Internal engineering:
Technical rollout, data validation, rollback, monitoring.

Support:
Customer-facing explanation, known differences, escalation path.

Sales and customer success:
Which accounts are affected, timing, benefits, risks.

Customers:
What changes, when, what action is needed, how to get help.

Leadership:
Progress, risk, customer impact, decision points.
```

The message should match the audience. Customers do not need the database migration strategy. Support does need enough detail to answer real questions.

## Make it practical

Here is a migration communications plan:

```txt
Migration:
Move business reporting from legacy reports to new analytics platform.

Customer-facing promise:
Reports will be faster, easier to filter, and exportable in the same formats.

Customer impact:
- Report layout changes
- Export names change
- Historical data remains available
- No action required for most customers
- API report endpoint changes for customers using automation

Timeline:
Week 1: internal validation
Week 2: beta customers
Week 3: 20 percent rollout
Week 4: full rollout if guardrails pass

Customer comms:
- 14 days before: explain change and timeline
- 3 days before: reminder with support link
- Day of migration: confirmation and known differences
- After migration: check-in for high-value accounts

Support enablement:
- Macro for "what changed"
- Known differences page
- Escalation tag
- Rollback contact
- Data validation checklist
```

Here is a customer email structure:

```txt
Subject:
Upcoming reporting update on May 28

What is changing:
Your reports will move to a faster analytics experience with the same historical data.

When:
We plan to migrate your workspace between May 28 and May 30.

What you need to do:
Most customers do not need to take action. If you use automated report exports, review the endpoint notes linked below.

What may look different:
Some report names and filters have changed. Export formats remain available.

Help:
Contact support if a report looks missing or if totals do not match expectations.
```

Good migration communication reduces surprise. It does not promise zero risk.

## Common mistakes

A common mistake is communicating only the benefit. Customers also need to know what changes and what action is required.

Another mistake is sending the same message to every audience. Engineering, support, executives, and customers need different levels of detail.

A third mistake is not preparing support. If support learns from customers, the migration already feels sloppy.

## Check yourself

- Why is migration communication different from a launch announcement?
- What do customers need to know during a migration?
- Why should support be enabled before customers are notified?
- What should a customer migration email include?
- How can rollout stages reduce migration risk?

## Interview version

I would communicate a migration by segmenting audiences, explaining what changes, who is affected, timeline, required actions, risks, support path, and rollback or mitigation plans. I would prepare internal teams before customer communication and use staged rollout updates.

A strong TPM answer shows that migration success depends on trust, timing, support readiness, and clear expectations, not only technical execution.
