---
id: fe-react-rerenders
track: Frontend
category: React
level: Intermediate
question: What causes React components to re-render?
sources:
  - label: React: Render and commit
    url: https://react.dev/learn/render-and-commit
  - label: React: Keeping components pure
    url: https://react.dev/learn/keeping-components-pure
---

## Learn it

A React render is React calling your component function to calculate what the UI should look like. A re-render means React calls it again because something changed.

The beginner mistake is thinking a render always means the DOM changed. Rendering is calculation. After rendering, React compares the new result to the previous result and commits the necessary DOM changes.

Components re-render when their state changes, their parent renders, or context they use changes. Props are part of the parent render path: if a parent renders, React may call the child again with the current props.

## Walkthrough

Here is a simple example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  console.log("render");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Clicking the button updates state. React calls `Counter` again. The new render returns UI with the new count.

Parent renders can also cause child renders:

```jsx
function Parent() {
  const [theme, setTheme] = useState("light");

  return <Child />;
}
```

If `theme` changes, `Parent` renders again. `Child` may also be called again even if its props did not change. That is not automatically a bug. React rendering should be pure and cheap enough that normal renders are fine.

## Make it practical

The right question is not "how do I stop all renders?" The right question is "which renders are expensive or causing visible problems?"

Common tools:

- Move state down so only the component that needs it re-renders.
- Split large components into smaller components.
- Use `React.memo` when a child receives stable props and rendering it is expensive.
- Use `useMemo` for expensive derived calculations.
- Use `useCallback` when function identity causes memoized children to re-render.
- Avoid putting frequently changing values in broad context providers.

```jsx
const UserRow = React.memo(function UserRow({ user, onSelect }) {
  return <button onClick={() => onSelect(user.id)}>{user.name}</button>;
});
```

Memoization is not free. It adds comparison work and complexity. Use it when there is a measured or obvious reason.

## Common mistakes

A common mistake is treating every re-render as bad. Many renders are harmless.

Another mistake is memoizing everything. That can make code harder to understand without improving performance.

A third mistake is mutating objects. If you mutate state in place, React may not see a meaningful change, and memoized components may behave incorrectly.

Also remember that render should be pure. Do not start network requests, change DOM manually, or write to storage during render.

## Check yourself

- What is React doing during render?
- Does every render change the DOM?
- What causes a component to re-render?
- Why should render logic be pure?
- When is memoization useful?

## Interview version

React components re-render when state changes, a parent renders, or consumed context changes. Rendering means React calls the component to calculate the next UI; it does not always mean the DOM changed.

A strong answer should explain render versus commit, purity, parent-child render behavior, and practical optimization tools like moving state down, splitting components, memoization, and avoiding overly broad context updates.
