import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-partner-risk-scorecard",
  "track": "TPM",
  "category": "Vendor & Partner Management",
  "level": "Advanced",
  "question": "How would you build a partner risk scorecard for a fintech vendor?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A partner risk scorecard helps the company evaluate and monitor vendors or partners that affect critical fintech workflows.\n\nThe beginner mistake is doing vendor review only before signing the contract. Partners change. Their uptime, support quality, data controls, compliance posture, pricing, and incident history can become better or worse after launch.\n\nThe mental model:\n\n```txt\nPre-launch review:\nShould we use this partner?\n\nOngoing scorecard:\nIs this partner still safe and effective?\n\nExit plan:\nWhat happens if we need to leave?\n```\n\nThe TPM should make vendor risk visible to product decisions."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a payout partner has good pricing but frequent weekend delays.\n\nIf the scorecard tracks only cost, the partner looks great. If it tracks customer impact, it may show:\n\n```txt\nWeekend payout SLA missed 6 times\nSupport response average 18 hours\nComplaint rate doubled in one corridor\nReconciliation files delayed twice\n```\n\nThat changes the roadmap conversation."
    },
    {
      "title": "Make it practical",
      "body": "Here is a partner scorecard artifact:\n\n```txt\nPartner:\nPayout processor\n\nScorecard dimensions:\n- Availability\n- Latency\n- Incident history\n- Support responsiveness\n- Compliance evidence\n- Security posture\n- Reconciliation quality\n- Data export ability\n- Cost at scale\n- Product coverage\n- Exit risk\n\nReview cadence:\n- Monthly for critical partners\n- Quarterly for lower-risk partners\n- Immediate review after severe incident\n\nDecision outputs:\n- Continue\n- Improve with action plan\n- Limit usage\n- Add backup partner\n- Replace partner\n```\n\nThe scorecard should create decisions, not just scores."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is relying on sales promises instead of operational evidence.\n\nAnother mistake is not including exit risk. A cheap partner can become expensive if leaving is painful.\n\nA third mistake is treating all partners the same. A critical money-movement partner needs deeper monitoring than a low-risk analytics tool."
    }
  ],
  "answer": "A partner risk scorecard helps the company evaluate and monitor vendors or partners that affect critical fintech workflows.",
  "reasoning": "Here is a partner scorecard artifact:\n\n```txt\nPartner:\nPayout processor\n\nScorecard dimensions:\n- Availability\n- Latency\n- Incident history\n- Support responsiveness\n- Compliance evidence\n- Security posture\n- Reconciliation quality\n- Data export ability\n- Cost at scale\n- Product coverage\n- Exit risk\n\nReview cadence:\n- Monthly for critical partners\n- Quarterly for lower-risk partners\n- Immediate review after severe incident\n\nDecision outputs:\n- Continue\n- Improve with action plan\n- Limit usage\n- Add backup partner\n- Replace partner\n```\n\nThe scorecard should create decisions, not just scores.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why does partner review continue after launch?",
    "What dimensions should a fintech partner scorecard include?",
    "Why is exit risk important?",
    "What incident data should affect the score?",
    "How should scorecard results change roadmap decisions?"
  ],
  "interviewAnswer": "I would build a partner risk scorecard with availability, latency, incidents, support, compliance, security, reconciliation quality, data controls, cost, coverage, and exit risk. I would review critical partners regularly and tie scores to action plans, backup strategy, limits, or replacement.\n\nA strong answer treats vendors as ongoing product dependencies.",
  "sourceLinks": [
    {
      "label": "FFIEC: Outsourcing Technology Services",
      "url": "https://ithandbook.ffiec.gov/it-booklets/outsourcing-technology-services.aspx"
    },
    {
      "label": "Google VSAQ",
      "url": "https://vsaq-demo.withgoogle.com/"
    }
  ],
  "beginnerExplanation": "A partner risk scorecard helps the company evaluate and monitor vendors or partners that affect critical fintech workflows.\n\nThe beginner mistake is doing vendor review only before signing the contract. Partners change. Their uptime, support quality, data controls, compliance posture, pricing, and incident history can become better or worse after launch.\n\nThe mental model:\n\n```txt\nPre-launch review:\nShould we use this partner?\n\nOngoing scorecard:\nIs this partner still safe and effective?\n\nExit plan:\nWhat happens if we need to leave?\n```\n\nThe TPM should make vendor risk visible to product decisions.",
  "example": "Imagine a payout partner has good pricing but frequent weekend delays.\n\nIf the scorecard tracks only cost, the partner looks great. If it tracks customer impact, it may show:\n\n```txt\nWeekend payout SLA missed 6 times\nSupport response average 18 hours\nComplaint rate doubled in one corridor\nReconciliation files delayed twice\n```\n\nThat changes the roadmap conversation.",
  "commonMistakes": "A common mistake is relying on sales promises instead of operational evidence.\n\nAnother mistake is not including exit risk. A cheap partner can become expensive if leaving is painful.\n\nA third mistake is treating all partners the same. A critical money-movement partner needs deeper monitoring than a low-risk analytics tool."
};
