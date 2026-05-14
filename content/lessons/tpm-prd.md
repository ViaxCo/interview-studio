---
id: tpm-prd
track: TPM
category: Product Requirements
level: Foundational
question: What makes a strong product requirements document for a technical product?
sources:
  - label: ProductPlan: Product requirements document
    url: https://www.productplan.com/glossary/product-requirements-document/
  - label: Atlassian: Product requirements template
    url: https://www.atlassian.com/software/confluence/templates/product-requirements
---

## Learn it

A product requirements document, or PRD, explains what the team is building, why it matters, who it is for, how success will be measured, and what constraints must be respected.

For a technical product, a PRD is not just a feature wish list. It is a shared decision document. It helps product, engineering, design, data, support, compliance, operations, and leadership understand the same problem before people start building different things in their heads.

A strong PRD answers four simple questions:

1. What problem are we solving?
2. Who has this problem?
3. What should change for the user or business when we solve it?
4. What must be true for the solution to be safe, usable, and shippable?

If the PRD cannot answer those questions clearly, engineering may still build something, but the team may not build the right thing.

## Walkthrough

Imagine the company wants to add scheduled transfers.

A weak PRD says: "Users should be able to schedule transfers."

That sounds clear until engineering asks questions. Can users schedule one-time or recurring transfers? Can they edit them? What if the exchange rate changes? What if the user's balance is insufficient? What if compliance blocks the recipient before the scheduled date? What notifications are required? What happens on weekends? What does support see?

A strong PRD does not need to solve every technical detail alone, but it should expose the decisions the team must make.

Here is the difference between a vague requirement and a useful requirement:

```txt
Weak:
Users can schedule transfers.

Stronger:
Users can create a one-time scheduled transfer for a future date up to 90 days away. Before execution, the system must recheck available balance, recipient eligibility, compliance status, and the current exchange rate. If any check fails, the transfer must not execute, the user must receive a clear notification, and support must be able to see the failure reason.
```

The stronger version is not longer because the TPM likes paperwork. It is longer because the product has real behavior when money, timing, compliance, and customer trust are involved.

It might define:

- Target users: customers who send repeat transfers to family.
- Problem: they forget transfer dates and repeat the same manual steps each month.
- Goal: increase repeat-transfer completion and reduce manual effort.
- Non-goals: business transfers and bulk payroll are out of scope.
- User experience: create, view, pause, edit, cancel, and receive notifications.
- Technical constraints: rate refresh, balance checks, compliance checks, retry rules, idempotency, audit logs.
- Metrics: scheduled transfer creation, completion rate, failure rate, support contacts, repeat usage.

Now the team has something real to discuss.

## Make it practical

For technical products, I like PRDs that include:

Problem and context: why this matters now.

Users and use cases: who benefits and what they are trying to do.

Goals and non-goals: what is in scope and what is intentionally not in scope.

Requirements: user-facing behavior, system behavior, admin/support behavior, data requirements, permissions, error states, and edge cases.

Success metrics: activation, usage, conversion, reliability, latency, cost, quality, or risk metrics.

Dependencies and risks: APIs, vendors, migrations, compliance approvals, design dependencies, operational readiness, and rollout risks.

Launch plan: flags, beta users, monitoring, support docs, rollback, and post-launch review.

The best PRDs are readable. They do not hide uncertainty. If something is unknown, mark it as an open question with an owner and date. That is better than pretending every decision is already settled.

A useful mini PRD excerpt might look like this:

```txt
Feature: Scheduled transfers

Problem:
Repeat senders forget transfer dates and repeat the same manual setup every month.

Goal:
Increase repeat-transfer completion and reduce time to send for repeat senders.

Non-goals:
Bulk payroll, business transfers, and multi-recipient schedules are out of scope.

Core flow:
1. User chooses an existing recipient.
2. User chooses amount and future date.
3. User reviews fees, estimated rate, and execution rules.
4. User confirms schedule.
5. System checks eligibility again on execution date.
6. User receives success or failure notification.

Edge cases:
- Insufficient balance on execution date.
- Recipient becomes ineligible.
- Exchange rate changes beyond allowed threshold.
- Compliance review is required.
- User cancels before execution.

Success metrics:
- Scheduled transfer creation rate.
- Scheduled transfer completion rate.
- Repeat sender retention.
- Support contacts per scheduled transfer.
```

This gives engineering enough shape to ask good technical questions, while still leaving room for implementation design.

## Common mistakes

A common mistake is writing requirements as solutions too early. "Use vendor X" may be correct, but the PRD should also explain the user and business reason so alternatives can be evaluated.

Another mistake is ignoring non-happy paths. Technical products fail in real ways: timeouts, duplicate requests, permission errors, partial success, partner downtime, migration issues, and manual-review queues.

A third mistake is shipping the PRD as a one-time artifact and never updating it. A PRD should evolve as decisions become clearer.

## Check yourself

- What problem should a PRD solve for the team?
- Why are non-goals useful?
- What kinds of edge cases matter in a technical PRD?
- Why should success metrics be included before build starts?
- How should a PRD handle unknowns?

## Interview version

A strong technical PRD aligns the team on the problem, user, scope, requirements, constraints, metrics, risks, and launch plan. It should include goals, non-goals, user flows, system behavior, edge cases, data needs, dependencies, open questions, and success measures.

The best PRDs are not long for the sake of being long. They make decisions clear, expose uncertainty, and prevent teams from building different interpretations of the same feature.
