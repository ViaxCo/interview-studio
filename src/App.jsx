import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  ListFilter,
  Moon,
  RotateCcw,
  Search,
  Shuffle,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { answerDepth } from "./answerDepth.js";
import { categories, levels, questions } from "./questions.js";

const storageKey = "frontend-interview-studio-state";
const questionIds = new Set(questions.map((item) => item.id));
const initialVisibleLimit = 80;
const visiblePageSize = 80;
const categoryCounts = questions.reduce((counts, question) => {
  counts[question.category] = (counts[question.category] || 0) + 1;
  return counts;
}, {});
const milestoneMessages = {
  25: "25 reviewed. Patterns are starting to repeat.",
  50: "Halfway through. Your answers should feel sharper now.",
  75: "75 reviewed. Time to hunt for weak spots.",
  100: "100 reviewed. Strong foundation built.",
  250: "250 reviewed. You have crossed the midpoint.",
  500: "All 500 reviewed. You have completed the bank."
};

const categoryPrompts = {
  Accessibility: "Name the user who benefits, then name the failure mode.",
  Browser: "Start with what the browser guarantees, then where it gets expensive.",
  CSS: "Describe the layout rule first, then the tradeoff it creates.",
  JavaScript: "Say the runtime behavior out loud before naming the syntax.",
  Performance: "Start with what users feel, then trace it to the browser work.",
  React: "Separate render behavior from state ownership before answering.",
  Security: "Name the trust boundary, then explain how the bug gets in.",
  Testing: "Say what confidence the test buys, not just the tool you would use."
};

const topicPalettes = {
  craft: {
    "--topic-bg": "oklch(0.956 0.04 82)",
    "--topic-border": "oklch(0.75 0.09 78)",
    "--topic-text": "oklch(0.36 0.08 68)"
  },
  interface: {
    "--topic-bg": "oklch(0.952 0.035 230)",
    "--topic-border": "oklch(0.72 0.08 230)",
    "--topic-text": "oklch(0.34 0.07 236)"
  },
  quality: {
    "--topic-bg": "oklch(0.95 0.038 150)",
    "--topic-border": "oklch(0.7 0.085 152)",
    "--topic-text": "oklch(0.34 0.075 154)"
  },
  judgment: {
    "--topic-bg": "oklch(0.954 0.035 28)",
    "--topic-border": "oklch(0.72 0.08 28)",
    "--topic-text": "oklch(0.38 0.075 28)"
  }
};

const darkTopicPalettes = {
  craft: {
    "--topic-bg": "oklch(0.24 0.048 82)",
    "--topic-border": "oklch(0.57 0.095 78)",
    "--topic-text": "oklch(0.86 0.082 82)"
  },
  interface: {
    "--topic-bg": "oklch(0.25 0.045 230)",
    "--topic-border": "oklch(0.6 0.085 230)",
    "--topic-text": "oklch(0.84 0.075 230)"
  },
  quality: {
    "--topic-bg": "oklch(0.24 0.046 150)",
    "--topic-border": "oklch(0.6 0.09 152)",
    "--topic-text": "oklch(0.84 0.084 154)"
  },
  judgment: {
    "--topic-bg": "oklch(0.25 0.044 28)",
    "--topic-border": "oklch(0.61 0.085 28)",
    "--topic-text": "oklch(0.86 0.08 38)"
  }
};

const categoryTone = {
  Accessibility: "quality",
  Architecture: "interface",
  Browser: "craft",
  "Build Tools": "craft",
  CSS: "interface",
  Data: "judgment",
  Debugging: "quality",
  JavaScript: "craft",
  Leadership: "judgment",
  Performance: "quality",
  "Product Engineering": "judgment",
  React: "interface",
  Security: "judgment",
  "System Design": "interface",
  Testing: "quality"
};

