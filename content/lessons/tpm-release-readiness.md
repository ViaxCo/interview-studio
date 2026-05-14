---
id: tpm-release-readiness
track: TPM
category: Launch
level: Intermediate
question: How would you decide whether a feature is ready to launch?
sources:
  - label: Atlassian: Continuous delivery
    url: https://www.atlassian.com/continuous-delivery
  - label: LaunchDarkly: Feature flag best practices
    url: https://launchdarkly.com/blog/feature-flag-best-practices/
---

## Learn it

Launch readiness means the team has enough evidence that the feature can be released without creating unacceptable customer, business, technical, operational, or compliance risk.

It does not mean the feature is perfect. It means the team understands what is being released, who will see it, what could go wrong, how success will be measured, and how to respond if something breaks.

For a TPM, launch readiness is a cross-functional decision. Engineering may say the code is complete. Design may say the experience is approved. Compliance may require sign-off. Support may need scripts. Marketing may need timing. Data may need dashboards. Operations may need a runbook.

The job is to bring those pieces together into a clear go or no-go decision.

## Walkthrough

Imagine launching a new identity verification flow.

Code complete is not enough. You need to know:

- Does it work on supported devices and browsers?
- Are the error states understandable?
- Does the vendor handle expected traffic?
- Are privacy and compliance requirements approved?
- Can support see verification status?
- Are analytics events firing?
- Do we know the expected approval and failure rates?
- Can we roll back or disable the flow?
- What happens to users already in progress if we roll back?

Readiness is about confidence across the whole system, not only the pull request.

Here is what a practical readiness view can look like:

```txt
Area: Product
Owner: PM
Evidence: success metrics, launch scope, non-goals, customer states
Go/no-go question: Do we know what success and harm look like?

Area: Engineering
Owner: Engineering lead
Evidence: tests, monitoring, logs, feature flag, rollback plan
Go/no-go question: Can we detect and recover if this behaves badly?

Area: Compliance and risk
Owner: Compliance lead
Evidence: approval, audit fields, data retention, review workflow
Go/no-go question: Are required controls present before risky actions?

Area: Support and operations
Owner: Ops or support lead
Evidence: runbook, macros, admin visibility, escalation path
Go/no-go question: Can the company operate the feature on day one?
```

This turns "are we ready?" from a vague meeting into evidence the team can inspect.

## Make it practical

I would create a launch checklist with owners.

Product readiness: requirements complete, non-goals clear, user-facing states approved, success metrics defined, experiment or rollout plan agreed.

Engineering readiness: tests pass, known bugs triaged, monitoring added, logs useful, feature flag ready, rollback plan known, dependencies checked.

Design readiness: final UX reviewed across key states, copy approved, accessibility considered, mobile and desktop behavior checked.

Operational readiness: support docs, escalation path, admin tools, runbook, manual-review process, and incident contacts.

Compliance and risk readiness: privacy, security, data retention, audit logs, terms, and regulatory approvals if needed.

Data readiness: dashboards, event definitions, baseline metrics, alert thresholds, and post-launch review date.

Then I would choose the release shape. A risky feature should not launch to everyone at once if it can be phased. Use internal testing, beta users, percentage rollout, geography-based rollout, feature flags, or limited transaction limits.

A go/no-go decision should be short and explicit:

```txt
Decision: Go with limited rollout.

Scope: 5% of eligible users in one corridor.
Why: Happy path, rejection path, and manual review path are tested. Support runbook is ready. Compliance approval is complete.
Known risk: Vendor webhook delay could leave users in pending state longer than expected.
Mitigation: Alert if pending exceeds 15 minutes. Support can see vendor status. Rollback disables new submissions without hiding existing cases.
Review: Meet after 24 hours or after first 500 attempts, whichever comes first.
```

That answer sounds senior because it does not pretend launch is risk-free. It shows the risk and the control.

## Common mistakes

A common mistake is treating readiness as a meeting where everyone gives vague approval. Readiness should be evidence-based.

Another mistake is forgetting rollback. Some features are easy to turn off. Others involve migrations, customer states, partner calls, or money movement. Rollback must be designed before launch.

A third mistake is not defining success until after launch. If you do not know what healthy looks like, you will not know whether launch is going well.

## Check yourself

- Why is code complete not the same as launch ready?
- What areas should a launch checklist cover?
- Why are feature flags useful for risky releases?
- What makes rollback complicated?
- What metrics would you watch immediately after launch?

## Interview version

I would decide launch readiness by checking product, engineering, design, compliance, operations, support, and data readiness. The feature should have clear requirements, tested core paths, acceptable known risks, monitoring, support materials, rollout plan, rollback plan, and success metrics.

For higher-risk launches, I would use feature flags, limited rollout, beta groups, or geography-based release. A strong answer shows that launch is an operating decision, not just a code-complete milestone.
