import {
  ArrowCounterClockwiseIcon,
  BookOpenIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CheckCircleIcon,
  CircleIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ShuffleIcon,
  SparkleIcon,
  SunIcon,
  XIcon
} from "@phosphor-icons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";
import { answerDepth } from "./answerDepth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { categories, levels, questions } from "./questions";
import type {
  AnswerDepth,
  ProgressMap,
  ProgressUpdate,
  Question,
  SerializedProgress,
  StoredState,
  Theme
} from "./questionTypes";

const storageKey = "frontend-interview-studio-state";
const questionIds = new Set(questions.map((item) => item.id));
const initialVisibleLimit = 80;
const visiblePageSize = 80;
const progressKeys = ["revealed", "reviewed", "starred"] as const;
type ProgressKey = (typeof progressKeys)[number];
type QuestionProgressState = Pick<StoredState, ProgressKey>;
type ImportableProgressState = QuestionProgressState & Pick<StoredState, "theme" | "hasThemePreference">;
type SessionTone = "neutral" | "success" | "warning" | "action" | "milestone";
type TopicCssProperties = CSSProperties &
  Partial<Record<"--topic-bg" | "--topic-border" | "--topic-text", string>>;
type ProgressRingStyle = CSSProperties & { "--progress": string };
type AnswerGuide = {
  trap: string;
  frame: string;
  depth?: AnswerDepth;
  moves: string[];
  codeTitle?: string;
  code?: string;
  visualTitle?: string;
  visual?: string[];
};
type AccountProgress = SerializedProgress & {
  userId: string;
  updatedAt?: number;
};
export type AppProps = {
  accountCanSave?: boolean;
  accountPending?: boolean;
  accountPanel?: ReactNode;
  accountProgress?: AccountProgress | null;
  importAccountProgress?: ((progress: Omit<SerializedProgress, "theme">) => Promise<unknown>) | null;
  resetAccountProgress?: (() => Promise<unknown>) | null;
  saveQuestionProgress?: ((questionId: string, progress: ProgressUpdate) => Promise<unknown>) | null;
  saveThemePreference?: ((theme: Theme) => Promise<unknown>) | null;
};

const categoryCounts = questions.reduce<Record<string, number>>((counts, question) => {
  counts[question.category] = (counts[question.category] || 0) + 1;
  return counts;
}, {});
const milestoneMessages: Record<number, string> = {
  25: "25 reviewed. Patterns are starting to repeat.",
  50: "Halfway through. Your answers should feel sharper now.",
  75: "75 reviewed. Time to hunt for weak spots.",
  100: "100 reviewed. Strong foundation built.",
  250: "250 reviewed. You have crossed the midpoint.",
  500: "All 500 reviewed. You have completed the bank."
};

const categoryPrompts: Record<string, string> = {
  Accessibility: "Name the user who benefits, then name the failure mode.",
  Browser: "Start with what the browser guarantees, then where it gets expensive.",
  CSS: "Describe the layout rule first, then the tradeoff it creates.",
  JavaScript: "Say the runtime behavior out loud before naming the syntax.",
  Performance: "Start with what users feel, then trace it to the browser work.",
  React: "Separate render behavior from state ownership before answering.",
  Security: "Name the trust boundary, then explain how the bug gets in.",
  Testing: "Say what confidence the test buys, not just the tool you would use."
};

