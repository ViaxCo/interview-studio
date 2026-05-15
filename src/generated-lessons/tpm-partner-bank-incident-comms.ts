import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-partner-bank-incident-comms",
  "track": "TPM",
  "category": "Observability & Operations",
  "level": "Advanced",
  "question": "How would you handle customer communications during a partner bank incident?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A partner bank incident can delay transfers, card authorizations, account updates, statements, or settlement even if your own app is healthy.\n\nThe beginner mistake is waiting until every detail is known before saying anything. In fintech, silence can create panic because users care about access to money. Communication should be accurate, calm, and updated as facts improve.\n\nThe mental model:\n\n```txt\nKnown:\nWhat we can confidently say.\n\nUnknown:\nWhat we are still investigating.\n\nNext update:\nWhen users will hear from us again.\n```\n\nThe TPM should coordinate product states, status page, support scripts, and customer messages."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a partner bank has delayed ACH processing. Users see transfers stuck.\n\nA weak message says:\n\n```txt\nSomething went wrong.\n```\n\nA stronger message says:\n\n```txt\nBank transfer processing is delayed due to a partner issue.\nYour transfer is still queued. You do not need to submit it again.\nNext update: 3:00 p.m.\n```\n\nThat message reduces duplicate attempts and support confusion."
    },
    {
      "title": "Make it practical",
      "body": "Here is an incident communication artifact:\n\n```txt\nIncident:\nPartner bank ACH delay\n\nCustomer segments:\n- Users with pending transfers\n- Users trying to initiate new transfers\n- Support agents\n- Internal leadership\n\nChannels:\n- In-app banner\n- Transfer detail status\n- Status page\n- Email for affected users\n- Support macro\n\nMessage requirements:\n- What is affected\n- What is not affected\n- Whether user action is needed\n- Expected next update\n- Safe wording approved by legal/compliance\n\nMetrics:\n- Affected users\n- Duplicate attempts\n- Support contact rate\n- Complaint rate\n- Time to first update\n```\n\nThe best incident communication prevents extra harm."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is overpromising a fix time. If the partner cannot guarantee it, do not make it sound guaranteed.\n\nAnother mistake is communicating only globally. Affected users need contextual status in the workflow they are using.\n\nA third mistake is forgetting support. If support does not get the same facts, customers hear conflicting answers."
    }
  ],
  "answer": "A partner bank incident can delay transfers, card authorizations, account updates, statements, or settlement even if your own app is healthy.",
  "reasoning": "Here is an incident communication artifact:\n\n```txt\nIncident:\nPartner bank ACH delay\n\nCustomer segments:\n- Users with pending transfers\n- Users trying to initiate new transfers\n- Support agents\n- Internal leadership\n\nChannels:\n- In-app banner\n- Transfer detail status\n- Status page\n- Email for affected users\n- Support macro\n\nMessage requirements:\n- What is affected\n- What is not affected\n- Whether user action is needed\n- Expected next update\n- Safe wording approved by legal/compliance\n\nMetrics:\n- Affected users\n- Duplicate attempts\n- Support contact rate\n- Complaint rate\n- Time to first update\n```\n\nThe best incident communication prevents extra harm.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is silence risky during money movement incidents?",
    "What should an incident message include?",
    "What channels should be coordinated?",
    "Why should support scripts match in-app copy?",
    "What metrics show communication is working?"
  ],
  "interviewAnswer": "I would handle partner bank incident communications by identifying affected users and flows, writing accurate approved messages, showing contextual in-app status, updating support scripts and status page, giving next-update timing, avoiding overpromises, and tracking support contacts, complaints, duplicate attempts, and time to first update.\n\nA strong answer treats incident communication as part of customer harm reduction.",
  "sourceLinks": [
    {
      "label": "Atlassian incident communication",
      "url": "https://www.atlassian.com/incident-management/incident-communication"
    },
    {
      "label": "CFPB: Consumer Complaint Program",
      "url": "https://www.consumerfinance.gov/compliance/consumer-complaint-program/"
    }
  ],
  "beginnerExplanation": "A partner bank incident can delay transfers, card authorizations, account updates, statements, or settlement even if your own app is healthy.\n\nThe beginner mistake is waiting until every detail is known before saying anything. In fintech, silence can create panic because users care about access to money. Communication should be accurate, calm, and updated as facts improve.\n\nThe mental model:\n\n```txt\nKnown:\nWhat we can confidently say.\n\nUnknown:\nWhat we are still investigating.\n\nNext update:\nWhen users will hear from us again.\n```\n\nThe TPM should coordinate product states, status page, support scripts, and customer messages.",
  "example": "Imagine a partner bank has delayed ACH processing. Users see transfers stuck.\n\nA weak message says:\n\n```txt\nSomething went wrong.\n```\n\nA stronger message says:\n\n```txt\nBank transfer processing is delayed due to a partner issue.\nYour transfer is still queued. You do not need to submit it again.\nNext update: 3:00 p.m.\n```\n\nThat message reduces duplicate attempts and support confusion.",
  "commonMistakes": "A common mistake is overpromising a fix time. If the partner cannot guarantee it, do not make it sound guaranteed.\n\nAnother mistake is communicating only globally. Affected users need contextual status in the workflow they are using.\n\nA third mistake is forgetting support. If support does not get the same facts, customers hear conflicting answers."
};
