import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-privacy-by-design",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Intermediate",
  "question": "How would you apply privacy by design to a new product feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.\n\nThe beginner mistake is thinking privacy is only a legal review at the end. By then, the team may have already collected too much data, exposed it to too many people, stored it too long, or made deletion hard.\n\nFor a TPM, privacy by design is a product-thinking discipline:\n\n```txt\nWhat data do we need?\nWhy do we need it?\nWho can see it?\nHow long do we keep it?\nHow does the user understand and control it?\nWhat could go wrong for the person if this data is misused?\n```\n\nPrivacy is not only about avoiding fines. It is about user trust and reducing harm."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a remittance product wants to add \"recipient suggestions.\" When a user sends money, the app suggests previous recipients and maybe contacts from the user's phone.\n\nA weak approach says:\n\n```txt\nAsk for contact access and upload contacts so suggestions work.\n```\n\nA privacy-by-design approach asks:\n\n```txt\nIs contact access actually required?\nCan suggestions work from recipients the user already paid?\nCan contact matching happen on device?\nCan the user choose not to enable contacts?\nWhat exactly is uploaded?\nAre contacts stored?\nCan the user delete imported data?\nDo recipients know their data is being used?\n```\n\nThe product may decide that saved recipients are enough for the first version. That is a privacy-friendly product decision, not a legal afterthought."
    },
    {
      "title": "Make it practical",
      "body": "Here is a privacy review artifact:\n\n```txt\nFeature:\nRecipient suggestions\n\nUser value:\nHelp repeat senders find trusted recipients faster.\n\nPersonal data involved:\n- Sender account ID\n- Recipient name\n- Recipient country\n- Recipient payout method\n- Recent transfer history\n- Optional phone contacts, if enabled later\n\nData minimization:\nUse saved and recent recipients first. Do not request phone contacts in v1.\n\nAccess:\nUser sees own recipients. Support sees masked details. Admin access is audited.\n\nRetention:\nRecipient records follow account retention policy. Deleted recipients no longer appear in suggestions.\n\nUser control:\nUser can remove a recipient from suggestions.\n\nRisk:\nWrong suggestion could expose recipient name on a shared device.\n\nMitigation:\nShow masked identifiers and require confirmation before transfer.\n```\n\nThe TPM should also ask whether the feature changes the privacy notice, consent flow, deletion process, or support scripts."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is collecting data because it might be useful later. That creates privacy and security burden without clear user value.\n\nAnother mistake is hiding privacy choices in vague copy. Users should understand what is happening in plain language.\n\nA third mistake is forgetting lifecycle. Privacy includes collection, use, access, sharing, retention, deletion, and auditability."
    }
  ],
  "answer": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.",
  "reasoning": "Here is a privacy review artifact:\n\n```txt\nFeature:\nRecipient suggestions\n\nUser value:\nHelp repeat senders find trusted recipients faster.\n\nPersonal data involved:\n- Sender account ID\n- Recipient name\n- Recipient country\n- Recipient payout method\n- Recent transfer history\n- Optional phone contacts, if enabled later\n\nData minimization:\nUse saved and recent recipients first. Do not request phone contacts in v1.\n\nAccess:\nUser sees own recipients. Support sees masked details. Admin access is audited.\n\nRetention:\nRecipient records follow account retention policy. Deleted recipients no longer appear in suggestions.\n\nUser control:\nUser can remove a recipient from suggestions.\n\nRisk:\nWrong suggestion could expose recipient name on a shared device.\n\nMitigation:\nShow masked identifiers and require confirmation before transfer.\n```\n\nThe TPM should also ask whether the feature changes the privacy notice, consent flow, deletion process, or support scripts.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is privacy by design different from legal review at the end?",
    "What does data minimization mean?",
    "Why should retention be defined before launch?",
    "What user controls might privacy-sensitive features need?",
    "How can a product feature create privacy harm even if it is useful?"
  ],
  "interviewAnswer": "I would apply privacy by design by identifying the data involved, the purpose for each data element, minimization options, access controls, retention, deletion, user consent or control, auditability, and potential user harms.\n\nA strong TPM answer shows that privacy is part of product quality. The feature should collect the least data needed, explain itself clearly, and protect users across the full data lifecycle.",
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
  "beginnerExplanation": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.\n\nThe beginner mistake is thinking privacy is only a legal review at the end. By then, the team may have already collected too much data, exposed it to too many people, stored it too long, or made deletion hard.\n\nFor a TPM, privacy by design is a product-thinking discipline:\n\n```txt\nWhat data do we need?\nWhy do we need it?\nWho can see it?\nHow long do we keep it?\nHow does the user understand and control it?\nWhat could go wrong for the person if this data is misused?\n```\n\nPrivacy is not only about avoiding fines. It is about user trust and reducing harm.",
  "example": "Imagine a remittance product wants to add \"recipient suggestions.\" When a user sends money, the app suggests previous recipients and maybe contacts from the user's phone.\n\nA weak approach says:\n\n```txt\nAsk for contact access and upload contacts so suggestions work.\n```\n\nA privacy-by-design approach asks:\n\n```txt\nIs contact access actually required?\nCan suggestions work from recipients the user already paid?\nCan contact matching happen on device?\nCan the user choose not to enable contacts?\nWhat exactly is uploaded?\nAre contacts stored?\nCan the user delete imported data?\nDo recipients know their data is being used?\n```\n\nThe product may decide that saved recipients are enough for the first version. That is a privacy-friendly product decision, not a legal afterthought.",
  "commonMistakes": "A common mistake is collecting data because it might be useful later. That creates privacy and security burden without clear user value.\n\nAnother mistake is hiding privacy choices in vague copy. Users should understand what is happening in plain language.\n\nA third mistake is forgetting lifecycle. Privacy includes collection, use, access, sharing, retention, deletion, and auditability."
};
