import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-dependency-risk",
  "track": "TPM",
  "category": "Execution & Delivery",
  "level": "Intermediate",
  "question": "How would you manage dependency risk across multiple teams?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A dependency is work that one team needs from another team before it can finish its own work.\n\nThe beginner mistake is discovering dependencies late. Late dependency discovery is painful because the other team may already have a full roadmap, a different priority, or a technical constraint nobody planned for.\n\nDependency risk is not only \"Team B is late.\" It can also mean the dependency is unclear, unowned, too large, technically risky, or not actually committed by the team expected to deliver it.\n\nThe mental model is:\n\n```txt\nDependency = \"We need something from someone else.\"\nDependency risk = \"That something may not arrive in the right shape, quality, or time.\"\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine the product team is launching business accounts.\n\nYour team owns the user experience. But the launch depends on:\n\n```txt\nIdentity team:\nBusiness verification API\n\nPlatform team:\nOrganization and role model\n\nData team:\nBusiness account reporting tables\n\nCompliance team:\nPolicy approval and review rules\n\nSupport operations:\nMacros and investigation flow\n```\n\nA weak plan says, \"We need these teams.\" A strong plan names the exact contract.\n\n```txt\nDependency register\n\nDependency:\nBusiness verification API\n\nOwner:\nIdentity team\n\nNeeded by:\nMarch 12 for integration testing\n\nDefinition of done:\n- Create verification request\n- Return pending, approved, rejected, needs_more_info\n- Include reason code for support\n- Sandbox supports approved and rejected test businesses\n\nRisk:\nIdentity team has not committed to reason codes.\n\nMitigation:\nEscalate by Feb 16 or reduce launch scope to approved/pending only.\n```\n\nThis makes the dependency visible enough to manage."
    },
    {
      "title": "Make it practical",
      "body": "I would manage dependency risk in four passes.\n\nFirst, discover dependencies early. Ask engineering what systems, teams, data, approvals, migrations, or operational changes are needed.\n\nSecond, define the contract. A dependency should have an owner, expected date, definition of done, integration point, test plan, and fallback.\n\nThird, track health. Not all dependencies need the same attention. Red ones need active management.\n\nFourth, communicate impact. If a dependency slips, say what customer, launch, compliance, or revenue outcome is affected.\n\n```txt\nDependency health model\n\nGreen:\nOwner confirmed, scope clear, date realistic, no blocker.\n\nYellow:\nOwner confirmed, but scope/date/risk still uncertain.\n\nRed:\nNo owner, no commitment, late delivery, or missing launch-critical behavior.\n```\n\nThe TPM should not only ask, \"Is it on track?\" A better question is, \"What evidence tells us it is on track?\""
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is tracking dependencies as vague bullets. \"Need data team\" is not a manageable dependency.\n\nAnother mistake is assuming another team's roadmap commitment exists because someone said \"sounds good\" in a meeting.\n\nA third mistake is escalating too late. Escalation is not drama. It is making a risk visible while there is still time to change the plan."
    }
  ],
  "answer": "A dependency is work that one team needs from another team before it can finish its own work.",
  "reasoning": "I would manage dependency risk in four passes.\n\nFirst, discover dependencies early. Ask engineering what systems, teams, data, approvals, migrations, or operational changes are needed.\n\nSecond, define the contract. A dependency should have an owner, expected date, definition of done, integration point, test plan, and fallback.\n\nThird, track health. Not all dependencies need the same attention. Red ones need active management.\n\nFourth, communicate impact. If a dependency slips, say what customer, launch, compliance, or revenue outcome is affected.\n\n```txt\nDependency health model\n\nGreen:\nOwner confirmed, scope clear, date realistic, no blocker.\n\nYellow:\nOwner confirmed, but scope/date/risk still uncertain.\n\nRed:\nNo owner, no commitment, late delivery, or missing launch-critical behavior.\n```\n\nThe TPM should not only ask, \"Is it on track?\" A better question is, \"What evidence tells us it is on track?\"",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What information should a dependency have before it is manageable?",
    "Why is \"owner confirmed\" different from \"someone agreed in a meeting\"?",
    "What makes a dependency red instead of yellow?",
    "Why should dependencies include a definition of done?",
    "What should a TPM communicate when a dependency slips?"
  ],
  "interviewAnswer": "I would manage dependency risk by discovering dependencies early, assigning owners, defining the contract and definition of done, tracking health, creating fallbacks, and communicating impact when risk changes.\n\nA strong TPM answer shows that dependencies are not just project-management labels. They are cross-team commitments that need evidence, ownership, and active risk management.",
  "sourceLinks": [
    {
      "label": "Atlassian: Advanced Roadmaps dependencies",
      "url": "https://www.atlassian.com/software/jira/guides/advanced-roadmaps/overview"
    },
    {
      "label": "Atlassian Support: Manage dependencies in plans",
      "url": "https://support.atlassian.com/jira-software-cloud/docs/view-and-manage-dependencies-in-advanced-roadmaps/"
    }
  ],
  "beginnerExplanation": "A dependency is work that one team needs from another team before it can finish its own work.\n\nThe beginner mistake is discovering dependencies late. Late dependency discovery is painful because the other team may already have a full roadmap, a different priority, or a technical constraint nobody planned for.\n\nDependency risk is not only \"Team B is late.\" It can also mean the dependency is unclear, unowned, too large, technically risky, or not actually committed by the team expected to deliver it.\n\nThe mental model is:\n\n```txt\nDependency = \"We need something from someone else.\"\nDependency risk = \"That something may not arrive in the right shape, quality, or time.\"\n```",
  "example": "Imagine the product team is launching business accounts.\n\nYour team owns the user experience. But the launch depends on:\n\n```txt\nIdentity team:\nBusiness verification API\n\nPlatform team:\nOrganization and role model\n\nData team:\nBusiness account reporting tables\n\nCompliance team:\nPolicy approval and review rules\n\nSupport operations:\nMacros and investigation flow\n```\n\nA weak plan says, \"We need these teams.\" A strong plan names the exact contract.\n\n```txt\nDependency register\n\nDependency:\nBusiness verification API\n\nOwner:\nIdentity team\n\nNeeded by:\nMarch 12 for integration testing\n\nDefinition of done:\n- Create verification request\n- Return pending, approved, rejected, needs_more_info\n- Include reason code for support\n- Sandbox supports approved and rejected test businesses\n\nRisk:\nIdentity team has not committed to reason codes.\n\nMitigation:\nEscalate by Feb 16 or reduce launch scope to approved/pending only.\n```\n\nThis makes the dependency visible enough to manage.",
  "commonMistakes": "A common mistake is tracking dependencies as vague bullets. \"Need data team\" is not a manageable dependency.\n\nAnother mistake is assuming another team's roadmap commitment exists because someone said \"sounds good\" in a meeting.\n\nA third mistake is escalating too late. Escalation is not drama. It is making a risk visible while there is still time to change the plan."
};
