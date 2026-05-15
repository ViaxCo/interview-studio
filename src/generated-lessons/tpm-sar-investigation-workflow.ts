import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-sar-investigation-workflow",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Advanced",
  "question": "How would you support a suspicious activity investigation workflow?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A suspicious activity investigation workflow helps compliance teams investigate activity that may need regulatory reporting.\n\nThe beginner mistake is thinking the TPM should decide whether to file a suspicious activity report. That decision belongs to trained compliance teams. The TPM's job is to build the product and operations support: alerts, cases, evidence, controls, audit logs, confidentiality, and filing readiness.\n\nThe mental model:\n\n```txt\nDetection:\nSomething looks suspicious.\n\nInvestigation:\nCompliance reviews facts and context.\n\nDecision:\nFile, do not file, continue monitoring, or escalate.\n```\n\nThe workflow must be careful because suspicious activity reporting has confidentiality expectations. Customer-facing teams may need limited information."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a money transmitter sees repeated transfers just below a review threshold, sent to many recipients, then followed by fast withdrawals.\n\nThe system should not simply create a generic alert. It should create an investigation package:\n\n```txt\nPattern:\nPossible structuring or suspicious transfer pattern\n\nEvidence:\nTransaction timeline, counterparties, amounts, geographies, customer profile, prior alerts, notes\n\nControls:\nCompliance-only access, audit log, escalation owner\n```\n\nThe product should make facts easy to review without letting sensitive investigation details leak."
    },
    {
      "title": "Make it practical",
      "body": "Here is a suspicious activity workflow artifact:\n\n```txt\nWorkflow stages:\n1. Alert generated\n2. Case opened\n3. Analyst reviews evidence\n4. More information requested internally\n5. Compliance decision recorded\n6. Filing workflow triggered if needed\n7. Supporting documentation retained\n8. Monitoring plan updated\n\nCase data:\n- Customer identity profile\n- Transaction history\n- Counterparty network\n- Risk rules triggered\n- Analyst notes\n- Decision rationale\n- Filing deadline if applicable\n- Supporting documentation links\n\nPermissions:\n- Compliance can view full case\n- Support sees only safe customer-service status\n- Product sees aggregated trends\n- Every access is logged\n```\n\nThe product requirement is not \"add a SAR button.\" It is a controlled investigation workflow."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is exposing investigation notes to support or broad internal audiences. Sensitive compliance work needs strict permissions.\n\nAnother mistake is losing supporting documentation. If a case is reviewed later, the evidence and decision rationale need to be available.\n\nA third mistake is making alerts without feedback. If analysts cannot mark false positives or explain decisions, the monitoring system cannot improve."
    }
  ],
  "answer": "A suspicious activity investigation workflow helps compliance teams investigate activity that may need regulatory reporting.",
  "reasoning": "Here is a suspicious activity workflow artifact:\n\n```txt\nWorkflow stages:\n1. Alert generated\n2. Case opened\n3. Analyst reviews evidence\n4. More information requested internally\n5. Compliance decision recorded\n6. Filing workflow triggered if needed\n7. Supporting documentation retained\n8. Monitoring plan updated\n\nCase data:\n- Customer identity profile\n- Transaction history\n- Counterparty network\n- Risk rules triggered\n- Analyst notes\n- Decision rationale\n- Filing deadline if applicable\n- Supporting documentation links\n\nPermissions:\n- Compliance can view full case\n- Support sees only safe customer-service status\n- Product sees aggregated trends\n- Every access is logged\n```\n\nThe product requirement is not \"add a SAR button.\" It is a controlled investigation workflow.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the TPM's role versus compliance's role?",
    "Why do permissions matter in suspicious activity workflows?",
    "What evidence should an investigation case include?",
    "Why should supporting documentation be retained?",
    "How can analyst decisions improve future monitoring?"
  ],
  "interviewAnswer": "I would support suspicious activity investigations with alert intake, case management, evidence timelines, analyst notes, compliance decision states, filing readiness, retention, strict permissions, audit logs, and feedback loops into monitoring. I would not make filing decisions myself; I would design the workflow that lets compliance make and document them.\n\nA strong answer shows respect for regulated ownership and confidentiality.",
  "sourceLinks": [
    {
      "label": "FDIC: Suspicious activity FAQ",
      "url": "https://www.fdic.gov/news/financial-institution-letters/2025/frequently-asked-questions-regarding-suspicious-activity"
    },
    {
      "label": "FFIEC: Suspicious Activity Reporting",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04"
    }
  ],
  "beginnerExplanation": "A suspicious activity investigation workflow helps compliance teams investigate activity that may need regulatory reporting.\n\nThe beginner mistake is thinking the TPM should decide whether to file a suspicious activity report. That decision belongs to trained compliance teams. The TPM's job is to build the product and operations support: alerts, cases, evidence, controls, audit logs, confidentiality, and filing readiness.\n\nThe mental model:\n\n```txt\nDetection:\nSomething looks suspicious.\n\nInvestigation:\nCompliance reviews facts and context.\n\nDecision:\nFile, do not file, continue monitoring, or escalate.\n```\n\nThe workflow must be careful because suspicious activity reporting has confidentiality expectations. Customer-facing teams may need limited information.",
  "example": "Imagine a money transmitter sees repeated transfers just below a review threshold, sent to many recipients, then followed by fast withdrawals.\n\nThe system should not simply create a generic alert. It should create an investigation package:\n\n```txt\nPattern:\nPossible structuring or suspicious transfer pattern\n\nEvidence:\nTransaction timeline, counterparties, amounts, geographies, customer profile, prior alerts, notes\n\nControls:\nCompliance-only access, audit log, escalation owner\n```\n\nThe product should make facts easy to review without letting sensitive investigation details leak.",
  "commonMistakes": "A common mistake is exposing investigation notes to support or broad internal audiences. Sensitive compliance work needs strict permissions.\n\nAnother mistake is losing supporting documentation. If a case is reviewed later, the evidence and decision rationale need to be available.\n\nA third mistake is making alerts without feedback. If analysts cannot mark false positives or explain decisions, the monitoring system cannot improve."
};
