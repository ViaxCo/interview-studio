---
id: fe-closures
track: Frontend
category: JavaScript
level: Foundational
question: Explain closures in JavaScript.
sources:
  - label: MDN: Closures
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
  - label: Front End Interview Handbook: JavaScript questions
    url: https://www.frontendinterviewhandbook.com/javascript-questions/
---

## Learn it

A closure is one of those JavaScript ideas that sounds abstract until you connect it to something very simple: where variables live, and which functions can still reach them.

Start with scope. Scope means the area of code where a variable is available. If you create a variable inside a function, that variable belongs to that function's local scope. Code outside the function cannot normally reach it directly. This is useful because it keeps temporary details private.

Now add nested functions. In JavaScript, an inner function can use variables from the outer function where it was written. This is called lexical scoping. Lexical means JavaScript decides variable access from the physical structure of the code, not from where the function is eventually called.

Here is the first step:

```js
function init() {
  const name = "Ada";

  function displayName() {
    console.log(name);
  }

  displayName();
}

init();
```

`displayName` does not have its own `name` variable. JavaScript looks around the function and finds `name` in the outer `init` scope. That part is lexical scoping.

A closure appears when the inner function keeps access to that outer scope even after the outer function has finished running. That is the part that surprises people.

## Walkthrough

Look at this version carefully:

```js
function makeGreeter() {
  const name = "Ada";

  function greet() {
    return `Hello, ${name}`;
  }

  return greet;
}

const sayHello = makeGreeter();

sayHello(); // "Hello, Ada"
```

When `makeGreeter()` runs, it creates `name` and creates the `greet` function. Then it returns `greet`. After that, `makeGreeter()` is finished.

If you are new to closures, you may expect `name` to disappear at that point. But `sayHello` is now holding the returned `greet` function, and `greet` still refers to `name`. So JavaScript keeps the needed lexical environment alive. That combination, the function plus the variables it can still access, is the closure.

Another example makes the idea more obvious:

```js
function makeAdder(x) {
  return function add(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

add5(2); // 7
add10(2); // 12
```

Both returned functions use the same code shape, but they remember different environments. `add5` remembers an environment where `x` is `5`. `add10` remembers an environment where `x` is `10`.

This is the key: a closure does not just remember a function body. It remembers the surrounding variables the function needs.

## Make it practical

Closures are common in frontend code because frontend code is event-based. You often define behavior now and run it later when the user clicks, types, focuses an input, or when a timer fires.

For example:

```js
function makeSizer(size) {
  return function resizeBody() {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size16 = makeSizer(16);

document.getElementById("small").onclick = size12;
document.getElementById("large").onclick = size16;
```

The click handler runs later, but it still knows which `size` it was created with. That is closure doing useful work.

Closures also explain private state:

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
    },
    value() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.value(); // 1
```

Nothing outside `createCounter` can directly touch `count`, but the returned methods can. They share access to the same hidden variable.

Once this clicks, closure bugs also become easier to understand. If a callback runs later and sees an old value, you are probably dealing with a stale closure. If a long-lived listener keeps a large object alive, closure lifetime may be part of the memory problem.

## Common mistakes

A common beginner mistake is thinking a closure copies a value once and freezes it forever. That is not quite right. A closure keeps access to a variable environment. If multiple functions share that environment, they can see changes made through that same environment.

Another common mistake happens with old `var` loop code. `var` is function-scoped, so callbacks created inside the loop can accidentally share the same changing variable. Modern `let` and `const` create block-scoped bindings, which usually avoids that problem.

Do not treat closures as rare advanced syntax. If a function uses a variable from outside itself, you are already using closure behavior.

## Check yourself

- What is the difference between lexical scoping and closure?
- Why does `sayHello()` still know the value of `name` after `makeGreeter()` finishes?
- Why do `add5` and `add10` remember different values of `x`?
- How can closures help create private state?
- What kind of bug might happen when a callback remembers an old value?

## Interview version

A closure is a function together with references to the lexical environment where it was created. In plain terms, a function can keep access to variables from an outer scope even after that outer function has finished running.

Closures matter in frontend code because callbacks, event handlers, timers, debounced functions, and hooks often run later while still depending on variables from the place where they were created. A strong answer should mention lexical scope, lifetime, practical uses like private state or event callbacks, and common risks like stale values or retained memory.
