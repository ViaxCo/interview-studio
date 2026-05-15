import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-governance-risk-tiering",
  "track": "TPM",
  "category": "AI Governance",
  "level": "Intermediate",
  "question": "How would you create a risk-tiering model for AI features?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.\n\nThe beginner mistake is treating all AI features the same. An AI that rewrites marketing copy is not the same as an AI that recommends whether a customer gets credit, flags fraud, blocks an account, or drafts regulated support responses.\n\nThe mental model:\n\n```txt\nLow-risk AI:\nHelps with low-stakes productivity. Human can easily verify output.\n\nMedium-risk AI:\nInfluences user experience or business decisions, but humans can review before harm.\n\nHigh-risk AI:\nAffects money, access, eligibility, identity, compliance, safety, or legal outcomes.\n```\n\nThe TPM's job is to make the risk visible early so the team does not discover governance requirements after building the wrong product."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine three AI ideas:\n\n```txt\nIdea 1:\nSummarize internal meeting notes.\n\nIdea 2:\nDraft support replies about failed transfers.\n\nIdea 3:\nRecommend whether to block a suspicious account.\n```\n\nAll use AI, but they should not share the same launch process. The account-blocking system needs stricter review, human oversight, audit logs, false-positive monitoring, and appeal paths."
    },
    {
      "title": "Make it practical",
      "body": "Here is a risk-tiering artifact:\n\n```txt\nAI feature:\nFraud risk recommendation\n\nDecision influence:\nModel recommends allow, review, hold, or block.\n\nPotential harms:\n- Legitimate user blocked\n- Fraud allowed\n- Compliance issue missed\n- Analyst overtrusts model\n\nRisk tier:\nHigh\n\nRequired controls:\n- Human review before block\n- Model score explanation for analyst\n- Audit trail for recommendation and decision\n- False-positive monitoring\n- Drift monitoring\n- Weekly risk review during beta\n- Clear appeal or support path\n```\n\nFor lower-risk features, controls can be lighter. But every tier should have a clear reason."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is tiering based on model sophistication instead of user harm. A simple model can be high risk if it affects money or access.\n\nAnother mistake is using governance as a blocker only at the end. Tiering should happen during discovery.\n\nA third mistake is not revisiting risk after launch. A feature can become higher risk as usage grows."
    }
  ],
  "answer": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.",
  "reasoning": "Here is a risk-tiering artifact:\n\n```txt\nAI feature:\nFraud risk recommendation\n\nDecision influence:\nModel recommends allow, review, hold, or block.\n\nPotential harms:\n- Legitimate user blocked\n- Fraud allowed\n- Compliance issue missed\n- Analyst overtrusts model\n\nRisk tier:\nHigh\n\nRequired controls:\n- Human review before block\n- Model score explanation for analyst\n- Audit trail for recommendation and decision\n- False-positive monitoring\n- Drift monitoring\n- Weekly risk review during beta\n- Clear appeal or support path\n```\n\nFor lower-risk features, controls can be lighter. But every tier should have a clear reason.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should AI features be risk-tiered?",
    "What makes an AI feature high risk?",
    "Why is user harm more important than model complexity?",
    "What controls might a high-risk AI feature need?",
    "When should the risk tier be revisited?"
  ],
  "interviewAnswer": "I would create AI risk tiers by looking at the decision the AI influences, potential user harm, data sensitivity, reversibility, human oversight, regulatory exposure, and operational impact.\n\nA strong TPM answer shows that AI governance is proportional: light enough for low-risk features, strict enough for money, identity, compliance, and access decisions.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Microsoft: Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    }
  ],
  "beginnerExplanation": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.\n\nThe beginner mistake is treating all AI features the same. An AI that rewrites marketing copy is not the same as an AI that recommends whether a customer gets credit, flags fraud, blocks an account, or drafts regulated support responses.\n\nThe mental model:\n\n```txt\nLow-risk AI:\nHelps with low-stakes productivity. Human can easily verify output.\n\nMedium-risk AI:\nInfluences user experience or business decisions, but humans can review before harm.\n\nHigh-risk AI:\nAffects money, access, eligibility, identity, compliance, safety, or legal outcomes.\n```\n\nThe TPM's job is to make the risk visible early so the team does not discover governance requirements after building the wrong product.",
  "example": "Imagine three AI ideas:\n\n```txt\nIdea 1:\nSummarize internal meeting notes.\n\nIdea 2:\nDraft support replies about failed transfers.\n\nIdea 3:\nRecommend whether to block a suspicious account.\n```\n\nAll use AI, but they should not share the same launch process. The account-blocking system needs stricter review, human oversight, audit logs, false-positive monitoring, and appeal paths.",
  "commonMistakes": "A common mistake is tiering based on model sophistication instead of user harm. A simple model can be high risk if it affects money or access.\n\nAnother mistake is using governance as a blocker only at the end. Tiering should happen during discovery.\n\nA third mistake is not revisiting risk after launch. A feature can become higher risk as usage grows."
};
