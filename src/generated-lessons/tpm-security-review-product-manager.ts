import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-security-review-product-manager",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Intermediate",
  "question": "How should a product manager work with security review?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Security review is how the team identifies and reduces security risk before a feature creates harm.\n\nThe beginner mistake is treating security as a gatekeeper that says yes or no at the end. A better TPM brings security into the product conversation early enough to shape requirements, design, rollout, and operations.\n\nThe TPM does not need to be the security engineer. But they should understand what kind of feature increases security risk:\n\n```txt\n- Authentication or login\n- Permissions and roles\n- Payments or money movement\n- Sensitive data\n- File upload\n- Public APIs\n- Webhooks\n- Admin tools\n- Exports\n- Third-party integrations\n- User-generated content\n```\n\nIf a feature touches one of these areas, security review is not optional polish. It is part of readiness."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine the team is adding API keys for partners.\n\nA weak TPM says:\n\n```txt\nEngineering will make API keys secure.\n```\n\nA stronger TPM asks product-level security questions:\n\n```txt\nWho can create an API key?\nCan keys be scoped?\nCan keys expire?\nCan keys be revoked?\nCan users see the key again after creation?\nHow are keys stored?\nAre key creation and deletion audited?\nCan support see keys?\nWhat rate limits apply?\nWhat happens if a key is leaked?\n```\n\nThose questions shape the product requirements before implementation."
    },
    {
      "title": "Make it practical",
      "body": "Here is a security review checklist a TPM can use:\n\n```txt\nFeature:\nPartner API keys\n\nData and actions:\n- Create key\n- Name key\n- Scope key to specific API actions\n- Rotate key\n- Revoke key\n- View last used timestamp\n\nThreats:\n- Unauthorized user creates key\n- Key leaks through screenshot, logs, or support tooling\n- Key has too much access\n- Abused key creates high-volume requests\n- Deleted employee keeps access\n\nControls:\n- Only Owner/Admin can create keys\n- Key is shown once\n- Secret is hashed at rest\n- Scopes are required\n- Rate limits apply\n- Creation, rotation, and revocation are audited\n- Last-used timestamp visible\n- Emergency revoke path exists\n\nLaunch evidence:\n- Permission tests pass\n- Logs do not expose secret\n- Rate-limit behavior tested\n- Support runbook written\n- Incident response path known\n```\n\nThe TPM should make security findings actionable. If security says \"scope keys,\" the requirement should become a user-visible behavior, not a vague ticket."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is bringing security in after the UX and engineering plan are fixed. That creates conflict and rework.\n\nAnother mistake is treating security requirements as invisible. Many controls need product decisions: copy, permissions, admin UI, alerts, logs, and recovery.\n\nA third mistake is accepting risk without naming it. If a security issue is deferred, the approver, reason, mitigation, and revisit date should be clear."
    }
  ],
  "answer": "Security review is how the team identifies and reduces security risk before a feature creates harm.",
  "reasoning": "Here is a security review checklist a TPM can use:\n\n```txt\nFeature:\nPartner API keys\n\nData and actions:\n- Create key\n- Name key\n- Scope key to specific API actions\n- Rotate key\n- Revoke key\n- View last used timestamp\n\nThreats:\n- Unauthorized user creates key\n- Key leaks through screenshot, logs, or support tooling\n- Key has too much access\n- Abused key creates high-volume requests\n- Deleted employee keeps access\n\nControls:\n- Only Owner/Admin can create keys\n- Key is shown once\n- Secret is hashed at rest\n- Scopes are required\n- Rate limits apply\n- Creation, rotation, and revocation are audited\n- Last-used timestamp visible\n- Emergency revoke path exists\n\nLaunch evidence:\n- Permission tests pass\n- Logs do not expose secret\n- Rate-limit behavior tested\n- Support runbook written\n- Incident response path known\n```\n\nThe TPM should make security findings actionable. If security says \"scope keys,\" the requirement should become a user-visible behavior, not a vague ticket.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Which feature types usually need security review?",
    "Why should security be involved before implementation is complete?",
    "What product decisions exist in API key security?",
    "What does it mean to turn a security finding into a requirement?",
    "How should deferred security risk be documented?"
  ],
  "interviewAnswer": "I would work with security early by identifying sensitive data, risky actions, threat scenarios, required controls, test evidence, rollout risks, and operational responses. I would translate security findings into clear product requirements and track any accepted risk explicitly.\n\nA strong TPM answer shows respect for security expertise while owning the product decisions needed to make the feature safe.",
  "sourceLinks": [
    {
      "label": "OWASP: Application Security Verification Standard",
      "url": "https://owasp.org/www-project-application-security-verification-standard/"
    },
    {
      "label": "OWASP: Product Security Guide",
      "url": "https://owasp.org/www-project-product-security-guide/"
    }
  ],
  "beginnerExplanation": "Security review is how the team identifies and reduces security risk before a feature creates harm.\n\nThe beginner mistake is treating security as a gatekeeper that says yes or no at the end. A better TPM brings security into the product conversation early enough to shape requirements, design, rollout, and operations.\n\nThe TPM does not need to be the security engineer. But they should understand what kind of feature increases security risk:\n\n```txt\n- Authentication or login\n- Permissions and roles\n- Payments or money movement\n- Sensitive data\n- File upload\n- Public APIs\n- Webhooks\n- Admin tools\n- Exports\n- Third-party integrations\n- User-generated content\n```\n\nIf a feature touches one of these areas, security review is not optional polish. It is part of readiness.",
  "example": "Imagine the team is adding API keys for partners.\n\nA weak TPM says:\n\n```txt\nEngineering will make API keys secure.\n```\n\nA stronger TPM asks product-level security questions:\n\n```txt\nWho can create an API key?\nCan keys be scoped?\nCan keys expire?\nCan keys be revoked?\nCan users see the key again after creation?\nHow are keys stored?\nAre key creation and deletion audited?\nCan support see keys?\nWhat rate limits apply?\nWhat happens if a key is leaked?\n```\n\nThose questions shape the product requirements before implementation.",
  "commonMistakes": "A common mistake is bringing security in after the UX and engineering plan are fixed. That creates conflict and rework.\n\nAnother mistake is treating security requirements as invisible. Many controls need product decisions: copy, permissions, admin UI, alerts, logs, and recovery.\n\nA third mistake is accepting risk without naming it. If a security issue is deferred, the approver, reason, mitigation, and revisit date should be clear."
};
