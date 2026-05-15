import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-platform-product-sense",
  "track": "TPM",
  "category": "Platform Product",
  "level": "Intermediate",
  "question": "How would you show product sense for a platform or developer product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.\n\nFor a platform, the user might be a developer, partner, internal team, data analyst, operations team, or third-party app. They do not only care whether the product exists. They care whether it is understandable, reliable, stable, documented, testable, and safe to build on.\n\nThe beginner mistake is judging a platform only by visible features. A platform can have few screens and still be a major product. The experience may live in APIs, SDKs, logs, docs, sandbox behavior, uptime, permissions, and support.\n\nThe mental model is:\n\n```txt\nConsumer product:\nCan the user complete the task?\n\nPlatform product:\nCan another team or developer reliably build their own task on top of this?\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a company offers a payments API.\n\nA shallow product-sense answer says:\n\n```txt\nMake the API fast and easy to use.\n```\n\nThat is true but too vague.\n\nA stronger answer names the platform experience:\n\n```txt\nDeveloper needs:\n- Understand the API quickly.\n- Test without moving real money.\n- Create payments safely.\n- Retry without duplicate charges.\n- Receive status updates.\n- Debug failures.\n- Trust versioning and change management.\n- Get help when production is broken.\n\nBusiness needs:\n- More successful integrations.\n- Lower support burden.\n- Higher payment volume.\n- Better partner trust.\n- Safer operations.\n```\n\nNow product sense becomes specific. The TPM might prioritize idempotency, sandbox data, webhook logs, clearer errors, or better onboarding before adding new endpoints."
    },
    {
      "title": "Make it practical",
      "body": "I would evaluate a platform product with a developer journey.\n\n```txt\nDeveloper journey for API product\n\n1. Discovery\nCan the developer understand what the product does?\n\n2. Access\nCan they get credentials and permissions?\n\n3. First success\nCan they make the first working request quickly?\n\n4. Real integration\nCan they handle auth, errors, retries, webhooks, and test data?\n\n5. Production\nCan they monitor usage, debug failures, and trust uptime?\n\n6. Change\nCan they survive version changes without surprise breakage?\n```\n\nThen I would pick metrics for each stage.\n\n```txt\nPlatform metrics\n\nActivation:\nTime to first successful API call\n\nIntegration health:\nWebhook delivery success, error rate, retry rate\n\nDeveloper experience:\nDocs search success, support tickets per integration\n\nBusiness:\nActive integrations, transaction volume, partner retention\n\nReliability:\nLatency, uptime, incident count, failed requests by endpoint\n```\n\nGood platform product sense means you can see the invisible user experience."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating documentation as separate from the product. For developer products, docs are part of the product surface.\n\nAnother mistake is ignoring failure paths. Developers judge platforms by what happens when things go wrong.\n\nA third mistake is shipping breaking changes casually. Platform users build businesses and workflows on top of your contracts."
    }
  ],
  "answer": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.",
  "reasoning": "I would evaluate a platform product with a developer journey.\n\n```txt\nDeveloper journey for API product\n\n1. Discovery\nCan the developer understand what the product does?\n\n2. Access\nCan they get credentials and permissions?\n\n3. First success\nCan they make the first working request quickly?\n\n4. Real integration\nCan they handle auth, errors, retries, webhooks, and test data?\n\n5. Production\nCan they monitor usage, debug failures, and trust uptime?\n\n6. Change\nCan they survive version changes without surprise breakage?\n```\n\nThen I would pick metrics for each stage.\n\n```txt\nPlatform metrics\n\nActivation:\nTime to first successful API call\n\nIntegration health:\nWebhook delivery success, error rate, retry rate\n\nDeveloper experience:\nDocs search success, support tickets per integration\n\nBusiness:\nActive integrations, transaction volume, partner retention\n\nReliability:\nLatency, uptime, incident count, failed requests by endpoint\n```\n\nGood platform product sense means you can see the invisible user experience.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Who are the users of a platform product?",
    "Why are docs part of the product experience?",
    "What is \"time to first successful API call\" measuring?",
    "Why do webhooks and logs matter for developer experience?",
    "How is platform product sense different from consumer product sense?"
  ],
  "interviewAnswer": "I would show platform product sense by focusing on the builder journey: discovery, access, first success, real integration, production operations, and change management. I would care about docs, sandbox, auth, errors, retries, webhooks, observability, reliability, versioning, and support.\n\nA strong answer shows that a platform product is not only endpoints. It is the full experience of building safely and confidently on top of the product.",
  "sourceLinks": [
    {
      "label": "OpenAPI Initiative: OpenAPI specification",
      "url": "https://learn.openapis.org/specification/"
    },
    {
      "label": "Google Cloud: API design guide",
      "url": "https://cloud.google.com/apis/design"
    }
  ],
  "beginnerExplanation": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.\n\nFor a platform, the user might be a developer, partner, internal team, data analyst, operations team, or third-party app. They do not only care whether the product exists. They care whether it is understandable, reliable, stable, documented, testable, and safe to build on.\n\nThe beginner mistake is judging a platform only by visible features. A platform can have few screens and still be a major product. The experience may live in APIs, SDKs, logs, docs, sandbox behavior, uptime, permissions, and support.\n\nThe mental model is:\n\n```txt\nConsumer product:\nCan the user complete the task?\n\nPlatform product:\nCan another team or developer reliably build their own task on top of this?\n```",
  "example": "Imagine a company offers a payments API.\n\nA shallow product-sense answer says:\n\n```txt\nMake the API fast and easy to use.\n```\n\nThat is true but too vague.\n\nA stronger answer names the platform experience:\n\n```txt\nDeveloper needs:\n- Understand the API quickly.\n- Test without moving real money.\n- Create payments safely.\n- Retry without duplicate charges.\n- Receive status updates.\n- Debug failures.\n- Trust versioning and change management.\n- Get help when production is broken.\n\nBusiness needs:\n- More successful integrations.\n- Lower support burden.\n- Higher payment volume.\n- Better partner trust.\n- Safer operations.\n```\n\nNow product sense becomes specific. The TPM might prioritize idempotency, sandbox data, webhook logs, clearer errors, or better onboarding before adding new endpoints.",
  "commonMistakes": "A common mistake is treating documentation as separate from the product. For developer products, docs are part of the product surface.\n\nAnother mistake is ignoring failure paths. Developers judge platforms by what happens when things go wrong.\n\nA third mistake is shipping breaking changes casually. Platform users build businesses and workflows on top of your contracts."
};
