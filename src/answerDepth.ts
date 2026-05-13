import { expandedAnswerDepth } from "./questionExpansion";
import type { AnswerDepth } from "./questionTypes";

export const answerDepth: Record<string, AnswerDepth> = {
  q001: {
    mentalModel:
      "`var` belongs to the nearest function, while `let` and `const` belong to the nearest block. `const` protects the variable binding, not the contents of an object or array.",
    engineeringUse:
      "In production code, prefer `const` until reassignment is needed, then use `let`. Avoid `var` because its function scope and redeclaration behavior make bugs harder to see during review.",
    interviewSignal:
      "A strong answer separates scope, reassignment, redeclaration, hoisting, and object mutation instead of treating the three keywords as simple style preferences."
  },
  q002: {
    mentalModel:
      "A closure is a function plus the lexical environment it was created inside. The inner function does not copy the outer values; it keeps a live reference to that scope.",
    engineeringUse:
      "Closures power callbacks, event handlers, debounced functions, memoized helpers, and private state. They are also why stale values and retained memory can appear in long-lived UI code.",
    interviewSignal:
      "A strong answer gives a small example, then explains lifetime: the outer function can finish, but the variables it captured can still be used later."
  },
  q003: {
    mentalModel:
      "The event loop coordinates synchronous execution, microtasks, browser rendering, and queued tasks. JavaScript does not run everything at once; it takes turns through these queues.",
    engineeringUse:
      "This explains why a resolved promise runs before a zero-delay timer, and why long synchronous code freezes input and rendering. UI responsiveness depends on keeping each turn short.",
    interviewSignal:
      "A strong answer names the call stack, microtask queue, task queue, and rendering opportunity, then connects ordering rules to user-visible delays."
  },
  q004: {
    mentalModel:
      "`===` checks equality without converting types. `==` can coerce values first, so the comparison may succeed for reasons that are not obvious from the code.",
    engineeringUse:
      "Frontend apps often compare form strings, route params, API values, and numeric state. Explicit conversion before `===` makes the boundary clear and prevents accidental truthy matches.",
    interviewSignal:
      "A strong answer does not just say always use strict equality. It explains when explicit coercion is appropriate and why implicit coercion hides assumptions."
  },
  q005: {
    mentalModel:
      "Debouncing waits until activity pauses before running work. The timer resets every time the event fires, so only the final intent in a burst is acted on.",
    engineeringUse:
      "Use it for search, resize, validation, autosave, and analytics where every intermediate event is not meaningful. Choose the delay based on user feel and backend cost.",
    interviewSignal:
      "A strong answer distinguishes debounce from throttle, mentions cancellation on unmount, and explains what should happen to stale network requests."
  },
  q006: {
    mentalModel:
      "A promise represents a value that may be available later. `async` and `await` are syntax on top of promises that make dependent asynchronous steps easier to read.",
    engineeringUse:
      "`await` pauses the current async function, not the whole browser. Use sequential `await` when order matters, and `Promise.all` when independent work can run in parallel.",
    interviewSignal:
      "A strong answer covers error handling, sequencing versus parallelism, and the fact that promises remain the underlying primitive."
  },
  q007: {
    mentalModel:
      "Immutability means representing a change by creating a new value instead of modifying the old one. References become a simple signal that something changed.",
    engineeringUse:
      "React state updates, undo stacks, memoization, and debugging all become more predictable when previous values remain trustworthy snapshots. Deep copying everything is not the goal.",
    interviewSignal:
      "A strong answer explains why mutation can hide changes from rendering logic and also acknowledges the cost of copying large or deeply nested data."
  },
  q008: {
    mentalModel:
      "A module is an explicit boundary around code. It declares what it needs through imports and what it offers through exports.",
    engineeringUse:
      "Modules help teams understand dependencies, split code, tree-shake unused exports, and avoid global coupling. The export shape also communicates ownership and intended use.",
    interviewSignal:
      "A strong answer mentions dependency graphs, circular-import risks, and the difference between convenient barrel files and accidental architecture opacity."
  },
  q009: {
    mentalModel:
      "A shallow copy duplicates the outer container while nested objects remain shared. A deep copy attempts to duplicate the nested graph too.",
    engineeringUse:
      "Most React updates only need copying along the changed path. Blind deep copies can be slow, can lose special object types, and can hide a data-modeling issue.",
    interviewSignal:
      "A strong answer uses an example with nested objects and explains reference identity, performance, `structuredClone`, and when normalizing state is better."
  },
  q010: {
    mentalModel:
      "A race condition happens when multiple async operations finish in an order different from the user intent that created them.",
    engineeringUse:
      "Search, filters, route changes, and autosave commonly need request identity, cancellation with `AbortController`, or stale-result checks before updating UI state.",
    interviewSignal:
      "A strong answer connects the result to current state before applying it. It also handles loading, error, retry, and cancellation behavior."
  },
  q011: {
    mentalModel:
      "React lets engineers describe UI as a function of state and props. Instead of manually editing DOM nodes, you declare what the screen should look like now.",
    engineeringUse:
      "This makes complex UI easier to reason about because data changes drive rendering. React does not solve data fetching, routing, accessibility, or architecture by itself.",
    interviewSignal:
      "A strong answer focuses on declarative rendering, component composition, and predictable updates rather than only saying React is for reusable components."
  },
  q012: {
    mentalModel:
      "Props are inputs owned by a parent. State is data a component owns and can update over time.",
    engineeringUse:
      "Ownership decides where the value should live. Shared coordination usually belongs higher up, while temporary interaction details can stay local.",
    interviewSignal:
      "A strong answer explains lifting state, controlled components, and why putting everything in global state makes simple UI harder to change."
  },
  q013: {
    mentalModel:
      "A controlled component gets its value from React state and reports edits through callbacks. React, not the DOM alone, is the source of truth.",
    engineeringUse:
      "Controlled inputs are useful for validation, formatting, conditional UI, autosave, and disabling submit buttons. Uncontrolled inputs can be simpler for lightweight forms.",
    interviewSignal:
      "A strong answer frames this as a tradeoff between control and complexity, including render cost and large-form performance."
  },
  q014: {
    mentalModel:
      "Keys tell React which item is which across renders. The key should represent item identity, not just the current position in an array.",
    engineeringUse:
      "Bad keys can put focus, local state, animation, or input values on the wrong row after insertion, deletion, sorting, or filtering.",
    interviewSignal:
      "A strong answer explains when index keys are acceptable: static lists with no reordering or item-level state."
  },
  q015: {
    mentalModel:
      "`useEffect` synchronizes React with something outside render, such as the network, timers, subscriptions, browser APIs, or imperative libraries.",
    engineeringUse:
      "Do not use effects just to calculate values from props or state. That creates extra renders and synchronization bugs that render-time calculation avoids.",
    interviewSignal:
      "A strong answer mentions cleanup, dependency arrays, stale closures, Strict Mode behavior, and cancellation for async work."
  },
  q016: {
    mentalModel:
      "Memoization stores a previous calculation or component result so React can reuse it when inputs have not changed.",
    engineeringUse:
      "Use it when repeated work is expensive or stable references prevent unnecessary child renders. It adds dependency risk, memory retention, and code complexity.",
    interviewSignal:
      "A strong answer starts with measurement and render behavior, not a reflex to wrap every function in `useCallback`."
  },
  q017: {
    mentalModel:
      "Prop drilling is passing data through components that only forward it. The problem is not depth alone; it is unrelated components learning about unrelated concerns.",
    engineeringUse:
      "Composition, colocating state, context, or a state library can help. The right choice depends on ownership, update frequency, and how broadly the value is needed.",
    interviewSignal:
      "A strong answer avoids treating context as magic. It explains when explicit props are clearer than hiding dependencies."
  },
  q018: {
    mentalModel:
      "Context shares a value with a subtree without passing it through every component. It is best for app-wide context, not every changing piece of state.",
    engineeringUse:
      "Theme, locale, current user, permissions, and configuration often fit. Frequently changing values can re-render broad subtrees if the context shape is careless.",
    interviewSignal:
      "A strong answer mentions splitting contexts, memoizing provider values, and avoiding context for state that should remain local."
  },
  q019: {
    mentalModel:
      "A reusable data-fetching hook should hide repeated lifecycle work while exposing a simple contract to the component.",
    engineeringUse:
      "The hook should handle loading, success, error, refresh, cancellation, stale responses, dependency changes, and sometimes retries or caching.",
    interviewSignal:
      "A strong answer also asks whether to build it at all, because TanStack Query or a similar library is often the more reliable choice."
  },
  q020: {
    mentalModel:
      "An error boundary catches rendering errors below it and shows fallback UI instead of letting the whole tree crash.",
    engineeringUse:
      "Boundary placement is a product decision. Broad boundaries protect the shell, while smaller boundaries let widgets or panels fail independently.",
    interviewSignal:
      "A strong answer notes that event-handler errors and async errors are not caught by boundaries by default."
  },
  q021: {
    mentalModel:
      "Server state is owned outside the browser and must be synchronized. Client state is owned by the UI and usually describes current interaction.",
    engineeringUse:
      "Server state needs caching, invalidation, refetching, and stale-data communication. Client state includes open menus, selected tabs, local drafts, and display preferences.",
    interviewSignal:
      "A strong answer separates truth ownership from storage location, then chooses tools around that boundary."
  },
  q022: {
    mentalModel:
      "Every element is laid out as content, padding, border, and margin. `box-sizing` changes how declared width and height account for those parts.",
    engineeringUse:
      "Most layout bugs become easier when you can identify which layer is creating size or space. `border-box` makes component sizing more predictable.",
    interviewSignal:
      "A strong answer can explain overflow, margin collapse, and why padding is internal space while margin is external space."
  },
  q023: {
    mentalModel:
      "Flexbox answers one-axis distribution questions. Grid answers two-axis placement questions.",
    engineeringUse:
      "Use Flexbox for nav bars, button rows, and wrapping chips. Use Grid for page shells, tables of cards, and layouts where columns and rows must align.",
    interviewSignal:
      "A strong answer says both tools can work together and chooses based on the content structure, not personal preference."
  },
  q024: {
    mentalModel:
      "A stacking context is a local layering world. Children inside it are layered relative to that context, not the entire page.",
    engineeringUse:
      "Transforms, opacity, positioned elements with `z-index`, filters, isolation, and containment can create these contexts. This explains many overlay and tooltip bugs.",
    interviewSignal:
      "A strong answer rejects `z-index: 9999` as a strategy and suggests a deliberate layering scale."
  },
  q025: {
    mentalModel:
      "Responsive layout should adapt to content pressure, not just named device sizes. Components should reflow when their own space becomes constrained.",
    engineeringUse:
      "Prefer wrapping, min/max constraints, Grid, Flexbox, aspect ratios, and content-based breakpoints. Test long labels and narrow widths early.",
    interviewSignal:
      "A strong answer talks about structural changes, readable line length, touch targets, and container queries."
  },
  q026: {
    mentalModel:
      "CSS custom properties are runtime variables that participate in the cascade. They can be scoped and overridden like other CSS values.",
    engineeringUse:
      "They are ideal for tokens, themes, component variants, and values that JavaScript or user preferences may change. Sass variables cannot do that at runtime.",
    interviewSignal:
      "A strong answer explains cascade scope, fallbacks, inheritance, runtime overrides, and why custom properties are especially useful for theming."
  },
  q027: {
    mentalModel:
      "Layout shift happens when the page changes geometry after users have started reading or interacting.",
    engineeringUse:
      "Reserve space for images, ads, async panels, custom fonts, and dynamic messages. Stable containers and aspect ratios prevent accidental movement.",
    interviewSignal:
      "A strong answer connects the fix to CLS, user trust, and interaction safety, not only visual neatness."
  },
  q028: {
    mentalModel:
      "Navigation starts with resolving the URL, then fetching, parsing, discovering assets, constructing render trees, and painting pixels.",
    engineeringUse:
      "Each step can be slowed by DNS, TLS, redirects, cache misses, blocking CSS, blocking scripts, large images, or hydration work.",
    interviewSignal:
      "A strong answer can move from network to rendering without pretending the browser simply downloads a page and displays it."
  },
  q029: {
    mentalModel:
      "Event delegation uses event bubbling so one parent listener can respond to many child interactions.",
    engineeringUse:
      "It is useful for large or dynamic lists because you avoid attaching and cleaning up many listeners. The handler must still identify the intended target safely.",
    interviewSignal:
      "A strong answer mentions `event.target`, `event.currentTarget`, `closest`, propagation, and cases where delegation is too indirect."
  },
  q030: {
    mentalModel:
      "CORS controls whether browser JavaScript can read a response from another origin. The server grants permission with response headers.",
    engineeringUse:
      "The frontend cannot truly fix missing CORS headers. It can change request shape, but policy must be correct on the server or proxy.",
    interviewSignal:
      "A strong answer explains preflight requests and why Postman can work while browser code fails."
  },
  q031: {
    mentalModel:
      "Rendering work generally flows through style, layout, paint, and composite. Different CSS properties trigger different amounts of that pipeline.",
    engineeringUse:
      "Animating `transform` or `opacity` is usually cheaper than animating `height`, `top`, or layout-affecting dimensions. Measure on real devices when it matters.",
    interviewSignal:
      "A strong answer ties animation choices to frame budget, input responsiveness, and reduced-motion preferences."
  },
  q032: {
    mentalModel:
      "Semantic HTML means choosing elements for meaning and behavior, not just appearance, so the browser understands structure before CSS or JavaScript runs.",
    engineeringUse:
      "Native buttons, links, labels, headings, lists, and form controls give browsers and assistive technology built-in behavior. Recreating them adds unnecessary work.",
    interviewSignal:
      "A strong answer says semantics improve accessibility, testing, maintainability, and user-agent behavior at the same time."
  },
  q033: {
    mentalModel:
      "An accessible form field needs a programmatic name, understandable instructions, clear state, and reachable controls.",
    engineeringUse:
      "Labels should be persistent, errors should be connected to the field, and color should not be the only signal. Keyboard users should be able to recover.",
    interviewSignal:
      "A strong answer mentions `label`, `for`, `aria-describedby`, validation timing, and error announcement."
  },
  q034: {
    mentalModel:
      "Focus is the keyboard user's current position. Focus management keeps that position meaningful when UI changes.",
    engineeringUse:
      "Dialogs, drawers, route changes, validation errors, and dynamic content need deliberate focus behavior. Otherwise users can end up trapped or lost.",
    interviewSignal:
      "A strong answer names where focus goes when something opens, closes, errors, or navigates."
  },
  q035: {
    mentalModel:
      "Accessibility QA combines automated checks with human testing. Automation is useful, but it cannot judge whether a workflow makes sense.",
    engineeringUse:
      "Test semantics, keyboard order, focus visibility, screen reader announcements, contrast, zoom, error states, and empty states before release.",
    interviewSignal:
      "A strong answer treats accessibility as part of acceptance criteria and prioritizes issues by user impact."
  },
  q036: {
    mentalModel:
      "Lazy loading delays noncritical work until it is closer to being needed, so initial loading can focus on what users need first.",
    engineeringUse:
      "Use it for below-the-fold images, routes, heavy components, or optional media. Do not lazy load critical content users need immediately.",
    interviewSignal:
      "A strong answer connects lazy loading to perceived performance, layout stability, preloading, and the risk of delaying important UI."
  },
  q037: {
    mentalModel:
      "A slow list can be slow because there are too many nodes, too many renders, expensive render work, or unstable props.",
    engineeringUse:
      "Measure with React Profiler and browser tools, then choose pagination, virtualization, memoization, data shaping, or off-main-thread work based on evidence.",
    interviewSignal:
      "A strong answer does not jump straight to virtualization; it diagnoses the bottleneck first."
  },
  q038: {
    mentalModel:
      "Core Web Vitals translate performance into user-centered signals: main content visibility, interaction responsiveness, and visual stability.",
    engineeringUse:
      "Improving LCP, INP, and CLS often requires coordinating images, scripts, server response, rendering cost, layout reservations, and third-party code.",
    interviewSignal:
      "A strong answer maps each metric to what the user feels and describes how to measure field data versus lab data."
  },
  q039: {
    mentalModel:
      "Bundle size matters because shipped JavaScript must be downloaded, parsed, compiled, and executed before some UI becomes useful.",
    engineeringUse:
      "Use bundle analysis, dependency review, code splitting, tree shaking, route-level loading, and replacement of heavy libraries where evidence supports it.",
    interviewSignal:
      "A strong answer distinguishes fewer bytes from less main-thread work and mentions budgets or review habits."
  },
  q040: {
    mentalModel:
      "Frontend tests should protect behavior users rely on, not implementation details that can change safely.",
    engineeringUse:
      "Good tests cover forms, navigation, permissions, async states, errors, and critical rendering. They should fail when user value breaks.",
    interviewSignal:
      "A strong answer explains the confidence each test buys and why brittle tests slow teams down."
  },
  q041: {
    mentalModel:
      "A data-fetching component has at least four visible states: loading, success, error, and often empty. The test should drive the component the way a user experiences those states.",
    engineeringUse:
      "Mock the network boundary rather than the component internals. Tools like Mock Service Worker keep tests close to real browser behavior while still making responses predictable.",
    interviewSignal:
      "A strong answer checks async rendering with proper waits, avoids fixed sleeps, and proves both happy path and failure recovery."
  },
  q042: {
    mentalModel:
      "Different test levels answer different confidence questions. Unit tests isolate tricky logic, integration tests prove pieces work together, and end-to-end tests prove critical flows work in the browser.",
    engineeringUse:
      "Use the smallest test that gives the needed confidence. Too many end-to-end tests are slow and flaky; too many unit tests can miss broken wiring.",
    interviewSignal:
      "A strong answer chooses tests based on risk, speed, maintenance cost, and the user behavior being protected."
  },
  q043: {
    mentalModel:
      "Autocomplete is a small system: input state, request timing, results state, keyboard navigation, selection, and failure handling all interact.",
    engineeringUse:
      "Debounce typing, cancel stale requests, expose loading and empty states, support arrow keys and Escape, and make the active option understandable to assistive technology.",
    interviewSignal:
      "A strong answer talks through states and edge cases before naming components, because autocomplete failures usually come from timing and interaction gaps."
  },
  q044: {
    mentalModel:
      "A notification system communicates transient information without stealing the user's place. It needs priority, timing, stacking, dismissal, and accessibility rules.",
    engineeringUse:
      "Not every message should be a toast. Destructive errors, validation failures, and permission problems often belong inline where users can act on them.",
    interviewSignal:
      "A strong answer covers queueing, deduplication, live regions, persistence for important messages, and motion that does not distract."
  },
  q045: {
    mentalModel:
      "A dashboard is a stateful workspace, not just charts. Filters, table data, saved views, loading, permissions, and URL state must stay coherent.",
    engineeringUse:
      "Put shareable state in the URL, keep server data cached and invalidated deliberately, and show stale, loading, empty, and error states clearly.",
    interviewSignal:
      "A strong answer starts with user tasks and data flow, then discusses performance, accessibility, and state ownership."
  },
  q046: {
    mentalModel:
      "A design system is a product-quality platform for shared UI decisions. It includes tokens, primitives, documentation, usage rules, and governance.",
    engineeringUse:
      "Start with repeated product needs, not abstract component collecting. Tokens should encode decisions, components should preserve accessibility, and contribution rules should prevent drift.",
    interviewSignal:
      "A strong answer balances consistency with product flexibility and explains ownership, versioning, migration, and quality gates."
  },
  q047: {
    mentalModel:
      "Loading, empty, error, and success are different user situations, not cosmetic variants of the same screen.",
    engineeringUse:
      "Loading should preserve layout, empty states should explain next steps, errors should offer recovery, and success should confirm the result without blocking flow.",
    interviewSignal:
      "A strong answer includes partial data, permissions, retries, offline behavior, and accessibility announcements."
  },
  q048: {
    mentalModel:
      "State placement follows ownership and sharing. Ask who owns the truth, who needs it, how long it lives, and whether it should survive navigation.",
    engineeringUse:
      "Use component state for local UI, URL state for shareable filters, global state for cross-cutting client concerns, and server-state tools for remote data.",
    interviewSignal:
      "A strong answer avoids putting everything in one store and explains tradeoffs around persistence, synchronization, and debugging."
  },
  q049: {
    mentalModel:
      "A risky frontend change should have a smaller blast radius and a fast recovery path, so a bad assumption affects fewer users and can be reversed quickly.",
    engineeringUse:
      "Use feature flags, staged rollout, monitoring, error tracking, analytics, kill switches, and tests for both enabled and disabled paths.",
    interviewSignal:
      "A strong answer includes rollback, observability, QA strategy, and user impact, not just code review."
  },
  q050: {
    mentalModel:
      "Polish is not decoration. It is the set of details that make a workflow understandable, trustworthy, accessible, and hard to misuse.",
    engineeringUse:
      "Ship speed matters, but core interaction states, accessibility, error handling, and readable copy should not be deferred when they affect task completion.",
    interviewSignal:
      "A strong answer can negotiate scope: protect the essentials now, defer low-risk refinements, and explain the tradeoff clearly."
  },
  q051: {
    mentalModel:
      "XSS happens when untrusted content reaches an executable browser context. The browser treats injected content as code.",
    engineeringUse:
      "Prefer text rendering, escape output, avoid unsafe HTML insertion, sanitize when rich content is required, and add Content Security Policy as defense in depth.",
    interviewSignal:
      "A strong answer identifies the trust boundary and explains why `dangerouslySetInnerHTML` requires extra care."
  },
  q052: {
    mentalModel:
      "Authentication state affects what the app may show, fetch, cache, and keep after logout, so it belongs in architecture decisions rather than a few route checks.",
    engineeringUse:
      "Handle unknown, authenticated, unauthenticated, expired, and forbidden states. Clear private cached data on logout and design 401 recovery around user work.",
    interviewSignal:
      "A strong answer separates identity, permissions, route protection, token handling, and data caching."
  },
  q053: {
    mentalModel:
      "`localStorage` persists across sessions, `sessionStorage` persists for a tab session, and cookies can be sent with HTTP requests.",
    engineeringUse:
      "Use browser storage for nonsecret client preferences and small state. Authentication tokens and private data need careful handling because client storage is inspectable.",
    interviewSignal:
      "A strong answer mentions expiration, SameSite, Secure, HttpOnly cookies, quota, serialization, and logout behavior."
  },
  q054: {
    mentalModel:
      "The History API lets a frontend app change URL and navigation state without a full page load.",
    engineeringUse:
      "Use it for client-side routing, back-button behavior, deep links, filters, tabs, and preserving meaningful navigation history.",
    interviewSignal:
      "A strong answer explains `pushState`, `replaceState`, `popstate`, and why URL state should match user expectations."
  },
  q055: {
    mentalModel:
      "`defer` downloads a script while HTML parsing continues and executes after parsing in document order. `async` executes as soon as it is ready.",
    engineeringUse:
      "`defer` is usually safer for app scripts that depend on DOM order. `async` fits independent third-party scripts where order does not matter.",
    interviewSignal:
      "A strong answer connects script loading to render blocking, dependency order, and first render performance."
  },
  q056: {
    mentalModel:
      "A service worker is a browser-managed worker that can intercept network requests and manage caches.",
    engineeringUse:
      "Use it for offline behavior, repeat-load performance, background sync, or push notifications. Treat update and cache invalidation as core design problems.",
    interviewSignal:
      "A strong answer explains lifecycle, stale assets, cache strategy, and when a service worker is unnecessary complexity."
  },
  q057: {
    mentalModel:
      "TypeScript adds compile-time checks and shared vocabulary for the shapes of data and component contracts.",
    engineeringUse:
      "It catches many mismatches before runtime, improves refactoring, and documents intent for teammates. It does not validate real API responses by itself.",
    interviewSignal:
      "A strong answer explains both value and limits, especially the difference between static types and runtime data."
  },
  q058: {
    mentalModel:
      "`unknown` says the value exists but must be checked before use. `any` says TypeScript should stop checking.",
    engineeringUse:
      "Use `unknown` at boundaries such as JSON, caught errors, and third-party callbacks. Narrow it with guards before passing it into typed code.",
    interviewSignal:
      "A strong answer treats `any` as an escape hatch and explains how uncertainty should stay local."
  },
  q059: {
    mentalModel:
      "TypeScript describes what your code expects, but the server can still send different data at runtime.",
    engineeringUse:
      "Parse or validate responses at the boundary, transform them into UI-friendly shapes, and handle missing, nullable, or invalid fields deliberately.",
    interviewSignal:
      "A strong answer mentions runtime validation, boundary layers, error handling, and keeping components away from raw API messiness."
  },
  q060: {
    mentalModel:
      "Generics let a reusable function or component keep the caller's specific type information.",
    engineeringUse:
      "They are useful for tables, selects, forms, caches, and helpers where the same behavior applies to many item shapes.",
    interviewSignal:
      "A strong answer avoids clever generic gymnastics and values APIs that infer types naturally for callers."
  },
  q061: {
    mentalModel:
      "Hydration attaches client-side React behavior to HTML that was rendered earlier by the server.",
    engineeringUse:
      "Mismatches happen when server and client render different initial output, often from time, random values, locale, browser-only APIs, or changed data.",
    interviewSignal:
      "A strong answer explains deterministic first render, client-only effects, and why mismatches can cause flicker or broken interaction."
  },
  q062: {
    mentalModel:
      "Suspense lets part of the UI wait for data or code while a boundary shows a fallback, keeping the rest of the page stable and interactive.",
    engineeringUse:
      "Good boundaries keep stable parts of the screen visible and place loading UI where users expect content to appear.",
    interviewSignal:
      "A strong answer discusses boundary placement, fallback quality, reveal order, and avoiding disruptive page-wide loading."
  },
  q063: {
    mentalModel:
      "Derived data is calculated from existing state or props. If it can be calculated during render, storing it separately creates another source of truth.",
    engineeringUse:
      "Calculating during render keeps values synchronized automatically. Memoize only when the calculation is actually expensive.",
    interviewSignal:
      "A strong answer explains how duplicated state causes stale values and unnecessary effects."
  },
  q064: {
    mentalModel:
      "`useRef` stores a mutable value that survives renders without causing a render when it changes.",
    engineeringUse:
      "Use refs for DOM nodes, timers, previous values, and imperative handles. Do not use refs to hide UI state that should trigger rendering.",
    interviewSignal:
      "A strong answer distinguishes refs from state and explains safe imperative use without hiding visible UI changes from React."
  },
  q065: {
    mentalModel:
      "A large component usually mixes responsibilities: data loading, state transitions, rendering, event handling, and formatting.",
    engineeringUse:
      "Split around cohesive responsibilities, not arbitrary line counts. Extract components, hooks, and helpers when they reduce cognitive load.",
    interviewSignal:
      "A strong answer warns against over-splitting and explains how to preserve readable data flow."
  },
  q066: {
    mentalModel:
      "Container queries let a component respond to the size of its parent container instead of the viewport.",
    engineeringUse:
      "They are useful for reusable components that appear in sidebars, cards, dashboards, and responsive shells with different available widths.",
    interviewSignal:
      "A strong answer contrasts them with media queries and explains component-level responsiveness."
  },
  q067: {
    mentalModel:
      "Specificity decides which CSS rule wins when multiple rules target the same property, alongside source order, importance, cascade layers, and inheritance.",
    engineeringUse:
      "Keep specificity low and predictable with classes, layers, and consistent architecture. Avoid escalating with `!important` unless you truly need an override boundary.",
    interviewSignal:
      "A strong answer explains source order, specificity weight, cascade layers, and maintainability."
  },
  q068: {
    mentalModel:
      "CSS containment tells the browser that a subtree is isolated in certain ways, such as layout, paint, size, or style.",
    engineeringUse:
      "Containment can improve performance by limiting how far layout or paint work spreads. It can also introduce bugs if the contained area needs outside influence.",
    interviewSignal:
      "A strong answer names both performance value and layout side effects, then explains how to test that containment did not break sizing or overflow."
  },
  q069: {
    mentalModel:
      "An accessible modal creates a temporary focus context. Users should understand what opened, interact inside it, and return to the trigger when it closes.",
    engineeringUse:
      "Use semantic dialog patterns, focus trapping, Escape handling, labelled content, inert background behavior, and sensible scroll management.",
    interviewSignal:
      "A strong answer also says when not to use a modal, because modals interrupt workflow and can make simple tasks feel heavier than necessary."
  },
  q070: {
    mentalModel:
      "Keyboard navigation should follow established patterns for the component type, not arbitrary tab stops.",
    engineeringUse:
      "Use Tab to move between major controls and arrow keys inside composite widgets such as tabs, menus, listboxes, and grids.",
    interviewSignal:
      "A strong answer mentions visible focus, active state, roving tabindex, and avoiding positive `tabindex`."
  },
  q071: {
    mentalModel:
      "ARIA adds semantic information when native HTML cannot express the interaction. It does not add behavior by itself.",
    engineeringUse:
      "Prefer native elements first. If you use ARIA, you must also implement keyboard behavior, focus management, state updates, and accessible names.",
    interviewSignal:
      "A strong answer knows the first rule of ARIA: do not use ARIA when native HTML already works."
  },
  q072: {
    mentalModel:
      "INP measures how responsive the page is to user interactions across the session, so it points to the real delay users feel after clicking, typing, or tapping.",
    engineeringUse:
      "Investigate slow interactions by finding long tasks, expensive event handlers, heavy rendering, layout work, and third-party scripts on the main thread.",
    interviewSignal:
      "A strong answer starts with measurement, then reduces, splits, defers, or moves work based on the bottleneck."
  },
  q073: {
    mentalModel:
      "The critical rendering path is the sequence of work required before the browser can show useful pixels.",
    engineeringUse:
      "Optimize server response, HTML, critical CSS, font loading, render-blocking scripts, images, and hydration so the first useful view appears sooner.",
    interviewSignal:
      "A strong answer distinguishes critical resources from noncritical resources and explains why deferring work improves perceived speed."
  },
  q074: {
    mentalModel:
      "A Web Worker runs JavaScript off the main thread, but it cannot directly touch the DOM, so it is best for pure computation and message-based results.",
    engineeringUse:
      "Use workers for CPU-heavy parsing, searching, image work, or calculations that block interaction. Consider serialization cost and cancellation.",
    interviewSignal:
      "A strong answer compares workers with chunking, debouncing, server-side work, and simpler optimization."
  },
  q075: {
    mentalModel:
      "Testing Library prefers queries that resemble how users and assistive technology find elements.",
    engineeringUse:
      "Role and label queries push components toward semantic, accessible markup. If a role query cannot find a button, the UI may be wrong.",
    interviewSignal:
      "A strong answer values behavior and accessibility over implementation-specific selectors, which keeps tests useful after harmless refactors."
  },
  q076: {
    mentalModel:
      "Optimistic UI shows the expected result before the server confirms it, creating a temporary local version of the truth that must later reconcile with the server.",
    engineeringUse:
      "Tests should prove pending state, success reconciliation, failure rollback, duplicate submissions, and fast repeated edits.",
    interviewSignal:
      "A strong answer covers both UI confidence and data consistency when the server disagrees or returns a slightly different result."
  },
  q077: {
    mentalModel:
      "Flaky tests fail for reasons unrelated to product behavior, such as timing, data, network, or environment instability.",
    engineeringUse:
      "Avoid fixed sleeps, isolate test data, wait for user-visible conditions, control network responses, and reduce dependence on shared global state.",
    interviewSignal:
      "A strong answer treats flake as a trust problem, not just an annoyance, because ignored failures stop protecting releases."
  },
  q078: {
    mentalModel:
      "When a bug is not reproducible, the first job is to narrow conditions, not guess a patch, because unseen timing, data, or environment details are usually the cause.",
    engineeringUse:
      "Collect browser, device, user role, data, feature flags, timing, logs, screenshots, and recent releases. Add instrumentation if evidence is missing.",
    interviewSignal:
      "A strong answer moves from report to hypothesis to verification and leaves better diagnostics behind."
  },
  q079: {
    mentalModel:
      "A memory leak means objects remain reachable after the app no longer needs them, so the browser cannot reclaim memory even though the UI moved on.",
    engineeringUse:
      "Common causes include uncleared timers, subscriptions, event listeners, retained closures, caches, detached DOM nodes, and long-lived references.",
    interviewSignal:
      "A strong answer uses heap snapshots, allocation timelines, reproduction loops, and cleanup in effects."
  },
  q080: {
    mentalModel:
      "Production-only errors often depend on real data, minified builds, environment variables, permissions, timing, or third-party services.",
    engineeringUse:
      "Use error tracking, source maps, release identifiers, logs, feature flags, and reproduction with production-like data.",
    interviewSignal:
      "A strong answer prioritizes user impact, mitigation, root cause, and preventing recurrence."
  },
  q081: {
    mentalModel:
      "Frontend structure should make common changes easy and ownership obvious, so teams can find behavior, reason about dependencies, and avoid accidental shared coupling.",
    engineeringUse:
      "Group feature code together, keep shared foundations boring, and avoid global utility folders that collect unrelated logic.",
    interviewSignal:
      "A strong answer explains when code should remain feature-local and when repeated need justifies a shared abstraction."
  },
  q082: {
    mentalModel:
      "Permissions decide what a user may see and do, but the frontend is only one enforcement layer.",
    engineeringUse:
      "Use backend enforcement for security and frontend checks for experience. Design loading, forbidden, hidden, disabled, and stale-permission states.",
    interviewSignal:
      "A strong answer separates capability checks from UI convenience and handles cached data carefully."
  },
  q083: {
    mentalModel:
      "Micro-frontends split frontend ownership across independently delivered parts of a product.",
    engineeringUse:
      "They can help large organizations, but they add bundle, dependency, routing, design consistency, observability, and testing complexity.",
    interviewSignal:
      "A strong answer starts with the organizational problem and considers modular monolith options before distributed UI."
  },
  q084: {
    mentalModel:
      "A frontend boundary layer translates external contracts into internal UI-friendly shapes, so the rest of the app does not inherit every backend naming or nullability quirk.",
    engineeringUse:
      "It maps API fields, handles defaults, normalizes errors, validates assumptions, and keeps components from depending on backend quirks.",
    interviewSignal:
      "A strong answer explains how boundaries reduce blast radius when APIs change and why validation should happen close to the external data source."
  },
  q085: {
    mentalModel:
      "A rich text editor is a document model plus selection, commands, serialization, sanitization, and accessibility.",
    engineeringUse:
      "Use a proven editor engine unless requirements are tiny. Content editing has many edge cases around paste, undo, keyboard input, IME, and security.",
    interviewSignal:
      "A strong answer discusses data model, selection behavior, serialization, and trust boundaries before toolbar buttons."
  },
  q086: {
    mentalModel:
      "A realtime dashboard has live data, historical context, stale states, errors, and user controls that must not fight incoming updates.",
    engineeringUse:
      "Choose polling, server-sent events, or WebSockets based on freshness needs. Show last updated time and avoid replacing user context unexpectedly.",
    interviewSignal:
      "A strong answer covers transport, caching, backpressure, permissions, and how to communicate stale data."
  },
  q087: {
    mentalModel:
      "File upload is a state machine: chosen, validating, uploading, paused, failed, complete, and sometimes processing.",
    engineeringUse:
      "Handle file size, type, progress, retry, cancellation, drag and drop, keyboard access, and server-side validation.",
    interviewSignal:
      "A strong answer mentions large files, resumable uploads, security checks, and accessible status announcements."
  },
  q088: {
    mentalModel:
      "Offline capability means local writes can happen without immediate server confirmation, so the app must separate local saved state from remote synced state.",
    engineeringUse:
      "Store drafts locally, sync when online, track pending changes, resolve conflicts, and communicate whether data is saved locally or remotely.",
    interviewSignal:
      "A strong answer covers conflict strategy, persistence, service workers, and user trust around unsynced data."
  },
  q089: {
    mentalModel:
      "Destructive actions need friction proportional to risk, so the interface should slow users down only when the cost of a mistake is real.",
    engineeringUse:
      "Use undo for reversible actions, confirmation for high-risk irreversible actions, clear object names, and different treatment for bulk operations.",
    interviewSignal:
      "A strong answer avoids confirmation fatigue and designs recovery into the flow, especially for actions users perform often."
  },
  q090: {
    mentalModel:
      "An empty state explains why there is no content and what the user can do next, so it should reflect the exact reason the screen is empty.",
    engineeringUse:
      "Differentiate first-run empty, filtered empty, permission empty, and error empty. Each needs different copy and action.",
    interviewSignal:
      "A strong answer treats empty states as part of the workflow, not decorative filler, and avoids giving users an irrelevant call to action."
  },
  q091: {
    mentalModel:
      "Frontend and design collaboration turns static intent into real states, constraints, and accessible behavior.",
    engineeringUse:
      "Ask about edge cases, responsive behavior, loading, errors, keyboard use, long copy, and design-system fit before building.",
    interviewSignal:
      "A strong answer shows constructive pushback and shared ownership of product quality, while keeping the conversation grounded in user outcomes."
  },
  q092: {
    mentalModel:
      "A feature flag creates multiple product states that must all be tested and maintained, because users may see different behavior at the same time.",
    engineeringUse:
      "Keep flag boundaries small, handle both branches cleanly, monitor rollout, and remove flags when the decision is complete.",
    interviewSignal:
      "A strong answer calls flags temporary architecture and includes cleanup ownership, rollout monitoring, and a plan for removing dead branches."
  },
  q093: {
    mentalModel:
      "CSRF tricks a browser into sending an authenticated request the user did not intend, usually by abusing cookies that the browser sends automatically.",
    engineeringUse:
      "SameSite cookies, CSRF tokens, origin checks, and avoiding unsafe state changes via simple GET requests reduce risk.",
    interviewSignal:
      "A strong answer distinguishes CSRF from XSS: CSRF abuses ambient authentication, XSS runs attacker code in the page."
  },
  q094: {
    mentalModel:
      "Third-party scripts run inside your user's page and can affect performance, privacy, security, and reliability.",
    engineeringUse:
      "Load only what is necessary, isolate where possible, monitor errors and performance, use CSP, and review data access.",
    interviewSignal:
      "A strong answer treats third-party code as a supply-chain and runtime risk, not just a tag to paste."
  },
  q095: {
    mentalModel:
      "A bundler turns app source files and dependencies into browser-ready assets, deciding how modules, CSS, images, and production chunks reach the user.",
    engineeringUse:
      "It transforms JSX and modern syntax, resolves imports, handles assets, splits chunks, injects environment values, and optimizes production output.",
    interviewSignal:
      "A strong answer connects bundling to dev/prod differences, code splitting, duplicate dependencies, and asset paths."
  },
  q096: {
    mentalModel:
      "Tree shaking removes unused exports from the final bundle when the bundler can prove they are not needed.",
    engineeringUse:
      "It works best with ES modules and can fail when packages have side effects, dynamic imports, or unclear module formats.",
    interviewSignal:
      "A strong answer explains why unused code can still ship and how package design affects optimization."
  },
  q097: {
    mentalModel:
      "Frontend environment variables are build-time or runtime configuration values that may end up visible to users.",
    engineeringUse:
      "Use them for public config such as API base URLs and feature flags. Keep secrets on the server, never in bundled client code.",
    interviewSignal:
      "A strong answer explains build-time replacement, runtime config needs, and what makes a value safe to expose."
  },
  q098: {
    mentalModel:
      "Pagination controls how a large result set is divided, fetched, cached, and navigated, so it affects both data consistency and user orientation.",
    engineeringUse:
      "Keep page state aligned with filters and sorting. Reset or validate page when filters change, and choose offset or cursor pagination based on data behavior.",
    interviewSignal:
      "A strong answer covers loading states, empty pages, URL state, cache keys, and accessibility."
  },
  q099: {
    mentalModel:
      "A client cache stores previously fetched data so the UI can respond quickly without always refetching.",
    engineeringUse:
      "Good caching needs stable keys, freshness rules, invalidation after mutations, background refresh, and clear stale-state communication.",
    interviewSignal:
      "A strong answer treats caching as a consistency strategy, not just a speed trick, and explains how stale data becomes correct again."
  },
  q100: {
    mentalModel:
      "Seniority is judgment applied across product, code, users, and team constraints, not just knowing more syntax or building faster.",
    engineeringUse:
      "A senior engineer reduces ambiguity, chooses simple durable solutions, notices edge cases, improves systems, and communicates tradeoffs clearly.",
    interviewSignal:
      "A strong answer gives examples of technical depth, ownership, mentorship, quality habits, and pragmatic decision-making."
  },
  ...expandedAnswerDepth
};
