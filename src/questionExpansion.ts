import type { Question } from "./questionTypes";

export type TopicSpec = [string, string, string, string, string, string];
type TopicContext = {
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
  ["Build Tools", "Intermediate", "CI preview builds", "every change can get a temporary environment for review and testing", "treating previews as production without matching data, flags, or auth assumptions", "pull request review"]
];

export const questionAngles: QuestionAngle[] = [
  {
    kind: "concept",
    question: ({ concept }) => `What should a frontend engineer understand about ${concept}?`,
    answer: ({ concept, practice }) =>
      `${sentenceCase(concept)} means ${practice}. A strong answer explains the behavior, the boundary it creates, and why it changes the reliability or clarity of the interface.`,
    reasoning: ({ concept, trap, example }) =>
      `This matters in ${example} because the common failure mode is ${trap}. In product code, ${concept} should be explained through user-visible consequences: broken state, inaccessible controls, stale data, slow interactions, or maintenance friction.`,
    tests: ({ concept }) =>
      `Core understanding of ${concept}, practical vocabulary, and the ability to connect the concept to real frontend behavior.`,
    followUps: ({ concept, trap }) => [
      `What user-visible bug can happen when ${concept} is misunderstood?`,
      `How would you explain the risk of ${trap} in a code review?`
    ]
  },
  {
    kind: "application",
    question: ({ concept, example }) => `How would you apply ${concept} in ${example}?`,
    answer: ({ concept, practice, example }) =>
      `Start by naming the user task in ${example}, then use ${concept} to support that task with clear state, predictable behavior, and recovery paths. The implementation should be as small as possible while still handling real edge cases.`,
    reasoning: ({ concept, trap }) =>
      `The engineering reason is that the idea only helps when it reduces ambiguity. If the implementation ignores the risk of ${trap}, the feature may look correct in the happy path while failing under real data, timing, permissions, or assistive technology.`,
    tests: ({ concept }) =>
      `Ability to translate ${concept} into implementation steps, state handling, accessibility, and product tradeoffs.`,
    followUps: ({ example }) => [
      `What would you build first for ${example}?`,
      "Which edge case would you test before release?"
    ]
  },
  {
    kind: "trap",
    question: ({ concept }) => `What common mistakes happen with ${concept}?`,
    answer: ({ concept, trap }) =>
      `The common mistake is ${trap}. A better answer identifies the assumption behind the mistake, then replaces it with a safer rule the team can apply repeatedly.`,
    reasoning: ({ concept, example }) =>
      `In ${example}, mistakes around ${concept} usually survive because the first demo works. The risk appears later: a different device, longer content, slower network, changed permissions, or a user who interacts through keyboard or assistive technology.`,
    tests: ({ concept }) =>
      `Risk detection, debugging judgment, and the ability to prevent subtle ${concept} regressions.`,
    followUps: ({ concept }) => [
      `How would you spot this ${concept} mistake during review?`,
      "What small guardrail would prevent the mistake from returning?"
    ]
  },
  {
    kind: "verification",
    question: ({ concept }) => `How would you test or debug ${concept}?`,
    answer: ({ concept }) =>
      `Test ${concept} by driving the user-visible behavior first, then add lower-level checks only for logic that is hard to observe through the UI. Debug with evidence: reproduction steps, browser tools, logs, profiling, and targeted experiments.`,
    reasoning: ({ concept, practice }) =>
      `The goal is confidence, not ceremony. This concept involves a concrete rule: ${practice}. The right verification should prove both the normal path and at least one failure or boundary case. That keeps tests connected to product risk.`,
    tests: ({ concept }) =>
      `Verification strategy, use of browser tooling, and ability to choose the smallest test that gives confidence in ${concept}.`,
    followUps: ({ concept }) => [
      `Which part of ${concept} is easiest to miss in automated tests?`,
      "What signal would tell you the fix worked in production?"
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
  const [category, level, concept, practice, trap, example] = spec;
  const context = { category, level, concept, practice, trap, example };

  return {
    id: idFor(index),
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
