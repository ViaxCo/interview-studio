import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-customer-communications-review",
  "track": "TPM",
  "category": "AI Product",
  "level": "Advanced",
  "question": "How would you use AI to draft customer communications in a regulated fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI can help draft customer messages for support, disputes, account restrictions, collections, or fraud reviews.\n\nThe beginner mistake is letting AI write and send messages directly. In fintech, customer communications can create legal, compliance, trust, and financial harm if they are wrong, misleading, unfair, or too revealing.\n\nThe mental model:\n\n```txt\nDraft:\nAI proposes wording.\n\nReview:\nHuman or policy checks decide whether it is safe.\n\nSend:\nApproved message goes to the customer with audit trail.\n```\n\nThe TPM should design AI drafting as controlled assistance, not free-form talking."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine support needs to explain a transfer delay.\n\nA bad AI response might invent a reason:\n\n```txt\nYour transfer is delayed because your recipient bank is under maintenance.\n```\n\nIf that fact is not in the system, it is dangerous.\n\nA safer AI draft says:\n\n```txt\nYour transfer is still being reviewed. We will update you when the review is complete. You do not need to resubmit the transfer.\n```\n\nThe second message uses approved facts and avoids unsupported claims."
    },
    {
      "title": "Make it practical",
      "body": "Here is a communications AI artifact:\n\n```txt\nUse case:\nDraft support replies for transfer delays\n\nAllowed inputs:\n- Approved case status\n- Customer-visible reason category\n- Support policy\n- Product help-center article\n\nRequired checks:\n- No legal promises\n- No unsupported facts\n- No hidden fraud-rule details\n- Tone is clear and respectful\n- Required disclosure included if applicable\n\nReview paths:\n- Low-risk FAQ response: automated policy check\n- Account restriction: support approval\n- Complaint or legal threat: escalation\n- Collections or credit decision: compliance-approved template\n```\n\nThe AI should choose from facts and approved policy, not improvise the company's position."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing for \"human-like\" responses over accurate responses. In regulated products, boring and correct often beats charming and risky.\n\nAnother mistake is exposing sensitive internal reason codes. Fraud and compliance details can teach bad actors how to evade controls.\n\nA third mistake is not keeping records of generated drafts, edits, approver, and final message."
    }
  ],
  "answer": "AI can help draft customer messages for support, disputes, account restrictions, collections, or fraud reviews.",
  "reasoning": "Here is a communications AI artifact:\n\n```txt\nUse case:\nDraft support replies for transfer delays\n\nAllowed inputs:\n- Approved case status\n- Customer-visible reason category\n- Support policy\n- Product help-center article\n\nRequired checks:\n- No legal promises\n- No unsupported facts\n- No hidden fraud-rule details\n- Tone is clear and respectful\n- Required disclosure included if applicable\n\nReview paths:\n- Low-risk FAQ response: automated policy check\n- Account restriction: support approval\n- Complaint or legal threat: escalation\n- Collections or credit decision: compliance-approved template\n```\n\nThe AI should choose from facts and approved policy, not improvise the company's position.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is sending AI-written fintech messages risky?",
    "What facts should the AI be allowed to use?",
    "Which message types need human or compliance review?",
    "Why should some fraud details stay hidden?",
    "What should be logged for audit?"
  ],
  "interviewAnswer": "I would use AI for drafting, not uncontrolled sending. The system should ground drafts in approved customer-visible facts and policy, run checks for unsupported claims and sensitive details, route risky messages for review, and log the draft, edits, approver, and final message.\n\nA strong answer treats communication as a regulated product surface, not just text generation.",
  "sourceLinks": [
    {
      "label": "Microsoft Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "AI can help draft customer messages for support, disputes, account restrictions, collections, or fraud reviews.\n\nThe beginner mistake is letting AI write and send messages directly. In fintech, customer communications can create legal, compliance, trust, and financial harm if they are wrong, misleading, unfair, or too revealing.\n\nThe mental model:\n\n```txt\nDraft:\nAI proposes wording.\n\nReview:\nHuman or policy checks decide whether it is safe.\n\nSend:\nApproved message goes to the customer with audit trail.\n```\n\nThe TPM should design AI drafting as controlled assistance, not free-form talking.",
  "example": "Imagine support needs to explain a transfer delay.\n\nA bad AI response might invent a reason:\n\n```txt\nYour transfer is delayed because your recipient bank is under maintenance.\n```\n\nIf that fact is not in the system, it is dangerous.\n\nA safer AI draft says:\n\n```txt\nYour transfer is still being reviewed. We will update you when the review is complete. You do not need to resubmit the transfer.\n```\n\nThe second message uses approved facts and avoids unsupported claims.",
  "commonMistakes": "A common mistake is optimizing for \"human-like\" responses over accurate responses. In regulated products, boring and correct often beats charming and risky.\n\nAnother mistake is exposing sensitive internal reason codes. Fraud and compliance details can teach bad actors how to evade controls.\n\nA third mistake is not keeping records of generated drafts, edits, approver, and final message."
};
