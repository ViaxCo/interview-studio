import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-llm-cost-latency-tradeoffs",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you manage cost and latency tradeoffs for an LLM-powered feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.\n\nThe beginner mistake is picking the strongest model for everything. That may work in a demo but fail in production if responses are too slow or too expensive.\n\nThe TPM needs to think in product tiers:\n\n```txt\nHigh-quality model:\nBetter reasoning, higher cost, often higher latency.\n\nSmaller or faster model:\nLower cost and faster, but may need narrower tasks or stricter guardrails.\n\nCached or reused output:\nFast and cheap when the answer does not need fresh reasoning.\n\nHuman review:\nSlower and more expensive, but safer for high-risk outcomes.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI support assistant in a remittance app.\n\nNot every task needs the same model:\n\n```txt\nClassify ticket category:\nFast, cheap model may be enough.\n\nSummarize long case history:\nMay need a model with larger context.\n\nDraft customer response for failed transfer:\nNeeds accuracy and policy grounding.\n\nRecommend fraud action:\nMay need human review regardless of model.\n```\n\nThe TPM should map task risk and complexity before choosing model strategy."
    },
    {
      "title": "Make it practical",
      "body": "Here is a cost-latency artifact:\n\n```txt\nFeature:\nAI support assistant\n\nTask 1:\nIntent classification\nTarget latency: under 500 ms\nQuality requirement: medium\nModel strategy: small model\n\nTask 2:\nCase summary\nTarget latency: under 3 seconds\nQuality requirement: high factual accuracy\nModel strategy: stronger model, structured output\n\nTask 3:\nCustomer reply draft\nTarget latency: under 5 seconds\nQuality requirement: high, policy grounded\nModel strategy: stronger model plus retrieval\n\nTask 4:\nCompliance-sensitive answer\nTarget latency: human workflow acceptable\nQuality requirement: very high\nModel strategy: draft-only with human approval\n```\n\nThen define controls:\n\n```txt\nOptimization levers:\n- Shorter prompts\n- Retrieval only when needed\n- Prompt caching\n- Smaller model for classification\n- Batch processing for non-urgent work\n- Output length limits\n- Reuse prior summaries\n- Escalate high-risk tasks instead of over-automating\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing cost before defining acceptable quality. Cheap wrong answers are expensive.\n\nAnother mistake is optimizing quality without user patience. A perfect answer that takes too long may not work in support.\n\nA third mistake is ignoring usage growth. A feature that is affordable with 1,000 requests may become painful at 1 million."
    }
  ],
  "answer": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.",
  "reasoning": "Here is a cost-latency artifact:\n\n```txt\nFeature:\nAI support assistant\n\nTask 1:\nIntent classification\nTarget latency: under 500 ms\nQuality requirement: medium\nModel strategy: small model\n\nTask 2:\nCase summary\nTarget latency: under 3 seconds\nQuality requirement: high factual accuracy\nModel strategy: stronger model, structured output\n\nTask 3:\nCustomer reply draft\nTarget latency: under 5 seconds\nQuality requirement: high, policy grounded\nModel strategy: stronger model plus retrieval\n\nTask 4:\nCompliance-sensitive answer\nTarget latency: human workflow acceptable\nQuality requirement: very high\nModel strategy: draft-only with human approval\n```\n\nThen define controls:\n\n```txt\nOptimization levers:\n- Shorter prompts\n- Retrieval only when needed\n- Prompt caching\n- Smaller model for classification\n- Batch processing for non-urgent work\n- Output length limits\n- Reuse prior summaries\n- Escalate high-risk tasks instead of over-automating\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should not every task use the strongest model?",
    "What is a latency target?",
    "Why can output length affect cost and speed?",
    "When is human review better than a bigger model?",
    "What metrics show AI unit economics?"
  ],
  "interviewAnswer": "I would manage LLM cost and latency by splitting the workflow into tasks, setting quality and latency targets, choosing model strategy per task, using caching or smaller models where safe, limiting output, and monitoring cost per successful outcome.\n\nA strong TPM answer connects AI model choices to user experience and unit economics.",
  "sourceLinks": [
    {
      "label": "OpenAI Docs: Latency optimization",
      "url": "https://platform.openai.com/docs/guides/latency-optimization"
    },
    {
      "label": "OpenAI Docs: Cost optimization",
      "url": "https://platform.openai.com/docs/guides/cost-optimization"
    }
  ],
  "beginnerExplanation": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.\n\nThe beginner mistake is picking the strongest model for everything. That may work in a demo but fail in production if responses are too slow or too expensive.\n\nThe TPM needs to think in product tiers:\n\n```txt\nHigh-quality model:\nBetter reasoning, higher cost, often higher latency.\n\nSmaller or faster model:\nLower cost and faster, but may need narrower tasks or stricter guardrails.\n\nCached or reused output:\nFast and cheap when the answer does not need fresh reasoning.\n\nHuman review:\nSlower and more expensive, but safer for high-risk outcomes.\n```",
  "example": "Imagine an AI support assistant in a remittance app.\n\nNot every task needs the same model:\n\n```txt\nClassify ticket category:\nFast, cheap model may be enough.\n\nSummarize long case history:\nMay need a model with larger context.\n\nDraft customer response for failed transfer:\nNeeds accuracy and policy grounding.\n\nRecommend fraud action:\nMay need human review regardless of model.\n```\n\nThe TPM should map task risk and complexity before choosing model strategy.",
  "commonMistakes": "A common mistake is optimizing cost before defining acceptable quality. Cheap wrong answers are expensive.\n\nAnother mistake is optimizing quality without user patience. A perfect answer that takes too long may not work in support.\n\nA third mistake is ignoring usage growth. A feature that is affordable with 1,000 requests may become painful at 1 million."
};
