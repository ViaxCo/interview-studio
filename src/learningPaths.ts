export const allLearningPaths = "all";

export const learningPaths = [
  {
    id: "tpm-crash",
    title: "TPM crash path",
    description: "Core TPM judgment: strategy, requirements, metrics, delivery, stakeholders, launch, and incidents.",
    questionIds: [
      "tpm-technical-product-strategy",
      "tpm-prioritization",
      "tpm-prd",
      "tpm-user-stories",
      "tpm-success-metrics",
      "tpm-stakeholder-alignment",
      "tpm-release-readiness",
      "tpm-incident-management",
      "tpm-dependency-risk",
      "tpm-technical-tradeoffs"
    ]
  },
  {
    id: "api-platform-tpm",
    title: "API and platform TPM",
    description: "Developer products, partner APIs, vendors, versioning, migrations, outages, and platform strategy.",
    questionIds: [
      "tpm-api-product-design",
      "tpm-api-integration",
      "tpm-api-versioning",
      "tpm-platform-product-sense",
      "tpm-build-versus-buy",
      "tpm-vendor-evaluation",
      "tpm-partner-outage-fallback",
      "tpm-migration-planning",
      "tpm-technical-debt"
    ]
  },
  {
    id: "fintech-risk-tpm",
    title: "Fintech and risk TPM",
    description: "Money movement, onboarding, fraud, compliance, activation, launch controls, and incident recovery.",
    questionIds: [
      "tpm-payments-remittance-requirements",
      "tpm-compliance-ux",
      "tpm-fraud-compliance-tradeoffs",
      "tpm-onboarding-activation-metrics",
      "tpm-release-readiness",
      "tpm-incident-management",
      "tpm-partner-outage-fallback",
      "tpm-success-metrics"
    ]
  },
  {
    id: "frontend-foundations",
    title: "Frontend foundations",
    description: "JavaScript, React, browser behavior, state, data fetching, CSS, and security basics.",
    questionIds: [
      "fe-closures",
      "fe-event-loop",
      "fe-promises-async-await",
      "fe-debounce-throttle",
      "fe-event-propagation-delegation",
      "fe-controlled-components",
      "fe-props-state",
      "fe-react-keys",
      "fe-use-effect",
      "fe-data-fetching-cache-invalidation"
    ]
  }
] as const;
