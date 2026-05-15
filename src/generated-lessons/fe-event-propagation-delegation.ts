import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-event-propagation-delegation",
  "track": "Frontend",
  "category": "JavaScript",
  "level": "Foundational",
  "question": "Explain event propagation and event delegation in the browser.",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "When you click something on a web page, the browser does not only think about the exact element you clicked. The event travels through the page structure.\n\nImagine this HTML:\n\n```html\n<section id=\"panel\">\n  <button id=\"save\">Save</button>\n</section>\n```\n\nIf you click the button, the click happened on the button, but the button is inside the section, and the section is inside the page. The browser gives different ancestors a chance to respond.\n\nThe usual mental model has three phases:\n\n```txt\nCapture phase:\nThe event travels down from the window toward the target.\n\nTarget phase:\nThe event reaches the element that was actually clicked.\n\nBubbling phase:\nThe event travels back up through parent elements.\n```\n\nMost everyday event listeners run during bubbling unless you opt into capture."
    },
    {
      "title": "Walkthrough",
      "body": "Here is a small example:\n\n```html\n<div id=\"card\">\n  <button id=\"buy\">Buy</button>\n</div>\n```\n\n```js\ndocument.querySelector(\"#card\").addEventListener(\"click\", () => {\n  console.log(\"card clicked\");\n});\n\ndocument.querySelector(\"#buy\").addEventListener(\"click\", () => {\n  console.log(\"button clicked\");\n});\n```\n\nWhen the user clicks the button, the button handler runs, then the card handler can also run because the click bubbles up.\n\nThat is why clicking a button inside a clickable card can accidentally trigger both actions.\n\nIf the button action should not also trigger the card action, you might stop propagation:\n\n```js\ndocument.querySelector(\"#buy\").addEventListener(\"click\", (event) => {\n  event.stopPropagation();\n  console.log(\"button clicked only\");\n});\n```\n\nUse that carefully. Stopping propagation can also prevent useful parent behavior, analytics, menus, or accessibility-related handlers if overused."
    },
    {
      "title": "Make it practical",
      "body": "Event delegation uses bubbling on purpose.\n\nInstead of putting a listener on every item in a list, you put one listener on the parent and inspect what was clicked.\n\n```html\n<ul id=\"todo-list\">\n  <li><button data-id=\"1\">Complete</button> Learn closures</li>\n  <li><button data-id=\"2\">Complete</button> Practice CSS</li>\n  <li><button data-id=\"3\">Complete</button> Review React</li>\n</ul>\n```\n\n```js\ndocument.querySelector(\"#todo-list\").addEventListener(\"click\", (event) => {\n  const button = event.target.closest(\"button[data-id]\");\n\n  if (!button) return;\n\n  const id = button.dataset.id;\n  console.log(`Complete todo ${id}`);\n});\n```\n\nThis works even if more todo items are added later, because the parent listener still receives bubbled clicks.\n\nThis is useful for dynamic lists, tables, menus, and any UI where adding a listener to every child would be noisy."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is confusing `event.target` and `event.currentTarget`. `target` is where the event started. `currentTarget` is the element whose listener is currently running.\n\nAnother mistake is using `stopPropagation()` as a default fix. It can hide problems and break parent-level behavior.\n\nA third mistake is assuming every event bubbles. Many common events do, but not all events behave the same way."
    }
  ],
  "answer": "When you click something on a web page, the browser does not only think about the exact element you clicked. The event travels through the page structure.",
  "reasoning": "Event delegation uses bubbling on purpose.\n\nInstead of putting a listener on every item in a list, you put one listener on the parent and inspect what was clicked.\n\n```html\n<ul id=\"todo-list\">\n  <li><button data-id=\"1\">Complete</button> Learn closures</li>\n  <li><button data-id=\"2\">Complete</button> Practice CSS</li>\n  <li><button data-id=\"3\">Complete</button> Review React</li>\n</ul>\n```\n\n```js\ndocument.querySelector(\"#todo-list\").addEventListener(\"click\", (event) => {\n  const button = event.target.closest(\"button[data-id]\");\n\n  if (!button) return;\n\n  const id = button.dataset.id;\n  console.log(`Complete todo ${id}`);\n});\n```\n\nThis works even if more todo items are added later, because the parent listener still receives bubbled clicks.\n\nThis is useful for dynamic lists, tables, menus, and any UI where adding a listener to every child would be noisy.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What does it mean for an event to bubble?",
    "Why can a button click trigger a parent card handler?",
    "What is event delegation?",
    "What is the difference between `target` and `currentTarget`?",
    "Why should `stopPropagation()` be used carefully?"
  ],
  "interviewAnswer": "Event propagation is the path an event takes through the DOM: capture down, target, then bubble up. Event delegation uses bubbling by placing one listener on a parent and checking which child triggered the event.\n\nA strong answer should mention bubbling, capture, target, `event.target`, `event.currentTarget`, `stopPropagation()`, and why delegation is useful for dynamic lists.",
  "sourceLinks": [
    {
      "label": "MDN: Event bubbling",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling"
    },
    {
      "label": "MDN: EventTarget addEventListener",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    }
  ],
  "beginnerExplanation": "When you click something on a web page, the browser does not only think about the exact element you clicked. The event travels through the page structure.\n\nImagine this HTML:\n\n```html\n<section id=\"panel\">\n  <button id=\"save\">Save</button>\n</section>\n```\n\nIf you click the button, the click happened on the button, but the button is inside the section, and the section is inside the page. The browser gives different ancestors a chance to respond.\n\nThe usual mental model has three phases:\n\n```txt\nCapture phase:\nThe event travels down from the window toward the target.\n\nTarget phase:\nThe event reaches the element that was actually clicked.\n\nBubbling phase:\nThe event travels back up through parent elements.\n```\n\nMost everyday event listeners run during bubbling unless you opt into capture.",
  "example": "Here is a small example:\n\n```html\n<div id=\"card\">\n  <button id=\"buy\">Buy</button>\n</div>\n```\n\n```js\ndocument.querySelector(\"#card\").addEventListener(\"click\", () => {\n  console.log(\"card clicked\");\n});\n\ndocument.querySelector(\"#buy\").addEventListener(\"click\", () => {\n  console.log(\"button clicked\");\n});\n```\n\nWhen the user clicks the button, the button handler runs, then the card handler can also run because the click bubbles up.\n\nThat is why clicking a button inside a clickable card can accidentally trigger both actions.\n\nIf the button action should not also trigger the card action, you might stop propagation:\n\n```js\ndocument.querySelector(\"#buy\").addEventListener(\"click\", (event) => {\n  event.stopPropagation();\n  console.log(\"button clicked only\");\n});\n```\n\nUse that carefully. Stopping propagation can also prevent useful parent behavior, analytics, menus, or accessibility-related handlers if overused.",
  "commonMistakes": "A common mistake is confusing `event.target` and `event.currentTarget`. `target` is where the event started. `currentTarget` is the element whose listener is currently running.\n\nAnother mistake is using `stopPropagation()` as a default fix. It can hide problems and break parent-level behavior.\n\nA third mistake is assuming every event bubbles. Many common events do, but not all events behave the same way."
};
