---
id: tpm-experiment-design-risk
track: TPM
category: Metrics & Experimentation
level: Intermediate
question: How would you design an experiment when the product area has compliance or user-risk constraints?
sources:
  - label: Microsoft Research: Trustworthy experimentation
    url: https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/
  - label: GOV.UK Service Manual: Plan user research
    url: https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service
---

## Learn it

An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.

The beginner mistake is thinking "experiment" always means "ship two versions and see which wins." In regulated, financial, health, safety, privacy, or trust-sensitive products, some experiments can harm users, create unfair treatment, or violate policy.

The TPM still needs learning, but the learning method must match the risk.

The mental model is:

```txt
Low-risk change:
Use normal A/B test if measurement is clean.

Medium-risk change:
Use limited rollout, guardrails, and monitoring.

High-risk change:
Use research, simulation, backtesting, expert review, or staged release before live exposure.
```

## Walkthrough

Imagine a remittance app wants to reduce identity-verification drop-off.

The growth idea is: "Ask fewer questions upfront."

That might improve conversion. But it may also allow risky users to move further into the product before required checks happen.

A weak experiment plan says:

```txt
Variant A: current onboarding
Variant B: shorter onboarding
Primary metric: signup completion
Ship to 50 percent of users
```

That ignores compliance and risk.

A stronger experiment plan says:

```txt
Hypothesis:
Moving low-risk profile questions later will improve signup completion without increasing risky account progression.

Eligible users:
Only users in low-risk corridors and low transaction limits.

Primary metric:
Verified signup completion.

Guardrail metrics:
- Manual review rate
- Suspicious activity flags
- Failed verification rate
- Support contacts about missing information
- Time to compliance decision

Rollout:
5 percent for 48 hours, then 20 percent if guardrails stay healthy.

Stop condition:
Pause if manual review rate or suspicious flags exceed threshold.
```

Now the experiment has a learning goal and a safety model.

## Make it practical

If live experimentation is too risky, I would choose another learning method.

```txt
Alternatives to a risky A/B test

User research:
Watch users complete the flow and identify confusion.

Prototype test:
Test comprehension before changing production behavior.

Backtesting:
Run proposed risk rules against historical data.

Shadow mode:
Compute the new decision in the background without affecting users.

Limited beta:
Expose a small, low-risk group with active monitoring.

Policy review:
Confirm the experiment does not violate compliance requirements.
```

The TPM should also decide what "success" means before the experiment starts. If signup completion improves but manual review doubles, that may not be a win.

## Common mistakes

A common mistake is optimizing the primary metric while ignoring harm. More signups are not useful if the product creates more fraud, support burden, or compliance exposure.

Another mistake is using an experiment where research would answer the question faster and more safely.

A third mistake is failing to define stop conditions. If the team has no pause rule, it may argue while users are already being affected.

## Check yourself

- Why is an A/B test not always the right experiment?
- What is a guardrail metric?
- Why might signup completion be a misleading success metric?
- What is shadow mode?
- When would user research be better than a live experiment?

## Interview version

I would design the experiment by defining the hypothesis, eligible population, primary metric, guardrail metrics, rollout size, stop conditions, monitoring plan, and compliance review. If live exposure is too risky, I would use research, prototype testing, backtesting, shadow mode, or a small controlled beta.

A strong TPM answer shows that experimentation is about learning responsibly, not just moving a metric.
