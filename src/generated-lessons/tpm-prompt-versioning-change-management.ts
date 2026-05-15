import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-prompt-versioning-change-management",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you manage prompt changes and versioning in a production AI feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.\n\nThe beginner mistake is treating prompt edits like copy tweaks. In production AI systems, prompt changes need versioning, testing, review, rollout, and rollback just like code or rules.\n\nThe mental model:\n\n```txt\nPrompt version:\nWhat instructions were active?\n\nEvaluation:\nDid the new version improve behavior without breaking important cases?\n\nRollout:\nWho sees the new version first?\n\nRollback:\nHow do we return to the previous version if quality drops?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI support assistant that summarizes failed transfer cases. A PM changes the prompt to make summaries shorter. Now the summary sometimes omits the transfer ID or complaint language.\n\nThat is not a small writing issue. Support agents may miss escalation requirements.\n\nA safer system asks:\n\n```txt\nWhat changed?\nWhy did it change?\nWhich evals passed?\nWhich cases got worse?\nWho approved it?\nWhich users or agents see it first?\nCan we roll back quickly?\n```"
    },
    {
      "title": "Make it practical",
      "body": "Here is a prompt-change artifact:\n\n```txt\nPrompt:\nSupport case summarizer\n\nChange:\nReduce summary length and force structured fields.\n\nReason:\nAgents said long summaries slow triage.\n\nRequired evals:\n- Payment delay cases\n- Refund requests\n- Complaint language\n- KYC review cases\n- Sensitive internal notes\n\nMust not regress:\n- Transfer ID accuracy\n- Amount accuracy\n- Complaint detection\n- Sensitive note exclusion\n\nRollout:\n10 percent of agents for 48 hours.\n\nMonitoring:\n- Agent edit rate\n- Thumbs-down rate\n- Escalation miss rate\n- Average handle time\n\nRollback:\nRevert to v12 if severe factual error or complaint miss exceeds threshold.\n```\n\nThat makes prompt management operational instead of vibes-based."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is not knowing which prompt produced a bad output. Without version logs, debugging is guesswork.\n\nAnother mistake is evaluating only the changed happy path. Prompt edits can break unrelated cases.\n\nA third mistake is rolling out to everyone at once. Production prompts deserve controlled release."
    }
  ],
  "answer": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.",
  "reasoning": "Here is a prompt-change artifact:\n\n```txt\nPrompt:\nSupport case summarizer\n\nChange:\nReduce summary length and force structured fields.\n\nReason:\nAgents said long summaries slow triage.\n\nRequired evals:\n- Payment delay cases\n- Refund requests\n- Complaint language\n- KYC review cases\n- Sensitive internal notes\n\nMust not regress:\n- Transfer ID accuracy\n- Amount accuracy\n- Complaint detection\n- Sensitive note exclusion\n\nRollout:\n10 percent of agents for 48 hours.\n\nMonitoring:\n- Agent edit rate\n- Thumbs-down rate\n- Escalation miss rate\n- Average handle time\n\nRollback:\nRevert to v12 if severe factual error or complaint miss exceeds threshold.\n```\n\nThat makes prompt management operational instead of vibes-based.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a prompt change a product change?",
    "What should be logged with each prompt version?",
    "Why do evals need regression cases?",
    "What metrics reveal prompt quality after launch?",
    "Why is rollback important?"
  ],
  "interviewAnswer": "I would manage production prompts with version history, change reason, evals, regression tests, approval, staged rollout, monitoring, and rollback.\n\nA strong TPM answer treats prompts as part of the product contract, not informal text hidden inside the system.",
  "sourceLinks": [
    {
      "label": "OpenAI Docs: Prompting",
      "url": "https://platform.openai.com/docs/guides/prompting"
    },
    {
      "label": "OpenAI Docs: Evaluation best practices",
      "url": "https://platform.openai.com/docs/guides/evaluation-best-practices"
    }
  ],
  "beginnerExplanation": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.\n\nThe beginner mistake is treating prompt edits like copy tweaks. In production AI systems, prompt changes need versioning, testing, review, rollout, and rollback just like code or rules.\n\nThe mental model:\n\n```txt\nPrompt version:\nWhat instructions were active?\n\nEvaluation:\nDid the new version improve behavior without breaking important cases?\n\nRollout:\nWho sees the new version first?\n\nRollback:\nHow do we return to the previous version if quality drops?\n```",
  "example": "Imagine an AI support assistant that summarizes failed transfer cases. A PM changes the prompt to make summaries shorter. Now the summary sometimes omits the transfer ID or complaint language.\n\nThat is not a small writing issue. Support agents may miss escalation requirements.\n\nA safer system asks:\n\n```txt\nWhat changed?\nWhy did it change?\nWhich evals passed?\nWhich cases got worse?\nWho approved it?\nWhich users or agents see it first?\nCan we roll back quickly?\n```",
  "commonMistakes": "A common mistake is not knowing which prompt produced a bad output. Without version logs, debugging is guesswork.\n\nAnother mistake is evaluating only the changed happy path. Prompt edits can break unrelated cases.\n\nA third mistake is rolling out to everyone at once. Production prompts deserve controlled release."
};
