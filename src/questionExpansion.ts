import type { Question } from "./questionTypes";

export type TopicSpec = [string, string, string, string, string, string, string?];
type TopicContext = {
  track: string;
  role: string;
  behaviorScope: string;
  category: string;
  level: string;
  concept: string;
  practice: string;
  trap: string;
  example: string;
};
type QuestionAngle = {
  kind: "concept" | "application" | "trap" | "verification";
  question: (context: TopicContext) => string;
  answer: (context: TopicContext) => string;
  reasoning: (context: TopicContext) => string;
  tests: (context: TopicContext) => string;
  followUps: (context: TopicContext) => string[];
};

const frontendTrack = "Frontend";
const tpmTrack = "TPM";

function contextForTrack(track: string) {
  if (track === tpmTrack) {
    return {
      role: "technical product manager",
      behaviorScope: "product, delivery, compliance, integration, and business behavior"
    };
  }

  return {
    role: "frontend engineer",
    behaviorScope: "real frontend behavior"
  };
}

export const topicSpecs: TopicSpec[] = [
  ["JavaScript", "Foundational", "the prototype chain", "object behavior is resolved through linked prototypes before reaching built-in defaults", "assuming every property lives directly on the object", "shared model objects and component helpers"],
  ["JavaScript", "Intermediate", "`this` binding", "the call site decides the receiver unless a function is bound or lexical", "passing methods as callbacks and losing the expected receiver", "event handlers and class-style utilities"],
  ["JavaScript", "Intermediate", "iterators", "a value can expose a standard way to produce items one at a time", "building eager arrays when the UI only needs a small slice", "streaming search results and custom collections"],
  ["JavaScript", "Advanced", "generators", "execution can pause and resume while yielding values to a caller", "using them when a simpler iterator or async function is clearer", "step-by-step flows and lazy sequences"],
  ["JavaScript", "Intermediate", "`AbortController`", "async work should be connected to the user intent that created it", "letting stale requests update state after navigation or filter changes", "search boxes and route transitions"],
  ["JavaScript", "Foundational", "the `Intl` APIs", "formatting dates, numbers, lists, and relative time should follow user locale rules", "hard-coding display formats that break outside one region", "global dashboards and billing UI"],
  ["JavaScript", "Intermediate", "`structuredClone`", "some values can be copied deeply by the platform without JSON serialization", "using JSON copy and silently losing dates, maps, undefined values, or special objects", "draft state and worker messages"],
  ["JavaScript", "Foundational", "optional chaining and nullish coalescing", "absence should be handled deliberately without confusing it with valid falsy values", "treating `0`, empty strings, or false as missing data", "API response rendering and form defaults"],
  ["React", "Advanced", "state machines", "complex UI is safer when valid states and transitions are explicit", "tracking many booleans that can contradict each other", "checkout flows and upload widgets"],
  ["React", "Intermediate", "React reconciliation", "React compares element identity to decide what can be reused", "changing keys or structure in ways that reset state unexpectedly", "sortable lists and dynamic forms"],
  ["React", "Advanced", "server components", "some rendering work can happen on the server while interactive islands stay on the client", "mixing server-only data access with client-only hooks", "content-heavy product pages"],
  ["React", "Intermediate", "transition updates", "urgent input updates can be separated from slower visual updates", "making typing feel blocked by expensive filtering or rendering", "large searchable lists"],
  ["React", "Intermediate", "custom hook boundaries", "shared behavior should expose a clear contract without hiding ownership", "putting unrelated state, effects, and product rules into one hook", "data fetching and form workflows"],
  ["React", "Advanced", "controlled async forms", "form UI must represent user edits, server validation, pending submission, and recovery", "disabling or clearing fields before the user can recover", "account settings and checkout forms"],
  ["React", "Intermediate", "compound components", "related components can share context while keeping call sites readable", "creating hidden coupling that makes composition hard to understand", "tabs, menus, and field groups"],
  ["React", "Intermediate", "render props", "behavior can be shared by passing a function that renders UI", "using the pattern when a hook or component composition is simpler", "headless UI primitives"],
  ["React", "Advanced", "portal behavior", "visual placement can differ from React ownership and event propagation", "assuming a portal breaks all parent relationships", "modals, popovers, and toasts"],
  ["CSS", "Intermediate", "cascade layers", "style priority can be organized by layer before specificity becomes a fight", "fixing every conflict with higher specificity or `!important`", "design systems and app overrides"],
  ["CSS", "Advanced", "subgrid", "nested content can align to a parent grid instead of inventing duplicate tracks", "recreating alignment with fragile magic numbers", "cards, forms, and dashboard rows"],
  ["CSS", "Foundational", "logical properties", "spacing and layout can follow writing mode instead of hard-coded left and right", "shipping layouts that fail in right-to-left or vertical writing modes", "internationalized navigation and forms"],
  ["CSS", "Intermediate", "container-driven layout", "components should adapt to available container space, not only viewport size", "using viewport breakpoints for components that appear in many contexts", "sidebars, cards, and responsive dashboards"],
  ["CSS", "Advanced", "anchor positioning", "floating UI can be placed relative to an anchor without manual coordinate math", "building brittle popover positioning with hard-coded offsets", "menus, tooltips, and contextual controls"],
  ["CSS", "Intermediate", "scroll snapping", "scroll position can settle to meaningful points when the content structure calls for it", "making normal reading or keyboard navigation feel trapped", "carousels and paged mobile panels"],
  ["CSS", "Foundational", "reduced motion styles", "motion should respect users who request less animation", "only disabling obvious animations while leaving transform-heavy transitions intact", "drawers, reveals, and page transitions"],
  ["Browser", "Intermediate", "the rendering pipeline", "style, layout, paint, and composite have different costs", "animating layout-driving properties during interaction", "dragging, scrolling, and expanding panels"],
  ["Browser", "Advanced", "browser storage quotas", "client storage is limited, origin-scoped, and may be evicted", "treating local data as permanent source of truth", "offline drafts and cached media"],
  ["Browser", "Advanced", "navigation preload", "a service worker can start a network request while it boots", "adding a service worker that slows navigation during startup", "offline-capable apps"],
  ["Browser", "Intermediate", "the page lifecycle", "pages can be hidden, frozen, restored, or discarded by the browser", "assuming unload always runs or that timers keep behaving in background tabs", "autosave and realtime dashboards"],
  ["Browser", "Foundational", "`URLSearchParams`", "shareable UI state can live in the URL with predictable parsing", "keeping filters only in memory and breaking refresh or sharing", "search and dashboard filters"],
  ["Browser", "Advanced", "cross-origin isolation", "some powerful browser features require stricter document isolation", "turning on headers without understanding third-party embed impact", "high-resolution timers and shared memory"],
  ["Accessibility", "Foundational", "accessible name computation", "assistive technology needs a reliable name for every control", "using icon-only controls without labels or relying on placeholder text", "toolbars and action buttons"],
  ["Accessibility", "Intermediate", "roving tabindex", "composite widgets often keep one tab stop and move focus internally with arrow keys", "putting every item in the tab order and making navigation exhausting", "menus, tabs, and grids"],
  ["Accessibility", "Intermediate", "live regions", "dynamic updates should be announced only when they matter", "announcing too much and interrupting the user's current task", "save states and async validation"],
  ["Accessibility", "Foundational", "skip links", "keyboard users need a fast path past repeated navigation", "hiding the link so thoroughly that focus users cannot find it", "app shells and documentation sites"],
  ["Accessibility", "Intermediate", "reduced motion preferences", "the interface should preserve state feedback without forcing motion", "removing all feedback instead of replacing motion with quieter state changes", "drawers, drills, and answer reveals"],
  ["Accessibility", "Foundational", "contrast across states", "text and controls must remain readable in default, hover, selected, disabled, and error states", "checking only the default state and missing selected or dark mode contrast", "filters, tags, and buttons"],
  ["Accessibility", "Intermediate", "screen reader form errors", "users need to know which field failed and how to fix it", "showing visual error text that is not connected to the input", "signup and settings forms"],
  ["Accessibility", "Advanced", "accessible data tables", "headers, captions, sorting, and row context help users understand dense data", "turning tabular data into divs without equivalent semantics", "admin grids and reports"],
  ["Performance", "Intermediate", "long tasks", "main-thread work above a frame budget delays input and rendering", "optimizing network while ignoring expensive JavaScript execution", "search, filtering, and chart interactions"],
  ["Performance", "Advanced", "virtualization", "only visible rows need to exist in the DOM when a list is very large", "virtualizing small lists or breaking focus and screen reader expectations", "queues, logs, and large tables"],
  ["Performance", "Intermediate", "image priority", "critical images should load early while noncritical media waits", "lazy loading the image that defines the first useful view", "product detail pages and dashboards"],
  ["Performance", "Intermediate", "preload and prefetch", "resource hints can move important work earlier or likely work into idle time", "preloading too much and stealing bandwidth from the current view", "route transitions and critical fonts"],
  ["Performance", "Advanced", "main-thread scheduling", "large work can be split, deferred, or moved so interaction stays responsive", "doing all computation in one event handler", "bulk filtering and markdown rendering"],
  ["Performance", "Intermediate", "memoization measurement", "cached calculations should solve a real repeated cost", "adding memoization everywhere and making dependencies harder to trust", "derived data and expensive child renders"],
  ["Performance", "Intermediate", "`content-visibility`", "the browser can skip rendering work for offscreen content", "using it where skipped intrinsic size causes layout surprises", "long articles and settings pages"],
  ["Performance", "Advanced", "bundle budgets", "teams need limits that keep JavaScript growth visible", "only noticing dependency bloat after users feel the slowdown", "release review and dependency upgrades"],
  ["Testing", "Intermediate", "contract tests", "the frontend and backend should agree on response shapes that matter to the UI", "mocking data that no longer matches production", "API-driven pages"],
  ["Testing", "Intermediate", "visual regression tests", "screenshots can catch layout and style changes humans miss in review", "treating every pixel change as a product bug", "design-system components"],
  ["Testing", "Intermediate", "accessibility tests", "automated checks catch common semantic and contrast failures", "believing automation replaces keyboard and screen reader testing", "forms and interactive widgets"],
  ["Testing", "Foundational", "test data builders", "tests should create readable data for the exact behavior under review", "copying giant fixtures that hide the important setup", "component and integration tests"],
  ["Testing", "Intermediate", "Mock Service Worker", "tests can mock network behavior at the request boundary", "mocking hooks instead of proving the component handles real request states", "data fetching components"],
  ["Testing", "Intermediate", "component interaction tests", "tests should drive clicks, typing, focus, and async states the way users do", "asserting implementation details instead of visible outcomes", "forms, menus, and filters"],
  ["Testing", "Advanced", "performance regression tests", "critical interactions need timing budgets that fail before users complain", "measuring only bundle size while interaction cost grows", "large lists and dashboards"],
  ["Testing", "Advanced", "mutation testing", "tests can be checked by changing code and seeing whether failures appear", "assuming line coverage means behavior is protected", "shared utilities and reducers"],
  ["System Design", "Advanced", "designing data tables", "dense data needs sorting, filtering, selection, loading, empty, and accessibility states", "building a table as static rows with no state model", "admin and analytics tools"],
  ["System Design", "Advanced", "global command menus", "power users need fast command discovery and keyboard execution", "building search without permissions, ranking, focus, or escape behavior", "large productivity apps"],
  ["System Design", "Intermediate", "multi-step forms", "progressive flows need validation, persistence, backtracking, and recovery", "losing work when the user navigates back or refreshes", "onboarding and checkout"],
  ["System Design", "Intermediate", "dashboard filters", "filters define the current data contract and should be shareable", "letting filters, URL state, and cache keys drift apart", "reporting dashboards"],
  ["System Design", "Intermediate", "notification centers", "messages need priority, grouping, read state, and accessible updates", "treating every event as a toast", "collaboration products"],
  ["System Design", "Advanced", "feature flag consoles", "flags need ownership, targeting, audit history, and cleanup", "creating permanent branches no one removes", "release management tools"],
  ["System Design", "Intermediate", "settings architecture", "settings need grouping, permissions, validation, and clear save state", "mixing account, workspace, and billing concerns in one page", "SaaS settings"],
  ["System Design", "Advanced", "search architecture", "search needs indexing, ranking, highlighting, loading, empty, and typo tolerance choices", "treating search as a text filter over whatever is already loaded", "large knowledge bases"],
  ["Product Engineering", "Intermediate", "activation metrics", "teams should know which first actions predict real value", "optimizing signups while ignoring whether users reach useful work", "first-run study flows"],
  ["Product Engineering", "Foundational", "progressive disclosure", "advanced detail should appear when it helps the next decision", "hiding essential information behind extra clicks", "settings and answer explanations"],
  ["Product Engineering", "Foundational", "empty-state strategy", "the empty state should explain why nothing is shown and what to do next", "using one generic empty state for first-run, filtered, error, and permission cases", "saved queues and search"],
  ["Product Engineering", "Intermediate", "undo flows", "recoverable actions can be faster and safer than confirmation-heavy UI", "offering undo for actions that cannot really be reversed", "archive, delete, and bulk edit"],
  ["Product Engineering", "Intermediate", "bulk actions", "multi-select workflows need clear scope, confirmation, progress, and recovery", "letting users act on hidden or filtered items by accident", "admin lists and inboxes"],
  ["Product Engineering", "Foundational", "error copy", "errors should explain what happened, what is affected, and what the user can do", "using vague blame like something went wrong", "forms and async saves"],
  ["Product Engineering", "Intermediate", "analytics instrumentation", "events should reflect meaningful user behavior, not random implementation clicks", "tracking too much noise and missing the decision metric", "funnels and feature adoption"],
  ["Product Engineering", "Advanced", "experimentation", "tests need a hypothesis, guardrails, assignment logic, and interpretation plan", "running experiments without enough traffic or clear success criteria", "pricing and onboarding"],
  ["Security", "Advanced", "Content Security Policy", "the browser can restrict where scripts, styles, images, and frames come from", "adding a policy in report-only mode and never tightening it", "rich content and third-party scripts"],
  ["Security", "Advanced", "token refresh", "authentication should recover from expiry without losing user work", "refresh loops that retry forever or expose tokens to unsafe storage", "long-lived app sessions"],
  ["Security", "Intermediate", "permission drift", "cached UI permissions can become stale as roles change", "hiding controls in the UI but trusting the frontend for enforcement", "admin tools and team settings"],
  ["Security", "Intermediate", "clickjacking", "a site can be framed to trick users into clicking hidden actions", "forgetting frame restrictions on sensitive flows", "billing and admin actions"],
  ["Security", "Advanced", "secure file previews", "uploaded files should be treated as untrusted content", "rendering arbitrary files inline with full app privileges", "attachments and document previews"],
  ["Security", "Intermediate", "dependency supply chain risk", "third-party packages can add vulnerabilities, bloat, or unwanted behavior", "installing packages for tiny helpers without review", "frontend dependencies"],
  ["Web Platform", "Advanced", "custom elements", "native components can expose reusable behavior outside one framework", "wrapping framework-specific assumptions into a supposedly portable element", "design-system primitives"],
  ["Web Platform", "Foundational", "`IntersectionObserver`", "visibility can be observed without polling scroll position", "using scroll handlers for every reveal or lazy load", "lazy loading and analytics impressions"],
  ["Web Platform", "Intermediate", "`ResizeObserver`", "component behavior can respond to element size changes", "creating resize loops by writing layout in response to every observation", "responsive panels and charts"],
  ["Web Platform", "Intermediate", "`BroadcastChannel`", "same-origin tabs can communicate lightweight state changes", "forgetting fallback behavior or leaking sensitive data between tabs", "logout and cross-tab sync"],
  ["Web Platform", "Foundational", "the Web Share API", "the browser can invoke native sharing when supported", "building share UI that fails silently on unsupported browsers", "mobile sharing flows"],
  ["Web Platform", "Advanced", "the File System Access API", "some browsers can let users open and save local files with permission", "assuming support everywhere or keeping handles longer than expected", "local editors and import tools"],
  ["TypeScript", "Intermediate", "discriminated unions", "a shared tag can make valid states explicit and exhaustively checked", "using loose optional fields that allow impossible combinations", "async UI state and reducers"],
  ["TypeScript", "Foundational", "type narrowing", "code should prove a value shape before using it", "asserting types instead of checking runtime data", "unknown API responses and caught errors"],
  ["TypeScript", "Advanced", "branded types", "structurally identical primitives can carry different domain meaning", "passing IDs or units into the wrong API because both are strings", "entity IDs and measurement units"],
  ["TypeScript", "Intermediate", "utility types", "built-in helpers can express transformations without duplicating object shapes", "stacking helpers until the type is harder to read than the value", "form drafts and API updates"],
  ["TypeScript", "Advanced", "schema validation", "runtime data should be parsed before it enters trusted typed code", "believing TypeScript checks JSON returned by the server", "API clients and persisted settings"],
  ["TypeScript", "Intermediate", "typed reducers", "state transitions become safer when action shapes are explicit", "allowing broad action objects that can represent invalid transitions", "complex local state"],
  ["Debugging", "Intermediate", "React Profiler", "render timing and commit data can reveal expensive components", "optimizing components based on intuition alone", "slow interactions"],
  ["Debugging", "Foundational", "network waterfalls", "request order, blocking, redirects, and cache behavior explain many delays", "only checking the final response and missing what happened before it", "slow pages and flaky APIs"],
  ["Debugging", "Intermediate", "source maps", "production stack traces need mapping back to readable source", "shipping source maps without access controls for private code", "error tracking"],
  ["Debugging", "Advanced", "session replay logs", "recorded interaction context can explain bugs that users cannot describe precisely", "collecting sensitive data without redaction and consent controls", "hard-to-reproduce UI failures"],
  ["Architecture", "Advanced", "monorepo boundaries", "shared packages need clear ownership, versioning, and dependency rules", "turning the monorepo into a place where everything imports everything", "multi-app product codebases"],
  ["Architecture", "Intermediate", "feature modules", "related UI, data, tests, and domain rules can live together by product area", "creating global folders that hide ownership", "growing apps"],
  ["Architecture", "Advanced", "dependency inversion", "high-level product code should depend on stable abstractions rather than concrete details", "adding abstractions before there is real volatility", "API clients and platform services"],
  ["Architecture", "Intermediate", "frontend observability", "the app should report errors, performance, and user impact with useful context", "logging every event without making incidents easier to understand", "production support"],
  ["Build Tools", "Intermediate", "Vite plugins", "plugins can transform modules, inject behavior, and shape the build pipeline", "using plugins without understanding dev and production differences", "asset handling and framework integration"],
  ["Build Tools", "Advanced", "module federation", "separately built frontends can share modules at runtime", "adding distributed deployment complexity for a team problem that modular code could solve", "large organizations"],
  ["Build Tools", "Advanced", "source map strategy", "debuggability, privacy, and deployment artifact management have to be balanced", "uploading maps inconsistently and breaking production error traces", "release pipelines"],
  ["Build Tools", "Intermediate", "CI preview builds", "every change can get a temporary environment for review and testing", "treating previews as production without matching data, flags, or auth assumptions", "pull request review"],
  ["Payments & Remittance", "Foundational", "payment rails", "each rail has different speed, cost, coverage, risk, settlement, and reconciliation behavior", "treating all transfers as the same once money leaves the app", "domestic bank transfers, card payouts, mobile money, and cross-border corridors", tpmTrack],
  ["Payments & Remittance", "Intermediate", "FX quote lifecycle", "rate sourcing, spread, quote expiry, fees, and settlement timing must be explicit to the customer and operations team", "showing a great rate in the UI while the backend settles on stale assumptions", "cross-border send-money flows", tpmTrack],
  ["Payments & Remittance", "Advanced", "correspondent banking", "cross-border transfers often move through intermediaries with their own fees, cutoffs, compliance checks, and failure modes", "promising instant delivery when the route depends on external banks and clearing windows", "international remittance corridors", tpmTrack],
  ["Payments & Remittance", "Intermediate", "mobile money ecosystems", "wallet providers, agent networks, transaction limits, KYC tiers, reversal rules, and uptime shape the product promise", "designing mobile-money payouts like ordinary bank-account credits", "Africa-focused payout products", tpmTrack],
  ["Payments & Remittance", "Advanced", "ISO 20022 messaging", "structured payment messages carry richer party, purpose, and remittance data than older formats", "treating payment messages as flat references and losing data needed for compliance or reconciliation", "bank integrations and treasury operations", tpmTrack],
  ["Payments & Remittance", "Advanced", "ISO 8583 transaction flows", "card and switch transactions depend on message types, response codes, reversals, advice messages, and settlement files", "only testing the approval path and missing reversals or partial failures", "card-funded wallets and POS channels", tpmTrack],
  ["API & Partner Integration", "Foundational", "REST API contracts", "resources, methods, status codes, idempotency, authentication, pagination, and error shapes form the product contract", "reducing API work to endpoint lists without agreement on behavior", "partner onboarding and internal platform APIs", tpmTrack],
  ["API & Partner Integration", "Intermediate", "GraphQL integration", "clients can request precise data shapes but teams still need schema governance, authorization, caching, and versioning discipline", "assuming GraphQL removes the need for product-level contract management", "data-heavy dashboards and partner portals", tpmTrack],
  ["API & Partner Integration", "Intermediate", "webhook reliability", "event delivery needs signing, retries, idempotency, ordering expectations, and dead-letter handling", "assuming a webhook is a guaranteed real-time command", "payment status callbacks and KYC provider updates", tpmTrack],
  ["API & Partner Integration", "Advanced", "event-driven architecture", "events decouple systems but require clear ownership, schemas, replay rules, monitoring, and consumer expectations", "turning every workflow into events without knowing who owns the source of truth", "wallet ledgers, notifications, and fraud scoring", tpmTrack],
  ["API & Partner Integration", "Advanced", "message queues", "queues buffer work and protect services but introduce latency, retry, duplication, and poison-message handling", "calling a queue a fix without defining failure and recovery behavior", "settlement jobs and partner-file processing", tpmTrack],
  ["API & Partner Integration", "Intermediate", "Postman and Swagger validation", "API tools help prove examples, auth, schemas, errors, and environment assumptions before engineering escalates issues", "using API tooling only for happy-path demos", "partner certification and bug triage", tpmTrack],
  ["Data & Schema Design", "Foundational", "entity relationships", "schemas should represent customer, account, wallet, transaction, beneficiary, quote, and compliance facts without duplicating truth", "modeling screens instead of domain facts", "remittance product databases", tpmTrack],
  ["Data & Schema Design", "Intermediate", "ledger design", "financial products need auditable immutable entries, balances derived from postings, and clear reversal behavior", "storing only mutable balances and hoping logs explain the money trail", "wallet and payment systems", tpmTrack],
  ["Data & Schema Design", "Intermediate", "SQL analysis", "basic joins, filters, aggregation, cohort cuts, and reconciliation queries help validate product assumptions", "waiting for analysts for every operational question", "payment failure analysis and funnel review", tpmTrack],
  ["Data & Schema Design", "Advanced", "data governance", "ownership, definitions, lineage, quality checks, retention, and access rules keep metrics and audits trustworthy", "shipping dashboards where every team defines active customer differently", "executive reporting and regulatory evidence", tpmTrack],
  ["Data & Schema Design", "Intermediate", "analytics instrumentation", "events should represent meaningful user and transaction behavior with stable names, properties, and privacy controls", "tracking random clicks while missing send-money success, failure, and abandonment reasons", "Mixpanel, Firebase, Google Analytics, and product funnels", tpmTrack],
  ["Data & Schema Design", "Advanced", "reconciliation data", "product teams need transaction states, provider references, fees, FX rates, timestamps, and exception reasons to close books", "building status pages that cannot explain money movement", "finance operations and partner settlement", tpmTrack],
  ["Cloud & Infrastructure", "Foundational", "cloud platform primitives", "compute, storage, databases, networking, IAM, queues, logs, and managed services are the building blocks behind delivery commitments", "speaking about cloud as hosting without understanding operational tradeoffs", "AWS, Azure, and GCP delivery planning", tpmTrack],
  ["Cloud & Infrastructure", "Intermediate", "containerized services", "Docker and Kubernetes support repeatable deployment, scaling, rollout control, and service isolation", "assuming Kubernetes is required before the team has operational maturity", "cloud-native fintech platforms", tpmTrack],
  ["Cloud & Infrastructure", "Intermediate", "serverless architecture", "serverless can reduce operations for event-driven work but changes cold starts, limits, observability, and cost patterns", "using serverless for every workload without checking latency and vendor limits", "webhook processors and scheduled compliance jobs", tpmTrack],
  ["Cloud & Infrastructure", "Advanced", "infrastructure as code", "Terraform and similar tools make environments reviewable, repeatable, and auditable", "letting production drift through console changes no one can reproduce", "regulated cloud environments", tpmTrack],
  ["Cloud & Infrastructure", "Intermediate", "CI/CD pipelines", "pipelines should automate build, test, security checks, deployment, rollback, and release evidence", "treating deployment as a manual checklist owned by one engineer", "Jenkins, GitHub Actions, and release governance", tpmTrack],
  ["Cloud & Infrastructure", "Advanced", "disaster recovery", "recovery objectives, backups, failover, runbooks, and regular drills define whether the business can survive outages", "writing a DR plan that has never been tested", "payment products with uptime obligations", tpmTrack],
  ["Security & Compliance", "Foundational", "KYC identity verification", "customer onboarding needs identity capture, verification, risk tiering, document handling, and fallback review paths", "treating KYC as a form instead of a regulated decision workflow", "wallet signup and remittance onboarding", tpmTrack],
  ["Security & Compliance", "Intermediate", "AML transaction monitoring", "rules, risk signals, thresholds, review queues, and audit evidence help detect suspicious activity", "bolting on AML after launch without product-state integration", "cross-border payment monitoring", tpmTrack],
  ["Security & Compliance", "Intermediate", "sanctions screening", "screening needs reliable party data, fuzzy matching, false-positive handling, escalation, and evidence retention", "blocking good customers forever because review operations were not designed", "beneficiary creation and payout approval", tpmTrack],
  ["Security & Compliance", "Advanced", "PCI DSS scope", "card data handling choices determine compliance scope, vendor responsibilities, tokenization, logging rules, and audit burden", "letting sensitive card data pass through systems that do not need it", "card-funded remittance and wallet top-up", tpmTrack],
  ["Security & Compliance", "Intermediate", "OAuth2 and Open Banking", "authorization flows, consent, token lifetime, scopes, refresh, and revocation define safe access to financial data", "confusing login with delegated financial-data permission", "bank-linking and account-information products", tpmTrack],
  ["Security & Compliance", "Advanced", "audit trails", "regulated products need who did what, when, why, from where, and what changed, preserved in tamper-aware records", "adding audit logs only after an incident or regulator request", "admin tools and operations consoles", tpmTrack],
  ["Fraud & Risk", "Foundational", "fraud risk signals", "device, velocity, beneficiary, geography, amount, account age, and behavioral signals help separate normal activity from risky patterns", "using one static rule that blocks growth and still misses sophisticated abuse", "remittance send flows", tpmTrack],
  ["Fraud & Risk", "Intermediate", "risk-based friction", "higher-risk actions can require extra verification while low-risk users continue smoothly", "adding the same friction to everyone and harming conversion", "step-up verification and transaction review", tpmTrack],
  ["Fraud & Risk", "Advanced", "chargeback and dispute handling", "card-funded payments need evidence, timelines, provisional credits, provider rules, and customer communication", "treating disputes as support tickets without financial liability tracking", "card-to-wallet funding", tpmTrack],
  ["Fraud & Risk", "Intermediate", "limits and controls", "daily, monthly, corridor, KYC-tier, partner, and risk limits protect the business and satisfy regulation", "hard-coding limits with no operations override or audit trail", "wallet transfers and cross-border payouts", tpmTrack],
  ["Fraud & Risk", "Advanced", "case management", "alerts need assignment, evidence, disposition, SLA, escalation, and feedback into rules or models", "creating alerts faster than operations can resolve them", "fraud and AML operations", tpmTrack],
  ["Fraud & Risk", "Intermediate", "risk appetite", "product decisions should reflect explicit tolerance for loss, false positives, customer friction, and compliance exposure", "letting every team optimize a different hidden risk target", "executive risk reviews", tpmTrack],
  ["Agile Delivery", "Foundational", "Scrum rituals", "planning, standups, reviews, retrospectives, and backlog refinement create alignment when they produce decisions and feedback", "performing ceremonies while scope and blockers remain unclear", "cross-functional fintech squads", tpmTrack],
  ["Agile Delivery", "Intermediate", "technical milestone slicing", "large programs should be broken into integrations, data contracts, controls, rollout gates, and measurable increments", "building a huge launch plan with no independently testable slices", "new remittance corridor delivery", tpmTrack],
  ["Agile Delivery", "Intermediate", "Jira and Linear hygiene", "tickets should carry outcome, scope, dependencies, acceptance criteria, owner, and current risk", "turning project tools into status theater instead of delivery control", "multi-team roadmap execution", tpmTrack],
  ["Agile Delivery", "Advanced", "dependency management", "integration work needs visible dependencies across vendors, backend, mobile, web, compliance, operations, and data", "discovering blocked work only at sprint review", "partner API launches", tpmTrack],
  ["Agile Delivery", "Intermediate", "release planning", "release plans should include scope, testing, approvals, communications, rollback, monitoring, and support readiness", "treating release as merge day", "regulated payment launches", tpmTrack],
  ["Agile Delivery", "Advanced", "technical debt management", "debt should be named by business risk, maintenance cost, and delivery drag, then paid down deliberately", "calling everything technical debt without prioritization", "platform modernization roadmaps", tpmTrack],
  ["Stakeholder Communication", "Foundational", "executive translation", "technical status should become business impact, decision options, risks, costs, and next steps", "dumping implementation jargon on leaders who need a decision", "steering committees and C-suite updates", tpmTrack],
  ["Stakeholder Communication", "Intermediate", "requirements elicitation", "good requirements uncover users, constraints, rules, data, integrations, exceptions, and success measures", "writing feature requests without understanding the process behind them", "payments operations and compliance workflows", tpmTrack],
  ["Stakeholder Communication", "Intermediate", "technical documentation", "docs should capture decisions, contracts, diagrams, assumptions, open questions, and operating rules", "creating beautiful documents no one can use to build or operate the product", "Confluence, Notion, and architecture briefs", tpmTrack],
  ["Stakeholder Communication", "Advanced", "governance forums", "governance should surface risks, decisions, dependencies, and tradeoffs before they damage delivery", "using forums as reporting meetings with no decision ownership", "program boards and steering committees", tpmTrack],
  ["Stakeholder Communication", "Intermediate", "conflict resolution", "technical product managers resolve conflict by clarifying constraints, shared goals, evidence, and decision rights", "treating disagreement as attitude instead of missing information or competing incentives", "vendor, engineering, compliance, and business alignment", tpmTrack],
  ["Stakeholder Communication", "Advanced", "global team communication", "distributed teams need timezone-aware rituals, written decisions, async updates, and culturally clear expectations", "forcing every decision into live meetings across time zones", "multi-region fintech programs", tpmTrack],
  ["Architecture & Systems", "Foundational", "system architecture diagrams", "diagrams should show actors, services, data stores, integrations, trust boundaries, and failure paths", "drawing boxes that look official but do not explain behavior", "solution-design reviews", tpmTrack],
  ["Architecture & Systems", "Intermediate", "microservices tradeoffs", "services can improve ownership and scaling but add distributed data, observability, deployment, and failure complexity", "splitting services because it sounds modern", "wallet, KYC, payment, and notification platforms", tpmTrack],
  ["Architecture & Systems", "Advanced", "enterprise integration platforms", "API gateways, iPaaS, ESBs, queues, and event buses need governance, cost control, security, and performance design", "buying an integration platform before defining integration ownership", "ERP, CRM, core banking, and partner ecosystems", tpmTrack],
  ["Architecture & Systems", "Intermediate", "API management", "gateway policies, auth, rate limits, developer portals, versioning, analytics, and monetization shape integration products", "publishing APIs without lifecycle management", "partner-facing fintech APIs", tpmTrack],
  ["Architecture & Systems", "Advanced", "interoperability", "systems need shared identifiers, mapping rules, data contracts, retry behavior, and operational ownership to work together", "assuming two vendors integrate cleanly because both say REST", "core-banking and digital-channel integration", tpmTrack],
  ["Architecture & Systems", "Intermediate", "scalability planning", "capacity should be tied to transaction volume, concurrency, peak events, partner limits, and failure isolation", "asking if it scales without defining the load and bottleneck", "high-volume payment periods", tpmTrack],
  ["Observability & Operations", "Foundational", "logs, metrics, and traces", "observability should reveal what happened, where, who was affected, and what business process is at risk", "collecting telemetry that cannot answer customer or operations questions", "payment incident triage", tpmTrack],
  ["Observability & Operations", "Intermediate", "service-level indicators", "SLIs should measure user and business outcomes such as API success, payout latency, quote availability, and reconciliation freshness", "tracking only CPU while customers cannot complete transfers", "SLO reviews and incident prevention", tpmTrack],
  ["Observability & Operations", "Intermediate", "incident management", "incidents need severity, owner, communication, mitigation, rollback, postmortem, and follow-up accountability", "letting engineering fix quietly while support and executives guess", "payment outages and degraded partners", tpmTrack],
  ["Observability & Operations", "Advanced", "operational dashboards", "dashboards should separate health, flow, exceptions, partner status, risk queues, and financial exposure", "building charts that look busy but do not drive action", "PowerBI, Grafana, Datadog, and New Relic reporting", tpmTrack],
  ["Observability & Operations", "Intermediate", "runbooks", "runbooks turn known incidents and operating tasks into repeatable steps with ownership and escalation paths", "depending on whoever remembers how the old fix worked", "supporting remittance operations", tpmTrack],
  ["Observability & Operations", "Advanced", "cost optimization", "cloud, vendor, data, and support costs should be connected to product volume, architecture choices, and unit economics", "cutting cost blindly and damaging reliability or compliance", "fintech platform economics", tpmTrack],
  ["Product Strategy", "Foundational", "roadmap alignment", "roadmaps should connect customer outcomes, technical constraints, regulatory obligations, and business priorities", "listing features without a strategic reason", "payments product planning", tpmTrack],
  ["Product Strategy", "Intermediate", "business case development", "a business case should include problem, opportunity, users, costs, risks, ROI, dependencies, and measurement plan", "selling a technology project without proving why it matters", "new corridor and platform investment", tpmTrack],
  ["Product Strategy", "Intermediate", "OKR design", "objectives and key results should connect product work to measurable customer, business, risk, or delivery outcomes", "setting output targets like ship API instead of outcome targets", "quarterly product planning", tpmTrack],
  ["Product Strategy", "Advanced", "portfolio management", "programs should be balanced across growth, compliance, reliability, platform health, and customer experience", "funding only visible features while infrastructure risk grows", "executive prioritization", tpmTrack],
  ["Product Strategy", "Intermediate", "go-to-market readiness", "launch needs product, operations, compliance, support, marketing, analytics, training, and rollback readiness", "treating GTM as a marketing task after engineering is done", "fintech product launches", tpmTrack],
  ["Product Strategy", "Advanced", "emerging technology assessment", "AI, ML, and automation bets need use-case fit, data readiness, risk controls, governance, and measurable value", "adding AI because competitors mention it", "fraud detection, support automation, and analytics", tpmTrack],
  ["Mobile & Channels", "Foundational", "mobile and web architecture", "channels differ in release cadence, offline behavior, device constraints, authentication, analytics, and accessibility", "assuming a web flow can be copied into mobile without product changes", "consumer remittance apps", tpmTrack],
  ["Mobile & Channels", "Intermediate", "USSD channel constraints", "USSD flows need short sessions, simple menus, low literacy assumptions, limited input, and reliable recovery", "designing USSD like a mobile app with infinite context", "financial access in low-connectivity markets", tpmTrack],
  ["Mobile & Channels", "Intermediate", "POS integration", "POS products need device management, transaction routing, reversals, receipts, settlement, and support tooling", "treating terminals as just another frontend", "merchant payment acceptance", tpmTrack],
  ["Mobile & Channels", "Advanced", "omnichannel consistency", "users and operations need consistent identity, limits, state, support history, and audit trails across channels", "letting mobile, web, POS, and support tools become separate truths", "enterprise digital banking", tpmTrack],
  ["Mobile & Channels", "Intermediate", "CDN and web delivery", "web performance depends on caching, invalidation, edge routing, asset strategy, and observability", "using a CDN without planning stale content, purge rules, and failure behavior", "public web and partner portals", tpmTrack],
  ["Mobile & Channels", "Advanced", "localization and jurisdiction", "language, currency, date formats, legal copy, limits, KYC rules, and payment options vary by market", "translating text while ignoring regulatory and operational differences", "global fintech expansion", tpmTrack],
  ["Vendor & Partner Management", "Foundational", "vendor evaluation", "selection should compare capability, security, compliance, uptime, support, cost, roadmap fit, and exit options", "choosing the vendor with the best demo", "KYC, payment, fraud, and analytics platforms", tpmTrack],
  ["Vendor & Partner Management", "Intermediate", "partner certification", "integrations often require test evidence, edge-case proof, operational readiness, and signed-off runbooks", "declaring integration complete after one successful API call", "bank and mobile-money partner onboarding", tpmTrack],
  ["Vendor & Partner Management", "Intermediate", "SLA management", "SLAs should define availability, latency, support response, incident communication, credits, and measurement method", "quoting uptime without knowing how it is measured or enforced", "critical payment providers", tpmTrack],
  ["Vendor & Partner Management", "Advanced", "exit strategy", "critical vendors need migration paths, data portability, contract terms, fallback providers, and operational playbooks", "becoming dependent on a vendor with no switching plan", "regulated fintech procurement", tpmTrack],
  ["Vendor & Partner Management", "Intermediate", "commercial negotiation", "TPMs should understand volume tiers, minimums, implementation fees, support cost, liability, and product roadmap impact", "optimizing sticker price while ignoring total cost and risk", "provider selection and renewal", tpmTrack],
  ["Vendor & Partner Management", "Advanced", "partner performance review", "ongoing management should track success rate, latency, incident history, cost, support quality, compliance issues, and roadmap fit", "only reviewing partners when something breaks", "multi-provider payment routing", tpmTrack]
];

