---
id: tpm-enterprise-permissions-auditability
track: TPM
category: Enterprise Product
level: Intermediate
question: How would you design enterprise permissions, roles, and auditability?
sources:
  - label: Google Cloud: IAM roles and permissions
    url: https://cloud.google.com/iam/docs/permissions-reference
  - label: Atlassian Support: Audit log activities
    url: https://support.atlassian.com/security-and-access-policies/docs/accessing-audit-log-activities/
---

## Learn it

Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?

The beginner mistake is treating permissions as a few checkboxes. In real enterprise products, permissions affect security, compliance, support, sales, onboarding, customer trust, and incident response.

There are usually three related ideas:

```txt
Role:
A named bundle of permissions, such as Owner, Admin, Analyst, Finance user, or Viewer.

Permission:
A specific action, such as invite user, approve payout, export report, edit billing, or view audit log.

Auditability:
The ability to see who did what, when, from where, and what changed.
```

For a TPM, the job is not to invent random roles. The job is to understand customer workflows, risk, compliance needs, and administrative reality.

## Walkthrough

Imagine a business payments product. A customer says: "We need team accounts before we can use this."

That request hides several product questions:

1. Who can add team members?
2. Who can create a payout?
3. Who can approve a payout?
4. Who can see recipient bank details?
5. Who can export reports?
6. Who can change billing or limits?
7. Who can view audit logs?
8. What happens when an employee leaves?

A weak answer says, "We will add Admin and Member."

A stronger answer starts with workflows and risk:

```txt
Workflow:
Business sends supplier payments.

Risky actions:
- Add or edit recipient
- Create payout
- Approve payout
- Raise transaction limit
- Export financial report
- Invite user
- Change role
- View sensitive recipient details

Lower-risk actions:
- View payment status
- Download own receipt
- View masked recipient details
```

Now the team can design roles that match real jobs.

## Make it practical

Here is a simple permissions matrix:

```txt
Permission                      Owner  Admin  Finance  Viewer

Invite user                     Yes    Yes    No       No
Change user role                Yes    No     No       No
Create payout                   Yes    Yes    Yes      No
Approve payout                  Yes    Yes    No       No
View payout status              Yes    Yes    Yes      Yes
Export reconciliation report    Yes    Yes    Yes      No
View full recipient details     Yes    Yes    Masked   Masked
Change billing settings         Yes    No     No       No
View audit log                  Yes    Yes    No       No
```

Then define audit events:

```txt
Audit log events

User management:
- User invited
- User removed
- Role changed

Money movement:
- Payout created
- Payout approved
- Payout cancelled
- Recipient edited

Security:
- Login failed repeatedly
- MFA disabled
- API key created
- Webhook endpoint changed

Reporting:
- Sensitive export downloaded
- Audit log viewed
```

Each event should include actor, timestamp, organization, target object, old value when safe, new value when safe, IP or device context when available, and request ID.

The TPM should also decide default roles carefully. Enterprise buyers often expect least privilege. A new user should not accidentally get permission to move money or export sensitive data.

## Common mistakes

A common mistake is designing roles around internal implementation instead of customer jobs.

Another mistake is forgetting audit logs until after enterprise customers ask for them. If the product handles money, identity, health, privacy, or admin actions, auditability is part of the product.

A third mistake is letting every permission become fully custom too early. Custom roles are powerful, but they add complexity to UI, support, testing, docs, and permission bugs.

## Check yourself

- What is the difference between a role and a permission?
- Why do enterprise customers care about audit logs?
- What actions usually need stricter permission controls?
- Why is least privilege important?
- When might custom roles be worth the complexity?

## Interview version

I would design enterprise permissions by mapping customer workflows, identifying risky actions, defining roles, writing a permissions matrix, and specifying audit events. I would include least-privilege defaults, admin controls, sensitive-data masking, role-change history, and support visibility.

A strong answer shows that permissions are not just UI checkboxes. They are part of security, compliance, customer trust, and enterprise readiness.
