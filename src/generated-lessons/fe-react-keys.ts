import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-react-keys",
  "track": "Frontend",
  "category": "React",
  "level": "Intermediate",
  "question": "Why are keys important when rendering lists in React?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Keys help React understand which item is which when a list changes.\n\nWhen React renders a list, it does not only see text on the screen. It also has component instances, DOM nodes, input state, focus, and sometimes local component state attached to each item. If the list changes, React needs to match the old items to the new items.\n\nThe key is the stable identity for each item.\n\n```jsx\nconst rows = users.map((user) => (\n  <UserRow key={user.id} user={user} />\n));\n```\n\nHere, `user.id` tells React that this row belongs to this specific user. If the list is sorted, filtered, inserted into, or deleted from, React can still match each row to the same user identity.\n\nWithout good keys, React may reuse the wrong row. That can cause visual bugs, wrong input values, lost state, strange animations, or focus jumping."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a list of editable todo items.\n\n```jsx\nfunction TodoList({ todos }) {\n  return todos.map((todo, index) => (\n    <TodoRow key={index} todo={todo} />\n  ));\n}\n```\n\nUsing `index` looks harmless when the list never changes. But if a new todo is inserted at the top, every old item gets a new index.\n\nBefore insert:\n\n1. Buy milk has key `0`.\n2. Pay rent has key `1`.\n\nAfter insert:\n\n1. Call bank has key `0`.\n2. Buy milk has key `1`.\n3. Pay rent has key `2`.\n\nReact sees key `0` and thinks the first row identity stayed the same, even though the actual todo changed from Buy milk to Call bank. If `TodoRow` has local state, React may preserve that state on the wrong todo.\n\nWith stable IDs, the identity stays attached to the data.\n\n```jsx\nfunction TodoList({ todos }) {\n  return todos.map((todo) => (\n    <TodoRow key={todo.id} todo={todo} />\n  ));\n}\n```\n\nNow inserting, deleting, or sorting does not confuse item identity."
    },
    {
      "title": "Make it practical",
      "body": "Use IDs from your data whenever possible: database IDs, slugs, stable UUIDs, or another value that uniquely identifies that item among its siblings.\n\nKeys only need to be unique among siblings in the same list. They do not need to be globally unique across the entire app.\n\nAvoid generating keys during render with `Math.random()` or a new UUID call. That gives React a different key every render, so React treats every item as brand new. That can destroy local state and create unnecessary DOM work.\n\n```jsx\n// Bad: a new key every render.\nitems.map((item) => <Row key={crypto.randomUUID()} item={item} />);\n\n// Good: the key comes from stable item identity.\nitems.map((item) => <Row key={item.id} item={item} />);\n```\n\nThere are rare cases where index keys are acceptable: a static list that never reorders, inserts, deletes, filters, or stores local item state. But in interview and production thinking, stable data IDs are the default answer."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is thinking keys are passed as normal props. They are not. React uses `key` internally. If the child component needs the ID, pass it separately.\n\n```jsx\n<UserRow key={user.id} userId={user.id} />\n```\n\nAnother mistake is thinking keys only affect performance. They affect correctness too. Bad keys can attach state to the wrong item.\n\nA third mistake is using the array index because it removes a warning. Removing the warning is not the goal. Giving React stable identity is the goal."
    }
  ],
  "answer": "Keys help React understand which item is which when a list changes.",
  "reasoning": "Use IDs from your data whenever possible: database IDs, slugs, stable UUIDs, or another value that uniquely identifies that item among its siblings.\n\nKeys only need to be unique among siblings in the same list. They do not need to be globally unique across the entire app.\n\nAvoid generating keys during render with `Math.random()` or a new UUID call. That gives React a different key every render, so React treats every item as brand new. That can destroy local state and create unnecessary DOM work.\n\n```jsx\n// Bad: a new key every render.\nitems.map((item) => <Row key={crypto.randomUUID()} item={item} />);\n\n// Good: the key comes from stable item identity.\nitems.map((item) => <Row key={item.id} item={item} />);\n```\n\nThere are rare cases where index keys are acceptable: a static list that never reorders, inserts, deletes, filters, or stores local item state. But in interview and production thinking, stable data IDs are the default answer.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What does a key tell React?",
    "Why can array indexes break when items are inserted or sorted?",
    "Why is `Math.random()` a bad key?",
    "Do keys need to be globally unique across the app?",
    "How do keys relate to preserving or resetting component state?"
  ],
  "interviewAnswer": "Keys give React stable identity for items in a list so it can match previous and next renders correctly. Good keys help React preserve the right DOM and component state when items are inserted, removed, filtered, or reordered.\n\nI would use stable IDs from the data. I would avoid indexes for dynamic lists and avoid random keys because they change every render. A strong answer should mention that keys are about correctness and identity, not only performance.",
  "sourceLinks": [
    {
      "label": "React: Rendering lists",
      "url": "https://react.dev/learn/rendering-lists"
    },
    {
      "label": "React: Preserving and resetting state",
      "url": "https://react.dev/learn/preserving-and-resetting-state"
    }
  ],
  "beginnerExplanation": "Keys help React understand which item is which when a list changes.\n\nWhen React renders a list, it does not only see text on the screen. It also has component instances, DOM nodes, input state, focus, and sometimes local component state attached to each item. If the list changes, React needs to match the old items to the new items.\n\nThe key is the stable identity for each item.\n\n```jsx\nconst rows = users.map((user) => (\n  <UserRow key={user.id} user={user} />\n));\n```\n\nHere, `user.id` tells React that this row belongs to this specific user. If the list is sorted, filtered, inserted into, or deleted from, React can still match each row to the same user identity.\n\nWithout good keys, React may reuse the wrong row. That can cause visual bugs, wrong input values, lost state, strange animations, or focus jumping.",
  "example": "Imagine a list of editable todo items.\n\n```jsx\nfunction TodoList({ todos }) {\n  return todos.map((todo, index) => (\n    <TodoRow key={index} todo={todo} />\n  ));\n}\n```\n\nUsing `index` looks harmless when the list never changes. But if a new todo is inserted at the top, every old item gets a new index.\n\nBefore insert:\n\n1. Buy milk has key `0`.\n2. Pay rent has key `1`.\n\nAfter insert:\n\n1. Call bank has key `0`.\n2. Buy milk has key `1`.\n3. Pay rent has key `2`.\n\nReact sees key `0` and thinks the first row identity stayed the same, even though the actual todo changed from Buy milk to Call bank. If `TodoRow` has local state, React may preserve that state on the wrong todo.\n\nWith stable IDs, the identity stays attached to the data.\n\n```jsx\nfunction TodoList({ todos }) {\n  return todos.map((todo) => (\n    <TodoRow key={todo.id} todo={todo} />\n  ));\n}\n```\n\nNow inserting, deleting, or sorting does not confuse item identity.",
  "commonMistakes": "A common mistake is thinking keys are passed as normal props. They are not. React uses `key` internally. If the child component needs the ID, pass it separately.\n\n```jsx\n<UserRow key={user.id} userId={user.id} />\n```\n\nAnother mistake is thinking keys only affect performance. They affect correctness too. Bad keys can attach state to the wrong item.\n\nA third mistake is using the array index because it removes a warning. Removing the warning is not the goal. Giving React stable identity is the goal."
};
