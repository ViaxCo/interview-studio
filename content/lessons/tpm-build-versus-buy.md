---
id: tpm-build-versus-buy
track: TPM
category: Technical Strategy
level: Intermediate
question: How would you make a build versus buy decision?
sources:
  - label: Product School: Build vs buy
    url: https://productschool.com/blog/leadership/build-vs-buy
  - label: Atlassian Team Playbook: Trade-offs
    url: https://www.atlassian.com/team-playbook/plays/trade-offs
---

## Learn it

A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.

The beginner mistake is reducing the decision to cost. Buying can look cheaper because the first invoice is smaller than a build estimate. Building can look cheaper because the team ignores maintenance, support, compliance, uptime, security, and opportunity cost.

The better question is: what capability should this company own, and what capability should it rent?

If the capability differentiates the product, gives strategic control, or is tightly tied to the customer promise, building may make sense. If it is a commodity capability where vendors are mature and switching risk is manageable, buying may be better.

## Walkthrough

Imagine a fintech company deciding whether to build identity verification or buy a vendor.

Buying may give faster launch, tested document capture, global coverage, fraud signals, compliance reporting, and operational tooling. But it creates vendor dependency, cost at scale, less customization, and potential data-sharing concerns.

Building may give control, custom risk logic, tailored UX, and long-term differentiation. But it requires engineering, fraud expertise, compliance review, document processing, support tooling, monitoring, and ongoing regulatory updates.

The decision is not emotional. It is a tradeoff.

```txt
Build if:
- The capability differentiates the product.
- Requirements are unusual or deeply tied to strategy.
- Vendor limitations would block the roadmap.
- Data control or compliance needs require ownership.
- The team can maintain it responsibly.

Buy if:
- The capability is common and vendors are mature.
- Speed matters more than customization.
- Internal expertise is limited.
- Compliance or operational burden is high.
- Switching risk is acceptable.
```

## Make it practical

I would compare options across dimensions:

```txt
Decision: Build, buy, open source, or hybrid?

Criteria:
- User impact
- Strategic differentiation
- Time to market
- Total cost of ownership
- Integration effort
- Maintenance burden
- Security and compliance risk
- Vendor lock-in
- Data ownership
- Reliability and support
- Exit path
```

Then I would make a recommendation with assumptions.

```txt
Recommendation:
Buy identity verification for launch, but build internal risk rules and vendor abstraction.

Why:
Vendor coverage gets us live faster, while internal rules preserve control over our highest-risk decisions.

Risk:
Vendor cost may rise with volume.

Mitigation:
Negotiate volume tiers, export decision data, and design integration boundaries so a future second vendor is possible.
```

That is better than saying "buy because it is faster" or "build because we want control." It shows the product logic.

## Common mistakes

A common mistake is comparing vendor price to only initial build cost. The real comparison is total cost of ownership.

Another mistake is ignoring exit risk. If leaving a vendor later would be painful, that cost belongs in the decision.

A third mistake is building a commodity capability because the team enjoys technical control. Product strategy should drive ownership, not engineering pride.

## Check yourself

- Why is cost alone not enough for build versus buy?
- What does strategic differentiation mean?
- What is total cost of ownership?
- Why does exit path matter?
- When might a hybrid approach be best?

## Interview version

I would evaluate build versus buy by looking at strategic differentiation, user impact, time to market, total cost, integration effort, maintenance burden, compliance, reliability, vendor lock-in, data ownership, and exit path.

A strong answer does not default to building or buying. It explains which capabilities the company should own and which it can safely rent, then recommends a path with risks and mitigations.
