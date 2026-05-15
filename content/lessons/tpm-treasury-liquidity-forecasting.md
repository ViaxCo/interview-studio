---
id: tpm-treasury-liquidity-forecasting
track: TPM
category: Payments & Remittance
level: Advanced
question: How would you design treasury liquidity forecasting for a fintech product?
sources:
  - label: Federal Reserve: Liquidity risk management
    url: https://www.federalreserve.gov/supervisionreg/topics/liquidity_risk.htm
  - label: U.S. Treasury: Cash forecasting
    url: https://tfx.treasury.gov/operational-accounting/cash-forecasting
---

## Learn it

Liquidity forecasting means estimating how much money the company needs available to meet obligations at the right time.

The beginner mistake is thinking the ledger balance is enough. A fintech may have pending card settlements, ACH returns, remittance payouts, refunds, chargebacks, partner reserves, prefunded accounts, and timing cutoffs. The company can look solvent in one view and still fail to fund a payout on time.

The mental model:

```txt
Book balance:
What records say.

Available liquidity:
What can actually be used now.

Forecast:
What cash will be needed soon under normal and stressed conditions.
```

The TPM's job is to turn treasury needs into product data, dashboards, alerts, and workflows.

## Walkthrough

Imagine a remittance product pays recipients before all sender funds have fully settled.

On a quiet day, this improves speed. On a risky day, more sender debits return, more refunds arrive, and a payout partner requires prefunding.

The treasury team needs to know:

```txt
Expected payout volume today
Expected incoming settlement
Pending returns
Partner prefunding requirement
Minimum operating buffer
Stress scenario if volume spikes or returns rise
```

That is a forecasting product, not just a finance spreadsheet.

## Make it practical

Here is a liquidity forecast artifact:

```txt
Forecast horizon:
Same day, 7 days, 30 days

Inputs:
- Current bank balances
- Pending incoming settlements
- Pending outgoing payouts
- Refunds and chargebacks
- ACH return expectations
- Partner prefunding balances
- Reserve requirements
- Forecasted transaction volume
- Cutoff times and holidays

Outputs:
- Available liquidity
- Required liquidity
- Buffer above requirement
- Shortfall alert
- Partner account funding plan
- Stress scenario view

Alerts:
- Buffer below threshold
- Payout volume spike
- Settlement delay
- Return rate spike
- Partner balance below minimum
```

The forecast should drive action before customers are affected.

## Common mistakes

A common mistake is using only historical averages. Liquidity problems often happen during spikes, delays, or unusual return patterns.

Another mistake is ignoring cutoffs and holidays. Money that arrives tomorrow may not help a payout due today.

A third mistake is not tying forecasts to owners. Alerts without an owner become dashboard decoration.

## Check yourself

- Why is ledger balance different from available liquidity?
- What payment flows affect liquidity?
- Why do cutoff times matter?
- What stress scenarios should the forecast include?
- Who should own liquidity alerts?

## Interview version

I would design liquidity forecasting with current balances, pending settlements, outgoing obligations, reserves, refunds, returns, partner prefunding, volume forecasts, cutoffs, and stress scenarios. The product should show required versus available liquidity, buffer, shortfall alerts, and owner actions.

A strong answer connects money movement timing to customer reliability.
