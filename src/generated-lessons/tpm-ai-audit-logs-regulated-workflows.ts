import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-audit-logs-regulated-workflows",
  "track": "TPM",
  "category": "AI Governance",
  "level": "Advanced",
  "question": "What should AI audit logs capture in regulated fintech workflows?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI audit logs are records that help the company understand what the AI did, why it did it, who used it, and what happened next.\n\nThe beginner mistake is logging only the final answer. In regulated workflows, the useful record includes input, retrieved context, model or prompt version, tool calls, human approvals, decisions, and outcomes.\n\nThe mental model:\n\n```txt\nTrace:\nWhat happened during one AI interaction.\n\nDecision record:\nWhat business action resulted.\n\nAudit trail:\nCan we reconstruct and review it later?\n```\n\nThe TPM should define logs before launch because retroactive logging rarely captures what reviewers need."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI assistant recommends holding a transfer.\n\nThree months later, the company investigates a complaint. It needs to know:\n\n```txt\nWhat did the user ask?\nWhat data did the AI see?\nWhich policy was retrieved?\nWhich model and prompt version ran?\nDid the AI call any tools?\nWho approved the hold?\nWas the customer notified?\n```\n\nWithout those records, the team is guessing."
    },
    {
      "title": "Make it practical",
      "body": "Here is an AI audit log artifact:\n\n```txt\nLog fields:\n- Interaction ID\n- User ID or analyst ID\n- Customer/account ID if applicable\n- Timestamp\n- Feature name\n- Model version\n- Prompt version\n- Retrieved sources\n- Input classification\n- Output summary\n- Tool calls and arguments\n- Guardrail result\n- Human approval or override\n- Final business action\n- Error or refusal reason\n\nControls:\n- Sensitive data minimization\n- Access permissions\n- Retention policy\n- Tamper resistance\n- Export for review\n```\n\nThe audit log should be useful without becoming an uncontrolled dump of sensitive data."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is logging too little. A final answer without context is hard to review.\n\nAnother mistake is logging too much sensitive data forever. Audit logs also need privacy and retention controls.\n\nA third mistake is not linking AI output to the business action. The question is not only what the AI said; it is what changed afterward."
    }
  ],
  "answer": "AI audit logs are records that help the company understand what the AI did, why it did it, who used it, and what happened next.",
  "reasoning": "Here is an AI audit log artifact:\n\n```txt\nLog fields:\n- Interaction ID\n- User ID or analyst ID\n- Customer/account ID if applicable\n- Timestamp\n- Feature name\n- Model version\n- Prompt version\n- Retrieved sources\n- Input classification\n- Output summary\n- Tool calls and arguments\n- Guardrail result\n- Human approval or override\n- Final business action\n- Error or refusal reason\n\nControls:\n- Sensitive data minimization\n- Access permissions\n- Retention policy\n- Tamper resistance\n- Export for review\n```\n\nThe audit log should be useful without becoming an uncontrolled dump of sensitive data.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is the final AI answer not enough for audit?",
    "What versions should be logged?",
    "Why should tool calls be captured?",
    "How can audit logs create privacy risk?",
    "What business action should the log connect to?"
  ],
  "interviewAnswer": "AI audit logs should capture interaction ID, actor, timestamp, model and prompt versions, retrieved sources, input category, output summary, tool calls, guardrail results, human approvals or overrides, final business action, errors, and retention controls.\n\nA strong answer makes AI behavior reconstructable without ignoring privacy and access risk.",
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
  "beginnerExplanation": "AI audit logs are records that help the company understand what the AI did, why it did it, who used it, and what happened next.\n\nThe beginner mistake is logging only the final answer. In regulated workflows, the useful record includes input, retrieved context, model or prompt version, tool calls, human approvals, decisions, and outcomes.\n\nThe mental model:\n\n```txt\nTrace:\nWhat happened during one AI interaction.\n\nDecision record:\nWhat business action resulted.\n\nAudit trail:\nCan we reconstruct and review it later?\n```\n\nThe TPM should define logs before launch because retroactive logging rarely captures what reviewers need.",
  "example": "Imagine an AI assistant recommends holding a transfer.\n\nThree months later, the company investigates a complaint. It needs to know:\n\n```txt\nWhat did the user ask?\nWhat data did the AI see?\nWhich policy was retrieved?\nWhich model and prompt version ran?\nDid the AI call any tools?\nWho approved the hold?\nWas the customer notified?\n```\n\nWithout those records, the team is guessing.",
  "commonMistakes": "A common mistake is logging too little. A final answer without context is hard to review.\n\nAnother mistake is logging too much sensitive data forever. Audit logs also need privacy and retention controls.\n\nA third mistake is not linking AI output to the business action. The question is not only what the AI said; it is what changed afterward."
};
