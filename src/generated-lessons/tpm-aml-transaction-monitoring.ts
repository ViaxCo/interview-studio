import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-aml-transaction-monitoring",
  "track": "TPM",
  "category": "Compliance & Risk",
  "level": "Intermediate",
  "question": "How would you define requirements for AML transaction monitoring?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.\n\nThe beginner mistake is thinking monitoring is just a list of rules like \"flag transactions over $10,000.\" Real monitoring looks for patterns, context, risk, customer history, geography, velocity, counterparties, and unusual behavior.\n\nA TPM does not decide legal obligations alone. Compliance owns policy. But the TPM helps turn policy into a product and system workflow that can be built, tested, operated, and audited."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a remittance product. A user sends five transfers just below a review threshold to different recipients in a short period.\n\nThat pattern may be normal for a business user, suspicious for a new consumer, or explainable during a family emergency. The product must route it to the right review, not automatically accuse the user.\n\nA monitoring system needs:\n\n```txt\nSignals:\nAmount, velocity, corridor, recipient count, device, funding source, user age, risk tier.\n\nRules:\nThresholds, combinations, patterns, and escalation logic.\n\nCases:\nA place for analysts to review alerts and record decisions.\n\nOutcomes:\nClear, release, request information, limit account, file report, or escalate.\n```"
    },
    {
      "title": "Make it practical",
      "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nAML transaction monitoring for remittance\n\nAlert examples:\n- Rapid increase in transfer volume\n- Multiple recipients added in one day\n- Repeated transfers just below review threshold\n- High-risk corridor plus new device\n- Sender and recipient data mismatch\n\nCase workflow:\n1. Alert generated\n2. Analyst reviews customer profile and transaction history\n3. Analyst records disposition\n4. Product action applied if needed\n5. Audit trail preserved\n\nAnalyst tools:\n- User profile\n- KYC/KYB status\n- Transaction history\n- Recipient graph\n- Device and IP signals\n- Previous alerts\n- Notes and evidence\n```\n\nThe TPM also needs to define metrics:\n\n```txt\nOperational metrics:\n- Alert volume\n- Case backlog\n- Average review time\n- Escalation rate\n- False-positive rate\n- Repeat alert rate\n\nRisk metrics:\n- Confirmed suspicious cases\n- Loss prevented\n- Policy breaches\n- Late review count\n```\n\nThe product should avoid telling users \"you triggered AML monitoring.\" User-facing copy should be safe and plain, such as: \"We need more information before this transfer can continue.\""
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is creating too many alerts. If analysts drown in low-quality alerts, real risk may be missed.\n\nAnother mistake is not designing case management. Detection without review workflow is not operationally useful.\n\nA third mistake is exposing sensitive compliance logic to users. The product can explain next steps without revealing monitoring rules."
    }
  ],
  "answer": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.",
  "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nAML transaction monitoring for remittance\n\nAlert examples:\n- Rapid increase in transfer volume\n- Multiple recipients added in one day\n- Repeated transfers just below review threshold\n- High-risk corridor plus new device\n- Sender and recipient data mismatch\n\nCase workflow:\n1. Alert generated\n2. Analyst reviews customer profile and transaction history\n3. Analyst records disposition\n4. Product action applied if needed\n5. Audit trail preserved\n\nAnalyst tools:\n- User profile\n- KYC/KYB status\n- Transaction history\n- Recipient graph\n- Device and IP signals\n- Previous alerts\n- Notes and evidence\n```\n\nThe TPM also needs to define metrics:\n\n```txt\nOperational metrics:\n- Alert volume\n- Case backlog\n- Average review time\n- Escalation rate\n- False-positive rate\n- Repeat alert rate\n\nRisk metrics:\n- Confirmed suspicious cases\n- Loss prevented\n- Policy breaches\n- Late review count\n```\n\nThe product should avoid telling users \"you triggered AML monitoring.\" User-facing copy should be safe and plain, such as: \"We need more information before this transfer can continue.\"",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What does AML transaction monitoring try to detect?",
    "Why are patterns more useful than single thresholds?",
    "What should an analyst case view include?",
    "Why is false-positive rate important?",
    "Why should user-facing copy avoid exposing monitoring logic?"
  ],
  "interviewAnswer": "I would define AML monitoring requirements with compliance by mapping risk signals, alert rules, case workflow, analyst tools, dispositions, user actions, audit trail, and metrics like alert volume, backlog, review time, false positives, and confirmed suspicious cases.\n\nA strong TPM answer shows that monitoring is both a detection system and an operations product.",
  "sourceLinks": [
    {
      "label": "eCFR: MSB suspicious activity reporting",
      "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-C/section-1022.320"
    },
    {
      "label": "eCFR: Reports by financial institutions of suspicious transactions",
      "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.320"
    }
  ],
  "beginnerExplanation": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.\n\nThe beginner mistake is thinking monitoring is just a list of rules like \"flag transactions over $10,000.\" Real monitoring looks for patterns, context, risk, customer history, geography, velocity, counterparties, and unusual behavior.\n\nA TPM does not decide legal obligations alone. Compliance owns policy. But the TPM helps turn policy into a product and system workflow that can be built, tested, operated, and audited.",
  "example": "Imagine a remittance product. A user sends five transfers just below a review threshold to different recipients in a short period.\n\nThat pattern may be normal for a business user, suspicious for a new consumer, or explainable during a family emergency. The product must route it to the right review, not automatically accuse the user.\n\nA monitoring system needs:\n\n```txt\nSignals:\nAmount, velocity, corridor, recipient count, device, funding source, user age, risk tier.\n\nRules:\nThresholds, combinations, patterns, and escalation logic.\n\nCases:\nA place for analysts to review alerts and record decisions.\n\nOutcomes:\nClear, release, request information, limit account, file report, or escalate.\n```",
  "commonMistakes": "A common mistake is creating too many alerts. If analysts drown in low-quality alerts, real risk may be missed.\n\nAnother mistake is not designing case management. Detection without review workflow is not operationally useful.\n\nA third mistake is exposing sensitive compliance logic to users. The product can explain next steps without revealing monitoring rules."
};
