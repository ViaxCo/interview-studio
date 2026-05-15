import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-api-versioning",
  "track": "TPM",
  "category": "API & Partner Integration",
  "level": "Intermediate",
  "question": "How would you handle API versioning and backwards compatibility?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "API versioning is how you change an API without breaking the systems that already depend on it.\n\nThis matters because API users are not inside your sprint. A partner may have built code around your current fields, errors, statuses, and assumptions. If you change those suddenly, their product may break even if your own product still works.\n\nBackwards compatibility means old clients can keep working after you ship a change. A compatible change adds something without changing the meaning of what already exists. A breaking change removes, renames, changes type, changes required behavior, or changes the meaning of a field."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a payout API returns this:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000\n}\n```\n\nAdding a new optional field is usually safe:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000,\n  \"paid_at\": \"2026-05-14T10:00:00Z\"\n}\n```\n\nBut changing `amount` from cents to dollars is breaking. Changing `status` from `\"paid\"` to `\"completed\"` is breaking. Making a previously optional field required is breaking.\n\nThe TPM has to help the team separate \"we want cleaner design\" from \"partners can safely absorb this change.\""
    },
    {
      "title": "Make it practical",
      "body": "I would manage API changes with a compatibility policy.\n\n```txt\nSafe changes\n- Add optional response fields.\n- Add new endpoints.\n- Add new optional request parameters.\n- Add new webhook event types if consumers can ignore unknown events.\n\nRisky or breaking changes\n- Remove fields.\n- Rename fields.\n- Change field type.\n- Change status meanings.\n- Change required parameters.\n- Change error-code behavior.\n- Change authentication behavior.\n```\n\nThen I would define the migration plan.\n\n```txt\nMigration plan\n\n1. Announce the new version and what changed.\n2. Provide docs and before/after examples.\n3. Let partners test in sandbox.\n4. Keep the old version available for a defined period.\n5. Track partner adoption.\n6. Send reminders before deprecation.\n7. Provide support for high-value or high-risk partners.\n8. Remove the old version only after the agreed deprecation window.\n```\n\nThe exact versioning method can vary: URL versions, headers, date-based versions, or account-level pinned versions. The product decision is less about which style sounds best and more about whether partners can understand, test, and adopt changes safely."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is assuming a small change cannot break anyone. Small schema changes can break strict clients.\n\nAnother mistake is versioning too late. If the team waits until the first breaking change, partners may already depend on undocumented behavior.\n\nA third mistake is forgetting webhooks. Webhook payloads and event names are API contracts too."
    }
  ],
  "answer": "API versioning is how you change an API without breaking the systems that already depend on it.",
  "reasoning": "I would manage API changes with a compatibility policy.\n\n```txt\nSafe changes\n- Add optional response fields.\n- Add new endpoints.\n- Add new optional request parameters.\n- Add new webhook event types if consumers can ignore unknown events.\n\nRisky or breaking changes\n- Remove fields.\n- Rename fields.\n- Change field type.\n- Change status meanings.\n- Change required parameters.\n- Change error-code behavior.\n- Change authentication behavior.\n```\n\nThen I would define the migration plan.\n\n```txt\nMigration plan\n\n1. Announce the new version and what changed.\n2. Provide docs and before/after examples.\n3. Let partners test in sandbox.\n4. Keep the old version available for a defined period.\n5. Track partner adoption.\n6. Send reminders before deprecation.\n7. Provide support for high-value or high-risk partners.\n8. Remove the old version only after the agreed deprecation window.\n```\n\nThe exact versioning method can vary: URL versions, headers, date-based versions, or account-level pinned versions. The product decision is less about which style sounds best and more about whether partners can understand, test, and adopt changes safely.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What makes an API change breaking?",
    "Why is adding an optional response field usually safer than renaming one?",
    "What should be in a deprecation plan?",
    "Why do webhook payloads need compatibility thinking?",
    "What adoption signals would you track during migration?"
  ],
  "interviewAnswer": "I would handle API versioning by defining a compatibility policy, separating safe additive changes from breaking changes, and creating a migration plan with docs, sandbox support, adoption tracking, deprecation timelines, and partner communication.\n\nA strong answer shows respect for external dependencies. The goal is not only to ship a cleaner API. It is to change the API without surprising or breaking the systems that rely on it.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: Versioning",
      "url": "https://docs.stripe.com/api/versioning"
    },
    {
      "label": "Microsoft Azure: API versioning guidance",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api"
    }
  ],
  "beginnerExplanation": "API versioning is how you change an API without breaking the systems that already depend on it.\n\nThis matters because API users are not inside your sprint. A partner may have built code around your current fields, errors, statuses, and assumptions. If you change those suddenly, their product may break even if your own product still works.\n\nBackwards compatibility means old clients can keep working after you ship a change. A compatible change adds something without changing the meaning of what already exists. A breaking change removes, renames, changes type, changes required behavior, or changes the meaning of a field.",
  "example": "Imagine a payout API returns this:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000\n}\n```\n\nAdding a new optional field is usually safe:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000,\n  \"paid_at\": \"2026-05-14T10:00:00Z\"\n}\n```\n\nBut changing `amount` from cents to dollars is breaking. Changing `status` from `\"paid\"` to `\"completed\"` is breaking. Making a previously optional field required is breaking.\n\nThe TPM has to help the team separate \"we want cleaner design\" from \"partners can safely absorb this change.\"",
  "commonMistakes": "A common mistake is assuming a small change cannot break anyone. Small schema changes can break strict clients.\n\nAnother mistake is versioning too late. If the team waits until the first breaking change, partners may already depend on undocumented behavior.\n\nA third mistake is forgetting webhooks. Webhook payloads and event names are API contracts too."
};
