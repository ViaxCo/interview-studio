import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-privacy-request-dsar-fintech",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Intermediate",
  "question": "How would you design a privacy data request workflow for fintech users?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A privacy data request workflow lets users ask to access, download, correct, or delete personal data, depending on what rights apply.\n\nThe beginner mistake is treating it like a support inbox. Privacy requests need identity verification, scope, deadlines, exclusions, secure delivery, and records. In fintech, the workflow must avoid exposing someone else's financial data while still giving the requester meaningful access.\n\nThe mental model:\n\n```txt\nRequest:\nWhat is the user asking for?\n\nVerify:\nCan we confirm the requester is allowed to receive it?\n\nFulfill:\nProvide, correct, delete, restrict, or explain limits.\n```\n\nThe TPM should design a workflow that is safe for both privacy and financial security."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user asks for all data connected to their account.\n\nThe system may need to gather:\n\n```txt\nProfile data\nTransaction history\nDevice history\nSupport tickets\nConsent records\nMarketing preferences\n```\n\nBut some data may need review or redaction:\n\n```txt\nInternal fraud investigation notes\nAnother person's details in a joint transaction\nSecurity signals that could expose controls\n```\n\nThis is why privacy fulfillment needs policy and review."
    },
    {
      "title": "Make it practical",
      "body": "Here is a privacy request artifact:\n\n```txt\nRequest types:\n- Access data\n- Download transactions\n- Correct profile data\n- Delete eligible data\n- Restrict marketing use\n\nWorkflow states:\n- Received\n- Identity verification required\n- In review\n- Fulfilled\n- Partially fulfilled\n- Denied with reason\n- Closed\n\nSystem requirements:\n- Request ID\n- Verified requester\n- Scope selected\n- Deadline\n- Data source checklist\n- Redaction review\n- Secure delivery\n- Fulfillment audit log\n```\n\nThe product should make common requests self-serve when safe and route sensitive requests to review."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is sending data before verifying identity strongly enough. That creates privacy risk.\n\nAnother mistake is forgetting redaction. Financial products often contain data about recipients, merchants, agents, and other users.\n\nA third mistake is having no source checklist. Missing one database can make fulfillment incomplete."
    }
  ],
  "answer": "A privacy data request workflow lets users ask to access, download, correct, or delete personal data, depending on what rights apply.",
  "reasoning": "Here is a privacy request artifact:\n\n```txt\nRequest types:\n- Access data\n- Download transactions\n- Correct profile data\n- Delete eligible data\n- Restrict marketing use\n\nWorkflow states:\n- Received\n- Identity verification required\n- In review\n- Fulfilled\n- Partially fulfilled\n- Denied with reason\n- Closed\n\nSystem requirements:\n- Request ID\n- Verified requester\n- Scope selected\n- Deadline\n- Data source checklist\n- Redaction review\n- Secure delivery\n- Fulfillment audit log\n```\n\nThe product should make common requests self-serve when safe and route sensitive requests to review.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a privacy request more than a support ticket?",
    "What should be verified before sending data?",
    "What data may need redaction?",
    "What workflow states are useful?",
    "How would you prove the request was fulfilled?"
  ],
  "interviewAnswer": "I would design privacy requests with request type, identity verification, scope, deadlines, data-source checklist, redaction review, secure delivery, fulfillment states, partial-denial reasons, and audit logs. The workflow should protect privacy without exposing sensitive financial or security data.\n\nA strong answer shows that privacy access is a controlled fulfillment workflow.",
  "sourceLinks": [
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "ICO: Right of access",
      "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-of-access/"
    }
  ],
  "beginnerExplanation": "A privacy data request workflow lets users ask to access, download, correct, or delete personal data, depending on what rights apply.\n\nThe beginner mistake is treating it like a support inbox. Privacy requests need identity verification, scope, deadlines, exclusions, secure delivery, and records. In fintech, the workflow must avoid exposing someone else's financial data while still giving the requester meaningful access.\n\nThe mental model:\n\n```txt\nRequest:\nWhat is the user asking for?\n\nVerify:\nCan we confirm the requester is allowed to receive it?\n\nFulfill:\nProvide, correct, delete, restrict, or explain limits.\n```\n\nThe TPM should design a workflow that is safe for both privacy and financial security.",
  "example": "Imagine a user asks for all data connected to their account.\n\nThe system may need to gather:\n\n```txt\nProfile data\nTransaction history\nDevice history\nSupport tickets\nConsent records\nMarketing preferences\n```\n\nBut some data may need review or redaction:\n\n```txt\nInternal fraud investigation notes\nAnother person's details in a joint transaction\nSecurity signals that could expose controls\n```\n\nThis is why privacy fulfillment needs policy and review.",
  "commonMistakes": "A common mistake is sending data before verifying identity strongly enough. That creates privacy risk.\n\nAnother mistake is forgetting redaction. Financial products often contain data about recipients, merchants, agents, and other users.\n\nA third mistake is having no source checklist. Missing one database can make fulfillment incomplete."
};
