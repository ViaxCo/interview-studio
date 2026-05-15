import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-migration-planning",
  "track": "TPM",
  "category": "Technical Strategy",
  "level": "Intermediate",
  "question": "How would you plan a platform or data migration?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.\n\nFor a TPM, the migration is a product and operations problem, not just an engineering project. You need to know what changes for users, what changes for internal teams, what data must be preserved, how the team validates correctness, and how to recover if the migration goes wrong."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine moving scheduled transfers from an old payments service to a new orchestration platform.\n\nThe risky questions are:\n\n- Which scheduled transfers already exist?\n- Which service owns them during migration?\n- Can both systems execute the same transfer by accident?\n- What happens to transfers scheduled during the migration window?\n- How do we verify every schedule moved correctly?\n- Can we roll back?\n- What does support see if a user asks about a migrated transfer?\n\nThis is why a migration plan needs phases.\n\n```txt\nPhase 1: Inventory\n- List data, users, workflows, dependencies, and owners.\n\nPhase 2: Dual read or shadow mode\n- New system observes or mirrors behavior without owning the user outcome.\n\nPhase 3: Limited migration\n- Move a low-risk cohort or one corridor.\n\nPhase 4: Expand\n- Increase traffic or data volume after validation.\n\nPhase 5: Decommission\n- Remove old paths only after no active dependency remains.\n```"
    },
    {
      "title": "Make it practical",
      "body": "I would define migration readiness before moving anything.\n\n```txt\nMigration readiness\n\n- Source data is understood.\n- Target data model is mapped.\n- Validation rules are written.\n- Duplicate execution risk is controlled.\n- Rollback or forward-fix plan exists.\n- Support and operations have visibility.\n- Monitoring covers success, failure, latency, and data mismatch.\n- Stakeholders know the migration window and escalation path.\n```\n\nFor data, I would define reconciliation checks:\n\n```txt\nReconciliation checks\n\n- Count of records before and after.\n- Sum of money fields before and after.\n- Status mapping completeness.\n- Missing required fields.\n- Duplicate IDs.\n- Failed transformations.\n- Sample manual review of high-risk records.\n```\n\nThe TPM should also define communication. Users may not need to know about a backend migration, but support and operations usually do."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating migration as complete when data is copied. It is not complete until the product works, the data reconciles, and old dependencies are safely retired.\n\nAnother mistake is forgetting in-flight activity. Users may create, edit, or cancel things while migration is happening.\n\nA third mistake is assuming rollback is always easy. If the new system mutates data, the team may need a forward-fix plan instead."
    }
  ],
  "answer": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.",
  "reasoning": "I would define migration readiness before moving anything.\n\n```txt\nMigration readiness\n\n- Source data is understood.\n- Target data model is mapped.\n- Validation rules are written.\n- Duplicate execution risk is controlled.\n- Rollback or forward-fix plan exists.\n- Support and operations have visibility.\n- Monitoring covers success, failure, latency, and data mismatch.\n- Stakeholders know the migration window and escalation path.\n```\n\nFor data, I would define reconciliation checks:\n\n```txt\nReconciliation checks\n\n- Count of records before and after.\n- Sum of money fields before and after.\n- Status mapping completeness.\n- Missing required fields.\n- Duplicate IDs.\n- Failed transformations.\n- Sample manual review of high-risk records.\n```\n\nThe TPM should also define communication. Users may not need to know about a backend migration, but support and operations usually do.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is migration a product risk, not only an engineering task?",
    "What does shadow mode help test?",
    "Why is reconciliation important?",
    "What makes rollback hard?",
    "What should support know during a migration?"
  ],
  "interviewAnswer": "I would plan a migration by inventorying users, data, workflows, dependencies, and risks; defining phases; validating data mapping; controlling duplicate execution; adding reconciliation checks; preparing monitoring, support, rollback or forward-fix plans; and migrating gradually.\n\nA strong answer shows that the goal is not simply moving data. The goal is preserving customer trust while changing the system underneath.",
  "sourceLinks": [
    {
      "label": "Martin Fowler: Strangler Fig Application",
      "url": "https://martinfowler.com/bliki/StranglerFigApplication.html"
    },
    {
      "label": "AWS Prescriptive Guidance: Migration strategies",
      "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html"
    }
  ],
  "beginnerExplanation": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.\n\nFor a TPM, the migration is a product and operations problem, not just an engineering project. You need to know what changes for users, what changes for internal teams, what data must be preserved, how the team validates correctness, and how to recover if the migration goes wrong.",
  "example": "Imagine moving scheduled transfers from an old payments service to a new orchestration platform.\n\nThe risky questions are:\n\n- Which scheduled transfers already exist?\n- Which service owns them during migration?\n- Can both systems execute the same transfer by accident?\n- What happens to transfers scheduled during the migration window?\n- How do we verify every schedule moved correctly?\n- Can we roll back?\n- What does support see if a user asks about a migrated transfer?\n\nThis is why a migration plan needs phases.\n\n```txt\nPhase 1: Inventory\n- List data, users, workflows, dependencies, and owners.\n\nPhase 2: Dual read or shadow mode\n- New system observes or mirrors behavior without owning the user outcome.\n\nPhase 3: Limited migration\n- Move a low-risk cohort or one corridor.\n\nPhase 4: Expand\n- Increase traffic or data volume after validation.\n\nPhase 5: Decommission\n- Remove old paths only after no active dependency remains.\n```",
  "commonMistakes": "A common mistake is treating migration as complete when data is copied. It is not complete until the product works, the data reconciles, and old dependencies are safely retired.\n\nAnother mistake is forgetting in-flight activity. Users may create, edit, or cancel things while migration is happening.\n\nA third mistake is assuming rollback is always easy. If the new system mutates data, the team may need a forward-fix plan instead."
};
