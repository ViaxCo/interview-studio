import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-debounce-throttle",
  "track": "Frontend",
  "category": "JavaScript",
  "level": "Foundational",
  "question": "What is the difference between debounce and throttle?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Debounce and throttle are techniques for controlling how often a function runs.\n\nThey matter because frontend events can fire very quickly. Typing, scrolling, resizing, mouse movement, and input changes can trigger many calls per second. If every event runs expensive work, the UI can feel slow or the server can receive too many requests.\n\nDebounce waits until activity pauses. Throttle runs at most once in a fixed time window.\n\nUse debounce when you care about the final value after the user stops. Use throttle when you want regular updates while activity continues."
    },
    {
      "title": "Walkthrough",
      "body": "Search input is a debounce example. If a user types `react`, you usually do not want to call the API for `r`, `re`, `rea`, `reac`, and `react`. You can wait until the user pauses typing.\n\n```js\nfunction debounce(callback, delay) {\n  let timerId;\n\n  return function debounced(...args) {\n    clearTimeout(timerId);\n\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, delay);\n  };\n}\n```\n\nScroll tracking is often a throttle example. If a user scrolls continuously, you may want to update position at most every 100ms.\n\n```js\nfunction throttle(callback, delay) {\n  let waiting = false;\n\n  return function throttled(...args) {\n    if (waiting) return;\n\n    callback(...args);\n    waiting = true;\n\n    setTimeout(() => {\n      waiting = false;\n    }, delay);\n  };\n}\n```\n\nThe difference is timing. Debounce resets the timer each time. Throttle allows periodic execution."
    },
    {
      "title": "Make it practical",
      "body": "Use debounce for:\n\n- Search suggestions.\n- Auto-save after typing pauses.\n- Validation after input pauses.\n- Resizing work after the resize stops.\n\nUse throttle for:\n\n- Scroll position updates.\n- Infinite-scroll checks.\n- Drag movement.\n- Mouse movement tracking.\n- Sending periodic analytics during continuous activity.\n\nIn React, be careful that the debounced or throttled function has stable identity. If you recreate it on every render, it may lose its timer state.\n\n```jsx\nfunction SearchBox({ onSearch }) {\n  const debouncedSearch = useMemo(\n    () => debounce(onSearch, 300),\n    [onSearch]\n  );\n\n  return (\n    <input onChange={(event) => debouncedSearch(event.target.value)} />\n  );\n}\n```\n\nIn production, you also need cleanup if a component unmounts while a timer is waiting."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using debounce when the user expects continuous feedback. Scroll position should not wait until scrolling fully stops.\n\nAnother mistake is using throttle for search and still sending intermediate values the user did not mean to submit.\n\nA third mistake is forgetting stale closures. A delayed callback may use old props or state if you do not design it carefully."
    }
  ],
  "answer": "Debounce and throttle are techniques for controlling how often a function runs.",
  "reasoning": "Use debounce for:\n\n- Search suggestions.\n- Auto-save after typing pauses.\n- Validation after input pauses.\n- Resizing work after the resize stops.\n\nUse throttle for:\n\n- Scroll position updates.\n- Infinite-scroll checks.\n- Drag movement.\n- Mouse movement tracking.\n- Sending periodic analytics during continuous activity.\n\nIn React, be careful that the debounced or throttled function has stable identity. If you recreate it on every render, it may lose its timer state.\n\n```jsx\nfunction SearchBox({ onSearch }) {\n  const debouncedSearch = useMemo(\n    () => debounce(onSearch, 300),\n    [onSearch]\n  );\n\n  return (\n    <input onChange={(event) => debouncedSearch(event.target.value)} />\n  );\n}\n```\n\nIn production, you also need cleanup if a component unmounts while a timer is waiting.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What does debounce wait for?",
    "What does throttle limit?",
    "Why is search usually debounced?",
    "Why is scroll usually throttled?",
    "What React bug can happen if a debounced function is recreated every render?"
  ],
  "interviewAnswer": "Debounce delays a function until activity has stopped for a period of time. Throttle allows a function to run at most once per time interval while activity continues.\n\nI would use debounce for search, validation, and autosave after typing pauses. I would use throttle for scroll, resize, drag, or pointer updates where periodic feedback matters. A strong answer mentions performance, user intent, timers, cleanup, and stale closures.",
  "sourceLinks": [
    {
      "label": "MDN: Debounce",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/Debounce"
    },
    {
      "label": "MDN: Throttle",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/Throttle"
    }
  ],
  "beginnerExplanation": "Debounce and throttle are techniques for controlling how often a function runs.\n\nThey matter because frontend events can fire very quickly. Typing, scrolling, resizing, mouse movement, and input changes can trigger many calls per second. If every event runs expensive work, the UI can feel slow or the server can receive too many requests.\n\nDebounce waits until activity pauses. Throttle runs at most once in a fixed time window.\n\nUse debounce when you care about the final value after the user stops. Use throttle when you want regular updates while activity continues.",
  "example": "Search input is a debounce example. If a user types `react`, you usually do not want to call the API for `r`, `re`, `rea`, `reac`, and `react`. You can wait until the user pauses typing.\n\n```js\nfunction debounce(callback, delay) {\n  let timerId;\n\n  return function debounced(...args) {\n    clearTimeout(timerId);\n\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, delay);\n  };\n}\n```\n\nScroll tracking is often a throttle example. If a user scrolls continuously, you may want to update position at most every 100ms.\n\n```js\nfunction throttle(callback, delay) {\n  let waiting = false;\n\n  return function throttled(...args) {\n    if (waiting) return;\n\n    callback(...args);\n    waiting = true;\n\n    setTimeout(() => {\n      waiting = false;\n    }, delay);\n  };\n}\n```\n\nThe difference is timing. Debounce resets the timer each time. Throttle allows periodic execution.",
  "commonMistakes": "A common mistake is using debounce when the user expects continuous feedback. Scroll position should not wait until scrolling fully stops.\n\nAnother mistake is using throttle for search and still sending intermediate values the user did not mean to submit.\n\nA third mistake is forgetting stale closures. A delayed callback may use old props or state if you do not design it carefully."
};
