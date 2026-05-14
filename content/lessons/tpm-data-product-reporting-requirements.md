---
id: tpm-data-product-reporting-requirements
track: TPM
category: Data & Reporting
level: Intermediate
question: How would you define requirements for a reporting or data product?
sources:
  - label: Atlassian: Product analytics
    url: https://www.atlassian.com/agile/product-management/product-analytics
  - label: Atlassian: Product management KPIs
    url: https://www.atlassian.com/agile/product-management/product-management-kpis
---

## Learn it

A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.

The beginner mistake is asking stakeholders, "What charts do you want?" That usually creates dashboards full of numbers nobody trusts or uses.

A stronger TPM starts with the decision the report should support:

```txt
Bad starting point:
What dashboard do you want?

Better starting point:
What decision will someone make with this data?
```

Data products need product requirements and data requirements. The product side defines users, decisions, workflow, permissions, and usability. The data side defines metrics, sources, freshness, definitions, quality, lineage, and trust.

## Walkthrough

Imagine operations wants a payout health dashboard.

A weak requirement says:

```txt
Show payout success rate, failures, and volume.
```

That is not enough. The team still does not know who uses it, how fresh the data must be, what counts as success, or what action someone takes when the metric changes.

A better requirement says:

```txt
User:
Operations lead monitoring daily payout health.

Decision:
Should we pause a corridor, escalate to a partner, or alert support?

Core questions:
- Are payouts succeeding?
- Which corridor is unhealthy?
- Is the issue new or ongoing?
- Which partner or payout method is involved?
- How many users and how much money are affected?
- What should operations do next?
```

Now the dashboard has a job.

## Make it practical

Here is a data product requirements artifact:

```txt
Dashboard:
Payout health monitor

Users:
Operations lead, support manager, TPM, payments engineering

Primary decisions:
- Pause a corridor
- Escalate to partner
- Prepare support messaging
- Investigate reconciliation exceptions

Metrics:
- Payout success rate
- Failure rate by corridor
- Pending payouts older than SLA
- Total affected users
- Total affected amount
- Partner error code distribution

Definitions:
Success = payout reached final paid state.
Failure = payout reached final failed or reversed state.
Pending breach = payout pending longer than corridor SLA.

Dimensions:
Corridor, partner, payout method, customer segment, status, time window.

Freshness:
Operational view updates every five minutes.
Executive summary updates daily.

Permissions:
Support can see status and safe reason.
Finance can export reconciliation.
Only admins can see full sensitive details.

Trust requirements:
- Show last updated time.
- Show data source.
- Show known exclusions.
- Alert when data pipeline is delayed.
```

The TPM should also define non-goals. A dashboard that tries to answer every question becomes unusable.

## Common mistakes

A common mistake is building charts before agreeing on metric definitions. If teams disagree on what "active user" or "successful payout" means, the dashboard will create arguments instead of decisions.

Another mistake is ignoring freshness. A real-time operations dashboard and a monthly finance report have different needs.

A third mistake is forgetting permissions. Reports often expose sensitive user, financial, or operational data.

## Check yourself

- Why should reporting requirements start with decisions?
- What is a metric definition?
- Why does freshness matter?
- What does data lineage help users trust?
- Why are permissions important for reporting products?

## Interview version

I would define reporting requirements by identifying the users, decisions, key questions, metric definitions, data sources, freshness needs, dimensions, permissions, data quality expectations, and actions the report should support.

A strong TPM answer shows that dashboards are not decoration. They are decision tools, and people must understand and trust the data.
