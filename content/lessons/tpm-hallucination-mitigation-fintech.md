---
id: tpm-hallucination-mitigation-fintech
track: TPM
category: AI & Customer Operations
level: Intermediate
question: How would you reduce hallucination risk in a fintech AI feature?
sources:
  - label: OpenAI Docs: Evaluation best practices
    url: https://platform.openai.com/docs/guides/evaluation-best-practices
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.

The beginner mistake is saying "make the model more accurate." That is not a product plan. The TPM needs to design the workflow so the AI has trusted sources, knows when to refuse, and cannot take risky actions based on invented information.

## Walkthrough

Imagine a user asks, "Will my transfer arrive today?"

A risky AI answer:

```txt
Yes, your transfer will arrive by 5 PM.
```

If the system does not have confirmed payout status, that answer may be invented.

A safer answer:

```txt
Your transfer is currently pending with our payout partner. We do not have a final arrival time yet. You do not need to send it again.
```

The difference is grounding. The safe answer uses known status and avoids unsupported promises.

## Make it practical

Here is a hallucination mitigation artifact:

```txt
Feature:
AI transfer status assistant

Allowed sources:
- Transfer status API
- Approved status explanations
- Help center articles
- Support-safe reason codes

Not allowed:
- Guessing delivery time
- Inventing fees
- Promising refunds
- Explaining fraud or sanctions logic
- Giving legal or compliance advice

Required behavior:
- Cite or attach source internally
- Say when information is unavailable
- Escalate uncertain cases
- Use structured status templates
- Refuse unsupported actions

Evaluation cases:
- Missing status
- Conflicting partner status
- Delayed payout
- Failed transfer
- Refund request
- Compliance review
- User asks for guarantee
```

The TPM should monitor severe hallucinations separately from minor wording issues. One invented refund promise can be worse than many awkward sentences.

## Common mistakes

A common mistake is relying only on prompt wording. Grounding, retrieval, templates, evals, and permissions matter more.

Another mistake is optimizing for confident tone. In regulated products, appropriate uncertainty is safer.

A third mistake is not defining prohibited claims. The AI needs clear boundaries.

## Check yourself

- Why are hallucinations more dangerous in fintech?
- What does grounding mean?
- Why should the AI say when information is unavailable?
- What claims should be prohibited?
- How would you evaluate hallucination risk?

## Interview version

I would reduce hallucination risk by grounding the AI in trusted sources, limiting allowed claims, using templates for high-risk answers, requiring refusal or escalation when data is missing, evaluating edge cases, and monitoring severe factual errors.

A strong TPM answer designs the product so the AI cannot safely rely on guessing.
