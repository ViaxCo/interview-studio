---
id: fe-controlled-components
track: Frontend
category: React
level: Foundational
question: What is the difference between controlled and uncontrolled components in React?
sources:
  - label: React: input component
    url: https://react.dev/reference/react-dom/components/input
  - label: React: Sharing state between components
    url: https://react.dev/learn/sharing-state-between-components
---

## Learn it

When people talk about controlled and uncontrolled components, they are usually talking about form inputs. The question is simple: who is currently in charge of the input's value?

In a controlled component, React state is the source of truth. The input shows whatever value React gives it, and every user change goes through React.

```jsx
function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
}
```

Here, the browser does not get to quietly keep its own final answer. The input displays `query`. When the user types, `onChange` updates `query`. React renders again, and the input displays the new value.

In an uncontrolled component, the browser keeps the current value inside the DOM input. React may set an initial value, but React does not update state on every keystroke.

```jsx
function SearchBox() {
  const inputRef = useRef(null);

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return <input ref={inputRef} defaultValue="" />;
}
```

The mental model is: controlled means React owns the value. Uncontrolled means the DOM owns the value, and React reads it when needed.

## Walkthrough

Imagine a signup form with an email field.

If the field is controlled, the app can react immediately as the user types. It can disable the submit button until the email looks valid. It can show an error. It can transform text. It can keep multiple fields in sync. It can reset the field by setting state back to an empty string.

```jsx
function SignupForm() {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@");

  return (
    <form>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <button disabled={!isValid}>Create account</button>
    </form>
  );
}
```

If the field is uncontrolled, React does less work during typing. This can be fine when you only need the value at submit time.

```jsx
function SignupForm() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} name="email" />
      <button>Create account</button>
    </form>
  );
}
```

Neither approach is automatically better. Controlled inputs give you direct product control. Uncontrolled inputs can be simpler when the browser can manage the field and you only need to read the value later.

## Make it practical

Use controlled inputs when the UI depends on the current value. Examples include live validation, dependent fields, formatting, search as you type, disabling buttons, preview panes, and forms that need to be reset from app state.

Use uncontrolled inputs when you only need a value at the end, especially for small forms, file inputs, or cases where a form library handles the DOM details for you.

The most important rule is consistency. An input should not switch between controlled and uncontrolled during its lifetime. This often happens when a controlled `value` starts as `undefined` and later becomes a string.

```jsx
// Risky because name might be undefined at first.
<input value={name} onChange={handleChange} />

// Safer because the input is always controlled with a string.
<input value={name ?? ""} onChange={handleChange} />
```

That tiny detail matters because React needs to know who owns the input. If ownership changes halfway through, bugs become confusing.

## Common mistakes

A common mistake is using `value` without `onChange`. That makes the input controlled but impossible to edit, because React keeps forcing the same value back into the field.

Another mistake is using `defaultValue` and expecting it to update later when props change. `defaultValue` only sets the initial DOM value. If the value needs to follow React state, use `value`.

A third mistake is assuming controlled components are only about forms. The deeper idea is ownership. The same product question appears everywhere: should this thing manage itself locally, or should the parent/app own the state because other parts of the UI depend on it?

## Check yourself

- Who owns the value in a controlled input?
- Why does a controlled input need `onChange`?
- What is `defaultValue` for?
- When might an uncontrolled input be enough?
- Why is switching between controlled and uncontrolled input state a problem?

## Interview version

A controlled component gets its value from React state and reports changes back through an event handler. An uncontrolled component keeps its current value in the DOM, usually accessed with a ref or form submission.

Controlled inputs are best when the UI needs to respond to the value immediately, such as validation, previews, dependent fields, resets, or submit-button state. Uncontrolled inputs are useful when the browser can own the field until submit time. A good answer should mention source of truth, `value` versus `defaultValue`, `onChange`, refs, and the warning caused by switching ownership during the component's lifetime.
