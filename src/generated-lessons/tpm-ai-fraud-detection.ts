import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-fraud-detection",
  "track": "TPM",
  "category": "AI & Risk",
  "level": "Intermediate",
  "question": "How would you design an AI-assisted fraud detection product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.\n\nThe beginner mistake is thinking the model is the product. The product is the full decision system: signals, model score, rules, human review, user action, appeals, monitoring, and feedback.\n\nFraud systems have two painful error types:\n\n```txt\nFalse negative:\nBad activity is allowed.\n\nFalse positive:\nA legitimate user is blocked, delayed, or reviewed.\n```\n\nThe TPM must care about both. A fraud model that blocks everyone may reduce fraud but destroy the product."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a payment app wants AI to detect suspicious transfers.\n\nA weak plan says:\n\n```txt\nUse a fraud model to block risky transfers.\n```\n\nA strong plan defines decisions:\n\n```txt\nLow risk:\nAllow automatically.\n\nMedium risk:\nStep-up verification or manual review.\n\nHigh risk:\nBlock or hold pending review.\n\nUnknown:\nUse conservative limits and gather more evidence.\n```\n\nThe model score should not be the only input. Rules, known fraud patterns, sanctions/compliance checks, user history, and operational capacity all matter."
    },
    {
      "title": "Make it practical",
      "body": "Here is an AI fraud product artifact:\n\n```txt\nGoal:\nReduce fraud loss without creating unacceptable false positives.\n\nInputs:\n- Transaction amount\n- Sender history\n- Recipient history\n- Device and IP signals\n- Velocity\n- Corridor risk\n- Failed verification attempts\n- Chargeback history\n\nDecision outputs:\n- Allow\n- Step-up verification\n- Manual review\n- Temporary hold\n- Block\n\nHuman review:\n- Show top risk signals\n- Show similar prior activity\n- Let analyst record decision reason\n- Feed confirmed outcomes back into evaluation\n\nGuardrail metrics:\n- Fraud loss\n- False-positive rate\n- Manual review backlog\n- Average review time\n- Legitimate users blocked\n- Support contacts\n```\n\nThe TPM also needs an evaluation plan:\n\n```txt\nBefore launch:\nBacktest on historical transactions.\n\nDuring beta:\nRun in shadow mode, compare model recommendation to current process.\n\nAfter launch:\nMonitor drift, false positives, fraud loss, and analyst overrides.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing only fraud loss. If false positives explode, the product harms good users.\n\nAnother mistake is launching without human review tooling. Fraud teams need explanations, queues, and decision recording.\n\nA third mistake is not monitoring model drift. Fraud patterns change as attackers adapt."
    }
  ],
  "answer": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.",
  "reasoning": "Here is an AI fraud product artifact:\n\n```txt\nGoal:\nReduce fraud loss without creating unacceptable false positives.\n\nInputs:\n- Transaction amount\n- Sender history\n- Recipient history\n- Device and IP signals\n- Velocity\n- Corridor risk\n- Failed verification attempts\n- Chargeback history\n\nDecision outputs:\n- Allow\n- Step-up verification\n- Manual review\n- Temporary hold\n- Block\n\nHuman review:\n- Show top risk signals\n- Show similar prior activity\n- Let analyst record decision reason\n- Feed confirmed outcomes back into evaluation\n\nGuardrail metrics:\n- Fraud loss\n- False-positive rate\n- Manual review backlog\n- Average review time\n- Legitimate users blocked\n- Support contacts\n```\n\nThe TPM also needs an evaluation plan:\n\n```txt\nBefore launch:\nBacktest on historical transactions.\n\nDuring beta:\nRun in shadow mode, compare model recommendation to current process.\n\nAfter launch:\nMonitor drift, false positives, fraud loss, and analyst overrides.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is the model not the whole product?",
    "What is a false positive in fraud detection?",
    "What decisions can sit between allow and block?",
    "Why is shadow mode useful?",
    "What should human reviewers see?"
  ],
  "interviewAnswer": "I would design AI fraud detection as a decision system: risk signals, model scoring, rules, human review, user actions, feedback loops, monitoring, and guardrails. I would backtest, use shadow mode, launch gradually, and track fraud loss, false positives, review backlog, drift, and customer harm.\n\nA strong answer balances risk reduction with legitimate-user experience.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Stripe Docs: Fraud prevention rules",
      "url": "https://docs.stripe.com/radar/rules"
    }
  ],
  "beginnerExplanation": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.\n\nThe beginner mistake is thinking the model is the product. The product is the full decision system: signals, model score, rules, human review, user action, appeals, monitoring, and feedback.\n\nFraud systems have two painful error types:\n\n```txt\nFalse negative:\nBad activity is allowed.\n\nFalse positive:\nA legitimate user is blocked, delayed, or reviewed.\n```\n\nThe TPM must care about both. A fraud model that blocks everyone may reduce fraud but destroy the product.",
  "example": "Imagine a payment app wants AI to detect suspicious transfers.\n\nA weak plan says:\n\n```txt\nUse a fraud model to block risky transfers.\n```\n\nA strong plan defines decisions:\n\n```txt\nLow risk:\nAllow automatically.\n\nMedium risk:\nStep-up verification or manual review.\n\nHigh risk:\nBlock or hold pending review.\n\nUnknown:\nUse conservative limits and gather more evidence.\n```\n\nThe model score should not be the only input. Rules, known fraud patterns, sanctions/compliance checks, user history, and operational capacity all matter.",
  "commonMistakes": "A common mistake is optimizing only fraud loss. If false positives explode, the product harms good users.\n\nAnother mistake is launching without human review tooling. Fraud teams need explanations, queues, and decision recording.\n\nA third mistake is not monitoring model drift. Fraud patterns change as attackers adapt."
};
