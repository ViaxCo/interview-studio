import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-suspicious-recipient-network-analysis",
  "track": "TPM",
  "category": "Fraud & Risk",
  "level": "Advanced",
  "question": "How would you design product requirements for suspicious recipient network analysis?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Suspicious recipient network analysis looks for risky patterns across connected senders, recipients, accounts, devices, bank accounts, phone numbers, or addresses.\n\nThe beginner mistake is looking only at one transaction at a time. Financial crime and fraud can appear as a network: many senders to one recipient, one device creating many accounts, or repeated small transfers through related identities.\n\nThe mental model:\n\n```txt\nNode:\nAn entity such as customer, recipient, device, bank account, or phone number.\n\nEdge:\nA relationship such as transfer, login, shared device, or shared bank account.\n\nPattern:\nA structure that may indicate risk.\n```\n\nThe TPM should make network signals understandable and reviewable."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine ten new customers send money to the same recipient within two days. Each transfer alone looks small. Together, the pattern may be suspicious.\n\nThe product should show:\n\n```txt\nRecipient received 10 transfers from 10 new senders\nAll senders created accounts in the last 48 hours\nFour share the same device fingerprint\nTwo attempted chargebacks before\n```\n\nNow the analyst sees the network, not isolated dots."
    },
    {
      "title": "Make it practical",
      "body": "Here is a network-analysis artifact:\n\n```txt\nUse case:\nRecipient risk review\n\nEntities:\n- Sender\n- Recipient\n- Device\n- Bank account\n- Phone number\n- Address\n- IP range\n\nSignals:\n- Many-to-one transfer pattern\n- Shared device across accounts\n- Repeated failed verification\n- High-risk geography\n- Prior confirmed fraud link\n\nReviewer view:\n- Network summary\n- Timeline\n- Top risk links\n- Source records\n- Confidence or rule source\n- Allowed actions\n\nGuardrails:\n- Human review before severe action\n- Avoid guilt by weak association alone\n- Log reason for decision\n```\n\nNetwork analysis should support investigation, not automatically punish every connection."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating any shared attribute as proof of fraud. Families, businesses, and shared devices can create innocent connections.\n\nAnother mistake is hiding the source records. Analysts need to verify why entities are linked.\n\nA third mistake is not measuring false positives by community or user segment, which can reveal unfair impact."
    }
  ],
  "answer": "Suspicious recipient network analysis looks for risky patterns across connected senders, recipients, accounts, devices, bank accounts, phone numbers, or addresses.",
  "reasoning": "Here is a network-analysis artifact:\n\n```txt\nUse case:\nRecipient risk review\n\nEntities:\n- Sender\n- Recipient\n- Device\n- Bank account\n- Phone number\n- Address\n- IP range\n\nSignals:\n- Many-to-one transfer pattern\n- Shared device across accounts\n- Repeated failed verification\n- High-risk geography\n- Prior confirmed fraud link\n\nReviewer view:\n- Network summary\n- Timeline\n- Top risk links\n- Source records\n- Confidence or rule source\n- Allowed actions\n\nGuardrails:\n- Human review before severe action\n- Avoid guilt by weak association alone\n- Log reason for decision\n```\n\nNetwork analysis should support investigation, not automatically punish every connection.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why can single-transaction review miss fraud?",
    "What are nodes and edges?",
    "Which network patterns are risky?",
    "Why should weak associations not automatically block users?",
    "What should the reviewer see?"
  ],
  "interviewAnswer": "I would design network analysis around entities, relationships, risky patterns, source records, reviewer views, confidence, allowed actions, human review, audit logs, and false-positive monitoring. The system should reveal suspicious networks while avoiding automatic harm from weak associations.\n\nA strong answer balances pattern detection with fairness and evidence.",
  "sourceLinks": [
    {
      "label": "FFIEC: Suspicious Activity Reporting",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "Suspicious recipient network analysis looks for risky patterns across connected senders, recipients, accounts, devices, bank accounts, phone numbers, or addresses.\n\nThe beginner mistake is looking only at one transaction at a time. Financial crime and fraud can appear as a network: many senders to one recipient, one device creating many accounts, or repeated small transfers through related identities.\n\nThe mental model:\n\n```txt\nNode:\nAn entity such as customer, recipient, device, bank account, or phone number.\n\nEdge:\nA relationship such as transfer, login, shared device, or shared bank account.\n\nPattern:\nA structure that may indicate risk.\n```\n\nThe TPM should make network signals understandable and reviewable.",
  "example": "Imagine ten new customers send money to the same recipient within two days. Each transfer alone looks small. Together, the pattern may be suspicious.\n\nThe product should show:\n\n```txt\nRecipient received 10 transfers from 10 new senders\nAll senders created accounts in the last 48 hours\nFour share the same device fingerprint\nTwo attempted chargebacks before\n```\n\nNow the analyst sees the network, not isolated dots.",
  "commonMistakes": "A common mistake is treating any shared attribute as proof of fraud. Families, businesses, and shared devices can create innocent connections.\n\nAnother mistake is hiding the source records. Analysts need to verify why entities are linked.\n\nA third mistake is not measuring false positives by community or user segment, which can reveal unfair impact."
};
