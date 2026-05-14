---
id: fe-event-propagation-delegation
track: Frontend
category: JavaScript
level: Foundational
question: Explain event propagation and event delegation in the browser.
sources:
  - label: MDN: Event bubbling
    url: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling
  - label: MDN: EventTarget addEventListener
    url: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
---

## Learn it

When you click something on a web page, the browser does not only think about the exact element you clicked. The event travels through the page structure.

Imagine this HTML:

```html
<section id="panel">
  <button id="save">Save</button>
</section>
```

If you click the button, the click happened on the button, but the button is inside the section, and the section is inside the page. The browser gives different ancestors a chance to respond.

The usual mental model has three phases:

```txt
Capture phase:
The event travels down from the window toward the target.

Target phase:
The event reaches the element that was actually clicked.

Bubbling phase:
The event travels back up through parent elements.
```

Most everyday event listeners run during bubbling unless you opt into capture.

## Walkthrough

Here is a small example:

```html
<div id="card">
  <button id="buy">Buy</button>
</div>
```

```js
document.querySelector("#card").addEventListener("click", () => {
  console.log("card clicked");
});

document.querySelector("#buy").addEventListener("click", () => {
  console.log("button clicked");
});
```

When the user clicks the button, the button handler runs, then the card handler can also run because the click bubbles up.

That is why clicking a button inside a clickable card can accidentally trigger both actions.

If the button action should not also trigger the card action, you might stop propagation:

```js
document.querySelector("#buy").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button clicked only");
});
```

Use that carefully. Stopping propagation can also prevent useful parent behavior, analytics, menus, or accessibility-related handlers if overused.

## Make it practical

Event delegation uses bubbling on purpose.

Instead of putting a listener on every item in a list, you put one listener on the parent and inspect what was clicked.

```html
<ul id="todo-list">
  <li><button data-id="1">Complete</button> Learn closures</li>
  <li><button data-id="2">Complete</button> Practice CSS</li>
  <li><button data-id="3">Complete</button> Review React</li>
</ul>
```

```js
document.querySelector("#todo-list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");

  if (!button) return;

  const id = button.dataset.id;
  console.log(`Complete todo ${id}`);
});
```

This works even if more todo items are added later, because the parent listener still receives bubbled clicks.

This is useful for dynamic lists, tables, menus, and any UI where adding a listener to every child would be noisy.

## Common mistakes

A common mistake is confusing `event.target` and `event.currentTarget`. `target` is where the event started. `currentTarget` is the element whose listener is currently running.

Another mistake is using `stopPropagation()` as a default fix. It can hide problems and break parent-level behavior.

A third mistake is assuming every event bubbles. Many common events do, but not all events behave the same way.

## Check yourself

- What does it mean for an event to bubble?
- Why can a button click trigger a parent card handler?
- What is event delegation?
- What is the difference between `target` and `currentTarget`?
- Why should `stopPropagation()` be used carefully?

## Interview version

Event propagation is the path an event takes through the DOM: capture down, target, then bubble up. Event delegation uses bubbling by placing one listener on a parent and checking which child triggered the event.

A strong answer should mention bubbling, capture, target, `event.target`, `event.currentTarget`, `stopPropagation()`, and why delegation is useful for dynamic lists.
