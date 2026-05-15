import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ambiguous-executive-ask",
  "track": "TPM",
  "category": "Product Strategy",
  "level": "Intermediate",
  "question": "How would you handle an ambiguous executive request?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.\n\nExamples:\n\n```txt\n\"We need an AI strategy.\"\n\"Make onboarding enterprise-ready.\"\n\"Improve reliability.\"\n\"Monetize the API.\"\n\"Reduce operational risk.\"\n```\n\nThe beginner mistake is either obeying literally or pushing back too quickly. A stronger TPM treats the request as a signal. The executive may be pointing at a real business concern, but the team still needs clarity before committing roadmap capacity.\n\nThe TPM's job is to turn ambiguity into a decision:\n\n```txt\nWhat outcome are we trying to create?\nWhy now?\nFor whom?\nWhat evidence do we have?\nWhat options exist?\nWhat tradeoffs are acceptable?\nHow will we know it worked?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine the CEO says, \"We need to make the product enterprise-ready this quarter.\"\n\nA weak response is:\n\n```txt\nAdd SSO, audit logs, custom roles, and admin dashboard.\n```\n\nThose may be useful, but the team does not yet know the goal. Enterprise-ready for whom? A bank? A startup with 20 employees? A procurement checklist? A signed customer?\n\nA stronger TPM clarifies:\n\n```txt\nPossible meanings:\n- Close one named enterprise deal\n- Pass security review\n- Support teams and permissions\n- Improve admin controls\n- Meet compliance procurement requirements\n- Support higher-volume usage\n```\n\nEach meaning leads to a different plan."
    },
    {
      "title": "Make it practical",
      "body": "Here is a clarification memo:\n\n```txt\nRequest:\nMake the product enterprise-ready this quarter.\n\nClarifying questions:\n1. Which customer or segment is driving this?\n2. What deal, risk, or company goal makes this urgent?\n3. Which procurement or security blockers exist today?\n4. What must be true by end of quarter?\n5. What can wait?\n\nCurrent evidence:\n- Two enterprise prospects asked for SSO and audit logs.\n- One existing customer asked for role-based approvals.\n- Security questionnaire flagged data retention and admin access.\n\nOptions:\n\nOption A: Deal unblocker\nBuild SSO, audit log export, and security documentation.\n\nOption B: Admin foundation\nBuild organization model, roles, permissions, and audit events.\n\nOption C: Enterprise platform\nBuild SSO, custom roles, audit logs, approvals, data retention, and SCIM.\n\nRecommendation:\nChoose Option B plus security documentation this quarter.\n\nWhy:\nPermissions and auditability unlock multiple enterprise asks and reduce future rework. Full enterprise platform is too large for one quarter.\n```\n\nThis turns a vague request into options leadership can actually choose between."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is pretending ambiguity is clarity because the request came from an executive.\n\nAnother mistake is asking only \"what do you want us to build?\" Better questions uncover the business outcome and constraint.\n\nA third mistake is turning every executive request into an emergency. Some are urgent. Some need discovery. Some should be declined or reframed."
    }
  ],
  "answer": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.",
  "reasoning": "Here is a clarification memo:\n\n```txt\nRequest:\nMake the product enterprise-ready this quarter.\n\nClarifying questions:\n1. Which customer or segment is driving this?\n2. What deal, risk, or company goal makes this urgent?\n3. Which procurement or security blockers exist today?\n4. What must be true by end of quarter?\n5. What can wait?\n\nCurrent evidence:\n- Two enterprise prospects asked for SSO and audit logs.\n- One existing customer asked for role-based approvals.\n- Security questionnaire flagged data retention and admin access.\n\nOptions:\n\nOption A: Deal unblocker\nBuild SSO, audit log export, and security documentation.\n\nOption B: Admin foundation\nBuild organization model, roles, permissions, and audit events.\n\nOption C: Enterprise platform\nBuild SSO, custom roles, audit logs, approvals, data retention, and SCIM.\n\nRecommendation:\nChoose Option B plus security documentation this quarter.\n\nWhy:\nPermissions and auditability unlock multiple enterprise asks and reduce future rework. Full enterprise platform is too large for one quarter.\n```\n\nThis turns a vague request into options leadership can actually choose between.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should an ambiguous executive request be treated as a signal?",
    "What questions help clarify the real outcome?",
    "Why is \"enterprise-ready\" not specific enough?",
    "What should a clarification memo include?",
    "How can a TPM push back without being dismissive?"
  ],
  "interviewAnswer": "I would handle an ambiguous executive request by clarifying the business outcome, customer or segment, urgency, evidence, constraints, options, tradeoffs, and success metrics. Then I would present a recommendation and confirm the decision.\n\nA strong answer shows that the TPM can respect leadership direction while still protecting the team from vague execution.",
  "sourceLinks": [
    {
      "label": "Atlassian: Better team decision making",
      "url": "https://www.atlassian.com/team-playbook/examples/making-decisions"
    },
    {
      "label": "ProductPlan: Product vision vs product strategy",
      "url": "https://www.productplan.com/learn/product-vision-vs-product-strategy/"
    }
  ],
  "beginnerExplanation": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.\n\nExamples:\n\n```txt\n\"We need an AI strategy.\"\n\"Make onboarding enterprise-ready.\"\n\"Improve reliability.\"\n\"Monetize the API.\"\n\"Reduce operational risk.\"\n```\n\nThe beginner mistake is either obeying literally or pushing back too quickly. A stronger TPM treats the request as a signal. The executive may be pointing at a real business concern, but the team still needs clarity before committing roadmap capacity.\n\nThe TPM's job is to turn ambiguity into a decision:\n\n```txt\nWhat outcome are we trying to create?\nWhy now?\nFor whom?\nWhat evidence do we have?\nWhat options exist?\nWhat tradeoffs are acceptable?\nHow will we know it worked?\n```",
  "example": "Imagine the CEO says, \"We need to make the product enterprise-ready this quarter.\"\n\nA weak response is:\n\n```txt\nAdd SSO, audit logs, custom roles, and admin dashboard.\n```\n\nThose may be useful, but the team does not yet know the goal. Enterprise-ready for whom? A bank? A startup with 20 employees? A procurement checklist? A signed customer?\n\nA stronger TPM clarifies:\n\n```txt\nPossible meanings:\n- Close one named enterprise deal\n- Pass security review\n- Support teams and permissions\n- Improve admin controls\n- Meet compliance procurement requirements\n- Support higher-volume usage\n```\n\nEach meaning leads to a different plan.",
  "commonMistakes": "A common mistake is pretending ambiguity is clarity because the request came from an executive.\n\nAnother mistake is asking only \"what do you want us to build?\" Better questions uncover the business outcome and constraint.\n\nA third mistake is turning every executive request into an emergency. Some are urgent. Some need discovery. Some should be declined or reframed."
};
