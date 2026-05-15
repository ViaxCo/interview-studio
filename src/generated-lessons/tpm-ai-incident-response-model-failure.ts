import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-incident-response-model-failure",
  "track": "TPM",
  "category": "AI Governance",
  "level": "Advanced",
  "question": "How would you handle an incident caused by an AI model failure?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An AI incident happens when an AI feature causes or could cause meaningful harm: wrong decisions, unsafe messages, privacy leakage, tool misuse, unfair outcomes, or operational failure.\n\nThe beginner mistake is treating AI incidents like normal software bugs only. Some AI failures are probabilistic, data-dependent, prompt-dependent, or tied to model behavior that changed. The response needs product, engineering, risk, legal, compliance, support, and sometimes vendor coordination.\n\nThe mental model:\n\n```txt\nContain:\nStop or limit harm.\n\nInvestigate:\nFind the failure pattern and affected users.\n\nRecover:\nCorrect outcomes, communicate, and prevent recurrence.\n```\n\nThe TPM helps coordinate decisions and customer impact."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI support assistant gives wrong advice about dispute deadlines to 800 users.\n\nThe team should not only fix the prompt. It needs to answer:\n\n```txt\nWhich users received the wrong answer?\nDid anyone miss a deadline?\nShould we contact affected users?\nShould the assistant be disabled or limited?\nWhat eval case failed to catch this?\nWhat policy source was stale?\n```\n\nThat is incident response, not prompt tweaking."
    },
    {
      "title": "Make it practical",
      "body": "Here is an AI incident artifact:\n\n```txt\nIncident:\nAI assistant gave incorrect dispute deadline guidance\n\nImmediate actions:\n- Disable disputed topic answer\n- Route questions to human support\n- Preserve logs\n- Identify affected conversations\n- Notify legal/compliance\n\nInvestigation:\n- Prompt version\n- Model version\n- Retrieved sources\n- Bad answer pattern\n- Affected user count\n- Severity and harm assessment\n\nRecovery:\n- Correct knowledge source\n- Add eval cases\n- Contact affected users if required\n- Review support scripts\n- Retest before re-enabling\n- Write postmortem\n```\n\nThe incident should produce a stronger system, not just a patched answer."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is fixing the visible prompt and skipping affected-user analysis.\n\nAnother mistake is leaving the feature live while the risky failure mode is still unknown.\n\nA third mistake is not adding the incident to evals. If the system failed once, the test suite should learn from it."
    }
  ],
  "answer": "An AI incident happens when an AI feature causes or could cause meaningful harm: wrong decisions, unsafe messages, privacy leakage, tool misuse, unfair outcomes, or operational failure.",
  "reasoning": "Here is an AI incident artifact:\n\n```txt\nIncident:\nAI assistant gave incorrect dispute deadline guidance\n\nImmediate actions:\n- Disable disputed topic answer\n- Route questions to human support\n- Preserve logs\n- Identify affected conversations\n- Notify legal/compliance\n\nInvestigation:\n- Prompt version\n- Model version\n- Retrieved sources\n- Bad answer pattern\n- Affected user count\n- Severity and harm assessment\n\nRecovery:\n- Correct knowledge source\n- Add eval cases\n- Contact affected users if required\n- Review support scripts\n- Retest before re-enabling\n- Write postmortem\n```\n\nThe incident should produce a stronger system, not just a patched answer.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "How is an AI incident different from a normal bug?",
    "What does containment mean for an AI feature?",
    "Why do affected-user lists matter?",
    "What should be preserved for investigation?",
    "How should the incident improve future evals?"
  ],
  "interviewAnswer": "I would handle an AI model failure by containing the feature, preserving logs, identifying affected users, assessing harm, coordinating legal/compliance/support/vendor response, correcting outcomes, updating prompts or sources, adding eval cases, retesting, communicating as needed, and writing a postmortem.\n\nA strong answer focuses on customer harm and recurrence prevention, not only technical fix.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Microsoft Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    }
  ],
  "beginnerExplanation": "An AI incident happens when an AI feature causes or could cause meaningful harm: wrong decisions, unsafe messages, privacy leakage, tool misuse, unfair outcomes, or operational failure.\n\nThe beginner mistake is treating AI incidents like normal software bugs only. Some AI failures are probabilistic, data-dependent, prompt-dependent, or tied to model behavior that changed. The response needs product, engineering, risk, legal, compliance, support, and sometimes vendor coordination.\n\nThe mental model:\n\n```txt\nContain:\nStop or limit harm.\n\nInvestigate:\nFind the failure pattern and affected users.\n\nRecover:\nCorrect outcomes, communicate, and prevent recurrence.\n```\n\nThe TPM helps coordinate decisions and customer impact.",
  "example": "Imagine an AI support assistant gives wrong advice about dispute deadlines to 800 users.\n\nThe team should not only fix the prompt. It needs to answer:\n\n```txt\nWhich users received the wrong answer?\nDid anyone miss a deadline?\nShould we contact affected users?\nShould the assistant be disabled or limited?\nWhat eval case failed to catch this?\nWhat policy source was stale?\n```\n\nThat is incident response, not prompt tweaking.",
  "commonMistakes": "A common mistake is fixing the visible prompt and skipping affected-user analysis.\n\nAnother mistake is leaving the feature live while the risky failure mode is still unknown.\n\nA third mistake is not adding the incident to evals. If the system failed once, the test suite should learn from it."
};
