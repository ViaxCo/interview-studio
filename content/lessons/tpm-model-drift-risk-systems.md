---
id: tpm-model-drift-risk-systems
track: TPM
category: AI & Risk
level: Intermediate
question: How would you monitor model drift in an AI risk system?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Federal Reserve: SR 11-7 model risk management
    url: https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf
---

## Learn it

Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.

The beginner mistake is thinking a model that performed well at launch will keep performing well. Risk systems need ongoing monitoring because the data and adversaries do not stay still.

There are two useful drift ideas:

```txt
Data drift:
Inputs change. Example: more transactions now come from a new country.

Performance drift:
Outcomes get worse. Example: false positives rise or fraud misses increase.
```

## Walkthrough

Imagine an AI fraud model that worked well for US card payments. The company launches a new remittance corridor. Transaction sizes, names, devices, funding sources, and fraud behavior now look different.

If the model is not monitored, it may:

```txt
Block too many legitimate users.
Miss new fraud patterns.
Create analyst backlog.
Treat normal corridor behavior as suspicious.
Overfit to old fraud signals.
```

The TPM should plan monitoring before expansion.

## Make it practical

Here is a drift monitoring artifact:

```txt
System:
AI fraud risk model

Input drift metrics:
- Transaction amount distribution
- Corridor mix
- Device mix
- New recipient rate
- User tenure distribution

Outcome metrics:
- Confirmed fraud rate
- False-positive rate
- Manual review rate
- Analyst override rate
- Appeal success rate
- Fraud loss after approval

Segments:
- Corridor
- Funding method
- New versus returning users
- Business versus consumer
- High-value transfers

Review cadence:
- Daily during new corridor launch
- Weekly for normal operations
- Immediate review after fraud spike or policy change

Actions:
- Adjust thresholds
- Add rules
- Retrain model
- Narrow rollout
- Increase manual review
- Pause automated decisions
```

The TPM should also define ownership. Data science may monitor model metrics, but product owns whether the current behavior is acceptable for users and the business.

## Common mistakes

A common mistake is monitoring only aggregate performance. Drift often appears in one segment first.

Another mistake is waiting for fraud losses before acting. Leading indicators like analyst overrides and false positives can warn earlier.

A third mistake is not documenting model changes. If performance changes after retraining, the team needs traceability.

## Check yourself

- What is model drift?
- What is the difference between data drift and performance drift?
- Why should drift be monitored by segment?
- What early warning metrics matter?
- What actions can the team take when drift appears?

## Interview version

I would monitor model drift by tracking input distributions, outcome metrics, false positives, fraud misses, overrides, appeals, and segment-level performance. I would define review cadence, alert thresholds, ownership, and actions like threshold changes, retraining, added rules, or pausing automation.

A strong TPM answer treats AI risk systems as living products that need continuous governance.
