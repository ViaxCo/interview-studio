---
id: tpm-ai-knowledge-base-grounding
track: TPM
category: AI Product
level: Intermediate
question: How would you keep an AI assistant grounded in an approved knowledge base?
sources:
  - label: Azure AI Search for RAG
    url: https://azure.microsoft.com/en-ca/products/ai-services/ai-search/
  - label: OWASP Top 10 for LLM Applications
    url: https://owasp.org/www-project-top-10-for-large-language-model-applications/
---

## Learn it

Grounding means the AI uses approved sources instead of inventing answers from memory.

The beginner mistake is thinking retrieval alone solves hallucination. Retrieval helps, but the product still needs source quality, freshness, permission checks, refusal behavior, citations, and feedback when the knowledge base is wrong or missing.

The mental model:

```txt
Knowledge base:
The approved material the assistant can use.

Retrieval:
The system finds relevant material.

Grounded answer:
The assistant answers from retrieved material and admits when it cannot.
```

In fintech, grounding matters because wrong answers can affect money, disputes, credit, fees, and account access.

## Walkthrough

Imagine a customer asks:

```txt
Can I reverse a transfer after it is paid out?
```

The assistant should retrieve the approved transfer policy. If the policy says paid-out transfers cannot usually be reversed, the assistant should say that and explain the support path.

It should not invent a special exception unless the policy source says so.

## Make it practical

Here is a grounding artifact:

```txt
AI feature:
Fintech support assistant

Source rules:
- Use approved help-center articles
- Use current policy versions only
- Respect user permissions
- Do not use internal-only fraud notes in customer answers

Answer rules:
- Cite source article
- Say when source is missing
- Escalate regulated issues
- Refuse requests for hidden risk rules
- Avoid unsupported promises

Knowledge operations:
- Source owner per article
- Expiry review date
- Policy change notification
- Feedback button for wrong answer
- Eval cases for stale policy
```

Grounding is partly technical and partly content governance.

## Common mistakes

A common mistake is indexing outdated or draft policies. The AI can sound confident while using obsolete rules.

Another mistake is ignoring permissions. Internal investigation notes should not become customer-visible answers.

A third mistake is not designing "I do not know." A grounded assistant must know when the source is insufficient.

## Check yourself

- Why does retrieval not automatically eliminate hallucination?
- What makes a source approved?
- Why do permissions matter in grounding?
- What should the assistant do when no source answers the question?
- How would you keep the knowledge base fresh?

## Interview version

I would ground the assistant with approved, versioned, permission-aware knowledge sources, retrieval quality checks, citations, refusal behavior, missing-source escalation, feedback loops, article ownership, freshness review, and evals for stale or unsupported answers.

A strong answer shows that grounding is product governance plus retrieval, not just vector search.
