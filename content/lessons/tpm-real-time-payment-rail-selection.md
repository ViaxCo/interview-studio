---
id: tpm-real-time-payment-rail-selection
track: TPM
category: Payments & Remittance
level: Advanced
question: How would you choose between payment rails for a real-time money movement product?
sources:
  - label: Federal Reserve: FedNow Service
    url: https://www.frbservices.org/financial-services/fednow
  - label: The Clearing House: RTP Network
    url: https://www.theclearinghouse.org/payment-systems/rtp
---

## Learn it

Payment rail selection means choosing the network or method used to move money.

The beginner mistake is choosing the fastest rail by default. A real-time payment rail may be fast, but the product also needs coverage, limits, reversibility, fraud controls, cost, bank availability, operational support, and customer expectations. "Fast" is only one dimension.

The mental model:

```txt
Speed:
How quickly money moves.

Finality:
Can the transaction be reversed?

Coverage:
Can the sender and receiver actually use the rail?

Risk:
What fraud, error, or support burden does the rail create?
```

The TPM should select the rail based on the user job and risk, not hype.

## Walkthrough

Imagine a fintech wants instant payouts to consumers.

Possible options:

```txt
ACH:
Broad coverage, lower cost, slower, return risk.

Real-time payment rail:
Fast, often more final, coverage depends on participating banks, fraud decisions must be strong before send.

Card push payout:
Fast for eligible cards, fees and limits vary, network rules matter.
```

The best choice may be a routing strategy, not one rail forever.

## Make it practical

Here is a rail-selection artifact:

```txt
Use case:
Instant consumer payout

Decision dimensions:
- Eligible banks/cards
- Speed promise
- Transaction limits
- Cost per transaction
- Reversibility
- Fraud screening before send
- Error handling
- Support tooling
- Reconciliation
- Partner outages

Routing policy:
- Use instant rail when recipient is eligible and risk score is low
- Use ACH when speed is less critical or instant rail is unavailable
- Hold for review when fraud risk is high
- Fall back only if customer promise still holds
```

The product should not promise instant if the routing engine cannot reliably deliver it.

## Common mistakes

A common mistake is ignoring finality. Fast irreversible payments require stronger pre-send controls.

Another mistake is hiding eligibility. Users need to know whether their bank or card can receive instant payouts.

A third mistake is not designing fallback behavior. If a rail is unavailable, the product needs a clear next state.

## Check yourself

- Why is fastest not always best?
- What does payment finality change?
- What makes coverage important?
- When should routing hold for risk review?
- How would you explain fallback to a user?

## Interview version

I would choose payment rails by comparing speed, coverage, limits, cost, finality, fraud controls, support burden, error handling, reconciliation, and partner reliability. For real-time products, I would often use routing rules: instant when eligible and low risk, slower rail when acceptable, and review when risk is high.

A strong answer shows that rail selection is product strategy plus operational risk.
