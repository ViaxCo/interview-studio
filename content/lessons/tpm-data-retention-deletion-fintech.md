---
id: tpm-data-retention-deletion-fintech
track: TPM
category: Security & Compliance
level: Advanced
question: How would you design data retention and deletion for a fintech product?
sources:
  - label: NIST Privacy Framework
    url: https://www.nist.gov/privacy-framework
  - label: ICO: Data protection by design
    url: https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/
---

## Learn it

Data retention is deciding how long the product keeps data. Deletion is removing or anonymizing data when it is no longer needed or when a valid request applies.

The beginner mistake is saying "delete everything when the user asks." Fintech products often have legal, fraud, tax, dispute, audit, and compliance reasons to retain some records. The product needs clear data categories, retention rules, deletion behavior, and user communication.

The mental model:

```txt
Keep:
Data required for product, legal, risk, or audit purpose.

Delete:
Data no longer needed and eligible for deletion.

Restrict:
Data retained but no longer used for normal product activity.
```

The TPM should make retention explicit by data type.

## Walkthrough

Imagine a user closes their account and requests deletion.

Some data may be deleted quickly:

```txt
Marketing preferences
Unused device nicknames
Optional profile photo
```

Some records may need retention:

```txt
Transaction history
Dispute records
Compliance review records
Tax or statement records
Fraud investigation evidence
```

The product should explain what can be deleted and what must be retained.

## Make it practical

Here is a retention artifact:

```txt
Data category:
Customer identity document

Purpose:
Identity verification and compliance evidence

Retention rule:
Retain while account is active and for approved period after closure

Deletion behavior:
Delete or archive when retention expires

Access:
Restricted to verification, compliance, and audit roles

User communication:
Explain that some financial records may be retained for legal and security reasons

System needs:
- Data inventory
- Retention clock
- Deletion job
- Legal hold flag
- Deletion audit record
```

Retention design should be boring, explicit, and enforceable.

## Common mistakes

A common mistake is not having a data inventory. If the team does not know where data lives, it cannot reliably delete it.

Another mistake is deleting records needed for disputes or regulatory review.

A third mistake is retaining everything forever. That increases privacy, security, and breach impact.

## Check yourself

- Why is "delete everything" often wrong in fintech?
- What data categories might need retention?
- What is a legal hold?
- Why does deletion need an audit record?
- How would you explain partial deletion to a user?

## Interview version

I would design retention and deletion with a data inventory, purpose by category, retention periods, deletion eligibility, legal holds, restricted access, deletion jobs, audit records, and clear user communication. Some data can be deleted, some must be retained, and some should be restricted.

A strong answer balances privacy rights with financial recordkeeping and risk obligations.
