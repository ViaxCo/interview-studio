import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-model-evaluation",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you evaluate whether an AI feature is ready to launch?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"\n\nThe beginner mistake is testing a few happy-path prompts and calling it done. AI systems can fail inconsistently. They can hallucinate, refuse when they should answer, answer when they should refuse, use stale context, expose sensitive data, or produce different outputs for similar inputs.\n\nA TPM should evaluate the product behavior, not just the model."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI assistant that summarizes customer complaints for a fintech support team.\n\nA weak evaluation says:\n\n```txt\nTry 20 examples. Looks good.\n```\n\nA stronger evaluation defines success:\n\n```txt\nThe summary must:\n- Identify the customer's issue\n- Preserve amount, date, and transfer ID accurately\n- Avoid inventing facts\n- Flag complaint language\n- Exclude sensitive internal-only fraud notes\n- Be short enough for an agent to scan\n```\n\nNow the team can test outputs against criteria."
    },
    {
      "title": "Make it practical",
      "body": "Here is an evaluation plan:\n\n```txt\nFeature:\nAI support case summarizer\n\nDataset:\n- 200 historical support cases\n- 50 payment delay cases\n- 50 failed verification cases\n- 50 refund or dispute cases\n- 25 angry customer cases\n- 25 cases with sensitive internal notes\n\nEvaluation criteria:\n- Factual accuracy\n- Missing critical detail\n- Hallucinated detail\n- Sensitive information leakage\n- Complaint detection\n- Clarity for support agent\n- Correct escalation flag\n\nLaunch threshold:\n- 95 percent factual accuracy on critical fields\n- 0 severe sensitive-data leaks\n- 90 percent complaint detection recall\n- Human agents prefer AI summary over current workflow in beta\n```\n\nThe TPM should also define monitoring:\n\n```txt\nPost-launch:\n- Agent edit rate\n- Agent thumbs-down rate\n- Escalation miss rate\n- Complaint miss rate\n- Sensitive leakage reports\n- Latency\n- Cost per summary\n```\n\nIf the feature is high-risk, use human approval before outputs reach customers."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is evaluating only average quality. A small number of severe failures can make the product unsafe.\n\nAnother mistake is using synthetic examples only. Real messy cases reveal issues polished examples miss.\n\nA third mistake is not refreshing evals after prompts, models, tools, or policies change."
    }
  ],
  "answer": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"",
  "reasoning": "Here is an evaluation plan:\n\n```txt\nFeature:\nAI support case summarizer\n\nDataset:\n- 200 historical support cases\n- 50 payment delay cases\n- 50 failed verification cases\n- 50 refund or dispute cases\n- 25 angry customer cases\n- 25 cases with sensitive internal notes\n\nEvaluation criteria:\n- Factual accuracy\n- Missing critical detail\n- Hallucinated detail\n- Sensitive information leakage\n- Complaint detection\n- Clarity for support agent\n- Correct escalation flag\n\nLaunch threshold:\n- 95 percent factual accuracy on critical fields\n- 0 severe sensitive-data leaks\n- 90 percent complaint detection recall\n- Human agents prefer AI summary over current workflow in beta\n```\n\nThe TPM should also define monitoring:\n\n```txt\nPost-launch:\n- Agent edit rate\n- Agent thumbs-down rate\n- Escalation miss rate\n- Complaint miss rate\n- Sensitive leakage reports\n- Latency\n- Cost per summary\n```\n\nIf the feature is high-risk, use human approval before outputs reach customers.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is AI evaluation more than trying a few prompts?",
    "What is a launch threshold?",
    "Why should evals include edge cases?",
    "What should be monitored after launch?",
    "Why might human approval be needed?"
  ],
  "interviewAnswer": "I would evaluate an AI feature by defining the intended workflow, creating representative and edge-case test sets, setting criteria and launch thresholds, measuring severe failures, testing human review, and monitoring post-launch quality, latency, cost, and harm signals.\n\nA strong TPM answer shows that AI readiness is evidence-based and workflow-specific.",
  "sourceLinks": [
    {
      "label": "OpenAI Docs: Working with evals",
      "url": "https://platform.openai.com/docs/guides/evals"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"\n\nThe beginner mistake is testing a few happy-path prompts and calling it done. AI systems can fail inconsistently. They can hallucinate, refuse when they should answer, answer when they should refuse, use stale context, expose sensitive data, or produce different outputs for similar inputs.\n\nA TPM should evaluate the product behavior, not just the model.",
  "example": "Imagine an AI assistant that summarizes customer complaints for a fintech support team.\n\nA weak evaluation says:\n\n```txt\nTry 20 examples. Looks good.\n```\n\nA stronger evaluation defines success:\n\n```txt\nThe summary must:\n- Identify the customer's issue\n- Preserve amount, date, and transfer ID accurately\n- Avoid inventing facts\n- Flag complaint language\n- Exclude sensitive internal-only fraud notes\n- Be short enough for an agent to scan\n```\n\nNow the team can test outputs against criteria.",
  "commonMistakes": "A common mistake is evaluating only average quality. A small number of severe failures can make the product unsafe.\n\nAnother mistake is using synthetic examples only. Real messy cases reveal issues polished examples miss.\n\nA third mistake is not refreshing evals after prompts, models, tools, or policies change."
};
