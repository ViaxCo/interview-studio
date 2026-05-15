import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-audit-trail-product-requirements",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Intermediate",
  "question": "What audit trail requirements would you define for a fintech workflow?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An audit trail is a record of important actions and changes in a system.\n\nThe beginner mistake is logging only technical errors. In fintech, the audit trail should capture business actions: who changed a limit, who released a hold, who updated bank details, who approved a refund, and what reason they selected.\n\nThe mental model:\n\n```txt\nActor:\nWho did it?\n\nAction:\nWhat changed?\n\nReason and evidence:\nWhy was it changed?\n\nTime:\nWhen did it happen?\n```\n\nThe TPM should define audit requirements while designing the workflow, not after launch."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a support agent releases a transfer hold. Two weeks later, the transfer is disputed.\n\nThe company needs to know:\n\n```txt\nWho released the hold?\nWhat case were they viewing?\nWhat reason did they choose?\nWas approval required?\nWhat was the customer told?\nWhat data changed?\n```\n\nWithout an audit trail, the team cannot reconstruct the decision."
    },
    {
      "title": "Make it practical",
      "body": "Here is an audit trail artifact:\n\n```txt\nWorkflow:\nManual transfer hold release\n\nAudit fields:\n- Event ID\n- Actor ID and role\n- Customer/account ID\n- Object changed\n- Previous state\n- New state\n- Reason code\n- Free-text note if required\n- Approval ID\n- Timestamp\n- Source IP/device if relevant\n- Related case ID\n\nControls:\n- Audit events are append-only\n- Sensitive data is minimized\n- Access is restricted\n- Export is available for review\n- Product metrics count risky actions\n```\n\nGood audit logs make investigation possible without exposing everything to everyone."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is logging only \"updated successfully.\" That does not explain what changed.\n\nAnother mistake is allowing important changes without reason codes. Free text alone is hard to analyze.\n\nA third mistake is making logs editable by the same people whose actions are being audited."
    }
  ],
  "answer": "An audit trail is a record of important actions and changes in a system.",
  "reasoning": "Here is an audit trail artifact:\n\n```txt\nWorkflow:\nManual transfer hold release\n\nAudit fields:\n- Event ID\n- Actor ID and role\n- Customer/account ID\n- Object changed\n- Previous state\n- New state\n- Reason code\n- Free-text note if required\n- Approval ID\n- Timestamp\n- Source IP/device if relevant\n- Related case ID\n\nControls:\n- Audit events are append-only\n- Sensitive data is minimized\n- Access is restricted\n- Export is available for review\n- Product metrics count risky actions\n```\n\nGood audit logs make investigation possible without exposing everything to everyone.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between technical logging and audit logging?",
    "What fields should an audit event include?",
    "Why are previous and new states useful?",
    "Which actions need reason codes?",
    "Why should audit logs be append-only?"
  ],
  "interviewAnswer": "I would define audit trails for sensitive fintech actions with actor, role, object, previous state, new state, reason, related case, approval, timestamp, and access controls. Logs should be append-only, searchable, exportable, and privacy-aware.\n\nA strong answer shows that audit trails are product requirements, not only engineering implementation details.",
  "sourceLinks": [
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "FFIEC: Information Security",
      "url": "https://ithandbook.ffiec.gov/it-booklets/information-security.aspx"
    }
  ],
  "beginnerExplanation": "An audit trail is a record of important actions and changes in a system.\n\nThe beginner mistake is logging only technical errors. In fintech, the audit trail should capture business actions: who changed a limit, who released a hold, who updated bank details, who approved a refund, and what reason they selected.\n\nThe mental model:\n\n```txt\nActor:\nWho did it?\n\nAction:\nWhat changed?\n\nReason and evidence:\nWhy was it changed?\n\nTime:\nWhen did it happen?\n```\n\nThe TPM should define audit requirements while designing the workflow, not after launch.",
  "example": "Imagine a support agent releases a transfer hold. Two weeks later, the transfer is disputed.\n\nThe company needs to know:\n\n```txt\nWho released the hold?\nWhat case were they viewing?\nWhat reason did they choose?\nWas approval required?\nWhat was the customer told?\nWhat data changed?\n```\n\nWithout an audit trail, the team cannot reconstruct the decision.",
  "commonMistakes": "A common mistake is logging only \"updated successfully.\" That does not explain what changed.\n\nAnother mistake is allowing important changes without reason codes. Free text alone is hard to analyze.\n\nA third mistake is making logs editable by the same people whose actions are being audited."
};
