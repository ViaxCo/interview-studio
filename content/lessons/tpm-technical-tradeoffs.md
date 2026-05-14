---
id: tpm-technical-tradeoffs
track: TPM
category: Technical Strategy
level: Intermediate
question: How would you explain a technical tradeoff to non-technical stakeholders?
sources:
  - label: Atlassian Team Playbook: Trade-offs
    url: https://www.atlassian.com/team-playbook/plays/trade-offs
  - label: Atlassian Team Playbook: DACI
    url: https://www.atlassian.com/team-playbook/plays/daci
---

## Learn it

A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.

Non-technical stakeholders do not need every implementation detail, but they do need to understand the consequences of the decision.

The TPM's job is to translate technical options into user impact, business impact, risk, cost, timing, and reversibility.

Do not say, "Engineering wants to use Kafka instead of webhooks." That may be meaningful to engineers but not to everyone else.

Say, "Option A is faster to launch but may struggle when volume grows. Option B takes three extra weeks but gives us better reliability and easier partner onboarding later."

## Walkthrough

Imagine a team deciding whether to build a custom fraud rules engine or use a vendor.

The technical details may involve APIs, data models, latency, alerting, explainability, integrations, and long-term platform architecture. But the stakeholder decision might be:

- Do we need to launch in six weeks?
- How much fraud risk can we tolerate?
- Do we need custom rules for our market?
- What will compliance need to audit?
- What happens if the vendor is wrong?
- What is the cost now versus later?

A clear tradeoff explanation compares options in plain language.

Option 1: Use vendor rules first. Faster launch, lower engineering effort, proven baseline, but less customization and vendor dependency.

Option 2: Build in-house. More control and flexibility, but slower launch, more engineering cost, and more operational responsibility.

Option 3: Hybrid. Start with vendor baseline and build internal rule overrides for our highest-risk cases.

Now stakeholders can decide based on strategy, not hidden technical preference.

Here is a simple tradeoff memo:

```txt
Decision: Use vendor fraud rules for launch, then add internal rule overrides.

Context:
We need fraud screening before launch. Building the full rules engine in-house would delay launch by six to eight weeks.

Options:
1. Vendor only.
2. Build fully in-house.
3. Vendor baseline plus internal overrides for high-risk cases.

Recommendation:
Choose option 3.

Why:
It gets us to launch with a proven baseline while preserving control over our highest-risk cases.

What we give up:
We accept vendor dependency and some limits in rule customization during the first launch.

Risk:
Vendor decisions may be hard to explain to compliance or support.

Mitigation:
Log vendor reason codes, build an admin review view, and create manual override rules for priority cases.

Revisit trigger:
If manual overrides exceed 15% of flagged cases for two consecutive weeks, revisit the build-versus-buy decision.
```

That memo is not just communication. It becomes a record of why the team chose one path and what would make them change their mind.

## Make it practical

I would present tradeoffs with a simple structure:

1. Decision needed.
2. Options.
3. What we gain with each option.
4. What we give up with each option.
5. Risks and mitigations.
6. Cost and timeline.
7. Reversibility.
8. Recommendation.

Reversibility is especially important. If a decision is easy to change later, the team can move faster. If it is hard to undo, such as a data model, vendor contract, security architecture, or public API, the team should be more deliberate.

I would also avoid false precision. If estimates are uncertain, say so. Stakeholders can handle uncertainty better than surprise.

## Common mistakes

A common mistake is overexplaining technical internals before explaining why the decision matters.

Another mistake is hiding the recommendation. TPMs should not only be note takers. They should synthesize and recommend, while being honest about tradeoffs.

A third mistake is making the decision sound binary when there are staged options. Sometimes the best answer is a phased plan that learns quickly while limiting risk.

## Check yourself

- What is a technical tradeoff?
- Why should tradeoffs be explained in user and business terms?
- What does reversibility mean?
- Why is a recommendation useful?
- How can a phased option reduce risk?

## Interview version

I would explain the decision in plain language, compare options, and translate technical consequences into business outcomes: timeline, reliability, scalability, user experience, cost, risk, and reversibility.

Then I would give a recommendation with tradeoffs and mitigations. A strong answer helps non-technical stakeholders make an informed decision without pretending the tradeoff does not exist.
