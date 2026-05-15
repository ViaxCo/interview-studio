---
id: tpm-ai-customer-communications-review
track: TPM
category: AI Product
level: Advanced
question: How would you use AI to draft customer communications in a regulated fintech product?
sources:
  - label: Microsoft Responsible AI principles
    url: https://www.microsoft.com/en-us/ai/principles-and-approach/
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

AI can help draft customer messages for support, disputes, account restrictions, collections, or fraud reviews.

The beginner mistake is letting AI write and send messages directly. In fintech, customer communications can create legal, compliance, trust, and financial harm if they are wrong, misleading, unfair, or too revealing.

The mental model:

```txt
Draft:
AI proposes wording.

Review:
Human or policy checks decide whether it is safe.

Send:
Approved message goes to the customer with audit trail.
```

The TPM should design AI drafting as controlled assistance, not free-form talking.

## Walkthrough

Imagine support needs to explain a transfer delay.

A bad AI response might invent a reason:

```txt
Your transfer is delayed because your recipient bank is under maintenance.
```

If that fact is not in the system, it is dangerous.

A safer AI draft says:

```txt
Your transfer is still being reviewed. We will update you when the review is complete. You do not need to resubmit the transfer.
```

The second message uses approved facts and avoids unsupported claims.

## Make it practical

Here is a communications AI artifact:

```txt
Use case:
Draft support replies for transfer delays

Allowed inputs:
- Approved case status
- Customer-visible reason category
- Support policy
- Product help-center article

Required checks:
- No legal promises
- No unsupported facts
- No hidden fraud-rule details
- Tone is clear and respectful
- Required disclosure included if applicable

Review paths:
- Low-risk FAQ response: automated policy check
- Account restriction: support approval
- Complaint or legal threat: escalation
- Collections or credit decision: compliance-approved template
```

The AI should choose from facts and approved policy, not improvise the company's position.

## Common mistakes

A common mistake is optimizing for "human-like" responses over accurate responses. In regulated products, boring and correct often beats charming and risky.

Another mistake is exposing sensitive internal reason codes. Fraud and compliance details can teach bad actors how to evade controls.

A third mistake is not keeping records of generated drafts, edits, approver, and final message.

## Check yourself

- Why is sending AI-written fintech messages risky?
- What facts should the AI be allowed to use?
- Which message types need human or compliance review?
- Why should some fraud details stay hidden?
- What should be logged for audit?

## Interview version

I would use AI for drafting, not uncontrolled sending. The system should ground drafts in approved customer-visible facts and policy, run checks for unsupported claims and sensitive details, route risky messages for review, and log the draft, edits, approver, and final message.

A strong answer treats communication as a regulated product surface, not just text generation.
