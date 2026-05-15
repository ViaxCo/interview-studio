import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-hallucination-mitigation-fintech",
  "track": "TPM",
  "category": "AI & Customer Operations",
  "level": "Intermediate",
  "question": "How would you reduce hallucination risk in a fintech AI feature?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.\n\nThe beginner mistake is saying \"make the model more accurate.\" That is not a product plan. The TPM needs to design the workflow so the AI has trusted sources, knows when to refuse, and cannot take risky actions based on invented information."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user asks, \"Will my transfer arrive today?\"\n\nA risky AI answer:\n\n```txt\nYes, your transfer will arrive by 5 PM.\n```\n\nIf the system does not have confirmed payout status, that answer may be invented.\n\nA safer answer:\n\n```txt\nYour transfer is currently pending with our payout partner. We do not have a final arrival time yet. You do not need to send it again.\n```\n\nThe difference is grounding. The safe answer uses known status and avoids unsupported promises."
    },
    {
      "title": "Make it practical",
      "body": "Here is a hallucination mitigation artifact:\n\n```txt\nFeature:\nAI transfer status assistant\n\nAllowed sources:\n- Transfer status API\n- Approved status explanations\n- Help center articles\n- Support-safe reason codes\n\nNot allowed:\n- Guessing delivery time\n- Inventing fees\n- Promising refunds\n- Explaining fraud or sanctions logic\n- Giving legal or compliance advice\n\nRequired behavior:\n- Cite or attach source internally\n- Say when information is unavailable\n- Escalate uncertain cases\n- Use structured status templates\n- Refuse unsupported actions\n\nEvaluation cases:\n- Missing status\n- Conflicting partner status\n- Delayed payout\n- Failed transfer\n- Refund request\n- Compliance review\n- User asks for guarantee\n```\n\nThe TPM should monitor severe hallucinations separately from minor wording issues. One invented refund promise can be worse than many awkward sentences."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is relying only on prompt wording. Grounding, retrieval, templates, evals, and permissions matter more.\n\nAnother mistake is optimizing for confident tone. In regulated products, appropriate uncertainty is safer.\n\nA third mistake is not defining prohibited claims. The AI needs clear boundaries."
    }
  ],
  "answer": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.",
  "reasoning": "Here is a hallucination mitigation artifact:\n\n```txt\nFeature:\nAI transfer status assistant\n\nAllowed sources:\n- Transfer status API\n- Approved status explanations\n- Help center articles\n- Support-safe reason codes\n\nNot allowed:\n- Guessing delivery time\n- Inventing fees\n- Promising refunds\n- Explaining fraud or sanctions logic\n- Giving legal or compliance advice\n\nRequired behavior:\n- Cite or attach source internally\n- Say when information is unavailable\n- Escalate uncertain cases\n- Use structured status templates\n- Refuse unsupported actions\n\nEvaluation cases:\n- Missing status\n- Conflicting partner status\n- Delayed payout\n- Failed transfer\n- Refund request\n- Compliance review\n- User asks for guarantee\n```\n\nThe TPM should monitor severe hallucinations separately from minor wording issues. One invented refund promise can be worse than many awkward sentences.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why are hallucinations more dangerous in fintech?",
    "What does grounding mean?",
    "Why should the AI say when information is unavailable?",
    "What claims should be prohibited?",
    "How would you evaluate hallucination risk?"
  ],
  "interviewAnswer": "I would reduce hallucination risk by grounding the AI in trusted sources, limiting allowed claims, using templates for high-risk answers, requiring refusal or escalation when data is missing, evaluating edge cases, and monitoring severe factual errors.\n\nA strong TPM answer designs the product so the AI cannot safely rely on guessing.",
  "sourceLinks": [
    {
      "label": "OpenAI Docs: Evaluation best practices",
      "url": "https://platform.openai.com/docs/guides/evaluation-best-practices"
    },
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    }
  ],
  "beginnerExplanation": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.\n\nThe beginner mistake is saying \"make the model more accurate.\" That is not a product plan. The TPM needs to design the workflow so the AI has trusted sources, knows when to refuse, and cannot take risky actions based on invented information.",
  "example": "Imagine a user asks, \"Will my transfer arrive today?\"\n\nA risky AI answer:\n\n```txt\nYes, your transfer will arrive by 5 PM.\n```\n\nIf the system does not have confirmed payout status, that answer may be invented.\n\nA safer answer:\n\n```txt\nYour transfer is currently pending with our payout partner. We do not have a final arrival time yet. You do not need to send it again.\n```\n\nThe difference is grounding. The safe answer uses known status and avoids unsupported promises.",
  "commonMistakes": "A common mistake is relying only on prompt wording. Grounding, retrieval, templates, evals, and permissions matter more.\n\nAnother mistake is optimizing for confident tone. In regulated products, appropriate uncertainty is safer.\n\nA third mistake is not defining prohibited claims. The AI needs clear boundaries."
};
