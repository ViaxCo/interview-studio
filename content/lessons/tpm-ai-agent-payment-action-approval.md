---
id: tpm-ai-agent-payment-action-approval
track: TPM
category: AI Product
level: Advanced
question: How would you design approval controls for an AI agent that can take payment actions?
sources:
  - label: OWASP Top 10 for LLM Applications
    url: https://owasp.org/www-project-top-10-for-large-language-model-applications/
  - label: NIST: AI Risk Management Framework
    url: https://www.nist.gov/itl/ai-risk-management-framework
---

## Learn it

An AI agent that can take payment actions is very different from a chatbot that only answers questions.

The beginner mistake is giving the agent tools before defining authority. If an agent can refund, cancel, release a hold, update bank details, or move money, the product needs explicit approval controls.

The mental model:

```txt
Read action:
Look up information.

Low-risk write action:
Create a draft or tag a case.

High-risk money action:
Change balance, payout, refund, limit, or account access.
```

The higher the risk, the stronger the approval should be.

## Walkthrough

Imagine a support agent asks the AI:

```txt
Refund this customer's failed transfer.
```

The AI should not blindly call the refund tool. It should check eligibility, amount, transaction status, duplicate refund risk, user permission, and policy.

For high-risk cases, the agent should prepare:

```txt
Recommended action: refund $120
Reason: transfer failed and no payout occurred
Requires approval: support lead
```

Then a human approves before money moves.

## Make it practical

Here is an approval-control artifact:

```txt
AI tool:
Refund payment

Risk tier:
High

Pre-checks:
- User role can request refund
- Transaction is eligible
- No existing refund
- Amount matches original transaction
- Case reason selected
- Customer identity verified if required

Approval:
- Under $25: automated if all checks pass
- $25-$500: support lead approval
- Over $500: operations approval
- Suspicious case: fraud/compliance approval

Audit log:
- Prompt/request
- Tool arguments
- Eligibility result
- Approver
- Final action
- Timestamp
```

Approval controls should be policy-driven, not hidden inside prompt text.

## Common mistakes

A common mistake is relying on the prompt to prevent dangerous actions. Prompts help, but permissions and workflow controls must enforce limits.

Another mistake is treating all tools as equal. Reading account status and moving money have different risk.

A third mistake is not logging tool arguments. If something goes wrong, the team needs to know exactly what the agent tried to do.

## Check yourself

- Why are payment-action agents riskier than chat assistants?
- What is the difference between read and write tools?
- Which payment actions need human approval?
- Why are policy checks stronger than prompt instructions?
- What should the audit log capture?

## Interview version

I would design approval controls by tiering agent tools by risk, enforcing role permissions, checking eligibility before action, requiring human approval for high-risk money movement, blocking duplicate actions, and logging prompts, tool arguments, approvals, and final outcomes.

A strong answer treats AI agent authority as a product permission system.
