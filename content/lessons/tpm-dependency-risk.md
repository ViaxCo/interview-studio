---
id: tpm-dependency-risk
track: TPM
category: Execution & Delivery
level: Intermediate
question: How would you manage dependency risk across multiple teams?
sources:
  - label: Atlassian: Advanced Roadmaps dependencies
    url: https://www.atlassian.com/software/jira/guides/advanced-roadmaps/overview
  - label: Atlassian Support: Manage dependencies in plans
    url: https://support.atlassian.com/jira-software-cloud/docs/view-and-manage-dependencies-in-advanced-roadmaps/
---

## Learn it

A dependency is work that one team needs from another team before it can finish its own work.

The beginner mistake is discovering dependencies late. Late dependency discovery is painful because the other team may already have a full roadmap, a different priority, or a technical constraint nobody planned for.

Dependency risk is not only "Team B is late." It can also mean the dependency is unclear, unowned, too large, technically risky, or not actually committed by the team expected to deliver it.

The mental model is:

```txt
Dependency = "We need something from someone else."
Dependency risk = "That something may not arrive in the right shape, quality, or time."
```

## Walkthrough

Imagine the product team is launching business accounts.

Your team owns the user experience. But the launch depends on:

```txt
Identity team:
Business verification API

Platform team:
Organization and role model

Data team:
Business account reporting tables

Compliance team:
Policy approval and review rules

Support operations:
Macros and investigation flow
```

A weak plan says, "We need these teams." A strong plan names the exact contract.

```txt
Dependency register

Dependency:
Business verification API

Owner:
Identity team

Needed by:
March 12 for integration testing

Definition of done:
- Create verification request
- Return pending, approved, rejected, needs_more_info
- Include reason code for support
- Sandbox supports approved and rejected test businesses

Risk:
Identity team has not committed to reason codes.

Mitigation:
Escalate by Feb 16 or reduce launch scope to approved/pending only.
```

This makes the dependency visible enough to manage.

## Make it practical

I would manage dependency risk in four passes.

First, discover dependencies early. Ask engineering what systems, teams, data, approvals, migrations, or operational changes are needed.

Second, define the contract. A dependency should have an owner, expected date, definition of done, integration point, test plan, and fallback.

Third, track health. Not all dependencies need the same attention. Red ones need active management.

Fourth, communicate impact. If a dependency slips, say what customer, launch, compliance, or revenue outcome is affected.

```txt
Dependency health model

Green:
Owner confirmed, scope clear, date realistic, no blocker.

Yellow:
Owner confirmed, but scope/date/risk still uncertain.

Red:
No owner, no commitment, late delivery, or missing launch-critical behavior.
```

The TPM should not only ask, "Is it on track?" A better question is, "What evidence tells us it is on track?"

## Common mistakes

A common mistake is tracking dependencies as vague bullets. "Need data team" is not a manageable dependency.

Another mistake is assuming another team's roadmap commitment exists because someone said "sounds good" in a meeting.

A third mistake is escalating too late. Escalation is not drama. It is making a risk visible while there is still time to change the plan.

## Check yourself

- What information should a dependency have before it is manageable?
- Why is "owner confirmed" different from "someone agreed in a meeting"?
- What makes a dependency red instead of yellow?
- Why should dependencies include a definition of done?
- What should a TPM communicate when a dependency slips?

## Interview version

I would manage dependency risk by discovering dependencies early, assigning owners, defining the contract and definition of done, tracking health, creating fallbacks, and communicating impact when risk changes.

A strong TPM answer shows that dependencies are not just project-management labels. They are cross-team commitments that need evidence, ownership, and active risk management.
