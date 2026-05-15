---
id: tpm-regulatory-reporting-dashboard
track: TPM
category: Security & Compliance
level: Advanced
question: How would you design a regulatory reporting dashboard?
sources:
  - label: FFIEC: BSA/AML Risk Assessment
    url: https://bsaaml.ffiec.gov/manual/BSAAMLRiskAssessment/01
  - label: CFPB: Consumer Complaint Program
    url: https://www.consumerfinance.gov/compliance/consumer-complaint-program/
---

## Learn it

A regulatory reporting dashboard helps compliance, risk, legal, and operations understand whether the product is meeting reporting and monitoring obligations.

The beginner mistake is building an executive vanity dashboard. A useful regulatory dashboard answers operational questions: what needs to be reported, what is late, what is incomplete, what changed, and who owns the next action.

The mental model:

```txt
Metric:
What is happening?

Exception:
What needs attention?

Evidence:
Can we prove what happened later?
```

The TPM should design the dashboard around decisions and deadlines, not decoration.

## Walkthrough

Imagine a fintech tracks suspicious activity cases, complaints, unauthorized transfer claims, and delayed remittance payouts.

Each area has different owners and timelines. The dashboard should show:

```txt
Open cases by age
Items near deadline
Incomplete evidence
Owner by queue
Trend by product
Severe customer harm
```

This lets teams act before a deadline or risk becomes a surprise.

## Make it practical

Here is a reporting dashboard artifact:

```txt
Dashboard users:
Compliance, risk ops, legal, product, support leadership

Core views:
- Open regulatory workflows
- Deadline risk
- Missing evidence
- Severe customer harm
- Product area trends
- Owner and status

Example metrics:
- Suspicious activity cases open by age
- Complaints by severity
- Unauthorized transfer claims by status
- Remittance errors by corridor
- Late evidence requests
- Reopened cases

Controls:
- Role-based access
- Exportable evidence
- Definitions documented
- Data freshness visible
- Drill-down to source record
```

The dashboard should never require a second spreadsheet to explain what the numbers mean.

## Common mistakes

A common mistake is showing totals without aging. A pile of open cases is less useful than knowing what is near deadline.

Another mistake is mixing definitions. If "open complaint" means different things across teams, the dashboard will create arguments.

A third mistake is ignoring access control. Regulatory dashboards may contain sensitive customer and investigation information.

## Check yourself

- What makes a regulatory dashboard different from a normal KPI dashboard?
- Why do deadline and aging views matter?
- What should be drillable to source records?
- Why do metric definitions need owners?
- What information should be restricted?

## Interview version

I would design the dashboard around open workflows, deadline risk, missing evidence, severity, ownership, trends, definitions, data freshness, role-based access, and drill-down to source records. The goal is to help teams act and prove what happened, not just observe totals.

A strong answer treats reporting as operational control plus evidence.
