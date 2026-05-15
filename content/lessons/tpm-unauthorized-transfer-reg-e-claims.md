---
id: tpm-unauthorized-transfer-reg-e-claims
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you handle unauthorized transfer claims in a fintech product?
sources:
  - label: CFPB: Unauthorized transaction guidance
    url: https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
  - label: CFPB: Electronic Fund Transfers FAQs
    url: https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/electronic-fund-transfers/electronic-fund-transfers-faqs/
---

## Learn it

An unauthorized transfer claim happens when a customer says money moved without their permission.

The beginner mistake is treating it like an ordinary support ticket. In consumer fintech, unauthorized electronic fund transfers can trigger specific investigation, timing, communication, provisional credit, and recordkeeping obligations. The exact obligations depend on product, jurisdiction, partner bank, account type, and facts, so the TPM must work with legal and compliance.

The mental model:

```txt
Customer report:
The user says the transfer was not authorized.

Investigation:
The company reviews evidence and timelines.

Outcome:
The company corrects the error, denies with explanation, or continues under required rules.
```

This is both a customer-trust workflow and a regulated operations workflow.

## Walkthrough

Imagine a user says a $900 debit card transaction was not theirs.

A weak product flow says:

```txt
Submit a ticket. We will get back to you.
```

A stronger flow collects structured information:

```txt
Which transaction are you reporting?
Did you lose your card or phone?
Do you recognize the merchant?
Did anyone else have access?
When did you notice it?
Can we contact you for more information?
```

The product should also show status so the user is not left guessing.

## Make it practical

Here is an unauthorized-transfer workflow artifact:

```txt
Claim intake:
- Customer selects transaction
- Customer states why it is unauthorized
- Product captures report time
- Product shows next steps and expected timing

Investigation view:
- Transaction details
- Device and login history
- Card-present or card-not-present details
- Prior customer activity with merchant
- Support contact history
- Linked fraud alerts

Customer states:
- Received
- Under review
- Temporary credit issued if applicable
- More information needed
- Resolved in customer's favor
- Denied with explanation

Controls:
- Freeze card or account if needed
- Block merchant or recipient if needed
- Escalate suspected fraud pattern
- Preserve evidence
```

The user experience should be humane, but the workflow must be precise.

## Common mistakes

A common mistake is asking the customer to explain everything in free text. Structured intake makes investigation faster and more consistent.

Another mistake is giving a denial without useful reasoning or access to next steps.

A third mistake is failing to separate customer-facing status from internal investigation details. Users need clarity, but not sensitive fraud logic.

## Check yourself

- Why is an unauthorized transfer claim more than a normal support ticket?
- What information should claim intake collect?
- What should the user see while the investigation is active?
- What internal evidence might an investigator review?
- Why should legal and compliance be involved in requirements?

## Interview version

I would handle unauthorized transfer claims with structured intake, transaction selection, report timestamping, investigation workflow, customer status states, evidence review, required communications, provisional credit handling where applicable, and audit records. I would partner with legal, compliance, operations, support, and the sponsor bank because the workflow may be regulated.

A strong answer shows that consumer harm, regulatory timing, and operational evidence all matter.
