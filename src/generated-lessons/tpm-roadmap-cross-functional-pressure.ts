import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-roadmap-cross-functional-pressure",
  "track": "TPM",
  "category": "Roadmap & Prioritization",
  "level": "Intermediate",
  "question": "How would you build a roadmap when engineering, compliance, sales, and leadership all want different things?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.\n\nThe beginner mistake is trying to satisfy every stakeholder by putting every request on the roadmap. That creates a roadmap that looks aligned in a meeting but fails in real life because the team cannot actually execute it.\n\nWhen engineering, compliance, sales, and leadership disagree, the TPM's job is not to pick the loudest stakeholder. The job is to translate requests into outcomes, constraints, risks, and sequencing.\n\nThe simple mental model is:\n\n```txt\nStakeholder request: \"Build this.\"\nTPM translation: \"What outcome, risk, obligation, or dependency does this represent?\"\nRoadmap decision: \"Given our goals and constraints, what should happen now, next, or later?\"\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech product team has four pressures:\n\n```txt\nSales:\n\"Enterprise client needs team permissions this quarter.\"\n\nCompliance:\n\"We need stronger transaction monitoring before volume increases.\"\n\nEngineering:\n\"The payout system is hard to change and needs refactoring.\"\n\nLeadership:\n\"We promised a new corridor launch.\"\n```\n\nA weak TPM turns this into a fight over whose item gets priority.\n\nA strong TPM clarifies what each request means:\n\n```txt\nTeam permissions:\nOutcome: unlock enterprise deals.\nRisk: poor permissions could expose sensitive financial data.\n\nTransaction monitoring:\nOutcome: reduce regulatory and fraud risk.\nRisk: launching more volume before controls may create compliance exposure.\n\nPayout refactor:\nOutcome: make future corridor launches faster and safer.\nRisk: invisible work may be hard to justify unless tied to launch reliability.\n\nNew corridor:\nOutcome: revenue growth and market expansion.\nRisk: launch fails if operations, compliance, and partner readiness are weak.\n```\n\nNow the roadmap conversation changes. It is no longer \"sales versus engineering.\" It becomes \"what sequence gets us revenue without creating unacceptable risk?\""
    },
    {
      "title": "Make it practical",
      "body": "I would create a roadmap view that separates outcomes from work items.\n\n```txt\nQuarter goal:\nExpand higher-value business payments safely.\n\nNow:\n- Complete transaction monitoring controls for higher-volume users.\n- Ship basic team roles: owner and finance user.\n- Refactor payout retry logic needed for corridor reliability.\n\nNext:\n- Launch corridor beta to limited customers.\n- Add audit log for business accounts.\n- Expand team permissions after usage data.\n\nLater:\n- Advanced approval workflows.\n- More corridors.\n- Bulk payout import.\n```\n\nThen I would explain tradeoffs plainly.\n\n```txt\nDecision:\nWe will not launch the corridor to all users this quarter.\n\nReason:\nThe compliance and retry-control work is required to make the launch safe.\n\nCompromise:\nWe will run a limited beta with selected customers after readiness checks pass.\n\nEvidence:\nSales still gets a customer-facing path, leadership gets progress, compliance gets controls, and engineering removes a key reliability risk.\n```\n\nThis is what strong TPM roadmap work often looks like. It does not make everyone perfectly happy, but it makes the reasoning clear."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is ranking stakeholder requests without translating them into outcomes and risks.\n\nAnother mistake is treating roadmap dates as promises before dependencies are understood.\n\nA third mistake is hiding the reason for tradeoffs. If stakeholders only hear \"not now,\" they may assume their request was ignored."
    }
  ],
  "answer": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.",
  "reasoning": "I would create a roadmap view that separates outcomes from work items.\n\n```txt\nQuarter goal:\nExpand higher-value business payments safely.\n\nNow:\n- Complete transaction monitoring controls for higher-volume users.\n- Ship basic team roles: owner and finance user.\n- Refactor payout retry logic needed for corridor reliability.\n\nNext:\n- Launch corridor beta to limited customers.\n- Add audit log for business accounts.\n- Expand team permissions after usage data.\n\nLater:\n- Advanced approval workflows.\n- More corridors.\n- Bulk payout import.\n```\n\nThen I would explain tradeoffs plainly.\n\n```txt\nDecision:\nWe will not launch the corridor to all users this quarter.\n\nReason:\nThe compliance and retry-control work is required to make the launch safe.\n\nCompromise:\nWe will run a limited beta with selected customers after readiness checks pass.\n\nEvidence:\nSales still gets a customer-facing path, leadership gets progress, compliance gets controls, and engineering removes a key reliability risk.\n```\n\nThis is what strong TPM roadmap work often looks like. It does not make everyone perfectly happy, but it makes the reasoning clear.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a roadmap different from a backlog?",
    "How can two stakeholder requests both be valid but still not both fit now?",
    "Why should roadmap items connect to outcomes?",
    "What is the danger of promising dates before dependency discovery?",
    "How can a TPM communicate a deferral without making it sound dismissive?"
  ],
  "interviewAnswer": "I would build the roadmap by translating each stakeholder request into the outcome, risk, constraint, and dependency behind it. Then I would sequence work around the company goal, customer impact, regulatory risk, technical dependencies, and delivery capacity.\n\nA strong answer shows that the TPM can create alignment without pretending every request can be done immediately.",
  "sourceLinks": [
    {
      "label": "Atlassian: Product roadmaps",
      "url": "https://www.atlassian.com/agile/product-management/product-roadmaps"
    },
    {
      "label": "ProductPlan: Product management frameworks",
      "url": "https://www.productplan.com/learn/product-management-frameworks"
    }
  ],
  "beginnerExplanation": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.\n\nThe beginner mistake is trying to satisfy every stakeholder by putting every request on the roadmap. That creates a roadmap that looks aligned in a meeting but fails in real life because the team cannot actually execute it.\n\nWhen engineering, compliance, sales, and leadership disagree, the TPM's job is not to pick the loudest stakeholder. The job is to translate requests into outcomes, constraints, risks, and sequencing.\n\nThe simple mental model is:\n\n```txt\nStakeholder request: \"Build this.\"\nTPM translation: \"What outcome, risk, obligation, or dependency does this represent?\"\nRoadmap decision: \"Given our goals and constraints, what should happen now, next, or later?\"\n```",
  "example": "Imagine a fintech product team has four pressures:\n\n```txt\nSales:\n\"Enterprise client needs team permissions this quarter.\"\n\nCompliance:\n\"We need stronger transaction monitoring before volume increases.\"\n\nEngineering:\n\"The payout system is hard to change and needs refactoring.\"\n\nLeadership:\n\"We promised a new corridor launch.\"\n```\n\nA weak TPM turns this into a fight over whose item gets priority.\n\nA strong TPM clarifies what each request means:\n\n```txt\nTeam permissions:\nOutcome: unlock enterprise deals.\nRisk: poor permissions could expose sensitive financial data.\n\nTransaction monitoring:\nOutcome: reduce regulatory and fraud risk.\nRisk: launching more volume before controls may create compliance exposure.\n\nPayout refactor:\nOutcome: make future corridor launches faster and safer.\nRisk: invisible work may be hard to justify unless tied to launch reliability.\n\nNew corridor:\nOutcome: revenue growth and market expansion.\nRisk: launch fails if operations, compliance, and partner readiness are weak.\n```\n\nNow the roadmap conversation changes. It is no longer \"sales versus engineering.\" It becomes \"what sequence gets us revenue without creating unacceptable risk?\"",
  "commonMistakes": "A common mistake is ranking stakeholder requests without translating them into outcomes and risks.\n\nAnother mistake is treating roadmap dates as promises before dependencies are understood.\n\nA third mistake is hiding the reason for tradeoffs. If stakeholders only hear \"not now,\" they may assume their request was ignored."
};
