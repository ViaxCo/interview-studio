import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-aml-alert-triage-copilot",
  "track": "TPM",
  "category": "AI & Risk",
  "level": "Advanced",
  "question": "How would you design an AI copilot for AML alert triage?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An AML alert triage copilot helps analysts review possible suspicious activity faster.\n\nThe beginner mistake is thinking the AI should decide whether something is suspicious. In regulated workflows, the safer starting point is usually assistance, not replacement. The AI can summarize facts, organize evidence, surface similar cases, and suggest questions, but trained compliance staff should own the decision.\n\nThe mental model:\n\n```txt\nAI helps with:\nFinding, summarizing, organizing, drafting.\n\nHuman owns:\nJudgment, escalation, final decision, regulated filing choices.\n```\n\nThe TPM's job is to design the copilot so it reduces analyst load without creating overtrust."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an analyst opens an alert for repeated transfers just below a review threshold.\n\nThe copilot should not say:\n\n```txt\nThis is money laundering.\n```\n\nIt can safely say:\n\n```txt\nThe activity includes 12 transfers over 5 days, all between $900 and $990, to 6 recipients.\nThe customer changed device once during the period.\nTwo recipients are newly added.\nPrior similar cases were escalated when volume continued for more than 7 days.\n```\n\nThat helps the analyst think without pretending the AI is the investigator."
    },
    {
      "title": "Make it practical",
      "body": "Here is a copilot design artifact:\n\n```txt\nCopilot scope:\nAML alert triage assistant\n\nAllowed:\n- Summarize transaction timeline\n- Highlight rule triggers\n- Pull customer profile facts\n- Show linked alerts\n- Draft analyst note for review\n- Suggest missing evidence\n\nNot allowed:\n- Close case automatically\n- File suspicious activity report\n- Tell customer about investigation\n- Override compliance decision\n\nGuardrails:\n- Cite source records\n- Show confidence and missing data\n- Require analyst approval for notes\n- Log prompt, output, sources, and user action\n- Evaluate against expert-reviewed cases\n```\n\nThe copilot should be useful even when it refuses to make the final call."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is measuring only time saved. A faster wrong investigation is not success.\n\nAnother mistake is not showing sources. Analysts need to know which transactions or records support the summary.\n\nA third mistake is letting AI-generated notes enter the case file without human review."
    }
  ],
  "answer": "An AML alert triage copilot helps analysts review possible suspicious activity faster.",
  "reasoning": "Here is a copilot design artifact:\n\n```txt\nCopilot scope:\nAML alert triage assistant\n\nAllowed:\n- Summarize transaction timeline\n- Highlight rule triggers\n- Pull customer profile facts\n- Show linked alerts\n- Draft analyst note for review\n- Suggest missing evidence\n\nNot allowed:\n- Close case automatically\n- File suspicious activity report\n- Tell customer about investigation\n- Override compliance decision\n\nGuardrails:\n- Cite source records\n- Show confidence and missing data\n- Require analyst approval for notes\n- Log prompt, output, sources, and user action\n- Evaluate against expert-reviewed cases\n```\n\nThe copilot should be useful even when it refuses to make the final call.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What should the AI be allowed to do in AML triage?",
    "What decisions should stay with humans?",
    "Why do citations matter?",
    "How could overtrust create risk?",
    "What eval set would prove the copilot is safe enough to launch?"
  ],
  "interviewAnswer": "I would design an AML copilot as an assistant that summarizes evidence, cites source records, highlights triggers, suggests missing information, and drafts notes for human approval. It should not close cases, file reports, or make final suspicious-activity decisions. I would monitor quality, overtrust, analyst overrides, and audit logs.\n\nA strong answer keeps compliance judgment with trained humans while using AI to reduce investigation friction.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "FFIEC: Suspicious Activity Reporting",
      "url": "https://bsaaml.ffiec.gov/manual/AssessingComplianceWithBSARegulatoryRequirements/04"
    }
  ],
  "beginnerExplanation": "An AML alert triage copilot helps analysts review possible suspicious activity faster.\n\nThe beginner mistake is thinking the AI should decide whether something is suspicious. In regulated workflows, the safer starting point is usually assistance, not replacement. The AI can summarize facts, organize evidence, surface similar cases, and suggest questions, but trained compliance staff should own the decision.\n\nThe mental model:\n\n```txt\nAI helps with:\nFinding, summarizing, organizing, drafting.\n\nHuman owns:\nJudgment, escalation, final decision, regulated filing choices.\n```\n\nThe TPM's job is to design the copilot so it reduces analyst load without creating overtrust.",
  "example": "Imagine an analyst opens an alert for repeated transfers just below a review threshold.\n\nThe copilot should not say:\n\n```txt\nThis is money laundering.\n```\n\nIt can safely say:\n\n```txt\nThe activity includes 12 transfers over 5 days, all between $900 and $990, to 6 recipients.\nThe customer changed device once during the period.\nTwo recipients are newly added.\nPrior similar cases were escalated when volume continued for more than 7 days.\n```\n\nThat helps the analyst think without pretending the AI is the investigator.",
  "commonMistakes": "A common mistake is measuring only time saved. A faster wrong investigation is not success.\n\nAnother mistake is not showing sources. Analysts need to know which transactions or records support the summary.\n\nA third mistake is letting AI-generated notes enter the case file without human review."
};
