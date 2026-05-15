---
id: tpm-multi-currency-wallet-pricing
track: TPM
category: Payments & Remittance
level: Advanced
question: How would you design pricing and balance behavior for a multi-currency wallet?
sources:
  - label: CFPB: Remittance transfers
    url: https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/
  - label: Stripe: Multi-currency settlement
    url: https://docs.stripe.com/currencies/conversions
---

## Learn it

A multi-currency wallet lets users hold, convert, send, or receive money in more than one currency.

The beginner mistake is treating it like a normal wallet with labels changed. Multi-currency products need exchange rates, conversion fees, balance buckets, rounding rules, settlement timing, reversals, statements, and clear user expectations.

The mental model:

```txt
Currency balance:
How much the user holds in each currency.

Conversion:
Moving value from one currency to another.

Pricing:
Exchange rate, markup, fee, and final amount.
```

The TPM should make the money math transparent.

## Walkthrough

Imagine a user holds USD and wants to send EUR.

The product can:

```txt
Convert USD to EUR first, then send.
Send using USD and convert at payout.
Ask the user to fund EUR directly.
```

Each choice affects rate certainty, fees, balance display, refunds, and support.

## Make it practical

Here is a wallet pricing artifact:

```txt
Wallet:
USD and EUR balances

User action:
Send 100 EUR

Display:
- Source currency
- Exchange rate
- Conversion fee
- Total debited
- Recipient amount
- Rate expiry
- Refund currency behavior

Balance rules:
- Separate balances by currency
- No hidden auto-conversion without confirmation
- Rounding rule documented
- Failed transaction returns to original currency when possible
- Statement shows conversion and fee
```

The user should know what currency is leaving and what currency is arriving.

## Common mistakes

A common mistake is hiding FX markup inside the rate without clear explanation. Users may feel tricked.

Another mistake is not defining refund currency. If the exchange rate changes, refunds can become confusing.

A third mistake is mixing balances visually. Users need to know which funds are available in which currency.

## Check yourself

- Why is a multi-currency wallet more complex than a single balance?
- What should the user see before conversion?
- Why does rate expiry matter?
- What happens when a converted transfer is refunded?
- How should statements show conversion fees?

## Interview version

I would design multi-currency wallet pricing with separate currency balances, explicit exchange rates, fees, rate expiry, rounding rules, total debited, recipient amount, refund behavior, statements, and support visibility. The user should understand the conversion before committing.

A strong answer makes FX and balance behavior transparent.
