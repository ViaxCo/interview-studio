---
id: tpm-credit-line-change-adverse-action
track: TPM
category: Credit & Lending
level: Advanced
question: How would you design a credit line increase or decrease workflow?
sources:
  - label: CFPB: Regulation B notifications
    url: https://www.consumerfinance.gov/rules-policy/regulations/1002/9/
  - label: CFPB: Credit denial guidance
    url: https://www.consumerfinance.gov/ask-cfpb/my-credit-application-was-denied-because-of-my-credit-report-what-can-i-do-en-1253/
---

## Learn it

A credit line workflow decides whether a customer can borrow more, keep the same limit, or have their available credit reduced.

The beginner mistake is treating this like a normal settings change. Credit decisions can affect access to money, customer trust, risk exposure, and regulatory communication. If the product denies a requested increase or reduces a line, the team may need specific notices and reasons depending on the product and jurisdiction.

The mental model:

```txt
Request:
Customer asks for more credit, or the system reviews an existing limit.

Decision:
Approve, deny, counteroffer, decrease, or ask for more information.

Communication:
Tell the customer what happened, what it means, and what rights or next steps apply.
```

The TPM should not invent legal language. The TPM should make sure the product captures the decision reason and routes the right communication.

## Walkthrough

Imagine a customer requests an increase from $2,000 to $5,000.

The system reviews payment history, income, bureau data, utilization, fraud risk, and current affordability signals.

Possible outcomes:

```txt
Approved:
Limit increases to $5,000.

Counteroffer:
Limit increases to $3,000.

Denied:
Limit stays at $2,000 and customer receives required reason.

Pending:
Customer needs to provide updated income or identity information.
```

Those states are different. They need different messages, support views, metrics, and audit records.

## Make it practical

Here is a credit line workflow artifact:

```txt
Workflow:
Credit line increase request

Inputs:
- Current line
- Requested line
- Payment history
- Delinquency status
- Income or affordability data
- Bureau data if used
- Fraud and identity signals
- Existing exposure

Decision outcomes:
- Approve requested amount
- Approve lower amount
- Deny
- Request more information
- Manual review

Required product records:
- Decision timestamp
- Model/rule version
- Principal reason codes
- Data sources used
- Customer notice sent
- Support-visible summary
```

The product requirement is evidence and communication, not just changing a number.

## Common mistakes

A common mistake is storing only the final limit. Without reason codes and model version, the decision is hard to explain later.

Another mistake is using vague messages like "not eligible." Credit products often need clearer reasons and compliant notices.

A third mistake is ignoring support. Customers will ask why the decision happened, and support needs safe, approved explanations.

## Check yourself

- Why is a credit limit change more sensitive than a normal feature setting?
- What outcomes should the workflow support besides approve and deny?
- Why do reason codes matter?
- What should support see?
- Where should legal and compliance review the product?

## Interview version

I would design the workflow with clear decision states, required inputs, reason codes, model or rule versioning, manual review paths, customer notices, support summaries, and audit records. For adverse decisions, I would partner with legal and compliance so required disclosures and timing are handled correctly.

A strong answer shows that credit workflows are decision systems with customer communication and compliance requirements.
