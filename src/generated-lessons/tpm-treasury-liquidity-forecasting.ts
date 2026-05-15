import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-treasury-liquidity-forecasting",
  "track": "TPM",
  "category": "Payments & Remittance",
  "level": "Advanced",
  "question": "How would you design treasury liquidity forecasting for a fintech product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Liquidity forecasting means estimating how much money the company needs available to meet obligations at the right time.\n\nThe beginner mistake is thinking the ledger balance is enough. A fintech may have pending card settlements, ACH returns, remittance payouts, refunds, chargebacks, partner reserves, prefunded accounts, and timing cutoffs. The company can look solvent in one view and still fail to fund a payout on time.\n\nThe mental model:\n\n```txt\nBook balance:\nWhat records say.\n\nAvailable liquidity:\nWhat can actually be used now.\n\nForecast:\nWhat cash will be needed soon under normal and stressed conditions.\n```\n\nThe TPM's job is to turn treasury needs into product data, dashboards, alerts, and workflows."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a remittance product pays recipients before all sender funds have fully settled.\n\nOn a quiet day, this improves speed. On a risky day, more sender debits return, more refunds arrive, and a payout partner requires prefunding.\n\nThe treasury team needs to know:\n\n```txt\nExpected payout volume today\nExpected incoming settlement\nPending returns\nPartner prefunding requirement\nMinimum operating buffer\nStress scenario if volume spikes or returns rise\n```\n\nThat is a forecasting product, not just a finance spreadsheet."
    },
    {
      "title": "Make it practical",
      "body": "Here is a liquidity forecast artifact:\n\n```txt\nForecast horizon:\nSame day, 7 days, 30 days\n\nInputs:\n- Current bank balances\n- Pending incoming settlements\n- Pending outgoing payouts\n- Refunds and chargebacks\n- ACH return expectations\n- Partner prefunding balances\n- Reserve requirements\n- Forecasted transaction volume\n- Cutoff times and holidays\n\nOutputs:\n- Available liquidity\n- Required liquidity\n- Buffer above requirement\n- Shortfall alert\n- Partner account funding plan\n- Stress scenario view\n\nAlerts:\n- Buffer below threshold\n- Payout volume spike\n- Settlement delay\n- Return rate spike\n- Partner balance below minimum\n```\n\nThe forecast should drive action before customers are affected."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using only historical averages. Liquidity problems often happen during spikes, delays, or unusual return patterns.\n\nAnother mistake is ignoring cutoffs and holidays. Money that arrives tomorrow may not help a payout due today.\n\nA third mistake is not tying forecasts to owners. Alerts without an owner become dashboard decoration."
    }
  ],
  "answer": "Liquidity forecasting means estimating how much money the company needs available to meet obligations at the right time.",
  "reasoning": "Here is a liquidity forecast artifact:\n\n```txt\nForecast horizon:\nSame day, 7 days, 30 days\n\nInputs:\n- Current bank balances\n- Pending incoming settlements\n- Pending outgoing payouts\n- Refunds and chargebacks\n- ACH return expectations\n- Partner prefunding balances\n- Reserve requirements\n- Forecasted transaction volume\n- Cutoff times and holidays\n\nOutputs:\n- Available liquidity\n- Required liquidity\n- Buffer above requirement\n- Shortfall alert\n- Partner account funding plan\n- Stress scenario view\n\nAlerts:\n- Buffer below threshold\n- Payout volume spike\n- Settlement delay\n- Return rate spike\n- Partner balance below minimum\n```\n\nThe forecast should drive action before customers are affected.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is ledger balance different from available liquidity?",
    "What payment flows affect liquidity?",
    "Why do cutoff times matter?",
    "What stress scenarios should the forecast include?",
    "Who should own liquidity alerts?"
  ],
  "interviewAnswer": "I would design liquidity forecasting with current balances, pending settlements, outgoing obligations, reserves, refunds, returns, partner prefunding, volume forecasts, cutoffs, and stress scenarios. The product should show required versus available liquidity, buffer, shortfall alerts, and owner actions.\n\nA strong answer connects money movement timing to customer reliability.",
  "sourceLinks": [
    {
      "label": "Federal Reserve: Liquidity risk management",
      "url": "https://www.federalreserve.gov/supervisionreg/topics/liquidity_risk.htm"
    },
    {
      "label": "U.S. Treasury: Cash forecasting",
      "url": "https://tfx.treasury.gov/operational-accounting/cash-forecasting"
    }
  ],
  "beginnerExplanation": "Liquidity forecasting means estimating how much money the company needs available to meet obligations at the right time.\n\nThe beginner mistake is thinking the ledger balance is enough. A fintech may have pending card settlements, ACH returns, remittance payouts, refunds, chargebacks, partner reserves, prefunded accounts, and timing cutoffs. The company can look solvent in one view and still fail to fund a payout on time.\n\nThe mental model:\n\n```txt\nBook balance:\nWhat records say.\n\nAvailable liquidity:\nWhat can actually be used now.\n\nForecast:\nWhat cash will be needed soon under normal and stressed conditions.\n```\n\nThe TPM's job is to turn treasury needs into product data, dashboards, alerts, and workflows.",
  "example": "Imagine a remittance product pays recipients before all sender funds have fully settled.\n\nOn a quiet day, this improves speed. On a risky day, more sender debits return, more refunds arrive, and a payout partner requires prefunding.\n\nThe treasury team needs to know:\n\n```txt\nExpected payout volume today\nExpected incoming settlement\nPending returns\nPartner prefunding requirement\nMinimum operating buffer\nStress scenario if volume spikes or returns rise\n```\n\nThat is a forecasting product, not just a finance spreadsheet.",
  "commonMistakes": "A common mistake is using only historical averages. Liquidity problems often happen during spikes, delays, or unusual return patterns.\n\nAnother mistake is ignoring cutoffs and holidays. Money that arrives tomorrow may not help a payout due today.\n\nA third mistake is not tying forecasts to owners. Alerts without an owner become dashboard decoration."
};
