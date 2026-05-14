---
id: tpm-migration-planning
track: TPM
category: Technical Strategy
level: Intermediate
question: How would you plan a platform or data migration?
sources:
  - label: Martin Fowler: Strangler Fig Application
    url: https://martinfowler.com/bliki/StranglerFigApplication.html
  - label: AWS Prescriptive Guidance: Migration strategies
    url: https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html
---

## Learn it

A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.

For a TPM, the migration is a product and operations problem, not just an engineering project. You need to know what changes for users, what changes for internal teams, what data must be preserved, how the team validates correctness, and how to recover if the migration goes wrong.

## Walkthrough

Imagine moving scheduled transfers from an old payments service to a new orchestration platform.

The risky questions are:

- Which scheduled transfers already exist?
- Which service owns them during migration?
- Can both systems execute the same transfer by accident?
- What happens to transfers scheduled during the migration window?
- How do we verify every schedule moved correctly?
- Can we roll back?
- What does support see if a user asks about a migrated transfer?

This is why a migration plan needs phases.

```txt
Phase 1: Inventory
- List data, users, workflows, dependencies, and owners.

Phase 2: Dual read or shadow mode
- New system observes or mirrors behavior without owning the user outcome.

Phase 3: Limited migration
- Move a low-risk cohort or one corridor.

Phase 4: Expand
- Increase traffic or data volume after validation.

Phase 5: Decommission
- Remove old paths only after no active dependency remains.
```

## Make it practical

I would define migration readiness before moving anything.

```txt
Migration readiness

- Source data is understood.
- Target data model is mapped.
- Validation rules are written.
- Duplicate execution risk is controlled.
- Rollback or forward-fix plan exists.
- Support and operations have visibility.
- Monitoring covers success, failure, latency, and data mismatch.
- Stakeholders know the migration window and escalation path.
```

For data, I would define reconciliation checks:

```txt
Reconciliation checks

- Count of records before and after.
- Sum of money fields before and after.
- Status mapping completeness.
- Missing required fields.
- Duplicate IDs.
- Failed transformations.
- Sample manual review of high-risk records.
```

The TPM should also define communication. Users may not need to know about a backend migration, but support and operations usually do.

## Common mistakes

A common mistake is treating migration as complete when data is copied. It is not complete until the product works, the data reconciles, and old dependencies are safely retired.

Another mistake is forgetting in-flight activity. Users may create, edit, or cancel things while migration is happening.

A third mistake is assuming rollback is always easy. If the new system mutates data, the team may need a forward-fix plan instead.

## Check yourself

- Why is migration a product risk, not only an engineering task?
- What does shadow mode help test?
- Why is reconciliation important?
- What makes rollback hard?
- What should support know during a migration?

## Interview version

I would plan a migration by inventorying users, data, workflows, dependencies, and risks; defining phases; validating data mapping; controlling duplicate execution; adding reconciliation checks; preparing monitoring, support, rollback or forward-fix plans; and migrating gradually.

A strong answer shows that the goal is not simply moving data. The goal is preserving customer trust while changing the system underneath.