const categoryAnswerMoves = {
  Accessibility: [
    "Name the person affected by the choice, then describe the exact interaction that breaks.",
    "Prefer native semantics first. If custom UI is necessary, explain the keyboard, focus, name, role, and state work you now own.",
    "Close with how you would verify it: keyboard pass, screen reader pass, automated checks, and one manual edge case."
  ],
  Architecture: [
    "Start with ownership boundaries: which code owns data, UI state, side effects, and product rules.",
    "Explain the maintenance pressure you are reducing, not just the folder structure or pattern name.",
    "Name the tradeoff, because architecture usually buys clarity in one place by adding ceremony somewhere else."
  ],
  Browser: [
    "Describe the browser guarantee first, then the places where the main thread, network, or security model can surprise you.",
    "Connect the answer to user-visible behavior: blocked input, delayed rendering, stale data, or broken navigation.",
    "Mention the debugging signal you would look for, such as DevTools timing, console errors, or network headers."
  ],
  "Build Tools": [
    "Separate development convenience from production output. Bundlers do both, but the engineering concerns are different.",
    "Talk about what ships to the user: transformed code, split chunks, assets, public config, and removed dead code.",
    "Call out a failure mode: duplicated dependencies, tree-shaking misses, secret leakage, or dev/prod differences."
  ],
  CSS: [
    "State the layout rule in plain language before naming the property.",
    "Explain what changes when content, viewport size, writing mode, or component nesting changes.",
    "Give the maintainable version, usually fewer magic numbers and more constraints that match the design intent."
  ],
  Data: [
    "Start with the user task: browsing, filtering, editing, recovering, or comparing data.",
    "Explain the consistency model. Say what can be stale, what must be fresh, and how the UI communicates that.",
    "Name the pagination, cache, or invalidation edge case that causes real product bugs."
  ],
  Debugging: [
    "Do not jump straight to a fix. State how you would reproduce, isolate, measure, and then change the code.",
    "List the dimensions that can differ: browser, device, user role, data, timing, cache, feature flag, and build mode.",
    "End with prevention: logging, tests, monitoring, or clearer ownership so the same issue is easier next time."
  ],
  JavaScript: [
    "Say the runtime behavior out loud before naming syntax.",
    "Connect it to UI code: callbacks, async ordering, state updates, events, or memory lifetime.",
    "Show the safer habit you would use in production, not just the trivia answer."
  ],
  Leadership: [
    "Define seniority as judgment under constraints, not just knowing more APIs.",
    "Give examples across product quality, team communication, code health, and release safety.",
    "Mention how a senior makes others faster: clearer decisions, smaller risks, better defaults, and fewer hidden traps."
  ],
  Performance: [
    "Start with what the user feels, then trace it to browser work.",
    "Separate load performance, render performance, interaction latency, memory, and network cost.",
    "Name how you would measure before and after, because performance guesses are often wrong."
  ],
  "Product Engineering": [
    "Tie the answer to product behavior, not only implementation mechanics.",
    "Name the states the user can actually encounter: loading, empty, partial, failed, forbidden, stale, and successful.",
    "Explain the quality bar: what must be right now, what can be iterative, and what would be irresponsible to defer."
  ],
  React: [
    "Separate render behavior from state ownership before answering.",
    "Say what changes when props, state, effects, keys, or context update.",
    "Name the bug the concept prevents: stale UI, wrong identity, excessive rerenders, leaked subscriptions, or broken recovery."
  ],
  Security: [
    "Name the trust boundary first: user input, third-party code, cookies, tokens, or cross-origin requests.",
    "Explain the attack path in plain language. A strong answer makes the exploit understandable without sensationalizing it.",
    "Close with layered mitigation: safer APIs, validation, browser protections, monitoring, and least privilege."
  ],
  "System Design": [
    "Start with the user workflow, then list states and constraints before components.",
    "Break the design into state, rendering, accessibility, performance, data, and failure handling.",
    "Mention what you would build first and what you would defer, because system design is prioritization under uncertainty."
  ],
  Testing: [
    "Say what confidence the test buys, not just which tool you would use.",
    "Prefer tests that observe user-visible behavior, then add lower-level tests for tricky logic.",
    "Call out flake risks: timing, network, test data, animations, and hidden global state."
  ],
  TypeScript: [
    "Separate compile-time confidence from runtime safety.",
    "Explain the boundary: API responses, user input, caught errors, and third-party data are still unknown at runtime.",
    "Show how types make intent easier to change safely, not how they make code look clever."
  ],
  "Web Platform": [
    "Describe what the platform feature stores, schedules, navigates, or loads.",
    "Name the browser rule that creates the tradeoff: persistence, privacy, caching, script ordering, or history behavior.",
    "Connect it to a product edge case like logout, stale assets, back button behavior, or public configuration."
  ]
};

const defaultAnswerGuide = {
  trap:
    "Stopping at the definition. A better answer explains what breaks in real product code when the concept is misunderstood.",
  frame:
    "Give the direct answer first, then add the engineering consequence, a tradeoff, and one concrete example."
};

