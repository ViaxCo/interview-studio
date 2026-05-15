---
id: tpm-open-banking-consent-data-access
track: TPM
category: Data & Schema Design
level: Advanced
question: How would you design an open banking consent and data access flow?
sources:
  - label: CFPB: Personal financial data rights
    url: https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/personal-financial-data-rights/
  - label: CFPB: Personal financial data rights guide
    url: https://files.consumerfinance.gov/f/documents/cfpb_personal-financial-data-rights-small-entity-compliance-guide_2024-12_pdf.pdf
---

## Learn it

Open banking lets consumers authorize access to their financial data so another product can provide a service, such as budgeting, underwriting, payments, or account aggregation.

The beginner mistake is thinking consent is just a checkbox. Good consent explains who gets access, what data they get, why they need it, how long access lasts, and how the user can revoke it.

The mental model:

```txt
User intent:
I want this service to use my financial data.

Permission:
This company may access specific data for a specific purpose.

Control:
The user can review, renew, or revoke access.
```

The TPM should design for trust, not just API connectivity.

## Walkthrough

Imagine a lending app asks to connect a bank account to verify cash flow.

A weak flow says:

```txt
Connect your bank to continue.
```

A stronger flow says:

```txt
We use transaction and balance data to assess affordability.
We do not need your bank password.
You can disconnect access later from settings.
```

That framing helps the user understand what is happening and reduces fear.

## Make it practical

Here is a consent artifact:

```txt
Use case:
Cash-flow underwriting

Data requested:
- Account identity
- Current balance
- Transaction history for last 12 months

Purpose:
Verify income stability and affordability

Consent screen must show:
- Data recipient
- Data categories
- Purpose
- Duration
- Revocation path
- Support contact

System requirements:
- Consent record ID
- Timestamp
- Data scopes
- Provider connection status
- Revocation event
- Access audit log
- Data deletion or retention policy
```

The product should make consent visible after onboarding, not bury it forever.

## Common mistakes

A common mistake is asking for more data than the product needs. Extra data increases privacy risk and user discomfort.

Another mistake is making revocation hard to find. If users can grant access easily, they should be able to manage it easily.

A third mistake is not separating connection failure from consent refusal. A user who wants to consent but hits a provider error needs a different path from a user who declines.

## Check yourself

- Why is consent more than a checkbox?
- What should the user know before granting access?
- What data should be stored about consent?
- Why does revocation need product design?
- How would you handle a bank connection failure?

## Interview version

I would design open banking consent around purpose, data minimization, clear scopes, duration, revocation, audit logs, connection status, and support paths. The user should understand what data is accessed, who receives it, why it is needed, and how to stop access.

A strong answer treats consent as an ongoing user-control system, not just an onboarding step.
