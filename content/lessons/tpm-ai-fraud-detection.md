---
id: tpm-ai-fraud-detection
track: TPM
category: AI & Risk
level: Intermediate
question: How would you design an AI-assisted fraud detection product?
sources:
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
  - label: Stripe Docs: Fraud prevention rules
    url: https://docs.stripe.com/radar/rules
---

## Learn it

AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.

The beginner mistake is thinking the model is the product. The product is the full decision system: signals, model score, rules, human review, user action, appeals, monitoring, and feedback.

Fraud systems have two painful error types:

```txt
False negative:
Bad activity is allowed.

False positive:
A legitimate user is blocked, delayed, or reviewed.
```

The TPM must care about both. A fraud model that blocks everyone may reduce fraud but destroy the product.

## Walkthrough

Imagine a payment app wants AI to detect suspicious transfers.

A weak plan says:

```txt
Use a fraud model to block risky transfers.
```

A strong plan defines decisions:

```txt
Low risk:
Allow automatically.

Medium risk:
Step-up verification or manual review.

High risk:
Block or hold pending review.

Unknown:
Use conservative limits and gather more evidence.
```

The model score should not be the only input. Rules, known fraud patterns, sanctions/compliance checks, user history, and operational capacity all matter.

## Make it practical

Here is an AI fraud product artifact:

```txt
Goal:
Reduce fraud loss without creating unacceptable false positives.

Inputs:
- Transaction amount
- Sender history
- Recipient history
- Device and IP signals
- Velocity
- Corridor risk
- Failed verification attempts
- Chargeback history

Decision outputs:
- Allow
- Step-up verification
- Manual review
- Temporary hold
- Block

Human review:
- Show top risk signals
- Show similar prior activity
- Let analyst record decision reason
- Feed confirmed outcomes back into evaluation

Guardrail metrics:
- Fraud loss
- False-positive rate
- Manual review backlog
- Average review time
- Legitimate users blocked
- Support contacts
```

The TPM also needs an evaluation plan:

```txt
Before launch:
Backtest on historical transactions.

During beta:
Run in shadow mode, compare model recommendation to current process.

After launch:
Monitor drift, false positives, fraud loss, and analyst overrides.
```

## Common mistakes

A common mistake is optimizing only fraud loss. If false positives explode, the product harms good users.

Another mistake is launching without human review tooling. Fraud teams need explanations, queues, and decision recording.

A third mistake is not monitoring model drift. Fraud patterns change as attackers adapt.

## Check yourself

- Why is the model not the whole product?
- What is a false positive in fraud detection?
- What decisions can sit between allow and block?
- Why is shadow mode useful?
- What should human reviewers see?

## Interview version

I would design AI fraud detection as a decision system: risk signals, model scoring, rules, human review, user actions, feedback loops, monitoring, and guardrails. I would backtest, use shadow mode, launch gradually, and track fraud loss, false positives, review backlog, drift, and customer harm.

A strong answer balances risk reduction with legitimate-user experience.
