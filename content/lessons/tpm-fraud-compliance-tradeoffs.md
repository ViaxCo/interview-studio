---
id: tpm-fraud-compliance-tradeoffs
track: TPM
category: Risk & Compliance
level: Intermediate
question: How would you balance fraud prevention, compliance, and user experience?
sources:
  - label: Stripe Docs: Fraud prevention rules
    url: https://docs.stripe.com/radar/rules
  - label: Federal Reserve: Risk-based customer due diligence
    url: https://www.federalreserve.gov/supervisionreg/srletters/SR2205.htm
---

## Learn it

Fraud prevention, compliance, and user experience often pull against each other.

Fraud teams want to block bad actors. Compliance teams want required checks and audit evidence. Product teams want legitimate users to complete their jobs without unnecessary friction. The hard part is that all three goals are valid.

The beginner mistake is treating this as a simple slider:

```txt
More checks = safer.
Fewer checks = better UX.
```

Reality is more nuanced. Bad checks can block good users and still miss risky ones. Good controls use risk signals to apply the right amount of friction to the right users at the right time.

The mental model is:

```txt
Do not ask every user for everything.
Do not let every user do everything.
Use risk to decide what is allowed, what is reviewed, and what needs more proof.
```

## Walkthrough

Imagine a remittance app sees rising fraud on new accounts.

A blunt solution is:

```txt
Require every new user to upload ID, proof of address, selfie, source of funds, and manual review before sending any amount.
```

That may reduce some fraud, but it will also hurt many legitimate users. It may overwhelm operations and increase abandonment.

A better solution is risk-based:

```txt
Low-risk user:
- Can create account.
- Can verify basic identity.
- Gets low initial limits.

Medium-risk user:
- Needs document verification before sending.
- May have lower transaction limits.
- May trigger extra review for unusual behavior.

High-risk user:
- Cannot send until manual review.
- May need extra documents.
- May be blocked if risk is unacceptable.
```

The product goal is not "zero friction." The goal is appropriate friction.

## Make it practical

I would define the decision system with compliance, fraud, operations, and engineering.

```txt
Risk decision table

Signal:
New device + high amount + risky corridor

Decision:
Step-up verification before payment submission

User experience:
Explain that extra verification is needed to protect the account and transfer.

Operations:
Route to manual review if automatic checks fail.

Metric:
Fraud rate, false-positive rate, completion rate, review time, support contacts.
```

The TPM needs to track both protection and harm.

```txt
Protection metrics:
- Fraud loss
- Dispute rate
- Suspicious activity flags
- Confirmed bad accounts blocked

User harm metrics:
- False positives
- Legitimate users blocked
- Verification drop-off
- Manual review wait time
- Support complaints
```

If fraud decreases but false positives explode, the product may be safer on paper but worse in practice.

## Common mistakes

A common mistake is optimizing only for conversion. In regulated or fraud-heavy products, unsafe growth can create major losses.

Another mistake is optimizing only for blocking. Blocking many good users is also product harm.

A third mistake is hiding decisions from users. You may not be able to reveal fraud logic, but users still need clear, safe explanations and next steps.

## Check yourself

- Why is "more checks" not always the best answer?
- What is a false positive in fraud prevention?
- Why should risk controls be tiered?
- What metrics show whether controls are too strict?
- How can product copy help without exposing fraud logic?

## Interview version

I would balance fraud, compliance, and UX by using a risk-based model. Low-risk users get lower friction, higher-risk users get step-up checks or review, and unacceptable-risk users are blocked. I would measure fraud loss, dispute rate, false positives, conversion, review time, and support contacts.

A strong TPM answer shows that safety and UX are not enemies. The job is to apply the right control at the right moment and measure both protection and user harm.
