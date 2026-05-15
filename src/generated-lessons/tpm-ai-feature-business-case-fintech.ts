import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-feature-business-case-fintech",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you build a business case for an AI feature in fintech?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An AI business case explains why an AI feature is worth building, what value it creates, what risks it introduces, and how the team will know it worked.\n\nThe beginner mistake is saying \"AI will make us faster.\" Faster at what? For whom? With what quality loss? At what model cost? With what compliance risk? A strong TPM makes the value measurable and the risk visible.\n\nThe mental model:\n\n```txt\nValue:\nWhat outcome improves?\n\nCost:\nWhat does it take to build and run?\n\nRisk:\nWhat can go wrong?\n\nEvidence:\nHow will we prove it?\n```\n\nAI should solve a specific product problem, not decorate the roadmap."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine proposing an AI support assistant for dispute questions.\n\nWeak business case:\n\n```txt\nIt will reduce support tickets.\n```\n\nStronger business case:\n\n```txt\nGoal:\nReduce repetitive dispute status contacts by 25%.\n\nGuardrails:\nNo increase in complaint rate, incorrect guidance, or escalations missed.\n\nCost:\nModel cost per resolved contact under target.\n\nEvidence:\nPilot with human review and eval set before full launch.\n```\n\nNow leadership can judge the tradeoff."
    },
    {
      "title": "Make it practical",
      "body": "Here is an AI business case artifact:\n\n```txt\nFeature:\nAI dispute support assistant\n\nUser problem:\nCustomers do not understand dispute status and next steps.\n\nBusiness value:\nReduce repetitive support contacts and improve response speed.\n\nSuccess metrics:\n- Contact deflection with satisfaction maintained\n- Correct answer rate\n- Escalation accuracy\n- Cost per resolved issue\n- Complaint rate\n\nRisks:\n- Wrong regulated guidance\n- Hallucinated policy\n- Privacy leakage\n- Missed escalation\n\nLaunch evidence:\n- Eval set passed\n- Human review pilot\n- Cost model approved\n- Incident plan ready\n```\n\nThe business case should include reasons not to launch."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is ignoring operational cost. AI cost includes model calls, evaluation, review, monitoring, incident response, and content maintenance.\n\nAnother mistake is counting automation as success even when quality drops.\n\nA third mistake is not naming guardrails. Without guardrails, the team may optimize the wrong metric."
    }
  ],
  "answer": "An AI business case explains why an AI feature is worth building, what value it creates, what risks it introduces, and how the team will know it worked.",
  "reasoning": "Here is an AI business case artifact:\n\n```txt\nFeature:\nAI dispute support assistant\n\nUser problem:\nCustomers do not understand dispute status and next steps.\n\nBusiness value:\nReduce repetitive support contacts and improve response speed.\n\nSuccess metrics:\n- Contact deflection with satisfaction maintained\n- Correct answer rate\n- Escalation accuracy\n- Cost per resolved issue\n- Complaint rate\n\nRisks:\n- Wrong regulated guidance\n- Hallucinated policy\n- Privacy leakage\n- Missed escalation\n\nLaunch evidence:\n- Eval set passed\n- Human review pilot\n- Cost model approved\n- Incident plan ready\n```\n\nThe business case should include reasons not to launch.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What outcome should the AI improve?",
    "What costs exist beyond development?",
    "What risks are specific to fintech?",
    "What guardrail metrics would block launch?",
    "How would you prove the feature works before scaling?"
  ],
  "interviewAnswer": "I would build the business case around a specific user problem, measurable value, model and operations cost, risk, guardrails, launch evidence, and stop conditions. For fintech AI, I would include quality, complaints, escalation accuracy, privacy, compliance, and incident readiness.\n\nA strong answer shows that AI must earn its place in the product.",
  "sourceLinks": [
    {
      "label": "Microsoft Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "An AI business case explains why an AI feature is worth building, what value it creates, what risks it introduces, and how the team will know it worked.\n\nThe beginner mistake is saying \"AI will make us faster.\" Faster at what? For whom? With what quality loss? At what model cost? With what compliance risk? A strong TPM makes the value measurable and the risk visible.\n\nThe mental model:\n\n```txt\nValue:\nWhat outcome improves?\n\nCost:\nWhat does it take to build and run?\n\nRisk:\nWhat can go wrong?\n\nEvidence:\nHow will we prove it?\n```\n\nAI should solve a specific product problem, not decorate the roadmap.",
  "example": "Imagine proposing an AI support assistant for dispute questions.\n\nWeak business case:\n\n```txt\nIt will reduce support tickets.\n```\n\nStronger business case:\n\n```txt\nGoal:\nReduce repetitive dispute status contacts by 25%.\n\nGuardrails:\nNo increase in complaint rate, incorrect guidance, or escalations missed.\n\nCost:\nModel cost per resolved contact under target.\n\nEvidence:\nPilot with human review and eval set before full launch.\n```\n\nNow leadership can judge the tradeoff.",
  "commonMistakes": "A common mistake is ignoring operational cost. AI cost includes model calls, evaluation, review, monitoring, incident response, and content maintenance.\n\nAnother mistake is counting automation as success even when quality drops.\n\nA third mistake is not naming guardrails. Without guardrails, the team may optimize the wrong metric."
};
