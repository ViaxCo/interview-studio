import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-complaints-risk-feedback-loop",
  "track": "TPM",
  "category": "Product Strategy",
  "level": "Intermediate",
  "question": "How would you use customer complaints to improve a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Customer complaints are not just unhappy messages. In fintech, complaints can reveal product defects, confusing policies, unfair experiences, compliance risk, fraud patterns, partner failures, and support gaps.\n\nThe beginner mistake is counting complaints only as support volume. A TPM should treat complaints as product intelligence, especially when they involve money, access, credit, identity, disputes, fees, or account restrictions.\n\nThe mental model:\n\n```txt\nIndividual complaint:\nA user had a painful experience.\n\nComplaint pattern:\nMany users are hitting the same product or policy problem.\n\nProduct action:\nFix the workflow, copy, control, policy, partner issue, or operational process.\n```\n\nThe goal is not to make the complaint dashboard pretty. The goal is to learn where the product is hurting people."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine complaints about frozen accounts increase after a new fraud rule launches.\n\nIf the team only sees total complaint count, they might miss the connection. A better loop connects complaint tags to product changes.\n\n```txt\nProduct change:\nNew rule holds transfers from new devices.\n\nComplaint pattern:\nLegitimate travelers say transfers are blocked with unclear messaging.\n\nAction:\nAdd travel/device context, improve step-up verification, rewrite status copy, monitor false positives.\n```\n\nThe complaint is a signal that the risk control may be too blunt."
    },
    {
      "title": "Make it practical",
      "body": "Here is a complaint feedback artifact:\n\n```txt\nComplaint taxonomy:\n- Unauthorized transaction\n- Account frozen\n- Transfer delayed\n- Fee surprise\n- Verification failed\n- Dispute denied\n- Support unresponsive\n- Partner payout issue\n\nReview cadence:\n- Daily review for severe harm\n- Weekly trend review by product area\n- Monthly executive risk review\n\nRequired fields:\n- Product area\n- Customer harm\n- Root cause hypothesis\n- Money impact\n- Regulatory risk\n- Related product change\n- Owner\n- Fix status\n\nMetrics:\n- Complaint rate per active user\n- Complaint severity mix\n- Repeat complaint rate\n- Time to response\n- Time to product fix\n```\n\nComplaints should become roadmap input when they reveal repeated harm."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating complaints as anecdotal and therefore useless. One complaint may be anecdotal; a pattern is evidence.\n\nAnother mistake is optimizing for fast closure instead of real resolution. Closing tickets quickly does not fix a broken product flow.\n\nA third mistake is not linking complaints to releases. If complaints spike after a launch, the product team should know quickly."
    }
  ],
  "answer": "Customer complaints are not just unhappy messages. In fintech, complaints can reveal product defects, confusing policies, unfair experiences, compliance risk, fraud patterns, partner failures, and support gaps.",
  "reasoning": "Here is a complaint feedback artifact:\n\n```txt\nComplaint taxonomy:\n- Unauthorized transaction\n- Account frozen\n- Transfer delayed\n- Fee surprise\n- Verification failed\n- Dispute denied\n- Support unresponsive\n- Partner payout issue\n\nReview cadence:\n- Daily review for severe harm\n- Weekly trend review by product area\n- Monthly executive risk review\n\nRequired fields:\n- Product area\n- Customer harm\n- Root cause hypothesis\n- Money impact\n- Regulatory risk\n- Related product change\n- Owner\n- Fix status\n\nMetrics:\n- Complaint rate per active user\n- Complaint severity mix\n- Repeat complaint rate\n- Time to response\n- Time to product fix\n```\n\nComplaints should become roadmap input when they reveal repeated harm.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why are complaints more important in fintech than in many casual apps?",
    "What complaint categories would you track?",
    "How would you separate one-off frustration from a product pattern?",
    "What does \"time to product fix\" measure?",
    "How could complaints reveal a bad fraud rule?"
  ],
  "interviewAnswer": "I would use complaints as a feedback system by tagging them by product area, harm, severity, root cause, money impact, regulatory risk, related release, owner, and fix status. I would review severe issues daily, trends weekly, and recurring risks monthly, then feed patterns into product fixes, policy changes, support training, and monitoring.\n\nA strong answer shows that complaints are not just support noise; they are risk and product intelligence.",
  "sourceLinks": [
    {
      "label": "CFPB: Consumer Complaint Program",
      "url": "https://www.consumerfinance.gov/compliance/consumer-complaint-program/"
    },
    {
      "label": "CFPB: Consumer Complaint Database",
      "url": "https://www.consumerfinance.gov/data-research/consumer-complaints/"
    }
  ],
  "beginnerExplanation": "Customer complaints are not just unhappy messages. In fintech, complaints can reveal product defects, confusing policies, unfair experiences, compliance risk, fraud patterns, partner failures, and support gaps.\n\nThe beginner mistake is counting complaints only as support volume. A TPM should treat complaints as product intelligence, especially when they involve money, access, credit, identity, disputes, fees, or account restrictions.\n\nThe mental model:\n\n```txt\nIndividual complaint:\nA user had a painful experience.\n\nComplaint pattern:\nMany users are hitting the same product or policy problem.\n\nProduct action:\nFix the workflow, copy, control, policy, partner issue, or operational process.\n```\n\nThe goal is not to make the complaint dashboard pretty. The goal is to learn where the product is hurting people.",
  "example": "Imagine complaints about frozen accounts increase after a new fraud rule launches.\n\nIf the team only sees total complaint count, they might miss the connection. A better loop connects complaint tags to product changes.\n\n```txt\nProduct change:\nNew rule holds transfers from new devices.\n\nComplaint pattern:\nLegitimate travelers say transfers are blocked with unclear messaging.\n\nAction:\nAdd travel/device context, improve step-up verification, rewrite status copy, monitor false positives.\n```\n\nThe complaint is a signal that the risk control may be too blunt.",
  "commonMistakes": "A common mistake is treating complaints as anecdotal and therefore useless. One complaint may be anecdotal; a pattern is evidence.\n\nAnother mistake is optimizing for fast closure instead of real resolution. Closing tickets quickly does not fix a broken product flow.\n\nA third mistake is not linking complaints to releases. If complaints spike after a launch, the product team should know quickly."
};
