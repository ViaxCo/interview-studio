---
id: fe-react-keys
track: Frontend
category: React
level: Intermediate
question: Why are keys important when rendering lists in React?
sources:
  - label: React: Rendering lists
    url: https://react.dev/learn/rendering-lists
  - label: React: Preserving and resetting state
    url: https://react.dev/learn/preserving-and-resetting-state
---

## Learn it

Keys help React understand which item is which when a list changes.

When React renders a list, it does not only see text on the screen. It also has component instances, DOM nodes, input state, focus, and sometimes local component state attached to each item. If the list changes, React needs to match the old items to the new items.

The key is the stable identity for each item.

```jsx
const rows = users.map((user) => (
  <UserRow key={user.id} user={user} />
));
```

Here, `user.id` tells React that this row belongs to this specific user. If the list is sorted, filtered, inserted into, or deleted from, React can still match each row to the same user identity.

Without good keys, React may reuse the wrong row. That can cause visual bugs, wrong input values, lost state, strange animations, or focus jumping.

## Walkthrough

Imagine a list of editable todo items.

```jsx
function TodoList({ todos }) {
  return todos.map((todo, index) => (
    <TodoRow key={index} todo={todo} />
  ));
}
```

Using `index` looks harmless when the list never changes. But if a new todo is inserted at the top, every old item gets a new index.

Before insert:

1. Buy milk has key `0`.
2. Pay rent has key `1`.

After insert:

1. Call bank has key `0`.
2. Buy milk has key `1`.
3. Pay rent has key `2`.

React sees key `0` and thinks the first row identity stayed the same, even though the actual todo changed from Buy milk to Call bank. If `TodoRow` has local state, React may preserve that state on the wrong todo.

With stable IDs, the identity stays attached to the data.

```jsx
function TodoList({ todos }) {
  return todos.map((todo) => (
    <TodoRow key={todo.id} todo={todo} />
  ));
}
```

Now inserting, deleting, or sorting does not confuse item identity.

## Make it practical

Use IDs from your data whenever possible: database IDs, slugs, stable UUIDs, or another value that uniquely identifies that item among its siblings.

Keys only need to be unique among siblings in the same list. They do not need to be globally unique across the entire app.

Avoid generating keys during render with `Math.random()` or a new UUID call. That gives React a different key every render, so React treats every item as brand new. That can destroy local state and create unnecessary DOM work.

```jsx
// Bad: a new key every render.
items.map((item) => <Row key={crypto.randomUUID()} item={item} />);

// Good: the key comes from stable item identity.
items.map((item) => <Row key={item.id} item={item} />);
```

There are rare cases where index keys are acceptable: a static list that never reorders, inserts, deletes, filters, or stores local item state. But in interview and production thinking, stable data IDs are the default answer.

## Common mistakes

A common mistake is thinking keys are passed as normal props. They are not. React uses `key` internally. If the child component needs the ID, pass it separately.

```jsx
<UserRow key={user.id} userId={user.id} />
```

Another mistake is thinking keys only affect performance. They affect correctness too. Bad keys can attach state to the wrong item.

A third mistake is using the array index because it removes a warning. Removing the warning is not the goal. Giving React stable identity is the goal.

## Check yourself

- What does a key tell React?
- Why can array indexes break when items are inserted or sorted?
- Why is `Math.random()` a bad key?
- Do keys need to be globally unique across the app?
- How do keys relate to preserving or resetting component state?

## Interview version

Keys give React stable identity for items in a list so it can match previous and next renders correctly. Good keys help React preserve the right DOM and component state when items are inserted, removed, filtered, or reordered.

I would use stable IDs from the data. I would avoid indexes for dynamic lists and avoid random keys because they change every render. A strong answer should mention that keys are about correctness and identity, not only performance.
