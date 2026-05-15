import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-regulatory-reporting-dashboard",
  "track": "TPM",
  "category": "Security & Compliance",
  "level": "Advanced",
  "question": "How would you design a regulatory reporting dashboard?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A regulatory reporting dashboard helps compliance, risk, legal, and operations understand whether the product is meeting reporting and monitoring obligations.\n\nThe beginner mistake is building an executive vanity dashboard. A useful regulatory dashboard answers operational questions: what needs to be reported, what is late, what is incomplete, what changed, and who owns the next action.\n\nThe mental model:\n\n```txt\nMetric:\nWhat is happening?\n\nException:\nWhat needs attention?\n\nEvidence:\nCan we prove what happened later?\n```\n\nThe TPM should design the dashboard around decisions and deadlines, not decoration."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a fintech tracks suspicious activity cases, complaints, unauthorized transfer claims, and delayed remittance payouts.\n\nEach area has different owners and timelines. The dashboard should show:\n\n```txt\nOpen cases by age\nItems near deadline\nIncomplete evidence\nOwner by queue\nTrend by product\nSevere customer harm\n```\n\nThis lets teams act before a deadline or risk becomes a surprise."
    },
    {
      "title": "Make it practical",
      "body": "Here is a reporting dashboard artifact:\n\n```txt\nDashboard users:\nCompliance, risk ops, legal, product, support leadership\n\nCore views:\n- Open regulatory workflows\n- Deadline risk\n- Missing evidence\n- Severe customer harm\n- Product area trends\n- Owner and status\n\nExample metrics:\n- Suspicious activity cases open by age\n- Complaints by severity\n- Unauthorized transfer claims by status\n- Remittance errors by corridor\n- Late evidence requests\n- Reopened cases\n\nControls:\n- Role-based access\n- Exportable evidence\n- Definitions documented\n- Data freshness visible\n- Drill-down to source record\n```\n\nThe dashboard should never require a second spreadsheet to explain what the numbers mean."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is showing totals without aging. A pile of open cases is less useful than knowing what is near deadline.\n\nAnother mistake is mixing definitions. If \"open complaint\" means different things across teams, the dashboard will create arguments.\n\nA third mistake is ignoring access control. Regulatory dashboards may contain sensitive customer and investigation information."
    }
  ],
  "answer": "A regulatory reporting dashboard helps compliance, risk, legal, and operations understand whether the product is meeting reporting and monitoring obligations.",
  "reasoning": "Here is a reporting dashboard artifact:\n\n```txt\nDashboard users:\nCompliance, risk ops, legal, product, support leadership\n\nCore views:\n- Open regulatory workflows\n- Deadline risk\n- Missing evidence\n- Severe customer harm\n- Product area trends\n- Owner and status\n\nExample metrics:\n- Suspicious activity cases open by age\n- Complaints by severity\n- Unauthorized transfer claims by status\n- Remittance errors by corridor\n- Late evidence requests\n- Reopened cases\n\nControls:\n- Role-based access\n- Exportable evidence\n- Definitions documented\n- Data freshness visible\n- Drill-down to source record\n```\n\nThe dashboard should never require a second spreadsheet to explain what the numbers mean.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What makes a regulatory dashboard different from a normal KPI dashboard?",
    "Why do deadline and aging views matter?",
    "What should be drillable to source records?",
    "Why do metric definitions need owners?",
    "What information should be restricted?"
  ],
  "interviewAnswer": "I would design the dashboard around open workflows, deadline risk, missing evidence, severity, ownership, trends, definitions, data freshness, role-based access, and drill-down to source records. The goal is to help teams act and prove what happened, not just observe totals.\n\nA strong answer treats reporting as operational control plus evidence.",
  "sourceLinks": [
    {
      "label": "FFIEC: BSA/AML Risk Assessment",
      "url": "https://bsaaml.ffiec.gov/manual/BSAAMLRiskAssessment/01"
    },
    {
      "label": "CFPB: Consumer Complaint Program",
      "url": "https://www.consumerfinance.gov/compliance/consumer-complaint-program/"
    }
  ],
  "beginnerExplanation": "A regulatory reporting dashboard helps compliance, risk, legal, and operations understand whether the product is meeting reporting and monitoring obligations.\n\nThe beginner mistake is building an executive vanity dashboard. A useful regulatory dashboard answers operational questions: what needs to be reported, what is late, what is incomplete, what changed, and who owns the next action.\n\nThe mental model:\n\n```txt\nMetric:\nWhat is happening?\n\nException:\nWhat needs attention?\n\nEvidence:\nCan we prove what happened later?\n```\n\nThe TPM should design the dashboard around decisions and deadlines, not decoration.",
  "example": "Imagine a fintech tracks suspicious activity cases, complaints, unauthorized transfer claims, and delayed remittance payouts.\n\nEach area has different owners and timelines. The dashboard should show:\n\n```txt\nOpen cases by age\nItems near deadline\nIncomplete evidence\nOwner by queue\nTrend by product\nSevere customer harm\n```\n\nThis lets teams act before a deadline or risk becomes a surprise.",
  "commonMistakes": "A common mistake is showing totals without aging. A pile of open cases is less useful than knowing what is near deadline.\n\nAnother mistake is mixing definitions. If \"open complaint\" means different things across teams, the dashboard will create arguments.\n\nA third mistake is ignoring access control. Regulatory dashboards may contain sensitive customer and investigation information."
};
