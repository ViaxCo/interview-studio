import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-eval-dataset-governance",
  "track": "TPM",
  "category": "AI Governance",
  "level": "Advanced",
  "question": "How would you govern evaluation datasets for an AI feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An evaluation dataset is the set of test cases used to decide whether an AI feature is good and safe enough.\n\nThe beginner mistake is treating evals as random examples in a spreadsheet. A useful eval dataset has coverage, ownership, versioning, expected behavior, severity labels, and a process for adding new failures from production.\n\nThe mental model:\n\n```txt\nTest case:\nOne scenario the AI must handle.\n\nExpected behavior:\nWhat a good answer or action looks like.\n\nGovernance:\nWho owns, updates, approves, and uses the dataset.\n```\n\nFor fintech AI, eval datasets are part of product risk management."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI assistant answers card dispute questions.\n\nA weak eval set has ten friendly questions like:\n\n```txt\nHow do I dispute a charge?\nWhere can I see my case status?\n```\n\nA stronger eval set includes edge cases:\n\n```txt\nUser threatens legal action.\nUser asks for exact fraud rules.\nUser says they are vulnerable and cannot pay.\nUser asks AI to submit false evidence.\nUser asks for another customer's data.\n```\n\nThe dataset should test the situations that could hurt users or the company."
    },
    {
      "title": "Make it practical",
      "body": "Here is an eval dataset artifact:\n\n```txt\nDataset:\nAI dispute support eval v3\n\nFields:\n- Scenario ID\n- User message\n- Product context\n- Expected answer\n- Prohibited behavior\n- Required escalation\n- Severity if failed\n- Source policy\n- Owner\n- Last reviewed date\n\nCoverage:\n- Normal FAQ\n- Edge cases\n- Fraud attempts\n- Privacy requests\n- Complaints\n- Vulnerable customer language\n- Unsupported legal/financial advice\n\nGovernance:\n- Version every dataset change\n- Review quarterly\n- Add production failures\n- Require passing thresholds before launch\n```\n\nThe eval dataset should mature as the product learns."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is evaluating only happy paths. AI often fails in weird, high-risk, emotional, or adversarial cases.\n\nAnother mistake is not versioning evals. If the dataset changes, score comparisons may become misleading.\n\nA third mistake is having no owner. An ownerless eval set becomes stale quickly."
    }
  ],
  "answer": "An evaluation dataset is the set of test cases used to decide whether an AI feature is good and safe enough.",
  "reasoning": "Here is an eval dataset artifact:\n\n```txt\nDataset:\nAI dispute support eval v3\n\nFields:\n- Scenario ID\n- User message\n- Product context\n- Expected answer\n- Prohibited behavior\n- Required escalation\n- Severity if failed\n- Source policy\n- Owner\n- Last reviewed date\n\nCoverage:\n- Normal FAQ\n- Edge cases\n- Fraud attempts\n- Privacy requests\n- Complaints\n- Vulnerable customer language\n- Unsupported legal/financial advice\n\nGovernance:\n- Version every dataset change\n- Review quarterly\n- Add production failures\n- Require passing thresholds before launch\n```\n\nThe eval dataset should mature as the product learns.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is an eval dataset more than a list of prompts?",
    "What fields should each test case include?",
    "Why should production failures become eval cases?",
    "What is the risk of changing evals without versioning?",
    "Who should approve high-risk eval coverage?"
  ],
  "interviewAnswer": "I would govern eval datasets with scenario coverage, expected behavior, prohibited behavior, severity, source policy, owners, versioning, review cadence, production-failure intake, and launch thresholds. For fintech AI, evals should include normal, edge, adversarial, privacy, complaint, and regulated workflows.\n\nA strong answer treats evals as product infrastructure for safety and quality.",
  "sourceLinks": [
    {
      "label": "Azure AI Foundry evaluations",
      "url": "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/evaluate-generative-ai-app?source=recommendations"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "An evaluation dataset is the set of test cases used to decide whether an AI feature is good and safe enough.\n\nThe beginner mistake is treating evals as random examples in a spreadsheet. A useful eval dataset has coverage, ownership, versioning, expected behavior, severity labels, and a process for adding new failures from production.\n\nThe mental model:\n\n```txt\nTest case:\nOne scenario the AI must handle.\n\nExpected behavior:\nWhat a good answer or action looks like.\n\nGovernance:\nWho owns, updates, approves, and uses the dataset.\n```\n\nFor fintech AI, eval datasets are part of product risk management.",
  "example": "Imagine an AI assistant answers card dispute questions.\n\nA weak eval set has ten friendly questions like:\n\n```txt\nHow do I dispute a charge?\nWhere can I see my case status?\n```\n\nA stronger eval set includes edge cases:\n\n```txt\nUser threatens legal action.\nUser asks for exact fraud rules.\nUser says they are vulnerable and cannot pay.\nUser asks AI to submit false evidence.\nUser asks for another customer's data.\n```\n\nThe dataset should test the situations that could hurt users or the company.",
  "commonMistakes": "A common mistake is evaluating only happy paths. AI often fails in weird, high-risk, emotional, or adversarial cases.\n\nAnother mistake is not versioning evals. If the dataset changes, score comparisons may become misleading.\n\nA third mistake is having no owner. An ownerless eval set becomes stale quickly."
};
