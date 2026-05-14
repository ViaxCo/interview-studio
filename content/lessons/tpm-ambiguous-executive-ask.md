---
id: tpm-ambiguous-executive-ask
track: TPM
category: Product Strategy
level: Intermediate
question: How would you handle an ambiguous executive request?
sources:
  - label: Atlassian: Better team decision making
    url: https://www.atlassian.com/team-playbook/examples/making-decisions
  - label: ProductPlan: Product vision vs product strategy
    url: https://www.productplan.com/learn/product-vision-vs-product-strategy/
---

## Learn it

An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.

Examples:

```txt
"We need an AI strategy."
"Make onboarding enterprise-ready."
"Improve reliability."
"Monetize the API."
"Reduce operational risk."
```

The beginner mistake is either obeying literally or pushing back too quickly. A stronger TPM treats the request as a signal. The executive may be pointing at a real business concern, but the team still needs clarity before committing roadmap capacity.

The TPM's job is to turn ambiguity into a decision:

```txt
What outcome are we trying to create?
Why now?
For whom?
What evidence do we have?
What options exist?
What tradeoffs are acceptable?
How will we know it worked?
```

## Walkthrough

Imagine the CEO says, "We need to make the product enterprise-ready this quarter."

A weak response is:

```txt
Add SSO, audit logs, custom roles, and admin dashboard.
```

Those may be useful, but the team does not yet know the goal. Enterprise-ready for whom? A bank? A startup with 20 employees? A procurement checklist? A signed customer?

A stronger TPM clarifies:

```txt
Possible meanings:
- Close one named enterprise deal
- Pass security review
- Support teams and permissions
- Improve admin controls
- Meet compliance procurement requirements
- Support higher-volume usage
```

Each meaning leads to a different plan.

## Make it practical

Here is a clarification memo:

```txt
Request:
Make the product enterprise-ready this quarter.

Clarifying questions:
1. Which customer or segment is driving this?
2. What deal, risk, or company goal makes this urgent?
3. Which procurement or security blockers exist today?
4. What must be true by end of quarter?
5. What can wait?

Current evidence:
- Two enterprise prospects asked for SSO and audit logs.
- One existing customer asked for role-based approvals.
- Security questionnaire flagged data retention and admin access.

Options:

Option A: Deal unblocker
Build SSO, audit log export, and security documentation.

Option B: Admin foundation
Build organization model, roles, permissions, and audit events.

Option C: Enterprise platform
Build SSO, custom roles, audit logs, approvals, data retention, and SCIM.

Recommendation:
Choose Option B plus security documentation this quarter.

Why:
Permissions and auditability unlock multiple enterprise asks and reduce future rework. Full enterprise platform is too large for one quarter.
```

This turns a vague request into options leadership can actually choose between.

## Common mistakes

A common mistake is pretending ambiguity is clarity because the request came from an executive.

Another mistake is asking only "what do you want us to build?" Better questions uncover the business outcome and constraint.

A third mistake is turning every executive request into an emergency. Some are urgent. Some need discovery. Some should be declined or reframed.

## Check yourself

- Why should an ambiguous executive request be treated as a signal?
- What questions help clarify the real outcome?
- Why is "enterprise-ready" not specific enough?
- What should a clarification memo include?
- How can a TPM push back without being dismissive?

## Interview version

I would handle an ambiguous executive request by clarifying the business outcome, customer or segment, urgency, evidence, constraints, options, tradeoffs, and success metrics. Then I would present a recommendation and confirm the decision.

A strong answer shows that the TPM can respect leadership direction while still protecting the team from vague execution.
