import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-use-effect",
  "track": "Frontend",
  "category": "React",
  "level": "Intermediate",
  "question": "What should go in useEffect?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "`useEffect` is easier to understand when you first separate three kinds of code inside a React component.\n\nFirst, there is rendering code. Rendering code calculates what the UI should look like from the current props and state. It should be pure. That means it should not change the outside world. It should not start network requests, modify DOM nodes, subscribe to services, or set timers.\n\nSecond, there are event handlers. Event handlers run because a specific user action happened: a click, a form submit, a key press, a selection. If the work is caused by a particular user action, it usually belongs in the event handler.\n\nThird, there are Effects. Effects are for synchronizing React with something outside React because the component is now on the screen or because some rendered state changed. This is why React calls Effects an escape hatch.\n\nSo the simple rule is: `useEffect` should not be your default place for logic. It should be used when React needs to coordinate with an external system after rendering."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a video player component:\n\n```jsx\nfunction VideoPlayer({ isPlaying, src }) {\n  const ref = useRef(null);\n\n  if (isPlaying) {\n    ref.current.play();\n  } else {\n    ref.current.pause();\n  }\n\n  return <video ref={ref} src={src} />;\n}\n```\n\nThis is wrong because render is trying to control a DOM node. During render, React is still calculating the UI. The DOM node may not even be ready yet. Rendering should describe the video element, not imperatively play or pause it.\n\nThe Effect version synchronizes after React commits the UI:\n\n```jsx\nfunction VideoPlayer({ isPlaying, src }) {\n  const ref = useRef(null);\n\n  useEffect(() => {\n    if (isPlaying) {\n      ref.current.play();\n    } else {\n      ref.current.pause();\n    }\n  }, [isPlaying]);\n\n  return <video ref={ref} src={src} />;\n}\n```\n\nNow the component says: after this render is on screen, make the real browser video element match the React state.\n\nThat is the right mental model. An Effect is not simply code that runs after render. It is code that keeps an external system in sync with what React rendered."
    },
    {
      "title": "Make it practical",
      "body": "Good Effect use cases include connecting to a chat server, subscribing to browser events, starting and clearing timers, controlling a non-React widget, manually interacting with a DOM API, and sometimes fetching data when a framework does not provide a better data-fetching layer.\n\nBad Effect use cases often involve derived state. If you can calculate a value from props or state during render, do that instead.\n\nAvoid this:\n\n```jsx\nfunction Form({ firstName, lastName }) {\n  const [fullName, setFullName] = useState(\"\");\n\n  useEffect(() => {\n    setFullName(`${firstName} ${lastName}`);\n  }, [firstName, lastName]);\n}\n```\n\nThis creates duplicated truth. React renders once with an old `fullName`, then the Effect runs, then React renders again.\n\nPrefer this:\n\n```jsx\nfunction Form({ firstName, lastName }) {\n  const fullName = `${firstName} ${lastName}`;\n}\n```\n\nNo Effect is needed because no external system is involved."
    },
    {
      "title": "Common mistakes",
      "body": "The biggest mistake is using Effects to repair state that should not exist. If a value can be derived during render, storing it separately creates synchronization bugs.\n\nAnother mistake is forgetting cleanup. If an Effect subscribes, it should unsubscribe. If it starts a timer, it should clear the timer. If it starts async work, it should handle cancellation or ignore stale results.\n\nDevelopers are also surprised when Effects run twice in development Strict Mode. React does this to reveal Effects that are not resilient to being started, cleaned up, and started again."
    }
  ],
  "answer": "`useEffect` is easier to understand when you first separate three kinds of code inside a React component.",
  "reasoning": "Good Effect use cases include connecting to a chat server, subscribing to browser events, starting and clearing timers, controlling a non-React widget, manually interacting with a DOM API, and sometimes fetching data when a framework does not provide a better data-fetching layer.\n\nBad Effect use cases often involve derived state. If you can calculate a value from props or state during render, do that instead.\n\nAvoid this:\n\n```jsx\nfunction Form({ firstName, lastName }) {\n  const [fullName, setFullName] = useState(\"\");\n\n  useEffect(() => {\n    setFullName(`${firstName} ${lastName}`);\n  }, [firstName, lastName]);\n}\n```\n\nThis creates duplicated truth. React renders once with an old `fullName`, then the Effect runs, then React renders again.\n\nPrefer this:\n\n```jsx\nfunction Form({ firstName, lastName }) {\n  const fullName = `${firstName} ${lastName}`;\n}\n```\n\nNo Effect is needed because no external system is involved.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Is this logic caused by rendering, or by a specific user event?",
    "Is there an external system involved?",
    "Can this value be calculated from existing props or state instead?",
    "What cleanup should happen when inputs change or the component unmounts?",
    "What bug appears if this Effect runs more than once in development?"
  ],
  "interviewAnswer": "`useEffect` should be used to synchronize React with external systems after rendering: browser APIs, network connections, subscriptions, timers, imperative widgets, or DOM APIs. It should not be the default place for deriving state or responding to direct user actions.\n\nA strong answer separates render logic, event-handler logic, and Effect logic. It also mentions dependencies, cleanup, stale closures, Strict Mode behavior, and the fact that many data-fetching problems are better handled by framework loaders or libraries than by hand-written Effects.",
  "sourceLinks": [
    {
      "label": "React: Synchronizing with Effects",
      "url": "https://react.dev/learn/synchronizing-with-effects"
    },
    {
      "label": "React: You Might Not Need an Effect",
      "url": "https://react.dev/learn/you-might-not-need-an-effect"
    }
  ],
  "beginnerExplanation": "`useEffect` is easier to understand when you first separate three kinds of code inside a React component.\n\nFirst, there is rendering code. Rendering code calculates what the UI should look like from the current props and state. It should be pure. That means it should not change the outside world. It should not start network requests, modify DOM nodes, subscribe to services, or set timers.\n\nSecond, there are event handlers. Event handlers run because a specific user action happened: a click, a form submit, a key press, a selection. If the work is caused by a particular user action, it usually belongs in the event handler.\n\nThird, there are Effects. Effects are for synchronizing React with something outside React because the component is now on the screen or because some rendered state changed. This is why React calls Effects an escape hatch.\n\nSo the simple rule is: `useEffect` should not be your default place for logic. It should be used when React needs to coordinate with an external system after rendering.",
  "example": "Imagine a video player component:\n\n```jsx\nfunction VideoPlayer({ isPlaying, src }) {\n  const ref = useRef(null);\n\n  if (isPlaying) {\n    ref.current.play();\n  } else {\n    ref.current.pause();\n  }\n\n  return <video ref={ref} src={src} />;\n}\n```\n\nThis is wrong because render is trying to control a DOM node. During render, React is still calculating the UI. The DOM node may not even be ready yet. Rendering should describe the video element, not imperatively play or pause it.\n\nThe Effect version synchronizes after React commits the UI:\n\n```jsx\nfunction VideoPlayer({ isPlaying, src }) {\n  const ref = useRef(null);\n\n  useEffect(() => {\n    if (isPlaying) {\n      ref.current.play();\n    } else {\n      ref.current.pause();\n    }\n  }, [isPlaying]);\n\n  return <video ref={ref} src={src} />;\n}\n```\n\nNow the component says: after this render is on screen, make the real browser video element match the React state.\n\nThat is the right mental model. An Effect is not simply code that runs after render. It is code that keeps an external system in sync with what React rendered.",
  "commonMistakes": "The biggest mistake is using Effects to repair state that should not exist. If a value can be derived during render, storing it separately creates synchronization bugs.\n\nAnother mistake is forgetting cleanup. If an Effect subscribes, it should unsubscribe. If it starts a timer, it should clear the timer. If it starts async work, it should handle cancellation or ignore stale results.\n\nDevelopers are also surprised when Effects run twice in development Strict Mode. React does this to reveal Effects that are not resilient to being started, cleaned up, and started again."
};
