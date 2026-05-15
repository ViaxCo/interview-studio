---
id: tpm-suspicious-recipient-network-analysis
track: TPM
category: Fraud & Risk
level: Advanced
question: How would you design product requirements for suspicious recipient network analysis?
sources:
  - label: FFIEC: Suspicious Activity Reporting
    url: https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

Suspicious recipient network analysis looks for risky patterns across connected senders, recipients, accounts, devices, bank accounts, phone numbers, or addresses.

The beginner mistake is looking only at one transaction at a time. Financial crime and fraud can appear as a network: many senders to one recipient, one device creating many accounts, or repeated small transfers through related identities.

The mental model:

```txt
Node:
An entity such as customer, recipient, device, bank account, or phone number.

Edge:
A relationship such as transfer, login, shared device, or shared bank account.

Pattern:
A structure that may indicate risk.
```

The TPM should make network signals understandable and reviewable.

## Walkthrough

Imagine ten new customers send money to the same recipient within two days. Each transfer alone looks small. Together, the pattern may be suspicious.

The product should show:

```txt
Recipient received 10 transfers from 10 new senders
All senders created accounts in the last 48 hours
Four share the same device fingerprint
Two attempted chargebacks before
```

Now the analyst sees the network, not isolated dots.

## Make it practical

Here is a network-analysis artifact:

```txt
Use case:
Recipient risk review

Entities:
- Sender
- Recipient
- Device
- Bank account
- Phone number
- Address
- IP range

Signals:
- Many-to-one transfer pattern
- Shared device across accounts
- Repeated failed verification
- High-risk geography
- Prior confirmed fraud link

Reviewer view:
- Network summary
- Timeline
- Top risk links
- Source records
- Confidence or rule source
- Allowed actions

Guardrails:
- Human review before severe action
- Avoid guilt by weak association alone
- Log reason for decision
```

Network analysis should support investigation, not automatically punish every connection.

## Common mistakes

A common mistake is treating any shared attribute as proof of fraud. Families, businesses, and shared devices can create innocent connections.

Another mistake is hiding the source records. Analysts need to verify why entities are linked.

A third mistake is not measuring false positives by community or user segment, which can reveal unfair impact.

## Check yourself

- Why can single-transaction review miss fraud?
- What are nodes and edges?
- Which network patterns are risky?
- Why should weak associations not automatically block users?
- What should the reviewer see?

## Interview version

I would design network analysis around entities, relationships, risky patterns, source records, reviewer views, confidence, allowed actions, human review, audit logs, and false-positive monitoring. The system should reveal suspicious networks while avoiding automatic harm from weak associations.

A strong answer balances pattern detection with fairness and evidence.
