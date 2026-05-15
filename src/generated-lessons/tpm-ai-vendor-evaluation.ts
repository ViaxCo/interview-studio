import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-ai-vendor-evaluation",
  "track": "TPM",
  "category": "AI Product",
  "level": "Intermediate",
  "question": "How would you evaluate an AI vendor for a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.\n\nThe beginner mistake is evaluating only demo quality. A demo can look impressive while the vendor fails on latency, cost, privacy, auditability, uptime, eval tooling, data controls, or security.\n\nFor fintech, vendor questions are sharper because the product may touch money, identity, support, fraud, or compliance."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a vendor offers an AI support agent for financial services.\n\nA weak evaluation asks:\n\n```txt\nCan it answer our help center questions?\n```\n\nA stronger evaluation asks:\n\n```txt\nCan it answer accurately from approved sources?\nCan it refuse prohibited topics?\nCan it avoid exposing sensitive account data?\nCan it escalate complaints and fraud cases?\nCan we audit what it said and why?\nCan we control data retention?\nCan it meet latency and uptime needs?\nCan we leave the vendor later?\n```\n\nThe TPM should test the riskiest assumptions, not the prettiest demo path."
    },
    {
      "title": "Make it practical",
      "body": "Here is an AI vendor scorecard:\n\n```txt\nProduct fit:\n- Supported use cases\n- Quality on our real cases\n- Multilingual support\n- Human handoff\n\nRisk and safety:\n- Refusal behavior\n- Prompt injection handling\n- Sensitive data handling\n- Audit logs\n- Red-team results\n\nData and compliance:\n- Data retention\n- Training-on-customer-data controls\n- Subprocessors\n- Region controls\n- Deletion and export\n\nOperations:\n- SLA\n- Latency\n- Incident communication\n- Monitoring dashboard\n- Support escalation\n\nCommercials:\n- Pricing model\n- Cost at projected volume\n- Overages\n- Contract lock-in\n\nExit:\n- Data export\n- Prompt/config export\n- Fallback provider\n- Migration effort\n```\n\nThe proof of concept should use real scenarios:\n\n```txt\nPOC cases:\n- Failed transfer\n- KYC pending\n- Refund request\n- Sanctions review\n- Angry complaint\n- Prompt injection attempt\n- Unauthenticated account question\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is evaluating vendors with sanitized test cases. Real support and risk cases are messy.\n\nAnother mistake is ignoring data terms. AI vendors may have different retention, training, and logging policies.\n\nA third mistake is not planning exit. AI vendor lock-in can be hidden in prompts, tools, eval datasets, and workflows."
    }
  ],
  "answer": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.",
  "reasoning": "Here is an AI vendor scorecard:\n\n```txt\nProduct fit:\n- Supported use cases\n- Quality on our real cases\n- Multilingual support\n- Human handoff\n\nRisk and safety:\n- Refusal behavior\n- Prompt injection handling\n- Sensitive data handling\n- Audit logs\n- Red-team results\n\nData and compliance:\n- Data retention\n- Training-on-customer-data controls\n- Subprocessors\n- Region controls\n- Deletion and export\n\nOperations:\n- SLA\n- Latency\n- Incident communication\n- Monitoring dashboard\n- Support escalation\n\nCommercials:\n- Pricing model\n- Cost at projected volume\n- Overages\n- Contract lock-in\n\nExit:\n- Data export\n- Prompt/config export\n- Fallback provider\n- Migration effort\n```\n\nThe proof of concept should use real scenarios:\n\n```txt\nPOC cases:\n- Failed transfer\n- KYC pending\n- Refund request\n- Sanctions review\n- Angry complaint\n- Prompt injection attempt\n- Unauthenticated account question\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is demo quality not enough?",
    "What should an AI vendor POC test?",
    "What data terms matter?",
    "Why is auditability important in fintech AI?",
    "What makes AI vendor lock-in painful?"
  ],
  "interviewAnswer": "I would evaluate an AI vendor across product quality, safety, privacy, compliance, auditability, latency, uptime, cost, data controls, operational support, and exit path. I would run a POC on real high-risk scenarios before recommending adoption.\n\nA strong answer treats AI vendor choice as a product, risk, and operating decision.",
  "sourceLinks": [
    {
      "label": "NIST: AI Risk Management Framework",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "label": "OWASP: Top 10 for Large Language Model Applications",
      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
    }
  ],
  "beginnerExplanation": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.\n\nThe beginner mistake is evaluating only demo quality. A demo can look impressive while the vendor fails on latency, cost, privacy, auditability, uptime, eval tooling, data controls, or security.\n\nFor fintech, vendor questions are sharper because the product may touch money, identity, support, fraud, or compliance.",
  "example": "Imagine a vendor offers an AI support agent for financial services.\n\nA weak evaluation asks:\n\n```txt\nCan it answer our help center questions?\n```\n\nA stronger evaluation asks:\n\n```txt\nCan it answer accurately from approved sources?\nCan it refuse prohibited topics?\nCan it avoid exposing sensitive account data?\nCan it escalate complaints and fraud cases?\nCan we audit what it said and why?\nCan we control data retention?\nCan it meet latency and uptime needs?\nCan we leave the vendor later?\n```\n\nThe TPM should test the riskiest assumptions, not the prettiest demo path.",
  "commonMistakes": "A common mistake is evaluating vendors with sanitized test cases. Real support and risk cases are messy.\n\nAnother mistake is ignoring data terms. AI vendors may have different retention, training, and logging policies.\n\nA third mistake is not planning exit. AI vendor lock-in can be hidden in prompts, tools, eval datasets, and workflows."
};
