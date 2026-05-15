import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-multi-currency-wallet-pricing",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Advanced",
  "question": "How would you design pricing and balance behavior for a multi-currency wallet?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A multi-currency wallet lets users hold, convert, send, or receive money in more than one currency.\n\nThe beginner mistake is treating it like a normal wallet with labels changed. Multi-currency products need exchange rates, conversion fees, balance buckets, rounding rules, settlement timing, reversals, statements, and clear user expectations.\n\nThe mental model:\n\n```txt\nCurrency balance:\nHow much the user holds in each currency.\n\nConversion:\nMoving value from one currency to another.\n\nPricing:\nExchange rate, markup, fee, and final amount.\n```\n\nThe TPM should make the money math transparent."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user holds USD and wants to send EUR.\n\nThe product can:\n\n```txt\nConvert USD to EUR first, then send.\nSend using USD and convert at payout.\nAsk the user to fund EUR directly.\n```\n\nEach choice affects rate certainty, fees, balance display, refunds, and support."
    },
    {
      "title": "Make it practical",
      "body": "Here is a wallet pricing artifact:\n\n```txt\nWallet:\nUSD and EUR balances\n\nUser action:\nSend 100 EUR\n\nDisplay:\n- Source currency\n- Exchange rate\n- Conversion fee\n- Total debited\n- Recipient amount\n- Rate expiry\n- Refund currency behavior\n\nBalance rules:\n- Separate balances by currency\n- No hidden auto-conversion without confirmation\n- Rounding rule documented\n- Failed transaction returns to original currency when possible\n- Statement shows conversion and fee\n```\n\nThe user should know what currency is leaving and what currency is arriving."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is hiding FX markup inside the rate without clear explanation. Users may feel tricked.\n\nAnother mistake is not defining refund currency. If the exchange rate changes, refunds can become confusing.\n\nA third mistake is mixing balances visually. Users need to know which funds are available in which currency."
    }
  ],
  "answer": "A multi-currency wallet lets users hold, convert, send, or receive money in more than one currency.",
  "reasoning": "Here is a wallet pricing artifact:\n\n```txt\nWallet:\nUSD and EUR balances\n\nUser action:\nSend 100 EUR\n\nDisplay:\n- Source currency\n- Exchange rate\n- Conversion fee\n- Total debited\n- Recipient amount\n- Rate expiry\n- Refund currency behavior\n\nBalance rules:\n- Separate balances by currency\n- No hidden auto-conversion without confirmation\n- Rounding rule documented\n- Failed transaction returns to original currency when possible\n- Statement shows conversion and fee\n```\n\nThe user should know what currency is leaving and what currency is arriving.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a multi-currency wallet more complex than a single balance?",
    "What should the user see before conversion?",
    "Why does rate expiry matter?",
    "What happens when a converted transfer is refunded?",
    "How should statements show conversion fees?"
  ],
  "interviewAnswer": "I would design multi-currency wallet pricing with separate currency balances, explicit exchange rates, fees, rate expiry, rounding rules, total debited, recipient amount, refund behavior, statements, and support visibility. The user should understand the conversion before committing.\n\nA strong answer makes FX and balance behavior transparent.",
  "sourceLinks": [
    {
      "label": "CFPB: Remittance transfers",
      "url": "https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/remittance-transfer-rule/"
    },
    {
      "label": "Stripe: Multi-currency settlement",
      "url": "https://docs.stripe.com/currencies/conversions"
    }
  ],
  "beginnerExplanation": "A multi-currency wallet lets users hold, convert, send, or receive money in more than one currency.\n\nThe beginner mistake is treating it like a normal wallet with labels changed. Multi-currency products need exchange rates, conversion fees, balance buckets, rounding rules, settlement timing, reversals, statements, and clear user expectations.\n\nThe mental model:\n\n```txt\nCurrency balance:\nHow much the user holds in each currency.\n\nConversion:\nMoving value from one currency to another.\n\nPricing:\nExchange rate, markup, fee, and final amount.\n```\n\nThe TPM should make the money math transparent.",
  "example": "Imagine a user holds USD and wants to send EUR.\n\nThe product can:\n\n```txt\nConvert USD to EUR first, then send.\nSend using USD and convert at payout.\nAsk the user to fund EUR directly.\n```\n\nEach choice affects rate certainty, fees, balance display, refunds, and support.",
  "commonMistakes": "A common mistake is hiding FX markup inside the rate without clear explanation. Users may feel tricked.\n\nAnother mistake is not defining refund currency. If the exchange rate changes, refunds can become confusing.\n\nA third mistake is mixing balances visually. Users need to know which funds are available in which currency."
};
