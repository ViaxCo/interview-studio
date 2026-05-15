import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-usage-based-pricing-packaging",
  "track": "TPM",
  "category": "Pricing & Packaging",
  "level": "Intermediate",
  "question": "How would you design pricing and packaging for an API or usage-based product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.\n\nFor API and platform products, pricing is often usage-based. Customers may pay per API call, transaction, active user, document processed, webhook delivery, seat, storage unit, or money movement volume.\n\nThe beginner mistake is choosing a meter only because it is easy to count. A good pricing meter should be understandable, connected to customer value, hard to accidentally abuse, and possible to measure accurately.\n\nThe mental model is:\n\n```txt\nPackaging:\nWhat is included?\n\nPricing:\nWhat does it cost?\n\nMetering:\nWhat unit do we count?\n\nEntitlements:\nWhat is the customer allowed to use?\n\nBilling experience:\nCan the customer predict, understand, and trust the bill?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a company sells a fraud-screening API.\n\nPossible meters:\n\n```txt\nPer API request:\nEasy to measure, but customers may worry retries or failed requests cost money.\n\nPer completed screening:\nCloser to value, but the system must define what \"completed\" means.\n\nPer approved transaction:\nVery tied to value, but the vendor takes revenue risk if fraud checks block many transactions.\n\nMonthly platform fee plus usage:\nPredictable base revenue, then scales with customer usage.\n```\n\nThe TPM has to think beyond revenue. Pricing affects product behavior. If customers pay per request, they may avoid useful checks. If the free tier is too generous, heavy users may never convert. If overages are confusing, finance and support will get angry tickets."
    },
    {
      "title": "Make it practical",
      "body": "Here is a pricing design artifact:\n\n```txt\nProduct:\nFraud screening API\n\nPrimary value:\nReduce fraud losses while allowing good users through.\n\nCustomer segments:\n- Startup: low volume, needs simple setup\n- Growth: medium volume, needs rules and dashboard\n- Enterprise: high volume, needs SLA, audit logs, custom limits\n\nPackages:\n\nStarter:\n- 5,000 screenings/month included\n- Basic risk score\n- Standard support\n\nGrowth:\n- 50,000 screenings/month included\n- Rules engine\n- Webhooks\n- Dashboard exports\n\nEnterprise:\n- Custom volume\n- SLA\n- SSO and audit logs\n- Dedicated support\n- Contracted data-retention terms\n\nMeter:\nCompleted screening event\n\nWhy this meter:\nIt maps to customer value better than raw API calls and avoids charging for failed retries.\n\nGuardrails:\n- Usage dashboard\n- Threshold alerts at 80 percent and 100 percent\n- Idempotency to avoid duplicate billing\n- Clear overage pricing\n```\n\nThe TPM also needs to define billing edge cases.\n\n```txt\nBilling edge cases\n\n- What counts if the API times out?\n- What counts if the customer retries with the same idempotency key?\n- Are sandbox calls billable?\n- Are failed screenings billable?\n- Can customers set spend limits?\n- How are refunds or billing disputes handled?\n- What usage is shown in real time versus after invoice close?\n```\n\nThis is the part interviewers listen for. A strong TPM understands that pricing is also a product experience."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is picking a meter that customers do not understand. Confusing bills create distrust.\n\nAnother mistake is ignoring cost drivers. If the product has expensive third-party checks or compute costs, pricing must account for them.\n\nA third mistake is forgetting entitlements. The app must know what each plan can use before the bill is generated."
    }
  ],
  "answer": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.",
  "reasoning": "Here is a pricing design artifact:\n\n```txt\nProduct:\nFraud screening API\n\nPrimary value:\nReduce fraud losses while allowing good users through.\n\nCustomer segments:\n- Startup: low volume, needs simple setup\n- Growth: medium volume, needs rules and dashboard\n- Enterprise: high volume, needs SLA, audit logs, custom limits\n\nPackages:\n\nStarter:\n- 5,000 screenings/month included\n- Basic risk score\n- Standard support\n\nGrowth:\n- 50,000 screenings/month included\n- Rules engine\n- Webhooks\n- Dashboard exports\n\nEnterprise:\n- Custom volume\n- SLA\n- SSO and audit logs\n- Dedicated support\n- Contracted data-retention terms\n\nMeter:\nCompleted screening event\n\nWhy this meter:\nIt maps to customer value better than raw API calls and avoids charging for failed retries.\n\nGuardrails:\n- Usage dashboard\n- Threshold alerts at 80 percent and 100 percent\n- Idempotency to avoid duplicate billing\n- Clear overage pricing\n```\n\nThe TPM also needs to define billing edge cases.\n\n```txt\nBilling edge cases\n\n- What counts if the API times out?\n- What counts if the customer retries with the same idempotency key?\n- Are sandbox calls billable?\n- Are failed screenings billable?\n- Can customers set spend limits?\n- How are refunds or billing disputes handled?\n- What usage is shown in real time versus after invoice close?\n```\n\nThis is the part interviewers listen for. A strong TPM understands that pricing is also a product experience.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between pricing and packaging?",
    "Why should a usage meter map to customer value?",
    "What billing edge cases matter for API products?",
    "Why do usage alerts improve trust?",
    "How can pricing accidentally shape bad product behavior?"
  ],
  "interviewAnswer": "I would design usage-based pricing by identifying customer segments, the value metric, packages, entitlements, usage meter, billing edge cases, cost drivers, and customer controls like dashboards, alerts, and spend limits.\n\nA strong answer treats billing as a product surface. Customers should understand what they are paying for, why it maps to value, and how to avoid surprise.",
  "sourceLinks": [
    {
      "label": "Stripe: Usage-based billing",
      "url": "https://stripe.com/billing/usage-based-billing"
    },
    {
      "label": "Stripe Docs: Usage-based pricing models",
      "url": "https://docs.stripe.com/billing/subscriptions/usage-based-legacy/pricing-models"
    }
  ],
  "beginnerExplanation": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.\n\nFor API and platform products, pricing is often usage-based. Customers may pay per API call, transaction, active user, document processed, webhook delivery, seat, storage unit, or money movement volume.\n\nThe beginner mistake is choosing a meter only because it is easy to count. A good pricing meter should be understandable, connected to customer value, hard to accidentally abuse, and possible to measure accurately.\n\nThe mental model is:\n\n```txt\nPackaging:\nWhat is included?\n\nPricing:\nWhat does it cost?\n\nMetering:\nWhat unit do we count?\n\nEntitlements:\nWhat is the customer allowed to use?\n\nBilling experience:\nCan the customer predict, understand, and trust the bill?\n```",
  "example": "Imagine a company sells a fraud-screening API.\n\nPossible meters:\n\n```txt\nPer API request:\nEasy to measure, but customers may worry retries or failed requests cost money.\n\nPer completed screening:\nCloser to value, but the system must define what \"completed\" means.\n\nPer approved transaction:\nVery tied to value, but the vendor takes revenue risk if fraud checks block many transactions.\n\nMonthly platform fee plus usage:\nPredictable base revenue, then scales with customer usage.\n```\n\nThe TPM has to think beyond revenue. Pricing affects product behavior. If customers pay per request, they may avoid useful checks. If the free tier is too generous, heavy users may never convert. If overages are confusing, finance and support will get angry tickets.",
  "commonMistakes": "A common mistake is picking a meter that customers do not understand. Confusing bills create distrust.\n\nAnother mistake is ignoring cost drivers. If the product has expensive third-party checks or compute costs, pricing must account for them.\n\nA third mistake is forgetting entitlements. The app must know what each plan can use before the bill is generated."
};
