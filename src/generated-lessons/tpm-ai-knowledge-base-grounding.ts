import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-knowledge-base-grounding",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you keep an AI assistant grounded in an approved knowledge base?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Grounding means the AI uses approved sources instead of inventing answers from memory.\n\nThe beginner mistake is thinking retrieval alone solves hallucination. Retrieval helps, but the product still needs source quality, freshness, permission checks, refusal behavior, citations, and feedback when the knowledge base is wrong or missing.\n\nThe mental model:\n\n```txt\nKnowledge base:\nThe approved material the assistant can use.\n\nRetrieval:\nThe system finds relevant material.\n\nGrounded answer:\nThe assistant answers from retrieved material and admits when it cannot.\n```\n\nIn fintech, grounding matters because wrong answers can affect money, disputes, credit, fees, and account access."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a customer asks:\n\n```txt\nCan I reverse a transfer after it is paid out?\n```\n\nThe assistant should retrieve the approved transfer policy. If the policy says paid-out transfers cannot usually be reversed, the assistant should say that and explain the support path.\n\nIt should not invent a special exception unless the policy source says so."
    },
    {
      "title": "Make it practical",
      "body": "Here is a grounding artifact:\n\n```txt\nAI feature:\nFintech support assistant\n\nSource rules:\n- Use approved help-center articles\n- Use current policy versions only\n- Respect user permissions\n- Do not use internal-only fraud notes in customer answers\n\nAnswer rules:\n- Cite source article\n- Say when source is missing\n- Escalate regulated issues\n- Refuse requests for hidden risk rules\n- Avoid unsupported promises\n\nKnowledge operations:\n- Source owner per article\n- Expiry review date\n- Policy change notification\n- Feedback button for wrong answer\n- Eval cases for stale policy\n```\n\nGrounding is partly technical and partly content governance."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is indexing outdated or draft policies. The AI can sound confident while using obsolete rules.\n\nAnother mistake is ignoring permissions. Internal investigation notes should not become customer-visible answers.\n\nA third mistake is not designing \"I do not know.\" A grounded assistant must know when the source is insufficient."
    }
  ],
  "answer": "Grounding means the AI uses approved sources instead of inventing answers from memory.",
  "reasoning": "Here is a grounding artifact:\n\n```txt\nAI feature:\nFintech support assistant\n\nSource rules:\n- Use approved help-center articles\n- Use current policy versions only\n- Respect user permissions\n- Do not use internal-only fraud notes in customer answers\n\nAnswer rules:\n- Cite source article\n- Say when source is missing\n- Escalate regulated issues\n- Refuse requests for hidden risk rules\n- Avoid unsupported promises\n\nKnowledge operations:\n- Source owner per article\n- Expiry review date\n- Policy change notification\n- Feedback button for wrong answer\n- Eval cases for stale policy\n```\n\nGrounding is partly technical and partly content governance.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why does retrieval not automatically eliminate hallucination?",
    "What makes a source approved?",
    "Why do permissions matter in grounding?",
    "What should the assistant do when no source answers the question?",
    "How would you keep the knowledge base fresh?"
  ],
  "interviewAnswer": "I would ground the assistant with approved, versioned, permission-aware knowledge sources, retrieval quality checks, citations, refusal behavior, missing-source escalation, feedback loops, article ownership, freshness review, and evals for stale or unsupported answers.\n\nA strong answer shows that grounding is product governance plus retrieval, not just vector search.",
  "sourceLinks": [
    {
      "label": "Azure AI Search for RAG",
      "url": "https://azure.microsoft.com/en-ca/products/ai-services/ai-search/"
    },
    {
      "label": "OWASP Top 10 for LLM Applications",
      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
    }
  ],
  "beginnerExplanation": "Grounding means the AI uses approved sources instead of inventing answers from memory.\n\nThe beginner mistake is thinking retrieval alone solves hallucination. Retrieval helps, but the product still needs source quality, freshness, permission checks, refusal behavior, citations, and feedback when the knowledge base is wrong or missing.\n\nThe mental model:\n\n```txt\nKnowledge base:\nThe approved material the assistant can use.\n\nRetrieval:\nThe system finds relevant material.\n\nGrounded answer:\nThe assistant answers from retrieved material and admits when it cannot.\n```\n\nIn fintech, grounding matters because wrong answers can affect money, disputes, credit, fees, and account access.",
  "example": "Imagine a customer asks:\n\n```txt\nCan I reverse a transfer after it is paid out?\n```\n\nThe assistant should retrieve the approved transfer policy. If the policy says paid-out transfers cannot usually be reversed, the assistant should say that and explain the support path.\n\nIt should not invent a special exception unless the policy source says so.",
  "commonMistakes": "A common mistake is indexing outdated or draft policies. The AI can sound confident while using obsolete rules.\n\nAnother mistake is ignoring permissions. Internal investigation notes should not become customer-visible answers.\n\nA third mistake is not designing \"I do not know.\" A grounded assistant must know when the source is insufficient."
};
