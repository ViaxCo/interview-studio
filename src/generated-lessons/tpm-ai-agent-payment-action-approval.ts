import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-agent-payment-action-approval",
  "track": "TPM",
  "category": "AI Product",
  "level": "Advanced",
  "question": "How would you design approval controls for an AI agent that can take payment actions?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An AI agent that can take payment actions is very different from a chatbot that only answers questions.\n\nThe beginner mistake is giving the agent tools before defining authority. If an agent can refund, cancel, release a hold, update bank details, or move money, the product needs explicit approval controls.\n\nThe mental model:\n\n```txt\nRead action:\nLook up information.\n\nLow-risk write action:\nCreate a draft or tag a case.\n\nHigh-risk money action:\nChange balance, payout, refund, limit, or account access.\n```\n\nThe higher the risk, the stronger the approval should be."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a support agent asks the AI:\n\n```txt\nRefund this customer's failed transfer.\n```\n\nThe AI should not blindly call the refund tool. It should check eligibility, amount, transaction status, duplicate refund risk, user permission, and policy.\n\nFor high-risk cases, the agent should prepare:\n\n```txt\nRecommended action: refund $120\nReason: transfer failed and no payout occurred\nRequires approval: support lead\n```\n\nThen a human approves before money moves."
    },
    {
      "title": "Make it practical",
      "body": "Here is an approval-control artifact:\n\n```txt\nAI tool:\nRefund payment\n\nRisk tier:\nHigh\n\nPre-checks:\n- User role can request refund\n- Transaction is eligible\n- No existing refund\n- Amount matches original transaction\n- Case reason selected\n- Customer identity verified if required\n\nApproval:\n- Under $25: automated if all checks pass\n- $25-$500: support lead approval\n- Over $500: operations approval\n- Suspicious case: fraud/compliance approval\n\nAudit log:\n- Prompt/request\n- Tool arguments\n- Eligibility result\n- Approver\n- Final action\n- Timestamp\n```\n\nApproval controls should be policy-driven, not hidden inside prompt text."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is relying on the prompt to prevent dangerous actions. Prompts help, but permissions and workflow controls must enforce limits.\n\nAnother mistake is treating all tools as equal. Reading account status and moving money have different risk.\n\nA third mistake is not logging tool arguments. If something goes wrong, the team needs to know exactly what the agent tried to do."
    }
  ],
  "answer": "An AI agent that can take payment actions is very different from a chatbot that only answers questions.",
  "reasoning": "Here is an approval-control artifact:\n\n```txt\nAI tool:\nRefund payment\n\nRisk tier:\nHigh\n\nPre-checks:\n- User role can request refund\n- Transaction is eligible\n- No existing refund\n- Amount matches original transaction\n- Case reason selected\n- Customer identity verified if required\n\nApproval:\n- Under $25: automated if all checks pass\n- $25-$500: support lead approval\n- Over $500: operations approval\n- Suspicious case: fraud/compliance approval\n\nAudit log:\n- Prompt/request\n- Tool arguments\n- Eligibility result\n- Approver\n- Final action\n- Timestamp\n```\n\nApproval controls should be policy-driven, not hidden inside prompt text.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why are payment-action agents riskier than chat assistants?",
    "What is the difference between read and write tools?",
    "Which payment actions need human approval?",
    "Why are policy checks stronger than prompt instructions?",
    "What should the audit log capture?"
  ],
  "interviewAnswer": "I would design approval controls by tiering agent tools by risk, enforcing role permissions, checking eligibility before action, requiring human approval for high-risk money movement, blocking duplicate actions, and logging prompts, tool arguments, approvals, and final outcomes.\n\nA strong answer treats AI agent authority as a product permission system.",
  "sourceLinks": [
    {
      "label": "OWASP Top 10 for LLM Applications",
      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "An AI agent that can take payment actions is very different from a chatbot that only answers questions.\n\nThe beginner mistake is giving the agent tools before defining authority. If an agent can refund, cancel, release a hold, update bank details, or move money, the product needs explicit approval controls.\n\nThe mental model:\n\n```txt\nRead action:\nLook up information.\n\nLow-risk write action:\nCreate a draft or tag a case.\n\nHigh-risk money action:\nChange balance, payout, refund, limit, or account access.\n```\n\nThe higher the risk, the stronger the approval should be.",
  "example": "Imagine a support agent asks the AI:\n\n```txt\nRefund this customer's failed transfer.\n```\n\nThe AI should not blindly call the refund tool. It should check eligibility, amount, transaction status, duplicate refund risk, user permission, and policy.\n\nFor high-risk cases, the agent should prepare:\n\n```txt\nRecommended action: refund $120\nReason: transfer failed and no payout occurred\nRequires approval: support lead\n```\n\nThen a human approves before money moves.",
  "commonMistakes": "A common mistake is relying on the prompt to prevent dangerous actions. Prompts help, but permissions and workflow controls must enforce limits.\n\nAnother mistake is treating all tools as equal. Reading account status and moving money have different risk.\n\nA third mistake is not logging tool arguments. If something goes wrong, the team needs to know exactly what the agent tried to do."
};
