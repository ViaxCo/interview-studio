---
id: tpm-success-metrics
track: TPM
category: Metrics
level: Foundational
question: How would you choose success metrics for a product feature?
sources:
  - label: Amplitude: North Star metric
    url: https://amplitude.com/blog/north-star-metric
  - label: Atlassian Team Playbook: Goals, signals, measures
    url: https://www.atlassian.com/team-playbook/plays/goals-signals-measures
---

## Learn it

Success metrics tell the team whether a feature is actually working. Without metrics, teams often celebrate shipping rather than impact.

The beginner mistake is choosing metrics that are easy to count but do not prove value. Page views, clicks, and signups can be useful, but they may not show whether users got the benefit the product promised.

A better approach starts with the product goal.

What user behavior should improve?

What business outcome should improve?

What risks should not get worse?

For example, if a feature helps users send repeat transfers faster, success might include repeat-transfer completion rate, time to complete, successful scheduled transfers, and lower support contacts. It should not only be "number of people who clicked the new button."

## Walkthrough

Imagine launching a saved recipients feature in a money transfer app.

The user problem is that people repeatedly enter the same recipient details. The business goal is to increase repeat transfer completion and reduce friction.

Good success metrics might include:

- Percentage of repeat transfers using saved recipients.
- Repeat transfer completion rate.
- Average time to start and complete a repeat transfer.
- Error rate from incorrect recipient details.
- Support tickets about recipient entry.

You also need guardrail metrics. A guardrail metric catches harm while the main metric improves. For saved recipients, guardrails might include failed transfers, fraud alerts, mistaken recipient reports, or account takeover signals.

The feature is not successful if completion goes up because the app made it too easy to send money to the wrong person.

## Make it practical

I would choose metrics in layers.

First, define the goal in plain language. "Help users complete repeat transfers with less effort."

Second, choose an activation metric. Are users discovering and setting up the feature?

Third, choose a usage metric. Are users actually using it in the intended flow?

Fourth, choose an outcome metric. Is the user or business result improving?

Fifth, choose quality and guardrail metrics. Did errors, complaints, risk, latency, or cost get worse?

Sixth, decide how to measure. What events do we need? What properties? What baseline period? What cohort? What time window? What dashboard? What review date?

For interview answers, it helps to avoid giving one lonely metric. A real product needs a small set: one primary success metric, supporting diagnostics, and guardrails.

A strong metrics answer often looks like a small tree:

```txt
Feature:
Saved recipients for repeat transfers

Product promise:
Repeat senders can send to trusted recipients faster, with fewer mistakes.

Primary success metric:
Repeat transfer completion rate for users with saved recipients.

Activation metrics:
- Percentage of eligible users who save at least one recipient
- Percentage of repeat senders who see the saved-recipient entry point

Usage metrics:
- Percentage of repeat transfers started from saved recipients
- Number of saved recipients used more than once

Efficiency metrics:
- Median time from "start transfer" to "submit transfer"
- Number of recipient-detail edits per repeat transfer

Quality metrics:
- Failed transfers caused by incorrect recipient details
- Recipient deletion or correction rate

Guardrail metrics:
- Mistaken-recipient support tickets
- Fraud or account-takeover flags involving saved recipients
- Transfer cancellation rate after recipient selection
```

Then define the instrumentation before launch:

```txt
Events needed:
- recipient_save_started
- recipient_save_completed
- recipient_selected
- transfer_submitted
- transfer_completed
- transfer_failed
- recipient_edited
- recipient_deleted

Useful properties:
- user_id
- recipient_id
- corridor
- payout_method
- is_repeat_sender
- transfer_status
- failure_reason
- source: saved_recipient, manual_entry, recent_recipient

Baseline:
Compare repeat-transfer completion and time-to-submit from the 30 days before launch.

Review window:
Look at early guardrails after 24 hours, then success metrics after one or two full repeat-transfer cycles.
```

This is the difference between "I would track conversion" and "I know how to prove whether the feature helped without creating new harm."

## Common mistakes

A common mistake is calling an output a success metric. "Feature launched" is a delivery milestone, not proof of user value.

Another mistake is using vanity metrics. A click can be curiosity, confusion, or success. You need context.

A third mistake is choosing too many metrics. If everything is important, the team may not know what to optimize.

## Check yourself

- Why is shipping not the same as success?
- What is a guardrail metric?
- Why might clicks be misleading?
- What is the difference between activation, usage, and outcome?
- What instrumentation questions should be answered before launch?

## Interview version

I would start with the product goal, then define a primary success metric that reflects user or business value. I would add supporting metrics to understand the funnel and guardrail metrics to catch harm.

For example, for saved recipients, I might track setup rate, repeat-transfer usage, completion rate, time to complete, failed transfers, and support tickets. A strong answer explains why each metric maps to the feature's intent.
