---
id: tpm-vendor-evaluation
track: TPM
category: API & Partner Integration
level: Intermediate
question: How would you evaluate a third-party vendor for a technical product?
sources:
  - label: Google: Vendor Security Assessment Questionnaire
    url: https://github.com/google/vsaq
  - label: Atlassian Team Playbook: Trade-offs
    url: https://www.atlassian.com/team-playbook/plays/trade-offs
---

## Learn it

A third-party vendor can help a team move faster, but it also becomes part of the product's risk. If the vendor is slow, wrong, expensive, insecure, unavailable, or hard to integrate, customers may blame your product.

Evaluating a vendor is not only procurement. It is a product, technical, security, legal, operational, and financial decision.

The beginner mistake is to compare vendors only by feature checklist. Feature coverage matters, but it is not enough.

A strong TPM asks:

- Does this vendor solve the actual user and business problem?
- Can engineering integrate and operate it safely?
- Does it meet security, privacy, compliance, and legal requirements?
- What happens when it fails?
- How much does it cost now and at scale?
- How hard would it be to switch later?

## Walkthrough

Imagine choosing an identity verification vendor.

Vendor A has great pricing and easy integration, but weaker coverage in countries the business wants to enter.

Vendor B has strong global coverage and compliance support, but integration is more complex and support response is slower.

Vendor C has excellent developer experience, but the contract has strict minimums and data retention terms that legal dislikes.

The right answer depends on strategy. If the company is only launching in one country, Vendor A may be fine. If expansion is the roadmap, Vendor B may be better. If the team needs a fast prototype, Vendor C may be useful but risky for long-term scale.

Vendor evaluation is about fit, not abstract best.

A useful scorecard makes the comparison visible:

```txt
Vendor A
- Product fit: strong for launch country, weak for expansion
- Technical fit: simple API, limited webhook detail
- Compliance fit: acceptable for current scope
- Operations: fast support, limited manual review tooling
- Commercials: low cost now, medium cost at scale
- Exit risk: medium

Vendor B
- Product fit: strong global coverage
- Technical fit: more complex API, stronger status model
- Compliance fit: stronger audit and reporting
- Operations: slower support, better admin tooling
- Commercials: higher minimum contract
- Exit risk: lower because data export is clearer
```

The TPM's job is to make the tradeoff visible enough that the team can choose based on strategy, not demo polish.

## Make it practical

I would evaluate vendors across several dimensions.

Product fit: features, user experience, geographic coverage, languages, mobile support, customization, and roadmap alignment.

Technical fit: API quality, documentation, SDKs, sandbox, webhooks, idempotency, rate limits, latency, uptime, monitoring, versioning, and migration path.

Security and compliance: certifications, data handling, encryption, access controls, audit logs, privacy terms, retention, sub-processors, regulatory support, and incident notification.

Operations: support SLAs, escalation process, manual review tools, reporting, reconciliation, status pages, and partner success resources.

Commercials: pricing model, minimums, overage fees, contract length, renewal terms, termination rights, and cost at projected scale.

Risk and exit: vendor lock-in, fallback options, data export, multi-vendor strategy, and what happens during vendor downtime.

Then I would run a proof of concept for the riskiest assumptions instead of only watching a demo.

For an identity vendor, the proof of concept should not only test "can we call the API?" It should test the scary parts:

```txt
Proof-of-concept plan

1. Verify a normal user.
2. Reject a blurry document.
3. Put a user into manual review.
4. Receive delayed webhook events.
5. Retry a failed request safely.
6. Confirm support can see the reason and status.
7. Export decision data needed for audit.
8. Measure average response time on mobile networks.
9. Confirm what happens if the vendor is unavailable.
```

Security review also needs concrete questions:

- What personal data does the vendor collect and store?
- Where is it stored and for how long?
- Who can access it?
- Is data encrypted in transit and at rest?
- What audit logs are available?
- What certifications or third-party reports exist?
- How quickly will the vendor notify us about an incident?
- Can we delete or export data if we leave?

## Common mistakes

A common mistake is letting the best demo win. Demos are optimized to look smooth. Real integration reveals edge cases.

Another mistake is ignoring operational fit. A vendor can have a great API but poor support when something breaks.

A third mistake is not thinking about exit strategy. If switching later would be painful, that risk should be part of the decision.

## Check yourself

- Why is vendor selection a product risk decision?
- Why is a feature checklist not enough?
- What technical questions should you ask about an API vendor?
- Why do support SLAs matter?
- What does vendor lock-in mean?

## Interview version

I would evaluate a vendor across product fit, technical fit, security, compliance, operations, commercials, and exit risk. I would involve engineering, security, legal, compliance, operations, and finance early.

Then I would run a proof of concept around the riskiest assumptions, not just the easiest demo path. A strong answer shows that vendors can accelerate the roadmap but also become dependencies the product must manage.
