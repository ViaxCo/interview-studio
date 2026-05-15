import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-model-drift-risk-systems",
  "track": "TPM",
  "category": "AI & Risk",
  "level": "Intermediate",
  "question": "How would you monitor model drift in an AI risk system?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.\n\nThe beginner mistake is thinking a model that performed well at launch will keep performing well. Risk systems need ongoing monitoring because the data and adversaries do not stay still.\n\nThere are two useful drift ideas:\n\n```txt\nData drift:\nInputs change. Example: more transactions now come from a new country.\n\nPerformance drift:\nOutcomes get worse. Example: false positives rise or fraud misses increase.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI fraud model that worked well for US card payments. The company launches a new remittance corridor. Transaction sizes, names, devices, funding sources, and fraud behavior now look different.\n\nIf the model is not monitored, it may:\n\n```txt\nBlock too many legitimate users.\nMiss new fraud patterns.\nCreate analyst backlog.\nTreat normal corridor behavior as suspicious.\nOverfit to old fraud signals.\n```\n\nThe TPM should plan monitoring before expansion."
    },
    {
      "title": "Make it practical",
      "body": "Here is a drift monitoring artifact:\n\n```txt\nSystem:\nAI fraud risk model\n\nInput drift metrics:\n- Transaction amount distribution\n- Corridor mix\n- Device mix\n- New recipient rate\n- User tenure distribution\n\nOutcome metrics:\n- Confirmed fraud rate\n- False-positive rate\n- Manual review rate\n- Analyst override rate\n- Appeal success rate\n- Fraud loss after approval\n\nSegments:\n- Corridor\n- Funding method\n- New versus returning users\n- Business versus consumer\n- High-value transfers\n\nReview cadence:\n- Daily during new corridor launch\n- Weekly for normal operations\n- Immediate review after fraud spike or policy change\n\nActions:\n- Adjust thresholds\n- Add rules\n- Retrain model\n- Narrow rollout\n- Increase manual review\n- Pause automated decisions\n```\n\nThe TPM should also define ownership. Data science may monitor model metrics, but product owns whether the current behavior is acceptable for users and the business."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is monitoring only aggregate performance. Drift often appears in one segment first.\n\nAnother mistake is waiting for fraud losses before acting. Leading indicators like analyst overrides and false positives can warn earlier.\n\nA third mistake is not documenting model changes. If performance changes after retraining, the team needs traceability."
    }
  ],
  "answer": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.",
  "reasoning": "Here is a drift monitoring artifact:\n\n```txt\nSystem:\nAI fraud risk model\n\nInput drift metrics:\n- Transaction amount distribution\n- Corridor mix\n- Device mix\n- New recipient rate\n- User tenure distribution\n\nOutcome metrics:\n- Confirmed fraud rate\n- False-positive rate\n- Manual review rate\n- Analyst override rate\n- Appeal success rate\n- Fraud loss after approval\n\nSegments:\n- Corridor\n- Funding method\n- New versus returning users\n- Business versus consumer\n- High-value transfers\n\nReview cadence:\n- Daily during new corridor launch\n- Weekly for normal operations\n- Immediate review after fraud spike or policy change\n\nActions:\n- Adjust thresholds\n- Add rules\n- Retrain model\n- Narrow rollout\n- Increase manual review\n- Pause automated decisions\n```\n\nThe TPM should also define ownership. Data science may monitor model metrics, but product owns whether the current behavior is acceptable for users and the business.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is model drift?",
    "What is the difference between data drift and performance drift?",
    "Why should drift be monitored by segment?",
    "What early warning metrics matter?",
    "What actions can the team take when drift appears?"
  ],
  "interviewAnswer": "I would monitor model drift by tracking input distributions, outcome metrics, false positives, fraud misses, overrides, appeals, and segment-level performance. I would define review cadence, alert thresholds, ownership, and actions like threshold changes, retraining, added rules, or pausing automation.\n\nA strong TPM answer treats AI risk systems as living products that need continuous governance.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Federal Reserve: SR 11-7 model risk management",
      "url": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf"
    }
  ],
  "beginnerExplanation": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.\n\nThe beginner mistake is thinking a model that performed well at launch will keep performing well. Risk systems need ongoing monitoring because the data and adversaries do not stay still.\n\nThere are two useful drift ideas:\n\n```txt\nData drift:\nInputs change. Example: more transactions now come from a new country.\n\nPerformance drift:\nOutcomes get worse. Example: false positives rise or fraud misses increase.\n```",
  "example": "Imagine an AI fraud model that worked well for US card payments. The company launches a new remittance corridor. Transaction sizes, names, devices, funding sources, and fraud behavior now look different.\n\nIf the model is not monitored, it may:\n\n```txt\nBlock too many legitimate users.\nMiss new fraud patterns.\nCreate analyst backlog.\nTreat normal corridor behavior as suspicious.\nOverfit to old fraud signals.\n```\n\nThe TPM should plan monitoring before expansion.",
  "commonMistakes": "A common mistake is monitoring only aggregate performance. Drift often appears in one segment first.\n\nAnother mistake is waiting for fraud losses before acting. Leading indicators like analyst overrides and false positives can warn earlier.\n\nA third mistake is not documenting model changes. If performance changes after retraining, the team needs traceability."
};
