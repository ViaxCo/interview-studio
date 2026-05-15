import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-human-in-the-loop-ai-review",
  "track": "TPM",
  "category": "AI Operations",
  "level": "Intermediate",
  "question": "How would you design a human-in-the-loop review workflow for AI decisions?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.\n\nThe beginner mistake is saying \"a human will review it\" without designing the actual workflow. Humans need queues, context, decision options, policies, training, audit logs, and capacity.\n\nThe TPM should ask:\n\n```txt\nWhat does the AI recommend?\nWhen must a human review?\nWhat evidence does the reviewer see?\nWhat decisions can the reviewer make?\nWhat happens after the decision?\nHow do we learn from reviewer corrections?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI model flags transfers for fraud review.\n\nA bad workflow dumps alerts into a queue with a risk score and no context. Analysts either overtrust the score or waste time digging.\n\nA good workflow gives reviewable evidence:\n\n```txt\nAI recommendation:\nManual review\n\nTop signals:\n- New device\n- New recipient\n- High-risk corridor\n- Transfer amount 4x user average\n- Similar pattern seen in confirmed fraud cases\n\nReviewer actions:\n- Approve\n- Request verification\n- Hold\n- Block\n- Escalate\n```\n\nNow the human can make a responsible decision."
    },
    {
      "title": "Make it practical",
      "body": "Here is a review workflow artifact:\n\n```txt\nReview trigger:\nAI risk score between 70 and 90, or any score with high-risk corridor.\n\nQueue priority:\n1. Money already captured\n2. High-value transfer\n3. Time-sensitive payout\n4. Repeat customer\n\nReviewer view:\n- Customer profile\n- KYC status\n- Transfer history\n- Recipient history\n- Model score\n- Top risk signals\n- Policy guidance\n- Similar prior cases\n\nDecision requirements:\n- Decision reason required\n- Notes required for block\n- Escalation required for sanctions or legal concern\n- All decisions audited\n```\n\nThe TPM should also monitor reviewer quality:\n\n```txt\nMetrics:\n- Review backlog\n- Time to decision\n- Override rate\n- Reviewer disagreement rate\n- Confirmed fraud after approval\n- False-positive appeals\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using humans as decoration. If reviewers cannot override or understand the AI, oversight is weak.\n\nAnother mistake is creating more alerts than humans can handle. A huge backlog can be worse than no review.\n\nA third mistake is not feeding review outcomes back into evaluation."
    }
  ],
  "answer": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.",
  "reasoning": "Here is a review workflow artifact:\n\n```txt\nReview trigger:\nAI risk score between 70 and 90, or any score with high-risk corridor.\n\nQueue priority:\n1. Money already captured\n2. High-value transfer\n3. Time-sensitive payout\n4. Repeat customer\n\nReviewer view:\n- Customer profile\n- KYC status\n- Transfer history\n- Recipient history\n- Model score\n- Top risk signals\n- Policy guidance\n- Similar prior cases\n\nDecision requirements:\n- Decision reason required\n- Notes required for block\n- Escalation required for sanctions or legal concern\n- All decisions audited\n```\n\nThe TPM should also monitor reviewer quality:\n\n```txt\nMetrics:\n- Review backlog\n- Time to decision\n- Override rate\n- Reviewer disagreement rate\n- Confirmed fraud after approval\n- False-positive appeals\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What does human-in-the-loop mean?",
    "Why is a review queue not enough?",
    "What context should reviewers see?",
    "How can review capacity become a product risk?",
    "What metrics show review workflow health?"
  ],
  "interviewAnswer": "I would design human review by defining triggers, queue priority, reviewer context, allowed decisions, policy guidance, audit logs, escalation paths, capacity metrics, and feedback loops.\n\nA strong answer shows that human oversight is an operating workflow, not a sentence in a PRD.",
  "sourceLinks": [
    {
      "label": "Microsoft: Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.\n\nThe beginner mistake is saying \"a human will review it\" without designing the actual workflow. Humans need queues, context, decision options, policies, training, audit logs, and capacity.\n\nThe TPM should ask:\n\n```txt\nWhat does the AI recommend?\nWhen must a human review?\nWhat evidence does the reviewer see?\nWhat decisions can the reviewer make?\nWhat happens after the decision?\nHow do we learn from reviewer corrections?\n```",
  "example": "Imagine an AI model flags transfers for fraud review.\n\nA bad workflow dumps alerts into a queue with a risk score and no context. Analysts either overtrust the score or waste time digging.\n\nA good workflow gives reviewable evidence:\n\n```txt\nAI recommendation:\nManual review\n\nTop signals:\n- New device\n- New recipient\n- High-risk corridor\n- Transfer amount 4x user average\n- Similar pattern seen in confirmed fraud cases\n\nReviewer actions:\n- Approve\n- Request verification\n- Hold\n- Block\n- Escalate\n```\n\nNow the human can make a responsible decision.",
  "commonMistakes": "A common mistake is using humans as decoration. If reviewers cannot override or understand the AI, oversight is weak.\n\nAnother mistake is creating more alerts than humans can handle. A huge backlog can be worse than no review.\n\nA third mistake is not feeding review outcomes back into evaluation."
};
