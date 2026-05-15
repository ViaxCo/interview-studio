---
id: tpm-sanctions-screening-false-positives
track: TPM
category: Compliance & Risk
level: Intermediate
question: How would you design sanctions screening while managing false positives?
sources:
  - label: OFAC: Sanctions List Search FAQs
    url: https://ofac.treasury.gov/faqs/search
  - label: OFAC: False hit lists guidance
    url: https://ofac.treasury.gov/system/files/126/false_hit.pdf
---

## Learn it

Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.

The beginner mistake is thinking screening is a simple yes/no name match. Names are messy. People share names. Names can be transliterated. Addresses may be incomplete. Businesses may have beneficial owners. A match may be a true hit or a false positive.

The product challenge is serious:

```txt
If the system misses a true hit:
The company may violate sanctions obligations.

If the system blocks too many false positives:
Legitimate users are harmed, support gets flooded, and conversion suffers.
```

## Walkthrough

Imagine a user named "Mohammed Ali" signs up. The name may produce a potential match against a sanctions list, but that does not mean the user is sanctioned.

A weak product blocks the user with vague copy:

```txt
Your account is banned.
```

A stronger product creates a review workflow:

```txt
Potential match found
-> Account action limited
-> Compliance review opened
-> Additional identifiers compared
-> Cleared, blocked, or escalated
```

The system should compare more than name: date of birth, address, nationality, document ID, business ownership, and other identifiers where available and allowed.

## Make it practical

Here is a sanctions screening requirements artifact:

```txt
Screening moments:
- Account creation
- Recipient creation
- Business owner update
- Large transfer
- List update rescreening

Match data:
- Name
- Aliases
- Date of birth
- Country
- Address
- Document number
- Business registration
- Beneficial owner

Review outcomes:
- Cleared false positive
- True hit
- Need more information
- Escalate to compliance lead

User actions while pending:
- Allow account browsing
- Block money movement
- Prevent payout or transfer submission
- Show safe copy
```

Safe user copy:

```txt
We need to review your information before you can send money.

This usually takes one business day. We will contact you if we need more information.
```

Do not tell the user exactly which list or rule was triggered if that creates compliance or evasion risk.

## Common mistakes

A common mistake is auto-blocking every name match. That creates unnecessary user harm and operational noise.

Another mistake is permanently clearing a false positive without rescreening when lists or user details change.

A third mistake is exposing sensitive screening logic in customer copy or support macros.

## Check yourself

- Why is sanctions screening not just a name match?
- What is a false positive?
- When should users be rescreened?
- What actions might be blocked during review?
- Why must customer copy be careful?

## Interview version

I would design sanctions screening around screening events, match data, review workflow, user-state restrictions, false-positive handling, rescreening, audit logs, and safe customer communication.

A strong TPM answer balances compliance protection with legitimate-user harm and operational review quality.
