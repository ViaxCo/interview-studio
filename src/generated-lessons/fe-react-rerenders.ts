import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-react-rerenders",
  "track": "Frontend",
  "category": "React",
  "level": "Intermediate",
  "question": "What causes React components to re-render?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "A React render is React calling your component function to calculate what the UI should look like. A re-render means React calls it again because something changed.\n\nThe beginner mistake is thinking a render always means the DOM changed. Rendering is calculation. After rendering, React compares the new result to the previous result and commits the necessary DOM changes.\n\nComponents re-render when their state changes, their parent renders, or context they use changes. Props are part of the parent render path: if a parent renders, React may call the child again with the current props."
    },
    {
      "title": "Walkthrough",
      "body": "Here is a simple example:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  console.log(\"render\");\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  );\n}\n```\n\nClicking the button updates state. React calls `Counter` again. The new render returns UI with the new count.\n\nParent renders can also cause child renders:\n\n```jsx\nfunction Parent() {\n  const [theme, setTheme] = useState(\"light\");\n\n  return <Child />;\n}\n```\n\nIf `theme` changes, `Parent` renders again. `Child` may also be called again even if its props did not change. That is not automatically a bug. React rendering should be pure and cheap enough that normal renders are fine."
    },
    {
      "title": "Make it practical",
      "body": "The right question is not \"how do I stop all renders?\" The right question is \"which renders are expensive or causing visible problems?\"\n\nCommon tools:\n\n- Move state down so only the component that needs it re-renders.\n- Split large components into smaller components.\n- Use `React.memo` when a child receives stable props and rendering it is expensive.\n- Use `useMemo` for expensive derived calculations.\n- Use `useCallback` when function identity causes memoized children to re-render.\n- Avoid putting frequently changing values in broad context providers.\n\n```jsx\nconst UserRow = React.memo(function UserRow({ user, onSelect }) {\n  return <button onClick={() => onSelect(user.id)}>{user.name}</button>;\n});\n```\n\nMemoization is not free. It adds comparison work and complexity. Use it when there is a measured or obvious reason."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is treating every re-render as bad. Many renders are harmless.\n\nAnother mistake is memoizing everything. That can make code harder to understand without improving performance.\n\nA third mistake is mutating objects. If you mutate state in place, React may not see a meaningful change, and memoized components may behave incorrectly.\n\nAlso remember that render should be pure. Do not start network requests, change DOM manually, or write to storage during render."
    }
  ],
  "answer": "A React render is React calling your component function to calculate what the UI should look like. A re-render means React calls it again because something changed.",
  "reasoning": "The right question is not \"how do I stop all renders?\" The right question is \"which renders are expensive or causing visible problems?\"\n\nCommon tools:\n\n- Move state down so only the component that needs it re-renders.\n- Split large components into smaller components.\n- Use `React.memo` when a child receives stable props and rendering it is expensive.\n- Use `useMemo` for expensive derived calculations.\n- Use `useCallback` when function identity causes memoized children to re-render.\n- Avoid putting frequently changing values in broad context providers.\n\n```jsx\nconst UserRow = React.memo(function UserRow({ user, onSelect }) {\n  return <button onClick={() => onSelect(user.id)}>{user.name}</button>;\n});\n```\n\nMemoization is not free. It adds comparison work and complexity. Use it when there is a measured or obvious reason.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is React doing during render?",
    "Does every render change the DOM?",
    "What causes a component to re-render?",
    "Why should render logic be pure?",
    "When is memoization useful?"
  ],
  "interviewAnswer": "React components re-render when state changes, a parent renders, or consumed context changes. Rendering means React calls the component to calculate the next UI; it does not always mean the DOM changed.\n\nA strong answer should explain render versus commit, purity, parent-child render behavior, and practical optimization tools like moving state down, splitting components, memoization, and avoiding overly broad context updates.",
  "sourceLinks": [
    {
      "label": "React: Render and commit",
      "url": "https://react.dev/learn/render-and-commit"
    },
    {
      "label": "React: Keeping components pure",
      "url": "https://react.dev/learn/keeping-components-pure"
    }
  ],
  "beginnerExplanation": "A React render is React calling your component function to calculate what the UI should look like. A re-render means React calls it again because something changed.\n\nThe beginner mistake is thinking a render always means the DOM changed. Rendering is calculation. After rendering, React compares the new result to the previous result and commits the necessary DOM changes.\n\nComponents re-render when their state changes, their parent renders, or context they use changes. Props are part of the parent render path: if a parent renders, React may call the child again with the current props.",
  "example": "Here is a simple example:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  console.log(\"render\");\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      {count}\n    </button>\n  );\n}\n```\n\nClicking the button updates state. React calls `Counter` again. The new render returns UI with the new count.\n\nParent renders can also cause child renders:\n\n```jsx\nfunction Parent() {\n  const [theme, setTheme] = useState(\"light\");\n\n  return <Child />;\n}\n```\n\nIf `theme` changes, `Parent` renders again. `Child` may also be called again even if its props did not change. That is not automatically a bug. React rendering should be pure and cheap enough that normal renders are fine.",
  "commonMistakes": "A common mistake is treating every re-render as bad. Many renders are harmless.\n\nAnother mistake is memoizing everything. That can make code harder to understand without improving performance.\n\nA third mistake is mutating objects. If you mutate state in place, React may not see a meaningful change, and memoized components may behave incorrectly.\n\nAlso remember that render should be pure. Do not start network requests, change DOM manually, or write to storage during render."
};
