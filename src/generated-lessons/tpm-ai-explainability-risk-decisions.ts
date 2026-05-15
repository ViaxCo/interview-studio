import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-explainability-risk-decisions",
  "track": "TPM",
  "category": "AI & Risk",
  "level": "Advanced",
  "question": "How would you make AI-assisted risk decisions explainable?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Explainability means the team can understand and communicate why an AI-assisted risk decision happened at the right level for the audience.\n\nThe beginner mistake is thinking explainability means showing every model detail to every user. Different audiences need different explanations: analysts need evidence, support needs safe summaries, customers need understandable reasons, and auditors need records.\n\nThe mental model:\n\n```txt\nInternal explanation:\nWhat signals influenced the recommendation?\n\nCustomer explanation:\nWhat can we safely and clearly tell the user?\n\nAudit explanation:\nWhat evidence proves the process was controlled?\n```\n\nThe TPM should define explanation requirements before launch."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI model recommends holding a suspicious payout.\n\nAn analyst may need:\n\n```txt\nNew device, new bank account, high amount, recipient country risk, similar prior fraud pattern\n```\n\nA customer may only see:\n\n```txt\nWe need to review this payout before it can be completed. We will update you when review is complete.\n```\n\nThose are not contradictions. They are explanations for different audiences."
    },
    {
      "title": "Make it practical",
      "body": "Here is an explainability artifact:\n\n```txt\nAI decision:\nRecommend payout hold\n\nAudience explanations:\n\nAnalyst:\n- Top risk signals\n- Similar cases\n- Missing data\n- Model/rule version\n- Confidence band\n\nSupport:\n- Customer-visible status\n- Approved next steps\n- What not to disclose\n\nCustomer:\n- Clear status\n- Expected next step\n- Appeal or support path if applicable\n\nAudit:\n- Input data snapshot\n- Recommendation\n- Human decision\n- Timestamp\n- Override reason\n```\n\nExplainability should help decisions be reviewed, challenged, and improved."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is exposing sensitive fraud signals to customers. That can teach attackers.\n\nAnother mistake is giving analysts only a score. A score without reasons makes human review weak.\n\nA third mistake is forgetting audit needs. Months later, the company may need to reconstruct why a decision happened."
    }
  ],
  "answer": "Explainability means the team can understand and communicate why an AI-assisted risk decision happened at the right level for the audience.",
  "reasoning": "Here is an explainability artifact:\n\n```txt\nAI decision:\nRecommend payout hold\n\nAudience explanations:\n\nAnalyst:\n- Top risk signals\n- Similar cases\n- Missing data\n- Model/rule version\n- Confidence band\n\nSupport:\n- Customer-visible status\n- Approved next steps\n- What not to disclose\n\nCustomer:\n- Clear status\n- Expected next step\n- Appeal or support path if applicable\n\nAudit:\n- Input data snapshot\n- Recommendation\n- Human decision\n- Timestamp\n- Override reason\n```\n\nExplainability should help decisions be reviewed, challenged, and improved.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why do different audiences need different explanations?",
    "What should analysts see that customers should not?",
    "What records matter for audit?",
    "How can explanations improve model quality?",
    "Why is a risk score alone insufficient?"
  ],
  "interviewAnswer": "I would make AI-assisted risk decisions explainable by defining audience-specific explanations for analysts, support, customers, and audit. I would show analysts signals and evidence, give support safe status and next steps, give customers clear allowed reasons, and log inputs, model version, recommendation, human decision, and overrides.\n\nA strong answer balances transparency, safety, and auditability.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Federal Reserve: Model Risk Management",
      "url": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf"
    }
  ],
  "beginnerExplanation": "Explainability means the team can understand and communicate why an AI-assisted risk decision happened at the right level for the audience.\n\nThe beginner mistake is thinking explainability means showing every model detail to every user. Different audiences need different explanations: analysts need evidence, support needs safe summaries, customers need understandable reasons, and auditors need records.\n\nThe mental model:\n\n```txt\nInternal explanation:\nWhat signals influenced the recommendation?\n\nCustomer explanation:\nWhat can we safely and clearly tell the user?\n\nAudit explanation:\nWhat evidence proves the process was controlled?\n```\n\nThe TPM should define explanation requirements before launch.",
  "example": "Imagine an AI model recommends holding a suspicious payout.\n\nAn analyst may need:\n\n```txt\nNew device, new bank account, high amount, recipient country risk, similar prior fraud pattern\n```\n\nA customer may only see:\n\n```txt\nWe need to review this payout before it can be completed. We will update you when review is complete.\n```\n\nThose are not contradictions. They are explanations for different audiences.",
  "commonMistakes": "A common mistake is exposing sensitive fraud signals to customers. That can teach attackers.\n\nAnother mistake is giving analysts only a score. A score without reasons makes human review weak.\n\nA third mistake is forgetting audit needs. Months later, the company may need to reconstruct why a decision happened."
};
