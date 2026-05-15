import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-data-retention-deletion-fintech",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Advanced",
  "question": "How would you design data retention and deletion for a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Data retention is deciding how long the product keeps data. Deletion is removing or anonymizing data when it is no longer needed or when a valid request applies.\n\nThe beginner mistake is saying \"delete everything when the user asks.\" Fintech products often have legal, fraud, tax, dispute, audit, and compliance reasons to retain some records. The product needs clear data categories, retention rules, deletion behavior, and user communication.\n\nThe mental model:\n\n```txt\nKeep:\nData required for product, legal, risk, or audit purpose.\n\nDelete:\nData no longer needed and eligible for deletion.\n\nRestrict:\nData retained but no longer used for normal product activity.\n```\n\nThe TPM should make retention explicit by data type."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user closes their account and requests deletion.\n\nSome data may be deleted quickly:\n\n```txt\nMarketing preferences\nUnused device nicknames\nOptional profile photo\n```\n\nSome records may need retention:\n\n```txt\nTransaction history\nDispute records\nCompliance review records\nTax or statement records\nFraud investigation evidence\n```\n\nThe product should explain what can be deleted and what must be retained."
    },
    {
      "title": "Make it practical",
      "body": "Here is a retention artifact:\n\n```txt\nData category:\nCustomer identity document\n\nPurpose:\nIdentity verification and compliance evidence\n\nRetention rule:\nRetain while account is active and for approved period after closure\n\nDeletion behavior:\nDelete or archive when retention expires\n\nAccess:\nRestricted to verification, compliance, and audit roles\n\nUser communication:\nExplain that some financial records may be retained for legal and security reasons\n\nSystem needs:\n- Data inventory\n- Retention clock\n- Deletion job\n- Legal hold flag\n- Deletion audit record\n```\n\nRetention design should be boring, explicit, and enforceable."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is not having a data inventory. If the team does not know where data lives, it cannot reliably delete it.\n\nAnother mistake is deleting records needed for disputes or regulatory review.\n\nA third mistake is retaining everything forever. That increases privacy, security, and breach impact."
    }
  ],
  "answer": "Data retention is deciding how long the product keeps data. Deletion is removing or anonymizing data when it is no longer needed or when a valid request applies.",
  "reasoning": "Here is a retention artifact:\n\n```txt\nData category:\nCustomer identity document\n\nPurpose:\nIdentity verification and compliance evidence\n\nRetention rule:\nRetain while account is active and for approved period after closure\n\nDeletion behavior:\nDelete or archive when retention expires\n\nAccess:\nRestricted to verification, compliance, and audit roles\n\nUser communication:\nExplain that some financial records may be retained for legal and security reasons\n\nSystem needs:\n- Data inventory\n- Retention clock\n- Deletion job\n- Legal hold flag\n- Deletion audit record\n```\n\nRetention design should be boring, explicit, and enforceable.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is \"delete everything\" often wrong in fintech?",
    "What data categories might need retention?",
    "What is a legal hold?",
    "Why does deletion need an audit record?",
    "How would you explain partial deletion to a user?"
  ],
  "interviewAnswer": "I would design retention and deletion with a data inventory, purpose by category, retention periods, deletion eligibility, legal holds, restricted access, deletion jobs, audit records, and clear user communication. Some data can be deleted, some must be retained, and some should be restricted.\n\nA strong answer balances privacy rights with financial recordkeeping and risk obligations.",
  "sourceLinks": [
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "ICO: Data protection by design",
      "url": "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/"
    }
  ],
  "beginnerExplanation": "Data retention is deciding how long the product keeps data. Deletion is removing or anonymizing data when it is no longer needed or when a valid request applies.\n\nThe beginner mistake is saying \"delete everything when the user asks.\" Fintech products often have legal, fraud, tax, dispute, audit, and compliance reasons to retain some records. The product needs clear data categories, retention rules, deletion behavior, and user communication.\n\nThe mental model:\n\n```txt\nKeep:\nData required for product, legal, risk, or audit purpose.\n\nDelete:\nData no longer needed and eligible for deletion.\n\nRestrict:\nData retained but no longer used for normal product activity.\n```\n\nThe TPM should make retention explicit by data type.",
  "example": "Imagine a user closes their account and requests deletion.\n\nSome data may be deleted quickly:\n\n```txt\nMarketing preferences\nUnused device nicknames\nOptional profile photo\n```\n\nSome records may need retention:\n\n```txt\nTransaction history\nDispute records\nCompliance review records\nTax or statement records\nFraud investigation evidence\n```\n\nThe product should explain what can be deleted and what must be retained.",
  "commonMistakes": "A common mistake is not having a data inventory. If the team does not know where data lives, it cannot reliably delete it.\n\nAnother mistake is deleting records needed for disputes or regulatory review.\n\nA third mistake is retaining everything forever. That increases privacy, security, and breach impact."
};
