import { expandedQuestions } from "./questionExpansion";
import type { Question } from "./questionTypes";

const coreQuestions: Question[] = [
  {
    id: "q001",
    category: "JavaScript",
    level: "Foundational",
    question: "What is the difference between `var`, `let`, and `const`?",
    answer:
      "`var` is function-scoped and can be redeclared, while `let` and `const` are block-scoped. `let` can be reassigned, but `const` cannot be reassigned after initialization. None of these make objects immutable by themselves.",
    reasoning:
      "This matters because scope decides where a value can be read or changed. `var` is easy to misuse in loops, callbacks, and shared closures because it leaks outside block boundaries. In production code, `const` communicates stable binding, `let` communicates intentional reassignment, and both reduce accidental coupling.",
    tests:
      "Scope, mutation discipline, closure behavior, and whether the candidate uses language features to make code easier to reason about.",
    followUps: ["Can a `const` object still be mutated?", "Why does `var` inside a loop often cause callback bugs?"]
  },
  {
    id: "q002",
    category: "JavaScript",
    level: "Foundational",
    question: "Explain closures in JavaScript.",
    answer:
      "A closure happens when a function keeps access to variables from the scope where it was created, even after that outer function has finished running.",
    reasoning:
      "Closures are how JavaScript preserves private state for callbacks, event handlers, memoization, and function factories. The engineering tradeoff is that closed-over values can make async code surprising when the value changes between creation and execution. Good frontend engineers understand both the power and the lifetime cost of keeping references alive.",
    tests:
      "Mental model of lexical scope, async callbacks, private state, and memory retention.",
    followUps: ["How would you use a closure to debounce a function?", "How can closures accidentally keep large objects in memory?"]
  },
  {
    id: "q003",
    category: "JavaScript",
    level: "Foundational",
    question: "What is the event loop?",
    answer:
      "The event loop is the runtime mechanism that lets JavaScript run synchronous code, then process queued asynchronous work such as timers, promises, and browser events.",
    reasoning:
      "JavaScript runs user code on a single main thread in the browser, so long synchronous work blocks rendering and input. Promises run through the microtask queue, which is drained before the browser moves to many other tasks. Understanding this helps engineers prevent frozen UIs, race conditions, and mistaken assumptions about execution order.",
    tests:
      "Async ordering, rendering awareness, performance intuition, and debugging skill.",
    followUps: ["Which runs first: `setTimeout(fn, 0)` or a resolved promise?", "Why can too many microtasks delay rendering?"]
  },
  {
    id: "q004",
    category: "JavaScript",
    level: "Foundational",
    question: "What is the difference between `==` and `===`?",
    answer:
      "`===` compares without type coercion. `==` allows JavaScript to convert values before comparing them, which can produce surprising results.",
    reasoning:
      "The engineering issue is predictability. Frontend code often compares API values, form values, route params, and UI state where types can drift. Using `===` by default makes assumptions visible and pushes conversion to a deliberate boundary.",
    tests:
      "Type safety habits, defensive coding, and ability to explain language pitfalls plainly.",
    followUps: ["When might explicit coercion be useful?", "Why are form input values commonly a source of comparison bugs?"]
  },
  {
    id: "q005",
    category: "JavaScript",
    level: "Intermediate",
    question: "What is debouncing, and when should you use it?",
    answer:
      "Debouncing delays a function until a burst of events has stopped for a chosen amount of time. It is commonly used for search inputs, resize handlers, autosave, and validation.",
    reasoning:
      "Without debouncing, a UI can fire expensive work on every keystroke or pixel of movement. Debouncing protects the browser and the backend while preserving the user's intent: act after they pause. The delay should match the workflow, because too short can still overload work and too long makes the interface feel sluggish.",
    tests:
      "Event handling, performance thinking, user experience timing, and API efficiency.",
    followUps: ["How is throttling different?", "How would you cancel a pending debounced request when a component unmounts?"]
  },
  {
    id: "q006",
    category: "JavaScript",
    level: "Intermediate",
    question: "How do promises differ from async/await?",
    answer:
      "Promises are the underlying abstraction for future values. `async` and `await` are syntax that make promise-based code read more like synchronous control flow.",
    reasoning:
      "`async/await` improves readability, especially when steps depend on earlier async results. Promises are still essential for parallel work with `Promise.all`, cancellation patterns with AbortController, and lower-level composition. A strong answer shows that `await` does not make work blocking for the whole browser, but it does pause the current async function.",
    tests:
      "Async composition, error handling, sequencing versus parallelism, and runtime intuition.",
    followUps: ["When should you prefer `Promise.all` over multiple awaits?", "How do you handle one failed request among many?"]
  },
  {
    id: "q007",
    category: "JavaScript",
    level: "Intermediate",
    question: "What is immutability, and why does it matter in frontend state?",
    answer:
      "Immutability means creating new values instead of changing existing ones in place. In frontend state, it makes changes easier to detect, compare, undo, and debug.",
    reasoning:
      "React and many state tools rely on reference changes to know that something should update. Mutating nested state can make the UI fail to re-render or make old snapshots unreliable. The point is not purity for its own sake; it is making state transitions observable and predictable.",
    tests:
      "State management, rendering behavior, debugging, and practical tradeoffs.",
    followUps: ["What is the cost of copying large objects?", "How can Immer help without changing the mental model?"]
  },
  {
    id: "q008",
    category: "JavaScript",
    level: "Intermediate",
    question: "What are modules, and why are they useful?",
    answer:
      "Modules let files explicitly export and import values. They create boundaries between parts of an application and let bundlers understand dependency graphs.",
    reasoning:
      "A module system helps engineers keep code discoverable and reduces accidental global coupling. It also enables tree-shaking, code splitting, and clearer ownership of behavior. In a frontend app, module boundaries often become architecture boundaries, so naming and export shape matter.",
    tests:
      "Code organization, bundler awareness, dependency management, and maintainability.",
    followUps: ["What is a barrel file?", "How can circular imports cause bugs?"]
  },
  {
    id: "q009",
    category: "JavaScript",
    level: "Advanced",
    question: "What is the difference between shallow copy and deep copy?",
    answer:
      "A shallow copy copies the top-level container but keeps references to nested values. A deep copy recursively copies nested values too.",
    reasoning:
      "Frontend bugs often come from believing a copied object is isolated when nested objects are still shared. A shallow copy is cheap and often sufficient for updating one level of immutable state. A deep copy can be expensive, can lose special object types depending on the method, and may hide a better state-shaping solution.",
    tests:
      "Reference semantics, state updates, performance tradeoffs, and data modeling.",
    followUps: ["What does `structuredClone` handle well?", "When is reshaping state better than deep copying?"]
  },
  {
    id: "q010",
    category: "JavaScript",
    level: "Advanced",
    question: "How would you prevent race conditions in async UI code?",
    answer:
      "Track request identity, cancel stale work with AbortController where possible, and only apply results that still match the current user intent.",
    reasoning:
      "Race conditions happen when slower older work finishes after newer work and overwrites the UI. Search, filters, route changes, and autosave are common places where this appears. The durable fix is to connect the async result to the state that caused it, rather than trusting completion order.",
    tests:
      "Real-world async reliability, request cancellation, state ownership, and edge-case thinking.",
    followUps: ["How would this change for optimistic updates?", "What should happen if cancellation itself fails?"]
  },
  {
    id: "q011",
    category: "React",
    level: "Foundational",
    question: "What problem does React solve?",
    answer:
      "React helps build user interfaces from components whose output is derived from state and props. It makes UI updates predictable by re-rendering views when data changes.",
    reasoning:
      "The core engineering value is not just reusable components. It is the ability to describe the desired UI for a state, then let React handle efficient updates to the DOM. This reduces direct DOM manipulation and makes complex interfaces easier to test and reason about.",
    tests:
      "Conceptual understanding of declarative UI, state-driven rendering, and component composition.",
    followUps: ["What kinds of problems does React not solve by itself?", "Why is declarative UI useful for complex state?"]
  },
  {
    id: "q012",
    category: "React",
    level: "Foundational",
    question: "What is the difference between props and state?",
    answer:
      "Props are inputs passed from a parent component. State is data owned by a component that can change over time and cause re-rendering.",
    reasoning:
      "The distinction is about ownership. If a parent needs to coordinate or persist a value, it should probably own it and pass it down. If a value is local to one interaction, local state keeps the rest of the app simpler.",
    tests:
      "State ownership, component boundaries, and data flow.",
    followUps: ["When should state be lifted up?", "What is prop drilling, and when is it actually fine?"]
  },
  {
    id: "q013",
    category: "React",
    level: "Foundational",
    question: "What is a controlled component?",
    answer:
      "A controlled component receives its current value from React state and reports changes through callbacks. React is the source of truth.",
    reasoning:
      "Controlled inputs are useful when the UI needs validation, formatting, conditional behavior, autosave, or submission state. They cost more renders and code than uncontrolled inputs, so they are not automatically better for every simple form. The engineering choice depends on how much the application needs to know while the user edits.",
    tests:
      "Form architecture, state ownership, and practical React tradeoffs.",
    followUps: ["When would you choose an uncontrolled input?", "How do controlled inputs interact with performance on very large forms?"]
  },
  {
    id: "q014",
    category: "React",
    level: "Foundational",
    question: "Why are keys important when rendering lists?",
    answer:
      "Keys help React match list items between renders. Stable keys preserve the right component state and avoid unnecessary DOM work.",
    reasoning:
      "Using an array index as a key can break when items are inserted, removed, or reordered because the identity follows the position instead of the data. That can put focus, input values, animations, or local state on the wrong row. A stable ID tells React what the item actually is.",
    tests:
      "Rendering identity, list updates, and subtle UI correctness.",
    followUps: ["When is an index key acceptable?", "What user-visible bug can bad keys create in a form list?"]
  },
  {
    id: "q015",
    category: "React",
    level: "Intermediate",
    question: "What should go in `useEffect`?",
    answer:
      "`useEffect` should synchronize React with systems outside render, such as subscriptions, timers, network requests, browser APIs, and imperative libraries.",
    reasoning:
      "Effects are often overused for deriving state that could be calculated during render. That creates extra renders and synchronization bugs. A good engineer treats effects as escape hatches for external coordination, with careful cleanup and dependency management.",
    tests:
      "React mental model, side-effect discipline, lifecycle cleanup, and dependency reasoning.",
    followUps: ["What is an example of state that should not be stored via an effect?", "Why does Strict Mode run effects twice in development?"]
  },
  {
    id: "q016",
    category: "React",
    level: "Intermediate",
    question: "How do you decide whether to memoize a value or component?",
    answer:
      "Memoize when there is a measured or likely performance issue from repeated expensive work or unstable references passed to optimized children.",
    reasoning:
      "Memoization has its own cost: more code, dependency risk, and memory retention. Applying it everywhere can make components harder to understand without improving user experience. The best answer starts with rendering behavior and measurement, then uses `useMemo`, `useCallback`, or `memo` where the benefit is clear.",
    tests:
      "Performance judgment, render mechanics, and avoiding premature complexity.",
    followUps: ["How can memoization hide stale data bugs?", "What would you measure before adding it?"]
  },
  {
    id: "q017",
    category: "React",
    level: "Intermediate",
    question: "What is prop drilling, and how do you handle it?",
    answer:
      "Prop drilling is passing props through components that only forward them to deeper children. You can handle it with composition, context, localizing state, or a state management library.",
    reasoning:
      "Passing props is not automatically bad; it keeps dependencies explicit. It becomes painful when intermediate components know too much about unrelated concerns. The right fix depends on ownership and frequency of change, not simply on the number of levels.",
    tests:
      "Component architecture, state placement, and tradeoff reasoning.",
    followUps: ["When is context worse than prop drilling?", "How can component composition remove drilling?"]
  },
  {
    id: "q018",
    category: "React",
    level: "Intermediate",
    question: "What is React Context good for?",
    answer:
      "Context is good for values many components need, such as theme, authenticated user, locale, permissions, or shared app configuration.",
    reasoning:
      "Context avoids threading global-ish values through every layer, but it is not a universal state store. Frequent context updates can re-render broad parts of the tree if the value shape is not managed carefully. Use it for shared context, not as a reflex for every piece of state.",
    tests:
      "Shared state design, rendering cost, and API boundaries.",
    followUps: ["How can you reduce unnecessary context re-renders?", "What state would you avoid putting in context?"]
  },
  {
    id: "q019",
    category: "React",
    level: "Advanced",
    question: "How would you design a reusable data-fetching hook?",
    answer:
      "It should expose data, loading, error, and refresh behavior while handling cancellation, stale responses, retries where appropriate, and dependency changes.",
    reasoning:
      "A reusable hook is valuable when it captures repeated lifecycle and error behavior, not just because it wraps `fetch`. The hard parts are stale results, unmount cleanup, cache policy, and whether the hook should own transformation or leave it to the caller. In many apps, a proven library like TanStack Query is the better engineering choice.",
    tests:
      "Hook design, async reliability, API ergonomics, and buy-versus-build judgment.",
    followUps: ["When should this become a library concern?", "How would you test stale response handling?"]
  },
  {
    id: "q020",
    category: "React",
    level: "Advanced",
    question: "How do error boundaries work in React?",
    answer:
      "Error boundaries catch rendering errors in their child tree and render a fallback UI. They do not catch errors in event handlers or async callbacks by default.",
    reasoning:
      "Error boundaries keep one broken component from taking down the whole interface. Placement is an architecture decision: broad boundaries protect the app shell, while narrow boundaries let smaller regions fail independently. Good fallbacks help users recover, report, or continue rather than staring at a blank page.",
    tests:
      "Resilience, failure design, React lifecycle behavior, and user recovery thinking.",
    followUps: ["Where would you place boundaries in a dashboard?", "How do you handle event-handler errors?"]
  },
  {
    id: "q021",
    category: "React",
    level: "Advanced",
    question: "What is the difference between server state and client state?",
    answer:
      "Server state comes from outside the app and must be fetched, cached, synchronized, and invalidated. Client state is owned locally by the UI, such as open panels, form drafts, and selected tabs.",
    reasoning:
      "Treating server data like ordinary local state leads to stale views, duplicate fetching, and inconsistent caches. Treating local UI state like server state adds needless machinery. Strong architecture separates where truth lives and chooses tools around that boundary.",
    tests:
      "State architecture, caching, synchronization, and product correctness.",
    followUps: ["What belongs in URL state?", "How do optimistic updates change this boundary?"]
  },
  {
    id: "q022",
    category: "CSS",
    level: "Foundational",
    question: "Explain the CSS box model.",
    answer:
      "The box model describes how content, padding, border, and margin determine an element's size and spacing. With `box-sizing: border-box`, width includes content, padding, and border.",
    reasoning:
      "The box model is the basis for layout debugging. Without it, engineers misread why elements overflow, why spacing feels inconsistent, or why a component grows unexpectedly. Setting `border-box` globally usually makes component sizing more predictable.",
    tests:
      "Layout fundamentals, debugging skill, and predictable component sizing.",
    followUps: ["Why does margin collapse happen?", "How does `border-box` change width calculations?"]
  },
  {
    id: "q023",
    category: "CSS",
    level: "Foundational",
    question: "When would you use Flexbox versus CSS Grid?",
    answer:
      "Flexbox is best for one-dimensional layout along a row or column. Grid is best for two-dimensional layout where rows and columns both matter.",
    reasoning:
      "Choosing the right layout system makes the code simpler and more robust. Flexbox shines for nav bars, toolbars, and distributing items in one axis. Grid shines for page structure, dashboards, card arrangements, and layouts that need alignment across both axes.",
    tests:
      "Layout system choice, responsive design, and maintainable CSS.",
    followUps: ["Can Flexbox and Grid be used together?", "How would you build a responsive question list?"]
  },
  {
    id: "q024",
    category: "CSS",
    level: "Intermediate",
    question: "What creates a stacking context?",
    answer:
      "A stacking context can be created by properties such as positioned elements with `z-index`, `opacity` below 1, transforms, filters, isolation, and some containment rules.",
    reasoning:
      "`z-index` bugs are rarely solved by using a bigger number forever. Once an element is inside a stacking context, it competes within that context rather than the whole page. Understanding this prevents fragile layering for menus, tooltips, sticky headers, and overlays.",
    tests:
      "CSS debugging depth, layering, and component reliability.",
    followUps: ["Why might `z-index: 9999` still fail?", "How would you structure overlay layers in a design system?"]
  },
  {
    id: "q025",
    category: "CSS",
    level: "Intermediate",
    question: "How do you make a layout responsive without making it fragile?",
    answer:
      "Use intrinsic layout tools like Grid, Flexbox, minmax, wrapping, and sensible breakpoints based on content needs rather than device names.",
    reasoning:
      "Responsive design is not just shrinking desktop. Components should reflow when their content needs a different structure. Stable dimensions, readable line lengths, and tested edge cases matter more than targeting a list of popular screen sizes.",
    tests:
      "Responsive strategy, content-first layout, and practical QA thinking.",
    followUps: ["What would you test at 320px wide?", "How do container queries change the approach?"]
  },
  {
    id: "q026",
    category: "CSS",
    level: "Intermediate",
    question: "What are CSS custom properties useful for?",
    answer:
      "CSS custom properties let you define reusable values that cascade, can be themed, and can change at runtime without recompiling CSS.",
    reasoning:
      "They are especially useful for design tokens such as color, spacing, radius, and component states. Because they participate in the cascade, they can be scoped to themes, components, or user preferences. That makes them more dynamic than preprocessor variables.",
    tests:
      "Theming, cascade knowledge, and maintainable styling.",
    followUps: ["How are custom properties different from Sass variables?", "How would you support dark mode with them?"]
  },
  {
    id: "q027",
    category: "CSS",
    level: "Advanced",
    question: "How do you avoid layout shift?",
    answer:
      "Reserve space for dynamic content, define image dimensions or aspect ratios, avoid inserting content above existing content unexpectedly, and load fonts carefully.",
    reasoning:
      "Layout shift harms perceived quality because users lose their place or tap the wrong target. In frontend engineering, the fix is often not a performance trick but a layout contract: the browser should know how much space something will need before it arrives. Skeletons, aspect ratios, and stable containers make loading feel intentional.",
    tests:
      "Core Web Vitals awareness, layout engineering, and loading-state design.",
    followUps: ["How can web fonts cause layout shift?", "How would you reserve space for async cards?"]
  },
  {
    id: "q028",
    category: "Browser",
    level: "Foundational",
    question: "What happens when a user enters a URL and presses Enter?",
    answer:
      "The browser resolves the address, establishes a network connection, requests the resource, receives HTML, parses it, discovers assets, builds the DOM and CSSOM, then renders pixels.",
    reasoning:
      "This question tests whether the candidate understands the full path from navigation to UI. Each step has performance and reliability implications: DNS, TLS, caching, blocking scripts, CSS, image loading, and hydration can all affect the user. A strong frontend engineer can connect low-level browser behavior to visible experience.",
    tests:
      "Browser fundamentals, networking, rendering, and performance thinking.",
    followUps: ["Where can caching help?", "Which resources commonly block first render?"]
  },
  {
    id: "q029",
    category: "Browser",
    level: "Intermediate",
    question: "What is event delegation?",
    answer:
      "Event delegation attaches one listener to a parent and uses event bubbling to handle events from matching children.",
    reasoning:
      "Delegation reduces listener count and works well for dynamic lists where items are added or removed. It relies on understanding event targets, current targets, bubbling, and sometimes composed paths. The tradeoff is that the handler must carefully identify the intended element.",
    tests:
      "DOM events, performance, dynamic UI behavior, and event propagation.",
    followUps: ["When would delegation be a bad fit?", "How does `stopPropagation` affect it?"]
  },
  {
    id: "q030",
    category: "Browser",
    level: "Intermediate",
    question: "What is CORS?",
    answer:
      "CORS is a browser security mechanism that controls whether a page can read responses from another origin. The server must opt in with appropriate headers.",
    reasoning:
      "CORS is often misunderstood as a frontend setting, but the browser enforces it based on server policy. This protects users from malicious pages reading private data from other sites. Frontend engineers need to explain the problem clearly so fixes happen in the right place.",
    tests:
      "Security fundamentals, browser policy, and cross-team debugging.",
    followUps: ["What is a preflight request?", "Why can Postman succeed when the browser fails?"]
  },
  {
    id: "q031",
    category: "Browser",
    level: "Advanced",
    question: "How does the browser rendering pipeline affect animation choices?",
    answer:
      "Style, layout, paint, and composite work have different costs. Animating transform and opacity is usually cheaper than animating layout-affecting properties.",
    reasoning:
      "Animations that trigger layout or paint can compete with input and rendering on the main thread. Smooth motion depends on keeping frame work under budget, especially on lower-end devices. This is why engineering quality includes choosing properties the browser can update efficiently.",
    tests:
      "Rendering performance, animation judgment, and device-aware engineering.",
    followUps: ["Why is animating `height` often expensive?", "How would you respect reduced-motion preferences?"]
  },
  {
    id: "q032",
    category: "Accessibility",
    level: "Foundational",
    question: "What does semantic HTML mean, and why does it matter?",
    answer:
      "Semantic HTML uses elements according to their meaning, such as buttons for actions, links for navigation, headings for structure, and labels for form fields.",
    reasoning:
      "Semantics give browsers, assistive technologies, search engines, and test tools a shared understanding of the interface. Recreating native behavior with generic elements adds keyboard, focus, name, role, and state work that native elements already provide. Semantic choices usually make code simpler and more accessible at the same time.",
    tests:
      "Accessibility fundamentals, platform knowledge, and maintainable UI habits.",
    followUps: ["When should something be a button instead of a link?", "What behavior do you get for free with a native button?"]
  },
  {
    id: "q033",
    category: "Accessibility",
    level: "Foundational",
    question: "How do you make a form field accessible?",
    answer:
      "Use a real label associated with the input, provide clear error text, connect helper or error text with ARIA when needed, and make sure keyboard and screen reader users can understand the field state.",
    reasoning:
      "Placeholders are not labels because they disappear and are not always announced as users need. Error messages should tell users what happened and how to fix it. Good form accessibility improves completion rates for everyone, not only screen reader users.",
    tests:
      "Forms, labels, validation, user recovery, and inclusive product thinking.",
    followUps: ["How would you announce a validation error?", "Why is color alone not enough for errors?"]
  },
  {
    id: "q034",
    category: "Accessibility",
    level: "Intermediate",
    question: "What is focus management?",
    answer:
      "Focus management is controlling where keyboard focus goes as the UI changes, especially in dialogs, navigation, routed pages, and dynamic content.",
    reasoning:
      "When the visual UI changes but keyboard focus stays somewhere invisible or irrelevant, keyboard and assistive tech users get lost. Good focus management preserves context, moves focus only when it helps, and lets users continue their task. It is a behavior requirement, not a polish detail.",
    tests:
      "Keyboard accessibility, dynamic UI state, and modal/routing behavior.",
    followUps: ["Where should focus go when a dialog opens and closes?", "How should route changes handle focus?"]
  },
  {
    id: "q035",
    category: "Accessibility",
    level: "Advanced",
    question: "How would you approach accessibility QA for a new feature?",
    answer:
      "Start with semantic review, keyboard testing, screen reader spot checks, color contrast checks, automated tooling, and user-flow testing for errors and empty states.",
    reasoning:
      "Automated tools catch useful issues but cannot tell whether the experience makes sense. Manual keyboard testing reveals focus traps, missing states, and impossible workflows. A mature QA approach treats accessibility as part of definition of done, not a final audit.",
    tests:
      "Quality process, inclusive design, and practical testing judgment.",
    followUps: ["What do automated tools miss?", "How would you prioritize accessibility bugs?"]
  },
  {
    id: "q036",
    category: "Performance",
    level: "Foundational",
    question: "What is lazy loading?",
    answer:
      "Lazy loading delays loading work until it is needed, such as loading below-the-fold images or route code only when the user reaches it.",
    reasoning:
      "The goal is to reduce initial load cost so users can see and interact with the important part sooner. Lazy loading should not delay critical content or create layout jumps. Good performance work is about sequencing: load what matters now, defer what can wait.",
    tests:
      "Loading strategy, user-perceived performance, and prioritization.",
    followUps: ["What should not be lazy-loaded?", "How do you avoid layout shift with lazy images?"]
  },
  {
    id: "q037",
    category: "Performance",
    level: "Intermediate",
    question: "How do you improve a slow React list?",
    answer:
      "Measure first, then reduce unnecessary renders, use stable keys, avoid expensive work during render, paginate or virtualize large lists, and move heavy work off the critical path.",
    reasoning:
      "A slow list can come from too many DOM nodes, too much rendering work, unstable props, or expensive calculations. Virtualization helps when DOM size is the problem, but it adds complexity and accessibility considerations. The best fix depends on the bottleneck.",
    tests:
      "Performance diagnosis, React rendering, DOM cost, and measured decision-making.",
    followUps: ["When is virtualization overkill?", "How would you profile the list?"]
  },
  {
    id: "q038",
    category: "Performance",
    level: "Intermediate",
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are user-centered metrics for loading speed, responsiveness, and visual stability. Current examples include LCP, INP, and CLS.",
    reasoning:
      "These metrics matter because they map technical performance to what users actually feel: how soon the main content appears, whether interactions respond quickly, and whether the page shifts unexpectedly. They also force frontend engineers to think beyond bundle size alone. Improving them often requires product, design, backend, and frontend coordination.",
    tests:
      "Modern web performance literacy and ability to connect metrics to user experience.",
    followUps: ["What can hurt LCP?", "How would you improve INP on a complex page?"]
  },
  {
    id: "q039",
    category: "Performance",
    level: "Advanced",
    question: "How would you reduce JavaScript bundle size?",
    answer:
      "Analyze the bundle, remove unused dependencies, split code by route or feature, prefer smaller libraries when appropriate, tree-shake correctly, and avoid shipping server-only or admin-only code to every user.",
    reasoning:
      "Bundle optimization starts with evidence because intuition about package cost is often wrong. The user-visible goal is faster startup and less main-thread work, not just a smaller number in a report. The best teams make bundle budgets and dependency review part of normal engineering practice.",
    tests:
      "Build tooling, dependency judgment, startup performance, and operational discipline.",
    followUps: ["How can tree-shaking fail?", "What tradeoffs come with code splitting?"]
  },
  {
    id: "q040",
    category: "Testing",
    level: "Foundational",
    question: "What should frontend tests give a team confidence about?",
    answer:
      "They should prove important user behavior works, critical states are handled, and regressions are caught before users see them.",
    reasoning:
      "Tests are not valuable because they cover lines; they are valuable because they protect behavior. Frontend tests should focus on the things users and the business rely on: forms, navigation, permissions, error recovery, and data display. Good tests survive refactors because they are written around outcomes rather than implementation details.",
    tests:
      "Testing philosophy, product thinking, and maintainable test design.",
    followUps: ["What is a brittle frontend test?", "When is a unit test better than an end-to-end test?"]
  },
  {
    id: "q041",
    category: "Testing",
    level: "Intermediate",
    question: "How do you test a component that fetches data?",
    answer:
      "Mock the network boundary, render the component in realistic states, and assert what the user sees for loading, success, empty, and error outcomes.",
    reasoning:
      "The component's contract is not that `fetch` was called in a particular way; it is that the user gets the right interface for each state. Mocking at the network layer keeps tests close to real behavior while avoiding slow and flaky external services. Including error and empty states prevents the common bug where only happy paths are designed.",
    tests:
      "Async testing, state coverage, and user-centered assertions.",
    followUps: ["Why use Mock Service Worker?", "How do you avoid waiting-related flaky tests?"]
  },
  {
    id: "q042",
    category: "Testing",
    level: "Advanced",
    question: "How would you decide between unit, integration, and end-to-end tests?",
    answer:
      "Use unit tests for isolated logic, integration tests for component behavior across boundaries, and end-to-end tests for the most important user flows through the real app.",
    reasoning:
      "Each test type buys different confidence at different cost. End-to-end tests are powerful but slower and more fragile, so they should protect high-value paths. Integration tests often give the best frontend return because they exercise real UI behavior without requiring the whole production environment.",
    tests:
      "Testing strategy, risk management, and cost-aware quality decisions.",
    followUps: ["What flows deserve E2E coverage?", "How do you keep E2E tests stable?"]
  },
  {
    id: "q043",
    category: "System Design",
    level: "Intermediate",
    question: "Design a search autocomplete component.",
    answer:
      "It should manage input state, debounced queries, loading and error states, keyboard navigation, highlighted options, selection, empty results, stale request protection, and accessible combobox semantics.",
    reasoning:
      "Autocomplete looks simple but combines async data, input responsiveness, keyboard behavior, accessibility, and race conditions. A strong design separates query text from selected value and handles stale results when users type quickly. The component should also define when it searches, how it cancels, and how it communicates status.",
    tests:
      "Component architecture, async UI, accessibility, and edge-case depth.",
    followUps: ["How would you handle very large result sets?", "What ARIA pattern applies here?"]
  },
  {
    id: "q044",
    category: "System Design",
    level: "Intermediate",
    question: "Design a frontend notification/toast system.",
    answer:
      "Create a central notification store or provider, define message types and lifetimes, support manual dismissal, avoid duplicate spam, and keep important errors available beyond a disappearing toast.",
    reasoning:
      "Toasts are easy to overuse. They work for transient confirmation, but they are poor for information users must act on or reference later. A good system includes accessibility announcements, focus-safe behavior, and rules for priority so messages do not compete with the task.",
    tests:
      "Shared UI infrastructure, accessibility, product judgment, and state coordination.",
    followUps: ["Which messages should not be toasts?", "How should screen readers be notified?"]
  },
  {
    id: "q045",
    category: "System Design",
    level: "Advanced",
    question: "Design a dashboard with filters, tables, and saved views.",
    answer:
      "Model filter state clearly, keep shareable state in the URL when useful, separate server state from local UI state, support loading and empty states, and make saved views explicit user-owned objects.",
    reasoning:
      "The main challenge is state ownership. Filters affect data fetching, table state affects presentation, and saved views need persistence, naming, permissions, and conflict handling. Good design lets users share, return, and recover without losing context.",
    tests:
      "Frontend architecture, URL state, data fetching, product workflows, and persistence boundaries.",
    followUps: ["Which state belongs in the URL?", "How would permissions affect saved views?"]
  },
  {
    id: "q046",
    category: "System Design",
    level: "Advanced",
    question: "How would you architect a design system for a growing frontend team?",
    answer:
      "Start with shared tokens, accessible primitives, documented usage, versioning, contribution rules, and examples that match real product patterns.",
    reasoning:
      "A design system is not just a component library. It is a contract between design and engineering that improves consistency and speed when it reflects actual product needs. The hard work is governance: deciding what belongs in the system, how changes roll out, and how escape hatches are handled.",
    tests:
      "Design systems, team scaling, API design, accessibility, and maintainability.",
    followUps: ["How do you prevent one-off component variants?", "What should be a primitive versus a product component?"]
  },
  {
    id: "q047",
    category: "Product Engineering",
    level: "Foundational",
    question: "How do you handle loading, empty, error, and success states?",
    answer:
      "Design each state intentionally, keep layout stable, explain what is happening, and give users a useful next action when something goes wrong or no data exists.",
    reasoning:
      "These states are part of the product, not edge-case decoration. Loading should preserve context, empty states should guide the next step, errors should support recovery, and success should confirm the outcome without blocking flow. Many real quality issues come from only designing the happy path.",
    tests:
      "Product maturity, UX completeness, and resilient frontend design.",
    followUps: ["What makes an empty state useful?", "When should an error be inline versus global?"]
  },
  {
    id: "q048",
    category: "Product Engineering",
    level: "Intermediate",
    question: "How do you decide what belongs in component state, URL state, global state, or server state?",
    answer:
      "Put state where its owner and consumers naturally live: local UI details in components, shareable navigation state in the URL, cross-cutting client concerns in global state, and backend-owned data in server-state tools.",
    reasoning:
      "State placement is one of the highest-leverage frontend decisions. Poor placement creates duplicated truth, impossible back-button behavior, stale data, or components that know too much. The practical test is who owns the value, who needs it, whether it should survive refresh, and whether it should be shareable.",
    tests:
      "State architecture, product behavior, and maintainability.",
    followUps: ["Where would selected table filters live?", "Where would a dropdown open state live?"]
  },
  {
    id: "q049",
    category: "Product Engineering",
    level: "Advanced",
    question: "How would you roll out a risky frontend change safely?",
    answer:
      "Use feature flags, progressive rollout, monitoring, error tracking, fallback paths, and a clear rollback plan. Add tests around critical behavior before release.",
    reasoning:
      "Frontend releases affect real user workflows immediately. A safe rollout limits blast radius and gives the team evidence before full exposure. The mature answer includes observability and recovery, not just code review and hope.",
    tests:
      "Release engineering, risk management, observability, and production ownership.",
    followUps: ["What would you monitor after release?", "How would you test both flag states?"]
  },
  {
    id: "q050",
    category: "Product Engineering",
    level: "Advanced",
    question: "How do you balance polish with shipping speed?",
    answer:
      "Define the user-critical quality bar, ship the smallest coherent version, and defer polish only when it does not harm trust, accessibility, comprehension, or task completion.",
    reasoning:
      "Polish is not decoration when it affects whether users understand and trust the product. But infinite refinement can delay learning. Strong engineers distinguish between quality that protects the workflow and enhancements that can safely wait.",
    tests:
      "Product judgment, prioritization, UX maturity, and communication.",
    followUps: ["What polish should never be deferred?", "How would you explain a quality tradeoff to a PM?"]
  },
  {
    id: "q051",
    category: "Security",
    level: "Intermediate",
    question: "What is XSS, and how do frontend engineers prevent it?",
    answer:
      "Cross-site scripting happens when untrusted content is executed as code in a user's browser. Prevention includes escaping output, avoiding unsafe HTML injection, using trusted sanitization, applying Content Security Policy, and treating user-generated content carefully.",
    reasoning:
      "XSS is severe because it runs in the user's trusted session. Frameworks help by escaping values by default, but engineers can bypass those protections with unsafe APIs. The right mindset is to treat any external content as hostile until it has been handled by a safe rendering path.",
    tests:
      "Browser security, framework safety boundaries, and production risk awareness.",
    followUps: ["Why is `dangerouslySetInnerHTML` risky?", "What does CSP add if escaping already exists?"]
  },
  {
    id: "q052",
    category: "Security",
    level: "Advanced",
    question: "How should authentication state influence frontend architecture?",
    answer:
      "The frontend should represent auth state clearly, gate routes and actions for user experience, refresh or expire sessions safely, and rely on the backend for final authorization.",
    reasoning:
      "Client-side route guards improve navigation, but they are not security boundaries by themselves. Auth state also affects caching, data visibility, error handling, and how the app recovers when a session expires mid-task. Good architecture prevents leaking stale private data and makes re-authentication understandable.",
    tests:
      "Security boundaries, app state, routing, caching, and user recovery.",
    followUps: ["What should happen to cached private data after logout?", "How do you handle a 401 while editing a form?"]
  },
  {
    id: "q053",
    category: "Web Platform",
    level: "Foundational",
    question: "What is the difference between localStorage, sessionStorage, and cookies?",
    answer:
      "localStorage persists until explicitly cleared, sessionStorage lasts for the current tab session, and cookies are sent with matching HTTP requests unless configured otherwise.",
    reasoning:
      "Storage choice affects security, performance, privacy, and product behavior. Cookies are useful for server-visible session data but need secure flags and size discipline. Web storage is convenient for client-only preferences, but it is accessible to JavaScript and should not hold sensitive secrets.",
    tests:
      "Browser storage, security tradeoffs, persistence behavior, and practical product judgment.",
    followUps: ["Where would you store a theme preference?", "Why should auth tokens be handled carefully?"]
  },
  {
    id: "q054",
    category: "Web Platform",
    level: "Intermediate",
    question: "What is the History API useful for?",
    answer:
      "The History API lets frontend apps update and respond to browser navigation state without forcing a full page reload.",
    reasoning:
      "Single-page apps still need URLs that users can share, bookmark, refresh, and navigate with the back button. The History API is the bridge between app state and browser expectations. A strong engineer treats URL behavior as user experience, not an implementation detail.",
    tests:
      "Routing fundamentals, browser behavior, and state persistence.",
    followUps: ["What state should appear in the URL?", "What can go wrong with custom back-button behavior?"]
  },
  {
    id: "q055",
    category: "Web Platform",
    level: "Intermediate",
    question: "What is the difference between `defer` and `async` on script tags?",
    answer:
      "`defer` downloads scripts while parsing HTML and executes them after parsing in document order. `async` downloads scripts while parsing and executes them as soon as they are ready, which may be out of order.",
    reasoning:
      "Script loading strategy can change first render, execution order, and whether dependencies are available. `defer` is often safer for app bundles that need DOM readiness and predictable order. `async` is useful for independent scripts such as analytics, but it should not block or break the core experience.",
    tests:
      "HTML loading behavior, performance basics, and dependency awareness.",
    followUps: ["Why can render-blocking scripts hurt performance?", "Which would you use for a third-party analytics script?"]
  },
  {
    id: "q056",
    category: "Web Platform",
    level: "Advanced",
    question: "What are service workers used for?",
    answer:
      "Service workers run separately from the page and can intercept network requests, cache assets, support offline behavior, and power features such as push notifications.",
    reasoning:
      "Service workers can make apps faster and more resilient, but they also introduce cache invalidation and update complexity. A stale service worker can keep serving old code after a deployment if the lifecycle is mishandled. The engineering value is high when offline or repeat-load performance matters, but the operational cost must be respected.",
    tests:
      "Progressive web app architecture, caching strategy, and deployment risk awareness.",
    followUps: ["How do you avoid serving stale assets forever?", "When is a service worker unnecessary?"]
  },
  {
    id: "q057",
    category: "TypeScript",
    level: "Foundational",
    question: "What value does TypeScript add to frontend development?",
    answer:
      "TypeScript catches many type mistakes before runtime, documents data shapes, improves editor feedback, and makes refactors safer.",
    reasoning:
      "Frontend code sits between users, APIs, state, and UI components, so shape mismatches are common. TypeScript helps teams make contracts explicit. It does not prove the app is correct, but it reduces a large class of preventable mistakes and makes intent easier to communicate.",
    tests:
      "Type system purpose, team-scale maintainability, and realistic expectations.",
    followUps: ["What kinds of bugs does TypeScript not catch?", "Why still validate API responses at runtime?"]
  },
  {
    id: "q058",
    category: "TypeScript",
    level: "Intermediate",
    question: "What is the difference between `unknown` and `any`?",
    answer:
      "`any` turns off type checking for a value. `unknown` forces you to narrow or validate the value before using it.",
    reasoning:
      "`unknown` is safer at boundaries where the program truly does not know what it received, such as JSON, third-party callbacks, or caught errors. It keeps uncertainty local and forces deliberate checks. `any` spreads uncertainty through the codebase and makes type safety less meaningful.",
    tests:
      "Boundary safety, type narrowing, and disciplined use of escape hatches.",
    followUps: ["How would you narrow an `unknown` error?", "When is `any` acceptable?"]
  },
  {
    id: "q059",
    category: "TypeScript",
    level: "Intermediate",
    question: "How should frontend code handle API response types?",
    answer:
      "Define the expected shape close to the API boundary, validate important data at runtime when it comes from outside the app, then pass trusted shapes into the UI.",
    reasoning:
      "Static types describe what the code expects, not what the server actually sent. If the backend changes or data is malformed, TypeScript alone cannot protect runtime behavior. Treating API parsing as a boundary keeps UI components simpler and makes failures easier to diagnose.",
    tests:
      "Runtime validation, type boundaries, and API integration maturity.",
    followUps: ["Where would you put response transformation?", "What happens when a nullable field is assumed to exist?"]
  },
  {
    id: "q060",
    category: "TypeScript",
    level: "Advanced",
    question: "How do generics help with reusable frontend utilities?",
    answer:
      "Generics let a function or component preserve the relationship between input and output types without hard-coding a single data shape.",
    reasoning:
      "The value is not making code clever; it is keeping reusable code precise. A table, select, cache helper, or form utility can work with many item shapes while still protecting the caller from mismatches. Overly abstract generics can become unreadable, so the best use keeps the API simpler for consumers.",
    tests:
      "Reusable API design, type inference, and abstraction judgment.",
    followUps: ["When would a generic make an API worse?", "How can inference reduce the need for explicit types?"]
  },
  {
    id: "q061",
    category: "React",
    level: "Advanced",
    question: "What is hydration, and why can hydration errors happen?",
    answer:
      "Hydration is when React attaches event handlers and client behavior to HTML that was rendered on the server. Errors happen when the server-rendered HTML does not match what the client expects to render.",
    reasoning:
      "Hydration mismatches can come from time-dependent values, random IDs, browser-only APIs, locale differences, or data that changes between server and client. The user may see flicker, broken interactivity, or console errors. Good SSR code keeps initial render deterministic and delays client-only differences until after hydration.",
    tests:
      "SSR mental model, rendering determinism, and production debugging.",
    followUps: ["Why is `Date.now()` risky during SSR render?", "How would you render browser-only content safely?"]
  },
  {
    id: "q062",
    category: "React",
    level: "Advanced",
    question: "How do Suspense and loading boundaries improve user experience?",
    answer:
      "Suspense lets parts of the UI wait for asynchronous work while nearby boundaries show fallbacks, keeping the rest of the interface stable.",
    reasoning:
      "The engineering idea is coordinated loading. Instead of each component inventing its own spinner, boundaries let the app decide where waiting should be visible and how much UI stays interactive. Good boundaries preserve context and avoid replacing the whole page for small data delays.",
    tests:
      "Modern React loading strategy, progressive rendering, and UX state design.",
    followUps: ["Where would you place Suspense boundaries?", "What makes a fallback feel disruptive?"]
  },
  {
    id: "q063",
    category: "React",
    level: "Intermediate",
    question: "Why should derived data often be calculated during render instead of stored in state?",
    answer:
      "If a value can be directly calculated from props or existing state, storing it separately creates duplicated truth and synchronization risk.",
    reasoning:
      "Duplicated state can fall out of sync and usually requires effects to patch it back together. Calculating derived values during render keeps the UI honest: one source changes, the derived output follows. Memoize only when the calculation is meaningfully expensive.",
    tests:
      "React state discipline, effect avoidance, and data-flow clarity.",
    followUps: ["When would derived state be legitimate?", "How does this reduce extra renders?"]
  },
  {
    id: "q064",
    category: "React",
    level: "Intermediate",
    question: "What is the purpose of `useRef`?",
    answer:
      "`useRef` stores a mutable value that persists across renders without causing a re-render when it changes. It is also used to reference DOM nodes.",
    reasoning:
      "Refs are useful for imperative needs: focusing an input, storing timer IDs, tracking previous values, or integrating with non-React APIs. They should not be used to hide state that the UI depends on, because ref changes do not automatically update what users see.",
    tests:
      "React rendering behavior, imperative escape hatches, and state correctness.",
    followUps: ["Why not store visible UI state in a ref?", "How would you focus an input after validation fails?"]
  },
  {
    id: "q065",
    category: "React",
    level: "Advanced",
    question: "How would you split a large React component responsibly?",
    answer:
      "Split around meaningful responsibilities: data loading, state ownership, layout structure, and reusable interaction pieces. Avoid splitting purely by line count.",
    reasoning:
      "A large component is not automatically bad if it expresses one cohesive workflow. Splitting helps when it clarifies ownership, reduces repeated logic, or isolates re-render cost. Splitting too aggressively can create prop tunnels and make the workflow harder to read.",
    tests:
      "Component architecture, maintainability, and refactor judgment.",
    followUps: ["What are signs a split made things worse?", "How do custom hooks fit into this?"]
  },
  {
    id: "q066",
    category: "CSS",
    level: "Advanced",
    question: "What are container queries, and when are they useful?",
    answer:
      "Container queries let styles respond to the size or characteristics of a containing element rather than the viewport.",
    reasoning:
      "Viewport breakpoints are page-level guesses. Components often need to adapt based on the space they actually receive, especially in dashboards, side panels, cards, and resizable layouts. Container queries make components more portable because their responsive behavior travels with them.",
    tests:
      "Modern CSS, component portability, and responsive design maturity.",
    followUps: ["How is this different from media queries?", "Where would container queries help in a dashboard?"]
  },
  {
    id: "q067",
    category: "CSS",
    level: "Intermediate",
    question: "How does CSS specificity work?",
    answer:
      "Specificity determines which CSS rule wins when multiple rules target the same property. Inline styles, IDs, classes, attributes, pseudo-classes, elements, and source order all affect the result.",
    reasoning:
      "Specificity problems make CSS hard to change because engineers start escalating selectors instead of fixing structure. A maintainable system keeps specificity low and predictable through tokens, layers, component boundaries, and consistent naming. The goal is styling that can be overridden intentionally, not accidentally.",
    tests:
      "CSS cascade, maintainability, and debugging discipline.",
    followUps: ["Why can `!important` become a problem?", "How can cascade layers help?"]
  },
  {
    id: "q068",
    category: "CSS",
    level: "Advanced",
    question: "What is the purpose of CSS containment?",
    answer:
      "CSS containment lets developers tell the browser that an element's layout, paint, size, or style can be isolated from the rest of the page.",
    reasoning:
      "Containment can improve performance by reducing how much of the page the browser must reconsider after changes. It is useful for independent widgets, large lists, and complex sections. It must be used carefully because containment can affect sizing, positioning, and visibility behavior.",
    tests:
      "Rendering performance, modern CSS tools, and careful optimization.",
    followUps: ["How does `content-visibility` relate?", "What bugs can containment introduce?"]
  },
  {
    id: "q069",
    category: "Accessibility",
    level: "Intermediate",
    question: "What makes an accessible modal dialog?",
    answer:
      "It has a clear accessible name, traps focus while open, returns focus when closed, supports Escape when appropriate, prevents background interaction, and uses correct dialog semantics.",
    reasoning:
      "A modal changes the user's interaction context. Visual users see the overlay, but keyboard and screen reader users need focus and semantics to communicate that context. Poor dialogs strand users, hide content from the interaction model, or make the page impossible to navigate.",
    tests:
      "Focus management, ARIA usage, keyboard behavior, and inclusive interaction design.",
    followUps: ["Where should focus go when the modal opens?", "When should you avoid using a modal?"]
  },
  {
    id: "q070",
    category: "Accessibility",
    level: "Intermediate",
    question: "How should keyboard navigation work in a complex component?",
    answer:
      "It should follow established patterns for the component type, keep tab order logical, expose active state clearly, and make every action available without a mouse.",
    reasoning:
      "Keyboard users build a mental map from focus order and visible focus indicators. Complex widgets such as tabs, menus, comboboxes, and grids have expected key behavior. Matching platform patterns lowers cognitive load and avoids forcing users to learn a custom interaction language.",
    tests:
      "Keyboard accessibility, interaction patterns, and user empathy.",
    followUps: ["How should arrow keys work in tabs?", "Why is positive `tabindex` usually a bad idea?"]
  },
  {
    id: "q071",
    category: "Accessibility",
    level: "Advanced",
    question: "When should you use ARIA, and when should you avoid it?",
    answer:
      "Use ARIA to add missing semantics or state when native HTML cannot express the component. Avoid ARIA when native elements already provide the correct behavior.",
    reasoning:
      "ARIA changes what assistive technologies perceive, but it does not automatically add keyboard behavior or browser functionality. A div with `role=\"button\"` still needs keyboard activation, focus handling, and disabled behavior. Native elements are usually more reliable and simpler.",
    tests:
      "Semantic HTML, ARIA limits, and accessible implementation discipline.",
    followUps: ["What does the first rule of ARIA mean?", "What behavior must a custom button implement?"]
  },
  {
    id: "q072",
    category: "Performance",
    level: "Advanced",
    question: "How would you diagnose poor Interaction to Next Paint?",
    answer:
      "Profile the interaction, identify long tasks, reduce expensive JavaScript during input, avoid unnecessary renders, split heavy work, and keep rendering work below frame budget.",
    reasoning:
      "INP reflects whether the UI responds promptly when users interact. Poor scores often come from large event handlers, synchronous validation, expensive renders, or layout work triggered by interaction. The fix starts with measuring the specific interaction rather than guessing.",
    tests:
      "Modern performance metrics, profiling, and user-centered optimization.",
    followUps: ["What is a long task?", "How can React rendering affect INP?"]
  },
  {
    id: "q073",
    category: "Performance",
    level: "Intermediate",
    question: "What is critical rendering path optimization?",
    answer:
      "It means prioritizing the resources and work required to render useful content quickly, while delaying non-critical work.",
    reasoning:
      "The browser cannot show a polished first view until it has enough HTML, CSS, fonts, scripts, and data. Blocking resources, unused CSS, heavy JavaScript, and late hero assets can delay that moment. Optimizing the path is about sequencing the first meaningful experience.",
    tests:
      "Browser rendering, loading strategy, and performance prioritization.",
    followUps: ["Which resources block rendering?", "How can font loading affect first render?"]
  },
  {
    id: "q074",
    category: "Performance",
    level: "Advanced",
    question: "How do you decide whether to move work to a Web Worker?",
    answer:
      "Use a worker when CPU-heavy work blocks the main thread and can be isolated from direct DOM access. Measure the cost of serialization and communication before moving it.",
    reasoning:
      "Workers can keep input and rendering responsive, but they are not free. Data must cross a boundary, architecture becomes more complex, and DOM updates still happen on the main thread. They are best for parsing, search indexing, image processing, and other independent computation.",
    tests:
      "Main-thread performance, browser architecture, and optimization tradeoffs.",
    followUps: ["What cannot run directly in a worker?", "When is chunking work enough?"]
  },
  {
    id: "q075",
    category: "Testing",
    level: "Intermediate",
    question: "Why do Testing Library queries prefer roles and labels?",
    answer:
      "Roles and labels reflect how users and assistive technologies understand the interface, so tests written with them exercise accessible behavior.",
    reasoning:
      "A test that finds a button by role is less coupled to markup structure than one that finds a class name. It also nudges engineers toward semantic UI because inaccessible elements become harder to test. This makes tests both more durable and more aligned with real user behavior.",
    tests:
      "Testing philosophy, accessibility, and implementation-independent assertions.",
    followUps: ["When is `data-testid` appropriate?", "What does a failing role query often reveal?"]
  },
  {
    id: "q076",
    category: "Testing",
    level: "Advanced",
    question: "How would you test optimistic UI updates?",
    answer:
      "Test the immediate optimistic state, the confirmed success state, and the rollback or reconciliation path when the server fails or returns different data.",
    reasoning:
      "Optimistic UI improves perceived speed, but it creates correctness risk. The user sees a state before the backend confirms it. Tests need to prove that the UI communicates pending state, prevents duplicate actions when needed, and recovers without corrupting local data.",
    tests:
      "Async state, product correctness, and failure-mode coverage.",
    followUps: ["How should the UI show pending optimistic work?", "What if two optimistic edits happen quickly?"]
  },
  {
    id: "q077",
    category: "Testing",
    level: "Intermediate",
    question: "What makes an end-to-end test flaky?",
    answer:
      "Flakiness often comes from timing assumptions, real network dependency, unstable data, animations, shared test state, or selectors tied to changing implementation details.",
    reasoning:
      "A flaky test erodes trust in the test suite. Engineers start ignoring failures, which defeats the purpose of automation. Stable E2E tests wait for specific user-visible states, use controlled data, and cover fewer high-value flows well instead of many flows poorly.",
    tests:
      "Test reliability, debugging, and CI quality discipline.",
    followUps: ["How would you wait without using fixed sleeps?", "How do you isolate test data?"]
  },
  {
    id: "q078",
    category: "Debugging",
    level: "Foundational",
    question: "How do you debug a UI bug you cannot immediately reproduce?",
    answer:
      "Collect exact reproduction context, inspect logs and error reports, identify likely state and environment differences, add targeted instrumentation if needed, then reduce the problem to a repeatable case.",
    reasoning:
      "The fastest path is usually not guessing at code. UI bugs can depend on browser, device, data, permissions, timing, feature flags, or cached state. A strong engineer turns vague reports into evidence and narrows the surface area before changing behavior.",
    tests:
      "Debugging process, communication, and production-minded investigation.",
    followUps: ["What questions would you ask the reporter?", "What instrumentation would help next time?"]
  },
  {
    id: "q079",
    category: "Debugging",
    level: "Intermediate",
    question: "How would you debug a memory leak in a frontend app?",
    answer:
      "Look for retained objects, unremoved event listeners, active timers, subscriptions, detached DOM nodes, and caches that grow without bounds. Use browser memory tools to compare snapshots.",
    reasoning:
      "Leaks usually come from something that keeps a reference alive after the user has moved on. In React, missing effect cleanup is a common cause. The engineering goal is to tie resource lifetime to component or route lifetime so cleanup happens predictably.",
    tests:
      "Browser tooling, lifecycle cleanup, and performance reliability.",
    followUps: ["How can a closure contribute to a leak?", "What cleanup belongs in an effect return function?"]
  },
  {
    id: "q080",
    category: "Debugging",
    level: "Advanced",
    question: "How do you investigate a production-only frontend error?",
    answer:
      "Start with error tracking data, affected versions, user actions, release timing, environment differences, source maps, feature flags, and recent changes. Reproduce with production-like data when possible.",
    reasoning:
      "Production-only issues often involve minification, real permissions, real data shape, race conditions, browser extensions, network timing, or feature flag combinations. Good investigation connects the error to a user impact and a deploy window before patching. Source maps and structured logging are essential for making the stack trace actionable.",
    tests:
      "Production debugging, observability, release awareness, and impact triage.",
    followUps: ["What should an error report include?", "How do source maps change the workflow?"]
  },
  {
    id: "q081",
    category: "Architecture",
    level: "Intermediate",
    question: "How do you structure frontend code as an app grows?",
    answer:
      "Group code around product features and shared foundations, keep boundaries explicit, and avoid dumping unrelated logic into global utility folders.",
    reasoning:
      "Architecture should make common changes easy. Feature-oriented structure keeps related UI, hooks, tests, and data logic close together, while shared primitives remain stable and boring. The danger is premature abstraction: shared code should emerge from repeated need, not speculation.",
    tests:
      "Code organization, scaling judgment, and maintainability.",
    followUps: ["When should code move from feature-local to shared?", "What belongs in a shared component library?"]
  },
  {
    id: "q082",
    category: "Architecture",
    level: "Advanced",
    question: "How would you design frontend permissions?",
    answer:
      "Represent permissions from backend-provided facts, gate UI affordances for clarity, handle denied actions gracefully, and never rely on frontend checks as the security boundary.",
    reasoning:
      "Permissions affect navigation, rendering, actions, empty states, and error handling. Hiding unavailable actions can reduce noise, but users may still reach denied routes through links or stale state. The backend must enforce authorization, while the frontend creates an understandable experience around it.",
    tests:
      "Security boundaries, UX state, routing, and product architecture.",
    followUps: ["Should disabled actions explain why they are disabled?", "How do permissions interact with cached data?"]
  },
  {
    id: "q083",
    category: "Architecture",
    level: "Advanced",
    question: "How would you approach micro-frontends?",
    answer:
      "Use micro-frontends only when organizational scale and independent deployment needs justify the added complexity. Define shared contracts for routing, design system, authentication, data, and observability.",
    reasoning:
      "Micro-frontends solve team ownership problems more than technical ones. They can increase bundle size, duplicate dependencies, fragment UX, and complicate testing. A strong answer explains the tradeoff and starts with modular monolith options before adding distributed frontend architecture.",
    tests:
      "Architecture tradeoffs, team scaling, and systems thinking.",
    followUps: ["What problems do micro-frontends create?", "How would you keep UX consistent across them?"]
  },
  {
    id: "q084",
    category: "Architecture",
    level: "Intermediate",
    question: "What is the role of a frontend boundary layer?",
    answer:
      "A boundary layer translates external data and APIs into shapes the UI can use safely and consistently.",
    reasoning:
      "Without a boundary, API details leak into components and make the UI harder to change. A clear layer can normalize data, handle nulls, map errors, and centralize request behavior. This keeps components focused on presentation and interaction rather than defensive data plumbing.",
    tests:
      "Separation of concerns, API integration, and maintainable data flow.",
    followUps: ["Where would error mapping live?", "How does this help with backend API changes?"]
  },
  {
    id: "q085",
    category: "System Design",
    level: "Advanced",
    question: "Design a rich text editor for comments.",
    answer:
      "Define the document model, supported formatting, keyboard behavior, paste handling, mentions, validation, serialization format, accessibility, undo/redo, and server sanitization.",
    reasoning:
      "Rich text editors are deceptively deep because the DOM, user intent, and stored data can diverge. Pasting from external sources, collaborative edits, mobile keyboards, and accessibility all add complexity. A strong design scopes the first version tightly and uses a proven editor engine when possible.",
    tests:
      "Complex component design, data modeling, security, and library selection.",
    followUps: ["Why is sanitization required?", "Would you build this from scratch?"]
  },
  {
    id: "q086",
    category: "System Design",
    level: "Advanced",
    question: "Design an analytics dashboard that updates in real time.",
    answer:
      "Choose a transport such as polling, SSE, or WebSockets based on freshness needs, model loading and stale states, batch updates, preserve user filters, and make reconnect behavior visible but not disruptive.",
    reasoning:
      "Real-time UI is a product promise, not just a socket. The app must handle reconnects, out-of-order events, backpressure, and whether users need exact live values or periodic freshness. Updating too often can harm readability and performance, so batching and visual stability matter.",
    tests:
      "Realtime architecture, data consistency, performance, and UX clarity.",
    followUps: ["When is polling better than WebSockets?", "How do you show stale data?"]
  },
  {
    id: "q087",
    category: "System Design",
    level: "Intermediate",
    question: "Design a file upload component.",
    answer:
      "Support file selection, drag and drop, validation, progress, cancellation, retry, error messages, accessibility, size limits, and server response handling.",
    reasoning:
      "Uploads cross several unreliable boundaries: local file APIs, network progress, backend validation, and user patience. Good UI makes constraints clear before upload, shows progress honestly, and gives recovery paths. Security and server validation still matter because client checks are only convenience.",
    tests:
      "Component state, browser APIs, async progress, and error handling.",
    followUps: ["How would you handle large files?", "What validation belongs on the server?"]
  },
  {
    id: "q088",
    category: "System Design",
    level: "Advanced",
    question: "Design an offline-capable notes app.",
    answer:
      "Use local persistence, clear sync status, conflict handling, retry queues, stable IDs, and a strategy for merging or resolving edits when connectivity returns.",
    reasoning:
      "Offline support is not just caching. Users can create and edit data while disconnected, so the system must preserve intent and reconcile it later. The hardest product question is conflict resolution: automatic merging, last-write-wins, or user-guided choices each have consequences.",
    tests:
      "Offline architecture, sync state, data integrity, and product tradeoffs.",
    followUps: ["How would you show unsynced changes?", "What conflicts can happen across devices?"]
  },
  {
    id: "q089",
    category: "Product Engineering",
    level: "Intermediate",
    question: "How do you handle destructive actions in UI?",
    answer:
      "Match friction to risk: clear labels, undo for reversible actions, confirmation for high-impact irreversible actions, and visible consequences before the user commits.",
    reasoning:
      "Not every delete needs a modal, and not every dangerous action can rely on undo. The product decision depends on reversibility, blast radius, frequency, and user expertise. Good UI prevents accidental harm without slowing routine work unnecessarily.",
    tests:
      "Risk-sensitive UX, product judgment, and interaction design.",
    followUps: ["When is undo better than confirm?", "How should bulk delete differ from single delete?"]
  },
  {
    id: "q090",
    category: "Product Engineering",
    level: "Advanced",
    question: "How do you design a good empty state?",
    answer:
      "Explain what belongs there, why it is empty, and what useful action the user can take next. Avoid treating empty states as blank space.",
    reasoning:
      "Empty states are onboarding moments inside the product. They can reduce confusion, teach the system model, and move users toward value. The best empty state depends on context: first-run, filtered-empty, permission-empty, and error-empty should not all say the same thing.",
    tests:
      "UX completeness, product thinking, and state specificity.",
    followUps: ["How is filtered-empty different from first-run empty?", "When should an empty state have no CTA?"]
  },
  {
    id: "q091",
    category: "Product Engineering",
    level: "Advanced",
    question: "How should frontend engineers collaborate with design?",
    answer:
      "Clarify user flows, states, constraints, accessibility, responsive behavior, and system components early, then give implementation feedback before the design is treated as final.",
    reasoning:
      "Strong collaboration prevents expensive surprises. Engineers can surface platform constraints, missing states, edge cases, and reusable patterns while design can clarify intent and hierarchy. The shared goal is not pixel obedience; it is a product that behaves well under real conditions.",
    tests:
      "Cross-functional communication, design systems, and product maturity.",
    followUps: ["What should you ask when a design only shows the happy path?", "How do you push back constructively?"]
  },
  {
    id: "q092",
    category: "Product Engineering",
    level: "Intermediate",
    question: "How do feature flags change frontend implementation?",
    answer:
      "They require both enabled and disabled paths to work, careful testing, safe defaults, cleanup plans, and awareness of how flags interact with routing, caching, and analytics.",
    reasoning:
      "A flag is temporary architecture. If not managed, flags create dead code, confusing states, and untested combinations. Good implementation keeps the flag boundary small and records when it should be removed.",
    tests:
      "Release safety, code hygiene, and state combination thinking.",
    followUps: ["Where should flag checks live?", "How do you test multiple flag states?"]
  },
  {
    id: "q093",
    category: "Security",
    level: "Intermediate",
    question: "What is CSRF, and why does it matter for frontend apps?",
    answer:
      "Cross-site request forgery tricks a user's browser into sending an authenticated request to another site. It matters when authentication relies on automatically sent cookies.",
    reasoning:
      "CSRF is about unwanted actions, not reading responses. Defenses include SameSite cookies, CSRF tokens, careful CORS policy, and server-side validation. Frontend engineers should understand when browser credential behavior can create risk and coordinate with backend defenses.",
    tests:
      "Web security fundamentals, cookie behavior, and backend/frontend boundaries.",
    followUps: ["How does SameSite help?", "Why is CSRF different from XSS?"]
  },
  {
    id: "q094",
    category: "Security",
    level: "Advanced",
    question: "How do third-party scripts affect frontend risk?",
    answer:
      "Third-party scripts can affect performance, privacy, reliability, and security because they run inside the page's execution context unless isolated.",
    reasoning:
      "Analytics, chat widgets, ads, and tag managers can block loading, collect sensitive data, break runtime assumptions, or become supply-chain risks. Good engineering reviews necessity, loading strategy, permissions, CSP, failure behavior, and ownership before adding scripts.",
    tests:
      "Security awareness, performance risk, vendor governance, and platform knowledge.",
    followUps: ["How can CSP reduce risk?", "What would you monitor after adding a third-party script?"]
  },
  {
    id: "q095",
    category: "Build Tools",
    level: "Foundational",
    question: "What does a bundler do?",
    answer:
      "A bundler builds a dependency graph from application modules and outputs optimized assets the browser can load.",
    reasoning:
      "Modern frontend code uses modules, JSX, CSS imports, images, and dependencies that need transformation and packaging. Bundlers can also split code, replace environment variables, optimize assets, and enable development features. Understanding the bundler helps engineers debug missing assets, duplicate code, and production-only behavior.",
    tests:
      "Build pipeline basics, dependency graphs, and production awareness.",
    followUps: ["What is code splitting?", "Why can dev and production builds behave differently?"]
  },
  {
    id: "q096",
    category: "Build Tools",
    level: "Intermediate",
    question: "What is tree shaking?",
    answer:
      "Tree shaking removes unused exports from the final bundle when the bundler can safely determine they are not needed.",
    reasoning:
      "Tree shaking depends on static module structure and package metadata. It can fail with CommonJS, side effects, or broad imports that pull in more than expected. The user-visible value is faster loading and less JavaScript to parse and execute.",
    tests:
      "Bundle optimization, module formats, and dependency hygiene.",
    followUps: ["Why are ES modules easier to tree-shake?", "How can side effects block removal?"]
  },
  {
    id: "q097",
    category: "Build Tools",
    level: "Advanced",
    question: "How do environment variables work in frontend builds?",
    answer:
      "Frontend environment variables are usually injected at build time into JavaScript that ships to the browser, so they must not contain secrets.",
    reasoning:
      "A common mistake is treating frontend env vars like server env vars. Anything bundled into client code can be inspected by users. They are useful for public configuration such as API base URLs or feature flags, while private credentials must stay on the server.",
    tests:
      "Build-time behavior, security boundaries, and deployment awareness.",
    followUps: ["How would you change config without rebuilding?", "What makes a value safe to expose?"]
  },
  {
    id: "q098",
    category: "Data",
    level: "Intermediate",
    question: "How should frontend apps handle pagination?",
    answer:
      "Choose offset, cursor, or infinite loading based on data behavior, user goals, and backend support. Preserve filters, loading state, and scroll or focus context.",
    reasoning:
      "Pagination is not only a backend API choice. Offset pagination is simple but can shift under changing data. Cursor pagination is more stable for feeds but less convenient for arbitrary page jumps. The UI should make progress, boundaries, and loading clear.",
    tests:
      "Data fetching, UX flow, API tradeoffs, and state preservation.",
    followUps: ["When is cursor pagination better?", "How do filters affect pagination state?"]
  },
  {
    id: "q099",
    category: "Data",
    level: "Advanced",
    question: "How would you handle client-side caching?",
    answer:
      "Define cache keys, freshness rules, invalidation triggers, background refetch behavior, and how cached data interacts with mutations and permissions.",
    reasoning:
      "Caching improves speed but can easily show stale or unauthorized data if rules are vague. The hard part is invalidation: knowing when data is no longer safe or useful. Libraries help, but teams still need a product-specific freshness model.",
    tests:
      "Server-state architecture, correctness, performance, and data ownership.",
    followUps: ["What makes a good cache key?", "How do mutations invalidate cached lists?"]
  },
  {
    id: "q100",
    category: "Leadership",
    level: "Advanced",
    question: "What distinguishes a senior frontend engineer from a mid-level engineer?",
    answer:
      "A senior engineer consistently improves outcomes beyond their own tasks: they make tradeoffs explicit, reduce risk, mentor others, shape architecture, and connect frontend decisions to product impact.",
    reasoning:
      "Seniority is not just knowing more APIs. It shows up in judgment: choosing simple solutions, anticipating edge cases, communicating clearly, and leaving systems easier for the team to work in. A senior frontend engineer owns user experience, code health, accessibility, performance, and release quality together.",
    tests:
      "Engineering maturity, communication, systems thinking, and product ownership.",
    followUps: ["How do seniors reduce ambiguity?", "What technical habits signal senior judgment?"]
  }
];

export const questions: Question[] = [...coreQuestions, ...expandedQuestions];

export const categories = [...new Set(questions.map((question) => question.category))];
export const levels = [...new Set(questions.map((question) => question.level))];
