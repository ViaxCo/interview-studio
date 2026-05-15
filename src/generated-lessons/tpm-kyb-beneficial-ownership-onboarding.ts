import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-kyb-beneficial-ownership-onboarding",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Advanced",
  "question": "How would you design KYB onboarding for beneficial ownership?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "KYB means \"Know Your Business.\" It is the process of understanding a business customer before allowing them to use financial products.\n\nThe beginner mistake is asking only for company name and tax ID. For many financial products, the company also needs to understand who owns or controls the business, what the business does, and whether the relationship creates risk.\n\nThe mental model:\n\n```txt\nBusiness identity:\nWhat is this company?\n\nBeneficial ownership:\nWho ultimately owns or controls it?\n\nRisk review:\nCan we safely provide the product?\n```\n\nThe TPM should make a complex compliance requirement feel like a guided workflow instead of a wall of confusing forms."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a small business wants to open a fintech business account.\n\nThe product may need:\n\n```txt\nCompany legal name\nTax identifier\nBusiness address\nIndustry\nOwners or controlling persons\nIdentity information for owners\nDocuments if verification fails\n```\n\nIf the user does not understand why owner information is needed, they may abandon onboarding. Good product copy explains that financial services providers often need to verify the people behind a business."
    },
    {
      "title": "Make it practical",
      "body": "Here is a KYB artifact:\n\n```txt\nBusiness onboarding steps:\n1. Business profile\n2. Business address and tax ID\n3. Industry and expected activity\n4. Beneficial owners or control person\n5. Identity verification for required people\n6. Document upload if automated checks fail\n7. Risk review\n8. Approval, restriction, or rejection\n\nOwner fields:\n- Legal name\n- Date of birth\n- Address\n- Ownership percentage or control role\n- ID information if required\n\nStates:\n- Draft\n- Submitted\n- Needs more information\n- Manual review\n- Approved\n- Restricted\n- Rejected\n```\n\nSupport should see what is missing, not sensitive risk details that could compromise controls."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is asking for owner information without explaining why. That feels invasive and hurts completion.\n\nAnother mistake is treating all businesses the same. Industry, geography, product usage, ownership structure, and transaction volume can change risk.\n\nA third mistake is not designing resubmission. KYB often fails because data is mismatched or documents are unclear, and users need a recovery path."
    }
  ],
  "answer": "KYB means \"Know Your Business.\" It is the process of understanding a business customer before allowing them to use financial products.",
  "reasoning": "Here is a KYB artifact:\n\n```txt\nBusiness onboarding steps:\n1. Business profile\n2. Business address and tax ID\n3. Industry and expected activity\n4. Beneficial owners or control person\n5. Identity verification for required people\n6. Document upload if automated checks fail\n7. Risk review\n8. Approval, restriction, or rejection\n\nOwner fields:\n- Legal name\n- Date of birth\n- Address\n- Ownership percentage or control role\n- ID information if required\n\nStates:\n- Draft\n- Submitted\n- Needs more information\n- Manual review\n- Approved\n- Restricted\n- Rejected\n```\n\nSupport should see what is missing, not sensitive risk details that could compromise controls.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between business identity and beneficial ownership?",
    "Why does KYB need good user education?",
    "What onboarding states should exist?",
    "What should support see when KYB is stuck?",
    "Why should risk rules vary by business type?"
  ],
  "interviewAnswer": "I would design KYB as a staged workflow for business identity, beneficial ownership, control persons, expected activity, verification, document recovery, risk review, decision states, support visibility, and audit logs. I would partner with compliance to define required fields and risk tiers.\n\nA strong answer shows that KYB is both a compliance process and a user onboarding experience.",
  "sourceLinks": [
    {
      "label": "FFIEC: Customer Due Diligence",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/02"
    },
    {
      "label": "FFIEC: Customer Identification Program",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/01"
    }
  ],
  "beginnerExplanation": "KYB means \"Know Your Business.\" It is the process of understanding a business customer before allowing them to use financial products.\n\nThe beginner mistake is asking only for company name and tax ID. For many financial products, the company also needs to understand who owns or controls the business, what the business does, and whether the relationship creates risk.\n\nThe mental model:\n\n```txt\nBusiness identity:\nWhat is this company?\n\nBeneficial ownership:\nWho ultimately owns or controls it?\n\nRisk review:\nCan we safely provide the product?\n```\n\nThe TPM should make a complex compliance requirement feel like a guided workflow instead of a wall of confusing forms.",
  "example": "Imagine a small business wants to open a fintech business account.\n\nThe product may need:\n\n```txt\nCompany legal name\nTax identifier\nBusiness address\nIndustry\nOwners or controlling persons\nIdentity information for owners\nDocuments if verification fails\n```\n\nIf the user does not understand why owner information is needed, they may abandon onboarding. Good product copy explains that financial services providers often need to verify the people behind a business.",
  "commonMistakes": "A common mistake is asking for owner information without explaining why. That feels invasive and hurts completion.\n\nAnother mistake is treating all businesses the same. Industry, geography, product usage, ownership structure, and transaction volume can change risk.\n\nA third mistake is not designing resubmission. KYB often fails because data is mismatched or documents are unclear, and users need a recovery path."
};
