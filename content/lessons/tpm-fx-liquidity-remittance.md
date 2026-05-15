---
id: tpm-fx-liquidity-remittance
track: TPM
category: Payments & Remittance
level: Intermediate
question: How would you think about FX, liquidity, and payout reliability in a remittance product?
sources:
  - label: Stripe Docs: Balances and settlement time
    url: https://docs.stripe.com/payments/balances
  - label: Stripe Docs: Payout reconciliation report
    url: https://docs.stripe.com/reports/payout-reconciliation
---

## Learn it

Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.

The beginner mistake is thinking the product is done when the sender pays. The sender payment is only one side. The product still has to convert currency, manage settlement timing, fund payout accounts, route to partners, and reconcile what happened.

The user sees one promise:

```txt
Send $100. Recipient gets ₦150,000 today.
```

Behind that promise are many operational requirements.

## Walkthrough

Imagine a user sends money from the US to Nigeria.

The app needs to know:

```txt
Funding:
Has the sender payment settled or is it still pending?

FX:
What rate is shown? How long is it locked?

Liquidity:
Do we have enough local currency to pay the recipient?

Routing:
Which payout partner should be used?

Reliability:
What happens if the partner is slow or down?

Reconciliation:
Did the recipient get paid, and did our records match partner records?
```

A TPM does not need to be a treasury trader, but they must understand that product promises depend on money operations.

## Make it practical

Here is a requirements artifact:

```txt
Feature:
Same-day USD to NGN remittance

User-facing promise:
Show recipient amount, fee, expected delivery time, and exchange rate lock window.

FX requirements:
- Rate source defined
- Rate lock duration shown
- Expired quote requires refresh
- Margin and fee separated or clearly explained

Liquidity requirements:
- Corridor balance monitored
- Minimum balance threshold
- Alert before liquidity shortage
- Fallback route if primary payout balance is low

Payout requirements:
- Partner status checked before submission
- Payout status visible to support
- Delayed payouts get user-safe status copy
- Failed payouts trigger retry or refund rules

Metrics:
- Quote-to-submit conversion
- Payout success rate
- Time to final status
- Liquidity shortage incidents
- FX quote expiry rate
- Support contacts by corridor
```

The TPM should also define risk scenarios:

```txt
If liquidity is low:
Limit transaction size, switch route, or pause corridor.

If FX moves before payment is submitted:
Refresh quote before user confirms.

If partner is down:
Route to backup partner or show delayed delivery before payment.
```

## Common mistakes

A common mistake is promising delivery speed without confirming payout capacity.

Another mistake is hiding rate expiry. Users get angry if the recipient amount changes after they thought the quote was locked.

A third mistake is not monitoring corridor-level health. Global averages can hide one broken country corridor.

## Check yourself

- What is liquidity in a remittance product?
- Why is sender payment not the end of the money movement?
- What does an FX rate lock protect?
- What metrics show payout reliability?
- What can the product do if liquidity is low?

## Interview version

I would think about remittance as a full money-movement promise: funding, FX quote, liquidity, payout routing, partner reliability, user communication, and reconciliation. I would define rate-lock rules, corridor liquidity thresholds, fallback routes, payout states, and metrics like payout success, time to final status, quote expiry, and support contacts.

A strong TPM answer connects customer promise to treasury and operations reality.