const topicPalettes: Record<string, TopicCssProperties> = {
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

const darkTopicPalettes: Record<string, TopicCssProperties> = {
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

const categoryTone: Record<string, string> = {
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

const categoryAnswerMoves: Record<string, string[]> = {
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

const defaultAnswerGuide: Pick<AnswerGuide, "trap" | "frame"> = {
  trap:
    "Stopping at the definition. A better answer explains what breaks in real product code when the concept is misunderstood.",
  frame:
    "Give the direct answer first, then add the engineering consequence, a tradeoff, and one concrete example."
};

const answerGuides: Record<string, Partial<AnswerGuide>> = {
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

function topicStyle(categoryName: string, theme: Theme = "light"): TopicCssProperties {
  const palettes = theme === "dark" ? darkTopicPalettes : topicPalettes;
  return palettes[categoryTone[categoryName]] || {};
}

function getAnswerGuide(question: Question): AnswerGuide {
  return {
    ...defaultAnswerGuide,
    depth: answerDepth[question.id],
    moves: categoryAnswerMoves[question.category] || categoryAnswerMoves.JavaScript,
    ...answerGuides[question.id]
  };
}

function InlineText({ text }: { text: string }) {
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

function HighlightedCode({ code }: { code: string }) {
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

function guideSearchText(question: Question) {
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

const questionSearchTextCache = new Map<string, string>();

function getQuestionSearchText(question: Question) {
  const cached = questionSearchTextCache.get(question.id);
  if (cached) return cached;

  const text = [
    question.question,
    question.answer,
    question.reasoning,
    question.tests,
    question.category,
    question.level,
    guideSearchText(question)
  ]
    .join(" ")
    .toLowerCase();

  questionSearchTextCache.set(question.id, text);
  return text;
}

const baseQuestionSearchText = questions.map((item) => ({
  item,
  text: [
    item.question,
    item.answer,
    item.reasoning,
    item.tests,
    item.category,
    item.level
  ]
    .join(" ")
    .toLowerCase()
}));

function emptyStoredState(storageAvailable = true): StoredState {
  return {
    revealed: {},
    reviewed: {},
    starred: {},
    theme: "light",
    hasThemePreference: false,
    storageAvailable
  };
}

function cleanStoredMap(value: unknown): ProgressMap {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value).filter(([id, selected]) => questionIds.has(id) && selected === true)
  );
}

function normalizeStoredState(value: unknown, storageAvailable = true): StoredState {
  const isStoredObject = value && typeof value === "object" && !Array.isArray(value);
  const stored = isStoredObject ? (value as Record<string, unknown>) : {};
  const hasThemePreference = stored.hasThemePreference === true;
  const storedTheme = stored.theme === "light" || stored.theme === "dark" ? stored.theme : "light";

  return {
    revealed: cleanStoredMap(stored.revealed),
    reviewed: cleanStoredMap(stored.reviewed),
    starred: cleanStoredMap(stored.starred),
    theme: hasThemePreference ? storedTheme : "light",
    hasThemePreference,
    storageAvailable
  };
}

function mapFromIds(ids: unknown): ProgressMap {
  if (!Array.isArray(ids)) return {};
  return Object.fromEntries(
    ids.filter((id): id is string => typeof id === "string" && questionIds.has(id)).map((id) => [id, true])
  );
}

function serializeProgress(state: unknown): SerializedProgress {
  const normalized = normalizeStoredState(state);

  return {
    revealed: Object.keys(normalized.revealed).sort(),
    reviewed: Object.keys(normalized.reviewed).sort(),
    starred: Object.keys(normalized.starred).sort(),
    theme: normalized.theme
  };
}

function progressKey(state: unknown) {
  return JSON.stringify(serializeProgress(state));
}

function hasProgressMissingFromAccount(
  deviceState: QuestionProgressState,
  accountState: QuestionProgressState
) {
  return progressKeys.some((key) =>
    Object.keys(deviceState[key]).some((id) => !accountState[key][id])
  );
}

function hasDeviceStateToImport(deviceState: ImportableProgressState, accountState: ImportableProgressState) {
  return (
    hasProgressMissingFromAccount(deviceState, accountState) ||
    (deviceState.hasThemePreference === true && deviceState.theme !== accountState.theme)
  );
}

function applyQuestionUpdate(state: QuestionProgressState, questionId: string, update: ProgressUpdate) {
  for (const key of progressKeys) {
    if (update[key] === undefined) continue;
    if (update[key]) {
      state[key][questionId] = true;
    } else {
      delete state[key][questionId];
    }
  }
}

function questionUpdateMatches(state: QuestionProgressState, questionId: string, update: ProgressUpdate) {
  return progressKeys.every(
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

function loadStoredState(): StoredState {
  const storage = getStorage();
  if (!storage) return emptyStoredState(false);

  try {
    const storedValue = storage.getItem(storageKey);
    return normalizeStoredState(storedValue ? JSON.parse(storedValue) : {});
  } catch {
    return emptyStoredState(false);
  }
}

function saveStoredState(state: unknown) {
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
  accountProgress = undefined,
  importAccountProgress = null,
  resetAccountProgress = null,
  saveQuestionProgress = null,
  saveThemePreference = null
}: AppProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [storedState] = useState(loadStoredState);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [mode, setMode] = useState("browse");
  const [drillScope, setDrillScope] = useState("browse");
  const [activeId, setActiveId] = useState(questions[0]?.id || "");
  const [revealed, setRevealed] = useState(storedState.revealed);
  const [reviewed, setReviewed] = useState(storedState.reviewed);
  const [starred, setStarred] = useState(storedState.starred);
  const [theme, setTheme] = useState(storedState.theme);
  const [storageAvailable, setStorageAvailable] = useState(storedState.storageAvailable);
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetBackup, setResetBackup] = useState<QuestionProgressState | null>(null);
  const [pendingGuestImport, setPendingGuestImport] = useState<ImportableProgressState | null>(null);
  const [sessionNote, setSessionNote] = useState("");
  const [sessionTone, setSessionTone] = useState<SessionTone>("neutral");
  const [sessionNoteKey, setSessionNoteKey] = useState(0);
  const [visibleLimit, setVisibleLimit] = useState(initialVisibleLimit);
  const syncedAccountKey = useRef("");
  const hadAccountSession = useRef(false);
  const pendingQuestionEdits = useRef(new Map<string, ProgressUpdate>());
  const pendingTheme = useRef<Theme | null>(null);
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
      const accountState: ImportableProgressState = {
        revealed: mapFromIds(accountProgress.revealed),
        reviewed: mapFromIds(accountProgress.reviewed),
        starred: mapFromIds(accountProgress.starred),
        theme: accountProgress.theme === "dark" ? "dark" : "light",
        hasThemePreference: true
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

      const nextState: QuestionProgressState & Pick<StoredState, "theme"> = {
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

    return baseQuestionSearchText.filter(({ item, text }) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesLevel = level === "All" || item.level === level;

      if (!matchesCategory || !matchesLevel) return false;
      if (!normalizedQuery) return true;

      return text.includes(normalizedQuery) || getQuestionSearchText(item).includes(normalizedQuery);
    }).map(({ item }) => item);
  }, [category, level, query]);

  const starredQueue = useMemo(
    () => filteredQuestions.filter((item) => starred[item.id]),
    [filteredQuestions, starred]
  );
  const usesSavedQueue = mode === "starred" || (mode === "mock" && drillScope === "starred");
  const randomDrillPool = usesSavedQueue ? starredQueue : filteredQuestions;
  const studyQueue = useMemo(
    () => (usesSavedQueue ? starredQueue : filteredQuestions),
    [filteredQuestions, starredQueue, usesSavedQueue]
  );
  const activeQuestion =
    studyQueue.find((item) => item.id === activeId) || studyQueue[0] || null;
  const activeGuide = activeQuestion ? getAnswerGuide(activeQuestion) : null;
  const queueRows = mode === "mock" && activeQuestion ? [activeQuestion] : studyQueue;
  const visibleQuestions = queueRows.slice(0, mode === "mock" ? 1 : visibleLimit);
  const hasMoreQuestions = queueRows.length > visibleQuestions.length;
  const activeQueueIndex = activeQuestion
    ? studyQueue.findIndex((item) => item.id === activeQuestion.id)
    : -1;
  const hasProgress = [revealed, reviewed, starred].some((map) => Object.values(map).some(Boolean));
  const isFirstRun =
    !hasProgress && mode === "browse" && !query && category === "All" && level === "All";
  const hasNoMatches = filteredQuestions.length === 0;
  const isSavedEmpty =
    usesSavedQueue && filteredQuestions.length > 0 && !visibleQuestions.length;

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
  const progress = questions.length
    ? reviewedCount >= questions.length
      ? 100
      : Math.floor((reviewedCount / questions.length) * 100)
    : 0;
  const thinkPrompt =
    activeQuestion &&
    (categoryPrompts[activeQuestion.category] ||
      `Answer like a senior engineer: claim, reason, tradeoff, example.`);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      const tagName = event.target instanceof HTMLElement ? event.target.tagName : "";
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

  function toggleMap(setter: Dispatch<SetStateAction<ProgressMap>>, id: string) {
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

  function showSessionNote(message: string, tone: SessionTone = "neutral") {
    setSessionTone(tone);
    setSessionNote(message);
    setSessionNoteKey((current) => current + 1);
  }

  function blockProgressEdit() {
    if (!accountPending) return false;
    showSessionNote("Account progress is loading.", "warning");
    return true;
  }

  function clearResetBackup() {
    setResetBackup(null);
  }

  function saveAccountQuestion(questionId: string, progressUpdate: ProgressUpdate) {
    if (!accountCanSave || !saveQuestionProgress) return;
    pendingQuestionEdits.current.set(questionId, {
      ...pendingQuestionEdits.current.get(questionId),
      ...progressUpdate
    });
    saveQuestionProgress(questionId, progressUpdate).catch(() => {
      showSessionNote("Account sync failed. Your change is still visible here.", "warning");
    });
  }

  function saveAccountTheme(themeValue: Theme) {
    if (!accountCanSave || !saveThemePreference) return;
    pendingTheme.current = themeValue;
    saveThemePreference(themeValue).catch(() => {
      showSessionNote("Theme sync failed. Your change is still visible here.", "warning");
    });
  }

  function serializeQuestionProgress(state: unknown) {
    const { revealed: revealedIds, reviewed: reviewedIds, starred: starredIds } = serializeProgress(state);
    return { revealed: revealedIds, reviewed: reviewedIds, starred: starredIds };
  }

  function queueImportedProgress(state: QuestionProgressState) {
    for (const key of progressKeys) {
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
    setDrillScope(mode === "mock" ? drillScope : mode === "starred" ? "starred" : "browse");
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
    clearResetBackup();
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
    setDrillScope("browse");
    showSessionNote("Filters cleared.", "action");
  }

  function showQuestionQueue() {
    setMode("browse");
    setDrillScope("browse");
    showSessionNote("Question queue shown.", "action");
  }

  function moveQuestion(direction: number) {
    if (!studyQueue.length || !activeQuestion) return;
    const currentIndex = activeQueueIndex < 0 ? 0 : activeQueueIndex;
    const nextIndex = (currentIndex + direction + studyQueue.length) % studyQueue.length;
    setActiveId(studyQueue[nextIndex].id);
    if (mode === "mock") setMode(drillScope === "starred" ? "starred" : "browse");
    showSessionNote(`Question ${nextIndex + 1} of ${studyQueue.length}.`);
  }

  function markReviewedAndContinue() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    clearResetBackup();
    setReviewed((current) => ({ ...current, [activeQuestion.id]: true }));
    saveAccountQuestion(activeQuestion.id, { reviewed: true });
    moveQuestion(1);
    showSessionNote("Marked reviewed. Moving to the next question.", "success");
  }

  function toggleReviewed() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    clearResetBackup();
    const willReview = !reviewed[activeQuestion.id];
    toggleMap(setReviewed, activeQuestion.id);
    saveAccountQuestion(activeQuestion.id, { reviewed: willReview });
    showSessionNote(willReview ? "Marked reviewed." : "Marked unreviewed.", willReview ? "success" : "neutral");
  }

  function toggleStarred() {
    if (blockProgressEdit()) return;
    if (!activeQuestion) return;
    clearResetBackup();
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
    clearResetBackup();
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
    <TooltipProvider>
      <div className="study-shell min-h-screen bg-background text-foreground">
        <a
          className="sr-only fixed left-3 top-3 z-50 rounded-md bg-card px-3 py-2 text-xs text-card-foreground ring-1 ring-border focus:not-sr-only"
          href="#main-content"
        >
          Skip to questions
        </a>

        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside
            className="study-rail border-b border-sidebar-border bg-sidebar text-sidebar-foreground lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r"
            aria-label="Interview studio navigation"
          >
            <div className="flex h-full min-h-0 flex-col">
              <div className="flex items-start gap-3 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                  <BookOpenIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase text-sidebar-foreground/55">Study deck</p>
                  <h1 className="font-heading text-lg font-bold">Interview Studio</h1>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  aria-pressed={theme === "dark"}
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </Button>
              </div>

              <div className="flex flex-col gap-3 px-5 pb-5">
                <Card size="sm" className="border-sidebar-border bg-sidebar-accent/55">
                  <CardHeader>
                    <CardTitle>Progress</CardTitle>
                    <CardDescription>{questions.length} questions in this collection.</CardDescription>
                    <CardAction>
                      <Badge variant="secondary">{progress}%</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <Progress value={progress}>
                      <ProgressLabel>{reviewedCount} reviewed</ProgressLabel>
                      <span className="ml-auto text-xs tabular-nums text-muted-foreground">{progress}%</span>
                    </Progress>
                  </CardContent>
                </Card>

                {accountPanel || (
                  <Card size="sm" className="border-sidebar-border bg-sidebar-accent/35" aria-label="Guest progress">
                    <CardHeader>
                      <CardTitle>Guest progress</CardTitle>
                      <CardDescription>Saved on this device. Add Convex to sync across devices.</CardDescription>
                    </CardHeader>
                  </Card>
                )}
              </div>

              <div className="px-5 pb-3">
                <Tabs
                  value={mode === "starred" ? "starred" : "browse"}
                  onValueChange={(value) => {
                    const nextMode = value === "starred" ? "starred" : "browse";
                    setMode(nextMode);
                    setDrillScope(nextMode);
                  }}
                >
                  <TabsList className="w-full">
                    <TabsTrigger value="browse" className="flex-1">
                      <FunnelIcon data-icon="inline-start" /> Browse
                    </TabsTrigger>
                    <TabsTrigger value="starred" className="flex-1">
                      <SparkleIcon data-icon="inline-start" /> Saved
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <Separator />

              <ScrollArea className="max-h-52 min-h-0 flex-1 lg:max-h-none">
                <div className="flex flex-col gap-1 p-4" aria-label="Question categories">
                  {["All", ...categories].map((item) => (
                    <Button
                      type="button"
                      variant={category === item ? "secondary" : "ghost"}
                      size="sm"
                      className="h-auto w-full justify-between py-2 text-left"
                      aria-pressed={category === item}
                      key={item}
                      onClick={() => setCategory(item)}
                    >
                      <span className="truncate">{item}</span>
                      <Badge variant={category === item ? "default" : "outline"}>
                        {item === "All" ? questions.length : categoryCounts[item] || 0}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </ScrollArea>

              {(hasProgress || confirmReset || resetBackup || (pendingGuestImport && accountCanSave) || !storageAvailable) && (
                <div className="flex flex-col gap-2 border-t border-sidebar-border p-5">
                  {!resetBackup && (hasProgress || confirmReset) && (
                    <Button
                      type="button"
                      variant={confirmReset ? "destructive" : "outline"}
                      size="sm"
                      onClick={() => (confirmReset ? resetProgress() : setConfirmReset(true))}
                    >
                      <ArrowCounterClockwiseIcon data-icon="inline-start" />
                      {confirmReset ? "Clear progress" : "Reset progress"}
                    </Button>
                  )}
                  {confirmReset && (
                    <Alert role="status">
                      <AlertTitle>Confirm reset</AlertTitle>
                      <AlertDescription>
                        {accountCanSave
                          ? "This clears reviewed, saved, and revealed answers for your account."
                          : "This clears reviewed, saved, and revealed answers on this device."}
                      </AlertDescription>
                      <Button type="button" variant="ghost" size="sm" onClick={() => setConfirmReset(false)}>
                        Cancel
                      </Button>
                    </Alert>
                  )}
                  {resetBackup && (
                    <Alert role="status">
                      <AlertTitle>{accountCanSave ? "Account progress cleared." : "Local progress cleared."}</AlertTitle>
                      <Button type="button" variant="outline" size="sm" onClick={undoReset}>
                        Undo
                      </Button>
                    </Alert>
                  )}
                  {pendingGuestImport && accountCanSave && (
                    <Alert role="status">
                      <AlertTitle>Device progress found</AlertTitle>
                      <AlertDescription>Import it into this account, or dismiss it.</AlertDescription>
                      <div className="mt-2 flex gap-2">
                        <Button type="button" size="sm" onClick={importGuestProgress}>
                          Import
                        </Button>
                        <Button type="button" variant="outline" size="sm" onClick={() => setPendingGuestImport(null)}>
                          Dismiss
                        </Button>
                      </div>
                    </Alert>
                  )}
                  {!storageAvailable && (
                    <Alert variant="destructive" role="status">
                      <AlertTitle>Storage blocked</AlertTitle>
                      <AlertDescription>
                        Progress and theme will not be saved because this browser blocked local storage.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </aside>

          <main className="min-w-0" id="main-content">
            <header className="study-command-bar sticky top-0 z-20 border-b bg-background/95 px-4 py-3 backdrop-blur lg:px-6">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                <div className="min-w-0 xl:w-52">
                  <p className="text-xs font-medium uppercase text-muted-foreground">Current run</p>
                  <p className="truncate text-sm font-semibold">
                    {mode === "mock" ? "Random drill" : mode === "starred" ? "Saved review" : "Browse practice"}
                  </p>
                </div>
                <div className="relative min-w-0 flex-1">
                  <MagnifyingGlassIcon className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    ref={searchInputRef}
                    aria-label="Search questions"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search questions, answers, concepts"
                    className="h-10 bg-card pl-8 pr-8"
                  />
                  {query && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      className="absolute right-1 top-1"
                      aria-label="Clear search"
                      onClick={() => setQuery("")}
                    >
                      <XIcon />
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span id="level-filter-label">Level</span>
                  <Select value={level} onValueChange={(value) => value && setLevel(value)}>
                    <SelectTrigger aria-labelledby="level-filter-label" className="w-40 bg-card">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {["All", ...levels].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="button" disabled={!randomDrillPool.length} onClick={pickRandomQuestion}>
                  <ShuffleIcon data-icon="inline-start" />
                  Start random drill
                </Button>
              </div>
            </header>

            <div className="grid gap-5 p-4 lg:p-6 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px]">
              {activeQuestion && activeGuide ? (
                <article key={activeQuestion.id} className="flex min-w-0 flex-col gap-5">
                  <Card className="study-stage overflow-hidden">
                    <CardHeader className="gap-5 border-b">
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary">{activeQuestion.category}</Badge>
                        <Badge variant="outline">{activeQuestion.level}</Badge>
                        <Badge variant={revealed[activeQuestion.id] ? "default" : "secondary"}>
                          {revealed[activeQuestion.id] ? "Answer shown" : "Try first"}
                        </Badge>
                        <Badge variant={reviewed[activeQuestion.id] ? "default" : "outline"}>
                          {reviewed[activeQuestion.id] ? "Reviewed" : "Unreviewed"}
                        </Badge>
                      </div>
                      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
                        <div className="min-w-0">
                          <CardDescription>
                            Question {activeQueueIndex + 1} of {studyQueue.length}
                          </CardDescription>
                          <h2 className="mt-3 max-w-[24ch] font-heading text-2xl font-bold leading-[1.12] sm:text-3xl lg:text-4xl">
                            <InlineText text={activeQuestion.question} />
                          </h2>
                        </div>
                        <div className="xl:justify-self-end">
                          <Button
                            type="button"
                            variant={starred[activeQuestion.id] ? "default" : "outline"}
                            size="sm"
                            aria-pressed={!!starred[activeQuestion.id]}
                            aria-label={
                              starred[activeQuestion.id] ? "Remove from saved questions" : "Save for review"
                            }
                            onClick={toggleStarred}
                          >
                            <SparkleIcon data-icon="inline-start" />
                            {starred[activeQuestion.id] ? "Saved" : "Save"}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                      <div className="flex flex-wrap gap-2">
                        <Button
                          type="button"
                          size="lg"
                          aria-expanded={!!revealed[activeQuestion.id]}
                          aria-controls={`answer-${activeQuestion.id}`}
                          aria-keyshortcuts="R"
                          onClick={toggleRevealed}
                        >
                          <CaretDownIcon data-icon="inline-start" />
                          {revealed[activeQuestion.id] ? "Hide answer" : "Reveal answer"}
                          <Kbd>R</Kbd>
                        </Button>
                        <Button
                          type="button"
                          variant={reviewed[activeQuestion.id] ? "secondary" : "outline"}
                          size="lg"
                          aria-pressed={!!reviewed[activeQuestion.id]}
                          onClick={toggleReviewed}
                        >
                          <CheckCircleIcon data-icon="inline-start" />
                          {reviewed[activeQuestion.id] ? "Unmark reviewed" : "Mark reviewed"}
                        </Button>
                        <Button type="button" variant="outline" size="lg" onClick={markReviewedAndContinue}>
                          <CheckCircleIcon data-icon="inline-start" />
                          Reviewed and next
                        </Button>
                      </div>

                      <ButtonGroup aria-label="Question navigation" className="justify-self-start lg:justify-self-end">
                        <Button type="button" variant="outline" aria-keyshortcuts="P" onClick={() => moveQuestion(-1)}>
                          <CaretLeftIcon data-icon="inline-start" /> Previous <Kbd>P</Kbd>
                        </Button>
                        <div className="flex items-center border border-input bg-card px-3 text-xs text-muted-foreground" aria-live="polite">
                          {activeQueueIndex + 1} of {studyQueue.length}
                        </div>
                        <Button type="button" variant="outline" aria-keyshortcuts="N" onClick={() => moveQuestion(1)}>
                          Next <CaretRightIcon data-icon="inline-end" /> <Kbd>N</Kbd>
                        </Button>
                      </ButtonGroup>
                    </CardContent>
                  </Card>

                  <section id={`answer-${activeQuestion.id}`} hidden={!revealed[activeQuestion.id]}>
                    {revealed[activeQuestion.id] && (
                      <div className="flex flex-col gap-4">
                        <Card className="answer-panel">
                          <CardHeader>
                            <CardTitle>Model Answer</CardTitle>
                          </CardHeader>
                          <CardContent className="reading-copy">
                            <p><InlineText text={activeQuestion.answer} /></p>
                          </CardContent>
                        </Card>

                        <Card className="answer-panel">
                          <CardHeader>
                            <CardTitle>Engineering Reasoning</CardTitle>
                          </CardHeader>
                          <CardContent className="reading-copy">
                            <p><InlineText text={activeQuestion.reasoning} /></p>
                          </CardContent>
                        </Card>

                        <Card className="answer-panel">
                          <CardHeader>
                            <CardTitle>Study the Reasoning</CardTitle>
                            <CardDescription>Use this to shape a senior-level answer.</CardDescription>
                          </CardHeader>
                          <CardContent className="reading-copy flex flex-col gap-4">
                            {activeGuide.depth && (
                              <div className="grid gap-3 lg:grid-cols-3">
                                <div className="rounded-md border bg-muted/35 p-3">
                                  <strong className="text-xs uppercase text-muted-foreground">Mental model</strong>
                                  <p className="mt-2"><InlineText text={activeGuide.depth.mentalModel} /></p>
                                </div>
                                <div className="rounded-md border bg-muted/35 p-3">
                                  <strong className="text-xs uppercase text-muted-foreground">Engineering use</strong>
                                  <p className="mt-2"><InlineText text={activeGuide.depth.engineeringUse} /></p>
                                </div>
                                <div className="rounded-md border bg-muted/35 p-3">
                                  <strong className="text-xs uppercase text-muted-foreground">Interview signal</strong>
                                  <p className="mt-2"><InlineText text={activeGuide.depth.interviewSignal} /></p>
                                </div>
                              </div>
                            )}
                            <Separator />
                            <div className="max-w-[75ch]">
                              <strong className="text-xs uppercase text-muted-foreground">Senior answer moves</strong>
                              <p className="mt-2"><InlineText text={activeGuide.frame} /></p>
                              <ul className="mt-3 list-disc pl-5">
                                {activeGuide.moves.map((item) => (
                                  <li key={item}><InlineText text={item} /></li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        {activeGuide.code && (
                          <Card className="answer-panel">
                            <CardHeader>
                              <CardTitle>{activeGuide.codeTitle || "Code Example"}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <pre className="overflow-x-auto rounded-md bg-muted p-4 text-xs leading-6">
                                <code><HighlightedCode code={activeGuide.code} /></code>
                              </pre>
                            </CardContent>
                          </Card>
                        )}

                        {activeGuide.visual && (
                          <Card className="answer-panel">
                            <CardHeader>
                              <CardTitle>{activeGuide.visualTitle || "Illustration"}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ol className="grid gap-2 sm:grid-cols-3">
                                {activeGuide.visual.map((item, index) => (
                                  <li key={item} className="rounded-md border bg-muted/35 p-3 text-sm/6">
                                    <Badge variant="outline">{index + 1}</Badge>
                                    <span className="mt-3 block">{item}</span>
                                  </li>
                                ))}
                              </ol>
                            </CardContent>
                          </Card>
                        )}

                        <Alert>
                          <AlertTitle>Common Trap</AlertTitle>
                          <AlertDescription><InlineText text={activeGuide.trap} /></AlertDescription>
                        </Alert>

                        <Card className="answer-panel">
                          <CardHeader>
                            <CardTitle>What This Tests</CardTitle>
                          </CardHeader>
                          <CardContent className="reading-copy grid gap-4 lg:grid-cols-2">
                            <p><InlineText text={activeQuestion.tests} /></p>
                            <div>
                              <strong className="text-xs uppercase text-muted-foreground">Follow-up prompts</strong>
                              <ul className="mt-2 list-disc pl-5">
                                {activeQuestion.followUps.map((item) => (
                                  <li key={item}><InlineText text={item} /></li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </section>

                  {!revealed[activeQuestion.id] && (
                    <Alert className="answer-panel">
                      <AlertTitle>{isFirstRun ? "Start here" : "Think first"}</AlertTitle>
                      <AlertDescription>
                        {isFirstRun
                          ? "Answer this in your own words, reveal the model answer, then mark it reviewed when the reasoning clicks."
                          : thinkPrompt}
                      </AlertDescription>
                    </Alert>
                  )}
                </article>
              ) : isSavedEmpty ? (
                <Card key="saved-empty" className="answer-panel">
                  <CardContent>
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon"><SparkleIcon /></EmptyMedia>
                        <EmptyTitle>No saved questions yet</EmptyTitle>
                        <EmptyDescription>Save questions you want to revisit before an interview.</EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button type="button" onClick={showQuestionQueue}>Browse questions</Button>
                      </EmptyContent>
                    </Empty>
                  </CardContent>
                </Card>
              ) : hasNoMatches ? null : (
                <Card key="empty" className="answer-panel">
                  <CardContent>
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon"><MagnifyingGlassIcon /></EmptyMedia>
                        <EmptyTitle>No question selected</EmptyTitle>
                        <EmptyDescription>Your current search and filters do not match any questions.</EmptyDescription>
                      </EmptyHeader>
                      <EmptyContent>
                        <Button type="button" variant="outline" onClick={resetFilters}>Reset filters</Button>
                      </EmptyContent>
                    </Empty>
                  </CardContent>
                </Card>
              )}

              <Card
                role="region"
                aria-label="Questions"
                className="question-rail min-h-[360px] xl:sticky xl:top-[88px] xl:h-[calc(100vh-112px)]"
              >
                <CardHeader>
                  <CardTitle>
                    {mode === "mock" ? "Drill card" : mode === "starred" ? "Saved queue" : "Question queue"}
                  </CardTitle>
                  <CardDescription>
                    {visibleQuestions.length}
                    {queueRows.length > visibleQuestions.length ? ` of ${queueRows.length}` : ""} shown
                  </CardDescription>
                </CardHeader>
                <CardContent className="min-h-0 flex-1">
                  <ScrollArea className="h-[520px] pr-2 xl:h-full">
                    <div className="flex flex-col gap-2">
                      {visibleQuestions.map((item, index) => (
                        <Button
                          type="button"
                          variant={activeQuestion?.id === item.id ? "secondary" : "ghost"}
                          className={cn(
                            "h-auto w-full justify-start px-2 py-2.5 text-left",
                            activeQuestion?.id === item.id && "shadow-xs"
                          )}
                          aria-current={activeQuestion?.id === item.id ? "true" : undefined}
                          key={item.id}
                          onClick={() => setActiveId(item.id)}
                        >
                          <span className="flex min-w-0 flex-1 items-start gap-2">
                            <Badge variant="outline" className="font-mono tabular-nums">
                              {String(index + 1).padStart(2, "0")}
                            </Badge>
                            <span className="min-w-0 flex-1">
                              <span className="line-clamp-2 block text-xs font-medium">
                                {item.question}
                              </span>
                              <span className="mt-1 flex flex-wrap gap-1">
                                <Badge variant="secondary">{item.category}</Badge>
                                <Badge variant="outline">{item.level}</Badge>
                              </span>
                            </span>
                          </span>
                          {reviewed[item.id] ? <CheckCircleIcon /> : <CircleIcon />}
                        </Button>
                      ))}

                      {hasMoreQuestions && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            setVisibleLimit((current) => Math.min(queueRows.length, current + visiblePageSize))
                          }
                        >
                          Show {Math.min(visiblePageSize, queueRows.length - visibleQuestions.length)} more
                        </Button>
                      )}

                      {!visibleQuestions.length && filteredQuestions.length === 0 && (
                        <Empty>
                          <EmptyHeader>
                            <EmptyMedia variant="icon">
                              <MagnifyingGlassIcon />
                            </EmptyMedia>
                            <EmptyTitle>No matching questions</EmptyTitle>
                            <EmptyDescription>
                              Clear search or reset filters to return to the full question bank.
                            </EmptyDescription>
                          </EmptyHeader>
                          <EmptyContent>
                            <Button type="button" variant="outline" onClick={resetFilters}>
                              Reset filters
                            </Button>
                          </EmptyContent>
                        </Empty>
                      )}

                      {!visibleQuestions.length && isSavedEmpty && (
                        <Empty>
                          <EmptyHeader>
                            <EmptyMedia variant="icon"><SparkleIcon /></EmptyMedia>
                            <EmptyTitle>No saved questions yet</EmptyTitle>
                            <EmptyDescription>Save questions you want to revisit before an interview.</EmptyDescription>
                          </EmptyHeader>
                        </Empty>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>

        {sessionNote && (
          <div
            key={sessionNoteKey}
            className="fixed bottom-4 left-1/2 z-50 max-w-[calc(100vw-2rem)] -translate-x-1/2 border bg-card px-4 py-2 text-xs text-card-foreground shadow-md data-[tone=success]:border-primary data-[tone=warning]:border-destructive data-[tone=action]:border-ring data-[tone=milestone]:border-primary"
            data-tone={sessionTone}
            role="status"
            aria-live="polite"
          >
            {sessionNote}
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

export default App;
