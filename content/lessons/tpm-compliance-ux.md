---
id: tpm-compliance-ux
track: TPM
category: Compliance & Risk
level: Intermediate
question: How would you design a compliant onboarding flow without hurting conversion too much?
sources:
  - label: Federal Reserve: Risk-based customer due diligence
    url: https://www.federalreserve.gov/supervisionreg/srletters/SR2205.htm
  - label: Stripe Docs: Identity
    url: https://docs.stripe.com/identity
---

## Learn it

Compliance and conversion often feel like enemies, but a strong Technical Product Manager does not treat it that way. The real job is to help legitimate users complete the journey while preventing legal, fraud, security, and operational risk.

For onboarding, compliance may require collecting identity information, verifying documents, screening against watchlists, understanding user risk, or applying extra checks for certain countries, products, limits, or customer types.

The beginner mistake is to ask, "How do we make KYC shorter?" The better question is, "What risk are we trying to control, and where can we reduce friction without weakening the control?"

That is why a risk-based approach matters. Not every user or action has the same risk. A user signing up to browse a product may not need the same checks as a user moving a large amount of money. A low-risk domestic flow may not need the same review as a high-risk cross-border flow.

## Walkthrough

Imagine a remittance app. A new customer wants to send money.

The product team wants fewer drop-offs. Compliance wants enough information to satisfy policy and regulation. Engineering wants clear rules. Support wants fewer confused users. Operations wants fewer manual reviews.

A weak TPM frames this as a fight: "Compliance is blocking growth."

A strong TPM frames it as a system:

1. What minimum information is required before the user can start?
2. What extra checks are required before the user can send money?
3. Which users need enhanced due diligence?
4. What happens when verification fails or is pending?
5. How do we explain the request without scaring the user?
6. What evidence do we need for audit and monitoring?

The product answer may be progressive onboarding. Ask for only the information needed at each stage. Let users understand value before asking for sensitive information, but do not allow risky actions before required checks are complete.

Here is a simple risk-tier model:

```txt
Low risk
- User can create an account and explore the product.
- Basic identity data is collected.
- No money movement or high-risk action is allowed yet.

Medium risk
- User wants to send money, raise a limit, or use a regulated product.
- Identity verification is required.
- Screening, document checks, and basic transaction monitoring apply.

High risk
- User has risk flags: high-risk country, suspicious behavior, unusual volume, sanctions match, business account, or manual-review trigger.
- Enhanced due diligence may be required.
- Extra documents, source-of-funds questions, manual review, or lower limits may apply.
```

This kind of model helps the TPM avoid two bad extremes: asking every user for everything immediately, or letting risky users complete sensitive actions too early.

## Make it practical

I would start by mapping the onboarding journey into decision points: account creation, profile completion, identity capture, document verification, risk screening, approval, rejection, manual review, and retry.

Then I would partner with compliance to separate hard requirements from policy choices. Hard requirements cannot be ignored. Policy choices can sometimes be designed with better thresholds, clearer messaging, or risk-based branching.

Next, I would define user states:

- Not started.
- Information needed.
- Verification in progress.
- Approved.
- More information required.
- Rejected.
- Temporarily blocked.

Each state needs product copy, support visibility, analytics, and clear allowed actions.

A beginner-friendly way to design the flow is to treat onboarding as a state machine:

```txt
Account created
-> Profile needed
-> Identity submitted
-> Verification pending
-> Approved
-> User can send

Identity submitted
-> More information needed
-> User resubmits
-> Verification pending

Identity submitted
-> Manual review
-> Approved, limited, or rejected

Verification failed
-> Retry allowed, support escalation, or blocked
```

Now the team can decide what the user sees, what support sees, what compliance sees, and what actions are allowed at each state.

For conversion, I would reduce unnecessary friction: prefill known data, explain why information is needed, use inline validation, preserve user input, support mobile camera capture, avoid asking for the same data twice, and route only risky cases to extra review.

For compliance, I would protect the control: audit trails, data retention rules, access controls, risk flags, vendor result logging, manual-review reasons, and monitoring for approval rate, rejection rate, retry rate, and false positives.

Example user-facing copy matters too. Bad copy says, "KYC failed." A real user does not know what to do with that. Better copy says:

```txt
We could not verify your identity from the document you uploaded.

Please upload a clear photo of an unexpired government ID. Make sure all four corners are visible and the name matches your profile.
```

That protects the compliance process while helping a legitimate user recover.

## Common mistakes

A common mistake is hiding compliance requirements until the end of the flow. Users feel tricked when they invest effort and then hit an unexplained wall.

Another mistake is asking every user for the maximum amount of information immediately. That may satisfy a checklist, but it can destroy trust and conversion.

A third mistake is treating vendor approval as the full product state. The product still needs to explain what happened, what the user can do next, what support can see, and how the business handles edge cases.

## Check yourself

- What is the difference between reducing friction and weakening a control?
- Why is a risk-based onboarding flow useful?
- What user states should a compliant onboarding flow include?
- Why do support and operations need visibility into verification status?
- Which metrics would you monitor after launch?

## Interview version

I would design the flow around risk-based compliance. First, I would clarify required controls with compliance, then map the user journey and decide which checks happen at which risk level or product action.

To protect conversion, I would use progressive onboarding, clear copy, prefill, inline validation, mobile-friendly capture, and only add extra friction when risk requires it. To protect compliance, I would define audit trails, decision states, retry handling, manual-review paths, access controls, and monitoring for drop-off, approval rate, false positives, and review backlog.
