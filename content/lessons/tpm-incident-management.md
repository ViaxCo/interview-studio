---
id: tpm-incident-management
track: TPM
category: Operations
level: Intermediate
question: How would you handle a production incident affecting customers?
sources:
  - label: Atlassian: Incident management
    url: https://www.atlassian.com/incident-management
  - label: Google SRE: Postmortem culture
    url: https://sre.google/sre-book/postmortem-culture/
---

## Learn it

A production incident is when the product is not behaving in a way customers, the business, or internal teams can safely rely on. It might be an outage, broken checkout, delayed payments, incorrect pricing, missing notifications, a data issue, or a third-party partner failure.

For a Technical Product Manager, the goal is not to personally debug every system. The goal is to help the team protect customers, restore service, coordinate decisions, communicate clearly, and learn after the incident.

A good incident response has two modes.

During the incident, focus on containment and recovery. What is broken? Who is affected? How severe is it? What can we do now to reduce harm?

After the incident, focus on learning and prevention. Why did it happen? Why did our defenses not catch it earlier? What changes would reduce the chance or impact next time?

## Walkthrough

Imagine users cannot complete card payments.

The first thing to establish is severity and scope. Is it all users or one region? All payment methods or one provider? New payments only or refunds too? Is money being captured but the UI showing failure? Is there risk of duplicate charges?

Then establish roles. Engineering investigates technical cause. Support gathers customer reports. Operations may pause affected workflows. Product helps decide customer impact, acceptable workarounds, communication, and priority tradeoffs. Leadership may need updates if the incident is severe.

The team needs a single source of truth. That could be an incident channel, status doc, or incident tool. Decisions should be written down: what changed, what was tried, what was rolled back, what customers were told, and what remains unknown.

The TPM should keep asking customer-centered questions: Which users are affected? What can they still do? Do we need to disable a feature to prevent harm? What message should support use? Is there a regulatory or financial exposure?

## Make it practical

I would handle the incident in phases.

First, declare and triage. Identify severity, affected flows, start time, customer impact, and current owner.

Second, stabilize. If a recent deployment caused it, consider rollback. If a partner is down, route traffic elsewhere if possible. If the feature creates customer harm, temporarily disable the risky path.

Third, communicate. Keep internal stakeholders updated at a predictable cadence. Give support clear language. If customers need to know, communicate honestly: what is affected, what they can do, and when the next update will come.

Fourth, verify recovery. Do not trust one green log line. Confirm with metrics, customer journey checks, partner status, support volume, and if relevant, reconciliation data.

Fifth, run a blameless postmortem. The goal is not to find one person to blame. It is to understand the chain of events and improve the system: monitoring, alerts, test coverage, rollout process, runbooks, dependency resilience, and product fallback states.

During the incident, a TPM can keep a simple timeline like this:

```txt
Incident:
Card payments failing for users in Nigeria.

Severity:
High. Users cannot complete payment. Money movement is blocked, but no evidence of duplicate charge yet.

Known impact:
- Started around 10:12
- Affects card payments only
- Bank transfer still works
- Existing transfers are not affected
- Support tickets rising

Open questions:
- Are any authorizations captured but shown as failed?
- Is this our change, payment processor issue, or bank/network issue?
- Can we safely route users to bank transfer?

Actions:
10:20 Engineering checking payment logs.
10:23 Support using approved macro.
10:27 Product paused card option for new attempts in affected corridor.
10:31 Payments partner contacted.
10:40 Next update due.
```

A customer or support update should be plain:

```txt
We are seeing failed card payment attempts for some users in Nigeria.

Bank transfer is still available. Existing submitted transfers are not affected.

We are investigating with our payment partner and will share the next update by 10:40.
```

After recovery, the postmortem should separate technical recovery from customer recovery:

```txt
Postmortem outline

What happened:
Card payment attempts failed for 42 minutes in one corridor.

Customer impact:
1,420 failed attempts, 380 support contacts, 0 confirmed duplicate charges.

Detection:
Support noticed before automated alert.

Root cause:
Partner response-code mapping changed and our system treated retryable failures as hard failures.

Why existing defenses missed it:
No alert on corridor-level card failure spike. Contract test did not cover the new response code.

Follow-up actions:
- Add alert for payment failure rate by corridor and method.
- Add contract test for partner response-code mapping.
- Update support dashboard to show partner error category.
- Add fallback copy that routes users to bank transfer when card failure rate is high.
```

This is how the TPM answer becomes real. It shows the operating rhythm, the customer language, and the learning loop.

## Common mistakes

A common mistake is optimizing for silence. Teams sometimes avoid declaring incidents because it feels dramatic. That delays coordination.

Another mistake is communicating certainty too early. It is better to say what is known, what is unknown, and when the next update will come.

A third mistake is calling the incident done when the service recovers but customers are still affected. Payment reversals, stuck orders, missing notifications, or support tickets may continue after the technical fix.

## Check yourself

- What information do you need to assess incident severity?
- Why does the team need a single source of truth during an incident?
- What is the difference between technical recovery and customer recovery?
- Why are postmortems usually blameless?
- What product decisions might a TPM need to make during an incident?

## Interview version

I would first triage severity, scope, affected users, and customer harm. Then I would help coordinate roles, stabilize the system, communicate clearly, verify recovery, and make sure support and operations know what to do.

After recovery, I would lead or contribute to a blameless postmortem that captures timeline, root causes, missed signals, customer impact, and prevention actions. A strong answer shows both technical coordination and customer protection.
