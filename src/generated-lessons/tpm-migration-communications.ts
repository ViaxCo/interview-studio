import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-migration-communications",
  "track": "TPM",
  "category": "Migration & Change Management",
  "level": "Intermediate",
  "question": "How would you communicate a technical migration to customers and internal teams?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.\n\nThe beginner mistake is treating migration communication as a launch announcement. Migration communication is really change management. Different groups need different information at different times.\n\nCustomers care about:\n\n```txt\nWill anything break?\nWill my data change?\nDo I need to do anything?\nWhen is this happening?\nWho do I contact if something looks wrong?\n```\n\nInternal teams care about:\n\n```txt\nWhat is changing?\nWho is affected?\nWhat is the rollout plan?\nWhat are the known risks?\nHow do we support, monitor, and roll back?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine the company is migrating customers from an old reporting system to a new analytics platform.\n\nA weak communication plan says:\n\n```txt\nEmail customers when the migration is done.\n```\n\nThat is too late. If reports look different, exports change, or data refresh timing changes, customers and support will be surprised.\n\nA better plan segments the audience:\n\n```txt\nInternal engineering:\nTechnical rollout, data validation, rollback, monitoring.\n\nSupport:\nCustomer-facing explanation, known differences, escalation path.\n\nSales and customer success:\nWhich accounts are affected, timing, benefits, risks.\n\nCustomers:\nWhat changes, when, what action is needed, how to get help.\n\nLeadership:\nProgress, risk, customer impact, decision points.\n```\n\nThe message should match the audience. Customers do not need the database migration strategy. Support does need enough detail to answer real questions."
    },
    {
      "title": "Make it practical",
      "body": "Here is a migration communications plan:\n\n```txt\nMigration:\nMove business reporting from legacy reports to new analytics platform.\n\nCustomer-facing promise:\nReports will be faster, easier to filter, and exportable in the same formats.\n\nCustomer impact:\n- Report layout changes\n- Export names change\n- Historical data remains available\n- No action required for most customers\n- API report endpoint changes for customers using automation\n\nTimeline:\nWeek 1: internal validation\nWeek 2: beta customers\nWeek 3: 20 percent rollout\nWeek 4: full rollout if guardrails pass\n\nCustomer comms:\n- 14 days before: explain change and timeline\n- 3 days before: reminder with support link\n- Day of migration: confirmation and known differences\n- After migration: check-in for high-value accounts\n\nSupport enablement:\n- Macro for \"what changed\"\n- Known differences page\n- Escalation tag\n- Rollback contact\n- Data validation checklist\n```\n\nHere is a customer email structure:\n\n```txt\nSubject:\nUpcoming reporting update on May 28\n\nWhat is changing:\nYour reports will move to a faster analytics experience with the same historical data.\n\nWhen:\nWe plan to migrate your workspace between May 28 and May 30.\n\nWhat you need to do:\nMost customers do not need to take action. If you use automated report exports, review the endpoint notes linked below.\n\nWhat may look different:\nSome report names and filters have changed. Export formats remain available.\n\nHelp:\nContact support if a report looks missing or if totals do not match expectations.\n```\n\nGood migration communication reduces surprise. It does not promise zero risk."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is communicating only the benefit. Customers also need to know what changes and what action is required.\n\nAnother mistake is sending the same message to every audience. Engineering, support, executives, and customers need different levels of detail.\n\nA third mistake is not preparing support. If support learns from customers, the migration already feels sloppy."
    }
  ],
  "answer": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.",
  "reasoning": "Here is a migration communications plan:\n\n```txt\nMigration:\nMove business reporting from legacy reports to new analytics platform.\n\nCustomer-facing promise:\nReports will be faster, easier to filter, and exportable in the same formats.\n\nCustomer impact:\n- Report layout changes\n- Export names change\n- Historical data remains available\n- No action required for most customers\n- API report endpoint changes for customers using automation\n\nTimeline:\nWeek 1: internal validation\nWeek 2: beta customers\nWeek 3: 20 percent rollout\nWeek 4: full rollout if guardrails pass\n\nCustomer comms:\n- 14 days before: explain change and timeline\n- 3 days before: reminder with support link\n- Day of migration: confirmation and known differences\n- After migration: check-in for high-value accounts\n\nSupport enablement:\n- Macro for \"what changed\"\n- Known differences page\n- Escalation tag\n- Rollback contact\n- Data validation checklist\n```\n\nHere is a customer email structure:\n\n```txt\nSubject:\nUpcoming reporting update on May 28\n\nWhat is changing:\nYour reports will move to a faster analytics experience with the same historical data.\n\nWhen:\nWe plan to migrate your workspace between May 28 and May 30.\n\nWhat you need to do:\nMost customers do not need to take action. If you use automated report exports, review the endpoint notes linked below.\n\nWhat may look different:\nSome report names and filters have changed. Export formats remain available.\n\nHelp:\nContact support if a report looks missing or if totals do not match expectations.\n```\n\nGood migration communication reduces surprise. It does not promise zero risk.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is migration communication different from a launch announcement?",
    "What do customers need to know during a migration?",
    "Why should support be enabled before customers are notified?",
    "What should a customer migration email include?",
    "How can rollout stages reduce migration risk?"
  ],
  "interviewAnswer": "I would communicate a migration by segmenting audiences, explaining what changes, who is affected, timeline, required actions, risks, support path, and rollback or mitigation plans. I would prepare internal teams before customer communication and use staged rollout updates.\n\nA strong TPM answer shows that migration success depends on trust, timing, support readiness, and clear expectations, not only technical execution.",
  "sourceLinks": [
    {
      "label": "AWS: Migration strategies",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html"
    },
    {
      "label": "Martin Fowler: Strangler Fig Application",
      "url": "https://martinfowler.com/bliki/StranglerFigApplication.html"
    }
  ],
  "beginnerExplanation": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.\n\nThe beginner mistake is treating migration communication as a launch announcement. Migration communication is really change management. Different groups need different information at different times.\n\nCustomers care about:\n\n```txt\nWill anything break?\nWill my data change?\nDo I need to do anything?\nWhen is this happening?\nWho do I contact if something looks wrong?\n```\n\nInternal teams care about:\n\n```txt\nWhat is changing?\nWho is affected?\nWhat is the rollout plan?\nWhat are the known risks?\nHow do we support, monitor, and roll back?\n```",
  "example": "Imagine the company is migrating customers from an old reporting system to a new analytics platform.\n\nA weak communication plan says:\n\n```txt\nEmail customers when the migration is done.\n```\n\nThat is too late. If reports look different, exports change, or data refresh timing changes, customers and support will be surprised.\n\nA better plan segments the audience:\n\n```txt\nInternal engineering:\nTechnical rollout, data validation, rollback, monitoring.\n\nSupport:\nCustomer-facing explanation, known differences, escalation path.\n\nSales and customer success:\nWhich accounts are affected, timing, benefits, risks.\n\nCustomers:\nWhat changes, when, what action is needed, how to get help.\n\nLeadership:\nProgress, risk, customer impact, decision points.\n```\n\nThe message should match the audience. Customers do not need the database migration strategy. Support does need enough detail to answer real questions.",
  "commonMistakes": "A common mistake is communicating only the benefit. Customers also need to know what changes and what action is required.\n\nAnother mistake is sending the same message to every audience. Engineering, support, executives, and customers need different levels of detail.\n\nA third mistake is not preparing support. If support learns from customers, the migration already feels sloppy."
};
