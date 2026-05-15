---
id: tpm-payment-webhooks-idempotency
track: TPM
category: API & Partner Integration
level: Intermediate
question: How would you make payment webhooks reliable and idempotent?
sources:
  - label: Stripe webhooks
    url: https://docs.stripe.com/webhooks?lang=node
  - label: Stripe advanced error handling
    url: https://docs.stripe.com/error-low-level?locale=en-GB
---

## Learn it

Payment webhooks are notifications from a payment provider that something happened, such as a payment succeeding, a dispute opening, or a bank debit failing.

The beginner mistake is treating a webhook like a normal one-time request. Webhooks can be delayed, retried, duplicated, arrive out of order, or fail while your system is down. If your app processes the same event twice, you might ship two orders, credit an account twice, or send confusing emails.

The mental model:

```txt
Webhook event:
The provider says something changed.

Idempotency:
Processing the same event again should not create duplicate side effects.

Reconciliation:
Your records should eventually match the provider's source of truth.
```

The TPM needs to require reliability behavior, not only "listen for webhook."

## Walkthrough

Imagine the app receives `payment_succeeded` and credits a wallet. The server crashes after crediting the wallet but before marking the webhook processed. The provider retries the event.

Without idempotency, the wallet gets credited twice.

With idempotency:

```txt
1. Store event ID.
2. Check whether event already produced the business action.
3. If already processed, return success without doing it again.
4. If failed halfway, resume safely.
```

That is why payment systems need replay-safe design.

## Make it practical

Here is a webhook reliability artifact:

```txt
Webhook flow:
1. Verify signature
2. Store raw event
3. Return 200 quickly after durable receipt
4. Process asynchronously
5. Use event ID or object ID for idempotency
6. Record processing status
7. Retry failed processing
8. Reconcile provider state daily

States:
- Received
- Processing
- Processed
- Failed retryable
- Failed manual review
- Ignored duplicate

Metrics:
- Delivery failure rate
- Processing failure rate
- Duplicate event count
- Oldest unprocessed event
- Reconciliation mismatches
```

The product requirement should include replay tooling so support and engineering can recover from failures.

## Common mistakes

A common mistake is doing heavy business logic before acknowledging receipt. Slow handlers create retries and confusion.

Another mistake is using only the webhook as the source of truth. Reconciliation against provider records catches missed or broken events.

A third mistake is not designing idempotency by business action. Deduplicating the HTTP request is not enough if the same payment object triggers multiple paths.

## Check yourself

- Why can webhooks be delivered more than once?
- What does idempotency prevent?
- Why should raw events be stored?
- Why is reconciliation still needed?
- What dashboard would show webhook health?

## Interview version

I would make payment webhooks reliable by verifying signatures, storing raw events durably, acknowledging quickly, processing asynchronously, using idempotency keys, tracking processing states, supporting retries and replay, and reconciling against the provider's source of truth.

A strong answer shows that payment events need recovery design because money side effects must not duplicate or disappear.
