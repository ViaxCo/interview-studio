---
id: tpm-api-versioning
track: TPM
category: API & Partner Integration
level: Intermediate
question: How would you handle API versioning and backwards compatibility?
sources:
  - label: Stripe Docs: Versioning
    url: https://docs.stripe.com/api/versioning
  - label: Microsoft Azure: API versioning guidance
    url: https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api
---

## Learn it

API versioning is how you change an API without breaking the systems that already depend on it.

This matters because API users are not inside your sprint. A partner may have built code around your current fields, errors, statuses, and assumptions. If you change those suddenly, their product may break even if your own product still works.

Backwards compatibility means old clients can keep working after you ship a change. A compatible change adds something without changing the meaning of what already exists. A breaking change removes, renames, changes type, changes required behavior, or changes the meaning of a field.

## Walkthrough

Imagine a payout API returns this:

```json
{
  "id": "po_123",
  "status": "paid",
  "amount": 5000
}
```

Adding a new optional field is usually safe:

```json
{
  "id": "po_123",
  "status": "paid",
  "amount": 5000,
  "paid_at": "2026-05-14T10:00:00Z"
}
```

But changing `amount` from cents to dollars is breaking. Changing `status` from `"paid"` to `"completed"` is breaking. Making a previously optional field required is breaking.

The TPM has to help the team separate "we want cleaner design" from "partners can safely absorb this change."

## Make it practical

I would manage API changes with a compatibility policy.

```txt
Safe changes
- Add optional response fields.
- Add new endpoints.
- Add new optional request parameters.
- Add new webhook event types if consumers can ignore unknown events.

Risky or breaking changes
- Remove fields.
- Rename fields.
- Change field type.
- Change status meanings.
- Change required parameters.
- Change error-code behavior.
- Change authentication behavior.
```

Then I would define the migration plan.

```txt
Migration plan

1. Announce the new version and what changed.
2. Provide docs and before/after examples.
3. Let partners test in sandbox.
4. Keep the old version available for a defined period.
5. Track partner adoption.
6. Send reminders before deprecation.
7. Provide support for high-value or high-risk partners.
8. Remove the old version only after the agreed deprecation window.
```

The exact versioning method can vary: URL versions, headers, date-based versions, or account-level pinned versions. The product decision is less about which style sounds best and more about whether partners can understand, test, and adopt changes safely.

## Common mistakes

A common mistake is assuming a small change cannot break anyone. Small schema changes can break strict clients.

Another mistake is versioning too late. If the team waits until the first breaking change, partners may already depend on undocumented behavior.

A third mistake is forgetting webhooks. Webhook payloads and event names are API contracts too.

## Check yourself

- What makes an API change breaking?
- Why is adding an optional response field usually safer than renaming one?
- What should be in a deprecation plan?
- Why do webhook payloads need compatibility thinking?
- What adoption signals would you track during migration?

## Interview version

I would handle API versioning by defining a compatibility policy, separating safe additive changes from breaking changes, and creating a migration plan with docs, sandbox support, adoption tracking, deprecation timelines, and partner communication.

A strong answer shows respect for external dependencies. The goal is not only to ship a cleaner API. It is to change the API without surprising or breaking the systems that rely on it.
