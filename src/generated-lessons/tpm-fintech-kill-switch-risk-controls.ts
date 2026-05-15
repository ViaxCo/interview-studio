import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fintech-kill-switch-risk-controls",
  "track": "TPM",
  "category": "Observability & Operations",
  "level": "Advanced",
  "question": "How would you design kill switches for high-risk fintech features?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A kill switch is a control that lets the company quickly pause or limit a feature when continuing would create harm.\n\nThe beginner mistake is thinking kill switches are only engineering toggles. In fintech, a kill switch is a product safety tool. It needs owners, triggers, customer states, rollback behavior, support scripts, monitoring, and audit logs.\n\nThe mental model:\n\n```txt\nDetect:\nA metric or incident shows danger.\n\nDisable or limit:\nStop the risky action without breaking everything.\n\nRecover:\nExplain state, fix root cause, and safely re-enable.\n```\n\nThe TPM should define what happens to users already inside the flow."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an AI fraud rule starts blocking too many legitimate transfers.\n\nA weak kill switch disables all transfers. That may create more harm.\n\nA better design offers levels:\n\n```txt\nLevel 1:\nTurn off the new AI rule only.\n\nLevel 2:\nRoute high-risk transfers to manual review.\n\nLevel 3:\nPause new transfers in one corridor.\n\nLevel 4:\nPause all transfers if financial harm is severe.\n```\n\nGranularity matters."
    },
    {
      "title": "Make it practical",
      "body": "Here is a kill-switch artifact:\n\n```txt\nFeature:\nAI transfer risk decisioning\n\nKill switch levels:\n- Disable AI recommendation\n- Force human review\n- Block only high-risk corridor\n- Pause all outbound transfers\n\nTriggers:\n- False-positive rate above threshold\n- Fraud loss spike\n- Model unavailable\n- Partner outage\n- Severe customer complaint pattern\n\nRequirements:\n- Owner and backup owner\n- Audit log for switch changes\n- Customer-facing state\n- Support macro\n- Re-enable checklist\n- Post-incident review\n```\n\nThe switch should be tested before it is needed."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is making the switch too broad. Pausing an entire product for a narrow issue can hurt customers.\n\nAnother mistake is having no owner. During incidents, unclear authority wastes time.\n\nA third mistake is re-enabling without evidence that the failure is fixed."
    }
  ],
  "answer": "A kill switch is a control that lets the company quickly pause or limit a feature when continuing would create harm.",
  "reasoning": "Here is a kill-switch artifact:\n\n```txt\nFeature:\nAI transfer risk decisioning\n\nKill switch levels:\n- Disable AI recommendation\n- Force human review\n- Block only high-risk corridor\n- Pause all outbound transfers\n\nTriggers:\n- False-positive rate above threshold\n- Fraud loss spike\n- Model unavailable\n- Partner outage\n- Severe customer complaint pattern\n\nRequirements:\n- Owner and backup owner\n- Audit log for switch changes\n- Customer-facing state\n- Support macro\n- Re-enable checklist\n- Post-incident review\n```\n\nThe switch should be tested before it is needed.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a kill switch more than a feature flag?",
    "What should happen to in-progress transactions?",
    "Why are switch levels useful?",
    "Who should be allowed to activate it?",
    "What should be checked before re-enable?"
  ],
  "interviewAnswer": "I would design kill switches with scoped levels, trigger thresholds, owners, audit logs, customer states, support scripts, monitoring, rollback behavior, and re-enable criteria. For high-risk fintech or AI features, the switch should reduce harm without unnecessarily breaking safe workflows.\n\nA strong answer shows operational maturity under pressure.",
  "sourceLinks": [
    {
      "label": "Atlassian: Incident communication",
      "url": "https://www.atlassian.com/incident-management/incident-communication"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "A kill switch is a control that lets the company quickly pause or limit a feature when continuing would create harm.\n\nThe beginner mistake is thinking kill switches are only engineering toggles. In fintech, a kill switch is a product safety tool. It needs owners, triggers, customer states, rollback behavior, support scripts, monitoring, and audit logs.\n\nThe mental model:\n\n```txt\nDetect:\nA metric or incident shows danger.\n\nDisable or limit:\nStop the risky action without breaking everything.\n\nRecover:\nExplain state, fix root cause, and safely re-enable.\n```\n\nThe TPM should define what happens to users already inside the flow.",
  "example": "Imagine an AI fraud rule starts blocking too many legitimate transfers.\n\nA weak kill switch disables all transfers. That may create more harm.\n\nA better design offers levels:\n\n```txt\nLevel 1:\nTurn off the new AI rule only.\n\nLevel 2:\nRoute high-risk transfers to manual review.\n\nLevel 3:\nPause new transfers in one corridor.\n\nLevel 4:\nPause all transfers if financial harm is severe.\n```\n\nGranularity matters.",
  "commonMistakes": "A common mistake is making the switch too broad. Pausing an entire product for a narrow issue can hurt customers.\n\nAnother mistake is having no owner. During incidents, unclear authority wastes time.\n\nA third mistake is re-enabling without evidence that the failure is fixed."
};
