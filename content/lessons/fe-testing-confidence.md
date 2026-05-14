---
id: fe-testing-confidence
track: Frontend
category: Testing
level: Intermediate
question: What should you test in a frontend app?
sources:
  - label: Testing Library: Guiding principles
    url: https://testing-library.com/docs/guiding-principles
  - label: Mock Service Worker: Documentation
    url: https://mswjs.io/docs/
---

## Learn it

Frontend testing is not about proving every line of code exists. It is about gaining confidence that important user behavior works.

A beginner often starts by asking, "Which functions should I test?" A better question is, "What would hurt the user or business if it broke?"

For a login form, the important behavior is not that a `setEmail` function was called. The important behavior is that the user can enter credentials, submit the form, see loading feedback, handle invalid credentials, and reach the next screen on success.

Good frontend tests usually focus on behavior visible to the user:

- What the user can see.
- What the user can type, click, select, or submit.
- What changes after an action.
- What happens when the server succeeds or fails.
- What accessibility roles and labels expose to assistive technology.

This is why Testing Library encourages tests that resemble how users interact with the app.

## Walkthrough

Imagine this login form:

```jsx
function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />

      <button>Sign in</button>
    </form>
  );
}
```

A user-focused test would find elements the way a user or assistive technology would.

```jsx
const user = userEvent.setup();

render(<LoginForm onSubmit={handleSubmit} />);

await user.type(screen.getByLabelText(/email/i), "ada@example.com");
await user.type(screen.getByLabelText(/password/i), "secret");
await user.click(screen.getByRole("button", { name: /sign in/i }));

expect(handleSubmit).toHaveBeenCalled();
```

Notice the selectors: label text and role. That encourages accessible HTML. If your test cannot find the input by label, maybe the user cannot understand it either.

For data loading, you can mock the network at the request level instead of mocking every internal function. Tools like Mock Service Worker let the component behave as if it is talking to a real API, while the test controls the response.

## Make it practical

A healthy frontend test strategy has layers.

Use unit tests for pure logic: formatting, validation rules, reducers, small utilities, and edge cases that are easy to isolate.

Use component or integration tests for user flows inside a screen: forms, modals, filters, empty states, loading states, errors, permissions, and data rendering.

Use end-to-end tests for the highest-value journeys across the app: signup, checkout, money transfer, onboarding, or any flow where many systems must work together.

The more a test resembles real user behavior, the more confidence it gives, but it may also be slower and more expensive. The trick is balance. Do not write only tiny tests that miss real behavior. Do not write only end-to-end tests that are slow and brittle.

For an interview, it is good to say what you would test and why. For example: "I would test the successful path, the validation errors, the server failure, the loading state, and the keyboard-accessible controls because those are the states a real user depends on."

## Common mistakes

A common mistake is testing implementation details. If a test breaks because you renamed an internal function but the user behavior still works, the test may be too coupled to the implementation.

Another mistake is only testing the happy path. Real users see loading, empty, error, disabled, unauthenticated, and slow-network states.

A third mistake is snapshotting large trees and treating the snapshot as confidence. Snapshots can catch accidental markup changes, but they often do not prove the user can complete a task.

## Check yourself

- What is the main purpose of frontend tests?
- Why are role and label queries useful?
- What kinds of behavior belong in component tests?
- When would an end-to-end test be worth it?
- Why can implementation-detail tests become brittle?

## Interview version

I would test frontend behavior that matters to users: rendering important content, completing key interactions, validation, loading states, error states, accessibility labels and roles, and server success or failure. I would use unit tests for pure logic, component tests for screen behavior, and end-to-end tests for critical journeys.

The strongest answer is not "test everything." It is "test the things whose failure would hurt the user, and write those tests in a way that resembles how the user experiences the product."
