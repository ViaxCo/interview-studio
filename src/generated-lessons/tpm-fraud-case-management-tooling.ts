import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fraud-case-management-tooling",
  "track": "TPM",
  "category": "Fraud & Risk",
  "level": "Intermediate",
  "question": "What should a fraud case management tool include?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Fraud case management is the system analysts use after something looks suspicious enough to investigate.\n\nThe beginner mistake is treating it like a notes app. A real case tool needs evidence, timelines, decisions, permissions, audit logs, and handoffs. In fintech, a fraud case may affect money movement, account access, regulatory reporting, customer support, and legal exposure.\n\nThe mental model:\n\n```txt\nAlert:\nSomething may be wrong.\n\nCase:\nAn investigation with evidence, owner, decision, and record.\n```\n\nA TPM should design the case tool so an analyst can understand what happened, decide what to do, and prove later why the decision was reasonable."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine three alerts point to the same customer:\n\n```txt\n1. New device login\n2. Failed password reset attempts\n3. Transfer to a newly added recipient\n```\n\nIf each alert lives separately, the analyst may miss the pattern. A good case tool groups them into one investigation.\n\nThe case should show a timeline:\n\n```txt\n09:02 New device login\n09:05 Password changed\n09:08 Phone number changed\n09:12 New recipient added\n09:14 Transfer attempted\n09:15 Transfer held\n```\n\nNow the analyst sees behavior, not just isolated signals."
    },
    {
      "title": "Make it practical",
      "body": "Here is a case management artifact:\n\n```txt\nCase type:\nPossible account takeover\n\nCase fields:\n- Case ID\n- Customer ID\n- Current account restrictions\n- Triggering alerts\n- Timeline of events\n- Linked transactions\n- Device and IP summary\n- Customer contact history\n- Analyst notes\n- Decision reason\n- Required next action\n\nDecision options:\n- No fraud found\n- Request customer verification\n- Keep account restricted\n- Reverse or cancel transaction\n- Escalate to compliance\n- Recommend suspicious activity review\n\nAudit requirements:\n- Who viewed the case\n- Who changed status\n- What evidence was used\n- What decision was made\n- When customer-facing action happened\n```\n\nThe tool should reduce context switching. Analysts should not need five dashboards to understand one case."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is letting analysts write free-form notes without structured decision reasons. That makes reporting and quality review painful.\n\nAnother mistake is allowing sensitive actions without audit logs. If someone freezes an account, releases funds, or closes a case, the company needs a durable record.\n\nA third mistake is ignoring duplicate cases. If the same customer appears in multiple queues, teams may make conflicting decisions."
    }
  ],
  "answer": "Fraud case management is the system analysts use after something looks suspicious enough to investigate.",
  "reasoning": "Here is a case management artifact:\n\n```txt\nCase type:\nPossible account takeover\n\nCase fields:\n- Case ID\n- Customer ID\n- Current account restrictions\n- Triggering alerts\n- Timeline of events\n- Linked transactions\n- Device and IP summary\n- Customer contact history\n- Analyst notes\n- Decision reason\n- Required next action\n\nDecision options:\n- No fraud found\n- Request customer verification\n- Keep account restricted\n- Reverse or cancel transaction\n- Escalate to compliance\n- Recommend suspicious activity review\n\nAudit requirements:\n- Who viewed the case\n- Who changed status\n- What evidence was used\n- What decision was made\n- When customer-facing action happened\n```\n\nThe tool should reduce context switching. Analysts should not need five dashboards to understand one case.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a case different from an alert?",
    "What events belong in a fraud timeline?",
    "Which actions should be audited?",
    "How would you prevent duplicate investigations?",
    "What should support be allowed to see without exposing sensitive investigation details?"
  ],
  "interviewAnswer": "A fraud case management tool should include linked alerts, customer and transaction context, event timeline, evidence, ownership, status, decision reasons, allowed actions, audit logs, escalation paths, and metrics for quality and throughput. It should help analysts make consistent decisions and preserve the record needed for review.\n\nA strong answer shows that fraud operations require workflow design, data design, permissions, and governance.",
  "sourceLinks": [
    {
      "label": "FFIEC: Suspicious Activity Reporting",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04"
    },
    {
      "label": "FDIC: Suspicious activity FAQ",
      "url": "https://www.fdic.gov/news/financial-institution-letters/2025/frequently-asked-questions-regarding-suspicious-activity"
    }
  ],
  "beginnerExplanation": "Fraud case management is the system analysts use after something looks suspicious enough to investigate.\n\nThe beginner mistake is treating it like a notes app. A real case tool needs evidence, timelines, decisions, permissions, audit logs, and handoffs. In fintech, a fraud case may affect money movement, account access, regulatory reporting, customer support, and legal exposure.\n\nThe mental model:\n\n```txt\nAlert:\nSomething may be wrong.\n\nCase:\nAn investigation with evidence, owner, decision, and record.\n```\n\nA TPM should design the case tool so an analyst can understand what happened, decide what to do, and prove later why the decision was reasonable.",
  "example": "Imagine three alerts point to the same customer:\n\n```txt\n1. New device login\n2. Failed password reset attempts\n3. Transfer to a newly added recipient\n```\n\nIf each alert lives separately, the analyst may miss the pattern. A good case tool groups them into one investigation.\n\nThe case should show a timeline:\n\n```txt\n09:02 New device login\n09:05 Password changed\n09:08 Phone number changed\n09:12 New recipient added\n09:14 Transfer attempted\n09:15 Transfer held\n```\n\nNow the analyst sees behavior, not just isolated signals.",
  "commonMistakes": "A common mistake is letting analysts write free-form notes without structured decision reasons. That makes reporting and quality review painful.\n\nAnother mistake is allowing sensitive actions without audit logs. If someone freezes an account, releases funds, or closes a case, the company needs a durable record.\n\nA third mistake is ignoring duplicate cases. If the same customer appears in multiple queues, teams may make conflicting decisions."
};
