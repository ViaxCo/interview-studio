---
id: tpm-security-review-product-manager
track: TPM
category: Security & Compliance
level: Intermediate
question: How should a product manager work with security review?
sources:
  - label: OWASP: Application Security Verification Standard
    url: https://owasp.org/www-project-application-security-verification-standard/
  - label: OWASP: Product Security Guide
    url: https://owasp.org/www-project-product-security-guide/
---

## Learn it

Security review is how the team identifies and reduces security risk before a feature creates harm.

The beginner mistake is treating security as a gatekeeper that says yes or no at the end. A better TPM brings security into the product conversation early enough to shape requirements, design, rollout, and operations.

The TPM does not need to be the security engineer. But they should understand what kind of feature increases security risk:

```txt
- Authentication or login
- Permissions and roles
- Payments or money movement
- Sensitive data
- File upload
- Public APIs
- Webhooks
- Admin tools
- Exports
- Third-party integrations
- User-generated content
```

If a feature touches one of these areas, security review is not optional polish. It is part of readiness.

## Walkthrough

Imagine the team is adding API keys for partners.

A weak TPM says:

```txt
Engineering will make API keys secure.
```

A stronger TPM asks product-level security questions:

```txt
Who can create an API key?
Can keys be scoped?
Can keys expire?
Can keys be revoked?
Can users see the key again after creation?
How are keys stored?
Are key creation and deletion audited?
Can support see keys?
What rate limits apply?
What happens if a key is leaked?
```

Those questions shape the product requirements before implementation.

## Make it practical

Here is a security review checklist a TPM can use:

```txt
Feature:
Partner API keys

Data and actions:
- Create key
- Name key
- Scope key to specific API actions
- Rotate key
- Revoke key
- View last used timestamp

Threats:
- Unauthorized user creates key
- Key leaks through screenshot, logs, or support tooling
- Key has too much access
- Abused key creates high-volume requests
- Deleted employee keeps access

Controls:
- Only Owner/Admin can create keys
- Key is shown once
- Secret is hashed at rest
- Scopes are required
- Rate limits apply
- Creation, rotation, and revocation are audited
- Last-used timestamp visible
- Emergency revoke path exists

Launch evidence:
- Permission tests pass
- Logs do not expose secret
- Rate-limit behavior tested
- Support runbook written
- Incident response path known
```

The TPM should make security findings actionable. If security says "scope keys," the requirement should become a user-visible behavior, not a vague ticket.

## Common mistakes

A common mistake is bringing security in after the UX and engineering plan are fixed. That creates conflict and rework.

Another mistake is treating security requirements as invisible. Many controls need product decisions: copy, permissions, admin UI, alerts, logs, and recovery.

A third mistake is accepting risk without naming it. If a security issue is deferred, the approver, reason, mitigation, and revisit date should be clear.

## Check yourself

- Which feature types usually need security review?
- Why should security be involved before implementation is complete?
- What product decisions exist in API key security?
- What does it mean to turn a security finding into a requirement?
- How should deferred security risk be documented?

## Interview version

I would work with security early by identifying sensitive data, risky actions, threat scenarios, required controls, test evidence, rollout risks, and operational responses. I would translate security findings into clear product requirements and track any accepted risk explicitly.

A strong TPM answer shows respect for security expertise while owning the product decisions needed to make the feature safe.
