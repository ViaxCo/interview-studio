import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-open-banking-consent-data-access",
  "track": "TPM",
  "category": "Data & Schema Design",
  "level": "Advanced",
  "question": "How would you design an open banking consent and data access flow?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Open banking lets consumers authorize access to their financial data so another product can provide a service, such as budgeting, underwriting, payments, or account aggregation.\n\nThe beginner mistake is thinking consent is just a checkbox. Good consent explains who gets access, what data they get, why they need it, how long access lasts, and how the user can revoke it.\n\nThe mental model:\n\n```txt\nUser intent:\nI want this service to use my financial data.\n\nPermission:\nThis company may access specific data for a specific purpose.\n\nControl:\nThe user can review, renew, or revoke access.\n```\n\nThe TPM should design for trust, not just API connectivity."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a lending app asks to connect a bank account to verify cash flow.\n\nA weak flow says:\n\n```txt\nConnect your bank to continue.\n```\n\nA stronger flow says:\n\n```txt\nWe use transaction and balance data to assess affordability.\nWe do not need your bank password.\nYou can disconnect access later from settings.\n```\n\nThat framing helps the user understand what is happening and reduces fear."
    },
    {
      "title": "Make it practical",
      "body": "Here is a consent artifact:\n\n```txt\nUse case:\nCash-flow underwriting\n\nData requested:\n- Account identity\n- Current balance\n- Transaction history for last 12 months\n\nPurpose:\nVerify income stability and affordability\n\nConsent screen must show:\n- Data recipient\n- Data categories\n- Purpose\n- Duration\n- Revocation path\n- Support contact\n\nSystem requirements:\n- Consent record ID\n- Timestamp\n- Data scopes\n- Provider connection status\n- Revocation event\n- Access audit log\n- Data deletion or retention policy\n```\n\nThe product should make consent visible after onboarding, not bury it forever."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is asking for more data than the product needs. Extra data increases privacy risk and user discomfort.\n\nAnother mistake is making revocation hard to find. If users can grant access easily, they should be able to manage it easily.\n\nA third mistake is not separating connection failure from consent refusal. A user who wants to consent but hits a provider error needs a different path from a user who declines."
    }
  ],
  "answer": "Open banking lets consumers authorize access to their financial data so another product can provide a service, such as budgeting, underwriting, payments, or account aggregation.",
  "reasoning": "Here is a consent artifact:\n\n```txt\nUse case:\nCash-flow underwriting\n\nData requested:\n- Account identity\n- Current balance\n- Transaction history for last 12 months\n\nPurpose:\nVerify income stability and affordability\n\nConsent screen must show:\n- Data recipient\n- Data categories\n- Purpose\n- Duration\n- Revocation path\n- Support contact\n\nSystem requirements:\n- Consent record ID\n- Timestamp\n- Data scopes\n- Provider connection status\n- Revocation event\n- Access audit log\n- Data deletion or retention policy\n```\n\nThe product should make consent visible after onboarding, not bury it forever.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is consent more than a checkbox?",
    "What should the user know before granting access?",
    "What data should be stored about consent?",
    "Why does revocation need product design?",
    "How would you handle a bank connection failure?"
  ],
  "interviewAnswer": "I would design open banking consent around purpose, data minimization, clear scopes, duration, revocation, audit logs, connection status, and support paths. The user should understand what data is accessed, who receives it, why it is needed, and how to stop access.\n\nA strong answer treats consent as an ongoing user-control system, not just an onboarding step.",
  "sourceLinks": [
    {
      "label": "CFPB: Personal financial data rights",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/personal-financial-data-rights/"
    },
    {
      "label": "CFPB: Personal financial data rights guide",
      "url": "https://files.consumerfinance.gov/f/documents/cfpb_personal-financial-data-rights-small-entity-compliance-guide_2024-12_pdf.pdf"
    }
  ],
  "beginnerExplanation": "Open banking lets consumers authorize access to their financial data so another product can provide a service, such as budgeting, underwriting, payments, or account aggregation.\n\nThe beginner mistake is thinking consent is just a checkbox. Good consent explains who gets access, what data they get, why they need it, how long access lasts, and how the user can revoke it.\n\nThe mental model:\n\n```txt\nUser intent:\nI want this service to use my financial data.\n\nPermission:\nThis company may access specific data for a specific purpose.\n\nControl:\nThe user can review, renew, or revoke access.\n```\n\nThe TPM should design for trust, not just API connectivity.",
  "example": "Imagine a lending app asks to connect a bank account to verify cash flow.\n\nA weak flow says:\n\n```txt\nConnect your bank to continue.\n```\n\nA stronger flow says:\n\n```txt\nWe use transaction and balance data to assess affordability.\nWe do not need your bank password.\nYou can disconnect access later from settings.\n```\n\nThat framing helps the user understand what is happening and reduces fear.",
  "commonMistakes": "A common mistake is asking for more data than the product needs. Extra data increases privacy risk and user discomfort.\n\nAnother mistake is making revocation hard to find. If users can grant access easily, they should be able to manage it easily.\n\nA third mistake is not separating connection failure from consent refusal. A user who wants to consent but hits a provider error needs a different path from a user who declines."
};
