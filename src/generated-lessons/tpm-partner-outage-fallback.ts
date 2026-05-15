import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-partner-outage-fallback",
  "track": "TPM",
  "category": "Operations",
  "level": "Intermediate",
  "question": "How would you handle a critical partner API outage?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.\n\nFor a TPM, the key question is not only \"when will the partner come back?\" It is \"how do we protect users, reduce harm, communicate clearly, and keep the business operating while the dependency is unhealthy?\"\n\nIf the partner moves money, verifies identity, sends notifications, or screens fraud, the outage can create financial, compliance, support, and trust risk."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a payout partner is timing out. Users are trying to send money.\n\nThe dangerous cases are:\n\n- A request timed out, but the partner may still process it.\n- A user retries and might create a duplicate payout.\n- Your app shows failure even though money may move later.\n- Webhooks are delayed, so status is stale.\n- Support cannot tell customers what happened.\n\nThe TPM should help classify the outage:\n\n```txt\nSeverity questions\n\n- Is every user affected or only one corridor?\n- Are new requests failing, or only status updates?\n- Is money movement uncertain?\n- Can users safely retry?\n- Is there a backup partner?\n- What message should users and support see?\n```"
    },
    {
      "title": "Make it practical",
      "body": "I would handle the outage in phases.\n\nFirst, contain risk. If duplicate money movement is possible, stop new attempts or disable retries until the state is known.\n\nSecond, degrade gracefully. If a backup partner exists, route eligible traffic there. If not, show clear pending or unavailable states instead of pretending everything is fine.\n\nThird, communicate internally. Engineering, support, operations, compliance, and leadership need a shared incident channel and status updates.\n\nFourth, communicate to users when needed. The message should explain what is affected, what users can do, and when the next update is expected.\n\nFifth, recover and reconcile. When the partner returns, confirm final statuses, identify stuck transactions, resolve duplicates, and update customers.\n\n```txt\nFallback decision guide\n\nIf partner status is unknown:\n- Pause new requests if duplicate execution is possible.\n- Show pending state for affected transactions.\n- Disable user retry until idempotency or final state is confirmed.\n\nIf backup partner is available:\n- Route only supported corridors or payment types.\n- Monitor failure rate and cost.\n- Keep partner-specific limits visible to support.\n\nIf no fallback exists:\n- Stop the affected flow.\n- Preserve user input where safe.\n- Notify when service returns.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is letting users retry when the first request may still complete. That can create duplicates.\n\nAnother mistake is hiding the problem behind generic errors. Users and support need the truth in plain language.\n\nA third mistake is ending the incident when the partner returns. Recovery also includes reconciliation, customer communication, and operational cleanup."
    }
  ],
  "answer": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.",
  "reasoning": "I would handle the outage in phases.\n\nFirst, contain risk. If duplicate money movement is possible, stop new attempts or disable retries until the state is known.\n\nSecond, degrade gracefully. If a backup partner exists, route eligible traffic there. If not, show clear pending or unavailable states instead of pretending everything is fine.\n\nThird, communicate internally. Engineering, support, operations, compliance, and leadership need a shared incident channel and status updates.\n\nFourth, communicate to users when needed. The message should explain what is affected, what users can do, and when the next update is expected.\n\nFifth, recover and reconcile. When the partner returns, confirm final statuses, identify stuck transactions, resolve duplicates, and update customers.\n\n```txt\nFallback decision guide\n\nIf partner status is unknown:\n- Pause new requests if duplicate execution is possible.\n- Show pending state for affected transactions.\n- Disable user retry until idempotency or final state is confirmed.\n\nIf backup partner is available:\n- Route only supported corridors or payment types.\n- Monitor failure rate and cost.\n- Keep partner-specific limits visible to support.\n\nIf no fallback exists:\n- Stop the affected flow.\n- Preserve user input where safe.\n- Notify when service returns.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why can a timeout be more dangerous than a clear failure?",
    "When should retries be disabled?",
    "What makes a fallback partner safe to use?",
    "Why does support need partner-specific visibility?",
    "What recovery work remains after the partner is back?"
  ],
  "interviewAnswer": "I would handle a partner outage by triaging scope and risk, containing harmful actions, disabling unsafe retries, routing to fallback where possible, communicating clearly, monitoring the affected flow, and reconciling final states after recovery.\n\nA strong TPM answer shows that partner outages are product incidents. The priority is customer trust, operational clarity, and safe recovery, not only waiting for the partner status page to turn green.",
  "sourceLinks": [
    {
      "label": "Google SRE: Addressing cascading failures",
      "url": "https://sre.google/sre-book/addressing-cascading-failures/"
    },
    {
      "label": "Atlassian: Incident management",
      "url": "https://www.atlassian.com/incident-management"
    }
  ],
  "beginnerExplanation": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.\n\nFor a TPM, the key question is not only \"when will the partner come back?\" It is \"how do we protect users, reduce harm, communicate clearly, and keep the business operating while the dependency is unhealthy?\"\n\nIf the partner moves money, verifies identity, sends notifications, or screens fraud, the outage can create financial, compliance, support, and trust risk.",
  "example": "Imagine a payout partner is timing out. Users are trying to send money.\n\nThe dangerous cases are:\n\n- A request timed out, but the partner may still process it.\n- A user retries and might create a duplicate payout.\n- Your app shows failure even though money may move later.\n- Webhooks are delayed, so status is stale.\n- Support cannot tell customers what happened.\n\nThe TPM should help classify the outage:\n\n```txt\nSeverity questions\n\n- Is every user affected or only one corridor?\n- Are new requests failing, or only status updates?\n- Is money movement uncertain?\n- Can users safely retry?\n- Is there a backup partner?\n- What message should users and support see?\n```",
  "commonMistakes": "A common mistake is letting users retry when the first request may still complete. That can create duplicates.\n\nAnother mistake is hiding the problem behind generic errors. Users and support need the truth in plain language.\n\nA third mistake is ending the incident when the partner returns. Recovery also includes reconciliation, customer communication, and operational cleanup."
};
