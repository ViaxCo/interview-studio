---
id: tpm-onboarding-activation-metrics
track: TPM
category: Metrics
level: Foundational
question: How would you measure onboarding and activation for a product?
sources:
  - label: Amplitude: Activation metric
    url: https://amplitude.com/blog/activation-metric
  - label: Atlassian Team Playbook: Goals, signals, measures
    url: https://www.atlassian.com/team-playbook/plays/goals-signals-measures
---

## Learn it

Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.

The beginner mistake is treating signup as activation. A signup means someone entered the door. Activation means they did something that makes future usage more likely.

For a remittance app, activation might be completing the first successful transfer. For a developer API, activation might be making the first successful sandbox request and receiving a webhook. For a TPM, the work is to define the behavior that proves value, then measure the path to that behavior.

## Walkthrough

Imagine a money transfer product.

The onboarding funnel might be:

```txt
1. Account created.
2. Profile completed.
3. Identity submitted.
4. Identity approved.
5. Recipient added.
6. Quote viewed.
7. Transfer started.
8. Transfer funded.
9. Transfer completed.
```

The activation metric may be "first successful transfer completed within seven days of signup." That is stronger than "user clicked send" because it captures the real product promise.

But activation can have guardrails. If users activate faster but failed transfers or fraud alerts rise, the product may be creating risk.

## Make it practical

I would define metrics in layers.

```txt
Primary activation metric
- First successful transfer within seven days.

Funnel metrics
- Signup completion.
- Profile completion.
- Verification approval.
- Recipient creation.
- Quote view.
- Transfer start.
- Transfer completion.

Quality metrics
- Verification retry rate.
- Transfer failure rate.
- Time stuck in pending.
- Support contacts during onboarding.

Risk guardrails
- Fraud alerts.
- Compliance review rate.
- Mistaken recipient reports.
- Chargebacks or reversals.
```

Then I would segment the metrics. New users from one country may fail identity checks more often. Mobile users may abandon document capture. Users with unsupported payout methods may stop at recipient setup. Segmentation turns "activation is low" into a fixable product problem.

I would also define event instrumentation before launch. If the app does not log each step consistently, the team will not know where users are dropping.

## Common mistakes

A common mistake is choosing an activation metric because it is easy to measure. The metric should represent value, not convenience.

Another mistake is ignoring time. Activation in one day and activation in sixty days mean different things.

A third mistake is optimizing conversion while damaging trust or risk. In regulated products, guardrails matter.

## Check yourself

- What is the difference between signup and activation?
- Why should activation represent meaningful value?
- What funnel steps might matter in a remittance app?
- Why do guardrail metrics matter?
- How can segmentation make onboarding problems easier to fix?

## Interview version

I would define activation as the first behavior that proves the user experienced meaningful value, then measure the onboarding funnel leading to that behavior. For a remittance app, that might be first successful transfer within seven days.

A strong answer includes funnel metrics, quality metrics, risk guardrails, segmentation, and instrumentation. It avoids treating signup or clicks as proof of activation.
