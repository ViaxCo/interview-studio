---
id: fe-props-state
track: Frontend
category: React
level: Foundational
question: What is the difference between props and state in React?
sources:
  - label: React: Passing props to a component
    url: https://react.dev/learn/passing-props-to-a-component
  - label: React: State as a snapshot
    url: https://react.dev/learn/state-as-a-snapshot
---

## Learn it

Props and state are both data that affect what a React component renders. The difference is where the data comes from and who is allowed to change it.

Props are data passed into a component by its parent.

State is data a component owns and can update over time.

Think of a component like a function that draws UI. Props are the arguments given to the function. State is the component's own memory between renders.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

In this example, `name` is a prop. `Greeting` does not decide the name. The parent decides it.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

In this example, `count` is state. `Counter` owns it and updates it when the user clicks.

## Walkthrough

Imagine a shopping cart page. The parent component may fetch the user's cart and pass each item into a `CartItem` component.

```jsx
function CartItem({ item }) {
  return (
    <li>
      {item.name} - {item.quantity}
    </li>
  );
}
```

`CartItem` receives `item` as a prop. It should not secretly rewrite the parent's cart data. It can ask the parent to change something by calling a callback prop.

```jsx
function CartItem({ item, onIncrease }) {
  return (
    <li>
      {item.name}
      <button onClick={() => onIncrease(item.id)}>+</button>
    </li>
  );
}
```

Now `CartItem` is still not the owner of the cart. It reports the user's intent upward. The parent, which owns the cart state, decides how to update it.

This is the heart of React data flow: data usually moves down as props, and events or intentions move up through callback props.

## Make it practical

A good rule is: put state in the closest component that needs to own it, but lift it up when multiple components need to share it.

If only a dropdown needs to know whether it is open, local state is fine.

```jsx
function Menu() {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>Menu</button>;
}
```

If the open value affects the page header, sidebar, and content, the state probably belongs higher up.

Props are also how you make components reusable. A `Button` component should not hard-code every label and action. It should receive them.

```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
```

The beginner mistake is thinking state is more powerful, so everything should become state. That creates duplicated truth. If a value can be calculated from props during render, calculate it instead of storing it again.

## Common mistakes

A common mistake is mutating props. Props should be treated as read-only. If a child changes an object it received from a parent, the app can become hard to reason about.

Another mistake is copying props into state without a clear reason.

```jsx
function Profile({ user }) {
  const [name, setName] = useState(user.name);
}
```

This may look fine, but now there are two places for the name: `user.name` and `name`. If the parent passes a different user later, the local state may not update the way you expect.

A better question is: is this value truly local editable state, or am I just duplicating a prop?

## Check yourself

- Who passes props into a component?
- Who updates state?
- Why should props be treated as read-only?
- What does "data down, actions up" mean?
- When should state be lifted to a parent component?

## Interview version

Props are inputs passed from a parent component. State is data a component owns and can update over time. Props are read-only from the child's perspective, while state changes through state setters and triggers re-rendering.

The practical React pattern is data down and actions up: parents pass props down, children call callbacks to report user intent, and state lives at the closest common owner. A strong answer should warn against mutating props or copying props into state without a real reason.
