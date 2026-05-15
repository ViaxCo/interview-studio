import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-post-launch-operations",
  "track": "TPM",
  "category": "Operations",
  "level": "Intermediate",
  "question": "What would you monitor after launching a high-risk product feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.\n\nThe beginner mistake is treating launch as the finish line. For risky features, launch is when the team starts learning whether the feature behaves safely in the real world.\n\nA TPM should think about three kinds of health:\n\n```txt\nProduct health:\nAre users getting the intended value?\n\nSystem health:\nIs the product technically reliable?\n\nOperational health:\nCan support, compliance, operations, and partners handle what is happening?\n```\n\nIf one of these fails, the launch may need to pause even if the code technically works."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine launching a new payout partner behind a feature flag.\n\nThe team should not only watch \"number of payouts.\" They need to know whether payouts are succeeding, how long they stay pending, whether partner errors are rising, whether support tickets are increasing, and whether reconciliation still works.\n\nA weak launch plan says:\n\n```txt\nLaunch Monday and check metrics later.\n```\n\nA stronger plan says:\n\n```txt\nLaunch shape:\n5 percent of eligible payouts in one corridor.\n\nReview windows:\nOne hour, four hours, 24 hours, one week.\n\nPause criteria:\n- Failure rate above threshold\n- Pending duration above SLA\n- Reconciliation mismatch\n- Support contacts spike\n- Partner incident report\n```\n\nNow launch is controlled, not hopeful."
    },
    {
      "title": "Make it practical",
      "body": "Here is a post-launch operating plan:\n\n```txt\nFeature:\nNew payout partner\n\nProduct metrics:\n- Payout completion rate\n- Median and p95 time to final status\n- User retry rate\n- Drop-off after partner selection\n\nSystem metrics:\n- API latency\n- Error rate\n- Timeout rate\n- Webhook delivery success\n- Queue backlog\n\nOperational metrics:\n- Pending payouts older than SLA\n- Manual review volume\n- Reconciliation exceptions\n- Support tickets by reason\n- Partner escalation count\n\nCustomer safety:\n- Duplicate payout attempts\n- Incorrect status shown to user\n- Money captured but not submitted\n\nDecision rules:\n- Continue rollout if all guardrails stay healthy for 24 hours.\n- Pause if failure rate doubles baseline.\n- Roll back if money movement state becomes unclear.\n- Escalate if partner does not respond within SLA.\n```\n\nThe TPM should also define ownership:\n\n```txt\nOwner map\n\nEngineering:\nSystem metrics, rollback, technical investigation.\n\nOperations:\nPending payouts, manual review, reconciliation.\n\nSupport:\nCustomer reports, macros, escalation tags.\n\nProduct:\nRollout decision, customer impact, tradeoffs, post-launch review.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is monitoring only success metrics. You also need guardrails and failure signals.\n\nAnother mistake is waiting too long for the first review. High-risk launches need early observation.\n\nA third mistake is not defining pause or rollback criteria before launch. Teams make worse decisions under pressure."
    }
  ],
  "answer": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.",
  "reasoning": "Here is a post-launch operating plan:\n\n```txt\nFeature:\nNew payout partner\n\nProduct metrics:\n- Payout completion rate\n- Median and p95 time to final status\n- User retry rate\n- Drop-off after partner selection\n\nSystem metrics:\n- API latency\n- Error rate\n- Timeout rate\n- Webhook delivery success\n- Queue backlog\n\nOperational metrics:\n- Pending payouts older than SLA\n- Manual review volume\n- Reconciliation exceptions\n- Support tickets by reason\n- Partner escalation count\n\nCustomer safety:\n- Duplicate payout attempts\n- Incorrect status shown to user\n- Money captured but not submitted\n\nDecision rules:\n- Continue rollout if all guardrails stay healthy for 24 hours.\n- Pause if failure rate doubles baseline.\n- Roll back if money movement state becomes unclear.\n- Escalate if partner does not respond within SLA.\n```\n\nThe TPM should also define ownership:\n\n```txt\nOwner map\n\nEngineering:\nSystem metrics, rollback, technical investigation.\n\nOperations:\nPending payouts, manual review, reconciliation.\n\nSupport:\nCustomer reports, macros, escalation tags.\n\nProduct:\nRollout decision, customer impact, tradeoffs, post-launch review.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is launch not the finish line?",
    "What is the difference between product, system, and operational health?",
    "What are pause criteria?",
    "Why are early review windows useful?",
    "Who should own post-launch monitoring?"
  ],
  "interviewAnswer": "I would monitor product outcomes, system reliability, operational workload, customer safety, support volume, and guardrail metrics. I would define review windows, rollout stages, pause criteria, rollback criteria, owners, and communication paths before launch.\n\nA strong TPM answer treats launch as an operating phase, not a celebration.",
  "sourceLinks": [
    {
      "label": "Google SRE: Monitoring distributed systems",
      "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
    },
    {
      "label": "LaunchDarkly Docs: Guarded rollouts",
      "url": "https://launchdarkly.com/docs/home/releases/managing-guarded-rollouts"
    }
  ],
  "beginnerExplanation": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.\n\nThe beginner mistake is treating launch as the finish line. For risky features, launch is when the team starts learning whether the feature behaves safely in the real world.\n\nA TPM should think about three kinds of health:\n\n```txt\nProduct health:\nAre users getting the intended value?\n\nSystem health:\nIs the product technically reliable?\n\nOperational health:\nCan support, compliance, operations, and partners handle what is happening?\n```\n\nIf one of these fails, the launch may need to pause even if the code technically works.",
  "example": "Imagine launching a new payout partner behind a feature flag.\n\nThe team should not only watch \"number of payouts.\" They need to know whether payouts are succeeding, how long they stay pending, whether partner errors are rising, whether support tickets are increasing, and whether reconciliation still works.\n\nA weak launch plan says:\n\n```txt\nLaunch Monday and check metrics later.\n```\n\nA stronger plan says:\n\n```txt\nLaunch shape:\n5 percent of eligible payouts in one corridor.\n\nReview windows:\nOne hour, four hours, 24 hours, one week.\n\nPause criteria:\n- Failure rate above threshold\n- Pending duration above SLA\n- Reconciliation mismatch\n- Support contacts spike\n- Partner incident report\n```\n\nNow launch is controlled, not hopeful.",
  "commonMistakes": "A common mistake is monitoring only success metrics. You also need guardrails and failure signals.\n\nAnother mistake is waiting too long for the first review. High-risk launches need early observation.\n\nA third mistake is not defining pause or rollback criteria before launch. Teams make worse decisions under pressure."
};
