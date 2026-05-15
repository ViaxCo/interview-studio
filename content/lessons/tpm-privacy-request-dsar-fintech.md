---
id: tpm-privacy-request-dsar-fintech
track: TPM
category: Security & Compliance
level: Intermediate
question: How would you design a privacy data request workflow for fintech users?
sources:
  - label: NIST Privacy Framework
    url: https://www.nist.gov/privacy-framework
  - label: ICO: Right of access
    url: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-of-access/
---

## Learn it

A privacy data request workflow lets users ask to access, download, correct, or delete personal data, depending on what rights apply.

The beginner mistake is treating it like a support inbox. Privacy requests need identity verification, scope, deadlines, exclusions, secure delivery, and records. In fintech, the workflow must avoid exposing someone else's financial data while still giving the requester meaningful access.

The mental model:

```txt
Request:
What is the user asking for?

Verify:
Can we confirm the requester is allowed to receive it?

Fulfill:
Provide, correct, delete, restrict, or explain limits.
```

The TPM should design a workflow that is safe for both privacy and financial security.

## Walkthrough

Imagine a user asks for all data connected to their account.

The system may need to gather:

```txt
Profile data
Transaction history
Device history
Support tickets
Consent records
Marketing preferences
```

But some data may need review or redaction:

```txt
Internal fraud investigation notes
Another person's details in a joint transaction
Security signals that could expose controls
```

This is why privacy fulfillment needs policy and review.

## Make it practical

Here is a privacy request artifact:

```txt
Request types:
- Access data
- Download transactions
- Correct profile data
- Delete eligible data
- Restrict marketing use

Workflow states:
- Received
- Identity verification required
- In review
- Fulfilled
- Partially fulfilled
- Denied with reason
- Closed

System requirements:
- Request ID
- Verified requester
- Scope selected
- Deadline
- Data source checklist
- Redaction review
- Secure delivery
- Fulfillment audit log
```

The product should make common requests self-serve when safe and route sensitive requests to review.

## Common mistakes

A common mistake is sending data before verifying identity strongly enough. That creates privacy risk.

Another mistake is forgetting redaction. Financial products often contain data about recipients, merchants, agents, and other users.

A third mistake is having no source checklist. Missing one database can make fulfillment incomplete.

## Check yourself

- Why is a privacy request more than a support ticket?
- What should be verified before sending data?
- What data may need redaction?
- What workflow states are useful?
- How would you prove the request was fulfilled?

## Interview version

I would design privacy requests with request type, identity verification, scope, deadlines, data-source checklist, redaction review, secure delivery, fulfillment states, partial-denial reasons, and audit logs. The workflow should protect privacy without exposing sensitive financial or security data.

A strong answer shows that privacy access is a controlled fulfillment workflow.
