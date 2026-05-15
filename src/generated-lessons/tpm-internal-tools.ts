import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-internal-tools",
  "track": "TPM",
  "category": "Internal Tools",
  "level": "Foundational",
  "question": "How would you prioritize and build an internal tool for operations or support teams?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.\n\nThe beginner mistake is treating internal users as if their pain matters less because they are employees. But internal tool problems can become customer problems. If support cannot investigate a failed payout, the customer waits. If compliance reviewers lack context, safe users may be blocked. If operations relies on spreadsheets, mistakes become expensive.\n\nThe mental model is:\n\n```txt\nExternal product:\nHelps customers complete jobs.\n\nInternal tool:\nHelps the company complete the work needed to serve customers.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine support agents need a tool to investigate payment failures.\n\nA weak requirement says:\n\n```txt\nBuild support dashboard.\n```\n\nThat is too vague. A useful TPM asks what job the agent is trying to do.\n\n```txt\nSupport agent job:\nWhen a customer says \"my payment failed,\" the agent needs to identify the payment, understand the current status, know whether money moved, see the reason for failure, choose the right next action, and explain it clearly to the customer.\n```\n\nNow the product shape is clearer.\n\n```txt\nMinimum useful internal tool\n\nSearch:\n- Customer email\n- Transaction ID\n- Recipient phone\n- Partner reference\n\nPayment view:\n- Current status\n- Status history\n- Failure reason\n- Partner response\n- Retry eligibility\n- Refund or reversal state\n\nAgent guidance:\n- What this status means\n- What action is allowed\n- What the agent should tell the customer\n- When to escalate\n```\n\nThis is much better than a generic admin table."
    },
    {
      "title": "Make it practical",
      "body": "I would prioritize internal tool work by looking at volume, severity, risk, time saved, customer impact, and error reduction.\n\n```txt\nInternal tool prioritization table\n\nProblem:\nAgents cannot see partner failure reason.\n\nEvidence:\n32 percent of payment tickets require engineering help.\n\nImpact:\nCustomers wait longer. Engineers get interrupted. Agents give vague answers.\n\nSolution:\nShow normalized failure reason and recommended support macro.\n\nSuccess metric:\nReduce payment-ticket escalation to engineering from 32 percent to 12 percent.\n\nRisk:\nReason codes may expose sensitive fraud information.\n\nMitigation:\nRole-based visibility and safe customer-facing explanation.\n```\n\nThe TPM also needs to think about permissions, audit logs, training, and operational ownership. Internal tools often touch sensitive data."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is copying database fields into a UI and calling it a tool. Internal users need workflow support, not raw data dumps.\n\nAnother mistake is skipping research because the users are coworkers. Watching five agents do the job can reveal more than a week of guessing.\n\nA third mistake is ignoring governance. Internal tools need permissions, audit logs, and clear rules about who can take risky actions."
    }
  ],
  "answer": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.",
  "reasoning": "I would prioritize internal tool work by looking at volume, severity, risk, time saved, customer impact, and error reduction.\n\n```txt\nInternal tool prioritization table\n\nProblem:\nAgents cannot see partner failure reason.\n\nEvidence:\n32 percent of payment tickets require engineering help.\n\nImpact:\nCustomers wait longer. Engineers get interrupted. Agents give vague answers.\n\nSolution:\nShow normalized failure reason and recommended support macro.\n\nSuccess metric:\nReduce payment-ticket escalation to engineering from 32 percent to 12 percent.\n\nRisk:\nReason codes may expose sensitive fraud information.\n\nMitigation:\nRole-based visibility and safe customer-facing explanation.\n```\n\nThe TPM also needs to think about permissions, audit logs, training, and operational ownership. Internal tools often touch sensitive data.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is an internal tool still a product?",
    "How can internal tool problems hurt customers?",
    "What is the difference between raw data and workflow support?",
    "Why do permissions matter in internal tools?",
    "What metrics could prove an internal tool is working?"
  ],
  "interviewAnswer": "I would build an internal tool by studying the user's workflow, defining the job to be done, prioritizing high-volume or high-risk pain points, designing for speed and accuracy, and measuring outcomes like resolution time, escalation rate, error rate, and customer impact.\n\nA strong answer treats internal teams as real users and connects internal efficiency to customer outcomes and business risk.",
  "sourceLinks": [
    {
      "label": "GOV.UK Service Manual: User needs",
      "url": "https://www.gov.uk/service-manual/user-centred-design/user-needs"
    },
    {
      "label": "Atlassian: IT service management",
      "url": "https://www.atlassian.com/itsm"
    }
  ],
  "beginnerExplanation": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.\n\nThe beginner mistake is treating internal users as if their pain matters less because they are employees. But internal tool problems can become customer problems. If support cannot investigate a failed payout, the customer waits. If compliance reviewers lack context, safe users may be blocked. If operations relies on spreadsheets, mistakes become expensive.\n\nThe mental model is:\n\n```txt\nExternal product:\nHelps customers complete jobs.\n\nInternal tool:\nHelps the company complete the work needed to serve customers.\n```",
  "example": "Imagine support agents need a tool to investigate payment failures.\n\nA weak requirement says:\n\n```txt\nBuild support dashboard.\n```\n\nThat is too vague. A useful TPM asks what job the agent is trying to do.\n\n```txt\nSupport agent job:\nWhen a customer says \"my payment failed,\" the agent needs to identify the payment, understand the current status, know whether money moved, see the reason for failure, choose the right next action, and explain it clearly to the customer.\n```\n\nNow the product shape is clearer.\n\n```txt\nMinimum useful internal tool\n\nSearch:\n- Customer email\n- Transaction ID\n- Recipient phone\n- Partner reference\n\nPayment view:\n- Current status\n- Status history\n- Failure reason\n- Partner response\n- Retry eligibility\n- Refund or reversal state\n\nAgent guidance:\n- What this status means\n- What action is allowed\n- What the agent should tell the customer\n- When to escalate\n```\n\nThis is much better than a generic admin table.",
  "commonMistakes": "A common mistake is copying database fields into a UI and calling it a tool. Internal users need workflow support, not raw data dumps.\n\nAnother mistake is skipping research because the users are coworkers. Watching five agents do the job can reveal more than a week of guessing.\n\nA third mistake is ignoring governance. Internal tools need permissions, audit logs, and clear rules about who can take risky actions."
};
