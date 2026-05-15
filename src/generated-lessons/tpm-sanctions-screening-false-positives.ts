import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-sanctions-screening-false-positives",
  "track": "TPM",
  "category": "Compliance & Risk",
  "level": "Intermediate",
  "question": "How would you design sanctions screening while managing false positives?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.\n\nThe beginner mistake is thinking screening is a simple yes/no name match. Names are messy. People share names. Names can be transliterated. Addresses may be incomplete. Businesses may have beneficial owners. A match may be a true hit or a false positive.\n\nThe product challenge is serious:\n\n```txt\nIf the system misses a true hit:\nThe company may violate sanctions obligations.\n\nIf the system blocks too many false positives:\nLegitimate users are harmed, support gets flooded, and conversion suffers.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user named \"Mohammed Ali\" signs up. The name may produce a potential match against a sanctions list, but that does not mean the user is sanctioned.\n\nA weak product blocks the user with vague copy:\n\n```txt\nYour account is banned.\n```\n\nA stronger product creates a review workflow:\n\n```txt\nPotential match found\n-> Account action limited\n-> Compliance review opened\n-> Additional identifiers compared\n-> Cleared, blocked, or escalated\n```\n\nThe system should compare more than name: date of birth, address, nationality, document ID, business ownership, and other identifiers where available and allowed."
    },
    {
      "title": "Make it practical",
      "body": "Here is a sanctions screening requirements artifact:\n\n```txt\nScreening moments:\n- Account creation\n- Recipient creation\n- Business owner update\n- Large transfer\n- List update rescreening\n\nMatch data:\n- Name\n- Aliases\n- Date of birth\n- Country\n- Address\n- Document number\n- Business registration\n- Beneficial owner\n\nReview outcomes:\n- Cleared false positive\n- True hit\n- Need more information\n- Escalate to compliance lead\n\nUser actions while pending:\n- Allow account browsing\n- Block money movement\n- Prevent payout or transfer submission\n- Show safe copy\n```\n\nSafe user copy:\n\n```txt\nWe need to review your information before you can send money.\n\nThis usually takes one business day. We will contact you if we need more information.\n```\n\nDo not tell the user exactly which list or rule was triggered if that creates compliance or evasion risk."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is auto-blocking every name match. That creates unnecessary user harm and operational noise.\n\nAnother mistake is permanently clearing a false positive without rescreening when lists or user details change.\n\nA third mistake is exposing sensitive screening logic in customer copy or support macros."
    }
  ],
  "answer": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.",
  "reasoning": "Here is a sanctions screening requirements artifact:\n\n```txt\nScreening moments:\n- Account creation\n- Recipient creation\n- Business owner update\n- Large transfer\n- List update rescreening\n\nMatch data:\n- Name\n- Aliases\n- Date of birth\n- Country\n- Address\n- Document number\n- Business registration\n- Beneficial owner\n\nReview outcomes:\n- Cleared false positive\n- True hit\n- Need more information\n- Escalate to compliance lead\n\nUser actions while pending:\n- Allow account browsing\n- Block money movement\n- Prevent payout or transfer submission\n- Show safe copy\n```\n\nSafe user copy:\n\n```txt\nWe need to review your information before you can send money.\n\nThis usually takes one business day. We will contact you if we need more information.\n```\n\nDo not tell the user exactly which list or rule was triggered if that creates compliance or evasion risk.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is sanctions screening not just a name match?",
    "What is a false positive?",
    "When should users be rescreened?",
    "What actions might be blocked during review?",
    "Why must customer copy be careful?"
  ],
  "interviewAnswer": "I would design sanctions screening around screening events, match data, review workflow, user-state restrictions, false-positive handling, rescreening, audit logs, and safe customer communication.\n\nA strong TPM answer balances compliance protection with legitimate-user harm and operational review quality.",
  "sourceLinks": [
    {
      "label": "OFAC: Sanctions List Search FAQs",
      "url": "https://ofac.treasury.gov/faqs/search"
    },
    {
      "label": "OFAC: False hit lists guidance",
      "url": "https://ofac.treasury.gov/system/files/126/false_hit.pdf"
    }
  ],
  "beginnerExplanation": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.\n\nThe beginner mistake is thinking screening is a simple yes/no name match. Names are messy. People share names. Names can be transliterated. Addresses may be incomplete. Businesses may have beneficial owners. A match may be a true hit or a false positive.\n\nThe product challenge is serious:\n\n```txt\nIf the system misses a true hit:\nThe company may violate sanctions obligations.\n\nIf the system blocks too many false positives:\nLegitimate users are harmed, support gets flooded, and conversion suffers.\n```",
  "example": "Imagine a user named \"Mohammed Ali\" signs up. The name may produce a potential match against a sanctions list, but that does not mean the user is sanctioned.\n\nA weak product blocks the user with vague copy:\n\n```txt\nYour account is banned.\n```\n\nA stronger product creates a review workflow:\n\n```txt\nPotential match found\n-> Account action limited\n-> Compliance review opened\n-> Additional identifiers compared\n-> Cleared, blocked, or escalated\n```\n\nThe system should compare more than name: date of birth, address, nationality, document ID, business ownership, and other identifiers where available and allowed.",
  "commonMistakes": "A common mistake is auto-blocking every name match. That creates unnecessary user harm and operational noise.\n\nAnother mistake is permanently clearing a false positive without rescreening when lists or user details change.\n\nA third mistake is exposing sensitive screening logic in customer copy or support macros."
};
