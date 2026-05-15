---
id: tpm-partner-risk-scorecard
track: TPM
category: Vendor & Partner Management
level: Advanced
question: How would you build a partner risk scorecard for a fintech vendor?
sources:
  - label: FFIEC: Outsourcing Technology Services
    url: https://ithandbook.ffiec.gov/it-booklets/outsourcing-technology-services.aspx
  - label: Google VSAQ
    url: https://vsaq-demo.withgoogle.com/
---

## Learn it

A partner risk scorecard helps the company evaluate and monitor vendors or partners that affect critical fintech workflows.

The beginner mistake is doing vendor review only before signing the contract. Partners change. Their uptime, support quality, data controls, compliance posture, pricing, and incident history can become better or worse after launch.

The mental model:

```txt
Pre-launch review:
Should we use this partner?

Ongoing scorecard:
Is this partner still safe and effective?

Exit plan:
What happens if we need to leave?
```

The TPM should make vendor risk visible to product decisions.

## Walkthrough

Imagine a payout partner has good pricing but frequent weekend delays.

If the scorecard tracks only cost, the partner looks great. If it tracks customer impact, it may show:

```txt
Weekend payout SLA missed 6 times
Support response average 18 hours
Complaint rate doubled in one corridor
Reconciliation files delayed twice
```

That changes the roadmap conversation.

## Make it practical

Here is a partner scorecard artifact:

```txt
Partner:
Payout processor

Scorecard dimensions:
- Availability
- Latency
- Incident history
- Support responsiveness
- Compliance evidence
- Security posture
- Reconciliation quality
- Data export ability
- Cost at scale
- Product coverage
- Exit risk

Review cadence:
- Monthly for critical partners
- Quarterly for lower-risk partners
- Immediate review after severe incident

Decision outputs:
- Continue
- Improve with action plan
- Limit usage
- Add backup partner
- Replace partner
```

The scorecard should create decisions, not just scores.

## Common mistakes

A common mistake is relying on sales promises instead of operational evidence.

Another mistake is not including exit risk. A cheap partner can become expensive if leaving is painful.

A third mistake is treating all partners the same. A critical money-movement partner needs deeper monitoring than a low-risk analytics tool.

## Check yourself

- Why does partner review continue after launch?
- What dimensions should a fintech partner scorecard include?
- Why is exit risk important?
- What incident data should affect the score?
- How should scorecard results change roadmap decisions?

## Interview version

I would build a partner risk scorecard with availability, latency, incidents, support, compliance, security, reconciliation quality, data controls, cost, coverage, and exit risk. I would review critical partners regularly and tie scores to action plans, backup strategy, limits, or replacement.

A strong answer treats vendors as ongoing product dependencies.
