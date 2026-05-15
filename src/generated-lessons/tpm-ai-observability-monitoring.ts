import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-observability-monitoring",
  "track": "TPM",
  "category": "AI Operations",
  "level": "Intermediate",
  "question": "What would you monitor for an AI feature in production?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.\n\nThe beginner mistake is monitoring only uptime. An AI feature can be \"up\" while giving wrong, unsafe, expensive, slow, or unhelpful answers.\n\nThe mental model:\n\n```txt\nTraditional monitoring:\nIs the system available and fast?\n\nAI monitoring:\nIs the system available, fast, useful, safe, grounded, and cost-controlled?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech AI assistant that answers support questions.\n\nYou need to know:\n\n```txt\nQuality:\nAre answers accurate?\n\nGrounding:\nDid the answer use the right source?\n\nSafety:\nDid it reveal sensitive info or give prohibited advice?\n\nOperations:\nDid it escalate when needed?\n\nCost:\nAre token costs growing unexpectedly?\n\nLatency:\nAre users waiting too long?\n```\n\nWithout these, the team will not know whether the feature is helping or quietly creating risk."
    },
    {
      "title": "Make it practical",
      "body": "Here is a production monitoring plan:\n\n```txt\nFeature:\nAI transfer-status assistant\n\nOperational metrics:\n- Request volume\n- Error rate\n- Latency p50/p95\n- Tool-call failure rate\n- Retrieval failure rate\n- Cost per conversation\n\nQuality metrics:\n- Thumbs-up/down\n- Human escalation rate\n- Agent correction rate\n- Factual error reports\n- Unsupported answer rate\n\nSafety metrics:\n- Sensitive data leakage reports\n- Policy violation rate\n- Fraud/compliance escalation misses\n- Prompt injection attempts\n\nTrace data:\n- User intent\n- Retrieved documents or records\n- Model version\n- Prompt version\n- Tool calls\n- Final answer\n- Refusal or escalation reason\n```\n\nThe TPM should define alert thresholds before launch. For example, if support corrections spike after a prompt change, pause the rollout."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is not logging enough context to debug failures. If you only store the final answer, you may not know whether retrieval, prompt, model, or tool call failed.\n\nAnother mistake is monitoring user satisfaction without safety. Users may like fast answers that are wrong.\n\nA third mistake is ignoring cost. AI features can become financially unhealthy before they become technically broken."
    }
  ],
  "answer": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.",
  "reasoning": "Here is a production monitoring plan:\n\n```txt\nFeature:\nAI transfer-status assistant\n\nOperational metrics:\n- Request volume\n- Error rate\n- Latency p50/p95\n- Tool-call failure rate\n- Retrieval failure rate\n- Cost per conversation\n\nQuality metrics:\n- Thumbs-up/down\n- Human escalation rate\n- Agent correction rate\n- Factual error reports\n- Unsupported answer rate\n\nSafety metrics:\n- Sensitive data leakage reports\n- Policy violation rate\n- Fraud/compliance escalation misses\n- Prompt injection attempts\n\nTrace data:\n- User intent\n- Retrieved documents or records\n- Model version\n- Prompt version\n- Tool calls\n- Final answer\n- Refusal or escalation reason\n```\n\nThe TPM should define alert thresholds before launch. For example, if support corrections spike after a prompt change, pause the rollout.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is uptime not enough for AI monitoring?",
    "What trace data helps debug an AI failure?",
    "Why should cost be monitored?",
    "What safety metrics matter in fintech support?",
    "What should trigger a rollout pause?"
  ],
  "interviewAnswer": "I would monitor AI features across availability, latency, cost, quality, grounding, safety, escalation, tool use, and user feedback. I would log prompts, model versions, retrieved context, tool calls, outputs, and decisions so failures are debuggable.\n\nA strong answer shows that AI production health includes behavior, not just infrastructure.",
  "sourceLinks": [
    {
      "label": "Microsoft Learn: Agent monitoring dashboard",
      "url": "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/how-to-monitor-agents-dashboard"
    },
    {
      "label": "OpenAI Agents SDK: Tracing",
      "url": "https://openai.github.io/openai-agents-js/guides/tracing/"
    }
  ],
  "beginnerExplanation": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.\n\nThe beginner mistake is monitoring only uptime. An AI feature can be \"up\" while giving wrong, unsafe, expensive, slow, or unhelpful answers.\n\nThe mental model:\n\n```txt\nTraditional monitoring:\nIs the system available and fast?\n\nAI monitoring:\nIs the system available, fast, useful, safe, grounded, and cost-controlled?\n```",
  "example": "Imagine a fintech AI assistant that answers support questions.\n\nYou need to know:\n\n```txt\nQuality:\nAre answers accurate?\n\nGrounding:\nDid the answer use the right source?\n\nSafety:\nDid it reveal sensitive info or give prohibited advice?\n\nOperations:\nDid it escalate when needed?\n\nCost:\nAre token costs growing unexpectedly?\n\nLatency:\nAre users waiting too long?\n```\n\nWithout these, the team will not know whether the feature is helping or quietly creating risk.",
  "commonMistakes": "A common mistake is not logging enough context to debug failures. If you only store the final answer, you may not know whether retrieval, prompt, model, or tool call failed.\n\nAnother mistake is monitoring user satisfaction without safety. Users may like fast answers that are wrong.\n\nA third mistake is ignoring cost. AI features can become financially unhealthy before they become technically broken."
};
