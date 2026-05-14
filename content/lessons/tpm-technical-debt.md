---
id: tpm-technical-debt
track: TPM
category: Technical Strategy
level: Intermediate
question: How would you decide whether to prioritize technical debt?
sources:
  - label: Martin Fowler: Technical Debt
    url: https://martinfowler.com/bliki/TechnicalDebt.html
  - label: Atlassian: Technical debt
    url: https://www.atlassian.com/agile/software-development/technical-debt
---

## Learn it

Technical debt is the future cost created by technical choices that make the system harder to change, operate, understand, or trust. Sometimes debt is taken deliberately to learn quickly. Sometimes it appears accidentally through rushed work, old assumptions, missing tests, weak architecture, or repeated patches.

For a TPM, the key is to translate technical debt into product and business impact.

Engineering may say, "This service is hard to maintain." That matters, but stakeholders may not know how to compare it against customer-facing work. The TPM can help express the debt as delivery delay, incident risk, support cost, performance issues, onboarding difficulty, compliance risk, or inability to launch future features.

The question is not "Should we ever pay down debt?" Of course. The real question is "Which debt matters now, and how much should we invest?"

## Walkthrough

Imagine the team wants to launch a new payout method, but the payments code has grown messy. Every change creates regressions. Engineers are afraid to touch it. Testing is manual. Status mapping is duplicated across services.

One option is to build the new payout method on top of the messy system. That might be faster this month but riskier later.

Another option is to refactor first. That may delay the feature but reduce future delivery risk.

A TPM should make the tradeoff visible:

- How many planned features depend on this area?
- How often does this area cause incidents or bugs?
- How much engineering time is lost to rework?
- What customer or compliance risk exists?
- Can the debt be reduced incrementally?
- What is the cost of delaying the user-facing feature?

Now the decision becomes grounded instead of emotional.

## Make it practical

I would prioritize technical debt when it blocks important product goals, creates repeated incidents, slows delivery significantly, raises compliance or security risk, increases operational load, or makes future changes unsafe.

I would not automatically pause all product work for a vague cleanup project. I would ask engineering to frame the debt in terms of risk and outcomes. For example: "Refactor payout status handling so new partners can be added in two weeks instead of six, and reduce reconciliation bugs."

Good debt work often has a clear scope:

1. What pain are we reducing?
2. What product work becomes easier afterward?
3. What risk decreases?
4. How will we know the investment worked?
5. Can it be shipped incrementally?

Sometimes the right plan is to allocate a percentage of capacity to debt. Sometimes it is to tie debt work to a feature. Sometimes it is to stop and fix a dangerous foundation before continuing.

## Common mistakes

A common mistake is treating all debt as equal. Some debt is annoying but harmless. Some debt blocks strategy or creates real risk.

Another mistake is making debt invisible in planning. If the roadmap assumes full feature capacity while the team is constantly paying hidden maintenance costs, the plan is fake.

A third mistake is framing debt as engineering preference instead of business impact. The TPM should help explain why the investment matters in outcomes stakeholders understand.

## Check yourself

- What makes technical debt different from ordinary imperfect code?
- How can a TPM translate debt into business impact?
- When is it worth prioritizing debt over new features?
- Why is vague cleanup hard to justify?
- What metrics might show that debt work helped?

## Interview version

I would prioritize technical debt when it creates meaningful product, reliability, security, compliance, operational, or delivery risk. I would ask engineering to explain the debt in terms of impact: incidents, slower roadmap delivery, manual work, risk exposure, or blocked future features.

Then I would compare options: fix now, fix incrementally alongside feature work, allocate capacity, or defer with explicit risk. A strong answer treats debt as an investment decision, not an engineering preference.
