---
id: tpm-privacy-by-design
track: TPM
category: Security & Compliance
level: Intermediate
question: How would you apply privacy by design to a new product feature?
sources:
  - label: NIST: Privacy Framework
    url: https://www.nist.gov/privacy-framework
  - label: ICO: Data protection by design and by default
    url: https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/
---

## Learn it

Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.

The beginner mistake is thinking privacy is only a legal review at the end. By then, the team may have already collected too much data, exposed it to too many people, stored it too long, or made deletion hard.

For a TPM, privacy by design is a product-thinking discipline:

```txt
What data do we need?
Why do we need it?
Who can see it?
How long do we keep it?
How does the user understand and control it?
What could go wrong for the person if this data is misused?
```

Privacy is not only about avoiding fines. It is about user trust and reducing harm.

## Walkthrough

Imagine a remittance product wants to add "recipient suggestions." When a user sends money, the app suggests previous recipients and maybe contacts from the user's phone.

A weak approach says:

```txt
Ask for contact access and upload contacts so suggestions work.
```

A privacy-by-design approach asks:

```txt
Is contact access actually required?
Can suggestions work from recipients the user already paid?
Can contact matching happen on device?
Can the user choose not to enable contacts?
What exactly is uploaded?
Are contacts stored?
Can the user delete imported data?
Do recipients know their data is being used?
```

The product may decide that saved recipients are enough for the first version. That is a privacy-friendly product decision, not a legal afterthought.

## Make it practical

Here is a privacy review artifact:

```txt
Feature:
Recipient suggestions

User value:
Help repeat senders find trusted recipients faster.

Personal data involved:
- Sender account ID
- Recipient name
- Recipient country
- Recipient payout method
- Recent transfer history
- Optional phone contacts, if enabled later

Data minimization:
Use saved and recent recipients first. Do not request phone contacts in v1.

Access:
User sees own recipients. Support sees masked details. Admin access is audited.

Retention:
Recipient records follow account retention policy. Deleted recipients no longer appear in suggestions.

User control:
User can remove a recipient from suggestions.

Risk:
Wrong suggestion could expose recipient name on a shared device.

Mitigation:
Show masked identifiers and require confirmation before transfer.
```

The TPM should also ask whether the feature changes the privacy notice, consent flow, deletion process, or support scripts.

## Common mistakes

A common mistake is collecting data because it might be useful later. That creates privacy and security burden without clear user value.

Another mistake is hiding privacy choices in vague copy. Users should understand what is happening in plain language.

A third mistake is forgetting lifecycle. Privacy includes collection, use, access, sharing, retention, deletion, and auditability.

## Check yourself

- Why is privacy by design different from legal review at the end?
- What does data minimization mean?
- Why should retention be defined before launch?
- What user controls might privacy-sensitive features need?
- How can a product feature create privacy harm even if it is useful?

## Interview version

I would apply privacy by design by identifying the data involved, the purpose for each data element, minimization options, access controls, retention, deletion, user consent or control, auditability, and potential user harms.

A strong TPM answer shows that privacy is part of product quality. The feature should collect the least data needed, explain itself clearly, and protect users across the full data lifecycle.
