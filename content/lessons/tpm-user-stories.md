---
id: tpm-user-stories
track: TPM
category: Product Requirements
level: Foundational
question: How do you write good user stories and acceptance criteria?
sources:
  - label: Atlassian: User stories
    url: https://www.atlassian.com/agile/project-management/user-stories
  - label: Agile Alliance: Acceptance criteria
    url: https://www.agilealliance.org/glossary/acceptance/
---

## Learn it

A user story describes a user need in a simple format. It helps the team understand who wants something, what they want, and why it matters.

A common format is:

```txt
As a [type of user], I want [capability], so that [benefit].
```

For example:

```txt
As a sender, I want to save a recipient, so that I can send repeat transfers faster.
```

This is useful because it keeps the team anchored on the user's goal, not only the feature name.

Acceptance criteria define what must be true for the story to be accepted as complete. They turn the story into testable expectations.

Without acceptance criteria, different people may imagine different versions of done.

## Walkthrough

Take the saved recipient story.

Weak acceptance criteria might say:

```txt
User can save recipient.
```

That is too vague. Can they save from the transfer flow? From settings? What fields are required? What happens if the recipient already exists? Can they edit? Delete? Is there a confirmation screen? What if validation fails?

Better acceptance criteria are specific and testable:

- User can save a recipient after a successful transfer.
- Required fields are name, country, payout method, and account identifier.
- If the account identifier is invalid, the user sees an inline error and cannot save.
- If the recipient already exists, the user is told and can choose the existing recipient.
- Saved recipients appear in the recipient picker on the next transfer.
- Support can see when a recipient was created and by whom.

Now engineering, design, QA, and product can work from the same understanding.

## Make it practical

Good user stories are small enough to deliver and test. If a story includes onboarding, verification, payments, notifications, admin tooling, reporting, and support scripts, it is probably too big.

Good acceptance criteria cover:

Functional behavior: what the user can do.

Validation: what input is required and what errors appear.

States: empty, loading, success, error, disabled, pending, and retry.

Permissions: who can use or see the feature.

Data: what is saved, changed, displayed, logged, or audited.

Non-functional needs: performance, accessibility, security, compliance, observability, and localization when relevant.

Acceptance criteria should not over-specify engineering implementation unless the implementation is truly a requirement. The goal is shared understanding, not micromanagement.

## Common mistakes

A common mistake is writing stories that are really tasks: "Build recipient API." That may be a valid engineering task, but it does not explain user value.

Another mistake is vague acceptance criteria. If QA cannot test it and engineering cannot know when it is done, it is not clear enough.

A third mistake is forgetting negative paths. Most product bugs live in edge states: duplicate data, invalid input, partial failure, permission errors, timeouts, and retry behavior.

## Check yourself

- What are the three parts of a common user story format?
- Why does the "so that" matter?
- What makes acceptance criteria testable?
- Why should negative paths be included?
- When can a user story be too large?

## Interview version

A good user story explains who the user is, what they need, and why it matters. Acceptance criteria define the testable conditions that must be true for the story to be complete.

I would make stories small, user-centered, and clear. I would write acceptance criteria for happy path, validation, error states, permissions, data changes, and relevant non-functional requirements. A strong answer shows that stories create shared understanding, not just backlog paperwork.
