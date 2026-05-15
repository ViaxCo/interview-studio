import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fintech-metrics-risk-guardrails",
  "track": "TPM",
  "category": "Product Strategy",
  "level": "Intermediate",
  "question": "How would you define product metrics with financial risk guardrails?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Fintech product metrics should measure growth and user value, but they also need guardrails for financial harm.\n\nThe beginner mistake is optimizing only for conversion, volume, or automation. In fintech, a feature can grow while creating fraud loss, complaints, false declines, unfair outcomes, support burden, or compliance risk.\n\nThe mental model:\n\n```txt\nSuccess metric:\nWhat we want to improve.\n\nQuality metric:\nWhether the experience is working well.\n\nRisk guardrail:\nWhat must not get worse.\n```\n\nThe TPM should define all three before launch."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a new instant payout flow increases payout volume by 30%.\n\nThat sounds good, but the full picture may be:\n\n```txt\nPayout volume: up 30%\nFraud loss: up 80%\nSupport contacts: up 25%\nFailed payout complaints: up 15%\nFalse holds: unchanged\n```\n\nThe launch is not simply successful. It created risk that needs action."
    },
    {
      "title": "Make it practical",
      "body": "Here is a metrics artifact:\n\n```txt\nFeature:\nInstant payouts\n\nSuccess metrics:\n- Eligible users adopting instant payout\n- Payout completion rate\n- Time to funds\n- Repeat usage\n\nQuality metrics:\n- Failed payout rate\n- User-reported confusion\n- Support contact rate\n- Status page views\n\nRisk guardrails:\n- Fraud loss\n- Unauthorized claims\n- Complaint rate\n- Manual review backlog\n- False decline or false hold rate\n- Partner incident rate\n\nDecision rule:\nScale only if adoption improves and guardrails stay within agreed thresholds.\n```\n\nMetrics should tell the team when to grow, hold, or roll back."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is celebrating volume without checking harm. More money movement is not good if bad money movement grows faster.\n\nAnother mistake is adding guardrails after launch. By then, no one agrees what \"too risky\" means.\n\nA third mistake is using averages only. A small segment may be harmed even when overall metrics look fine."
    }
  ],
  "answer": "Fintech product metrics should measure growth and user value, but they also need guardrails for financial harm.",
  "reasoning": "Here is a metrics artifact:\n\n```txt\nFeature:\nInstant payouts\n\nSuccess metrics:\n- Eligible users adopting instant payout\n- Payout completion rate\n- Time to funds\n- Repeat usage\n\nQuality metrics:\n- Failed payout rate\n- User-reported confusion\n- Support contact rate\n- Status page views\n\nRisk guardrails:\n- Fraud loss\n- Unauthorized claims\n- Complaint rate\n- Manual review backlog\n- False decline or false hold rate\n- Partner incident rate\n\nDecision rule:\nScale only if adoption improves and guardrails stay within agreed thresholds.\n```\n\nMetrics should tell the team when to grow, hold, or roll back.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between success metrics and guardrails?",
    "Why can growth be dangerous in fintech?",
    "What guardrails would you use for instant payouts?",
    "Why should thresholds be agreed before launch?",
    "How could averages hide customer harm?"
  ],
  "interviewAnswer": "I would define fintech metrics with success metrics, quality metrics, and risk guardrails before launch. For money movement, I would track adoption, completion, time to funds, failed payments, support contacts, fraud loss, unauthorized claims, complaints, manual review backlog, false holds, and partner incidents.\n\nA strong answer shows that fintech growth must be constrained by customer and financial harm.",
  "sourceLinks": [
    {
      "label": "CFPB: Consumer Complaint Program",
      "url": "https://www.consumerfinance.gov/compliance/consumer-complaint-program/"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "Fintech product metrics should measure growth and user value, but they also need guardrails for financial harm.\n\nThe beginner mistake is optimizing only for conversion, volume, or automation. In fintech, a feature can grow while creating fraud loss, complaints, false declines, unfair outcomes, support burden, or compliance risk.\n\nThe mental model:\n\n```txt\nSuccess metric:\nWhat we want to improve.\n\nQuality metric:\nWhether the experience is working well.\n\nRisk guardrail:\nWhat must not get worse.\n```\n\nThe TPM should define all three before launch.",
  "example": "Imagine a new instant payout flow increases payout volume by 30%.\n\nThat sounds good, but the full picture may be:\n\n```txt\nPayout volume: up 30%\nFraud loss: up 80%\nSupport contacts: up 25%\nFailed payout complaints: up 15%\nFalse holds: unchanged\n```\n\nThe launch is not simply successful. It created risk that needs action.",
  "commonMistakes": "A common mistake is celebrating volume without checking harm. More money movement is not good if bad money movement grows faster.\n\nAnother mistake is adding guardrails after launch. By then, no one agrees what \"too risky\" means.\n\nA third mistake is using averages only. A small segment may be harmed even when overall metrics look fine."
};
