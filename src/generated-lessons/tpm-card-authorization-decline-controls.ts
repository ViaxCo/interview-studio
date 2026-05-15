import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-card-authorization-decline-controls",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Intermediate",
  "question": "How would you design card authorization and decline controls?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Card authorization is the moment a card transaction is approved or declined.\n\nThe beginner mistake is thinking a decline is just \"not enough money.\" Card transactions can be declined because the card is inactive, the balance is insufficient, spending controls block the merchant, the country is restricted, the amount is too high, the transaction looks risky, or the real-time authorization system does not respond in time.\n\nThe mental model:\n\n```txt\nAuthorization request:\nA merchant asks, \"Can this card spend this amount here?\"\n\nDecision:\nApprove, decline, or apply a control.\n\nUser experience:\nThe cardholder needs a clear enough reason and a path to fix it if possible.\n```\n\nFor a TPM, the hard part is turning a technical decision into a reliable product experience."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a company card can only be used for travel. A cardholder tries to buy electronics.\n\nThe system may decline because the merchant category is blocked.\n\nA bad app experience says:\n\n```txt\nTransaction declined.\n```\n\nA better experience says:\n\n```txt\nDeclined because this card is limited to travel purchases.\nAsk your admin to update the card controls if this purchase is required.\n```\n\nThat message reduces support confusion without exposing sensitive fraud systems."
    },
    {
      "title": "Make it practical",
      "body": "Here is an authorization control artifact:\n\n```txt\nCard product:\nEmployee expense card\n\nControls:\n- Allowed merchant categories: travel, lodging, meals\n- Blocked countries: configured by risk policy\n- Per-transaction limit: $1,000\n- Monthly limit: $5,000\n- Real-time webhook required for high-risk authorizations\n\nDecision reasons:\n- Insufficient balance\n- Card inactive\n- Merchant category blocked\n- Amount over limit\n- Country blocked\n- Suspected fraud\n- Authorization timed out\n\nUser-facing copy:\n- Specific for policy declines\n- Generic for sensitive fraud declines\n- Admin next step when applicable\n\nMetrics:\n- Approval rate\n- False decline rate\n- Decline reason mix\n- Webhook latency\n- Timeout fallback rate\n```\n\nThe product should help legitimate cardholders understand fixable declines."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is showing the same message for every decline. That drives support tickets and user frustration.\n\nAnother mistake is exposing fraud logic too directly. \"Declined because your IP looks suspicious\" may help attackers learn the system.\n\nA third mistake is ignoring timeout behavior. Real-time authorization systems need a defined fallback because card networks expect fast decisions."
    }
  ],
  "answer": "Card authorization is the moment a card transaction is approved or declined.",
  "reasoning": "Here is an authorization control artifact:\n\n```txt\nCard product:\nEmployee expense card\n\nControls:\n- Allowed merchant categories: travel, lodging, meals\n- Blocked countries: configured by risk policy\n- Per-transaction limit: $1,000\n- Monthly limit: $5,000\n- Real-time webhook required for high-risk authorizations\n\nDecision reasons:\n- Insufficient balance\n- Card inactive\n- Merchant category blocked\n- Amount over limit\n- Country blocked\n- Suspected fraud\n- Authorization timed out\n\nUser-facing copy:\n- Specific for policy declines\n- Generic for sensitive fraud declines\n- Admin next step when applicable\n\nMetrics:\n- Approval rate\n- False decline rate\n- Decline reason mix\n- Webhook latency\n- Timeout fallback rate\n```\n\nThe product should help legitimate cardholders understand fixable declines.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What are common reasons a card authorization can decline?",
    "Which decline reasons can be shown clearly to the user?",
    "Which reasons should stay generic for safety?",
    "Why does webhook latency matter?",
    "What metric would reveal too many legitimate users are being blocked?"
  ],
  "interviewAnswer": "I would design card authorization controls around balance, card status, merchant category, country, transaction amount, velocity, risk, and real-time decisioning. I would define decline reason codes, safe user-facing messages, admin actions, timeout behavior, audit logs, and metrics for approval rate, false declines, reason mix, and latency.\n\nA strong answer connects payment network timing with product clarity and fraud safety.",
  "sourceLinks": [
    {
      "label": "Stripe Issuing authorizations",
      "url": "https://docs.stripe.com/issuing/purchases/authorizations?issuing-authorization-type=incremental_authorization"
    },
    {
      "label": "Stripe Issuing spending controls",
      "url": "https://docs.stripe.com/issuing/controls/spending-controls?locale=en-GB"
    }
  ],
  "beginnerExplanation": "Card authorization is the moment a card transaction is approved or declined.\n\nThe beginner mistake is thinking a decline is just \"not enough money.\" Card transactions can be declined because the card is inactive, the balance is insufficient, spending controls block the merchant, the country is restricted, the amount is too high, the transaction looks risky, or the real-time authorization system does not respond in time.\n\nThe mental model:\n\n```txt\nAuthorization request:\nA merchant asks, \"Can this card spend this amount here?\"\n\nDecision:\nApprove, decline, or apply a control.\n\nUser experience:\nThe cardholder needs a clear enough reason and a path to fix it if possible.\n```\n\nFor a TPM, the hard part is turning a technical decision into a reliable product experience.",
  "example": "Imagine a company card can only be used for travel. A cardholder tries to buy electronics.\n\nThe system may decline because the merchant category is blocked.\n\nA bad app experience says:\n\n```txt\nTransaction declined.\n```\n\nA better experience says:\n\n```txt\nDeclined because this card is limited to travel purchases.\nAsk your admin to update the card controls if this purchase is required.\n```\n\nThat message reduces support confusion without exposing sensitive fraud systems.",
  "commonMistakes": "A common mistake is showing the same message for every decline. That drives support tickets and user frustration.\n\nAnother mistake is exposing fraud logic too directly. \"Declined because your IP looks suspicious\" may help attackers learn the system.\n\nA third mistake is ignoring timeout behavior. Real-time authorization systems need a defined fallback because card networks expect fast decisions."
};
