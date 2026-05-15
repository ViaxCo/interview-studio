import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-api-product-design",
  "track": "TPM",
  "category": "API & Partner Integration",
  "level": "Intermediate",
  "question": "How would you design an API product from scratch?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.\n\nThe beginner mistake is thinking API design starts with endpoints. It does not. It starts with the job the API helps another system complete. What action is the partner trying to perform? What data do they need? What errors will they see? How will they test? How will they know whether the integration is working?\n\nAn API product needs a clear promise. For example: \"This API lets partners create payouts, track payout status, receive status updates, and reconcile final outcomes.\" That promise is more useful than starting with `/v1/payouts`."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a company wants to expose a payout API to partners.\n\nThe API needs more than a create endpoint. A partner needs to:\n\n1. Authenticate safely.\n2. Create a payout request.\n3. Avoid duplicate payouts if they retry.\n4. Know whether the payout is accepted, processing, paid, failed, reversed, or unknown.\n5. Receive webhook events when status changes.\n6. Query status later.\n7. Understand errors.\n8. Test in a sandbox.\n9. Reconcile their records with yours.\n\nThat means the TPM should think in resources, workflows, states, and operating needs.\n\n```txt\nCore resources\n- Partner\n- Recipient\n- Payout\n- Payout status event\n- Reconciliation report\n\nCore actions\n- Create payout\n- Retrieve payout\n- Cancel payout if still cancellable\n- Receive status webhook\n- List reports\n```\n\nNow engineering can discuss endpoints, schemas, auth, rate limits, and versioning with a real product shape."
    },
    {
      "title": "Make it practical",
      "body": "I would define the API product in layers.\n\nFirst, define the user and use case. Is this API for public developers, strategic partners, internal teams, or one integration?\n\nSecond, define the resource model. What are the nouns? What state transitions are allowed? Which fields are required? Which fields are returned?\n\nThird, define reliability behavior. What happens on timeout? Can clients retry? Is the API idempotent? Are webhooks guaranteed, duplicated, delayed, or best effort?\n\nFourth, define developer experience. The API needs docs, examples, sandbox data, test credentials, error-code explanations, SDK decisions, changelog, and support path.\n\nFifth, define operations. What dashboards show API health? Who sees partner errors? How are rate limits enforced? What happens during incidents?\n\n```txt\nAPI readiness checklist\n\n- Authentication model approved.\n- Resource names and status model documented.\n- Error codes written in developer-friendly language.\n- Idempotency behavior tested.\n- Webhook retry behavior documented.\n- Sandbox supports happy and failure paths.\n- Monitoring includes latency, error rate, webhook delivery, and partner-level failures.\n- Support knows how to identify a partner request by ID.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is designing around internal database tables. API users do not care how your tables are shaped. They need stable product concepts.\n\nAnother mistake is treating docs as an afterthought. For an API product, documentation is part of the product experience.\n\nA third mistake is ignoring failure behavior. A partner needs to know what to do when a request times out, a webhook is late, or a status is unknown."
    }
  ],
  "answer": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.",
  "reasoning": "I would define the API product in layers.\n\nFirst, define the user and use case. Is this API for public developers, strategic partners, internal teams, or one integration?\n\nSecond, define the resource model. What are the nouns? What state transitions are allowed? Which fields are required? Which fields are returned?\n\nThird, define reliability behavior. What happens on timeout? Can clients retry? Is the API idempotent? Are webhooks guaranteed, duplicated, delayed, or best effort?\n\nFourth, define developer experience. The API needs docs, examples, sandbox data, test credentials, error-code explanations, SDK decisions, changelog, and support path.\n\nFifth, define operations. What dashboards show API health? Who sees partner errors? How are rate limits enforced? What happens during incidents?\n\n```txt\nAPI readiness checklist\n\n- Authentication model approved.\n- Resource names and status model documented.\n- Error codes written in developer-friendly language.\n- Idempotency behavior tested.\n- Webhook retry behavior documented.\n- Sandbox supports happy and failure paths.\n- Monitoring includes latency, error rate, webhook delivery, and partner-level failures.\n- Support knows how to identify a partner request by ID.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Who are the users of an API product?",
    "Why should API design start with workflows instead of endpoints?",
    "What does idempotency protect against?",
    "Why do webhook behavior and retry rules matter?",
    "What should be in an API readiness checklist?"
  ],
  "interviewAnswer": "I would design an API product by starting with the developer or partner workflow, then defining resources, state transitions, request and response contracts, errors, authentication, idempotency, webhooks, versioning, documentation, sandbox, monitoring, and support paths.\n\nA strong TPM answer treats the API as a product experience, not just a set of endpoints. The API must be understandable, reliable, testable, operable, and safe to change.",
  "sourceLinks": [
    {
      "label": "Google Cloud: API design guide",
      "url": "https://cloud.google.com/apis/design"
    },
    {
      "label": "Microsoft Azure: Web API design best practices",
      "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
    }
  ],
  "beginnerExplanation": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.\n\nThe beginner mistake is thinking API design starts with endpoints. It does not. It starts with the job the API helps another system complete. What action is the partner trying to perform? What data do they need? What errors will they see? How will they test? How will they know whether the integration is working?\n\nAn API product needs a clear promise. For example: \"This API lets partners create payouts, track payout status, receive status updates, and reconcile final outcomes.\" That promise is more useful than starting with `/v1/payouts`.",
  "example": "Imagine a company wants to expose a payout API to partners.\n\nThe API needs more than a create endpoint. A partner needs to:\n\n1. Authenticate safely.\n2. Create a payout request.\n3. Avoid duplicate payouts if they retry.\n4. Know whether the payout is accepted, processing, paid, failed, reversed, or unknown.\n5. Receive webhook events when status changes.\n6. Query status later.\n7. Understand errors.\n8. Test in a sandbox.\n9. Reconcile their records with yours.\n\nThat means the TPM should think in resources, workflows, states, and operating needs.\n\n```txt\nCore resources\n- Partner\n- Recipient\n- Payout\n- Payout status event\n- Reconciliation report\n\nCore actions\n- Create payout\n- Retrieve payout\n- Cancel payout if still cancellable\n- Receive status webhook\n- List reports\n```\n\nNow engineering can discuss endpoints, schemas, auth, rate limits, and versioning with a real product shape.",
  "commonMistakes": "A common mistake is designing around internal database tables. API users do not care how your tables are shaped. They need stable product concepts.\n\nAnother mistake is treating docs as an afterthought. For an API product, documentation is part of the product experience.\n\nA third mistake is ignoring failure behavior. A partner needs to know what to do when a request times out, a webhook is late, or a status is unknown."
};
