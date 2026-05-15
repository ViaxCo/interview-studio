import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-support-agent-regulated-fintech",
  "track": "TPM",
  "category": "AI & Customer Operations",
  "level": "Intermediate",
  "question": "How would you launch an AI support agent in a regulated fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.\n\nIn regulated fintech, support answers can affect money, identity, fraud, compliance, account access, and customer trust. The beginner mistake is launching a chatbot as if wrong answers are just a UX issue. In fintech, a wrong answer can tell a user the wrong payment status, expose sensitive data, promise a refund, or mishandle a complaint.\n\nThe TPM should decide where AI is allowed to act:\n\n```txt\nAnswer only:\nAI gives general information.\n\nDraft only:\nAI drafts for a human agent.\n\nAssist:\nAI summarizes and suggests next steps.\n\nAct:\nAI changes account state or triggers workflows.\n```\n\nThe risk increases sharply as the AI moves from answering to acting."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a customer asks: \"Where is my transfer?\"\n\nA weak AI agent might respond from generic policy:\n\n```txt\nMost transfers arrive in 1-3 days.\n```\n\nBut this customer's transfer may be failed, pending compliance review, delayed by a partner, or already paid. The AI must use trusted system data and know what it is allowed to say.\n\nA safer version:\n\n```txt\nI found your transfer. It is still pending with our payout partner.\nYou do not need to send it again. We will update the status here when the partner confirms the final result.\n```\n\nThat answer needs retrieval, permissions, state awareness, and safety rules."
    },
    {
      "title": "Make it practical",
      "body": "Here is a launch artifact:\n\n```txt\nUse case:\nAI support assistant for transfer status questions\n\nAllowed:\n- Explain visible transfer status\n- Summarize support case history\n- Draft replies for human approval\n- Link to help articles\n\nNot allowed:\n- Promise refunds\n- Explain suspicious activity rules\n- Reveal fraud or sanctions logic\n- Change KYC status\n- Close complaints\n- Move money\n\nRequired data:\n- Transfer status\n- Public status reason\n- Expected next update\n- Support-safe macro\n- User authentication state\n\nGuardrails:\n- Use only approved knowledge sources\n- Refuse account-specific answers if user is not authenticated\n- Escalate compliance, fraud, legal, or complaint cases to humans\n- Log AI response, sources, and confidence\n```\n\nEvaluation should include real support scenarios:\n\n```txt\nTest cases:\n- Pending transfer\n- Failed transfer\n- Possible duplicate payment\n- KYC review\n- Sanctions review\n- Refund request\n- Complaint language\n- Angry customer\n- Unauthenticated account question\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is measuring only deflection. If the bot reduces tickets by giving wrong answers, that is not success.\n\nAnother mistake is letting AI answer from stale or generic knowledge when account state matters.\n\nA third mistake is skipping escalation design. Regulated support needs clear human handoff paths."
    }
  ],
  "answer": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.",
  "reasoning": "Here is a launch artifact:\n\n```txt\nUse case:\nAI support assistant for transfer status questions\n\nAllowed:\n- Explain visible transfer status\n- Summarize support case history\n- Draft replies for human approval\n- Link to help articles\n\nNot allowed:\n- Promise refunds\n- Explain suspicious activity rules\n- Reveal fraud or sanctions logic\n- Change KYC status\n- Close complaints\n- Move money\n\nRequired data:\n- Transfer status\n- Public status reason\n- Expected next update\n- Support-safe macro\n- User authentication state\n\nGuardrails:\n- Use only approved knowledge sources\n- Refuse account-specific answers if user is not authenticated\n- Escalate compliance, fraud, legal, or complaint cases to humans\n- Log AI response, sources, and confidence\n```\n\nEvaluation should include real support scenarios:\n\n```txt\nTest cases:\n- Pending transfer\n- Failed transfer\n- Possible duplicate payment\n- KYC review\n- Sanctions review\n- Refund request\n- Complaint language\n- Angry customer\n- Unauthenticated account question\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is fintech support higher risk than generic support?",
    "What is the difference between draft-only and act?",
    "What should the AI support agent not be allowed to do?",
    "Why does authentication matter?",
    "What metrics should be watched besides ticket deflection?"
  ],
  "interviewAnswer": "I would launch an AI support agent by choosing a narrow use case, defining allowed and prohibited actions, grounding answers in trusted data, adding human escalation, testing risky scenarios, logging outputs, and monitoring accuracy, escalation rate, complaints, and customer harm.\n\nA strong TPM answer treats AI support as an operating system with permissions, not just a chatbot.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Microsoft: Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    }
  ],
  "beginnerExplanation": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.\n\nIn regulated fintech, support answers can affect money, identity, fraud, compliance, account access, and customer trust. The beginner mistake is launching a chatbot as if wrong answers are just a UX issue. In fintech, a wrong answer can tell a user the wrong payment status, expose sensitive data, promise a refund, or mishandle a complaint.\n\nThe TPM should decide where AI is allowed to act:\n\n```txt\nAnswer only:\nAI gives general information.\n\nDraft only:\nAI drafts for a human agent.\n\nAssist:\nAI summarizes and suggests next steps.\n\nAct:\nAI changes account state or triggers workflows.\n```\n\nThe risk increases sharply as the AI moves from answering to acting.",
  "example": "Imagine a customer asks: \"Where is my transfer?\"\n\nA weak AI agent might respond from generic policy:\n\n```txt\nMost transfers arrive in 1-3 days.\n```\n\nBut this customer's transfer may be failed, pending compliance review, delayed by a partner, or already paid. The AI must use trusted system data and know what it is allowed to say.\n\nA safer version:\n\n```txt\nI found your transfer. It is still pending with our payout partner.\nYou do not need to send it again. We will update the status here when the partner confirms the final result.\n```\n\nThat answer needs retrieval, permissions, state awareness, and safety rules.",
  "commonMistakes": "A common mistake is measuring only deflection. If the bot reduces tickets by giving wrong answers, that is not success.\n\nAnother mistake is letting AI answer from stale or generic knowledge when account state matters.\n\nA third mistake is skipping escalation design. Regulated support needs clear human handoff paths."
};