const answerGuides = {
  q001: {
    codeTitle: "Scope and binding example",
    code: `for (var i = 0; i < 3; i += 1) {
  setTimeout(() => console.log("var", i), 0);
}

for (let i = 0; i < 3; i += 1) {
  setTimeout(() => console.log("let", i), 0);
}

const user = { name: "Ada" };
user.name = "Grace"; // allowed: the binding is const, the object is not frozen`,
    trap:
      "Saying `const` means immutable. It only prevents rebinding the variable; nested objects and arrays can still change."
  },
  q002: {
    codeTitle: "Closure as private state",
    code: `function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const next = createCounter();
next(); // 1
next(); // 2`,
    visualTitle: "Mental model",
    visual: ["Function is created", "Outer variables are retained", "Callback runs later", "Same lexical scope is still available"]
  },
  q003: {
    codeTitle: "Execution order",
    code: `console.log("sync");

setTimeout(() => console.log("task"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("still sync");
// sync, still sync, microtask, task`,
    visualTitle: "Queue order",
    visual: ["Call stack", "Microtasks", "Render opportunity", "Tasks such as timers and events"]
  },
  q005: {
    codeTitle: "Debounce shape",
    code: `function debounce(callback, delay) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}

const searchAfterPause = debounce((query) => {
  fetchResults(query);
}, 250);`
  },
  q010: {
    codeTitle: "Ignore stale request results",
    code: `let latestRequestId = 0;

async function loadResults(query) {
  const requestId = ++latestRequestId;
  const results = await fetchSearchResults(query);

  if (requestId !== latestRequestId) return;

  renderResults(results);
}`,
    trap:
      "Only handling the happy path. The older request can finish last and overwrite newer user intent unless identity or cancellation is part of the design."
  },
  q014: {
    codeTitle: "Stable identity beats position",
    code: `{items.map((item) => (
  <TodoRow key={item.id} todo={item} />
))}

// Risky when rows can be inserted, removed, sorted, or filtered:
{items.map((item, index) => (
  <TodoRow key={index} todo={item} />
))}`
  },
  q015: {
    codeTitle: "Effect for external synchronization",
    code: `useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((response) => response.json())
    .then(setData)
    .catch((error) => {
      if (error.name !== "AbortError") setError(error);
    });

  return () => controller.abort();
}, [url]);`,
    trap:
      "Using effects to copy derived state. If a value can be calculated from current props or state during render, storing it through an effect usually adds sync bugs."
  },
  q019: {
    codeTitle: "Reusable hook surface",
    code: `function useUser(userId) {
  const [state, setState] = useState({
    data: null,
    error: null,
    status: "idle"
  });

  useEffect(() => {
    const controller = new AbortController();
    setState((current) => ({ ...current, status: "loading" }));

    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => setState({ data, error: null, status: "success" }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({ data: null, error, status: "error" });
        }
      });

    return () => controller.abort();
  }, [userId]);

  return state;
}`
  },
  q023: {
    visualTitle: "Layout choice",
    visual: ["Flexbox: one axis at a time", "Grid: rows and columns together", "Use both when structure and alignment ask for both"]
  },
  q029: {
    codeTitle: "One listener for many rows",
    code: `list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const row = button.closest("[data-row-id]");
  runAction(button.dataset.action, row.dataset.rowId);
});`
  },
  q031: {
    visualTitle: "Rendering pipeline",
    visual: ["Style", "Layout", "Paint", "Composite"],
    trap:
      "Animating properties that force layout on every frame. Prefer transforms and opacity when the visual effect allows it."
  },
  q033: {
    codeTitle: "Accessible field anatomy",
    code: `<label for="email">Email</label>
<input id="email" name="email" type="email" aria-describedby="email-error" />
<p id="email-error" role="alert">Enter a valid email address.</p>`
  },
  q037: {
    codeTitle: "Virtual list intuition",
    code: `const visibleRows = rows.slice(startIndex, endIndex);

return (
  <div style={{ height: rows.length * rowHeight }}>
    <div style={{ transform: \`translateY(\${startIndex * rowHeight}px)\` }}>
      {visibleRows.map((row) => (
        <Row key={row.id} row={row} />
      ))}
    </div>
  </div>
);`
  },
  q043: {
    visualTitle: "Autocomplete flow",
    visual: ["Input changes", "Debounce", "Cancel stale request", "Show loading or results", "Keyboard selection", "Commit value"]
  },
  q051: {
    codeTitle: "Unsafe versus safer rendering",
    code: `// Risky when html comes from users or third parties:
element.innerHTML = userSuppliedHtml;

// Safer default:
element.textContent = userSuppliedText;`,
    trap:
      "Treating sanitization as a nice-to-have. The browser will execute certain injected markup paths unless the app keeps untrusted content out of executable contexts."
  },
  q053: {
    codeTitle: "Storage differences in practice",
    code: `localStorage.setItem("theme", "dark"); // persists after tab closes
sessionStorage.setItem("draftId", "123"); // scoped to this tab session

document.cookie = "session=abc; Secure; SameSite=Lax"; // sent with matching requests`
  },
  q055: {
    visualTitle: "Script loading",
    visual: ["HTML parsing", "defer downloads without blocking parse", "defer runs after parsing in order", "async runs when ready, order is not guaranteed"]
  },
  q059: {
    codeTitle: "Runtime parsing boundary",
    code: `function parseUser(value) {
  if (!value || typeof value !== "object") throw new Error("Invalid user");
  if (typeof value.name !== "string") throw new Error("Missing name");

  return { name: value.name };
}`
  },
  q072: {
    visualTitle: "INP investigation path",
    visual: ["Find slow interaction", "Identify long task", "Separate JS from rendering work", "Reduce, split, or defer the work"]
  },
  q085: {
    visualTitle: "Rich text editor boundaries",
    visual: ["Document model", "Selection model", "Commands", "Serialization", "Sanitization", "Accessibility"]
  },
  q098: {
    codeTitle: "Pagination state belongs with filters",
    code: `const queryKey = ["issues", { status, owner, page }];

// When filters change, reset page so the UI does not request an empty
// page from the previous result set.
setFilters(nextFilters);
setPage(1);`
  },
  q099: {
    visualTitle: "Cache lifecycle",
    visual: ["Cache key", "Fresh data", "Stale data", "Background refresh", "Mutation invalidates related keys"]
  }
};

function topicStyle(categoryName, theme = "light") {
  const palettes = theme === "dark" ? darkTopicPalettes : topicPalettes;
  return palettes[categoryTone[categoryName]] || {};
}

function getAnswerGuide(question) {
  return {
    ...defaultAnswerGuide,
    depth: answerDepth[question.id],
    moves: categoryAnswerMoves[question.category] || categoryAnswerMoves.JavaScript,
    ...answerGuides[question.id]
  };
}

function InlineText({ text }) {
  return String(text)
    .split(/(`[^`]+`)/g)
    .map((part, index) =>
      part.startsWith("`") && part.endsWith("`") ? (
        <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>
      ) : (
        part
      )
    );
}

function HighlightedCode({ code }) {
  const pattern =
    /(\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:async|await|const|let|var|function|return|if|else|for|while|new|throw|try|catch|class|extends|import|export|from|true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|[A-Z][A-Za-z0-9_]*(?=\s*[({<])|[a-zA-Z_$][\w$]*(?=\s*\())/g;

  return String(code)
    .split(pattern)
    .filter(Boolean)
    .map((part, index) => {
      let token = "";
      if (part.startsWith("//")) token = "comment";
      else if (/^["'`]/.test(part)) token = "string";
      else if (/^\d/.test(part)) token = "number";
      else if (/^(async|await|const|let|var|function|return|if|else|for|while|new|throw|try|catch|class|extends|import|export|from|true|false|null|undefined)$/.test(part)) token = "keyword";
      else if (/^[A-Z]/.test(part)) token = "type";
      else if (/^[a-zA-Z_$]/.test(part)) token = "function";

      return token ? (
        <span className={`syntax-${token}`} key={`${part}-${index}`}>
          {part}
        </span>
      ) : (
        part
      );
    });
}

function guideSearchText(question) {
  const guide = getAnswerGuide(question);

  return [
    guide.frame,
    guide.trap,
    guide.codeTitle,
    guide.code,
    guide.visualTitle,
    guide.depth?.mentalModel,
    guide.depth?.engineeringUse,
    guide.depth?.interviewSignal,
    ...(guide.visual || []),
    ...(guide.moves || [])
  ]
    .filter(Boolean)
    .join(" ");
}

const questionSearchIndex = questions.map((item) => ({
  item,
  text: [
    item.question,
    item.answer,
    item.reasoning,
    item.tests,
    item.category,
    item.level,
    guideSearchText(item)
  ]
    .join(" ")
    .toLowerCase()
}));

function emptyStoredState(storageAvailable = true) {
  return {
    revealed: {},
    reviewed: {},
    starred: {},
    theme: "light",
    hasThemePreference: false,
    storageAvailable
  };
}

function cleanStoredMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value).filter(([id, selected]) => questionIds.has(id) && selected === true)
  );
}

function normalizeStoredState(value, storageAvailable = true) {
  const hasThemePreference =
    value && typeof value === "object" && !Array.isArray(value)
      ? typeof value.hasThemePreference === "boolean"
        ? value.hasThemePreference
        : Object.prototype.hasOwnProperty.call(value, "theme")
      : false;

  return {
    revealed: cleanStoredMap(value?.revealed),
    reviewed: cleanStoredMap(value?.reviewed),
    starred: cleanStoredMap(value?.starred),
    theme: value?.theme === "dark" ? "dark" : "light",
    hasThemePreference,
    storageAvailable
  };
}

function mapFromIds(ids) {
  if (!Array.isArray(ids)) return {};
  return Object.fromEntries(ids.filter((id) => questionIds.has(id)).map((id) => [id, true]));
}

function serializeProgress(state) {
  const normalized = normalizeStoredState(state);

  return {
    revealed: Object.keys(normalized.revealed).sort(),
    reviewed: Object.keys(normalized.reviewed).sort(),
    starred: Object.keys(normalized.starred).sort(),
    theme: normalized.theme
  };
}

function progressKey(state) {
  return JSON.stringify(serializeProgress(state));
}

function hasProgressMissingFromAccount(deviceState, accountState) {
  return ["revealed", "reviewed", "starred"].some((key) =>
    Object.keys(deviceState[key]).some((id) => !accountState[key][id])
  );
}

function hasDeviceStateToImport(deviceState, accountState) {
  return (
    hasProgressMissingFromAccount(deviceState, accountState) ||
    (deviceState.hasThemePreference === true && deviceState.theme !== accountState.theme)
  );
}

function applyQuestionUpdate(state, questionId, update) {
  for (const key of ["revealed", "reviewed", "starred"]) {
    if (update[key] === undefined) continue;
    if (update[key]) {
      state[key][questionId] = true;
    } else {
      delete state[key][questionId];
    }
  }
}

function questionUpdateMatches(state, questionId, update) {
  return ["revealed", "reviewed", "starred"].every(
    (key) => update[key] === undefined || Boolean(state[key][questionId]) === update[key]
  );
}

function getStorage() {
  try {
    return globalThis.localStorage || null;
  } catch {
    return null;
  }
}

function loadStoredState() {
  const storage = getStorage();
  if (!storage) return emptyStoredState(false);

  try {
    return normalizeStoredState(JSON.parse(storage.getItem(storageKey)) || {});
  } catch {
    return emptyStoredState(false);
  }
}

function saveStoredState(state) {
  const storage = getStorage();
  if (!storage) return false;

  try {
    storage.setItem(storageKey, JSON.stringify(normalizeStoredState(state)));
    return true;
  } catch {
    return false;
  }
}

