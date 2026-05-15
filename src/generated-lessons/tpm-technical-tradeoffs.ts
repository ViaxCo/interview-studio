import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-technical-tradeoffs",
  "track": "TPM",
  "category": "Technical Strategy",
  "level": "Intermediate",
  "question": "How would you explain a technical tradeoff to non-technical stakeholders?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.\n\nNon-technical stakeholders do not need every implementation detail, but they do need to understand the consequences of the decision.\n\nThe TPM's job is to translate technical options into user impact, business impact, risk, cost, timing, and reversibility.\n\nDo not say, \"Engineering wants to use Kafka instead of webhooks.\" That may be meaningful to engineers but not to everyone else.\n\nSay, \"Option A is faster to launch but may struggle when volume grows. Option B takes three extra weeks but gives us better reliability and easier partner onboarding later.\""
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a team deciding whether to build a custom fraud rules engine or use a vendor.\n\nThe technical details may involve APIs, data models, latency, alerting, explainability, integrations, and long-term platform architecture. But the stakeholder decision might be:\n\n- Do we need to launch in six weeks?\n- How much fraud risk can we tolerate?\n- Do we need custom rules for our market?\n- What will compliance need to audit?\n- What happens if the vendor is wrong?\n- What is the cost now versus later?\n\nA clear tradeoff explanation compares options in plain language.\n\nOption 1: Use vendor rules first. Faster launch, lower engineering effort, proven baseline, but less customization and vendor dependency.\n\nOption 2: Build in-house. More control and flexibility, but slower launch, more engineering cost, and more operational responsibility.\n\nOption 3: Hybrid. Start with vendor baseline and build internal rule overrides for our highest-risk cases.\n\nNow stakeholders can decide based on strategy, not hidden technical preference.\n\nHere is a simple tradeoff memo:\n\n```txt\nDecision: Use vendor fraud rules for launch, then add internal rule overrides.\n\nContext:\nWe need fraud screening before launch. Building the full rules engine in-house would delay launch by six to eight weeks.\n\nOptions:\n1. Vendor only.\n2. Build fully in-house.\n3. Vendor baseline plus internal overrides for high-risk cases.\n\nRecommendation:\nChoose option 3.\n\nWhy:\nIt gets us to launch with a proven baseline while preserving control over our highest-risk cases.\n\nWhat we give up:\nWe accept vendor dependency and some limits in rule customization during the first launch.\n\nRisk:\nVendor decisions may be hard to explain to compliance or support.\n\nMitigation:\nLog vendor reason codes, build an admin review view, and create manual override rules for priority cases.\n\nRevisit trigger:\nIf manual overrides exceed 15% of flagged cases for two consecutive weeks, revisit the build-versus-buy decision.\n```\n\nThat memo is not just communication. It becomes a record of why the team chose one path and what would make them change their mind."
    },
    {
      "title": "Make it practical",
      "body": "I would present tradeoffs with a simple structure:\n\n1. Decision needed.\n2. Options.\n3. What we gain with each option.\n4. What we give up with each option.\n5. Risks and mitigations.\n6. Cost and timeline.\n7. Reversibility.\n8. Recommendation.\n\nReversibility is especially important. If a decision is easy to change later, the team can move faster. If it is hard to undo, such as a data model, vendor contract, security architecture, or public API, the team should be more deliberate.\n\nI would also avoid false precision. If estimates are uncertain, say so. Stakeholders can handle uncertainty better than surprise."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is overexplaining technical internals before explaining why the decision matters.\n\nAnother mistake is hiding the recommendation. TPMs should not only be note takers. They should synthesize and recommend, while being honest about tradeoffs.\n\nA third mistake is making the decision sound binary when there are staged options. Sometimes the best answer is a phased plan that learns quickly while limiting risk."
    }
  ],
  "answer": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.",
  "reasoning": "I would present tradeoffs with a simple structure:\n\n1. Decision needed.\n2. Options.\n3. What we gain with each option.\n4. What we give up with each option.\n5. Risks and mitigations.\n6. Cost and timeline.\n7. Reversibility.\n8. Recommendation.\n\nReversibility is especially important. If a decision is easy to change later, the team can move faster. If it is hard to undo, such as a data model, vendor contract, security architecture, or public API, the team should be more deliberate.\n\nI would also avoid false precision. If estimates are uncertain, say so. Stakeholders can handle uncertainty better than surprise.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is a technical tradeoff?",
    "Why should tradeoffs be explained in user and business terms?",
    "What does reversibility mean?",
    "Why is a recommendation useful?",
    "How can a phased option reduce risk?"
  ],
  "interviewAnswer": "I would explain the decision in plain language, compare options, and translate technical consequences into business outcomes: timeline, reliability, scalability, user experience, cost, risk, and reversibility.\n\nThen I would give a recommendation with tradeoffs and mitigations. A strong answer helps non-technical stakeholders make an informed decision without pretending the tradeoff does not exist.",
  "sourceLinks": [
    {
      "label": "Atlassian Team Playbook: Trade-offs",
      "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
    },
    {
      "label": "Atlassian Team Playbook: DACI",
      "url": "https://www.atlassian.com/team-playbook/plays/daci"
    }
  ],
  "beginnerExplanation": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.\n\nNon-technical stakeholders do not need every implementation detail, but they do need to understand the consequences of the decision.\n\nThe TPM's job is to translate technical options into user impact, business impact, risk, cost, timing, and reversibility.\n\nDo not say, \"Engineering wants to use Kafka instead of webhooks.\" That may be meaningful to engineers but not to everyone else.\n\nSay, \"Option A is faster to launch but may struggle when volume grows. Option B takes three extra weeks but gives us better reliability and easier partner onboarding later.\"",
  "example": "Imagine a team deciding whether to build a custom fraud rules engine or use a vendor.\n\nThe technical details may involve APIs, data models, latency, alerting, explainability, integrations, and long-term platform architecture. But the stakeholder decision might be:\n\n- Do we need to launch in six weeks?\n- How much fraud risk can we tolerate?\n- Do we need custom rules for our market?\n- What will compliance need to audit?\n- What happens if the vendor is wrong?\n- What is the cost now versus later?\n\nA clear tradeoff explanation compares options in plain language.\n\nOption 1: Use vendor rules first. Faster launch, lower engineering effort, proven baseline, but less customization and vendor dependency.\n\nOption 2: Build in-house. More control and flexibility, but slower launch, more engineering cost, and more operational responsibility.\n\nOption 3: Hybrid. Start with vendor baseline and build internal rule overrides for our highest-risk cases.\n\nNow stakeholders can decide based on strategy, not hidden technical preference.\n\nHere is a simple tradeoff memo:\n\n```txt\nDecision: Use vendor fraud rules for launch, then add internal rule overrides.\n\nContext:\nWe need fraud screening before launch. Building the full rules engine in-house would delay launch by six to eight weeks.\n\nOptions:\n1. Vendor only.\n2. Build fully in-house.\n3. Vendor baseline plus internal overrides for high-risk cases.\n\nRecommendation:\nChoose option 3.\n\nWhy:\nIt gets us to launch with a proven baseline while preserving control over our highest-risk cases.\n\nWhat we give up:\nWe accept vendor dependency and some limits in rule customization during the first launch.\n\nRisk:\nVendor decisions may be hard to explain to compliance or support.\n\nMitigation:\nLog vendor reason codes, build an admin review view, and create manual override rules for priority cases.\n\nRevisit trigger:\nIf manual overrides exceed 15% of flagged cases for two consecutive weeks, revisit the build-versus-buy decision.\n```\n\nThat memo is not just communication. It becomes a record of why the team chose one path and what would make them change their mind.",
  "commonMistakes": "A common mistake is overexplaining technical internals before explaining why the decision matters.\n\nAnother mistake is hiding the recommendation. TPMs should not only be note takers. They should synthesize and recommend, while being honest about tradeoffs.\n\nA third mistake is making the decision sound binary when there are staged options. Sometimes the best answer is a phased plan that learns quickly while limiting risk."
};
