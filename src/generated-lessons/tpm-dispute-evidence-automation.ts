import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-dispute-evidence-automation",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you automate dispute evidence collection?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Dispute evidence is the proof a merchant or platform submits when a cardholder challenges a transaction.\n\nThe beginner mistake is thinking more evidence is always better. In disputes, evidence needs to match the reason for the dispute. Proof of delivery may help one case, while proof of cardholder authorization or prior usage may matter more in another.\n\nThe mental model:\n\n```txt\nDispute reason:\nWhat the cardholder claims.\n\nEvidence package:\nThe specific proof that responds to that claim.\n\nSubmission:\nThe formatted response sent before the deadline.\n```\n\nAutomation is useful because dispute windows are time-bound and evidence is usually scattered across payments, support, shipping, login, contract, and product systems."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a customer disputes a subscription payment as \"product not received.\"\n\nWeak automation gathers everything:\n\n```txt\nReceipt, logs, invoice, email screenshots, product usage, billing terms, support history\n```\n\nBetter automation asks what the reason code needs:\n\n```txt\nWas the product digital?\nDid the user log in after purchase?\nWere terms shown?\nWas cancellation requested?\nDid support offer help?\n```\n\nThe goal is not a large pile of screenshots. The goal is a clear story supported by relevant proof."
    },
    {
      "title": "Make it practical",
      "body": "Here is an evidence automation artifact:\n\n```txt\nDispute type:\nSubscription product not received\n\nEvidence sources:\n- Payment receipt\n- Invoice\n- Account login history\n- Product usage events\n- Terms accepted at checkout\n- Cancellation policy\n- Support messages\n- Refund history\n\nAutomation behavior:\n- Detect dispute reason\n- Pull matching evidence fields\n- Highlight missing evidence\n- Generate draft response\n- Route high-value disputes for human review\n- Submit low-risk standard cases if approved\n\nQuality checks:\n- Deadline visible\n- Evidence matches reason\n- Sensitive data redacted\n- Human approval recorded\n- Outcome tracked by reason category\n```\n\nThe TPM should also define when not to automate. A high-value dispute, a vulnerable customer complaint, or a legally sensitive case may need human review."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is automating submission before evidence quality is reliable. Bad automation can lose disputes faster.\n\nAnother mistake is ignoring reason codes. Generic evidence often fails because it does not answer the actual claim.\n\nA third mistake is forgetting privacy. Evidence packages can expose unnecessary personal or sensitive data if not redacted."
    }
  ],
  "answer": "Dispute evidence is the proof a merchant or platform submits when a cardholder challenges a transaction.",
  "reasoning": "Here is an evidence automation artifact:\n\n```txt\nDispute type:\nSubscription product not received\n\nEvidence sources:\n- Payment receipt\n- Invoice\n- Account login history\n- Product usage events\n- Terms accepted at checkout\n- Cancellation policy\n- Support messages\n- Refund history\n\nAutomation behavior:\n- Detect dispute reason\n- Pull matching evidence fields\n- Highlight missing evidence\n- Generate draft response\n- Route high-value disputes for human review\n- Submit low-risk standard cases if approved\n\nQuality checks:\n- Deadline visible\n- Evidence matches reason\n- Sensitive data redacted\n- Human approval recorded\n- Outcome tracked by reason category\n```\n\nThe TPM should also define when not to automate. A high-value dispute, a vulnerable customer complaint, or a legally sensitive case may need human review.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is dispute reason more important than evidence volume?",
    "What systems might hold useful evidence?",
    "Which disputes should require human review?",
    "What quality checks should run before submission?",
    "How would you measure whether automation is helping?"
  ],
  "interviewAnswer": "I would automate dispute evidence by mapping dispute reasons to required evidence, pulling data from payment, product, support, contract, and fulfillment systems, generating a structured package, redacting sensitive data, showing deadlines, routing risky cases to humans, and tracking outcomes by reason category.\n\nA strong TPM answer treats automation as evidence quality and workflow design, not just document generation.",
  "sourceLinks": [
    {
      "label": "Stripe disputes",
      "url": "https://docs.stripe.com/disputes"
    },
    {
      "label": "Visa dispute management guidelines",
      "url": "https://usa.visa.com/content/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf"
    }
  ],
  "beginnerExplanation": "Dispute evidence is the proof a merchant or platform submits when a cardholder challenges a transaction.\n\nThe beginner mistake is thinking more evidence is always better. In disputes, evidence needs to match the reason for the dispute. Proof of delivery may help one case, while proof of cardholder authorization or prior usage may matter more in another.\n\nThe mental model:\n\n```txt\nDispute reason:\nWhat the cardholder claims.\n\nEvidence package:\nThe specific proof that responds to that claim.\n\nSubmission:\nThe formatted response sent before the deadline.\n```\n\nAutomation is useful because dispute windows are time-bound and evidence is usually scattered across payments, support, shipping, login, contract, and product systems.",
  "example": "Imagine a customer disputes a subscription payment as \"product not received.\"\n\nWeak automation gathers everything:\n\n```txt\nReceipt, logs, invoice, email screenshots, product usage, billing terms, support history\n```\n\nBetter automation asks what the reason code needs:\n\n```txt\nWas the product digital?\nDid the user log in after purchase?\nWere terms shown?\nWas cancellation requested?\nDid support offer help?\n```\n\nThe goal is not a large pile of screenshots. The goal is a clear story supported by relevant proof.",
  "commonMistakes": "A common mistake is automating submission before evidence quality is reliable. Bad automation can lose disputes faster.\n\nAnother mistake is ignoring reason codes. Generic evidence often fails because it does not answer the actual claim.\n\nA third mistake is forgetting privacy. Evidence packages can expose unnecessary personal or sensitive data if not redacted."
};
