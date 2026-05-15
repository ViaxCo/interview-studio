import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-credit-line-change-adverse-action",
  "track": "TPM",
  "category": "Credit & Lending",
  "level": "Advanced",
  "question": "How would you design a credit line increase or decrease workflow?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A credit line workflow decides whether a customer can borrow more, keep the same limit, or have their available credit reduced.\n\nThe beginner mistake is treating this like a normal settings change. Credit decisions can affect access to money, customer trust, risk exposure, and regulatory communication. If the product denies a requested increase or reduces a line, the team may need specific notices and reasons depending on the product and jurisdiction.\n\nThe mental model:\n\n```txt\nRequest:\nCustomer asks for more credit, or the system reviews an existing limit.\n\nDecision:\nApprove, deny, counteroffer, decrease, or ask for more information.\n\nCommunication:\nTell the customer what happened, what it means, and what rights or next steps apply.\n```\n\nThe TPM should not invent legal language. The TPM should make sure the product captures the decision reason and routes the right communication."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a customer requests an increase from $2,000 to $5,000.\n\nThe system reviews payment history, income, bureau data, utilization, fraud risk, and current affordability signals.\n\nPossible outcomes:\n\n```txt\nApproved:\nLimit increases to $5,000.\n\nCounteroffer:\nLimit increases to $3,000.\n\nDenied:\nLimit stays at $2,000 and customer receives required reason.\n\nPending:\nCustomer needs to provide updated income or identity information.\n```\n\nThose states are different. They need different messages, support views, metrics, and audit records."
    },
    {
      "title": "Make it practical",
      "body": "Here is a credit line workflow artifact:\n\n```txt\nWorkflow:\nCredit line increase request\n\nInputs:\n- Current line\n- Requested line\n- Payment history\n- Delinquency status\n- Income or affordability data\n- Bureau data if used\n- Fraud and identity signals\n- Existing exposure\n\nDecision outcomes:\n- Approve requested amount\n- Approve lower amount\n- Deny\n- Request more information\n- Manual review\n\nRequired product records:\n- Decision timestamp\n- Model/rule version\n- Principal reason codes\n- Data sources used\n- Customer notice sent\n- Support-visible summary\n```\n\nThe product requirement is evidence and communication, not just changing a number."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is storing only the final limit. Without reason codes and model version, the decision is hard to explain later.\n\nAnother mistake is using vague messages like \"not eligible.\" Credit products often need clearer reasons and compliant notices.\n\nA third mistake is ignoring support. Customers will ask why the decision happened, and support needs safe, approved explanations."
    }
  ],
  "answer": "A credit line workflow decides whether a customer can borrow more, keep the same limit, or have their available credit reduced.",
  "reasoning": "Here is a credit line workflow artifact:\n\n```txt\nWorkflow:\nCredit line increase request\n\nInputs:\n- Current line\n- Requested line\n- Payment history\n- Delinquency status\n- Income or affordability data\n- Bureau data if used\n- Fraud and identity signals\n- Existing exposure\n\nDecision outcomes:\n- Approve requested amount\n- Approve lower amount\n- Deny\n- Request more information\n- Manual review\n\nRequired product records:\n- Decision timestamp\n- Model/rule version\n- Principal reason codes\n- Data sources used\n- Customer notice sent\n- Support-visible summary\n```\n\nThe product requirement is evidence and communication, not just changing a number.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a credit limit change more sensitive than a normal feature setting?",
    "What outcomes should the workflow support besides approve and deny?",
    "Why do reason codes matter?",
    "What should support see?",
    "Where should legal and compliance review the product?"
  ],
  "interviewAnswer": "I would design the workflow with clear decision states, required inputs, reason codes, model or rule versioning, manual review paths, customer notices, support summaries, and audit records. For adverse decisions, I would partner with legal and compliance so required disclosures and timing are handled correctly.\n\nA strong answer shows that credit workflows are decision systems with customer communication and compliance requirements.",
  "sourceLinks": [
    {
      "label": "CFPB: Regulation B notifications",
      "url": "https://www.consumerfinance.gov/rules-policy/regulations/1002/9/"
    },
    {
      "label": "CFPB: Credit denial guidance",
      "url": "https://www.consumerfinance.gov/ask-cfpb/my-credit-application-was-denied-because-of-my-credit-report-what-can-i-do-en-1253/"
    }
  ],
  "beginnerExplanation": "A credit line workflow decides whether a customer can borrow more, keep the same limit, or have their available credit reduced.\n\nThe beginner mistake is treating this like a normal settings change. Credit decisions can affect access to money, customer trust, risk exposure, and regulatory communication. If the product denies a requested increase or reduces a line, the team may need specific notices and reasons depending on the product and jurisdiction.\n\nThe mental model:\n\n```txt\nRequest:\nCustomer asks for more credit, or the system reviews an existing limit.\n\nDecision:\nApprove, deny, counteroffer, decrease, or ask for more information.\n\nCommunication:\nTell the customer what happened, what it means, and what rights or next steps apply.\n```\n\nThe TPM should not invent legal language. The TPM should make sure the product captures the decision reason and routes the right communication.",
  "example": "Imagine a customer requests an increase from $2,000 to $5,000.\n\nThe system reviews payment history, income, bureau data, utilization, fraud risk, and current affordability signals.\n\nPossible outcomes:\n\n```txt\nApproved:\nLimit increases to $5,000.\n\nCounteroffer:\nLimit increases to $3,000.\n\nDenied:\nLimit stays at $2,000 and customer receives required reason.\n\nPending:\nCustomer needs to provide updated income or identity information.\n```\n\nThose states are different. They need different messages, support views, metrics, and audit records.",
  "commonMistakes": "A common mistake is storing only the final limit. Without reason codes and model version, the decision is hard to explain later.\n\nAnother mistake is using vague messages like \"not eligible.\" Credit products often need clearer reasons and compliant notices.\n\nA third mistake is ignoring support. Customers will ask why the decision happened, and support needs safe, approved explanations."
};
