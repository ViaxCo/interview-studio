---
id: tpm-prioritization
track: TPM
category: Product Strategy
level: Intermediate
question: How do you prioritize a roadmap when engineering capacity is limited?
sources:
  - label: Intercom: RICE prioritization
    url: https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
  - label: ProductPlan: Prioritizing in ProductPlan
    url: https://support.productplan.com/prioritizing-in-productplan-1
---

## Learn it

Prioritization is deciding what gets built now, what waits, and what does not get built. It sounds simple until every option is important to someone.

Engineering capacity is always limited. A team may have ten valuable ideas and only enough people to build three. A Technical Product Manager has to help the organization make that tradeoff clearly. The job is not to make everyone happy. The job is to choose the work that best serves the current product goal while making the cost of that choice visible.

Good prioritization is not just a ranking exercise. It requires a clear goal, evidence, effort estimates, risk awareness, dependency mapping, and stakeholder alignment. If the goal is conversion, the best priority may be different from a quarter focused on compliance, reliability, cost reduction, or partner launch commitments.

## Walkthrough

Suppose a fintech team has limited engineering capacity and four requests:

1. Improve onboarding conversion.
2. Add a new payout partner.
3. Fix a reconciliation process that causes manual operations work.
4. Build a dashboard requested by sales.

You cannot compare these fairly until you know the strategic goal and constraints. If the company must launch a new corridor by a signed partner deadline, the payout partner may matter most. If operations is spending hours every day fixing reconciliation issues, the reconciliation work may unlock scale. If onboarding drop-off is blocking growth, conversion work may be the best bet. If the sales dashboard closes a major enterprise deal, it may become urgent.

A framework like RICE helps structure the conversation. Reach asks how many users or events the work affects. Impact asks how much it changes the outcome. Confidence asks how much evidence supports the estimate. Effort asks how much team time it will take. The score is useful because it forces clearer thinking.

But the score is not the decision by itself. Dependencies, deadlines, regulatory obligations, risk, customer commitments, and platform health can override a simple score.

## Make it practical

I would start by naming the decision goal. Are we optimizing for revenue, activation, risk reduction, reliability, compliance, cost, or delivery of a committed launch? Without that, prioritization becomes a political argument.

Then I would collect the candidate work and describe each item in comparable language: user affected, business value, risk reduced, evidence, dependencies, effort, and cost of delay.

Next, I would use a lightweight scoring model like RICE or a similar method to expose assumptions. The value is not the math alone. The value is forcing the team to ask: how many customers does this affect, how big is the impact, how sure are we, and how expensive is the work?

After that, I would handle non-score factors explicitly. Regulatory deadlines, contractual commitments, major incidents, dependencies, and severe technical debt may need special treatment. I would also reserve some capacity for urgent defects and operational risk so the roadmap does not pretend nothing unexpected will happen.

Finally, I would communicate the tradeoff. A good roadmap decision should say what we are doing, why it matters now, what we are not doing, what risk we are accepting, and when we will revisit the decision.

Here is what that can look like as an artifact:

```txt
Quarter goal:
Increase successful repeat transfers while keeping operations workload stable.

Capacity:
Two product engineers, one backend engineer, one shared designer.

Candidates:

1. Saved recipient improvements
Reach: 18,000 repeat senders per month
Impact: high
Confidence: medium
Effort: medium
Risk: wrong-recipient mistakes if confirmation is weak

2. New payout partner
Reach: one new corridor
Impact: high for expansion
Confidence: low until partner testing is done
Effort: high
Risk: partner reliability and reconciliation gaps

3. Reconciliation automation
Reach: operations team and all failed/pending transfers
Impact: medium for users, high for operations
Confidence: high
Effort: medium
Risk: low if shipped behind internal tooling

4. Sales dashboard
Reach: two enterprise prospects
Impact: possible revenue
Confidence: low
Effort: low to medium
Risk: could become a custom-reporting trap
```

A possible decision:

```txt
Do now:
- Reconciliation automation
- Saved recipient improvements

Why:
They support the quarter goal and reduce both user friction and operational load.

Do discovery only:
- New payout partner

Why:
It may be important, but partner risk and effort are still too uncertain for a full build commitment.

Defer:
- Sales dashboard

Why:
The evidence is narrow. Offer a manual report for the two prospects and revisit if demand repeats.

Risk accepted:
Corridor expansion may move slower this quarter.

Revisit trigger:
If partner testing proves simple or the enterprise deal becomes committed revenue, re-run the decision.
```

Notice what makes this useful. The TPM is not saying "my score says no." They are explaining the company goal, the evidence, the risk, the deferred work, and the trigger that could change the answer.

## Common mistakes

A common mistake is using a framework to avoid judgment. RICE can help, but it cannot understand strategy by itself. A high score does not automatically beat a compliance deadline or a critical dependency.

Another mistake is prioritizing whoever is loudest. Escalations should be heard, but they still need to be translated into impact, urgency, evidence, and cost.

A third mistake is ignoring technical and operational work because it is less visible. If technical debt slows every roadmap item or operations teams are drowning in manual work, that is product impact.

## Check yourself

- What goal is the roadmap optimizing for this quarter?
- What evidence supports the impact estimate?
- What is the cost of delay if this waits?
- Which dependencies or deadlines override simple scoring?
- How would you explain the deferred work to stakeholders?

## Interview version

I would prioritize by first clarifying the strategic goal and constraints, then comparing candidate work by reach, impact, confidence, effort, risk, dependencies, deadlines, and cost of delay. I might use a framework like RICE to make assumptions visible, but I would not let the score replace judgment.

A strong TPM answer explains the tradeoff clearly: what we are doing now, why it matters, what we are deferring, what risk we are accepting, and when the decision will be reviewed again.
