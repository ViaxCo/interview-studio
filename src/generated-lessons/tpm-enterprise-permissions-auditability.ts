import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-enterprise-permissions-auditability",
  "track": "TPM",
  "category": "Enterprise Product",
  "level": "Intermediate",
  "question": "How would you design enterprise permissions, roles, and auditability?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?\n\nThe beginner mistake is treating permissions as a few checkboxes. In real enterprise products, permissions affect security, compliance, support, sales, onboarding, customer trust, and incident response.\n\nThere are usually three related ideas:\n\n```txt\nRole:\nA named bundle of permissions, such as Owner, Admin, Analyst, Finance user, or Viewer.\n\nPermission:\nA specific action, such as invite user, approve payout, export report, edit billing, or view audit log.\n\nAuditability:\nThe ability to see who did what, when, from where, and what changed.\n```\n\nFor a TPM, the job is not to invent random roles. The job is to understand customer workflows, risk, compliance needs, and administrative reality."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a business payments product. A customer says: \"We need team accounts before we can use this.\"\n\nThat request hides several product questions:\n\n1. Who can add team members?\n2. Who can create a payout?\n3. Who can approve a payout?\n4. Who can see recipient bank details?\n5. Who can export reports?\n6. Who can change billing or limits?\n7. Who can view audit logs?\n8. What happens when an employee leaves?\n\nA weak answer says, \"We will add Admin and Member.\"\n\nA stronger answer starts with workflows and risk:\n\n```txt\nWorkflow:\nBusiness sends supplier payments.\n\nRisky actions:\n- Add or edit recipient\n- Create payout\n- Approve payout\n- Raise transaction limit\n- Export financial report\n- Invite user\n- Change role\n- View sensitive recipient details\n\nLower-risk actions:\n- View payment status\n- Download own receipt\n- View masked recipient details\n```\n\nNow the team can design roles that match real jobs."
    },
    {
      "title": "Make it practical",
      "body": "Here is a simple permissions matrix:\n\n```txt\nPermission                      Owner  Admin  Finance  Viewer\n\nInvite user                     Yes    Yes    No       No\nChange user role                Yes    No     No       No\nCreate payout                   Yes    Yes    Yes      No\nApprove payout                  Yes    Yes    No       No\nView payout status              Yes    Yes    Yes      Yes\nExport reconciliation report    Yes    Yes    Yes      No\nView full recipient details     Yes    Yes    Masked   Masked\nChange billing settings         Yes    No     No       No\nView audit log                  Yes    Yes    No       No\n```\n\nThen define audit events:\n\n```txt\nAudit log events\n\nUser management:\n- User invited\n- User removed\n- Role changed\n\nMoney movement:\n- Payout created\n- Payout approved\n- Payout cancelled\n- Recipient edited\n\nSecurity:\n- Login failed repeatedly\n- MFA disabled\n- API key created\n- Webhook endpoint changed\n\nReporting:\n- Sensitive export downloaded\n- Audit log viewed\n```\n\nEach event should include actor, timestamp, organization, target object, old value when safe, new value when safe, IP or device context when available, and request ID.\n\nThe TPM should also decide default roles carefully. Enterprise buyers often expect least privilege. A new user should not accidentally get permission to move money or export sensitive data."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is designing roles around internal implementation instead of customer jobs.\n\nAnother mistake is forgetting audit logs until after enterprise customers ask for them. If the product handles money, identity, health, privacy, or admin actions, auditability is part of the product.\n\nA third mistake is letting every permission become fully custom too early. Custom roles are powerful, but they add complexity to UI, support, testing, docs, and permission bugs."
    }
  ],
  "answer": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?",
  "reasoning": "Here is a simple permissions matrix:\n\n```txt\nPermission                      Owner  Admin  Finance  Viewer\n\nInvite user                     Yes    Yes    No       No\nChange user role                Yes    No     No       No\nCreate payout                   Yes    Yes    Yes      No\nApprove payout                  Yes    Yes    No       No\nView payout status              Yes    Yes    Yes      Yes\nExport reconciliation report    Yes    Yes    Yes      No\nView full recipient details     Yes    Yes    Masked   Masked\nChange billing settings         Yes    No     No       No\nView audit log                  Yes    Yes    No       No\n```\n\nThen define audit events:\n\n```txt\nAudit log events\n\nUser management:\n- User invited\n- User removed\n- Role changed\n\nMoney movement:\n- Payout created\n- Payout approved\n- Payout cancelled\n- Recipient edited\n\nSecurity:\n- Login failed repeatedly\n- MFA disabled\n- API key created\n- Webhook endpoint changed\n\nReporting:\n- Sensitive export downloaded\n- Audit log viewed\n```\n\nEach event should include actor, timestamp, organization, target object, old value when safe, new value when safe, IP or device context when available, and request ID.\n\nThe TPM should also decide default roles carefully. Enterprise buyers often expect least privilege. A new user should not accidentally get permission to move money or export sensitive data.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between a role and a permission?",
    "Why do enterprise customers care about audit logs?",
    "What actions usually need stricter permission controls?",
    "Why is least privilege important?",
    "When might custom roles be worth the complexity?"
  ],
  "interviewAnswer": "I would design enterprise permissions by mapping customer workflows, identifying risky actions, defining roles, writing a permissions matrix, and specifying audit events. I would include least-privilege defaults, admin controls, sensitive-data masking, role-change history, and support visibility.\n\nA strong answer shows that permissions are not just UI checkboxes. They are part of security, compliance, customer trust, and enterprise readiness.",
  "sourceLinks": [
    {
      "label": "Google Cloud: IAM roles and permissions",
      "url": "https://cloud.google.com/iam/docs/permissions-reference"
    },
    {
      "label": "Atlassian Support: Audit log activities",
      "url": "https://support.atlassian.com/security-and-access-policies/docs/accessing-audit-log-activities/"
    }
  ],
  "beginnerExplanation": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?\n\nThe beginner mistake is treating permissions as a few checkboxes. In real enterprise products, permissions affect security, compliance, support, sales, onboarding, customer trust, and incident response.\n\nThere are usually three related ideas:\n\n```txt\nRole:\nA named bundle of permissions, such as Owner, Admin, Analyst, Finance user, or Viewer.\n\nPermission:\nA specific action, such as invite user, approve payout, export report, edit billing, or view audit log.\n\nAuditability:\nThe ability to see who did what, when, from where, and what changed.\n```\n\nFor a TPM, the job is not to invent random roles. The job is to understand customer workflows, risk, compliance needs, and administrative reality.",
  "example": "Imagine a business payments product. A customer says: \"We need team accounts before we can use this.\"\n\nThat request hides several product questions:\n\n1. Who can add team members?\n2. Who can create a payout?\n3. Who can approve a payout?\n4. Who can see recipient bank details?\n5. Who can export reports?\n6. Who can change billing or limits?\n7. Who can view audit logs?\n8. What happens when an employee leaves?\n\nA weak answer says, \"We will add Admin and Member.\"\n\nA stronger answer starts with workflows and risk:\n\n```txt\nWorkflow:\nBusiness sends supplier payments.\n\nRisky actions:\n- Add or edit recipient\n- Create payout\n- Approve payout\n- Raise transaction limit\n- Export financial report\n- Invite user\n- Change role\n- View sensitive recipient details\n\nLower-risk actions:\n- View payment status\n- Download own receipt\n- View masked recipient details\n```\n\nNow the team can design roles that match real jobs.",
  "commonMistakes": "A common mistake is designing roles around internal implementation instead of customer jobs.\n\nAnother mistake is forgetting audit logs until after enterprise customers ask for them. If the product handles money, identity, health, privacy, or admin actions, auditability is part of the product.\n\nA third mistake is letting every permission become fully custom too early. Custom roles are powerful, but they add complexity to UI, support, testing, docs, and permission bugs."
};
