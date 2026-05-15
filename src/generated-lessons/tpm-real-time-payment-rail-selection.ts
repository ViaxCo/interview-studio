import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-real-time-payment-rail-selection",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Advanced",
  "question": "How would you choose between payment rails for a real-time money movement product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Payment rail selection means choosing the network or method used to move money.\n\nThe beginner mistake is choosing the fastest rail by default. A real-time payment rail may be fast, but the product also needs coverage, limits, reversibility, fraud controls, cost, bank availability, operational support, and customer expectations. \"Fast\" is only one dimension.\n\nThe mental model:\n\n```txt\nSpeed:\nHow quickly money moves.\n\nFinality:\nCan the transaction be reversed?\n\nCoverage:\nCan the sender and receiver actually use the rail?\n\nRisk:\nWhat fraud, error, or support burden does the rail create?\n```\n\nThe TPM should select the rail based on the user job and risk, not hype."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech wants instant payouts to consumers.\n\nPossible options:\n\n```txt\nACH:\nBroad coverage, lower cost, slower, return risk.\n\nReal-time payment rail:\nFast, often more final, coverage depends on participating banks, fraud decisions must be strong before send.\n\nCard push payout:\nFast for eligible cards, fees and limits vary, network rules matter.\n```\n\nThe best choice may be a routing strategy, not one rail forever."
    },
    {
      "title": "Make it practical",
      "body": "Here is a rail-selection artifact:\n\n```txt\nUse case:\nInstant consumer payout\n\nDecision dimensions:\n- Eligible banks/cards\n- Speed promise\n- Transaction limits\n- Cost per transaction\n- Reversibility\n- Fraud screening before send\n- Error handling\n- Support tooling\n- Reconciliation\n- Partner outages\n\nRouting policy:\n- Use instant rail when recipient is eligible and risk score is low\n- Use ACH when speed is less critical or instant rail is unavailable\n- Hold for review when fraud risk is high\n- Fall back only if customer promise still holds\n```\n\nThe product should not promise instant if the routing engine cannot reliably deliver it."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is ignoring finality. Fast irreversible payments require stronger pre-send controls.\n\nAnother mistake is hiding eligibility. Users need to know whether their bank or card can receive instant payouts.\n\nA third mistake is not designing fallback behavior. If a rail is unavailable, the product needs a clear next state."
    }
  ],
  "answer": "Payment rail selection means choosing the network or method used to move money.",
  "reasoning": "Here is a rail-selection artifact:\n\n```txt\nUse case:\nInstant consumer payout\n\nDecision dimensions:\n- Eligible banks/cards\n- Speed promise\n- Transaction limits\n- Cost per transaction\n- Reversibility\n- Fraud screening before send\n- Error handling\n- Support tooling\n- Reconciliation\n- Partner outages\n\nRouting policy:\n- Use instant rail when recipient is eligible and risk score is low\n- Use ACH when speed is less critical or instant rail is unavailable\n- Hold for review when fraud risk is high\n- Fall back only if customer promise still holds\n```\n\nThe product should not promise instant if the routing engine cannot reliably deliver it.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is fastest not always best?",
    "What does payment finality change?",
    "What makes coverage important?",
    "When should routing hold for risk review?",
    "How would you explain fallback to a user?"
  ],
  "interviewAnswer": "I would choose payment rails by comparing speed, coverage, limits, cost, finality, fraud controls, support burden, error handling, reconciliation, and partner reliability. For real-time products, I would often use routing rules: instant when eligible and low risk, slower rail when acceptable, and review when risk is high.\n\nA strong answer shows that rail selection is product strategy plus operational risk.",
  "sourceLinks": [
    {
      "label": "Federal Reserve: FedNow Service",
      "url": "https://www.frbservices.org/financial-services/fednow"
    },
    {
      "label": "The Clearing House: RTP Network",
      "url": "https://www.theclearinghouse.org/payment-systems/rtp"
    }
  ],
  "beginnerExplanation": "Payment rail selection means choosing the network or method used to move money.\n\nThe beginner mistake is choosing the fastest rail by default. A real-time payment rail may be fast, but the product also needs coverage, limits, reversibility, fraud controls, cost, bank availability, operational support, and customer expectations. \"Fast\" is only one dimension.\n\nThe mental model:\n\n```txt\nSpeed:\nHow quickly money moves.\n\nFinality:\nCan the transaction be reversed?\n\nCoverage:\nCan the sender and receiver actually use the rail?\n\nRisk:\nWhat fraud, error, or support burden does the rail create?\n```\n\nThe TPM should select the rail based on the user job and risk, not hype.",
  "example": "Imagine a fintech wants instant payouts to consumers.\n\nPossible options:\n\n```txt\nACH:\nBroad coverage, lower cost, slower, return risk.\n\nReal-time payment rail:\nFast, often more final, coverage depends on participating banks, fraud decisions must be strong before send.\n\nCard push payout:\nFast for eligible cards, fees and limits vary, network rules matter.\n```\n\nThe best choice may be a routing strategy, not one rail forever.",
  "commonMistakes": "A common mistake is ignoring finality. Fast irreversible payments require stronger pre-send controls.\n\nAnother mistake is hiding eligibility. Users need to know whether their bank or card can receive instant payouts.\n\nA third mistake is not designing fallback behavior. If a rail is unavailable, the product needs a clear next state."
};
