---
id: tpm-partner-outage-fallback
track: TPM
category: Operations
level: Intermediate
question: How would you handle a critical partner API outage?
sources:
  - label: Google SRE: Addressing cascading failures
    url: https://sre.google/sre-book/addressing-cascading-failures/
  - label: Atlassian: Incident management
    url: https://www.atlassian.com/incident-management
---

## Learn it

A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.

For a TPM, the key question is not only "when will the partner come back?" It is "how do we protect users, reduce harm, communicate clearly, and keep the business operating while the dependency is unhealthy?"

If the partner moves money, verifies identity, sends notifications, or screens fraud, the outage can create financial, compliance, support, and trust risk.

## Walkthrough

Imagine a payout partner is timing out. Users are trying to send money.

The dangerous cases are:

- A request timed out, but the partner may still process it.
- A user retries and might create a duplicate payout.
- Your app shows failure even though money may move later.
- Webhooks are delayed, so status is stale.
- Support cannot tell customers what happened.

The TPM should help classify the outage:

```txt
Severity questions

- Is every user affected or only one corridor?
- Are new requests failing, or only status updates?
- Is money movement uncertain?
- Can users safely retry?
- Is there a backup partner?
- What message should users and support see?
```

## Make it practical

I would handle the outage in phases.

First, contain risk. If duplicate money movement is possible, stop new attempts or disable retries until the state is known.

Second, degrade gracefully. If a backup partner exists, route eligible traffic there. If not, show clear pending or unavailable states instead of pretending everything is fine.

Third, communicate internally. Engineering, support, operations, compliance, and leadership need a shared incident channel and status updates.

Fourth, communicate to users when needed. The message should explain what is affected, what users can do, and when the next update is expected.

Fifth, recover and reconcile. When the partner returns, confirm final statuses, identify stuck transactions, resolve duplicates, and update customers.

```txt
Fallback decision guide

If partner status is unknown:
- Pause new requests if duplicate execution is possible.
- Show pending state for affected transactions.
- Disable user retry until idempotency or final state is confirmed.

If backup partner is available:
- Route only supported corridors or payment types.
- Monitor failure rate and cost.
- Keep partner-specific limits visible to support.

If no fallback exists:
- Stop the affected flow.
- Preserve user input where safe.
- Notify when service returns.
```

## Common mistakes

A common mistake is letting users retry when the first request may still complete. That can create duplicates.

Another mistake is hiding the problem behind generic errors. Users and support need the truth in plain language.

A third mistake is ending the incident when the partner returns. Recovery also includes reconciliation, customer communication, and operational cleanup.

## Check yourself

- Why can a timeout be more dangerous than a clear failure?
- When should retries be disabled?
- What makes a fallback partner safe to use?
- Why does support need partner-specific visibility?
- What recovery work remains after the partner is back?

## Interview version

I would handle a partner outage by triaging scope and risk, containing harmful actions, disabling unsafe retries, routing to fallback where possible, communicating clearly, monitoring the affected flow, and reconciling final states after recovery.

A strong TPM answer shows that partner outages are product incidents. The priority is customer trust, operational clarity, and safe recovery, not only waiting for the partner status page to turn green.
