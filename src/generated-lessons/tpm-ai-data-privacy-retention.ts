import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-data-privacy-retention",
  "track": "TPM",
  "category": "AI Governance",
  "level": "Intermediate",
  "question": "How would you handle data privacy and retention for an AI feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.\n\nThe beginner mistake is thinking \"we do not train the model\" solves privacy. Even if training is disabled, the feature may still log prompts, store outputs, send data to vendors, or expose sensitive context to users or staff.\n\nThe TPM should ask:\n\n```txt\nWhat data goes into the AI system?\nWhy is each field needed?\nWhere is it stored?\nHow long is it kept?\nWho can see it?\nCan users request deletion?\nDoes a vendor process it?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI assistant summarizes support cases. The case may contain names, phone numbers, transfer IDs, document-review notes, fraud flags, and complaint language.\n\nThe product should not blindly send every field into the model. It should minimize.\n\n```txt\nNeed:\nTransfer status, public reason, customer question, safe support notes.\n\nDo not need:\nFull ID document number, internal fraud rule, analyst private note, unrelated account history.\n```\n\nPrivacy design shapes the data pipeline."
    },
    {
      "title": "Make it practical",
      "body": "Here is a privacy and retention artifact:\n\n```txt\nFeature:\nAI support case summarizer\n\nData used:\n- Customer message\n- Transfer status\n- Support-safe case notes\n- Public reason codes\n\nData excluded:\n- Full identity document number\n- Internal fraud rules\n- Sanctions match details\n- Raw payment credentials\n\nRetention:\n- Prompt and output logs kept for 30 days for quality review.\n- Audit metadata kept according to compliance policy.\n- Sensitive fields redacted before logging.\n\nAccess:\n- Support lead can review samples.\n- Product can review anonymized quality data.\n- Engineering can debug traces with masked data.\n\nVendor controls:\n- Confirm data processing terms.\n- Confirm training settings.\n- Confirm deletion/export process.\n```\n\nThe TPM should also define user-facing and internal policy language. People should know what the AI feature uses and what it does not do."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is sending all available context because it improves quality. More context can create more privacy risk.\n\nAnother mistake is logging raw prompts forever. AI logs can contain sensitive information.\n\nA third mistake is forgetting vendor data flow. If data leaves your system, contracts and controls matter."
    }
  ],
  "answer": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.",
  "reasoning": "Here is a privacy and retention artifact:\n\n```txt\nFeature:\nAI support case summarizer\n\nData used:\n- Customer message\n- Transfer status\n- Support-safe case notes\n- Public reason codes\n\nData excluded:\n- Full identity document number\n- Internal fraud rules\n- Sanctions match details\n- Raw payment credentials\n\nRetention:\n- Prompt and output logs kept for 30 days for quality review.\n- Audit metadata kept according to compliance policy.\n- Sensitive fields redacted before logging.\n\nAccess:\n- Support lead can review samples.\n- Product can review anonymized quality data.\n- Engineering can debug traces with masked data.\n\nVendor controls:\n- Confirm data processing terms.\n- Confirm training settings.\n- Confirm deletion/export process.\n```\n\nThe TPM should also define user-facing and internal policy language. People should know what the AI feature uses and what it does not do.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is \"not used for training\" not the whole privacy story?",
    "What does data minimization mean for AI?",
    "Why do AI logs need retention rules?",
    "Who should access AI traces?",
    "What vendor controls matter?"
  ],
  "interviewAnswer": "I would handle AI privacy by mapping data inputs, minimizing sensitive fields, defining retention, redaction, access controls, vendor terms, deletion process, audit logs, and user-facing transparency.\n\nA strong TPM answer shows that AI privacy covers prompts, context, outputs, logs, vendors, and lifecycle.",
  "sourceLinks": [
    {
      "label": "NIST: Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "ICO: Data protection by design and by default",
      "url": "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/"
    }
  ],
  "beginnerExplanation": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.\n\nThe beginner mistake is thinking \"we do not train the model\" solves privacy. Even if training is disabled, the feature may still log prompts, store outputs, send data to vendors, or expose sensitive context to users or staff.\n\nThe TPM should ask:\n\n```txt\nWhat data goes into the AI system?\nWhy is each field needed?\nWhere is it stored?\nHow long is it kept?\nWho can see it?\nCan users request deletion?\nDoes a vendor process it?\n```",
  "example": "Imagine an AI assistant summarizes support cases. The case may contain names, phone numbers, transfer IDs, document-review notes, fraud flags, and complaint language.\n\nThe product should not blindly send every field into the model. It should minimize.\n\n```txt\nNeed:\nTransfer status, public reason, customer question, safe support notes.\n\nDo not need:\nFull ID document number, internal fraud rule, analyst private note, unrelated account history.\n```\n\nPrivacy design shapes the data pipeline.",
  "commonMistakes": "A common mistake is sending all available context because it improves quality. More context can create more privacy risk.\n\nAnother mistake is logging raw prompts forever. AI logs can contain sensitive information.\n\nA third mistake is forgetting vendor data flow. If data leaves your system, contracts and controls matter."
};
