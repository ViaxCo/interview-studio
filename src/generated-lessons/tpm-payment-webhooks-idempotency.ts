import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-payment-webhooks-idempotency",
  "track": "TPM",
  "category": "API & Partner Integration",
  "level": "Intermediate",
  "question": "How would you make payment webhooks reliable and idempotent?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Payment webhooks are notifications from a payment provider that something happened, such as a payment succeeding, a dispute opening, or a bank debit failing.\n\nThe beginner mistake is treating a webhook like a normal one-time request. Webhooks can be delayed, retried, duplicated, arrive out of order, or fail while your system is down. If your app processes the same event twice, you might ship two orders, credit an account twice, or send confusing emails.\n\nThe mental model:\n\n```txt\nWebhook event:\nThe provider says something changed.\n\nIdempotency:\nProcessing the same event again should not create duplicate side effects.\n\nReconciliation:\nYour records should eventually match the provider's source of truth.\n```\n\nThe TPM needs to require reliability behavior, not only \"listen for webhook.\""
    },
    {
      "title": "Walkthrough",
      "body": "Imagine the app receives `payment_succeeded` and credits a wallet. The server crashes after crediting the wallet but before marking the webhook processed. The provider retries the event.\n\nWithout idempotency, the wallet gets credited twice.\n\nWith idempotency:\n\n```txt\n1. Store event ID.\n2. Check whether event already produced the business action.\n3. If already processed, return success without doing it again.\n4. If failed halfway, resume safely.\n```\n\nThat is why payment systems need replay-safe design."
    },
    {
      "title": "Make it practical",
      "body": "Here is a webhook reliability artifact:\n\n```txt\nWebhook flow:\n1. Verify signature\n2. Store raw event\n3. Return 200 quickly after durable receipt\n4. Process asynchronously\n5. Use event ID or object ID for idempotency\n6. Record processing status\n7. Retry failed processing\n8. Reconcile provider state daily\n\nStates:\n- Received\n- Processing\n- Processed\n- Failed retryable\n- Failed manual review\n- Ignored duplicate\n\nMetrics:\n- Delivery failure rate\n- Processing failure rate\n- Duplicate event count\n- Oldest unprocessed event\n- Reconciliation mismatches\n```\n\nThe product requirement should include replay tooling so support and engineering can recover from failures."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is doing heavy business logic before acknowledging receipt. Slow handlers create retries and confusion.\n\nAnother mistake is using only the webhook as the source of truth. Reconciliation against provider records catches missed or broken events.\n\nA third mistake is not designing idempotency by business action. Deduplicating the HTTP request is not enough if the same payment object triggers multiple paths."
    }
  ],
  "answer": "Payment webhooks are notifications from a payment provider that something happened, such as a payment succeeding, a dispute opening, or a bank debit failing.",
  "reasoning": "Here is a webhook reliability artifact:\n\n```txt\nWebhook flow:\n1. Verify signature\n2. Store raw event\n3. Return 200 quickly after durable receipt\n4. Process asynchronously\n5. Use event ID or object ID for idempotency\n6. Record processing status\n7. Retry failed processing\n8. Reconcile provider state daily\n\nStates:\n- Received\n- Processing\n- Processed\n- Failed retryable\n- Failed manual review\n- Ignored duplicate\n\nMetrics:\n- Delivery failure rate\n- Processing failure rate\n- Duplicate event count\n- Oldest unprocessed event\n- Reconciliation mismatches\n```\n\nThe product requirement should include replay tooling so support and engineering can recover from failures.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why can webhooks be delivered more than once?",
    "What does idempotency prevent?",
    "Why should raw events be stored?",
    "Why is reconciliation still needed?",
    "What dashboard would show webhook health?"
  ],
  "interviewAnswer": "I would make payment webhooks reliable by verifying signatures, storing raw events durably, acknowledging quickly, processing asynchronously, using idempotency keys, tracking processing states, supporting retries and replay, and reconciling against the provider's source of truth.\n\nA strong answer shows that payment events need recovery design because money side effects must not duplicate or disappear.",
  "sourceLinks": [
    {
      "label": "Stripe webhooks",
      "url": "https://docs.stripe.com/webhooks?lang=node"
    },
    {
      "label": "Stripe advanced error handling",
      "url": "https://docs.stripe.com/error-low-level?locale=en-GB"
    }
  ],
  "beginnerExplanation": "Payment webhooks are notifications from a payment provider that something happened, such as a payment succeeding, a dispute opening, or a bank debit failing.\n\nThe beginner mistake is treating a webhook like a normal one-time request. Webhooks can be delayed, retried, duplicated, arrive out of order, or fail while your system is down. If your app processes the same event twice, you might ship two orders, credit an account twice, or send confusing emails.\n\nThe mental model:\n\n```txt\nWebhook event:\nThe provider says something changed.\n\nIdempotency:\nProcessing the same event again should not create duplicate side effects.\n\nReconciliation:\nYour records should eventually match the provider's source of truth.\n```\n\nThe TPM needs to require reliability behavior, not only \"listen for webhook.\"",
  "example": "Imagine the app receives `payment_succeeded` and credits a wallet. The server crashes after crediting the wallet but before marking the webhook processed. The provider retries the event.\n\nWithout idempotency, the wallet gets credited twice.\n\nWith idempotency:\n\n```txt\n1. Store event ID.\n2. Check whether event already produced the business action.\n3. If already processed, return success without doing it again.\n4. If failed halfway, resume safely.\n```\n\nThat is why payment systems need replay-safe design.",
  "commonMistakes": "A common mistake is doing heavy business logic before acknowledging receipt. Slow handlers create retries and confusion.\n\nAnother mistake is using only the webhook as the source of truth. Reconciliation against provider records catches missed or broken events.\n\nA third mistake is not designing idempotency by business action. Deduplicating the HTTP request is not enough if the same payment object triggers multiple paths."
};
