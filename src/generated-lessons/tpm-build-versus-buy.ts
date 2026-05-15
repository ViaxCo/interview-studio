import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-build-versus-buy",
  "track": "TPM",
  "category": "Technical Strategy",
  "level": "Intermediate",
  "question": "How would you make a build versus buy decision?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.\n\nThe beginner mistake is reducing the decision to cost. Buying can look cheaper because the first invoice is smaller than a build estimate. Building can look cheaper because the team ignores maintenance, support, compliance, uptime, security, and opportunity cost.\n\nThe better question is: what capability should this company own, and what capability should it rent?\n\nIf the capability differentiates the product, gives strategic control, or is tightly tied to the customer promise, building may make sense. If it is a commodity capability where vendors are mature and switching risk is manageable, buying may be better."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech company deciding whether to build identity verification or buy a vendor.\n\nBuying may give faster launch, tested document capture, global coverage, fraud signals, compliance reporting, and operational tooling. But it creates vendor dependency, cost at scale, less customization, and potential data-sharing concerns.\n\nBuilding may give control, custom risk logic, tailored UX, and long-term differentiation. But it requires engineering, fraud expertise, compliance review, document processing, support tooling, monitoring, and ongoing regulatory updates.\n\nThe decision is not emotional. It is a tradeoff.\n\n```txt\nBuild if:\n- The capability differentiates the product.\n- Requirements are unusual or deeply tied to strategy.\n- Vendor limitations would block the roadmap.\n- Data control or compliance needs require ownership.\n- The team can maintain it responsibly.\n\nBuy if:\n- The capability is common and vendors are mature.\n- Speed matters more than customization.\n- Internal expertise is limited.\n- Compliance or operational burden is high.\n- Switching risk is acceptable.\n```"
    },
    {
      "title": "Make it practical",
      "body": "I would compare options across dimensions:\n\n```txt\nDecision: Build, buy, open source, or hybrid?\n\nCriteria:\n- User impact\n- Strategic differentiation\n- Time to market\n- Total cost of ownership\n- Integration effort\n- Maintenance burden\n- Security and compliance risk\n- Vendor lock-in\n- Data ownership\n- Reliability and support\n- Exit path\n```\n\nThen I would make a recommendation with assumptions.\n\n```txt\nRecommendation:\nBuy identity verification for launch, but build internal risk rules and vendor abstraction.\n\nWhy:\nVendor coverage gets us live faster, while internal rules preserve control over our highest-risk decisions.\n\nRisk:\nVendor cost may rise with volume.\n\nMitigation:\nNegotiate volume tiers, export decision data, and design integration boundaries so a future second vendor is possible.\n```\n\nThat is better than saying \"buy because it is faster\" or \"build because we want control.\" It shows the product logic."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is comparing vendor price to only initial build cost. The real comparison is total cost of ownership.\n\nAnother mistake is ignoring exit risk. If leaving a vendor later would be painful, that cost belongs in the decision.\n\nA third mistake is building a commodity capability because the team enjoys technical control. Product strategy should drive ownership, not engineering pride."
    }
  ],
  "answer": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.",
  "reasoning": "I would compare options across dimensions:\n\n```txt\nDecision: Build, buy, open source, or hybrid?\n\nCriteria:\n- User impact\n- Strategic differentiation\n- Time to market\n- Total cost of ownership\n- Integration effort\n- Maintenance burden\n- Security and compliance risk\n- Vendor lock-in\n- Data ownership\n- Reliability and support\n- Exit path\n```\n\nThen I would make a recommendation with assumptions.\n\n```txt\nRecommendation:\nBuy identity verification for launch, but build internal risk rules and vendor abstraction.\n\nWhy:\nVendor coverage gets us live faster, while internal rules preserve control over our highest-risk decisions.\n\nRisk:\nVendor cost may rise with volume.\n\nMitigation:\nNegotiate volume tiers, export decision data, and design integration boundaries so a future second vendor is possible.\n```\n\nThat is better than saying \"buy because it is faster\" or \"build because we want control.\" It shows the product logic.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is cost alone not enough for build versus buy?",
    "What does strategic differentiation mean?",
    "What is total cost of ownership?",
    "Why does exit path matter?",
    "When might a hybrid approach be best?"
  ],
  "interviewAnswer": "I would evaluate build versus buy by looking at strategic differentiation, user impact, time to market, total cost, integration effort, maintenance burden, compliance, reliability, vendor lock-in, data ownership, and exit path.\n\nA strong answer does not default to building or buying. It explains which capabilities the company should own and which it can safely rent, then recommends a path with risks and mitigations.",
  "sourceLinks": [
    {
      "label": "Product School: Build vs buy",
      "url": "https://productschool.com/blog/leadership/build-vs-buy"
    },
    {
      "label": "Atlassian Team Playbook: Trade-offs",
      "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
    }
  ],
  "beginnerExplanation": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.\n\nThe beginner mistake is reducing the decision to cost. Buying can look cheaper because the first invoice is smaller than a build estimate. Building can look cheaper because the team ignores maintenance, support, compliance, uptime, security, and opportunity cost.\n\nThe better question is: what capability should this company own, and what capability should it rent?\n\nIf the capability differentiates the product, gives strategic control, or is tightly tied to the customer promise, building may make sense. If it is a commodity capability where vendors are mature and switching risk is manageable, buying may be better.",
  "example": "Imagine a fintech company deciding whether to build identity verification or buy a vendor.\n\nBuying may give faster launch, tested document capture, global coverage, fraud signals, compliance reporting, and operational tooling. But it creates vendor dependency, cost at scale, less customization, and potential data-sharing concerns.\n\nBuilding may give control, custom risk logic, tailored UX, and long-term differentiation. But it requires engineering, fraud expertise, compliance review, document processing, support tooling, monitoring, and ongoing regulatory updates.\n\nThe decision is not emotional. It is a tradeoff.\n\n```txt\nBuild if:\n- The capability differentiates the product.\n- Requirements are unusual or deeply tied to strategy.\n- Vendor limitations would block the roadmap.\n- Data control or compliance needs require ownership.\n- The team can maintain it responsibly.\n\nBuy if:\n- The capability is common and vendors are mature.\n- Speed matters more than customization.\n- Internal expertise is limited.\n- Compliance or operational burden is high.\n- Switching risk is acceptable.\n```",
  "commonMistakes": "A common mistake is comparing vendor price to only initial build cost. The real comparison is total cost of ownership.\n\nAnother mistake is ignoring exit risk. If leaving a vendor later would be painful, that cost belongs in the decision.\n\nA third mistake is building a commodity capability because the team enjoys technical control. Product strategy should drive ownership, not engineering pride."
};
