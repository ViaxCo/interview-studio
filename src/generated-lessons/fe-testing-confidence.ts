import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-testing-confidence",
  "track": "Frontend",
  "category": "Testing",
  "level": "Intermediate",
  "question": "What should you test in a frontend app?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Frontend testing is not about proving every line of code exists. It is about gaining confidence that important user behavior works.\n\nA beginner often starts by asking, \"Which functions should I test?\" A better question is, \"What would hurt the user or business if it broke?\"\n\nFor a login form, the important behavior is not that a `setEmail` function was called. The important behavior is that the user can enter credentials, submit the form, see loading feedback, handle invalid credentials, and reach the next screen on success.\n\nGood frontend tests usually focus on behavior visible to the user:\n\n- What the user can see.\n- What the user can type, click, select, or submit.\n- What changes after an action.\n- What happens when the server succeeds or fails.\n- What accessibility roles and labels expose to assistive technology.\n\nThis is why Testing Library encourages tests that resemble how users interact with the app."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine this login form:\n\n```jsx\nfunction LoginForm({ onSubmit }) {\n  return (\n    <form onSubmit={onSubmit}>\n      <label htmlFor=\"email\">Email</label>\n      <input id=\"email\" name=\"email\" />\n\n      <label htmlFor=\"password\">Password</label>\n      <input id=\"password\" name=\"password\" type=\"password\" />\n\n      <button>Sign in</button>\n    </form>\n  );\n}\n```\n\nA user-focused test would find elements the way a user or assistive technology would.\n\n```jsx\nconst user = userEvent.setup();\n\nrender(<LoginForm onSubmit={handleSubmit} />);\n\nawait user.type(screen.getByLabelText(/email/i), \"ada@example.com\");\nawait user.type(screen.getByLabelText(/password/i), \"secret\");\nawait user.click(screen.getByRole(\"button\", { name: /sign in/i }));\n\nexpect(handleSubmit).toHaveBeenCalled();\n```\n\nNotice the selectors: label text and role. That encourages accessible HTML. If your test cannot find the input by label, maybe the user cannot understand it either.\n\nFor data loading, you can mock the network at the request level instead of mocking every internal function. Tools like Mock Service Worker let the component behave as if it is talking to a real API, while the test controls the response."
    },
    {
      "title": "Make it practical",
      "body": "A healthy frontend test strategy has layers.\n\nUse unit tests for pure logic: formatting, validation rules, reducers, small utilities, and edge cases that are easy to isolate.\n\nUse component or integration tests for user flows inside a screen: forms, modals, filters, empty states, loading states, errors, permissions, and data rendering.\n\nUse end-to-end tests for the highest-value journeys across the app: signup, checkout, money transfer, onboarding, or any flow where many systems must work together.\n\nThe more a test resembles real user behavior, the more confidence it gives, but it may also be slower and more expensive. The trick is balance. Do not write only tiny tests that miss real behavior. Do not write only end-to-end tests that are slow and brittle.\n\nFor an interview, it is good to say what you would test and why. For example: \"I would test the successful path, the validation errors, the server failure, the loading state, and the keyboard-accessible controls because those are the states a real user depends on.\""
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is testing implementation details. If a test breaks because you renamed an internal function but the user behavior still works, the test may be too coupled to the implementation.\n\nAnother mistake is only testing the happy path. Real users see loading, empty, error, disabled, unauthenticated, and slow-network states.\n\nA third mistake is snapshotting large trees and treating the snapshot as confidence. Snapshots can catch accidental markup changes, but they often do not prove the user can complete a task."
    }
  ],
  "answer": "Frontend testing is not about proving every line of code exists. It is about gaining confidence that important user behavior works.",
  "reasoning": "A healthy frontend test strategy has layers.\n\nUse unit tests for pure logic: formatting, validation rules, reducers, small utilities, and edge cases that are easy to isolate.\n\nUse component or integration tests for user flows inside a screen: forms, modals, filters, empty states, loading states, errors, permissions, and data rendering.\n\nUse end-to-end tests for the highest-value journeys across the app: signup, checkout, money transfer, onboarding, or any flow where many systems must work together.\n\nThe more a test resembles real user behavior, the more confidence it gives, but it may also be slower and more expensive. The trick is balance. Do not write only tiny tests that miss real behavior. Do not write only end-to-end tests that are slow and brittle.\n\nFor an interview, it is good to say what you would test and why. For example: \"I would test the successful path, the validation errors, the server failure, the loading state, and the keyboard-accessible controls because those are the states a real user depends on.\"",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the main purpose of frontend tests?",
    "Why are role and label queries useful?",
    "What kinds of behavior belong in component tests?",
    "When would an end-to-end test be worth it?",
    "Why can implementation-detail tests become brittle?"
  ],
  "interviewAnswer": "I would test frontend behavior that matters to users: rendering important content, completing key interactions, validation, loading states, error states, accessibility labels and roles, and server success or failure. I would use unit tests for pure logic, component tests for screen behavior, and end-to-end tests for critical journeys.\n\nThe strongest answer is not \"test everything.\" It is \"test the things whose failure would hurt the user, and write those tests in a way that resembles how the user experiences the product.\"",
  "sourceLinks": [
    {
      "label": "Testing Library: Guiding principles",
      "url": "https://testing-library.com/docs/guiding-principles"
    },
    {
      "label": "Mock Service Worker: Documentation",
      "url": "https://mswjs.io/docs/"
    }
  ],
  "beginnerExplanation": "Frontend testing is not about proving every line of code exists. It is about gaining confidence that important user behavior works.\n\nA beginner often starts by asking, \"Which functions should I test?\" A better question is, \"What would hurt the user or business if it broke?\"\n\nFor a login form, the important behavior is not that a `setEmail` function was called. The important behavior is that the user can enter credentials, submit the form, see loading feedback, handle invalid credentials, and reach the next screen on success.\n\nGood frontend tests usually focus on behavior visible to the user:\n\n- What the user can see.\n- What the user can type, click, select, or submit.\n- What changes after an action.\n- What happens when the server succeeds or fails.\n- What accessibility roles and labels expose to assistive technology.\n\nThis is why Testing Library encourages tests that resemble how users interact with the app.",
  "example": "Imagine this login form:\n\n```jsx\nfunction LoginForm({ onSubmit }) {\n  return (\n    <form onSubmit={onSubmit}>\n      <label htmlFor=\"email\">Email</label>\n      <input id=\"email\" name=\"email\" />\n\n      <label htmlFor=\"password\">Password</label>\n      <input id=\"password\" name=\"password\" type=\"password\" />\n\n      <button>Sign in</button>\n    </form>\n  );\n}\n```\n\nA user-focused test would find elements the way a user or assistive technology would.\n\n```jsx\nconst user = userEvent.setup();\n\nrender(<LoginForm onSubmit={handleSubmit} />);\n\nawait user.type(screen.getByLabelText(/email/i), \"ada@example.com\");\nawait user.type(screen.getByLabelText(/password/i), \"secret\");\nawait user.click(screen.getByRole(\"button\", { name: /sign in/i }));\n\nexpect(handleSubmit).toHaveBeenCalled();\n```\n\nNotice the selectors: label text and role. That encourages accessible HTML. If your test cannot find the input by label, maybe the user cannot understand it either.\n\nFor data loading, you can mock the network at the request level instead of mocking every internal function. Tools like Mock Service Worker let the component behave as if it is talking to a real API, while the test controls the response.",
  "commonMistakes": "A common mistake is testing implementation details. If a test breaks because you renamed an internal function but the user behavior still works, the test may be too coupled to the implementation.\n\nAnother mistake is only testing the happy path. Real users see loading, empty, error, disabled, unauthenticated, and slow-network states.\n\nA third mistake is snapshotting large trees and treating the snapshot as confidence. Snapshots can catch accidental markup changes, but they often do not prove the user can complete a task."
};
