---
id: fe-use-effect
track: Frontend
category: React
level: Intermediate
question: What should go in useEffect?
sources:
  - label: React: Synchronizing with Effects
    url: https://react.dev/learn/synchronizing-with-effects
  - label: React: You Might Not Need an Effect
    url: https://react.dev/learn/you-might-not-need-an-effect
---

## Learn it

`useEffect` is easier to understand when you first separate three kinds of code inside a React component.

First, there is rendering code. Rendering code calculates what the UI should look like from the current props and state. It should be pure. That means it should not change the outside world. It should not start network requests, modify DOM nodes, subscribe to services, or set timers.

Second, there are event handlers. Event handlers run because a specific user action happened: a click, a form submit, a key press, a selection. If the work is caused by a particular user action, it usually belongs in the event handler.

Third, there are Effects. Effects are for synchronizing React with something outside React because the component is now on the screen or because some rendered state changed. This is why React calls Effects an escape hatch.

So the simple rule is: `useEffect` should not be your default place for logic. It should be used when React needs to coordinate with an external system after rendering.

## Walkthrough

Imagine a video player component:

```jsx
function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  if (isPlaying) {
    ref.current.play();
  } else {
    ref.current.pause();
  }

  return <video ref={ref} src={src} />;
}
```

This is wrong because render is trying to control a DOM node. During render, React is still calculating the UI. The DOM node may not even be ready yet. Rendering should describe the video element, not imperatively play or pause it.

The Effect version synchronizes after React commits the UI:

```jsx
function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} />;
}
```

Now the component says: after this render is on screen, make the real browser video element match the React state.

That is the right mental model. An Effect is not simply code that runs after render. It is code that keeps an external system in sync with what React rendered.

## Make it practical

Good Effect use cases include connecting to a chat server, subscribing to browser events, starting and clearing timers, controlling a non-React widget, manually interacting with a DOM API, and sometimes fetching data when a framework does not provide a better data-fetching layer.

Bad Effect use cases often involve derived state. If you can calculate a value from props or state during render, do that instead.

Avoid this:

```jsx
function Form({ firstName, lastName }) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);
}
```

This creates duplicated truth. React renders once with an old `fullName`, then the Effect runs, then React renders again.

Prefer this:

```jsx
function Form({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
}
```

No Effect is needed because no external system is involved.

## Common mistakes

The biggest mistake is using Effects to repair state that should not exist. If a value can be derived during render, storing it separately creates synchronization bugs.

Another mistake is forgetting cleanup. If an Effect subscribes, it should unsubscribe. If it starts a timer, it should clear the timer. If it starts async work, it should handle cancellation or ignore stale results.

Developers are also surprised when Effects run twice in development Strict Mode. React does this to reveal Effects that are not resilient to being started, cleaned up, and started again.

## Check yourself

- Is this logic caused by rendering, or by a specific user event?
- Is there an external system involved?
- Can this value be calculated from existing props or state instead?
- What cleanup should happen when inputs change or the component unmounts?
- What bug appears if this Effect runs more than once in development?

## Interview version

`useEffect` should be used to synchronize React with external systems after rendering: browser APIs, network connections, subscriptions, timers, imperative widgets, or DOM APIs. It should not be the default place for deriving state or responding to direct user actions.

A strong answer separates render logic, event-handler logic, and Effect logic. It also mentions dependencies, cleanup, stale closures, Strict Mode behavior, and the fact that many data-fetching problems are better handled by framework loaders or libraries than by hand-written Effects.