function App({
  accountCanSave = false,
  accountPending = false,
  accountPanel = null,
  accountProgress,
  importAccountProgress = null,
  resetAccountProgress = null,
  saveQuestionProgress = null,
  saveThemePreference = null
}) {
  const searchInputRef = useRef(null);
  const [storedState] = useState(loadStoredState);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("browse");
  const [activeId, setActiveId] = useState(questions[0]?.id || "");
  const [revealed, setRevealed] = useState(storedState.revealed);
  const [reviewed, setReviewed] = useState(storedState.reviewed);
  const [starred, setStarred] = useState(storedState.starred);
  const [theme, setTheme] = useState(storedState.theme);
  const [storageAvailable, setStorageAvailable] = useState(storedState.storageAvailable);
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetBackup, setResetBackup] = useState(null);
  const [pendingGuestImport, setPendingGuestImport] = useState(null);
  const [sessionNote, setSessionNote] = useState("");
  const [sessionTone, setSessionTone] = useState("neutral");
  const [sessionNoteKey, setSessionNoteKey] = useState(0);
  const [visibleLimit, setVisibleLimit] = useState(initialVisibleLimit);
  const syncedAccountKey = useRef("");
  const hadAccountSession = useRef(false);
  const pendingQuestionEdits = useRef(new Map());
  const pendingTheme = useRef(null);
  const hasDeviceThemePreference = useRef(storedState.hasThemePreference);

  useEffect(() => {
    if (accountCanSave) {
      hadAccountSession.current = true;
      return;
    }

    syncedAccountKey.current = "";
    pendingQuestionEdits.current.clear();
    pendingTheme.current = null;
    setPendingGuestImport(null);
    setResetBackup(null);

    if (hadAccountSession.current) {
      const guestState = loadStoredState();
      setRevealed(guestState.revealed);
      setReviewed(guestState.reviewed);
      setStarred(guestState.starred);
      setTheme(guestState.theme);
      setStorageAvailable(guestState.storageAvailable);
      hasDeviceThemePreference.current = guestState.hasThemePreference;
      hadAccountSession.current = false;
    }
  }, [accountCanSave]);

  useEffect(() => {
    if (!accountCanSave || accountProgress === undefined) return;

    if (accountProgress) {
      const accountState = {
        revealed: mapFromIds(accountProgress.revealed),
        reviewed: mapFromIds(accountProgress.reviewed),
        starred: mapFromIds(accountProgress.starred),
        theme: accountProgress.theme === "dark" ? "dark" : "light"
      };
      const accountKey = `${accountProgress.userId}:${progressKey(accountState)}`;
      for (const [questionId, update] of pendingQuestionEdits.current) {
        if (questionUpdateMatches(accountState, questionId, update)) {
          pendingQuestionEdits.current.delete(questionId);
        }
      }
      if (pendingTheme.current && accountState.theme === pendingTheme.current) {
        pendingTheme.current = null;
      }
      if (syncedAccountKey.current === accountKey) return;

      const currentState = {
        revealed,
        reviewed,
        starred,
        theme,
        hasThemePreference: hasDeviceThemePreference.current
      };

      if (
        !syncedAccountKey.current &&
        hasDeviceStateToImport(currentState, accountState)
      ) {
        setPendingGuestImport(currentState);
      }

      const nextState = {
        revealed: { ...accountState.revealed },
        reviewed: { ...accountState.reviewed },
        starred: { ...accountState.starred },
        theme: pendingTheme.current || accountState.theme
      };

      for (const [questionId, update] of pendingQuestionEdits.current) {
        applyQuestionUpdate(nextState, questionId, update);
      }

      setRevealed(nextState.revealed);
      setReviewed(nextState.reviewed);
      setStarred(nextState.starred);
      setTheme(nextState.theme);
      if (!syncedAccountKey.current) {
        showSessionNote("Account progress synced.", "success");
      }
      syncedAccountKey.current = accountKey;
    }
  }, [accountCanSave, accountProgress, revealed, reviewed, starred, theme]);

  useEffect(() => {
    if (!accountCanSave) {
      setStorageAvailable(
        saveStoredState({
          revealed,
          reviewed,
          starred,
          theme,
          hasThemePreference: hasDeviceThemePreference.current
        })
      );
    }
  }, [accountCanSave, revealed, reviewed, starred, theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const filteredQuestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return questionSearchIndex.filter(({ item, text }) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesLevel = level === "All" || item.level === level;
      const matchesQuery = !normalizedQuery || text.includes(normalizedQuery);

      return matchesCategory && matchesLevel && matchesQuery;
    }).map(({ item }) => item);
  }, [category, level, query]);

  const starredQueue = useMemo(
    () => filteredQuestions.filter((item) => starred[item.id]),
    [filteredQuestions, starred]
  );
  const randomDrillPool = mode === "starred" ? starredQueue : filteredQuestions;
  const studyQueue = useMemo(
    () => (mode === "starred" ? starredQueue : filteredQuestions),
    [filteredQuestions, mode, starredQueue]
  );
  const activeQuestion =
    studyQueue.find((item) => item.id === activeId) || studyQueue[0] || null;
  const activeGuide = activeQuestion ? getAnswerGuide(activeQuestion) : null;
  const queueRows = mode === "mock" && activeQuestion ? [activeQuestion] : studyQueue;
  const visibleQuestions = queueRows.slice(0, mode === "mock" ? 1 : visibleLimit);
  const hasMoreQuestions = queueRows.length > visibleQuestions.length;
  const activeIndex = activeQuestion
    ? questions.findIndex((item) => item.id === activeQuestion.id) + 1
    : 0;
  const activeQueueIndex = activeQuestion
    ? studyQueue.findIndex((item) => item.id === activeQuestion.id)
    : -1;
  const hasProgress = [revealed, reviewed, starred].some((map) => Object.values(map).some(Boolean));
  const isFirstRun =
    !hasProgress && mode === "browse" && !query && category === "All" && level === "All";
  const hasNoMatches = filteredQuestions.length === 0;
  const isSavedEmpty =
    mode === "starred" && filteredQuestions.length > 0 && !visibleQuestions.length;

  useEffect(() => {
    if (studyQueue.length && !studyQueue.some((item) => item.id === activeId)) {
      setActiveId(studyQueue[0].id);
    }
  }, [activeId, studyQueue]);

  useEffect(() => {
    setVisibleLimit(initialVisibleLimit);
  }, [category, level, mode, query]);

  useEffect(() => {
    if (mode !== "mock" && activeQueueIndex >= visibleLimit) {
      setVisibleLimit(Math.min(studyQueue.length, activeQueueIndex + visiblePageSize));
    }
  }, [activeQueueIndex, mode, studyQueue.length, visibleLimit]);

  const reviewedCount = Object.values(reviewed).filter(Boolean).length;
  const progress = questions.length ? Math.round((reviewedCount / questions.length) * 100) : 0;
  const thinkPrompt =
    activeQuestion &&
    (categoryPrompts[activeQuestion.category] ||
      `Answer like a senior engineer: claim, reason, tradeoff, example.`);

  useEffect(() => {
    function handleShortcut(event) {
      const tagName = event.target.tagName;
      const isTyping = tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
      const hasModifier = event.metaKey || event.ctrlKey || event.altKey;

      if (event.key === "/" && !isTyping && !hasModifier) {
        event.preventDefault();
        searchInputRef.current?.focus();
        showSessionNote("Search focused.", "action");
        return;
      }

      if (isTyping || hasModifier || !activeQuestion) return;

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        toggleRevealed();
      }

      if (event.key.toLowerCase() === "n") {
        event.preventDefault();
        moveQuestion(1);
      }

      if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        moveQuestion(-1);
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [accountPending, activeQuestion, activeQueueIndex, mode, revealed, studyQueue]);

  useEffect(() => {
    const milestone = milestoneMessages[reviewedCount];
    if (milestone) showSessionNote(milestone, "milestone");
  }, [reviewedCount]);

  useEffect(() => {
    if (!sessionNote) return undefined;
    const timeout = window.setTimeout(() => setSessionNote(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [sessionNote]);

  function toggleMap(setter, id) {
    setter((current) => {
      const next = { ...current };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  }

  function showSessionNote(message, tone = "neutral") {
    setSessionTone(tone);
    setSessionNote(message);
    setSessionNoteKey((current) => current + 1);
  }

  function blockProgressEdit() {
    if (!accountPending) return false;
    showSessionNote("Account progress is loading.", "warning");
    return true;
  }

  function saveAccountQuestion(questionId, progressUpdate) {
    if (!accountCanSave || !saveQuestionProgress) return;
    pendingQuestionEdits.current.set(questionId, {
      ...pendingQuestionEdits.current.get(questionId),
      ...progressUpdate
    });
    saveQuestionProgress(questionId, progressUpdate).catch(() => {
      showSessionNote("Account sync failed. Your change is still visible here.", "warning");
    });
  }

  function saveAccountTheme(themeValue) {
    if (!accountCanSave || !saveThemePreference) return;
    pendingTheme.current = themeValue;
    saveThemePreference(themeValue).catch(() => {
      showSessionNote("Theme sync failed. Your change is still visible here.", "warning");
    });
  }

  function serializeQuestionProgress(state) {
    const { revealed: revealedIds, reviewed: reviewedIds, starred: starredIds } = serializeProgress(state);
    return { revealed: revealedIds, reviewed: reviewedIds, starred: starredIds };
  }

  function queueImportedProgress(state) {
    for (const key of ["revealed", "reviewed", "starred"]) {
      for (const id of Object.keys(state[key])) {
        pendingQuestionEdits.current.set(id, {
          ...pendingQuestionEdits.current.get(id),
          [key]: true
        });
      }
    }
  }

  function pickRandomQuestion() {
    if (!randomDrillPool.length) return;
    const next = randomDrillPool[Math.floor(Math.random() * randomDrillPool.length)];
    setActiveId(next.id);
    setMode("mock");
    showSessionNote("Random drill started.", "action");
  }

  function resetProgress() {
    if (blockProgressEdit()) return;
    if (!hasProgress) return;
    setResetBackup({ revealed, reviewed, starred });
    setRevealed({});
    setReviewed({});
    setStarred({});
    setConfirmReset(false);
    if (accountCanSave && resetAccountProgress) {
      pendingQuestionEdits.current.clear();
      resetAccountProgress().catch(() => {
        showSessionNote("Account reset failed. Try again before leaving.", "warning");
      });
    }
    showSessionNote(accountCanSave ? "Account progress cleared." : "Local progress cleared.", "warning");
  }

  function undoReset() {
    if (blockProgressEdit()) return;
    if (!resetBackup) return;
    setRevealed(resetBackup.revealed);
    setReviewed(resetBackup.reviewed);
    setStarred(resetBackup.starred);
    if (accountCanSave && importAccountProgress) {
      queueImportedProgress(resetBackup);
      importAccountProgress(serializeQuestionProgress({ ...resetBackup, theme }))
        .then(() => setResetBackup(null))
        .catch(() => {
          showSessionNote("Account restore failed. Try again before leaving.", "warning");
          setResetBackup(resetBackup);
        });
    } else {
      setResetBackup(null);
    }
    showSessionNote("Local progress restored.", "action");
  }

  function importGuestProgress() {
    if (blockProgressEdit() || !pendingGuestImport) return;
    const shouldImportTheme = pendingGuestImport.hasThemePreference === true;
    const nextState = {
      revealed: { ...revealed, ...pendingGuestImport.revealed },
      reviewed: { ...reviewed, ...pendingGuestImport.reviewed },
      starred: { ...starred, ...pendingGuestImport.starred },
      theme: shouldImportTheme ? pendingGuestImport.theme : theme
    };
    setRevealed(nextState.revealed);
    setReviewed(nextState.reviewed);
    setStarred(nextState.starred);
    setTheme(nextState.theme);
    if (accountCanSave && importAccountProgress) {
      queueImportedProgress(pendingGuestImport);
      const themeImport =
        shouldImportTheme && saveThemePreference && pendingGuestImport.theme !== theme
          ? saveThemePreference(pendingGuestImport.theme)
          : Promise.resolve();
      Promise.all([importAccountProgress(serializeQuestionProgress(nextState)), themeImport])
        .then(() => {
          setPendingGuestImport(null);
          showSessionNote("Device progress imported.", "success");
        })
        .catch(() => {
          showSessionNote("Import failed. Try again before leaving.", "warning");
        });
    } else {
      setPendingGuestImport(null);
      showSessionNote("Device progress imported.", "success");
    }
  }

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setLevel("All");
    setMode("browse");
    showSessionNote("Filters cleared.", "action");
  }

  function showQuestionQueue() {
    setMode("browse");
    showSessionNote("Question queue shown.", "action");
  }

  function moveQuestion(direction) {
    if (!studyQueue.length || !activeQuestion) return;
    const currentIndex = activeQueueIndex < 0 ? 0 : activeQueueIndex;
    const nextIndex = (currentIndex + direction + studyQueue.length) % studyQueue.length;
    setActiveId(studyQueue[nextIndex].id);
    if (mode === "mock") setMode("browse");
    showSessionNote(`Question ${nextIndex + 1} of ${studyQueue.length}.`);
  }

  function markReviewedAndContinue() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    setReviewed((current) => ({ ...current, [activeQuestion.id]: true }));
    saveAccountQuestion(activeQuestion.id, { reviewed: true });
    moveQuestion(1);
    showSessionNote("Marked reviewed. Moving to the next question.", "success");
  }

  function toggleReviewed() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    const willReview = !reviewed[activeQuestion.id];
    toggleMap(setReviewed, activeQuestion.id);
    saveAccountQuestion(activeQuestion.id, { reviewed: willReview });
    showSessionNote(willReview ? "Marked reviewed." : "Marked unreviewed.", willReview ? "success" : "neutral");
  }

  function toggleStarred() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    const willStar = !starred[activeQuestion.id];
    toggleMap(setStarred, activeQuestion.id);
    saveAccountQuestion(activeQuestion.id, { starred: willStar });
    showSessionNote(
      willStar ? "Saved for review." : "Removed from saved questions.",
      willStar ? "success" : "neutral"
    );
  }

  function toggleRevealed() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    const willReveal = !revealed[activeQuestion.id];
    toggleMap(setRevealed, activeQuestion.id);
    saveAccountQuestion(activeQuestion.id, { revealed: willReveal });
  }

  function toggleTheme() {
    if (blockProgressEdit()) return;
    const nextTheme = theme === "dark" ? "light" : "dark";
    hasDeviceThemePreference.current = true;
    setTheme(nextTheme);
    saveAccountTheme(nextTheme);
    showSessionNote(nextTheme === "dark" ? "Dark mode on." : "Light mode on.", "action");
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to questions
      </a>
      <aside className="sidebar" aria-label="Interview studio navigation">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="eyebrow">Practice</p>
            <h1>Interview Studio</h1>
          </div>
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        <div className="progress-panel">
          <div
            key={reviewedCount}
            className="progress-ring"
            style={{ "--progress": `${progress * 3.6}deg` }}
          >
            <span>{progress}%</span>
          </div>
          <div>
            <strong>{reviewedCount} reviewed</strong>
            <p>{questions.length} questions in the current frontend collection.</p>
          </div>
        </div>

        {accountPanel || (
          <section className="account-panel" aria-label="Guest progress">
            <div>
              <strong>Guest progress</strong>
              <p>Saved on this device. Add Convex to sync across devices.</p>
            </div>
          </section>
        )}

        <nav className="mode-tabs" aria-label="Study modes">
          <button
            type="button"
            className={mode === "browse" ? "active" : ""}
            aria-pressed={mode === "browse"}
            onClick={() => setMode("browse")}
          >
            <ListFilter size={17} /> Browse
          </button>
          <button
            type="button"
            className={mode === "starred" ? "active" : ""}
            aria-pressed={mode === "starred"}
            onClick={() => setMode("starred")}
          >
            <Sparkles size={17} /> Saved
          </button>
        </nav>

        <div className="topic-list" aria-label="Question categories">
          {["All", ...categories].map((item) => (
            <button
              type="button"
              className={category === item ? "selected" : ""}
              aria-pressed={category === item}
              key={item}
              style={topicStyle(item, theme)}
              onClick={() => setCategory(item)}
            >
              <span>{item}</span>
              <small>
                {item === "All"
                  ? questions.length
                  : categoryCounts[item] || 0}
              </small>
            </button>
          ))}
        </div>

        {(hasProgress || confirmReset) && (
          <button
            type="button"
            className="reset-button"
            onClick={() => (confirmReset ? resetProgress() : setConfirmReset(true))}
          >
            <RotateCcw size={16} /> {confirmReset ? "Clear progress" : "Reset progress"}
          </button>
        )}
        {confirmReset && (
          <div className="reset-message" role="status">
            <p>
              {accountCanSave
                ? "This clears reviewed, saved, and revealed answers for your account."
                : "This clears reviewed, saved, and revealed answers on this device."}
            </p>
            <button type="button" onClick={() => setConfirmReset(false)}>
              Cancel
            </button>
          </div>
        )}
        {resetBackup && (
          <div className="reset-message" role="status">
            <p>{accountCanSave ? "Account progress cleared." : "Local progress cleared."}</p>
            <button type="button" onClick={undoReset}>
              Undo
            </button>
          </div>
        )}
        {pendingGuestImport && accountCanSave && (
          <div className="reset-message" role="status">
            <p>Device progress is available to import into this account.</p>
            <button type="button" onClick={importGuestProgress}>
              Import
            </button>
            <button type="button" onClick={() => setPendingGuestImport(null)}>
              Dismiss
            </button>
          </div>
        )}
        {!storageAvailable && (
          <div className="reset-message storage-warning" role="status">
            <p>Progress and theme will not be saved because this browser blocked local storage.</p>
          </div>
        )}
      </aside>

      <main className="workspace" id="main-content">
        <header className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input
              ref={searchInputRef}
              aria-label="Search questions"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions, answers, concepts"
            />
            {query && (
              <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
                <X size={16} />
              </button>
            )}
          </div>

          <label className="select-box">
            <span>Level</span>
            <select value={level} onChange={(event) => setLevel(event.target.value)}>
              {["All", ...levels].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="primary-action"
            disabled={!randomDrillPool.length}
            onClick={pickRandomQuestion}
          >
            <Shuffle size={17} /> Start random drill
          </button>
        </header>

        <div className="content-grid">
          <section className="question-list" aria-label="Questions">
            <div className="list-heading">
              <span>
                {mode === "mock"
                  ? "Random drill"
                  : mode === "starred"
                    ? "Saved queue"
                    : "Question queue"}
              </span>
              <small>
                {visibleQuestions.length}
                {queueRows.length > visibleQuestions.length ? ` of ${queueRows.length}` : ""} shown
              </small>
            </div>

            {visibleQuestions.map((item, index) => (
              <button
                type="button"
                className={`question-row ${activeQuestion.id === item.id ? "current" : ""}`}
                aria-current={activeQuestion.id === item.id ? "true" : undefined}
                key={item.id}
                style={topicStyle(item.category, theme)}
                onClick={() => setActiveId(item.id)}
              >
                <span className="question-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="row-copy">
                  <strong>{item.question}</strong>
                  <small>
                    {item.category} · {item.level}
                  </small>
                </span>
                {reviewed[item.id] ? <CheckCircle2 size={18} /> : <Circle size={18} />}
              </button>
            ))}

            {hasMoreQuestions && (
              <button
                type="button"
                className="load-more-button"
                onClick={() =>
                  setVisibleLimit((current) => Math.min(queueRows.length, current + visiblePageSize))
                }
              >
                Show {Math.min(visiblePageSize, queueRows.length - visibleQuestions.length)} more
              </button>
            )}

            {!visibleQuestions.length && filteredQuestions.length === 0 && (
              <div className="empty-state">
                <Search size={24} />
                <strong>No matching questions</strong>
                <p>Clear search or reset filters to return to the full question bank.</p>
                <button type="button" onClick={resetFilters}>
                  Reset filters
                </button>
              </div>
            )}

          </section>

          {activeQuestion ? (
            <article
              key={activeQuestion.id}
              className="question-detail"
              style={topicStyle(activeQuestion.category, theme)}
            >
              <div className="detail-heading">
                <div>
                  <p className="eyebrow">
                    Question {activeIndex} · {activeQuestion.category}
                  </p>
                  <h2>
                    <InlineText text={activeQuestion.question} />
                  </h2>
                  <div className="detail-tags">
                    <span>{activeQuestion.level}</span>
                    <span>{revealed[activeQuestion.id] ? "Answer shown" : "Try first"}</span>
                    <span>{reviewed[activeQuestion.id] ? "Reviewed" : "Unreviewed"}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={starred[activeQuestion.id] ? "star-button active" : "star-button"}
                  aria-pressed={!!starred[activeQuestion.id]}
                  aria-label={
                    starred[activeQuestion.id] ? "Remove from saved questions" : "Save for review"
                  }
                  onClick={toggleStarred}
                >
                  <Sparkles size={17} />
                  {starred[activeQuestion.id] ? "Saved" : "Save"}
                </button>
              </div>

              <div className="answer-controls">
                <button
                  type="button"
                  className="primary-action"
                  aria-expanded={!!revealed[activeQuestion.id]}
                  aria-controls={`answer-${activeQuestion.id}`}
                  aria-keyshortcuts="R"
                  onClick={toggleRevealed}
                >
                  <ChevronDown className="reveal-icon" size={17} />
                  {revealed[activeQuestion.id] ? "Hide answer" : "Reveal answer"}
                </button>
                <button
                  type="button"
                  className={reviewed[activeQuestion.id] ? "reviewed" : ""}
                  aria-pressed={!!reviewed[activeQuestion.id]}
                  onClick={toggleReviewed}
                >
                  <CheckCircle2 size={17} />
                  {reviewed[activeQuestion.id] ? "Unmark reviewed" : "Mark reviewed"}
                </button>
                <button type="button" className="next-action" onClick={markReviewedAndContinue}>
                  <CheckCircle2 size={17} />
                  Mark reviewed and next
                </button>
              </div>

              <div className="queue-controls" aria-label="Question navigation">
                <button type="button" aria-keyshortcuts="P" onClick={() => moveQuestion(-1)}>
                  <ChevronLeft size={17} /> Previous
                </button>
                <span aria-live="polite">
                  {activeQueueIndex + 1} of {studyQueue.length}
                </span>
                <button type="button" aria-keyshortcuts="N" onClick={() => moveQuestion(1)}>
                  Next <ChevronRight size={17} />
                </button>
              </div>

              <section
                id={`answer-${activeQuestion.id}`}
                className={revealed[activeQuestion.id] ? "answer-block open" : "answer-block"}
                hidden={!revealed[activeQuestion.id]}
              >
                <div className="answer-section strong">
                  <h3>Model Answer</h3>
                  <p>
                    <InlineText text={activeQuestion.answer} />
                  </p>
                </div>
                <div className="answer-section">
                  <h3>Engineering Reasoning</h3>
                  <p>
                    <InlineText text={activeQuestion.reasoning} />
                  </p>
                </div>
                <div className="answer-section reasoning-section">
                  <h3>Study the Reasoning</h3>
                  {activeGuide.depth && (
                    <div className="depth-list">
                      <div>
                        <strong>Mental model</strong>
                        <p>
                          <InlineText text={activeGuide.depth.mentalModel} />
                        </p>
                      </div>
                      <div>
                        <strong>Engineering use</strong>
                        <p>
                          <InlineText text={activeGuide.depth.engineeringUse} />
                        </p>
                      </div>
                      <div>
                        <strong>Interview signal</strong>
                        <p>
                          <InlineText text={activeGuide.depth.interviewSignal} />
                        </p>
                      </div>
                    </div>
                  )}
                  <strong className="section-kicker">Senior answer moves</strong>
                  <p>
                    <InlineText text={activeGuide.frame} />
                  </p>
                  <ul className="senior-list">
                    {activeGuide.moves.map((item) => (
                      <li key={item}>
                        <InlineText text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
                {activeGuide.code && (
                  <div className="answer-section code-section">
                    <h3>{activeGuide.codeTitle || "Code Example"}</h3>
                    <pre>
                      <code>
                        <HighlightedCode code={activeGuide.code} />
                      </code>
                    </pre>
                  </div>
                )}
                {activeGuide.visual && (
                  <div className="answer-section">
                    <h3>{activeGuide.visualTitle || "Illustration"}</h3>
                    <ol className="answer-diagram">
                      {activeGuide.visual.map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="answer-section trap-section">
                  <h3>Common Trap</h3>
                  <p>
                    <InlineText text={activeGuide.trap} />
                  </p>
                </div>
                <div className="answer-section prep-section">
                  <div>
                    <h3>What This Tests</h3>
                    <p>
                      <InlineText text={activeQuestion.tests} />
                    </p>
                  </div>
                  <div>
                    <strong className="section-kicker">Follow-up prompts</strong>
                    <ul>
                      {activeQuestion.followUps.map((item) => (
                        <li key={item}>
                          <InlineText text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {!revealed[activeQuestion.id] && (
                <div className="think-state">
                  <strong>{isFirstRun ? "Start here" : "Think first"}</strong>
                  <p>
                    {isFirstRun
                      ? "Answer this in your own words, reveal the model answer, then mark it reviewed when the reasoning clicks."
                      : thinkPrompt}
                  </p>
                </div>
              )}
            </article>
          ) : isSavedEmpty ? (
            <article key="saved-empty" className="question-detail empty-detail">
              <div className="empty-state">
                <Sparkles size={28} />
                <strong>No saved questions yet</strong>
                <p>Save questions you want to revisit before an interview.</p>
                <button type="button" onClick={showQuestionQueue}>
                  Browse questions
                </button>
              </div>
            </article>
          ) : hasNoMatches ? null : (
            <article key="empty" className="question-detail empty-detail">
              <div className="empty-state">
                <Search size={28} />
                <strong>No question selected</strong>
                <p>Your current search and filters do not match any questions.</p>
                <button type="button" onClick={resetFilters}>
                  Reset filters
                </button>
              </div>
            </article>
          )}
        </div>
      </main>
      <div
        key={sessionNoteKey}
        className="session-note"
        data-tone={sessionTone}
        role="status"
        aria-live="polite"
      >
        {sessionNote}
      </div>
    </div>
  );
}

export default App;
