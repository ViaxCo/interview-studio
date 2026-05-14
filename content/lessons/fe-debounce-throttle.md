---
id: fe-debounce-throttle
track: Frontend
category: JavaScript
level: Foundational
question: What is the difference between debounce and throttle?
sources:
  - label: MDN: Debounce
    url: https://developer.mozilla.org/en-US/docs/Glossary/Debounce
  - label: MDN: Throttle
    url: https://developer.mozilla.org/en-US/docs/Glossary/Throttle
---

## Learn it

Debounce and throttle are techniques for controlling how often a function runs.

They matter because frontend events can fire very quickly. Typing, scrolling, resizing, mouse movement, and input changes can trigger many calls per second. If every event runs expensive work, the UI can feel slow or the server can receive too many requests.

Debounce waits until activity pauses. Throttle runs at most once in a fixed time window.

Use debounce when you care about the final value after the user stops. Use throttle when you want regular updates while activity continues.

## Walkthrough

Search input is a debounce example. If a user types `react`, you usually do not want to call the API for `r`, `re`, `rea`, `reac`, and `react`. You can wait until the user pauses typing.

```js
function debounce(callback, delay) {
  let timerId;

  return function debounced(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

Scroll tracking is often a throttle example. If a user scrolls continuously, you may want to update position at most every 100ms.

```js
function throttle(callback, delay) {
  let waiting = false;

  return function throttled(...args) {
    if (waiting) return;

    callback(...args);
    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
```

The difference is timing. Debounce resets the timer each time. Throttle allows periodic execution.

## Make it practical

Use debounce for:

- Search suggestions.
- Auto-save after typing pauses.
- Validation after input pauses.
- Resizing work after the resize stops.

Use throttle for:

- Scroll position updates.
- Infinite-scroll checks.
- Drag movement.
- Mouse movement tracking.
- Sending periodic analytics during continuous activity.

In React, be careful that the debounced or throttled function has stable identity. If you recreate it on every render, it may lose its timer state.

```jsx
function SearchBox({ onSearch }) {
  const debouncedSearch = useMemo(
    () => debounce(onSearch, 300),
    [onSearch]
  );

  return (
    <input onChange={(event) => debouncedSearch(event.target.value)} />
  );
}
```

In production, you also need cleanup if a component unmounts while a timer is waiting.

## Common mistakes

A common mistake is using debounce when the user expects continuous feedback. Scroll position should not wait until scrolling fully stops.

Another mistake is using throttle for search and still sending intermediate values the user did not mean to submit.

A third mistake is forgetting stale closures. A delayed callback may use old props or state if you do not design it carefully.

## Check yourself

- What does debounce wait for?
- What does throttle limit?
- Why is search usually debounced?
- Why is scroll usually throttled?
- What React bug can happen if a debounced function is recreated every render?

## Interview version

Debounce delays a function until activity has stopped for a period of time. Throttle allows a function to run at most once per time interval while activity continues.

I would use debounce for search, validation, and autosave after typing pauses. I would use throttle for scroll, resize, drag, or pointer updates where periodic feedback matters. A strong answer mentions performance, user intent, timers, cleanup, and stale closures.
