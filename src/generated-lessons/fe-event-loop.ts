import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-event-loop",
  "track": "Frontend",
  "category": "JavaScript",
  "level": "Intermediate",
  "question": "Explain the JavaScript event loop.",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "JavaScript in the browser usually runs on one main thread. That means only one piece of JavaScript can actively run at a time on that thread. If a function is running, another function cannot interrupt it in the middle and run at the same time.\n\nThis creates an obvious question: if JavaScript runs one thing at a time, how can a page handle clicks, timers, network responses, animations, and promise callbacks?\n\nThe answer is the event loop.\n\nThe event loop is the browser's scheduling system for deciding what work JavaScript should run next. It coordinates the call stack, task queue, microtask queue, rendering, and browser APIs.\n\nStart with the call stack. The call stack is where currently running functions live. When you call a function, it goes on the stack. When it returns, it leaves the stack. JavaScript keeps running until the stack is empty.\n\nAsynchronous browser features like timers, events, and network requests do not magically run inside your current function. The browser tracks them outside the call stack. When they are ready, their callbacks are queued to run later."
    },
    {
      "title": "Walkthrough",
      "body": "Look at this code:\n\n```js\nconsole.log(\"A\");\n\nsetTimeout(() => {\n  console.log(\"B\");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log(\"C\");\n});\n\nconsole.log(\"D\");\n```\n\nThe output is:\n\n```txt\nA\nD\nC\nB\n```\n\nHere is the beginner-friendly version of what happened.\n\nFirst, JavaScript runs the current script from top to bottom. `console.log(\"A\")` runs immediately. `setTimeout` asks the browser to run a callback later, even though the delay is `0`. That callback does not run immediately because the current script is still running. `Promise.resolve().then(...)` queues a microtask. Then `console.log(\"D\")` runs.\n\nNow the call stack is empty. Before the browser picks the next regular task, JavaScript drains the microtask queue. Promise callbacks are microtasks, so `C` logs next.\n\nAfter microtasks are done, the event loop can pick a task from the task queue. The timer callback is a task, so `B` logs last.\n\nThis is why `setTimeout(fn, 0)` does not mean \"run now.\" It means \"run after the current JavaScript finishes and after microtasks that are already waiting.\""
    },
    {
      "title": "Make it practical",
      "body": "The event loop matters because frontend apps must stay responsive. If you run a huge synchronous loop, the browser cannot handle clicks, paint updates, or run other callbacks until that work finishes.\n\n```js\nbutton.addEventListener(\"click\", () => {\n  for (let i = 0; i < 1_000_000_000; i += 1) {\n    // expensive work\n  }\n\n  console.log(\"done\");\n});\n```\n\nWhile that loop runs, the page may freeze. The click handler owns the main thread until it returns.\n\nA better approach is to break expensive work into smaller chunks, move heavy computation to a Web Worker when appropriate, or avoid doing the expensive work during the user's interaction path.\n\nThe event loop also explains why UI updates may not appear immediately. If you set loading state and then immediately run expensive synchronous code, the browser may not get a chance to paint the loading state until after the expensive code finishes.\n\n```js\nsetLoading(true);\ndoVeryExpensiveWork();\n```\n\nReact can schedule a state update, but the browser still needs a chance to paint. If JavaScript keeps the main thread busy, the user will not see the intermediate feedback when you expect."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is saying JavaScript is asynchronous because it runs multiple callbacks at the same time. That is not the usual browser model. JavaScript callbacks are scheduled asynchronously, but the main thread still runs one piece of JavaScript at a time.\n\nAnother mistake is forgetting the difference between tasks and microtasks. Promise callbacks usually run before timers that are waiting in the task queue.\n\nA third mistake is ignoring rendering. The user does not care only about callback order. They care whether the page can paint, animate, and respond while your code is running."
    }
  ],
  "answer": "JavaScript in the browser usually runs on one main thread. That means only one piece of JavaScript can actively run at a time on that thread. If a function is running, another function cannot interrupt it in the middle and run at the same time.",
  "reasoning": "The event loop matters because frontend apps must stay responsive. If you run a huge synchronous loop, the browser cannot handle clicks, paint updates, or run other callbacks until that work finishes.\n\n```js\nbutton.addEventListener(\"click\", () => {\n  for (let i = 0; i < 1_000_000_000; i += 1) {\n    // expensive work\n  }\n\n  console.log(\"done\");\n});\n```\n\nWhile that loop runs, the page may freeze. The click handler owns the main thread until it returns.\n\nA better approach is to break expensive work into smaller chunks, move heavy computation to a Web Worker when appropriate, or avoid doing the expensive work during the user's interaction path.\n\nThe event loop also explains why UI updates may not appear immediately. If you set loading state and then immediately run expensive synchronous code, the browser may not get a chance to paint the loading state until after the expensive code finishes.\n\n```js\nsetLoading(true);\ndoVeryExpensiveWork();\n```\n\nReact can schedule a state update, but the browser still needs a chance to paint. If JavaScript keeps the main thread busy, the user will not see the intermediate feedback when you expect.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the call stack?",
    "Why does `setTimeout(fn, 0)` not run immediately?",
    "Why do Promise callbacks often run before timer callbacks?",
    "What happens to user clicks while JavaScript is doing a long synchronous task?",
    "How can you make expensive frontend work less blocking?"
  ],
  "interviewAnswer": "The event loop is the mechanism that lets JavaScript coordinate synchronous execution with asynchronous browser work. JavaScript runs functions on the call stack one at a time. Browser APIs queue callbacks as tasks or microtasks, and the event loop decides what runs after the stack is empty.\n\nA strong answer should mention the call stack, task queue, microtask queue, Promise callbacks, timers, and rendering. The practical point is that long synchronous work blocks the main thread, which makes the UI feel frozen even if the code is technically correct.",
  "sourceLinks": [
    {
      "label": "MDN: JavaScript execution model",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop"
    },
    {
      "label": "JavaScript.info: Event loop",
      "url": "https://javascript.info/event-loop"
    }
  ],
  "beginnerExplanation": "JavaScript in the browser usually runs on one main thread. That means only one piece of JavaScript can actively run at a time on that thread. If a function is running, another function cannot interrupt it in the middle and run at the same time.\n\nThis creates an obvious question: if JavaScript runs one thing at a time, how can a page handle clicks, timers, network responses, animations, and promise callbacks?\n\nThe answer is the event loop.\n\nThe event loop is the browser's scheduling system for deciding what work JavaScript should run next. It coordinates the call stack, task queue, microtask queue, rendering, and browser APIs.\n\nStart with the call stack. The call stack is where currently running functions live. When you call a function, it goes on the stack. When it returns, it leaves the stack. JavaScript keeps running until the stack is empty.\n\nAsynchronous browser features like timers, events, and network requests do not magically run inside your current function. The browser tracks them outside the call stack. When they are ready, their callbacks are queued to run later.",
  "example": "Look at this code:\n\n```js\nconsole.log(\"A\");\n\nsetTimeout(() => {\n  console.log(\"B\");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log(\"C\");\n});\n\nconsole.log(\"D\");\n```\n\nThe output is:\n\n```txt\nA\nD\nC\nB\n```\n\nHere is the beginner-friendly version of what happened.\n\nFirst, JavaScript runs the current script from top to bottom. `console.log(\"A\")` runs immediately. `setTimeout` asks the browser to run a callback later, even though the delay is `0`. That callback does not run immediately because the current script is still running. `Promise.resolve().then(...)` queues a microtask. Then `console.log(\"D\")` runs.\n\nNow the call stack is empty. Before the browser picks the next regular task, JavaScript drains the microtask queue. Promise callbacks are microtasks, so `C` logs next.\n\nAfter microtasks are done, the event loop can pick a task from the task queue. The timer callback is a task, so `B` logs last.\n\nThis is why `setTimeout(fn, 0)` does not mean \"run now.\" It means \"run after the current JavaScript finishes and after microtasks that are already waiting.\"",
  "commonMistakes": "A common mistake is saying JavaScript is asynchronous because it runs multiple callbacks at the same time. That is not the usual browser model. JavaScript callbacks are scheduled asynchronously, but the main thread still runs one piece of JavaScript at a time.\n\nAnother mistake is forgetting the difference between tasks and microtasks. Promise callbacks usually run before timers that are waiting in the task queue.\n\nA third mistake is ignoring rendering. The user does not care only about callback order. They care whether the page can paint, animate, and respond while your code is running."
};