export const questionAngles: QuestionAngle[] = [
  {
    kind: "concept",
    question: ({ concept, role }) => `What should a ${role} understand about ${concept}?`,
    answer: ({ concept, practice, track }) =>
      `${sentenceCase(concept)} means ${practice}. A strong answer explains the behavior, the boundary it creates, and why it changes the reliability or clarity of the ${track === tpmTrack ? "product workflow" : "interface"}.`,
    reasoning: ({ concept, trap, example, track }) =>
      track === tpmTrack
        ? `This matters in ${example} because the common failure mode is ${trap}. A TPM should connect ${concept} to customer trust, delivery risk, compliance exposure, operating cost, and the decision the team must make next.`
        : `This matters in ${example} because the common failure mode is ${trap}. In product code, ${concept} should be explained through user-visible consequences: broken state, inaccessible controls, stale data, slow interactions, or maintenance drag.`,
    tests: ({ concept, behaviorScope }) =>
      `Core understanding of ${concept}, practical vocabulary, and the ability to connect the concept to ${behaviorScope}.`,
    followUps: ({ concept, trap, track }) => [
      `What user-visible bug can happen when ${concept} is misunderstood?`,
      `How would you explain the risk of ${trap} in a ${track === tpmTrack ? "delivery review" : "code review"}?`
    ]
  },
  {
    kind: "application",
    question: ({ concept, example }) => `How would you apply ${concept} in ${example}?`,
    answer: ({ concept, practice, example, track }) =>
      track === tpmTrack
        ? `Start by naming the customer or business workflow in ${example}, then use ${concept} to define the product rule, integration boundary, risk control, and release evidence. The plan should be small enough to test, but complete enough to operate.`
        : `Start by naming the user task in ${example}, then use ${concept} to support that task with clear state, predictable behavior, and recovery paths. The implementation should be as small as possible while still handling real edge cases.`,
    reasoning: ({ concept, trap, track }) =>
      track === tpmTrack
        ? `The product reason is that ${concept} only helps when it turns ambiguity into a clear decision, owner, or control. If the plan ignores ${trap}, the launch may pass a demo while failing in operations, compliance, partner support, or customer trust.`
        : `The engineering reason is that the idea only helps when it reduces ambiguity. If the implementation ignores the risk of ${trap}, the feature may look correct in the happy path while failing under real data, timing, permissions, or assistive technology.`,
    tests: ({ concept, track }) =>
      track === tpmTrack
        ? `Ability to translate ${concept} into requirements, milestones, controls, metrics, and launch tradeoffs.`
        : `Ability to translate ${concept} into implementation steps, state handling, accessibility, and product tradeoffs.`,
    followUps: ({ example, track }) => [
      `What would you build first for ${example}?`,
      track === tpmTrack ? "What evidence would you need before launch?" : "Which edge case would you test before release?"
    ]
  },
  {
    kind: "trap",
    question: ({ concept }) => `What common mistakes happen with ${concept}?`,
    answer: ({ concept, trap }) =>
      `The common mistake is ${trap}. A better answer identifies the assumption behind the mistake, then replaces it with a safer rule the team can apply repeatedly.`,
    reasoning: ({ concept, example, track }) =>
      track === tpmTrack
        ? `In ${example}, mistakes around ${concept} usually survive because the first meeting or demo sounds plausible. The risk appears later in partner behavior, exception handling, audit evidence, operational queues, or customer support.`
        : `In ${example}, mistakes around ${concept} usually survive because the first demo works. The risk appears later: a different device, longer content, slower network, changed permissions, or a user who interacts through keyboard or assistive technology.`,
    tests: ({ concept, track }) =>
      track === tpmTrack
        ? `Risk detection, delivery judgment, and the ability to prevent subtle ${concept} failures before launch.`
        : `Risk detection, debugging judgment, and the ability to prevent subtle ${concept} regressions.`,
    followUps: ({ concept, track }) => [
      `How would you spot this ${concept} mistake during review?`,
      track === tpmTrack ? "What operating guardrail would prevent the mistake from returning?" : "What small guardrail would prevent the mistake from returning?"
    ]
  },
  {
    kind: "verification",
    question: ({ concept }) => `How would you test or debug ${concept}?`,
    answer: ({ concept, track }) =>
      track === tpmTrack
        ? `Verify ${concept} with evidence from the workflow: API examples, test cases, logs, dashboards, reconciliation checks, support paths, and sign-offs from the teams that operate the product.`
        : `Test ${concept} by driving the user-visible behavior first, then add lower-level checks only for logic that is hard to observe through the UI. Debug with evidence: reproduction steps, browser tools, logs, profiling, and targeted experiments.`,
    reasoning: ({ concept, practice, track }) =>
      track === tpmTrack
        ? `The goal is launch confidence, not ceremony. This concept involves a concrete rule: ${practice}. The right verification proves the normal path, the exception path, and the owner for follow-up when something fails.`
        : `The goal is confidence, not ceremony. This concept involves a concrete rule: ${practice}. The right verification should prove both the normal path and at least one failure or boundary case. That keeps tests connected to product risk.`,
    tests: ({ concept, track }) =>
      track === tpmTrack
        ? `Verification strategy, operational readiness, and ability to choose evidence that gives confidence in ${concept}.`
        : `Verification strategy, use of browser tooling, and ability to choose the smallest test that gives confidence in ${concept}.`,
    followUps: ({ concept, track }) => [
      `Which part of ${concept} is easiest to miss in automated tests?`,
      track === tpmTrack ? "What signal would show the launch is healthy?" : "What signal would tell you the fix worked in production?"
    ]
  }
];

export function sentenceCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function idFor(index: number) {
  return `q${String(101 + index).padStart(3, "0")}`;
}

function makeQuestion(spec: TopicSpec, angle: QuestionAngle, index: number): Question {
  const [category, level, concept, practice, trap, example, rawTrack = frontendTrack] = spec;
  const context = {
    ...contextForTrack(rawTrack),
    track: rawTrack,
    category,
    level,
    concept,
    practice,
    trap,
    example
  };

  return {
    id: idFor(index),
    track: rawTrack,
    category,
    level,
    question: angle.question(context),
    answer: angle.answer(context),
    reasoning: angle.reasoning(context),
    tests: angle.tests(context),
    followUps: angle.followUps(context)
  };
}

export const expandedQuestions = topicSpecs.flatMap((spec, specIndex) =>
  questionAngles.map((angle, angleIndex) =>
    makeQuestion(spec, angle, specIndex * questionAngles.length + angleIndex)
  )
);
