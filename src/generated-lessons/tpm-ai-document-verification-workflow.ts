import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-document-verification-workflow",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you design AI-assisted document verification?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI-assisted document verification uses models to read, classify, extract, or check documents such as IDs, proof of address, bank statements, invoices, or business registration documents.\n\nThe beginner mistake is assuming the model output is the truth. Documents can be blurry, expired, forged, incomplete, cropped, mismatched, or from unsupported countries. The product needs confidence thresholds, review states, retries, and user recovery.\n\nThe mental model:\n\n```txt\nExtraction:\nWhat does the document say?\n\nValidation:\nDoes it meet requirements?\n\nDecision:\nCan we accept, reject, or send to review?\n```\n\nThe TPM should design for uncertain outputs because document AI is rarely perfect."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user uploads proof of address. The AI extracts the name, address, issue date, and document type.\n\nPossible outcomes:\n\n```txt\nAccepted:\nName and address match, document is recent, image is clear.\n\nNeeds retry:\nImage is blurry or cropped.\n\nManual review:\nModel confidence is low or document type is unusual.\n\nRejected:\nDocument is expired or does not show required address.\n```\n\nThe user needs clear recovery instructions, not just \"verification failed.\""
    },
    {
      "title": "Make it practical",
      "body": "Here is a document verification artifact:\n\n```txt\nDocument type:\nProof of address\n\nAI tasks:\n- Classify document type\n- Extract name and address\n- Detect date\n- Check image quality\n- Compare extracted fields to user profile\n\nDecision rules:\n- Auto-accept only above confidence threshold\n- Retry if image quality fails\n- Manual review if unsupported document type\n- Reject if required fields are missing\n\nUser recovery:\n- Explain what was wrong\n- Show accepted document examples\n- Let user upload again\n- Preserve application progress\n\nMetrics:\n- Auto-accept accuracy\n- Manual review rate\n- Retry success rate\n- False rejection rate\n- Time to verification\n```\n\nThe AI should make verification faster, not more mysterious."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is giving users a generic failure. If the issue is blur, crop, wrong document, or missing date, the user needs to know.\n\nAnother mistake is auto-rejecting low-confidence cases. Low confidence means uncertainty, not proof the user is wrong.\n\nA third mistake is not sampling accepted documents for quality review. Silent false accepts can create compliance and fraud risk."
    }
  ],
  "answer": "AI-assisted document verification uses models to read, classify, extract, or check documents such as IDs, proof of address, bank statements, invoices, or business registration documents.",
  "reasoning": "Here is a document verification artifact:\n\n```txt\nDocument type:\nProof of address\n\nAI tasks:\n- Classify document type\n- Extract name and address\n- Detect date\n- Check image quality\n- Compare extracted fields to user profile\n\nDecision rules:\n- Auto-accept only above confidence threshold\n- Retry if image quality fails\n- Manual review if unsupported document type\n- Reject if required fields are missing\n\nUser recovery:\n- Explain what was wrong\n- Show accepted document examples\n- Let user upload again\n- Preserve application progress\n\nMetrics:\n- Auto-accept accuracy\n- Manual review rate\n- Retry success rate\n- False rejection rate\n- Time to verification\n```\n\nThe AI should make verification faster, not more mysterious.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between extraction and validation?",
    "When should the product ask for retry instead of rejecting?",
    "Why does confidence need a human-review path?",
    "What should the user see after a document fails?",
    "What metrics prove the AI is improving verification?"
  ],
  "interviewAnswer": "I would design AI-assisted document verification with document classification, field extraction, quality checks, confidence thresholds, manual review, user retry paths, clear rejection reasons, audit logs, and sampling for false accepts and false rejects.\n\nA strong answer shows that AI should accelerate verification while preserving fairness, explainability, and recovery.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "Microsoft Responsible AI principles",
      "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
    }
  ],
  "beginnerExplanation": "AI-assisted document verification uses models to read, classify, extract, or check documents such as IDs, proof of address, bank statements, invoices, or business registration documents.\n\nThe beginner mistake is assuming the model output is the truth. Documents can be blurry, expired, forged, incomplete, cropped, mismatched, or from unsupported countries. The product needs confidence thresholds, review states, retries, and user recovery.\n\nThe mental model:\n\n```txt\nExtraction:\nWhat does the document say?\n\nValidation:\nDoes it meet requirements?\n\nDecision:\nCan we accept, reject, or send to review?\n```\n\nThe TPM should design for uncertain outputs because document AI is rarely perfect.",
  "example": "Imagine a user uploads proof of address. The AI extracts the name, address, issue date, and document type.\n\nPossible outcomes:\n\n```txt\nAccepted:\nName and address match, document is recent, image is clear.\n\nNeeds retry:\nImage is blurry or cropped.\n\nManual review:\nModel confidence is low or document type is unusual.\n\nRejected:\nDocument is expired or does not show required address.\n```\n\nThe user needs clear recovery instructions, not just \"verification failed.\"",
  "commonMistakes": "A common mistake is giving users a generic failure. If the issue is blur, crop, wrong document, or missing date, the user needs to know.\n\nAnother mistake is auto-rejecting low-confidence cases. Low confidence means uncertainty, not proof the user is wrong.\n\nA third mistake is not sampling accepted documents for quality review. Silent false accepts can create compliance and fraud risk."
};
