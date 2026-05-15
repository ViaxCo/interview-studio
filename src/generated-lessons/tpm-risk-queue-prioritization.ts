import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-risk-queue-prioritization",
  "track": "TPM",
  "category": "Fraud & Risk",
  "level": "Intermediate",
  "question": "How would you design a fraud risk review queue?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A fraud risk queue is the workbench where risky transactions, accounts, or customers go when automation should not make the final decision alone.\n\nThe beginner mistake is thinking the queue is just a list of alerts. A useful queue is not only a list. It decides what gets reviewed first, what information reviewers need, what actions they can take, and how the team learns from mistakes.\n\nThink about it like triage in a busy operations team:\n\n```txt\nLow risk:\nLet it pass or monitor.\n\nMedium risk:\nSend to review if the signal is unusual.\n\nHigh risk:\nHold, restrict, or escalate before money moves.\n```\n\nThe TPM's job is to protect users and the business without creating a queue so noisy that reviewers drown in low-quality alerts."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech app that sees possible account takeover. A user logs in from a new device, changes their phone number, adds a new recipient, and tries to send $2,500 within ten minutes.\n\nThe product should not simply say \"fraud score is high.\" It needs a queue item that explains why the case matters.\n\n```txt\nRisk reason:\nNew device + profile change + new recipient + high-value transfer\n\nCustomer impact:\nTransfer held for review\n\nReviewer goal:\nDecide whether to release, request step-up verification, keep hold, or escalate\n```\n\nThat is much more actionable than an anonymous alert with a score."
    },
    {
      "title": "Make it practical",
      "body": "Here is a queue design artifact:\n\n```txt\nQueue item:\nSuspicious transfer review\n\nPriority:\nP0 if money leaves in under 15 minutes\nP1 if transfer is held before settlement\nP2 if only monitoring is needed\n\nReviewer sees:\n- Customer identity and tenure\n- Recent login/device changes\n- Transaction amount and destination\n- Past failed attempts\n- Model score and rule triggers\n- Similar previous cases\n- Allowed actions\n\nAllowed actions:\n- Release\n- Request verification\n- Hold temporarily\n- Freeze account\n- Escalate to compliance\n\nQuality metrics:\n- False-positive rate\n- Fraud loss avoided\n- Average review time\n- Oldest unreviewed P0 case\n- Appeal/reversal rate\n```\n\nThe queue should help reviewers make consistent decisions, not force them to improvise under pressure."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is prioritizing by alert time only. A low-risk alert from five hours ago may matter less than a high-risk transfer that settles in fifteen minutes.\n\nAnother mistake is hiding the reason for the alert. If reviewers cannot see why something was flagged, they cannot build trust or correct bad rules.\n\nA third mistake is measuring only queue volume. A smaller queue with better precision may be healthier than a big queue that looks productive but wastes reviewer time."
    }
  ],
  "answer": "A fraud risk queue is the workbench where risky transactions, accounts, or customers go when automation should not make the final decision alone.",
  "reasoning": "Here is a queue design artifact:\n\n```txt\nQueue item:\nSuspicious transfer review\n\nPriority:\nP0 if money leaves in under 15 minutes\nP1 if transfer is held before settlement\nP2 if only monitoring is needed\n\nReviewer sees:\n- Customer identity and tenure\n- Recent login/device changes\n- Transaction amount and destination\n- Past failed attempts\n- Model score and rule triggers\n- Similar previous cases\n- Allowed actions\n\nAllowed actions:\n- Release\n- Request verification\n- Hold temporarily\n- Freeze account\n- Escalate to compliance\n\nQuality metrics:\n- False-positive rate\n- Fraud loss avoided\n- Average review time\n- Oldest unreviewed P0 case\n- Appeal/reversal rate\n```\n\nThe queue should help reviewers make consistent decisions, not force them to improvise under pressure.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What makes a risk queue different from a normal task list?",
    "Why does settlement timing affect queue priority?",
    "What information should a reviewer see before making a decision?",
    "What actions should require a second approval?",
    "How would you know the queue is creating too many false positives?"
  ],
  "interviewAnswer": "I would design a fraud risk queue around priority, evidence, actionability, and feedback. The queue should rank cases by customer harm, money movement timing, risk severity, and operational SLA. Reviewers need clear risk reasons, relevant context, allowed actions, audit logs, and metrics for false positives, review time, fraud prevented, and escalations.\n\nA strong TPM answer shows that a queue is an operating system for decisions, not just a backlog of alerts.",
  "sourceLinks": [
    {
      "label": "FFIEC: Suspicious Activity Reporting",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04"
    },
    {
      "label": "Stripe Radar rules",
      "url": "https://docs.stripe.com/radar/rules?locale=en-GB"
    }
  ],
  "beginnerExplanation": "A fraud risk queue is the workbench where risky transactions, accounts, or customers go when automation should not make the final decision alone.\n\nThe beginner mistake is thinking the queue is just a list of alerts. A useful queue is not only a list. It decides what gets reviewed first, what information reviewers need, what actions they can take, and how the team learns from mistakes.\n\nThink about it like triage in a busy operations team:\n\n```txt\nLow risk:\nLet it pass or monitor.\n\nMedium risk:\nSend to review if the signal is unusual.\n\nHigh risk:\nHold, restrict, or escalate before money moves.\n```\n\nThe TPM's job is to protect users and the business without creating a queue so noisy that reviewers drown in low-quality alerts.",
  "example": "Imagine a fintech app that sees possible account takeover. A user logs in from a new device, changes their phone number, adds a new recipient, and tries to send $2,500 within ten minutes.\n\nThe product should not simply say \"fraud score is high.\" It needs a queue item that explains why the case matters.\n\n```txt\nRisk reason:\nNew device + profile change + new recipient + high-value transfer\n\nCustomer impact:\nTransfer held for review\n\nReviewer goal:\nDecide whether to release, request step-up verification, keep hold, or escalate\n```\n\nThat is much more actionable than an anonymous alert with a score.",
  "commonMistakes": "A common mistake is prioritizing by alert time only. A low-risk alert from five hours ago may matter less than a high-risk transfer that settles in fifteen minutes.\n\nAnother mistake is hiding the reason for the alert. If reviewers cannot see why something was flagged, they cannot build trust or correct bad rules.\n\nA third mistake is measuring only queue volume. A smaller queue with better precision may be healthier than a big queue that looks productive but wastes reviewer time."
};
