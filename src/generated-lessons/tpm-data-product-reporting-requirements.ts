import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-data-product-reporting-requirements",
  "track": "TPM",
  "category": "Data & Reporting",
  "level": "Intermediate",
  "question": "How would you define requirements for a reporting or data product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.\n\nThe beginner mistake is asking stakeholders, \"What charts do you want?\" That usually creates dashboards full of numbers nobody trusts or uses.\n\nA stronger TPM starts with the decision the report should support:\n\n```txt\nBad starting point:\nWhat dashboard do you want?\n\nBetter starting point:\nWhat decision will someone make with this data?\n```\n\nData products need product requirements and data requirements. The product side defines users, decisions, workflow, permissions, and usability. The data side defines metrics, sources, freshness, definitions, quality, lineage, and trust."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine operations wants a payout health dashboard.\n\nA weak requirement says:\n\n```txt\nShow payout success rate, failures, and volume.\n```\n\nThat is not enough. The team still does not know who uses it, how fresh the data must be, what counts as success, or what action someone takes when the metric changes.\n\nA better requirement says:\n\n```txt\nUser:\nOperations lead monitoring daily payout health.\n\nDecision:\nShould we pause a corridor, escalate to a partner, or alert support?\n\nCore questions:\n- Are payouts succeeding?\n- Which corridor is unhealthy?\n- Is the issue new or ongoing?\n- Which partner or payout method is involved?\n- How many users and how much money are affected?\n- What should operations do next?\n```\n\nNow the dashboard has a job."
    },
    {
      "title": "Make it practical",
      "body": "Here is a data product requirements artifact:\n\n```txt\nDashboard:\nPayout health monitor\n\nUsers:\nOperations lead, support manager, TPM, payments engineering\n\nPrimary decisions:\n- Pause a corridor\n- Escalate to partner\n- Prepare support messaging\n- Investigate reconciliation exceptions\n\nMetrics:\n- Payout success rate\n- Failure rate by corridor\n- Pending payouts older than SLA\n- Total affected users\n- Total affected amount\n- Partner error code distribution\n\nDefinitions:\nSuccess = payout reached final paid state.\nFailure = payout reached final failed or reversed state.\nPending breach = payout pending longer than corridor SLA.\n\nDimensions:\nCorridor, partner, payout method, customer segment, status, time window.\n\nFreshness:\nOperational view updates every five minutes.\nExecutive summary updates daily.\n\nPermissions:\nSupport can see status and safe reason.\nFinance can export reconciliation.\nOnly admins can see full sensitive details.\n\nTrust requirements:\n- Show last updated time.\n- Show data source.\n- Show known exclusions.\n- Alert when data pipeline is delayed.\n```\n\nThe TPM should also define non-goals. A dashboard that tries to answer every question becomes unusable."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is building charts before agreeing on metric definitions. If teams disagree on what \"active user\" or \"successful payout\" means, the dashboard will create arguments instead of decisions.\n\nAnother mistake is ignoring freshness. A real-time operations dashboard and a monthly finance report have different needs.\n\nA third mistake is forgetting permissions. Reports often expose sensitive user, financial, or operational data."
    }
  ],
  "answer": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.",
  "reasoning": "Here is a data product requirements artifact:\n\n```txt\nDashboard:\nPayout health monitor\n\nUsers:\nOperations lead, support manager, TPM, payments engineering\n\nPrimary decisions:\n- Pause a corridor\n- Escalate to partner\n- Prepare support messaging\n- Investigate reconciliation exceptions\n\nMetrics:\n- Payout success rate\n- Failure rate by corridor\n- Pending payouts older than SLA\n- Total affected users\n- Total affected amount\n- Partner error code distribution\n\nDefinitions:\nSuccess = payout reached final paid state.\nFailure = payout reached final failed or reversed state.\nPending breach = payout pending longer than corridor SLA.\n\nDimensions:\nCorridor, partner, payout method, customer segment, status, time window.\n\nFreshness:\nOperational view updates every five minutes.\nExecutive summary updates daily.\n\nPermissions:\nSupport can see status and safe reason.\nFinance can export reconciliation.\nOnly admins can see full sensitive details.\n\nTrust requirements:\n- Show last updated time.\n- Show data source.\n- Show known exclusions.\n- Alert when data pipeline is delayed.\n```\n\nThe TPM should also define non-goals. A dashboard that tries to answer every question becomes unusable.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why should reporting requirements start with decisions?",
    "What is a metric definition?",
    "Why does freshness matter?",
    "What does data lineage help users trust?",
    "Why are permissions important for reporting products?"
  ],
  "interviewAnswer": "I would define reporting requirements by identifying the users, decisions, key questions, metric definitions, data sources, freshness needs, dimensions, permissions, data quality expectations, and actions the report should support.\n\nA strong TPM answer shows that dashboards are not decoration. They are decision tools, and people must understand and trust the data.",
  "sourceLinks": [
    {
      "label": "Atlassian: Product analytics",
      "url": "https://www.atlassian.com/agile/product-management/product-analytics"
    },
    {
      "label": "Atlassian: Product management KPIs",
      "url": "https://www.atlassian.com/agile/product-management/product-management-kpis"
    }
  ],
  "beginnerExplanation": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.\n\nThe beginner mistake is asking stakeholders, \"What charts do you want?\" That usually creates dashboards full of numbers nobody trusts or uses.\n\nA stronger TPM starts with the decision the report should support:\n\n```txt\nBad starting point:\nWhat dashboard do you want?\n\nBetter starting point:\nWhat decision will someone make with this data?\n```\n\nData products need product requirements and data requirements. The product side defines users, decisions, workflow, permissions, and usability. The data side defines metrics, sources, freshness, definitions, quality, lineage, and trust.",
  "example": "Imagine operations wants a payout health dashboard.\n\nA weak requirement says:\n\n```txt\nShow payout success rate, failures, and volume.\n```\n\nThat is not enough. The team still does not know who uses it, how fresh the data must be, what counts as success, or what action someone takes when the metric changes.\n\nA better requirement says:\n\n```txt\nUser:\nOperations lead monitoring daily payout health.\n\nDecision:\nShould we pause a corridor, escalate to a partner, or alert support?\n\nCore questions:\n- Are payouts succeeding?\n- Which corridor is unhealthy?\n- Is the issue new or ongoing?\n- Which partner or payout method is involved?\n- How many users and how much money are affected?\n- What should operations do next?\n```\n\nNow the dashboard has a job.",
  "commonMistakes": "A common mistake is building charts before agreeing on metric definitions. If teams disagree on what \"active user\" or \"successful payout\" means, the dashboard will create arguments instead of decisions.\n\nAnother mistake is ignoring freshness. A real-time operations dashboard and a monthly finance report have different needs.\n\nA third mistake is forgetting permissions. Reports often expose sensitive user, financial, or operational data."
};
