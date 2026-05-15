import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-credit-underwriting",
  "track": "TPM",
  "category": "AI & Fintech",
  "level": "Intermediate",
  "question": "How would you approach AI-assisted credit underwriting as a TPM?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.\n\nThe beginner mistake is treating underwriting AI like a normal recommendation model. Credit decisions are high-stakes. They affect people's access to money, business growth, housing, and financial opportunity. They also come with regulatory, fairness, explainability, and model-risk obligations.\n\nThe TPM must ask:\n\n```txt\nWhat decision does the model support?\nWhat data is used?\nCan we explain adverse outcomes?\nHow do we test fairness and performance?\nWho can override the model?\nHow do we monitor drift?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a lender wants to use cash-flow data and machine learning to approve small-business loans.\n\nA weak product requirement says:\n\n```txt\nUse AI to approve loans faster.\n```\n\nA stronger requirement separates the system:\n\n```txt\nInputs:\nBank transactions, revenue trends, repayment history, business age, existing debt, fraud signals.\n\nModel output:\nRisk score and recommended limit.\n\nDecision:\nApprove, decline, request more info, or route to manual review.\n\nExplanation:\nSpecific principal reasons for adverse action.\n\nControls:\nFair lending review, model validation, override workflow, audit trail.\n```\n\nThe TPM should not let the product become a black box."
    },
    {
      "title": "Make it practical",
      "body": "Here is an underwriting requirements artifact:\n\n```txt\nFeature:\nAI-assisted small-business credit decisioning\n\nUser value:\nFaster decisions and fairer access for businesses with strong cash flow but limited traditional credit history.\n\nDecision states:\n- Approved\n- Approved with lower limit\n- More information needed\n- Manual review\n- Declined\n\nRequired evidence:\n- Model performance on historical data\n- Fairness analysis across protected or proxy groups where legally appropriate\n- Reason-code generation\n- Manual-review policy\n- Model monitoring dashboard\n- Adverse-action notice workflow\n\nMetrics:\n- Approval rate\n- Default rate\n- Manual review rate\n- Time to decision\n- Override rate\n- Adverse-action reason distribution\n- Model drift indicators\n```\n\nThe TPM should also define what the model cannot do:\n\n```txt\nNon-goals:\n- The model does not make unreviewable decisions.\n- The model does not use prohibited data.\n- The model does not generate vague decline reasons.\n- The model does not launch without validation and monitoring.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing approval speed without protecting decision quality.\n\nAnother mistake is ignoring explainability until legal review. If the team cannot explain declines, the product is not ready.\n\nA third mistake is not defining human oversight. Manual review and overrides need policy, permissions, and audit logs."
    }
  ],
  "answer": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.",
  "reasoning": "Here is an underwriting requirements artifact:\n\n```txt\nFeature:\nAI-assisted small-business credit decisioning\n\nUser value:\nFaster decisions and fairer access for businesses with strong cash flow but limited traditional credit history.\n\nDecision states:\n- Approved\n- Approved with lower limit\n- More information needed\n- Manual review\n- Declined\n\nRequired evidence:\n- Model performance on historical data\n- Fairness analysis across protected or proxy groups where legally appropriate\n- Reason-code generation\n- Manual-review policy\n- Model monitoring dashboard\n- Adverse-action notice workflow\n\nMetrics:\n- Approval rate\n- Default rate\n- Manual review rate\n- Time to decision\n- Override rate\n- Adverse-action reason distribution\n- Model drift indicators\n```\n\nThe TPM should also define what the model cannot do:\n\n```txt\nNon-goals:\n- The model does not make unreviewable decisions.\n- The model does not use prohibited data.\n- The model does not generate vague decline reasons.\n- The model does not launch without validation and monitoring.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is credit underwriting high-stakes?",
    "What is an adverse action notice?",
    "Why does model validation matter?",
    "What should be monitored after launch?",
    "Why are vague decline reasons a problem?"
  ],
  "interviewAnswer": "I would approach AI-assisted underwriting by defining the decision, data inputs, model output, human review, explainability, adverse-action workflow, fairness testing, model validation, monitoring, overrides, and audit trail.\n\nA strong TPM answer shows that AI credit products must be fast, useful, explainable, governed, and fair enough to operate responsibly.",
  "sourceLinks": [
    {
      "label": "CFPB: Adverse action notices and complex algorithms",
      "url": "https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/"
    },
    {
      "label": "Federal Reserve: SR 11-7 model risk management",
      "url": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf"
    }
  ],
  "beginnerExplanation": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.\n\nThe beginner mistake is treating underwriting AI like a normal recommendation model. Credit decisions are high-stakes. They affect people's access to money, business growth, housing, and financial opportunity. They also come with regulatory, fairness, explainability, and model-risk obligations.\n\nThe TPM must ask:\n\n```txt\nWhat decision does the model support?\nWhat data is used?\nCan we explain adverse outcomes?\nHow do we test fairness and performance?\nWho can override the model?\nHow do we monitor drift?\n```",
  "example": "Imagine a lender wants to use cash-flow data and machine learning to approve small-business loans.\n\nA weak product requirement says:\n\n```txt\nUse AI to approve loans faster.\n```\n\nA stronger requirement separates the system:\n\n```txt\nInputs:\nBank transactions, revenue trends, repayment history, business age, existing debt, fraud signals.\n\nModel output:\nRisk score and recommended limit.\n\nDecision:\nApprove, decline, request more info, or route to manual review.\n\nExplanation:\nSpecific principal reasons for adverse action.\n\nControls:\nFair lending review, model validation, override workflow, audit trail.\n```\n\nThe TPM should not let the product become a black box.",
  "commonMistakes": "A common mistake is optimizing approval speed without protecting decision quality.\n\nAnother mistake is ignoring explainability until legal review. If the team cannot explain declines, the product is not ready.\n\nA third mistake is not defining human oversight. Manual review and overrides need policy, permissions, and audit logs."
};
