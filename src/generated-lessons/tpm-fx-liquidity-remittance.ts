import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fx-liquidity-remittance",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you think about FX, liquidity, and payout reliability in a remittance product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.\n\nThe beginner mistake is thinking the product is done when the sender pays. The sender payment is only one side. The product still has to convert currency, manage settlement timing, fund payout accounts, route to partners, and reconcile what happened.\n\nThe user sees one promise:\n\n```txt\nSend $100. Recipient gets ₦150,000 today.\n```\n\nBehind that promise are many operational requirements."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a user sends money from the US to Nigeria.\n\nThe app needs to know:\n\n```txt\nFunding:\nHas the sender payment settled or is it still pending?\n\nFX:\nWhat rate is shown? How long is it locked?\n\nLiquidity:\nDo we have enough local currency to pay the recipient?\n\nRouting:\nWhich payout partner should be used?\n\nReliability:\nWhat happens if the partner is slow or down?\n\nReconciliation:\nDid the recipient get paid, and did our records match partner records?\n```\n\nA TPM does not need to be a treasury trader, but they must understand that product promises depend on money operations."
    },
    {
      "title": "Make it practical",
      "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nSame-day USD to NGN remittance\n\nUser-facing promise:\nShow recipient amount, fee, expected delivery time, and exchange rate lock window.\n\nFX requirements:\n- Rate source defined\n- Rate lock duration shown\n- Expired quote requires refresh\n- Margin and fee separated or clearly explained\n\nLiquidity requirements:\n- Corridor balance monitored\n- Minimum balance threshold\n- Alert before liquidity shortage\n- Fallback route if primary payout balance is low\n\nPayout requirements:\n- Partner status checked before submission\n- Payout status visible to support\n- Delayed payouts get user-safe status copy\n- Failed payouts trigger retry or refund rules\n\nMetrics:\n- Quote-to-submit conversion\n- Payout success rate\n- Time to final status\n- Liquidity shortage incidents\n- FX quote expiry rate\n- Support contacts by corridor\n```\n\nThe TPM should also define risk scenarios:\n\n```txt\nIf liquidity is low:\nLimit transaction size, switch route, or pause corridor.\n\nIf FX moves before payment is submitted:\nRefresh quote before user confirms.\n\nIf partner is down:\nRoute to backup partner or show delayed delivery before payment.\n```"
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is promising delivery speed without confirming payout capacity.\n\nAnother mistake is hiding rate expiry. Users get angry if the recipient amount changes after they thought the quote was locked.\n\nA third mistake is not monitoring corridor-level health. Global averages can hide one broken country corridor."
    }
  ],
  "answer": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.",
  "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nSame-day USD to NGN remittance\n\nUser-facing promise:\nShow recipient amount, fee, expected delivery time, and exchange rate lock window.\n\nFX requirements:\n- Rate source defined\n- Rate lock duration shown\n- Expired quote requires refresh\n- Margin and fee separated or clearly explained\n\nLiquidity requirements:\n- Corridor balance monitored\n- Minimum balance threshold\n- Alert before liquidity shortage\n- Fallback route if primary payout balance is low\n\nPayout requirements:\n- Partner status checked before submission\n- Payout status visible to support\n- Delayed payouts get user-safe status copy\n- Failed payouts trigger retry or refund rules\n\nMetrics:\n- Quote-to-submit conversion\n- Payout success rate\n- Time to final status\n- Liquidity shortage incidents\n- FX quote expiry rate\n- Support contacts by corridor\n```\n\nThe TPM should also define risk scenarios:\n\n```txt\nIf liquidity is low:\nLimit transaction size, switch route, or pause corridor.\n\nIf FX moves before payment is submitted:\nRefresh quote before user confirms.\n\nIf partner is down:\nRoute to backup partner or show delayed delivery before payment.\n```",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is liquidity in a remittance product?",
    "Why is sender payment not the end of the money movement?",
    "What does an FX rate lock protect?",
    "What metrics show payout reliability?",
    "What can the product do if liquidity is low?"
  ],
  "interviewAnswer": "I would think about remittance as a full money-movement promise: funding, FX quote, liquidity, payout routing, partner reliability, user communication, and reconciliation. I would define rate-lock rules, corridor liquidity thresholds, fallback routes, payout states, and metrics like payout success, time to final status, quote expiry, and support contacts.\n\nA strong TPM answer connects customer promise to treasury and operations reality.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: Balances and settlement time",
      "url": "https://docs.stripe.com/payments/balances"
    },
    {
      "label": "Stripe Docs: Payout reconciliation report",
      "url": "https://docs.stripe.com/reports/payout-reconciliation"
    }
  ],
  "beginnerExplanation": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.\n\nThe beginner mistake is thinking the product is done when the sender pays. The sender payment is only one side. The product still has to convert currency, manage settlement timing, fund payout accounts, route to partners, and reconcile what happened.\n\nThe user sees one promise:\n\n```txt\nSend $100. Recipient gets ₦150,000 today.\n```\n\nBehind that promise are many operational requirements.",
  "example": "Imagine a user sends money from the US to Nigeria.\n\nThe app needs to know:\n\n```txt\nFunding:\nHas the sender payment settled or is it still pending?\n\nFX:\nWhat rate is shown? How long is it locked?\n\nLiquidity:\nDo we have enough local currency to pay the recipient?\n\nRouting:\nWhich payout partner should be used?\n\nReliability:\nWhat happens if the partner is slow or down?\n\nReconciliation:\nDid the recipient get paid, and did our records match partner records?\n```\n\nA TPM does not need to be a treasury trader, but they must understand that product promises depend on money operations.",
  "commonMistakes": "A common mistake is promising delivery speed without confirming payout capacity.\n\nAnother mistake is hiding rate expiry. Users get angry if the recipient amount changes after they thought the quote was locked.\n\nA third mistake is not monitoring corridor-level health. Global averages can hide one broken country corridor."
};
