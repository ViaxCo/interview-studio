import type { Question } from "./questionTypes";

export const generatedQuestions: Question[] = [
  {
    "id": "fe-closures",
    "track": "Frontend",
    "category": "JavaScript",
    "level": "Foundational",
    "question": "Explain closures in JavaScript.",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A closure is one of those JavaScript ideas that sounds abstract until you connect it to something very simple: where variables live, and which functions can still reach them.\n\nStart with scope. Scope means the area of code where a variable is available. If you create a variable inside a function, that variable belongs to that function's local scope. Code outside the function cannot normally reach it directly. This is useful because it keeps temporary details private.\n\nNow add nested functions. In JavaScript, an inner function can use variables from the outer function where it was written. This is called lexical scoping. Lexical means JavaScript decides variable access from the physical structure of the code, not from where the function is eventually called.\n\nHere is the first step:\n\n```js\nfunction init() {\n  const name = \"Ada\";\n\n  function displayName() {\n    console.log(name);\n  }\n\n  displayName();\n}\n\ninit();\n```\n\n`displayName` does not have its own `name` variable. JavaScript looks around the function and finds `name` in the outer `init` scope. That part is lexical scoping.\n\nA closure appears when the inner function keeps access to that outer scope even after the outer function has finished running. That is the part that surprises people."
      },
      {
        "title": "Walkthrough",
        "body": "Look at this version carefully:\n\n```js\nfunction makeGreeter() {\n  const name = \"Ada\";\n\n  function greet() {\n    return `Hello, ${name}`;\n  }\n\n  return greet;\n}\n\nconst sayHello = makeGreeter();\n\nsayHello(); // \"Hello, Ada\"\n```\n\nWhen `makeGreeter()` runs, it creates `name` and creates the `greet` function. Then it returns `greet`. After that, `makeGreeter()` is finished.\n\nIf you are new to closures, you may expect `name` to disappear at that point. But `sayHello` is now holding the returned `greet` function, and `greet` still refers to `name`. So JavaScript keeps the needed lexical environment alive. That combination, the function plus the variables it can still access, is the closure.\n\nAnother example makes the idea more obvious:\n\n```js\nfunction makeAdder(x) {\n  return function add(y) {\n    return x + y;\n  };\n}\n\nconst add5 = makeAdder(5);\nconst add10 = makeAdder(10);\n\nadd5(2); // 7\nadd10(2); // 12\n```\n\nBoth returned functions use the same code shape, but they remember different environments. `add5` remembers an environment where `x` is `5`. `add10` remembers an environment where `x` is `10`.\n\nThis is the key: a closure does not just remember a function body. It remembers the surrounding variables the function needs."
      },
      {
        "title": "Make it practical",
        "body": "Closures are common in frontend code because frontend code is event-based. You often define behavior now and run it later when the user clicks, types, focuses an input, or when a timer fires.\n\nFor example:\n\n```js\nfunction makeSizer(size) {\n  return function resizeBody() {\n    document.body.style.fontSize = `${size}px`;\n  };\n}\n\nconst size12 = makeSizer(12);\nconst size16 = makeSizer(16);\n\ndocument.getElementById(\"small\").onclick = size12;\ndocument.getElementById(\"large\").onclick = size16;\n```\n\nThe click handler runs later, but it still knows which `size` it was created with. That is closure doing useful work.\n\nClosures also explain private state:\n\n```js\nfunction createCounter() {\n  let count = 0;\n\n  return {\n    increment() {\n      count += 1;\n    },\n    value() {\n      return count;\n    },\n  };\n}\n\nconst counter = createCounter();\n\ncounter.increment();\ncounter.value(); // 1\n```\n\nNothing outside `createCounter` can directly touch `count`, but the returned methods can. They share access to the same hidden variable.\n\nOnce this clicks, closure bugs also become easier to understand. If a callback runs later and sees an old value, you are probably dealing with a stale closure. If a long-lived listener keeps a large object alive, closure lifetime may be part of the memory problem."
      },
      {
        "title": "Common mistakes",
        "body": "A common beginner mistake is thinking a closure copies a value once and freezes it forever. That is not quite right. A closure keeps access to a variable environment. If multiple functions share that environment, they can see changes made through that same environment.\n\nAnother common mistake happens with old `var` loop code. `var` is function-scoped, so callbacks created inside the loop can accidentally share the same changing variable. Modern `let` and `const` create block-scoped bindings, which usually avoids that problem.\n\nDo not treat closures as rare advanced syntax. If a function uses a variable from outside itself, you are already using closure behavior."
      }
    ],
    "answer": "A closure is one of those JavaScript ideas that sounds abstract until you connect it to something very simple: where variables live, and which functions can still reach them.",
    "reasoning": "Closures are common in frontend code because frontend code is event-based. You often define behavior now and run it later when the user clicks, types, focuses an input, or when a timer fires.\n\nFor example:\n\n```js\nfunction makeSizer(size) {\n  return function resizeBody() {\n    document.body.style.fontSize = `${size}px`;\n  };\n}\n\nconst size12 = makeSizer(12);\nconst size16 = makeSizer(16);\n\ndocument.getElementById(\"small\").onclick = size12;\ndocument.getElementById(\"large\").onclick = size16;\n```\n\nThe click handler runs later, but it still knows which `size` it was created with. That is closure doing useful work.\n\nClosures also explain private state:\n\n```js\nfunction createCounter() {\n  let count = 0;\n\n  return {\n    increment() {\n      count += 1;\n    },\n    value() {\n      return count;\n    },\n  };\n}\n\nconst counter = createCounter();\n\ncounter.increment();\ncounter.value(); // 1\n```\n\nNothing outside `createCounter` can directly touch `count`, but the returned methods can. They share access to the same hidden variable.\n\nOnce this clicks, closure bugs also become easier to understand. If a callback runs later and sees an old value, you are probably dealing with a stale closure. If a long-lived listener keeps a large object alive, closure lifetime may be part of the memory problem.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between lexical scoping and closure?",
      "Why does `sayHello()` still know the value of `name` after `makeGreeter()` finishes?",
      "Why do `add5` and `add10` remember different values of `x`?",
      "How can closures help create private state?",
      "What kind of bug might happen when a callback remembers an old value?"
    ],
    "interviewAnswer": "A closure is a function together with references to the lexical environment where it was created. In plain terms, a function can keep access to variables from an outer scope even after that outer function has finished running.\n\nClosures matter in frontend code because callbacks, event handlers, timers, debounced functions, and hooks often run later while still depending on variables from the place where they were created. A strong answer should mention lexical scope, lifetime, practical uses like private state or event callbacks, and common risks like stale values or retained memory.",
    "sourceLinks": [
      {
        "label": "MDN: Closures",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures"
      },
      {
        "label": "Front End Interview Handbook: JavaScript questions",
        "url": "https://www.frontendinterviewhandbook.com/javascript-questions/"
      }
    ],
    "beginnerExplanation": "A closure is one of those JavaScript ideas that sounds abstract until you connect it to something very simple: where variables live, and which functions can still reach them.\n\nStart with scope. Scope means the area of code where a variable is available. If you create a variable inside a function, that variable belongs to that function's local scope. Code outside the function cannot normally reach it directly. This is useful because it keeps temporary details private.\n\nNow add nested functions. In JavaScript, an inner function can use variables from the outer function where it was written. This is called lexical scoping. Lexical means JavaScript decides variable access from the physical structure of the code, not from where the function is eventually called.\n\nHere is the first step:\n\n```js\nfunction init() {\n  const name = \"Ada\";\n\n  function displayName() {\n    console.log(name);\n  }\n\n  displayName();\n}\n\ninit();\n```\n\n`displayName` does not have its own `name` variable. JavaScript looks around the function and finds `name` in the outer `init` scope. That part is lexical scoping.\n\nA closure appears when the inner function keeps access to that outer scope even after the outer function has finished running. That is the part that surprises people.",
    "example": "Look at this version carefully:\n\n```js\nfunction makeGreeter() {\n  const name = \"Ada\";\n\n  function greet() {\n    return `Hello, ${name}`;\n  }\n\n  return greet;\n}\n\nconst sayHello = makeGreeter();\n\nsayHello(); // \"Hello, Ada\"\n```\n\nWhen `makeGreeter()` runs, it creates `name` and creates the `greet` function. Then it returns `greet`. After that, `makeGreeter()` is finished.\n\nIf you are new to closures, you may expect `name` to disappear at that point. But `sayHello` is now holding the returned `greet` function, and `greet` still refers to `name`. So JavaScript keeps the needed lexical environment alive. That combination, the function plus the variables it can still access, is the closure.\n\nAnother example makes the idea more obvious:\n\n```js\nfunction makeAdder(x) {\n  return function add(y) {\n    return x + y;\n  };\n}\n\nconst add5 = makeAdder(5);\nconst add10 = makeAdder(10);\n\nadd5(2); // 7\nadd10(2); // 12\n```\n\nBoth returned functions use the same code shape, but they remember different environments. `add5` remembers an environment where `x` is `5`. `add10` remembers an environment where `x` is `10`.\n\nThis is the key: a closure does not just remember a function body. It remembers the surrounding variables the function needs.",
    "commonMistakes": "A common beginner mistake is thinking a closure copies a value once and freezes it forever. That is not quite right. A closure keeps access to a variable environment. If multiple functions share that environment, they can see changes made through that same environment.\n\nAnother common mistake happens with old `var` loop code. `var` is function-scoped, so callbacks created inside the loop can accidentally share the same changing variable. Modern `let` and `const` create block-scoped bindings, which usually avoids that problem.\n\nDo not treat closures as rare advanced syntax. If a function uses a variable from outside itself, you are already using closure behavior."
  },
  {
    "id": "fe-controlled-components",
    "track": "Frontend",
    "category": "React",
    "level": "Foundational",
    "question": "What is the difference between controlled and uncontrolled components in React?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "When people talk about controlled and uncontrolled components, they are usually talking about form inputs. The question is simple: who is currently in charge of the input's value?\n\nIn a controlled component, React state is the source of truth. The input shows whatever value React gives it, and every user change goes through React.\n\n```jsx\nfunction SearchBox() {\n  const [query, setQuery] = useState(\"\");\n\n  return (\n    <input\n      value={query}\n      onChange={(event) => setQuery(event.target.value)}\n    />\n  );\n}\n```\n\nHere, the browser does not get to quietly keep its own final answer. The input displays `query`. When the user types, `onChange` updates `query`. React renders again, and the input displays the new value.\n\nIn an uncontrolled component, the browser keeps the current value inside the DOM input. React may set an initial value, but React does not update state on every keystroke.\n\n```jsx\nfunction SearchBox() {\n  const inputRef = useRef(null);\n\n  function handleSubmit() {\n    console.log(inputRef.current.value);\n  }\n\n  return <input ref={inputRef} defaultValue=\"\" />;\n}\n```\n\nThe mental model is: controlled means React owns the value. Uncontrolled means the DOM owns the value, and React reads it when needed."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a signup form with an email field.\n\nIf the field is controlled, the app can react immediately as the user types. It can disable the submit button until the email looks valid. It can show an error. It can transform text. It can keep multiple fields in sync. It can reset the field by setting state back to an empty string.\n\n```jsx\nfunction SignupForm() {\n  const [email, setEmail] = useState(\"\");\n  const isValid = email.includes(\"@\");\n\n  return (\n    <form>\n      <input value={email} onChange={(event) => setEmail(event.target.value)} />\n      <button disabled={!isValid}>Create account</button>\n    </form>\n  );\n}\n```\n\nIf the field is uncontrolled, React does less work during typing. This can be fine when you only need the value at submit time.\n\n```jsx\nfunction SignupForm() {\n  const emailRef = useRef(null);\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    const email = emailRef.current.value;\n    console.log(email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={emailRef} name=\"email\" />\n      <button>Create account</button>\n    </form>\n  );\n}\n```\n\nNeither approach is automatically better. Controlled inputs give you direct product control. Uncontrolled inputs can be simpler when the browser can manage the field and you only need to read the value later."
      },
      {
        "title": "Make it practical",
        "body": "Use controlled inputs when the UI depends on the current value. Examples include live validation, dependent fields, formatting, search as you type, disabling buttons, preview panes, and forms that need to be reset from app state.\n\nUse uncontrolled inputs when you only need a value at the end, especially for small forms, file inputs, or cases where a form library handles the DOM details for you.\n\nThe most important rule is consistency. An input should not switch between controlled and uncontrolled during its lifetime. This often happens when a controlled `value` starts as `undefined` and later becomes a string.\n\n```jsx\n// Risky because name might be undefined at first.\n<input value={name} onChange={handleChange} />\n\n// Safer because the input is always controlled with a string.\n<input value={name ?? \"\"} onChange={handleChange} />\n```\n\nThat tiny detail matters because React needs to know who owns the input. If ownership changes halfway through, bugs become confusing."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using `value` without `onChange`. That makes the input controlled but impossible to edit, because React keeps forcing the same value back into the field.\n\nAnother mistake is using `defaultValue` and expecting it to update later when props change. `defaultValue` only sets the initial DOM value. If the value needs to follow React state, use `value`.\n\nA third mistake is assuming controlled components are only about forms. The deeper idea is ownership. The same product question appears everywhere: should this thing manage itself locally, or should the parent/app own the state because other parts of the UI depend on it?"
      }
    ],
    "answer": "When people talk about controlled and uncontrolled components, they are usually talking about form inputs. The question is simple: who is currently in charge of the input's value?",
    "reasoning": "Use controlled inputs when the UI depends on the current value. Examples include live validation, dependent fields, formatting, search as you type, disabling buttons, preview panes, and forms that need to be reset from app state.\n\nUse uncontrolled inputs when you only need a value at the end, especially for small forms, file inputs, or cases where a form library handles the DOM details for you.\n\nThe most important rule is consistency. An input should not switch between controlled and uncontrolled during its lifetime. This often happens when a controlled `value` starts as `undefined` and later becomes a string.\n\n```jsx\n// Risky because name might be undefined at first.\n<input value={name} onChange={handleChange} />\n\n// Safer because the input is always controlled with a string.\n<input value={name ?? \"\"} onChange={handleChange} />\n```\n\nThat tiny detail matters because React needs to know who owns the input. If ownership changes halfway through, bugs become confusing.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Who owns the value in a controlled input?",
      "Why does a controlled input need `onChange`?",
      "What is `defaultValue` for?",
      "When might an uncontrolled input be enough?",
      "Why is switching between controlled and uncontrolled input state a problem?"
    ],
    "interviewAnswer": "A controlled component gets its value from React state and reports changes back through an event handler. An uncontrolled component keeps its current value in the DOM, usually accessed with a ref or form submission.\n\nControlled inputs are best when the UI needs to respond to the value immediately, such as validation, previews, dependent fields, resets, or submit-button state. Uncontrolled inputs are useful when the browser can own the field until submit time. A good answer should mention source of truth, `value` versus `defaultValue`, `onChange`, refs, and the warning caused by switching ownership during the component's lifetime.",
    "sourceLinks": [
      {
        "label": "React: input component",
        "url": "https://react.dev/reference/react-dom/components/input"
      },
      {
        "label": "React: Sharing state between components",
        "url": "https://react.dev/learn/sharing-state-between-components"
      }
    ],
    "beginnerExplanation": "When people talk about controlled and uncontrolled components, they are usually talking about form inputs. The question is simple: who is currently in charge of the input's value?\n\nIn a controlled component, React state is the source of truth. The input shows whatever value React gives it, and every user change goes through React.\n\n```jsx\nfunction SearchBox() {\n  const [query, setQuery] = useState(\"\");\n\n  return (\n    <input\n      value={query}\n      onChange={(event) => setQuery(event.target.value)}\n    />\n  );\n}\n```\n\nHere, the browser does not get to quietly keep its own final answer. The input displays `query`. When the user types, `onChange` updates `query`. React renders again, and the input displays the new value.\n\nIn an uncontrolled component, the browser keeps the current value inside the DOM input. React may set an initial value, but React does not update state on every keystroke.\n\n```jsx\nfunction SearchBox() {\n  const inputRef = useRef(null);\n\n  function handleSubmit() {\n    console.log(inputRef.current.value);\n  }\n\n  return <input ref={inputRef} defaultValue=\"\" />;\n}\n```\n\nThe mental model is: controlled means React owns the value. Uncontrolled means the DOM owns the value, and React reads it when needed.",
    "example": "Imagine a signup form with an email field.\n\nIf the field is controlled, the app can react immediately as the user types. It can disable the submit button until the email looks valid. It can show an error. It can transform text. It can keep multiple fields in sync. It can reset the field by setting state back to an empty string.\n\n```jsx\nfunction SignupForm() {\n  const [email, setEmail] = useState(\"\");\n  const isValid = email.includes(\"@\");\n\n  return (\n    <form>\n      <input value={email} onChange={(event) => setEmail(event.target.value)} />\n      <button disabled={!isValid}>Create account</button>\n    </form>\n  );\n}\n```\n\nIf the field is uncontrolled, React does less work during typing. This can be fine when you only need the value at submit time.\n\n```jsx\nfunction SignupForm() {\n  const emailRef = useRef(null);\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    const email = emailRef.current.value;\n    console.log(email);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={emailRef} name=\"email\" />\n      <button>Create account</button>\n    </form>\n  );\n}\n```\n\nNeither approach is automatically better. Controlled inputs give you direct product control. Uncontrolled inputs can be simpler when the browser can manage the field and you only need to read the value later.",
    "commonMistakes": "A common mistake is using `value` without `onChange`. That makes the input controlled but impossible to edit, because React keeps forcing the same value back into the field.\n\nAnother mistake is using `defaultValue` and expecting it to update later when props change. `defaultValue` only sets the initial DOM value. If the value needs to follow React state, use `value`.\n\nA third mistake is assuming controlled components are only about forms. The deeper idea is ownership. The same product question appears everywhere: should this thing manage itself locally, or should the parent/app own the state because other parts of the UI depend on it?"
  },
  {
    "id": "fe-core-web-vitals",
    "track": "Frontend",
    "category": "Performance",
    "level": "Intermediate",
    "question": "What are Core Web Vitals, and how would you improve them?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Core Web Vitals are a small set of user-experience performance metrics. They are useful because they describe what the page feels like to a real person, not just how fast a server responded.\n\nThe three main Core Web Vitals are:\n\n- Largest Contentful Paint, or LCP: how long it takes for the main visible content to load.\n- Interaction to Next Paint, or INP: how responsive the page feels when the user interacts.\n- Cumulative Layout Shift, or CLS: how much the layout unexpectedly moves around.\n\nThink of them as three beginner-friendly questions.\n\nDid the important content show up quickly? That is LCP.\n\nDid the page respond quickly when I clicked or typed? That is INP.\n\nDid the page stay visually stable, or did things jump around? That is CLS.\n\nThese metrics matter because users do not experience a page as one technical number. A page can have a fast API but still feel slow if JavaScript blocks the main thread. A page can load content quickly but still feel broken if buttons jump just as the user taps them."
      },
      {
        "title": "Walkthrough",
        "body": "LCP is often affected by the largest hero image, product image, heading, or content block near the top of the page. If the browser discovers the important image late, downloads a huge file, waits on render-blocking CSS, or waits for JavaScript before showing content, LCP gets worse.\n\nINP is about interaction responsiveness. When a user clicks a filter button, opens a menu, types in a search box, or submits a form, the browser needs time to run JavaScript, update state, calculate layout, paint the result, and show feedback. If the main thread is busy doing expensive work, the user feels delay.\n\nCLS happens when visible elements move after the page starts loading. A common example is an image without width and height. The browser first lays out the page without knowing the image size. Then the image loads, takes space, and pushes text or buttons down. Ads, late-loading banners, injected fonts, and dynamic content can cause the same problem.\n\nThe key is that each metric points to a different kind of user frustration. LCP is waiting. INP is lag. CLS is surprise movement."
      },
      {
        "title": "Make it practical",
        "body": "To improve LCP, start by identifying the main content element. Then make it easy for the browser to load and render it. Use properly sized images, modern formats, priority loading for the most important image, server-rendered or static content when appropriate, less render-blocking CSS, and avoid making the user wait for unnecessary JavaScript before content appears.\n\nTo improve INP, reduce expensive work during interactions. Break long tasks into smaller chunks, avoid re-rendering large parts of the page unnecessarily, debounce work that does not need to run on every keystroke, virtualize huge lists, move heavy computation away from the main interaction path, and show immediate feedback.\n\nTo improve CLS, reserve space before content arrives. Set image dimensions, avoid inserting banners above existing content, use stable skeletons, load fonts in a way that avoids dramatic text shifts, and keep dynamic UI from pushing important controls around unexpectedly.\n\nA useful workflow is:\n\n1. Measure in the field if possible, because lab tests can miss real device and network conditions.\n2. Find which metric is bad.\n3. Identify the page element or interaction causing it.\n4. Make one targeted change.\n5. Measure again.\n\nPerformance work becomes much less mysterious when you connect each metric to a visible user pain."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating performance as only bundle size. Bundle size matters, but a small bundle can still create poor INP if one interaction does too much synchronous work.\n\nAnother mistake is optimizing the wrong page. The homepage might be fine while the dashboard, product detail page, or checkout flow performs badly.\n\nA third mistake is chasing scores without understanding the user journey. A TPM, designer, or frontend engineer should ask which slow moment hurts the user or business most, then improve that moment first."
      }
    ],
    "answer": "Core Web Vitals are a small set of user-experience performance metrics. They are useful because they describe what the page feels like to a real person, not just how fast a server responded.",
    "reasoning": "To improve LCP, start by identifying the main content element. Then make it easy for the browser to load and render it. Use properly sized images, modern formats, priority loading for the most important image, server-rendered or static content when appropriate, less render-blocking CSS, and avoid making the user wait for unnecessary JavaScript before content appears.\n\nTo improve INP, reduce expensive work during interactions. Break long tasks into smaller chunks, avoid re-rendering large parts of the page unnecessarily, debounce work that does not need to run on every keystroke, virtualize huge lists, move heavy computation away from the main interaction path, and show immediate feedback.\n\nTo improve CLS, reserve space before content arrives. Set image dimensions, avoid inserting banners above existing content, use stable skeletons, load fonts in a way that avoids dramatic text shifts, and keep dynamic UI from pushing important controls around unexpectedly.\n\nA useful workflow is:\n\n1. Measure in the field if possible, because lab tests can miss real device and network conditions.\n2. Find which metric is bad.\n3. Identify the page element or interaction causing it.\n4. Make one targeted change.\n5. Measure again.\n\nPerformance work becomes much less mysterious when you connect each metric to a visible user pain.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Which Core Web Vital is about the main content appearing?",
      "Which one is about interaction responsiveness?",
      "Which one is about unexpected layout movement?",
      "Why can a page have a fast API but still poor INP?",
      "What would you check first if the hero image is the LCP element?"
    ],
    "interviewAnswer": "Core Web Vitals measure loading, responsiveness, and visual stability through LCP, INP, and CLS. I would improve them by first measuring the affected pages and identifying the exact element or interaction causing the poor score.\n\nFor LCP, I would optimize the main content path. For INP, I would reduce main-thread work during interactions. For CLS, I would reserve space and avoid late layout changes. The strongest answer ties each metric back to what the user feels: waiting, lag, or unexpected movement.",
    "sourceLinks": [
      {
        "label": "web.dev: Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      },
      {
        "label": "web.dev: Optimize Interaction to Next Paint",
        "url": "https://web.dev/articles/optimize-inp"
      }
    ],
    "beginnerExplanation": "Core Web Vitals are a small set of user-experience performance metrics. They are useful because they describe what the page feels like to a real person, not just how fast a server responded.\n\nThe three main Core Web Vitals are:\n\n- Largest Contentful Paint, or LCP: how long it takes for the main visible content to load.\n- Interaction to Next Paint, or INP: how responsive the page feels when the user interacts.\n- Cumulative Layout Shift, or CLS: how much the layout unexpectedly moves around.\n\nThink of them as three beginner-friendly questions.\n\nDid the important content show up quickly? That is LCP.\n\nDid the page respond quickly when I clicked or typed? That is INP.\n\nDid the page stay visually stable, or did things jump around? That is CLS.\n\nThese metrics matter because users do not experience a page as one technical number. A page can have a fast API but still feel slow if JavaScript blocks the main thread. A page can load content quickly but still feel broken if buttons jump just as the user taps them.",
    "example": "LCP is often affected by the largest hero image, product image, heading, or content block near the top of the page. If the browser discovers the important image late, downloads a huge file, waits on render-blocking CSS, or waits for JavaScript before showing content, LCP gets worse.\n\nINP is about interaction responsiveness. When a user clicks a filter button, opens a menu, types in a search box, or submits a form, the browser needs time to run JavaScript, update state, calculate layout, paint the result, and show feedback. If the main thread is busy doing expensive work, the user feels delay.\n\nCLS happens when visible elements move after the page starts loading. A common example is an image without width and height. The browser first lays out the page without knowing the image size. Then the image loads, takes space, and pushes text or buttons down. Ads, late-loading banners, injected fonts, and dynamic content can cause the same problem.\n\nThe key is that each metric points to a different kind of user frustration. LCP is waiting. INP is lag. CLS is surprise movement.",
    "commonMistakes": "A common mistake is treating performance as only bundle size. Bundle size matters, but a small bundle can still create poor INP if one interaction does too much synchronous work.\n\nAnother mistake is optimizing the wrong page. The homepage might be fine while the dashboard, product detail page, or checkout flow performs badly.\n\nA third mistake is chasing scores without understanding the user journey. A TPM, designer, or frontend engineer should ask which slow moment hurts the user or business most, then improve that moment first."
  },
  {
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
  },
  {
    "id": "fe-flexbox-grid",
    "track": "Frontend",
    "category": "CSS",
    "level": "Foundational",
    "question": "When would you use Flexbox versus CSS Grid?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Flexbox and Grid are both layout systems in CSS, but they are built for different layout problems.\n\nFlexbox is mainly for one-dimensional layout. That means you are arranging items in a row or a column. You can wrap to multiple lines, but the core thinking is still one direction at a time.\n\nGrid is mainly for two-dimensional layout. That means you are arranging items across rows and columns at the same time.\n\nA simple way to remember it:\n\n- Use Flexbox when the content itself should decide how space is shared along one direction.\n- Use Grid when the page or component needs a deliberate row-and-column structure.\n\nFor example, a button group, navigation bar, toolbar, avatar plus text row, or centered modal content is usually a Flexbox problem.\n\nA dashboard, pricing table, gallery, card layout, calendar, or page shell with named areas is often a Grid problem."
      },
      {
        "title": "Walkthrough",
        "body": "Here is a Flexbox row:\n\n```css\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.toolbar .search {\n  flex: 1;\n}\n```\n\nThis says: place the toolbar items in a row, align them vertically, leave a gap, and let the search field take remaining space. The exact width of each item can adapt to the content and available space.\n\nHere is a Grid layout:\n\n```css\n.dashboard {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\";\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n```\n\nThis says: create a defined page structure with columns and rows. The sidebar occupies a named area. The main content has a predictable position.\n\nThe difference is not about which syntax looks nicer. It is about the job. Flexbox is great when items flow along an axis. Grid is great when you are designing a layout map."
      },
      {
        "title": "Make it practical",
        "body": "A good frontend engineer often uses both together.\n\nImagine a product dashboard. The outer page might use Grid because the app has a sidebar, header, and main content area. Inside the header, Flexbox might align the title, search field, and account menu. Inside a card, Flexbox might align an icon and label. Inside the main area, Grid might arrange analytic tiles.\n\n```css\n.app-shell {\n  display: grid;\n  grid-template-columns: 15rem minmax(0, 1fr);\n}\n\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.metrics {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));\n  gap: 1rem;\n}\n```\n\nThis combination is normal. You do not need to pick one layout system for the entire app.\n\nWhen deciding, ask: am I aligning items in one direction, or am I defining a structure across both rows and columns? That question usually gets you to the right tool."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using Flexbox for a layout that really needs columns to line up across rows. Flexbox can wrap, but each line behaves independently. If you need consistent tracks across rows, Grid is usually cleaner.\n\nAnother mistake is using Grid for tiny one-axis alignment. A row with an icon, label, spacer, and button is often easier with Flexbox.\n\nAlso remember that layout should protect content. Avoid fixed widths unless you really need them. Use `minmax(0, 1fr)`, `auto-fit`, `min()`, `max()`, and responsive constraints so text and controls have room to behave on small screens."
      }
    ],
    "answer": "Flexbox and Grid are both layout systems in CSS, but they are built for different layout problems.",
    "reasoning": "A good frontend engineer often uses both together.\n\nImagine a product dashboard. The outer page might use Grid because the app has a sidebar, header, and main content area. Inside the header, Flexbox might align the title, search field, and account menu. Inside a card, Flexbox might align an icon and label. Inside the main area, Grid might arrange analytic tiles.\n\n```css\n.app-shell {\n  display: grid;\n  grid-template-columns: 15rem minmax(0, 1fr);\n}\n\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.metrics {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));\n  gap: 1rem;\n}\n```\n\nThis combination is normal. You do not need to pick one layout system for the entire app.\n\nWhen deciding, ask: am I aligning items in one direction, or am I defining a structure across both rows and columns? That question usually gets you to the right tool.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does one-dimensional layout mean?",
      "What does two-dimensional layout mean?",
      "Why is a toolbar usually a Flexbox problem?",
      "Why is a dashboard shell usually a Grid problem?",
      "Can Flexbox and Grid be used together in the same component tree?"
    ],
    "interviewAnswer": "Flexbox is best for one-dimensional layout, where items are arranged along a row or column and space is distributed along that axis. Grid is best for two-dimensional layout, where rows and columns need to be controlled together.\n\nI would use Flexbox for nav bars, toolbars, centering, and small alignment patterns. I would use Grid for dashboards, galleries, page shells, calendars, and layouts where items must line up across both axes. In real apps, I often combine them.",
    "sourceLinks": [
      {
        "label": "MDN: Basic concepts of flexbox",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
      },
      {
        "label": "MDN: Basic concepts of grid layout",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"
      }
    ],
    "beginnerExplanation": "Flexbox and Grid are both layout systems in CSS, but they are built for different layout problems.\n\nFlexbox is mainly for one-dimensional layout. That means you are arranging items in a row or a column. You can wrap to multiple lines, but the core thinking is still one direction at a time.\n\nGrid is mainly for two-dimensional layout. That means you are arranging items across rows and columns at the same time.\n\nA simple way to remember it:\n\n- Use Flexbox when the content itself should decide how space is shared along one direction.\n- Use Grid when the page or component needs a deliberate row-and-column structure.\n\nFor example, a button group, navigation bar, toolbar, avatar plus text row, or centered modal content is usually a Flexbox problem.\n\nA dashboard, pricing table, gallery, card layout, calendar, or page shell with named areas is often a Grid problem.",
    "example": "Here is a Flexbox row:\n\n```css\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.toolbar .search {\n  flex: 1;\n}\n```\n\nThis says: place the toolbar items in a row, align them vertically, leave a gap, and let the search field take remaining space. The exact width of each item can adapt to the content and available space.\n\nHere is a Grid layout:\n\n```css\n.dashboard {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\";\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n```\n\nThis says: create a defined page structure with columns and rows. The sidebar occupies a named area. The main content has a predictable position.\n\nThe difference is not about which syntax looks nicer. It is about the job. Flexbox is great when items flow along an axis. Grid is great when you are designing a layout map.",
    "commonMistakes": "A common mistake is using Flexbox for a layout that really needs columns to line up across rows. Flexbox can wrap, but each line behaves independently. If you need consistent tracks across rows, Grid is usually cleaner.\n\nAnother mistake is using Grid for tiny one-axis alignment. A row with an icon, label, spacer, and button is often easier with Flexbox.\n\nAlso remember that layout should protect content. Avoid fixed widths unless you really need them. Use `minmax(0, 1fr)`, `auto-fit`, `min()`, `max()`, and responsive constraints so text and controls have room to behave on small screens."
  },
  {
    "id": "fe-promises-async-await",
    "track": "Frontend",
    "category": "JavaScript",
    "level": "Foundational",
    "question": "Explain Promises and async/await in JavaScript.",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A Promise represents a value you do not have yet. The work may still be happening. Later, the Promise will either succeed with a value or fail with a reason.\n\nThis is useful because frontend apps are full of waiting: waiting for a network request, waiting for a file to load, waiting for permission, waiting for an animation, or waiting for a database response from an API.\n\nA Promise has three states:\n\n- Pending: the work is still in progress.\n- Fulfilled: the work succeeded and produced a value.\n- Rejected: the work failed and produced an error reason.\n\nHere is a basic Promise chain:\n\n```js\nfetch(\"/api/user\")\n  .then((response) => response.json())\n  .then((user) => {\n    console.log(user.name);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n```\n\n`async` and `await` do not replace Promises. They give you a more readable way to work with Promises.\n\n```js\nasync function loadUser() {\n  try {\n    const response = await fetch(\"/api/user\");\n    const user = await response.json();\n    console.log(user.name);\n  } catch (error) {\n    console.error(error);\n  }\n}\n```\n\nThe important idea is: `await` pauses the async function until the Promise settles, but it does not freeze the whole browser."
      },
      {
        "title": "Walkthrough",
        "body": "Suppose a user opens a profile page. The app asks the server for profile data.\n\n```js\nasync function getProfile(userId) {\n  const response = await fetch(`/api/users/${userId}`);\n\n  if (!response.ok) {\n    throw new Error(\"Could not load profile\");\n  }\n\n  return response.json();\n}\n```\n\nWhen JavaScript reaches `await fetch(...)`, the async function waits for that Promise. Other browser work can continue. The user can still move the mouse. Other events can still be scheduled. JavaScript is not sitting in a blocking loop.\n\nIf the request succeeds, execution continues and `response` is available. If the Promise rejects, control jumps to the nearest `catch`.\n\n```js\nasync function showProfile(userId) {\n  try {\n    const profile = await getProfile(userId);\n    renderProfile(profile);\n  } catch (error) {\n    renderError(\"We could not load this profile.\");\n  }\n}\n```\n\nThis reads like normal step-by-step code, but it is still Promise-based underneath."
      },
      {
        "title": "Make it practical",
        "body": "The main frontend skill is not just knowing syntax. It is knowing what should happen in each state.\n\nWhen loading data, the UI usually needs:\n\n1. A loading state while the Promise is pending.\n2. A success state when data arrives.\n3. An error state when the request fails.\n4. A retry or recovery path if the user can try again.\n\n```jsx\nfunction Profile({ userId }) {\n  const [state, setState] = useState({ status: \"loading\" });\n\n  useEffect(() => {\n    let ignore = false;\n\n    async function load() {\n      try {\n        const profile = await getProfile(userId);\n        if (!ignore) setState({ status: \"success\", profile });\n      } catch (error) {\n        if (!ignore) setState({ status: \"error\" });\n      }\n    }\n\n    load();\n\n    return () => {\n      ignore = true;\n    };\n  }, [userId]);\n\n  if (state.status === \"loading\") return <p>Loading...</p>;\n  if (state.status === \"error\") return <p>Could not load profile.</p>;\n  return <h1>{state.profile.name}</h1>;\n}\n```\n\nThis example also shows a real bug to avoid: stale async results. If `userId` changes before the first request finishes, you do not want the old request to overwrite the new page state."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is forgetting to return or await a Promise. If you call an async function without awaiting it, the surrounding code continues immediately.\n\nAnother mistake is using `try/catch` but only wrapping synchronous code. Errors from awaited Promises are caught by `try/catch`, but errors from Promises you do not await may escape that block.\n\nA third mistake is accidentally running async work one at a time when it could run in parallel.\n\n```js\nconst user = await fetchUser();\nconst teams = await fetchTeams();\n```\n\nIf those two requests do not depend on each other, this may be slower than:\n\n```js\nconst [user, teams] = await Promise.all([fetchUser(), fetchTeams()]);\n```"
      }
    ],
    "answer": "A Promise represents a value you do not have yet. The work may still be happening. Later, the Promise will either succeed with a value or fail with a reason.",
    "reasoning": "The main frontend skill is not just knowing syntax. It is knowing what should happen in each state.\n\nWhen loading data, the UI usually needs:\n\n1. A loading state while the Promise is pending.\n2. A success state when data arrives.\n3. An error state when the request fails.\n4. A retry or recovery path if the user can try again.\n\n```jsx\nfunction Profile({ userId }) {\n  const [state, setState] = useState({ status: \"loading\" });\n\n  useEffect(() => {\n    let ignore = false;\n\n    async function load() {\n      try {\n        const profile = await getProfile(userId);\n        if (!ignore) setState({ status: \"success\", profile });\n      } catch (error) {\n        if (!ignore) setState({ status: \"error\" });\n      }\n    }\n\n    load();\n\n    return () => {\n      ignore = true;\n    };\n  }, [userId]);\n\n  if (state.status === \"loading\") return <p>Loading...</p>;\n  if (state.status === \"error\") return <p>Could not load profile.</p>;\n  return <h1>{state.profile.name}</h1>;\n}\n```\n\nThis example also shows a real bug to avoid: stale async results. If `userId` changes before the first request finishes, you do not want the old request to overwrite the new page state.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What are the three Promise states?",
      "What does `await` actually wait for?",
      "Does `await` block the whole browser?",
      "Why does UI need loading, success, and error states?",
      "When should you use `Promise.all`?"
    ],
    "interviewAnswer": "A Promise represents an asynchronous result that is pending, fulfilled, or rejected. `async/await` is syntax for writing Promise-based code in a more sequential style. `await` pauses the async function until the Promise settles, but it does not block the whole browser thread.\n\nA strong frontend answer should connect Promises to UI states: loading, success, error, retry, cancellation or stale-result handling, and parallel work with `Promise.all` when requests do not depend on each other.",
    "sourceLinks": [
      {
        "label": "MDN: Promise",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
      },
      {
        "label": "MDN: async function",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
      }
    ],
    "beginnerExplanation": "A Promise represents a value you do not have yet. The work may still be happening. Later, the Promise will either succeed with a value or fail with a reason.\n\nThis is useful because frontend apps are full of waiting: waiting for a network request, waiting for a file to load, waiting for permission, waiting for an animation, or waiting for a database response from an API.\n\nA Promise has three states:\n\n- Pending: the work is still in progress.\n- Fulfilled: the work succeeded and produced a value.\n- Rejected: the work failed and produced an error reason.\n\nHere is a basic Promise chain:\n\n```js\nfetch(\"/api/user\")\n  .then((response) => response.json())\n  .then((user) => {\n    console.log(user.name);\n  })\n  .catch((error) => {\n    console.error(error);\n  });\n```\n\n`async` and `await` do not replace Promises. They give you a more readable way to work with Promises.\n\n```js\nasync function loadUser() {\n  try {\n    const response = await fetch(\"/api/user\");\n    const user = await response.json();\n    console.log(user.name);\n  } catch (error) {\n    console.error(error);\n  }\n}\n```\n\nThe important idea is: `await` pauses the async function until the Promise settles, but it does not freeze the whole browser.",
    "example": "Suppose a user opens a profile page. The app asks the server for profile data.\n\n```js\nasync function getProfile(userId) {\n  const response = await fetch(`/api/users/${userId}`);\n\n  if (!response.ok) {\n    throw new Error(\"Could not load profile\");\n  }\n\n  return response.json();\n}\n```\n\nWhen JavaScript reaches `await fetch(...)`, the async function waits for that Promise. Other browser work can continue. The user can still move the mouse. Other events can still be scheduled. JavaScript is not sitting in a blocking loop.\n\nIf the request succeeds, execution continues and `response` is available. If the Promise rejects, control jumps to the nearest `catch`.\n\n```js\nasync function showProfile(userId) {\n  try {\n    const profile = await getProfile(userId);\n    renderProfile(profile);\n  } catch (error) {\n    renderError(\"We could not load this profile.\");\n  }\n}\n```\n\nThis reads like normal step-by-step code, but it is still Promise-based underneath.",
    "commonMistakes": "A common mistake is forgetting to return or await a Promise. If you call an async function without awaiting it, the surrounding code continues immediately.\n\nAnother mistake is using `try/catch` but only wrapping synchronous code. Errors from awaited Promises are caught by `try/catch`, but errors from Promises you do not await may escape that block.\n\nA third mistake is accidentally running async work one at a time when it could run in parallel.\n\n```js\nconst user = await fetchUser();\nconst teams = await fetchTeams();\n```\n\nIf those two requests do not depend on each other, this may be slower than:\n\n```js\nconst [user, teams] = await Promise.all([fetchUser(), fetchTeams()]);\n```"
  },
  {
    "id": "fe-props-state",
    "track": "Frontend",
    "category": "React",
    "level": "Foundational",
    "question": "What is the difference between props and state in React?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Props and state are both data that affect what a React component renders. The difference is where the data comes from and who is allowed to change it.\n\nProps are data passed into a component by its parent.\n\nState is data a component owns and can update over time.\n\nThink of a component like a function that draws UI. Props are the arguments given to the function. State is the component's own memory between renders.\n\n```jsx\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n```\n\nIn this example, `name` is a prop. `Greeting` does not decide the name. The parent decides it.\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\nIn this example, `count` is state. `Counter` owns it and updates it when the user clicks."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a shopping cart page. The parent component may fetch the user's cart and pass each item into a `CartItem` component.\n\n```jsx\nfunction CartItem({ item }) {\n  return (\n    <li>\n      {item.name} - {item.quantity}\n    </li>\n  );\n}\n```\n\n`CartItem` receives `item` as a prop. It should not secretly rewrite the parent's cart data. It can ask the parent to change something by calling a callback prop.\n\n```jsx\nfunction CartItem({ item, onIncrease }) {\n  return (\n    <li>\n      {item.name}\n      <button onClick={() => onIncrease(item.id)}>+</button>\n    </li>\n  );\n}\n```\n\nNow `CartItem` is still not the owner of the cart. It reports the user's intent upward. The parent, which owns the cart state, decides how to update it.\n\nThis is the heart of React data flow: data usually moves down as props, and events or intentions move up through callback props."
      },
      {
        "title": "Make it practical",
        "body": "A good rule is: put state in the closest component that needs to own it, but lift it up when multiple components need to share it.\n\nIf only a dropdown needs to know whether it is open, local state is fine.\n\n```jsx\nfunction Menu() {\n  const [open, setOpen] = useState(false);\n  return <button onClick={() => setOpen(!open)}>Menu</button>;\n}\n```\n\nIf the open value affects the page header, sidebar, and content, the state probably belongs higher up.\n\nProps are also how you make components reusable. A `Button` component should not hard-code every label and action. It should receive them.\n\n```jsx\nfunction Button({ children, onClick }) {\n  return <button onClick={onClick}>{children}</button>;\n}\n```\n\nThe beginner mistake is thinking state is more powerful, so everything should become state. That creates duplicated truth. If a value can be calculated from props during render, calculate it instead of storing it again."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is mutating props. Props should be treated as read-only. If a child changes an object it received from a parent, the app can become hard to reason about.\n\nAnother mistake is copying props into state without a clear reason.\n\n```jsx\nfunction Profile({ user }) {\n  const [name, setName] = useState(user.name);\n}\n```\n\nThis may look fine, but now there are two places for the name: `user.name` and `name`. If the parent passes a different user later, the local state may not update the way you expect.\n\nA better question is: is this value truly local editable state, or am I just duplicating a prop?"
      }
    ],
    "answer": "Props and state are both data that affect what a React component renders. The difference is where the data comes from and who is allowed to change it.",
    "reasoning": "A good rule is: put state in the closest component that needs to own it, but lift it up when multiple components need to share it.\n\nIf only a dropdown needs to know whether it is open, local state is fine.\n\n```jsx\nfunction Menu() {\n  const [open, setOpen] = useState(false);\n  return <button onClick={() => setOpen(!open)}>Menu</button>;\n}\n```\n\nIf the open value affects the page header, sidebar, and content, the state probably belongs higher up.\n\nProps are also how you make components reusable. A `Button` component should not hard-code every label and action. It should receive them.\n\n```jsx\nfunction Button({ children, onClick }) {\n  return <button onClick={onClick}>{children}</button>;\n}\n```\n\nThe beginner mistake is thinking state is more powerful, so everything should become state. That creates duplicated truth. If a value can be calculated from props during render, calculate it instead of storing it again.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Who passes props into a component?",
      "Who updates state?",
      "Why should props be treated as read-only?",
      "What does \"data down, actions up\" mean?",
      "When should state be lifted to a parent component?"
    ],
    "interviewAnswer": "Props are inputs passed from a parent component. State is data a component owns and can update over time. Props are read-only from the child's perspective, while state changes through state setters and triggers re-rendering.\n\nThe practical React pattern is data down and actions up: parents pass props down, children call callbacks to report user intent, and state lives at the closest common owner. A strong answer should warn against mutating props or copying props into state without a real reason.",
    "sourceLinks": [
      {
        "label": "React: Passing props to a component",
        "url": "https://react.dev/learn/passing-props-to-a-component"
      },
      {
        "label": "React: State as a snapshot",
        "url": "https://react.dev/learn/state-as-a-snapshot"
      }
    ],
    "beginnerExplanation": "Props and state are both data that affect what a React component renders. The difference is where the data comes from and who is allowed to change it.\n\nProps are data passed into a component by its parent.\n\nState is data a component owns and can update over time.\n\nThink of a component like a function that draws UI. Props are the arguments given to the function. State is the component's own memory between renders.\n\n```jsx\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}</h1>;\n}\n```\n\nIn this example, `name` is a prop. `Greeting` does not decide the name. The parent decides it.\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\nIn this example, `count` is state. `Counter` owns it and updates it when the user clicks.",
    "example": "Imagine a shopping cart page. The parent component may fetch the user's cart and pass each item into a `CartItem` component.\n\n```jsx\nfunction CartItem({ item }) {\n  return (\n    <li>\n      {item.name} - {item.quantity}\n    </li>\n  );\n}\n```\n\n`CartItem` receives `item` as a prop. It should not secretly rewrite the parent's cart data. It can ask the parent to change something by calling a callback prop.\n\n```jsx\nfunction CartItem({ item, onIncrease }) {\n  return (\n    <li>\n      {item.name}\n      <button onClick={() => onIncrease(item.id)}>+</button>\n    </li>\n  );\n}\n```\n\nNow `CartItem` is still not the owner of the cart. It reports the user's intent upward. The parent, which owns the cart state, decides how to update it.\n\nThis is the heart of React data flow: data usually moves down as props, and events or intentions move up through callback props.",
    "commonMistakes": "A common mistake is mutating props. Props should be treated as read-only. If a child changes an object it received from a parent, the app can become hard to reason about.\n\nAnother mistake is copying props into state without a clear reason.\n\n```jsx\nfunction Profile({ user }) {\n  const [name, setName] = useState(user.name);\n}\n```\n\nThis may look fine, but now there are two places for the name: `user.name` and `name`. If the parent passes a different user later, the local state may not update the way you expect.\n\nA better question is: is this value truly local editable state, or am I just duplicating a prop?"
  },
  {
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
  },
  {
    "id": "fe-semantic-html",
    "track": "Frontend",
    "category": "Accessibility",
    "level": "Foundational",
    "question": "Why does semantic HTML matter?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Semantic HTML means using HTML elements according to their meaning, not only their appearance.\n\nA `<button>` means an action can be triggered. An `<a>` means navigation to another location. A `<nav>` means a navigation region. A `<main>` means the main content of the page. A `<form>` means a set of controls can be submitted. A heading means a section title.\n\nThis matters because the browser, screen readers, keyboard users, search engines, password managers, form tools, and testing tools all understand meaning from HTML.\n\nIf you use the right element, you get useful behavior for free. A real button can be focused with the keyboard. It responds to Enter and Space. It communicates itself as a button to assistive technology. It can be disabled. It participates in forms.\n\nIf you use a `<div>` and make it look like a button, you have to rebuild all of that behavior yourself.\n\n```html\n<button type=\"button\">Save changes</button>\n```\n\nThis is better than:\n\n```html\n<div class=\"button\">Save changes</div>\n```\n\nThe second version may look correct visually, but it has weak meaning and weak built-in behavior."
      },
      {
        "title": "Walkthrough",
        "body": "The most common semantic decision is button versus link.\n\nUse a link when the user is going somewhere.\n\n```html\n<a href=\"/settings\">Account settings</a>\n```\n\nUse a button when the user is doing something on the current page.\n\n```html\n<button type=\"button\">Open menu</button>\n```\n\nThis distinction helps keyboard and screen reader users understand what will happen. It also helps the browser provide the right default behavior.\n\nHeadings are another major example. Headings create a document outline. A screen reader user can jump between headings to understand the page structure, similar to how a sighted user scans large text.\n\n```html\n<main>\n  <h1>Billing</h1>\n  <section>\n    <h2>Payment method</h2>\n  </section>\n  <section>\n    <h2>Invoices</h2>\n  </section>\n</main>\n```\n\nThis is much more understandable than a page made entirely of styled `<div>` elements."
      },
      {
        "title": "Make it practical",
        "body": "Semantic HTML does not mean ugly HTML. You can style semantic elements however the design requires. The point is to start with the correct meaning, then style it.\n\nFor forms, connect labels to inputs.\n\n```html\n<label for=\"email\">Email address</label>\n<input id=\"email\" name=\"email\" type=\"email\" />\n```\n\nFor page structure, use landmarks.\n\n```html\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>\n```\n\nFor interactive controls, prefer native elements before reaching for ARIA. ARIA can add accessibility information, but it does not automatically add all native keyboard behavior. A custom div with `role=\"button\"` still needs keyboard handling, focus styling, disabled behavior, and careful testing.\n\nThe best practical mindset is: choose the HTML element that already means what the UI does."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using clickable divs everywhere because they are easy to style. That creates keyboard and assistive technology problems.\n\nAnother mistake is using ARIA to cover up incorrect HTML. ARIA is powerful, but native semantic elements are usually more reliable.\n\nA third mistake is choosing elements based on visual style. A link can look like a button. A button can look like an icon. Meaning should come from behavior, not appearance."
      }
    ],
    "answer": "Semantic HTML means using HTML elements according to their meaning, not only their appearance.",
    "reasoning": "Semantic HTML does not mean ugly HTML. You can style semantic elements however the design requires. The point is to start with the correct meaning, then style it.\n\nFor forms, connect labels to inputs.\n\n```html\n<label for=\"email\">Email address</label>\n<input id=\"email\" name=\"email\" type=\"email\" />\n```\n\nFor page structure, use landmarks.\n\n```html\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>\n```\n\nFor interactive controls, prefer native elements before reaching for ARIA. ARIA can add accessibility information, but it does not automatically add all native keyboard behavior. A custom div with `role=\"button\"` still needs keyboard handling, focus styling, disabled behavior, and careful testing.\n\nThe best practical mindset is: choose the HTML element that already means what the UI does.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does semantic HTML mean?",
      "When should you use a link instead of a button?",
      "Why are headings important for navigation?",
      "Why is a native button better than a clickable div?",
      "Why should ARIA not be your first tool for normal controls?"
    ],
    "interviewAnswer": "Semantic HTML means using elements for their real meaning and behavior. It improves accessibility, keyboard support, browser behavior, maintainability, and tooling because the platform understands what the UI is.\n\nI would use links for navigation, buttons for actions, labels for inputs, headings for structure, and landmarks for page regions. A strong answer should mention that native elements give built-in behavior that custom divs and ARIA often require you to recreate manually.",
    "sourceLinks": [
      {
        "label": "MDN: HTML elements reference",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      },
      {
        "label": "WAI-ARIA APG: Read me first",
        "url": "https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/"
      }
    ],
    "beginnerExplanation": "Semantic HTML means using HTML elements according to their meaning, not only their appearance.\n\nA `<button>` means an action can be triggered. An `<a>` means navigation to another location. A `<nav>` means a navigation region. A `<main>` means the main content of the page. A `<form>` means a set of controls can be submitted. A heading means a section title.\n\nThis matters because the browser, screen readers, keyboard users, search engines, password managers, form tools, and testing tools all understand meaning from HTML.\n\nIf you use the right element, you get useful behavior for free. A real button can be focused with the keyboard. It responds to Enter and Space. It communicates itself as a button to assistive technology. It can be disabled. It participates in forms.\n\nIf you use a `<div>` and make it look like a button, you have to rebuild all of that behavior yourself.\n\n```html\n<button type=\"button\">Save changes</button>\n```\n\nThis is better than:\n\n```html\n<div class=\"button\">Save changes</div>\n```\n\nThe second version may look correct visually, but it has weak meaning and weak built-in behavior.",
    "example": "The most common semantic decision is button versus link.\n\nUse a link when the user is going somewhere.\n\n```html\n<a href=\"/settings\">Account settings</a>\n```\n\nUse a button when the user is doing something on the current page.\n\n```html\n<button type=\"button\">Open menu</button>\n```\n\nThis distinction helps keyboard and screen reader users understand what will happen. It also helps the browser provide the right default behavior.\n\nHeadings are another major example. Headings create a document outline. A screen reader user can jump between headings to understand the page structure, similar to how a sighted user scans large text.\n\n```html\n<main>\n  <h1>Billing</h1>\n  <section>\n    <h2>Payment method</h2>\n  </section>\n  <section>\n    <h2>Invoices</h2>\n  </section>\n</main>\n```\n\nThis is much more understandable than a page made entirely of styled `<div>` elements.",
    "commonMistakes": "A common mistake is using clickable divs everywhere because they are easy to style. That creates keyboard and assistive technology problems.\n\nAnother mistake is using ARIA to cover up incorrect HTML. ARIA is powerful, but native semantic elements are usually more reliable.\n\nA third mistake is choosing elements based on visual style. A link can look like a button. A button can look like an icon. Meaning should come from behavior, not appearance."
  },
  {
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
  },
  {
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
  },
  {
    "id": "fe-xss",
    "track": "Frontend",
    "category": "Security",
    "level": "Intermediate",
    "question": "What is cross-site scripting, and how do you prevent it?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Cross-site scripting, usually called XSS, happens when an attacker gets malicious JavaScript to run in another user's browser as if it belonged to your site.\n\nThat is dangerous because JavaScript running on your site can often read page content, make requests as the user, steal tokens if they are exposed, change what the user sees, or trick the user into taking actions.\n\nThe core problem is untrusted input becoming executable code.\n\nImagine a comment feature. A normal user writes:\n\n```txt\nGreat article.\n```\n\nAn attacker writes:\n\n```html\n<script>sendCookiesToAttacker()</script>\n```\n\nIf your app stores that comment and later renders it as real HTML, the browser may execute the attacker's script for every user who views the page.\n\nThe beginner-friendly rule is: user input should be treated as data, not as code."
      },
      {
        "title": "Walkthrough",
        "body": "In React, this is usually safe:\n\n```jsx\nfunction Comment({ text }) {\n  return <p>{text}</p>;\n}\n```\n\nIf `text` contains `<script>alert(\"bad\")</script>`, React escapes it. The browser displays it as text instead of executing it.\n\nThis is risky:\n\n```jsx\nfunction Comment({ html }) {\n  return <div dangerouslySetInnerHTML={{ __html: html }} />;\n}\n```\n\nThe name is deliberately scary because React is telling you: if this string contains unsafe HTML, the browser may treat it as real markup and script-capable content.\n\nXSS can also appear in URLs and attributes. A link that accepts any string from a user can become dangerous if it allows schemes like `javascript:`.\n\n```jsx\n<a href={userProvidedUrl}>Open profile</a>\n```\n\nThat does not mean links are always unsafe. It means URL values should be validated based on what the product expects."
      },
      {
        "title": "Make it practical",
        "body": "Preventing XSS usually requires several layers.\n\nFirst, escape output by default. Frameworks like React help when you render values as text.\n\nSecond, avoid rendering raw HTML from users. If the product truly needs rich text, sanitize it with a trusted sanitizer that removes dangerous tags and attributes. Do not write your own sanitizer casually.\n\nThird, validate URLs and other dangerous fields. If a profile link should be `https`, enforce that.\n\nFourth, use safe APIs. Prefer `textContent` over `innerHTML` when setting text manually.\n\n```js\nelement.textContent = userComment;\n```\n\nFifth, use Content Security Policy as an additional defense. CSP can reduce damage by limiting which scripts the browser is allowed to execute. It should not be your only protection, but it is valuable.\n\nIn a real app, I would also pay attention to where tokens are stored, whether cookies are `HttpOnly`, and whether third-party scripts are allowed to run on sensitive pages."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is thinking XSS is only a backend problem. Frontend code decides how data is rendered, which URLs are trusted, and whether raw HTML is inserted.\n\nAnother mistake is trusting data because it came from your own API. If the API stored user input, partner data, CMS content, or imported data, it can still be untrusted.\n\nA third mistake is assuming React makes XSS impossible. React helps by escaping text by default, but unsafe HTML insertion, unsafe URLs, third-party scripts, and bad token handling can still create risk."
      }
    ],
    "answer": "Cross-site scripting, usually called XSS, happens when an attacker gets malicious JavaScript to run in another user's browser as if it belonged to your site.",
    "reasoning": "Preventing XSS usually requires several layers.\n\nFirst, escape output by default. Frameworks like React help when you render values as text.\n\nSecond, avoid rendering raw HTML from users. If the product truly needs rich text, sanitize it with a trusted sanitizer that removes dangerous tags and attributes. Do not write your own sanitizer casually.\n\nThird, validate URLs and other dangerous fields. If a profile link should be `https`, enforce that.\n\nFourth, use safe APIs. Prefer `textContent` over `innerHTML` when setting text manually.\n\n```js\nelement.textContent = userComment;\n```\n\nFifth, use Content Security Policy as an additional defense. CSP can reduce damage by limiting which scripts the browser is allowed to execute. It should not be your only protection, but it is valuable.\n\nIn a real app, I would also pay attention to where tokens are stored, whether cookies are `HttpOnly`, and whether third-party scripts are allowed to run on sensitive pages.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does XSS let an attacker do?",
      "Why is untrusted input becoming executable code dangerous?",
      "Why is normal React text rendering safer than raw HTML insertion?",
      "When would sanitization be needed?",
      "Why is CSP a defense layer rather than the whole solution?"
    ],
    "interviewAnswer": "XSS is when attacker-controlled input runs as JavaScript in another user's browser under your site's trust. It can steal data, perform actions as the user, or alter the page.\n\nTo prevent it, render untrusted input as text, avoid raw HTML, sanitize rich text when truly needed, validate dangerous values like URLs, use safe DOM APIs, protect tokens, and add Content Security Policy as defense in depth. A strong answer should mention that React escapes text by default but does not remove every XSS risk.",
    "sourceLinks": [
      {
        "label": "OWASP: Cross Site Scripting Prevention Cheat Sheet",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
      },
      {
        "label": "MDN: Content Security Policy",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      }
    ],
    "beginnerExplanation": "Cross-site scripting, usually called XSS, happens when an attacker gets malicious JavaScript to run in another user's browser as if it belonged to your site.\n\nThat is dangerous because JavaScript running on your site can often read page content, make requests as the user, steal tokens if they are exposed, change what the user sees, or trick the user into taking actions.\n\nThe core problem is untrusted input becoming executable code.\n\nImagine a comment feature. A normal user writes:\n\n```txt\nGreat article.\n```\n\nAn attacker writes:\n\n```html\n<script>sendCookiesToAttacker()</script>\n```\n\nIf your app stores that comment and later renders it as real HTML, the browser may execute the attacker's script for every user who views the page.\n\nThe beginner-friendly rule is: user input should be treated as data, not as code.",
    "example": "In React, this is usually safe:\n\n```jsx\nfunction Comment({ text }) {\n  return <p>{text}</p>;\n}\n```\n\nIf `text` contains `<script>alert(\"bad\")</script>`, React escapes it. The browser displays it as text instead of executing it.\n\nThis is risky:\n\n```jsx\nfunction Comment({ html }) {\n  return <div dangerouslySetInnerHTML={{ __html: html }} />;\n}\n```\n\nThe name is deliberately scary because React is telling you: if this string contains unsafe HTML, the browser may treat it as real markup and script-capable content.\n\nXSS can also appear in URLs and attributes. A link that accepts any string from a user can become dangerous if it allows schemes like `javascript:`.\n\n```jsx\n<a href={userProvidedUrl}>Open profile</a>\n```\n\nThat does not mean links are always unsafe. It means URL values should be validated based on what the product expects.",
    "commonMistakes": "A common mistake is thinking XSS is only a backend problem. Frontend code decides how data is rendered, which URLs are trusted, and whether raw HTML is inserted.\n\nAnother mistake is trusting data because it came from your own API. If the API stored user input, partner data, CMS content, or imported data, it can still be untrusted.\n\nA third mistake is assuming React makes XSS impossible. React helps by escaping text by default, but unsafe HTML insertion, unsafe URLs, third-party scripts, and bad token handling can still create risk."
  },
  {
    "id": "tpm-api-integration",
    "track": "TPM",
    "category": "API & Partner Integration",
    "level": "Foundational",
    "question": "How would you manage the launch of a new third-party API integration?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An API integration means your product is depending on another system to complete part of the user journey. That other system might verify identity, move money, send notifications, fetch bank data, screen a customer, create a ticket, or return a price.\n\nFor a beginner, the easy mistake is to think the job is \"call the API and display the response.\" That is only the happy path. A real product launch has to answer a wider question: can customers, internal teams, and business operations trust this integration when it succeeds, fails, slows down, returns unclear data, or behaves differently from the demo?\n\nA Technical Product Manager has to translate the integration into a complete product and operating model. That means knowing what customer promise depends on the API, what data is exchanged, what errors can happen, who owns each failure, what evidence proves readiness, and how the team will know the integration is healthy after launch."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance product adding a payout partner. The happy path is simple:\n\n1. A customer enters recipient details.\n2. Your system sends a payout request to the partner.\n3. The partner accepts the request.\n4. The recipient receives money.\n5. Your app shows success.\n\nThat is not enough for launch.\n\nYou need to know what happens if the partner accepts the request but pays out later. You need to know whether a timeout means the payout failed or only that your system stopped waiting. You need to know what happens if the customer retries. You need to know whether duplicate requests can create duplicate payouts. You need to know how partner statuses map to your product statuses: pending, processing, paid, failed, reversed, rejected, or unknown.\n\nThis is why API contract details matter. You need request fields, response fields, authentication, rate limits, timeout behavior, retries, idempotency, webhooks, error codes, versioning, data retention, support escalation, reconciliation, and monitoring.\n\nIdempotency is a good example. In payments, retrying a request should not accidentally create the same transaction twice. A safe integration needs a way to say, \"this retry is the same intended action, not a brand-new payout.\""
      },
      {
        "title": "Make it practical",
        "body": "I would manage the work in phases.\n\nFirst, define the product workflow. What customer action is this integration supporting? What is the success state? What states can the customer see while the partner is still processing? What does support need to know?\n\nSecond, define the technical contract with engineering and the partner. What data do we send? What do we receive? Which fields are required? What errors are possible? Which retries are safe? Which events arrive through webhooks? What is the source of truth if our system and the partner disagree?\n\nThird, define ownership. Engineering owns implementation, but the launch also needs product decisions, compliance review, security review, partner contacts, operational runbooks, support scripts, analytics, and executive visibility if money movement or customer trust is at stake. A decision framework like DACI helps clarify the driver, final approver, contributors, and people who need to stay informed.\n\nFourth, define launch evidence. Sandbox success is not enough. I would want test cases for happy path, pending states, rejection, timeout, retry, duplicate prevention, partner downtime, webhook delay, reconciliation mismatch, and support visibility.\n\nFifth, roll out with monitoring. Launch to a limited group or corridor if possible. Watch success rate, failure rate, latency, pending duration, duplicate attempts, support contacts, reconciliation exceptions, and partner incident reports."
      },
      {
        "title": "Common mistakes",
        "body": "The biggest mistake is calling the integration ready after one successful sandbox call. That proves the API can work. It does not prove the product can operate.\n\nAnother mistake is leaving failure ownership vague. If the integration fails at night, who sees the alert? Who contacts the partner? Who updates support? Who decides whether to pause the feature? If those answers are not clear, launch risk is still high.\n\nA third mistake is ignoring reconciliation. Especially in financial products, it is not enough for the UI to say success. Your records, partner records, ledger entries, fees, and customer-facing status need to agree or have a clear process for resolving mismatch."
      }
    ],
    "answer": "An API integration means your product is depending on another system to complete part of the user journey. That other system might verify identity, move money, send notifications, fetch bank data, screen a customer, create a ticket, or return a price.",
    "reasoning": "I would manage the work in phases.\n\nFirst, define the product workflow. What customer action is this integration supporting? What is the success state? What states can the customer see while the partner is still processing? What does support need to know?\n\nSecond, define the technical contract with engineering and the partner. What data do we send? What do we receive? Which fields are required? What errors are possible? Which retries are safe? Which events arrive through webhooks? What is the source of truth if our system and the partner disagree?\n\nThird, define ownership. Engineering owns implementation, but the launch also needs product decisions, compliance review, security review, partner contacts, operational runbooks, support scripts, analytics, and executive visibility if money movement or customer trust is at stake. A decision framework like DACI helps clarify the driver, final approver, contributors, and people who need to stay informed.\n\nFourth, define launch evidence. Sandbox success is not enough. I would want test cases for happy path, pending states, rejection, timeout, retry, duplicate prevention, partner downtime, webhook delay, reconciliation mismatch, and support visibility.\n\nFifth, roll out with monitoring. Launch to a limited group or corridor if possible. Watch success rate, failure rate, latency, pending duration, duplicate attempts, support contacts, reconciliation exceptions, and partner incident reports.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the customer workflow this API supports?",
      "What are the normal, pending, failed, and unknown states?",
      "Which retries are safe, and how do you prevent duplicate actions?",
      "Who owns partner escalation, support messaging, and launch sign-off?",
      "What metrics would show the integration is healthy after launch?"
    ],
    "interviewAnswer": "I would manage a third-party API integration by turning it from an engineering task into a complete launch plan. I would define the customer workflow, API contract, data ownership, failure modes, retry and idempotency behavior, webhooks, security and compliance needs, operational runbooks, support process, rollout plan, monitoring, and partner escalation.\n\nA strong TPM answer shows that launch readiness is not one successful API call. It is evidence that the normal path works, exception paths are handled, owners are clear, customers can recover, and the business can monitor and operate the integration in production.",
    "sourceLinks": [
      {
        "label": "Stripe: Idempotent requests",
        "url": "https://docs.stripe.com/api/idempotent_requests"
      },
      {
        "label": "Atlassian: DACI decision framework",
        "url": "https://www.atlassian.com/team-playbook/plays/daci"
      }
    ],
    "beginnerExplanation": "An API integration means your product is depending on another system to complete part of the user journey. That other system might verify identity, move money, send notifications, fetch bank data, screen a customer, create a ticket, or return a price.\n\nFor a beginner, the easy mistake is to think the job is \"call the API and display the response.\" That is only the happy path. A real product launch has to answer a wider question: can customers, internal teams, and business operations trust this integration when it succeeds, fails, slows down, returns unclear data, or behaves differently from the demo?\n\nA Technical Product Manager has to translate the integration into a complete product and operating model. That means knowing what customer promise depends on the API, what data is exchanged, what errors can happen, who owns each failure, what evidence proves readiness, and how the team will know the integration is healthy after launch.",
    "example": "Imagine a remittance product adding a payout partner. The happy path is simple:\n\n1. A customer enters recipient details.\n2. Your system sends a payout request to the partner.\n3. The partner accepts the request.\n4. The recipient receives money.\n5. Your app shows success.\n\nThat is not enough for launch.\n\nYou need to know what happens if the partner accepts the request but pays out later. You need to know whether a timeout means the payout failed or only that your system stopped waiting. You need to know what happens if the customer retries. You need to know whether duplicate requests can create duplicate payouts. You need to know how partner statuses map to your product statuses: pending, processing, paid, failed, reversed, rejected, or unknown.\n\nThis is why API contract details matter. You need request fields, response fields, authentication, rate limits, timeout behavior, retries, idempotency, webhooks, error codes, versioning, data retention, support escalation, reconciliation, and monitoring.\n\nIdempotency is a good example. In payments, retrying a request should not accidentally create the same transaction twice. A safe integration needs a way to say, \"this retry is the same intended action, not a brand-new payout.\"",
    "commonMistakes": "The biggest mistake is calling the integration ready after one successful sandbox call. That proves the API can work. It does not prove the product can operate.\n\nAnother mistake is leaving failure ownership vague. If the integration fails at night, who sees the alert? Who contacts the partner? Who updates support? Who decides whether to pause the feature? If those answers are not clear, launch risk is still high.\n\nA third mistake is ignoring reconciliation. Especially in financial products, it is not enough for the UI to say success. Your records, partner records, ledger entries, fees, and customer-facing status need to agree or have a clear process for resolving mismatch."
  },
  {
    "id": "tpm-compliance-ux",
    "track": "TPM",
    "category": "Compliance & Risk",
    "level": "Intermediate",
    "question": "How would you design a compliant onboarding flow without hurting conversion too much?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Compliance and conversion often feel like enemies, but a strong Technical Product Manager does not treat it that way. The real job is to help legitimate users complete the journey while preventing legal, fraud, security, and operational risk.\n\nFor onboarding, compliance may require collecting identity information, verifying documents, screening against watchlists, understanding user risk, or applying extra checks for certain countries, products, limits, or customer types.\n\nThe beginner mistake is to ask, \"How do we make KYC shorter?\" The better question is, \"What risk are we trying to control, and where can we reduce friction without weakening the control?\"\n\nThat is why a risk-based approach matters. Not every user or action has the same risk. A user signing up to browse a product may not need the same checks as a user moving a large amount of money. A low-risk domestic flow may not need the same review as a high-risk cross-border flow."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance app. A new customer wants to send money.\n\nThe product team wants fewer drop-offs. Compliance wants enough information to satisfy policy and regulation. Engineering wants clear rules. Support wants fewer confused users. Operations wants fewer manual reviews.\n\nA weak TPM frames this as a fight: \"Compliance is blocking growth.\"\n\nA strong TPM frames it as a system:\n\n1. What minimum information is required before the user can start?\n2. What extra checks are required before the user can send money?\n3. Which users need enhanced due diligence?\n4. What happens when verification fails or is pending?\n5. How do we explain the request without scaring the user?\n6. What evidence do we need for audit and monitoring?\n\nThe product answer may be progressive onboarding. Ask for only the information needed at each stage. Let users understand value before asking for sensitive information, but do not allow risky actions before required checks are complete.\n\nHere is a simple risk-tier model:\n\n```txt\nLow risk\n- User can create an account and explore the product.\n- Basic identity data is collected.\n- No money movement or high-risk action is allowed yet.\n\nMedium risk\n- User wants to send money, raise a limit, or use a regulated product.\n- Identity verification is required.\n- Screening, document checks, and basic transaction monitoring apply.\n\nHigh risk\n- User has risk flags: high-risk country, suspicious behavior, unusual volume, sanctions match, business account, or manual-review trigger.\n- Enhanced due diligence may be required.\n- Extra documents, source-of-funds questions, manual review, or lower limits may apply.\n```\n\nThis kind of model helps the TPM avoid two bad extremes: asking every user for everything immediately, or letting risky users complete sensitive actions too early."
      },
      {
        "title": "Make it practical",
        "body": "I would start by mapping the onboarding journey into decision points: account creation, profile completion, identity capture, document verification, risk screening, approval, rejection, manual review, and retry.\n\nThen I would partner with compliance to separate hard requirements from policy choices. Hard requirements cannot be ignored. Policy choices can sometimes be designed with better thresholds, clearer messaging, or risk-based branching.\n\nNext, I would define user states:\n\n- Not started.\n- Information needed.\n- Verification in progress.\n- Approved.\n- More information required.\n- Rejected.\n- Temporarily blocked.\n\nEach state needs product copy, support visibility, analytics, and clear allowed actions.\n\nA beginner-friendly way to design the flow is to treat onboarding as a state machine:\n\n```txt\nAccount created\n-> Profile needed\n-> Identity submitted\n-> Verification pending\n-> Approved\n-> User can send\n\nIdentity submitted\n-> More information needed\n-> User resubmits\n-> Verification pending\n\nIdentity submitted\n-> Manual review\n-> Approved, limited, or rejected\n\nVerification failed\n-> Retry allowed, support escalation, or blocked\n```\n\nNow the team can decide what the user sees, what support sees, what compliance sees, and what actions are allowed at each state.\n\nFor conversion, I would reduce unnecessary friction: prefill known data, explain why information is needed, use inline validation, preserve user input, support mobile camera capture, avoid asking for the same data twice, and route only risky cases to extra review.\n\nFor compliance, I would protect the control: audit trails, data retention rules, access controls, risk flags, vendor result logging, manual-review reasons, and monitoring for approval rate, rejection rate, retry rate, and false positives.\n\nExample user-facing copy matters too. Bad copy says, \"KYC failed.\" A real user does not know what to do with that. Better copy says:\n\n```txt\nWe could not verify your identity from the document you uploaded.\n\nPlease upload a clear photo of an unexpired government ID. Make sure all four corners are visible and the name matches your profile.\n```\n\nThat protects the compliance process while helping a legitimate user recover."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is hiding compliance requirements until the end of the flow. Users feel tricked when they invest effort and then hit an unexplained wall.\n\nAnother mistake is asking every user for the maximum amount of information immediately. That may satisfy a checklist, but it can destroy trust and conversion.\n\nA third mistake is treating vendor approval as the full product state. The product still needs to explain what happened, what the user can do next, what support can see, and how the business handles edge cases."
      }
    ],
    "answer": "Compliance and conversion often feel like enemies, but a strong Technical Product Manager does not treat it that way. The real job is to help legitimate users complete the journey while preventing legal, fraud, security, and operational risk.",
    "reasoning": "I would start by mapping the onboarding journey into decision points: account creation, profile completion, identity capture, document verification, risk screening, approval, rejection, manual review, and retry.\n\nThen I would partner with compliance to separate hard requirements from policy choices. Hard requirements cannot be ignored. Policy choices can sometimes be designed with better thresholds, clearer messaging, or risk-based branching.\n\nNext, I would define user states:\n\n- Not started.\n- Information needed.\n- Verification in progress.\n- Approved.\n- More information required.\n- Rejected.\n- Temporarily blocked.\n\nEach state needs product copy, support visibility, analytics, and clear allowed actions.\n\nA beginner-friendly way to design the flow is to treat onboarding as a state machine:\n\n```txt\nAccount created\n-> Profile needed\n-> Identity submitted\n-> Verification pending\n-> Approved\n-> User can send\n\nIdentity submitted\n-> More information needed\n-> User resubmits\n-> Verification pending\n\nIdentity submitted\n-> Manual review\n-> Approved, limited, or rejected\n\nVerification failed\n-> Retry allowed, support escalation, or blocked\n```\n\nNow the team can decide what the user sees, what support sees, what compliance sees, and what actions are allowed at each state.\n\nFor conversion, I would reduce unnecessary friction: prefill known data, explain why information is needed, use inline validation, preserve user input, support mobile camera capture, avoid asking for the same data twice, and route only risky cases to extra review.\n\nFor compliance, I would protect the control: audit trails, data retention rules, access controls, risk flags, vendor result logging, manual-review reasons, and monitoring for approval rate, rejection rate, retry rate, and false positives.\n\nExample user-facing copy matters too. Bad copy says, \"KYC failed.\" A real user does not know what to do with that. Better copy says:\n\n```txt\nWe could not verify your identity from the document you uploaded.\n\nPlease upload a clear photo of an unexpired government ID. Make sure all four corners are visible and the name matches your profile.\n```\n\nThat protects the compliance process while helping a legitimate user recover.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between reducing friction and weakening a control?",
      "Why is a risk-based onboarding flow useful?",
      "What user states should a compliant onboarding flow include?",
      "Why do support and operations need visibility into verification status?",
      "Which metrics would you monitor after launch?"
    ],
    "interviewAnswer": "I would design the flow around risk-based compliance. First, I would clarify required controls with compliance, then map the user journey and decide which checks happen at which risk level or product action.\n\nTo protect conversion, I would use progressive onboarding, clear copy, prefill, inline validation, mobile-friendly capture, and only add extra friction when risk requires it. To protect compliance, I would define audit trails, decision states, retry handling, manual-review paths, access controls, and monitoring for drop-off, approval rate, false positives, and review backlog.",
    "sourceLinks": [
      {
        "label": "Federal Reserve: Risk-based customer due diligence",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2205.htm"
      },
      {
        "label": "Stripe Docs: Identity",
        "url": "https://docs.stripe.com/identity"
      }
    ],
    "beginnerExplanation": "Compliance and conversion often feel like enemies, but a strong Technical Product Manager does not treat it that way. The real job is to help legitimate users complete the journey while preventing legal, fraud, security, and operational risk.\n\nFor onboarding, compliance may require collecting identity information, verifying documents, screening against watchlists, understanding user risk, or applying extra checks for certain countries, products, limits, or customer types.\n\nThe beginner mistake is to ask, \"How do we make KYC shorter?\" The better question is, \"What risk are we trying to control, and where can we reduce friction without weakening the control?\"\n\nThat is why a risk-based approach matters. Not every user or action has the same risk. A user signing up to browse a product may not need the same checks as a user moving a large amount of money. A low-risk domestic flow may not need the same review as a high-risk cross-border flow.",
    "example": "Imagine a remittance app. A new customer wants to send money.\n\nThe product team wants fewer drop-offs. Compliance wants enough information to satisfy policy and regulation. Engineering wants clear rules. Support wants fewer confused users. Operations wants fewer manual reviews.\n\nA weak TPM frames this as a fight: \"Compliance is blocking growth.\"\n\nA strong TPM frames it as a system:\n\n1. What minimum information is required before the user can start?\n2. What extra checks are required before the user can send money?\n3. Which users need enhanced due diligence?\n4. What happens when verification fails or is pending?\n5. How do we explain the request without scaring the user?\n6. What evidence do we need for audit and monitoring?\n\nThe product answer may be progressive onboarding. Ask for only the information needed at each stage. Let users understand value before asking for sensitive information, but do not allow risky actions before required checks are complete.\n\nHere is a simple risk-tier model:\n\n```txt\nLow risk\n- User can create an account and explore the product.\n- Basic identity data is collected.\n- No money movement or high-risk action is allowed yet.\n\nMedium risk\n- User wants to send money, raise a limit, or use a regulated product.\n- Identity verification is required.\n- Screening, document checks, and basic transaction monitoring apply.\n\nHigh risk\n- User has risk flags: high-risk country, suspicious behavior, unusual volume, sanctions match, business account, or manual-review trigger.\n- Enhanced due diligence may be required.\n- Extra documents, source-of-funds questions, manual review, or lower limits may apply.\n```\n\nThis kind of model helps the TPM avoid two bad extremes: asking every user for everything immediately, or letting risky users complete sensitive actions too early.",
    "commonMistakes": "A common mistake is hiding compliance requirements until the end of the flow. Users feel tricked when they invest effort and then hit an unexplained wall.\n\nAnother mistake is asking every user for the maximum amount of information immediately. That may satisfy a checklist, but it can destroy trust and conversion.\n\nA third mistake is treating vendor approval as the full product state. The product still needs to explain what happened, what the user can do next, what support can see, and how the business handles edge cases."
  },
  {
    "id": "tpm-incident-management",
    "track": "TPM",
    "category": "Operations",
    "level": "Intermediate",
    "question": "How would you handle a production incident affecting customers?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A production incident is when the product is not behaving in a way customers, the business, or internal teams can safely rely on. It might be an outage, broken checkout, delayed payments, incorrect pricing, missing notifications, a data issue, or a third-party partner failure.\n\nFor a Technical Product Manager, the goal is not to personally debug every system. The goal is to help the team protect customers, restore service, coordinate decisions, communicate clearly, and learn after the incident.\n\nA good incident response has two modes.\n\nDuring the incident, focus on containment and recovery. What is broken? Who is affected? How severe is it? What can we do now to reduce harm?\n\nAfter the incident, focus on learning and prevention. Why did it happen? Why did our defenses not catch it earlier? What changes would reduce the chance or impact next time?"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine users cannot complete card payments.\n\nThe first thing to establish is severity and scope. Is it all users or one region? All payment methods or one provider? New payments only or refunds too? Is money being captured but the UI showing failure? Is there risk of duplicate charges?\n\nThen establish roles. Engineering investigates technical cause. Support gathers customer reports. Operations may pause affected workflows. Product helps decide customer impact, acceptable workarounds, communication, and priority tradeoffs. Leadership may need updates if the incident is severe.\n\nThe team needs a single source of truth. That could be an incident channel, status doc, or incident tool. Decisions should be written down: what changed, what was tried, what was rolled back, what customers were told, and what remains unknown.\n\nThe TPM should keep asking customer-centered questions: Which users are affected? What can they still do? Do we need to disable a feature to prevent harm? What message should support use? Is there a regulatory or financial exposure?"
      },
      {
        "title": "Make it practical",
        "body": "I would handle the incident in phases.\n\nFirst, declare and triage. Identify severity, affected flows, start time, customer impact, and current owner.\n\nSecond, stabilize. If a recent deployment caused it, consider rollback. If a partner is down, route traffic elsewhere if possible. If the feature creates customer harm, temporarily disable the risky path.\n\nThird, communicate. Keep internal stakeholders updated at a predictable cadence. Give support clear language. If customers need to know, communicate honestly: what is affected, what they can do, and when the next update will come.\n\nFourth, verify recovery. Do not trust one green log line. Confirm with metrics, customer journey checks, partner status, support volume, and if relevant, reconciliation data.\n\nFifth, run a blameless postmortem. The goal is not to find one person to blame. It is to understand the chain of events and improve the system: monitoring, alerts, test coverage, rollout process, runbooks, dependency resilience, and product fallback states."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing for silence. Teams sometimes avoid declaring incidents because it feels dramatic. That delays coordination.\n\nAnother mistake is communicating certainty too early. It is better to say what is known, what is unknown, and when the next update will come.\n\nA third mistake is calling the incident done when the service recovers but customers are still affected. Payment reversals, stuck orders, missing notifications, or support tickets may continue after the technical fix."
      }
    ],
    "answer": "A production incident is when the product is not behaving in a way customers, the business, or internal teams can safely rely on. It might be an outage, broken checkout, delayed payments, incorrect pricing, missing notifications, a data issue, or a third-party partner failure.",
    "reasoning": "I would handle the incident in phases.\n\nFirst, declare and triage. Identify severity, affected flows, start time, customer impact, and current owner.\n\nSecond, stabilize. If a recent deployment caused it, consider rollback. If a partner is down, route traffic elsewhere if possible. If the feature creates customer harm, temporarily disable the risky path.\n\nThird, communicate. Keep internal stakeholders updated at a predictable cadence. Give support clear language. If customers need to know, communicate honestly: what is affected, what they can do, and when the next update will come.\n\nFourth, verify recovery. Do not trust one green log line. Confirm with metrics, customer journey checks, partner status, support volume, and if relevant, reconciliation data.\n\nFifth, run a blameless postmortem. The goal is not to find one person to blame. It is to understand the chain of events and improve the system: monitoring, alerts, test coverage, rollout process, runbooks, dependency resilience, and product fallback states.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What information do you need to assess incident severity?",
      "Why does the team need a single source of truth during an incident?",
      "What is the difference between technical recovery and customer recovery?",
      "Why are postmortems usually blameless?",
      "What product decisions might a TPM need to make during an incident?"
    ],
    "interviewAnswer": "I would first triage severity, scope, affected users, and customer harm. Then I would help coordinate roles, stabilize the system, communicate clearly, verify recovery, and make sure support and operations know what to do.\n\nAfter recovery, I would lead or contribute to a blameless postmortem that captures timeline, root causes, missed signals, customer impact, and prevention actions. A strong answer shows both technical coordination and customer protection.",
    "sourceLinks": [
      {
        "label": "Atlassian: Incident management",
        "url": "https://www.atlassian.com/incident-management"
      },
      {
        "label": "Google SRE: Postmortem culture",
        "url": "https://sre.google/sre-book/postmortem-culture/"
      }
    ],
    "beginnerExplanation": "A production incident is when the product is not behaving in a way customers, the business, or internal teams can safely rely on. It might be an outage, broken checkout, delayed payments, incorrect pricing, missing notifications, a data issue, or a third-party partner failure.\n\nFor a Technical Product Manager, the goal is not to personally debug every system. The goal is to help the team protect customers, restore service, coordinate decisions, communicate clearly, and learn after the incident.\n\nA good incident response has two modes.\n\nDuring the incident, focus on containment and recovery. What is broken? Who is affected? How severe is it? What can we do now to reduce harm?\n\nAfter the incident, focus on learning and prevention. Why did it happen? Why did our defenses not catch it earlier? What changes would reduce the chance or impact next time?",
    "example": "Imagine users cannot complete card payments.\n\nThe first thing to establish is severity and scope. Is it all users or one region? All payment methods or one provider? New payments only or refunds too? Is money being captured but the UI showing failure? Is there risk of duplicate charges?\n\nThen establish roles. Engineering investigates technical cause. Support gathers customer reports. Operations may pause affected workflows. Product helps decide customer impact, acceptable workarounds, communication, and priority tradeoffs. Leadership may need updates if the incident is severe.\n\nThe team needs a single source of truth. That could be an incident channel, status doc, or incident tool. Decisions should be written down: what changed, what was tried, what was rolled back, what customers were told, and what remains unknown.\n\nThe TPM should keep asking customer-centered questions: Which users are affected? What can they still do? Do we need to disable a feature to prevent harm? What message should support use? Is there a regulatory or financial exposure?",
    "commonMistakes": "A common mistake is optimizing for silence. Teams sometimes avoid declaring incidents because it feels dramatic. That delays coordination.\n\nAnother mistake is communicating certainty too early. It is better to say what is known, what is unknown, and when the next update will come.\n\nA third mistake is calling the incident done when the service recovers but customers are still affected. Payment reversals, stuck orders, missing notifications, or support tickets may continue after the technical fix."
  },
  {
    "id": "tpm-prd",
    "track": "TPM",
    "category": "Product Requirements",
    "level": "Foundational",
    "question": "What makes a strong product requirements document for a technical product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A product requirements document, or PRD, explains what the team is building, why it matters, who it is for, how success will be measured, and what constraints must be respected.\n\nFor a technical product, a PRD is not just a feature wish list. It is a shared decision document. It helps product, engineering, design, data, support, compliance, operations, and leadership understand the same problem before people start building different things in their heads.\n\nA strong PRD answers four simple questions:\n\n1. What problem are we solving?\n2. Who has this problem?\n3. What should change for the user or business when we solve it?\n4. What must be true for the solution to be safe, usable, and shippable?\n\nIf the PRD cannot answer those questions clearly, engineering may still build something, but the team may not build the right thing."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the company wants to add scheduled transfers.\n\nA weak PRD says: \"Users should be able to schedule transfers.\"\n\nThat sounds clear until engineering asks questions. Can users schedule one-time or recurring transfers? Can they edit them? What if the exchange rate changes? What if the user's balance is insufficient? What if compliance blocks the recipient before the scheduled date? What notifications are required? What happens on weekends? What does support see?\n\nA strong PRD does not need to solve every technical detail alone, but it should expose the decisions the team must make.\n\nHere is the difference between a vague requirement and a useful requirement:\n\n```txt\nWeak:\nUsers can schedule transfers.\n\nStronger:\nUsers can create a one-time scheduled transfer for a future date up to 90 days away. Before execution, the system must recheck available balance, recipient eligibility, compliance status, and the current exchange rate. If any check fails, the transfer must not execute, the user must receive a clear notification, and support must be able to see the failure reason.\n```\n\nThe stronger version is not longer because the TPM likes paperwork. It is longer because the product has real behavior when money, timing, compliance, and customer trust are involved.\n\nIt might define:\n\n- Target users: customers who send repeat transfers to family.\n- Problem: they forget transfer dates and repeat the same manual steps each month.\n- Goal: increase repeat-transfer completion and reduce manual effort.\n- Non-goals: business transfers and bulk payroll are out of scope.\n- User experience: create, view, pause, edit, cancel, and receive notifications.\n- Technical constraints: rate refresh, balance checks, compliance checks, retry rules, idempotency, audit logs.\n- Metrics: scheduled transfer creation, completion rate, failure rate, support contacts, repeat usage.\n\nNow the team has something real to discuss."
      },
      {
        "title": "Make it practical",
        "body": "For technical products, I like PRDs that include:\n\nProblem and context: why this matters now.\n\nUsers and use cases: who benefits and what they are trying to do.\n\nGoals and non-goals: what is in scope and what is intentionally not in scope.\n\nRequirements: user-facing behavior, system behavior, admin/support behavior, data requirements, permissions, error states, and edge cases.\n\nSuccess metrics: activation, usage, conversion, reliability, latency, cost, quality, or risk metrics.\n\nDependencies and risks: APIs, vendors, migrations, compliance approvals, design dependencies, operational readiness, and rollout risks.\n\nLaunch plan: flags, beta users, monitoring, support docs, rollback, and post-launch review.\n\nThe best PRDs are readable. They do not hide uncertainty. If something is unknown, mark it as an open question with an owner and date. That is better than pretending every decision is already settled.\n\nA useful mini PRD excerpt might look like this:\n\n```txt\nFeature: Scheduled transfers\n\nProblem:\nRepeat senders forget transfer dates and repeat the same manual setup every month.\n\nGoal:\nIncrease repeat-transfer completion and reduce time to send for repeat senders.\n\nNon-goals:\nBulk payroll, business transfers, and multi-recipient schedules are out of scope.\n\nCore flow:\n1. User chooses an existing recipient.\n2. User chooses amount and future date.\n3. User reviews fees, estimated rate, and execution rules.\n4. User confirms schedule.\n5. System checks eligibility again on execution date.\n6. User receives success or failure notification.\n\nEdge cases:\n- Insufficient balance on execution date.\n- Recipient becomes ineligible.\n- Exchange rate changes beyond allowed threshold.\n- Compliance review is required.\n- User cancels before execution.\n\nSuccess metrics:\n- Scheduled transfer creation rate.\n- Scheduled transfer completion rate.\n- Repeat sender retention.\n- Support contacts per scheduled transfer.\n```\n\nThis gives engineering enough shape to ask good technical questions, while still leaving room for implementation design."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is writing requirements as solutions too early. \"Use vendor X\" may be correct, but the PRD should also explain the user and business reason so alternatives can be evaluated.\n\nAnother mistake is ignoring non-happy paths. Technical products fail in real ways: timeouts, duplicate requests, permission errors, partial success, partner downtime, migration issues, and manual-review queues.\n\nA third mistake is shipping the PRD as a one-time artifact and never updating it. A PRD should evolve as decisions become clearer."
      }
    ],
    "answer": "A product requirements document, or PRD, explains what the team is building, why it matters, who it is for, how success will be measured, and what constraints must be respected.",
    "reasoning": "For technical products, I like PRDs that include:\n\nProblem and context: why this matters now.\n\nUsers and use cases: who benefits and what they are trying to do.\n\nGoals and non-goals: what is in scope and what is intentionally not in scope.\n\nRequirements: user-facing behavior, system behavior, admin/support behavior, data requirements, permissions, error states, and edge cases.\n\nSuccess metrics: activation, usage, conversion, reliability, latency, cost, quality, or risk metrics.\n\nDependencies and risks: APIs, vendors, migrations, compliance approvals, design dependencies, operational readiness, and rollout risks.\n\nLaunch plan: flags, beta users, monitoring, support docs, rollback, and post-launch review.\n\nThe best PRDs are readable. They do not hide uncertainty. If something is unknown, mark it as an open question with an owner and date. That is better than pretending every decision is already settled.\n\nA useful mini PRD excerpt might look like this:\n\n```txt\nFeature: Scheduled transfers\n\nProblem:\nRepeat senders forget transfer dates and repeat the same manual setup every month.\n\nGoal:\nIncrease repeat-transfer completion and reduce time to send for repeat senders.\n\nNon-goals:\nBulk payroll, business transfers, and multi-recipient schedules are out of scope.\n\nCore flow:\n1. User chooses an existing recipient.\n2. User chooses amount and future date.\n3. User reviews fees, estimated rate, and execution rules.\n4. User confirms schedule.\n5. System checks eligibility again on execution date.\n6. User receives success or failure notification.\n\nEdge cases:\n- Insufficient balance on execution date.\n- Recipient becomes ineligible.\n- Exchange rate changes beyond allowed threshold.\n- Compliance review is required.\n- User cancels before execution.\n\nSuccess metrics:\n- Scheduled transfer creation rate.\n- Scheduled transfer completion rate.\n- Repeat sender retention.\n- Support contacts per scheduled transfer.\n```\n\nThis gives engineering enough shape to ask good technical questions, while still leaving room for implementation design.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What problem should a PRD solve for the team?",
      "Why are non-goals useful?",
      "What kinds of edge cases matter in a technical PRD?",
      "Why should success metrics be included before build starts?",
      "How should a PRD handle unknowns?"
    ],
    "interviewAnswer": "A strong technical PRD aligns the team on the problem, user, scope, requirements, constraints, metrics, risks, and launch plan. It should include goals, non-goals, user flows, system behavior, edge cases, data needs, dependencies, open questions, and success measures.\n\nThe best PRDs are not long for the sake of being long. They make decisions clear, expose uncertainty, and prevent teams from building different interpretations of the same feature.",
    "sourceLinks": [
      {
        "label": "ProductPlan: Product requirements document",
        "url": "https://www.productplan.com/glossary/product-requirements-document/"
      },
      {
        "label": "Atlassian: Product requirements template",
        "url": "https://www.atlassian.com/software/confluence/templates/product-requirements"
      }
    ],
    "beginnerExplanation": "A product requirements document, or PRD, explains what the team is building, why it matters, who it is for, how success will be measured, and what constraints must be respected.\n\nFor a technical product, a PRD is not just a feature wish list. It is a shared decision document. It helps product, engineering, design, data, support, compliance, operations, and leadership understand the same problem before people start building different things in their heads.\n\nA strong PRD answers four simple questions:\n\n1. What problem are we solving?\n2. Who has this problem?\n3. What should change for the user or business when we solve it?\n4. What must be true for the solution to be safe, usable, and shippable?\n\nIf the PRD cannot answer those questions clearly, engineering may still build something, but the team may not build the right thing.",
    "example": "Imagine the company wants to add scheduled transfers.\n\nA weak PRD says: \"Users should be able to schedule transfers.\"\n\nThat sounds clear until engineering asks questions. Can users schedule one-time or recurring transfers? Can they edit them? What if the exchange rate changes? What if the user's balance is insufficient? What if compliance blocks the recipient before the scheduled date? What notifications are required? What happens on weekends? What does support see?\n\nA strong PRD does not need to solve every technical detail alone, but it should expose the decisions the team must make.\n\nHere is the difference between a vague requirement and a useful requirement:\n\n```txt\nWeak:\nUsers can schedule transfers.\n\nStronger:\nUsers can create a one-time scheduled transfer for a future date up to 90 days away. Before execution, the system must recheck available balance, recipient eligibility, compliance status, and the current exchange rate. If any check fails, the transfer must not execute, the user must receive a clear notification, and support must be able to see the failure reason.\n```\n\nThe stronger version is not longer because the TPM likes paperwork. It is longer because the product has real behavior when money, timing, compliance, and customer trust are involved.\n\nIt might define:\n\n- Target users: customers who send repeat transfers to family.\n- Problem: they forget transfer dates and repeat the same manual steps each month.\n- Goal: increase repeat-transfer completion and reduce manual effort.\n- Non-goals: business transfers and bulk payroll are out of scope.\n- User experience: create, view, pause, edit, cancel, and receive notifications.\n- Technical constraints: rate refresh, balance checks, compliance checks, retry rules, idempotency, audit logs.\n- Metrics: scheduled transfer creation, completion rate, failure rate, support contacts, repeat usage.\n\nNow the team has something real to discuss.",
    "commonMistakes": "A common mistake is writing requirements as solutions too early. \"Use vendor X\" may be correct, but the PRD should also explain the user and business reason so alternatives can be evaluated.\n\nAnother mistake is ignoring non-happy paths. Technical products fail in real ways: timeouts, duplicate requests, permission errors, partial success, partner downtime, migration issues, and manual-review queues.\n\nA third mistake is shipping the PRD as a one-time artifact and never updating it. A PRD should evolve as decisions become clearer."
  },
  {
    "id": "tpm-prioritization",
    "track": "TPM",
    "category": "Product Strategy",
    "level": "Intermediate",
    "question": "How do you prioritize a roadmap when engineering capacity is limited?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Prioritization is deciding what gets built now, what waits, and what does not get built. It sounds simple until every option is important to someone.\n\nEngineering capacity is always limited. A team may have ten valuable ideas and only enough people to build three. A Technical Product Manager has to help the organization make that tradeoff clearly. The job is not to make everyone happy. The job is to choose the work that best serves the current product goal while making the cost of that choice visible.\n\nGood prioritization is not just a ranking exercise. It requires a clear goal, evidence, effort estimates, risk awareness, dependency mapping, and stakeholder alignment. If the goal is conversion, the best priority may be different from a quarter focused on compliance, reliability, cost reduction, or partner launch commitments."
      },
      {
        "title": "Walkthrough",
        "body": "Suppose a fintech team has limited engineering capacity and four requests:\n\n1. Improve onboarding conversion.\n2. Add a new payout partner.\n3. Fix a reconciliation process that causes manual operations work.\n4. Build a dashboard requested by sales.\n\nYou cannot compare these fairly until you know the strategic goal and constraints. If the company must launch a new corridor by a signed partner deadline, the payout partner may matter most. If operations is spending hours every day fixing reconciliation issues, the reconciliation work may unlock scale. If onboarding drop-off is blocking growth, conversion work may be the best bet. If the sales dashboard closes a major enterprise deal, it may become urgent.\n\nA framework like RICE helps structure the conversation. Reach asks how many users or events the work affects. Impact asks how much it changes the outcome. Confidence asks how much evidence supports the estimate. Effort asks how much team time it will take. The score is useful because it forces clearer thinking.\n\nBut the score is not the decision by itself. Dependencies, deadlines, regulatory obligations, risk, customer commitments, and platform health can override a simple score."
      },
      {
        "title": "Make it practical",
        "body": "I would start by naming the decision goal. Are we optimizing for revenue, activation, risk reduction, reliability, compliance, cost, or delivery of a committed launch? Without that, prioritization becomes a political argument.\n\nThen I would collect the candidate work and describe each item in comparable language: user affected, business value, risk reduced, evidence, dependencies, effort, and cost of delay.\n\nNext, I would use a lightweight scoring model like RICE or a similar method to expose assumptions. The value is not the math alone. The value is forcing the team to ask: how many customers does this affect, how big is the impact, how sure are we, and how expensive is the work?\n\nAfter that, I would handle non-score factors explicitly. Regulatory deadlines, contractual commitments, major incidents, dependencies, and severe technical debt may need special treatment. I would also reserve some capacity for urgent defects and operational risk so the roadmap does not pretend nothing unexpected will happen.\n\nFinally, I would communicate the tradeoff. A good roadmap decision should say what we are doing, why it matters now, what we are not doing, what risk we are accepting, and when we will revisit the decision."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using a framework to avoid judgment. RICE can help, but it cannot understand strategy by itself. A high score does not automatically beat a compliance deadline or a critical dependency.\n\nAnother mistake is prioritizing whoever is loudest. Escalations should be heard, but they still need to be translated into impact, urgency, evidence, and cost.\n\nA third mistake is ignoring technical and operational work because it is less visible. If technical debt slows every roadmap item or operations teams are drowning in manual work, that is product impact."
      }
    ],
    "answer": "Prioritization is deciding what gets built now, what waits, and what does not get built. It sounds simple until every option is important to someone.",
    "reasoning": "I would start by naming the decision goal. Are we optimizing for revenue, activation, risk reduction, reliability, compliance, cost, or delivery of a committed launch? Without that, prioritization becomes a political argument.\n\nThen I would collect the candidate work and describe each item in comparable language: user affected, business value, risk reduced, evidence, dependencies, effort, and cost of delay.\n\nNext, I would use a lightweight scoring model like RICE or a similar method to expose assumptions. The value is not the math alone. The value is forcing the team to ask: how many customers does this affect, how big is the impact, how sure are we, and how expensive is the work?\n\nAfter that, I would handle non-score factors explicitly. Regulatory deadlines, contractual commitments, major incidents, dependencies, and severe technical debt may need special treatment. I would also reserve some capacity for urgent defects and operational risk so the roadmap does not pretend nothing unexpected will happen.\n\nFinally, I would communicate the tradeoff. A good roadmap decision should say what we are doing, why it matters now, what we are not doing, what risk we are accepting, and when we will revisit the decision.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What goal is the roadmap optimizing for this quarter?",
      "What evidence supports the impact estimate?",
      "What is the cost of delay if this waits?",
      "Which dependencies or deadlines override simple scoring?",
      "How would you explain the deferred work to stakeholders?"
    ],
    "interviewAnswer": "I would prioritize by first clarifying the strategic goal and constraints, then comparing candidate work by reach, impact, confidence, effort, risk, dependencies, deadlines, and cost of delay. I might use a framework like RICE to make assumptions visible, but I would not let the score replace judgment.\n\nA strong TPM answer explains the tradeoff clearly: what we are doing now, why it matters, what we are deferring, what risk we are accepting, and when the decision will be reviewed again.",
    "sourceLinks": [
      {
        "label": "Intercom: RICE prioritization",
        "url": "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"
      },
      {
        "label": "ProductPlan: Prioritizing in ProductPlan",
        "url": "https://support.productplan.com/prioritizing-in-productplan-1"
      }
    ],
    "beginnerExplanation": "Prioritization is deciding what gets built now, what waits, and what does not get built. It sounds simple until every option is important to someone.\n\nEngineering capacity is always limited. A team may have ten valuable ideas and only enough people to build three. A Technical Product Manager has to help the organization make that tradeoff clearly. The job is not to make everyone happy. The job is to choose the work that best serves the current product goal while making the cost of that choice visible.\n\nGood prioritization is not just a ranking exercise. It requires a clear goal, evidence, effort estimates, risk awareness, dependency mapping, and stakeholder alignment. If the goal is conversion, the best priority may be different from a quarter focused on compliance, reliability, cost reduction, or partner launch commitments.",
    "example": "Suppose a fintech team has limited engineering capacity and four requests:\n\n1. Improve onboarding conversion.\n2. Add a new payout partner.\n3. Fix a reconciliation process that causes manual operations work.\n4. Build a dashboard requested by sales.\n\nYou cannot compare these fairly until you know the strategic goal and constraints. If the company must launch a new corridor by a signed partner deadline, the payout partner may matter most. If operations is spending hours every day fixing reconciliation issues, the reconciliation work may unlock scale. If onboarding drop-off is blocking growth, conversion work may be the best bet. If the sales dashboard closes a major enterprise deal, it may become urgent.\n\nA framework like RICE helps structure the conversation. Reach asks how many users or events the work affects. Impact asks how much it changes the outcome. Confidence asks how much evidence supports the estimate. Effort asks how much team time it will take. The score is useful because it forces clearer thinking.\n\nBut the score is not the decision by itself. Dependencies, deadlines, regulatory obligations, risk, customer commitments, and platform health can override a simple score.",
    "commonMistakes": "A common mistake is using a framework to avoid judgment. RICE can help, but it cannot understand strategy by itself. A high score does not automatically beat a compliance deadline or a critical dependency.\n\nAnother mistake is prioritizing whoever is loudest. Escalations should be heard, but they still need to be translated into impact, urgency, evidence, and cost.\n\nA third mistake is ignoring technical and operational work because it is less visible. If technical debt slows every roadmap item or operations teams are drowning in manual work, that is product impact."
  },
  {
    "id": "tpm-release-readiness",
    "track": "TPM",
    "category": "Launch",
    "level": "Intermediate",
    "question": "How would you decide whether a feature is ready to launch?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Launch readiness means the team has enough evidence that the feature can be released without creating unacceptable customer, business, technical, operational, or compliance risk.\n\nIt does not mean the feature is perfect. It means the team understands what is being released, who will see it, what could go wrong, how success will be measured, and how to respond if something breaks.\n\nFor a TPM, launch readiness is a cross-functional decision. Engineering may say the code is complete. Design may say the experience is approved. Compliance may require sign-off. Support may need scripts. Marketing may need timing. Data may need dashboards. Operations may need a runbook.\n\nThe job is to bring those pieces together into a clear go or no-go decision."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine launching a new identity verification flow.\n\nCode complete is not enough. You need to know:\n\n- Does it work on supported devices and browsers?\n- Are the error states understandable?\n- Does the vendor handle expected traffic?\n- Are privacy and compliance requirements approved?\n- Can support see verification status?\n- Are analytics events firing?\n- Do we know the expected approval and failure rates?\n- Can we roll back or disable the flow?\n- What happens to users already in progress if we roll back?\n\nReadiness is about confidence across the whole system, not only the pull request.\n\nHere is what a practical readiness view can look like:\n\n```txt\nArea: Product\nOwner: PM\nEvidence: success metrics, launch scope, non-goals, customer states\nGo/no-go question: Do we know what success and harm look like?\n\nArea: Engineering\nOwner: Engineering lead\nEvidence: tests, monitoring, logs, feature flag, rollback plan\nGo/no-go question: Can we detect and recover if this behaves badly?\n\nArea: Compliance and risk\nOwner: Compliance lead\nEvidence: approval, audit fields, data retention, review workflow\nGo/no-go question: Are required controls present before risky actions?\n\nArea: Support and operations\nOwner: Ops or support lead\nEvidence: runbook, macros, admin visibility, escalation path\nGo/no-go question: Can the company operate the feature on day one?\n```\n\nThis turns \"are we ready?\" from a vague meeting into evidence the team can inspect."
      },
      {
        "title": "Make it practical",
        "body": "I would create a launch checklist with owners.\n\nProduct readiness: requirements complete, non-goals clear, user-facing states approved, success metrics defined, experiment or rollout plan agreed.\n\nEngineering readiness: tests pass, known bugs triaged, monitoring added, logs useful, feature flag ready, rollback plan known, dependencies checked.\n\nDesign readiness: final UX reviewed across key states, copy approved, accessibility considered, mobile and desktop behavior checked.\n\nOperational readiness: support docs, escalation path, admin tools, runbook, manual-review process, and incident contacts.\n\nCompliance and risk readiness: privacy, security, data retention, audit logs, terms, and regulatory approvals if needed.\n\nData readiness: dashboards, event definitions, baseline metrics, alert thresholds, and post-launch review date.\n\nThen I would choose the release shape. A risky feature should not launch to everyone at once if it can be phased. Use internal testing, beta users, percentage rollout, geography-based rollout, feature flags, or limited transaction limits.\n\nA go/no-go decision should be short and explicit:\n\n```txt\nDecision: Go with limited rollout.\n\nScope: 5% of eligible users in one corridor.\nWhy: Happy path, rejection path, and manual review path are tested. Support runbook is ready. Compliance approval is complete.\nKnown risk: Vendor webhook delay could leave users in pending state longer than expected.\nMitigation: Alert if pending exceeds 15 minutes. Support can see vendor status. Rollback disables new submissions without hiding existing cases.\nReview: Meet after 24 hours or after first 500 attempts, whichever comes first.\n```\n\nThat answer sounds senior because it does not pretend launch is risk-free. It shows the risk and the control."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating readiness as a meeting where everyone gives vague approval. Readiness should be evidence-based.\n\nAnother mistake is forgetting rollback. Some features are easy to turn off. Others involve migrations, customer states, partner calls, or money movement. Rollback must be designed before launch.\n\nA third mistake is not defining success until after launch. If you do not know what healthy looks like, you will not know whether launch is going well."
      }
    ],
    "answer": "Launch readiness means the team has enough evidence that the feature can be released without creating unacceptable customer, business, technical, operational, or compliance risk.",
    "reasoning": "I would create a launch checklist with owners.\n\nProduct readiness: requirements complete, non-goals clear, user-facing states approved, success metrics defined, experiment or rollout plan agreed.\n\nEngineering readiness: tests pass, known bugs triaged, monitoring added, logs useful, feature flag ready, rollback plan known, dependencies checked.\n\nDesign readiness: final UX reviewed across key states, copy approved, accessibility considered, mobile and desktop behavior checked.\n\nOperational readiness: support docs, escalation path, admin tools, runbook, manual-review process, and incident contacts.\n\nCompliance and risk readiness: privacy, security, data retention, audit logs, terms, and regulatory approvals if needed.\n\nData readiness: dashboards, event definitions, baseline metrics, alert thresholds, and post-launch review date.\n\nThen I would choose the release shape. A risky feature should not launch to everyone at once if it can be phased. Use internal testing, beta users, percentage rollout, geography-based rollout, feature flags, or limited transaction limits.\n\nA go/no-go decision should be short and explicit:\n\n```txt\nDecision: Go with limited rollout.\n\nScope: 5% of eligible users in one corridor.\nWhy: Happy path, rejection path, and manual review path are tested. Support runbook is ready. Compliance approval is complete.\nKnown risk: Vendor webhook delay could leave users in pending state longer than expected.\nMitigation: Alert if pending exceeds 15 minutes. Support can see vendor status. Rollback disables new submissions without hiding existing cases.\nReview: Meet after 24 hours or after first 500 attempts, whichever comes first.\n```\n\nThat answer sounds senior because it does not pretend launch is risk-free. It shows the risk and the control.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is code complete not the same as launch ready?",
      "What areas should a launch checklist cover?",
      "Why are feature flags useful for risky releases?",
      "What makes rollback complicated?",
      "What metrics would you watch immediately after launch?"
    ],
    "interviewAnswer": "I would decide launch readiness by checking product, engineering, design, compliance, operations, support, and data readiness. The feature should have clear requirements, tested core paths, acceptable known risks, monitoring, support materials, rollout plan, rollback plan, and success metrics.\n\nFor higher-risk launches, I would use feature flags, limited rollout, beta groups, or geography-based release. A strong answer shows that launch is an operating decision, not just a code-complete milestone.",
    "sourceLinks": [
      {
        "label": "Atlassian: Continuous delivery",
        "url": "https://www.atlassian.com/continuous-delivery"
      },
      {
        "label": "LaunchDarkly: Feature flag best practices",
        "url": "https://launchdarkly.com/blog/feature-flag-best-practices/"
      }
    ],
    "beginnerExplanation": "Launch readiness means the team has enough evidence that the feature can be released without creating unacceptable customer, business, technical, operational, or compliance risk.\n\nIt does not mean the feature is perfect. It means the team understands what is being released, who will see it, what could go wrong, how success will be measured, and how to respond if something breaks.\n\nFor a TPM, launch readiness is a cross-functional decision. Engineering may say the code is complete. Design may say the experience is approved. Compliance may require sign-off. Support may need scripts. Marketing may need timing. Data may need dashboards. Operations may need a runbook.\n\nThe job is to bring those pieces together into a clear go or no-go decision.",
    "example": "Imagine launching a new identity verification flow.\n\nCode complete is not enough. You need to know:\n\n- Does it work on supported devices and browsers?\n- Are the error states understandable?\n- Does the vendor handle expected traffic?\n- Are privacy and compliance requirements approved?\n- Can support see verification status?\n- Are analytics events firing?\n- Do we know the expected approval and failure rates?\n- Can we roll back or disable the flow?\n- What happens to users already in progress if we roll back?\n\nReadiness is about confidence across the whole system, not only the pull request.\n\nHere is what a practical readiness view can look like:\n\n```txt\nArea: Product\nOwner: PM\nEvidence: success metrics, launch scope, non-goals, customer states\nGo/no-go question: Do we know what success and harm look like?\n\nArea: Engineering\nOwner: Engineering lead\nEvidence: tests, monitoring, logs, feature flag, rollback plan\nGo/no-go question: Can we detect and recover if this behaves badly?\n\nArea: Compliance and risk\nOwner: Compliance lead\nEvidence: approval, audit fields, data retention, review workflow\nGo/no-go question: Are required controls present before risky actions?\n\nArea: Support and operations\nOwner: Ops or support lead\nEvidence: runbook, macros, admin visibility, escalation path\nGo/no-go question: Can the company operate the feature on day one?\n```\n\nThis turns \"are we ready?\" from a vague meeting into evidence the team can inspect.",
    "commonMistakes": "A common mistake is treating readiness as a meeting where everyone gives vague approval. Readiness should be evidence-based.\n\nAnother mistake is forgetting rollback. Some features are easy to turn off. Others involve migrations, customer states, partner calls, or money movement. Rollback must be designed before launch.\n\nA third mistake is not defining success until after launch. If you do not know what healthy looks like, you will not know whether launch is going well."
  },
  {
    "id": "tpm-stakeholder-alignment",
    "track": "TPM",
    "category": "Stakeholder Management",
    "level": "Intermediate",
    "question": "How would you handle conflicting stakeholder priorities?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.\n\nThe TPM's job is not to make everyone equally happy. The job is to make the tradeoff explicit, connect it to product and business goals, and help the right decision-maker choose with the best available information.\n\nThe beginner mistake is to treat stakeholder management as persuasion only. A stronger TPM treats it as decision design. Who decides? What evidence matters? What are the options? What are the consequences? What are we optimizing for right now?"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a team building a new onboarding flow.\n\nSales wants it faster because prospects abandon setup. Compliance wants additional verification. Engineering wants to fix the architecture first because the current flow is hard to change. Support wants clearer status messages because users keep opening tickets.\n\nIf you ask each group what they want, you get a list of demands. If you ask what risk or outcome they care about, you get something more useful.\n\nSales cares about activation and revenue.\n\nCompliance cares about regulatory exposure and fraud.\n\nEngineering cares about delivery risk and maintainability.\n\nSupport cares about customer confusion and operational load.\n\nNow the TPM can frame options:\n\n1. Launch the faster flow with current controls.\n2. Add all compliance checks before launch.\n3. Launch a progressive flow with required checks before risky actions.\n4. Delay launch to refactor first.\n\nEach option has tradeoffs. The conversation becomes about choosing deliberately, not arguing forever."
      },
      {
        "title": "Make it practical",
        "body": "I would start by writing the decision clearly. For example: \"Should we launch progressive onboarding in Q2 with risk-based verification, or delay until the full identity platform refactor is complete?\"\n\nThen I would gather evidence:\n\n- User impact and drop-off data.\n- Revenue or strategic value.\n- Compliance requirements and risk tolerance.\n- Engineering effort and reliability risk.\n- Support and operations impact.\n- Dependencies and timing constraints.\n\nNext, I would define decision roles. A framework like DACI helps: driver, approver, contributors, informed. The TPM may drive the decision, but the approver may be a product leader, compliance owner, or executive depending on the risk.\n\nThen I would present options with consequences. Avoid hiding tradeoffs. A good decision memo says what we gain, what we give up, what risk remains, and how we will monitor it.\n\nAfter the decision, I would communicate it clearly. Stakeholders may disagree, but they should understand why the decision was made and what would cause us to revisit it."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is trying to solve conflict through more meetings without clarifying the decision. Meetings help only when the decision and decision-maker are clear.\n\nAnother mistake is using volume as priority. The loudest stakeholder is not automatically the most important stakeholder.\n\nA third mistake is pretending there is no tradeoff. Mature product work often means choosing between good things under constraints."
      }
    ],
    "answer": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.",
    "reasoning": "I would start by writing the decision clearly. For example: \"Should we launch progressive onboarding in Q2 with risk-based verification, or delay until the full identity platform refactor is complete?\"\n\nThen I would gather evidence:\n\n- User impact and drop-off data.\n- Revenue or strategic value.\n- Compliance requirements and risk tolerance.\n- Engineering effort and reliability risk.\n- Support and operations impact.\n- Dependencies and timing constraints.\n\nNext, I would define decision roles. A framework like DACI helps: driver, approver, contributors, informed. The TPM may drive the decision, but the approver may be a product leader, compliance owner, or executive depending on the risk.\n\nThen I would present options with consequences. Avoid hiding tradeoffs. A good decision memo says what we gain, what we give up, what risk remains, and how we will monitor it.\n\nAfter the decision, I would communicate it clearly. Stakeholders may disagree, but they should understand why the decision was made and what would cause us to revisit it.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is stakeholder conflict normal in product work?",
      "What is the difference between demands and underlying outcomes?",
      "Why should decision roles be explicit?",
      "What should an options memo include?",
      "How do you keep alignment after a decision is made?"
    ],
    "interviewAnswer": "I would clarify the actual decision, identify the outcome each stakeholder is optimizing for, gather evidence, define decision roles, and present options with tradeoffs. Then I would help the right approver make a decision and communicate the rationale.\n\nA strong answer shows that alignment is not about pleasing everyone. It is about making tradeoffs visible, tying them to goals, and moving the team forward with a clear decision.",
    "sourceLinks": [
      {
        "label": "Atlassian Team Playbook: DACI",
        "url": "https://www.atlassian.com/team-playbook/plays/daci"
      },
      {
        "label": "Atlassian Team Playbook: Trade-offs",
        "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
      }
    ],
    "beginnerExplanation": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.\n\nThe TPM's job is not to make everyone equally happy. The job is to make the tradeoff explicit, connect it to product and business goals, and help the right decision-maker choose with the best available information.\n\nThe beginner mistake is to treat stakeholder management as persuasion only. A stronger TPM treats it as decision design. Who decides? What evidence matters? What are the options? What are the consequences? What are we optimizing for right now?",
    "example": "Imagine a team building a new onboarding flow.\n\nSales wants it faster because prospects abandon setup. Compliance wants additional verification. Engineering wants to fix the architecture first because the current flow is hard to change. Support wants clearer status messages because users keep opening tickets.\n\nIf you ask each group what they want, you get a list of demands. If you ask what risk or outcome they care about, you get something more useful.\n\nSales cares about activation and revenue.\n\nCompliance cares about regulatory exposure and fraud.\n\nEngineering cares about delivery risk and maintainability.\n\nSupport cares about customer confusion and operational load.\n\nNow the TPM can frame options:\n\n1. Launch the faster flow with current controls.\n2. Add all compliance checks before launch.\n3. Launch a progressive flow with required checks before risky actions.\n4. Delay launch to refactor first.\n\nEach option has tradeoffs. The conversation becomes about choosing deliberately, not arguing forever.",
    "commonMistakes": "A common mistake is trying to solve conflict through more meetings without clarifying the decision. Meetings help only when the decision and decision-maker are clear.\n\nAnother mistake is using volume as priority. The loudest stakeholder is not automatically the most important stakeholder.\n\nA third mistake is pretending there is no tradeoff. Mature product work often means choosing between good things under constraints."
  },
  {
    "id": "tpm-success-metrics",
    "track": "TPM",
    "category": "Metrics",
    "level": "Foundational",
    "question": "How would you choose success metrics for a product feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Success metrics tell the team whether a feature is actually working. Without metrics, teams often celebrate shipping rather than impact.\n\nThe beginner mistake is choosing metrics that are easy to count but do not prove value. Page views, clicks, and signups can be useful, but they may not show whether users got the benefit the product promised.\n\nA better approach starts with the product goal.\n\nWhat user behavior should improve?\n\nWhat business outcome should improve?\n\nWhat risks should not get worse?\n\nFor example, if a feature helps users send repeat transfers faster, success might include repeat-transfer completion rate, time to complete, successful scheduled transfers, and lower support contacts. It should not only be \"number of people who clicked the new button.\""
      },
      {
        "title": "Walkthrough",
        "body": "Imagine launching a saved recipients feature in a money transfer app.\n\nThe user problem is that people repeatedly enter the same recipient details. The business goal is to increase repeat transfer completion and reduce friction.\n\nGood success metrics might include:\n\n- Percentage of repeat transfers using saved recipients.\n- Repeat transfer completion rate.\n- Average time to start and complete a repeat transfer.\n- Error rate from incorrect recipient details.\n- Support tickets about recipient entry.\n\nYou also need guardrail metrics. A guardrail metric catches harm while the main metric improves. For saved recipients, guardrails might include failed transfers, fraud alerts, mistaken recipient reports, or account takeover signals.\n\nThe feature is not successful if completion goes up because the app made it too easy to send money to the wrong person."
      },
      {
        "title": "Make it practical",
        "body": "I would choose metrics in layers.\n\nFirst, define the goal in plain language. \"Help users complete repeat transfers with less effort.\"\n\nSecond, choose an activation metric. Are users discovering and setting up the feature?\n\nThird, choose a usage metric. Are users actually using it in the intended flow?\n\nFourth, choose an outcome metric. Is the user or business result improving?\n\nFifth, choose quality and guardrail metrics. Did errors, complaints, risk, latency, or cost get worse?\n\nSixth, decide how to measure. What events do we need? What properties? What baseline period? What cohort? What time window? What dashboard? What review date?\n\nFor interview answers, it helps to avoid giving one lonely metric. A real product needs a small set: one primary success metric, supporting diagnostics, and guardrails."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is calling an output a success metric. \"Feature launched\" is a delivery milestone, not proof of user value.\n\nAnother mistake is using vanity metrics. A click can be curiosity, confusion, or success. You need context.\n\nA third mistake is choosing too many metrics. If everything is important, the team may not know what to optimize."
      }
    ],
    "answer": "Success metrics tell the team whether a feature is actually working. Without metrics, teams often celebrate shipping rather than impact.",
    "reasoning": "I would choose metrics in layers.\n\nFirst, define the goal in plain language. \"Help users complete repeat transfers with less effort.\"\n\nSecond, choose an activation metric. Are users discovering and setting up the feature?\n\nThird, choose a usage metric. Are users actually using it in the intended flow?\n\nFourth, choose an outcome metric. Is the user or business result improving?\n\nFifth, choose quality and guardrail metrics. Did errors, complaints, risk, latency, or cost get worse?\n\nSixth, decide how to measure. What events do we need? What properties? What baseline period? What cohort? What time window? What dashboard? What review date?\n\nFor interview answers, it helps to avoid giving one lonely metric. A real product needs a small set: one primary success metric, supporting diagnostics, and guardrails.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is shipping not the same as success?",
      "What is a guardrail metric?",
      "Why might clicks be misleading?",
      "What is the difference between activation, usage, and outcome?",
      "What instrumentation questions should be answered before launch?"
    ],
    "interviewAnswer": "I would start with the product goal, then define a primary success metric that reflects user or business value. I would add supporting metrics to understand the funnel and guardrail metrics to catch harm.\n\nFor example, for saved recipients, I might track setup rate, repeat-transfer usage, completion rate, time to complete, failed transfers, and support tickets. A strong answer explains why each metric maps to the feature's intent.",
    "sourceLinks": [
      {
        "label": "Amplitude: North Star metric",
        "url": "https://amplitude.com/blog/north-star-metric"
      },
      {
        "label": "Atlassian Team Playbook: Goals, signals, measures",
        "url": "https://www.atlassian.com/team-playbook/plays/goals-signals-measures"
      }
    ],
    "beginnerExplanation": "Success metrics tell the team whether a feature is actually working. Without metrics, teams often celebrate shipping rather than impact.\n\nThe beginner mistake is choosing metrics that are easy to count but do not prove value. Page views, clicks, and signups can be useful, but they may not show whether users got the benefit the product promised.\n\nA better approach starts with the product goal.\n\nWhat user behavior should improve?\n\nWhat business outcome should improve?\n\nWhat risks should not get worse?\n\nFor example, if a feature helps users send repeat transfers faster, success might include repeat-transfer completion rate, time to complete, successful scheduled transfers, and lower support contacts. It should not only be \"number of people who clicked the new button.\"",
    "example": "Imagine launching a saved recipients feature in a money transfer app.\n\nThe user problem is that people repeatedly enter the same recipient details. The business goal is to increase repeat transfer completion and reduce friction.\n\nGood success metrics might include:\n\n- Percentage of repeat transfers using saved recipients.\n- Repeat transfer completion rate.\n- Average time to start and complete a repeat transfer.\n- Error rate from incorrect recipient details.\n- Support tickets about recipient entry.\n\nYou also need guardrail metrics. A guardrail metric catches harm while the main metric improves. For saved recipients, guardrails might include failed transfers, fraud alerts, mistaken recipient reports, or account takeover signals.\n\nThe feature is not successful if completion goes up because the app made it too easy to send money to the wrong person.",
    "commonMistakes": "A common mistake is calling an output a success metric. \"Feature launched\" is a delivery milestone, not proof of user value.\n\nAnother mistake is using vanity metrics. A click can be curiosity, confusion, or success. You need context.\n\nA third mistake is choosing too many metrics. If everything is important, the team may not know what to optimize."
  },
  {
    "id": "tpm-technical-debt",
    "track": "TPM",
    "category": "Technical Strategy",
    "level": "Intermediate",
    "question": "How would you decide whether to prioritize technical debt?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Technical debt is the future cost created by technical choices that make the system harder to change, operate, understand, or trust. Sometimes debt is taken deliberately to learn quickly. Sometimes it appears accidentally through rushed work, old assumptions, missing tests, weak architecture, or repeated patches.\n\nFor a TPM, the key is to translate technical debt into product and business impact.\n\nEngineering may say, \"This service is hard to maintain.\" That matters, but stakeholders may not know how to compare it against customer-facing work. The TPM can help express the debt as delivery delay, incident risk, support cost, performance issues, onboarding difficulty, compliance risk, or inability to launch future features.\n\nThe question is not \"Should we ever pay down debt?\" Of course. The real question is \"Which debt matters now, and how much should we invest?\""
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the team wants to launch a new payout method, but the payments code has grown messy. Every change creates regressions. Engineers are afraid to touch it. Testing is manual. Status mapping is duplicated across services.\n\nOne option is to build the new payout method on top of the messy system. That might be faster this month but riskier later.\n\nAnother option is to refactor first. That may delay the feature but reduce future delivery risk.\n\nA TPM should make the tradeoff visible:\n\n- How many planned features depend on this area?\n- How often does this area cause incidents or bugs?\n- How much engineering time is lost to rework?\n- What customer or compliance risk exists?\n- Can the debt be reduced incrementally?\n- What is the cost of delaying the user-facing feature?\n\nNow the decision becomes grounded instead of emotional."
      },
      {
        "title": "Make it practical",
        "body": "I would prioritize technical debt when it blocks important product goals, creates repeated incidents, slows delivery significantly, raises compliance or security risk, increases operational load, or makes future changes unsafe.\n\nI would not automatically pause all product work for a vague cleanup project. I would ask engineering to frame the debt in terms of risk and outcomes. For example: \"Refactor payout status handling so new partners can be added in two weeks instead of six, and reduce reconciliation bugs.\"\n\nGood debt work often has a clear scope:\n\n1. What pain are we reducing?\n2. What product work becomes easier afterward?\n3. What risk decreases?\n4. How will we know the investment worked?\n5. Can it be shipped incrementally?\n\nSometimes the right plan is to allocate a percentage of capacity to debt. Sometimes it is to tie debt work to a feature. Sometimes it is to stop and fix a dangerous foundation before continuing."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating all debt as equal. Some debt is annoying but harmless. Some debt blocks strategy or creates real risk.\n\nAnother mistake is making debt invisible in planning. If the roadmap assumes full feature capacity while the team is constantly paying hidden maintenance costs, the plan is fake.\n\nA third mistake is framing debt as engineering preference instead of business impact. The TPM should help explain why the investment matters in outcomes stakeholders understand."
      }
    ],
    "answer": "Technical debt is the future cost created by technical choices that make the system harder to change, operate, understand, or trust. Sometimes debt is taken deliberately to learn quickly. Sometimes it appears accidentally through rushed work, old assumptions, missing tests, weak architecture, or repeated patches.",
    "reasoning": "I would prioritize technical debt when it blocks important product goals, creates repeated incidents, slows delivery significantly, raises compliance or security risk, increases operational load, or makes future changes unsafe.\n\nI would not automatically pause all product work for a vague cleanup project. I would ask engineering to frame the debt in terms of risk and outcomes. For example: \"Refactor payout status handling so new partners can be added in two weeks instead of six, and reduce reconciliation bugs.\"\n\nGood debt work often has a clear scope:\n\n1. What pain are we reducing?\n2. What product work becomes easier afterward?\n3. What risk decreases?\n4. How will we know the investment worked?\n5. Can it be shipped incrementally?\n\nSometimes the right plan is to allocate a percentage of capacity to debt. Sometimes it is to tie debt work to a feature. Sometimes it is to stop and fix a dangerous foundation before continuing.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What makes technical debt different from ordinary imperfect code?",
      "How can a TPM translate debt into business impact?",
      "When is it worth prioritizing debt over new features?",
      "Why is vague cleanup hard to justify?",
      "What metrics might show that debt work helped?"
    ],
    "interviewAnswer": "I would prioritize technical debt when it creates meaningful product, reliability, security, compliance, operational, or delivery risk. I would ask engineering to explain the debt in terms of impact: incidents, slower roadmap delivery, manual work, risk exposure, or blocked future features.\n\nThen I would compare options: fix now, fix incrementally alongside feature work, allocate capacity, or defer with explicit risk. A strong answer treats debt as an investment decision, not an engineering preference.",
    "sourceLinks": [
      {
        "label": "Martin Fowler: Technical Debt",
        "url": "https://martinfowler.com/bliki/TechnicalDebt.html"
      },
      {
        "label": "Atlassian: Technical debt",
        "url": "https://www.atlassian.com/agile/software-development/technical-debt"
      }
    ],
    "beginnerExplanation": "Technical debt is the future cost created by technical choices that make the system harder to change, operate, understand, or trust. Sometimes debt is taken deliberately to learn quickly. Sometimes it appears accidentally through rushed work, old assumptions, missing tests, weak architecture, or repeated patches.\n\nFor a TPM, the key is to translate technical debt into product and business impact.\n\nEngineering may say, \"This service is hard to maintain.\" That matters, but stakeholders may not know how to compare it against customer-facing work. The TPM can help express the debt as delivery delay, incident risk, support cost, performance issues, onboarding difficulty, compliance risk, or inability to launch future features.\n\nThe question is not \"Should we ever pay down debt?\" Of course. The real question is \"Which debt matters now, and how much should we invest?\"",
    "example": "Imagine the team wants to launch a new payout method, but the payments code has grown messy. Every change creates regressions. Engineers are afraid to touch it. Testing is manual. Status mapping is duplicated across services.\n\nOne option is to build the new payout method on top of the messy system. That might be faster this month but riskier later.\n\nAnother option is to refactor first. That may delay the feature but reduce future delivery risk.\n\nA TPM should make the tradeoff visible:\n\n- How many planned features depend on this area?\n- How often does this area cause incidents or bugs?\n- How much engineering time is lost to rework?\n- What customer or compliance risk exists?\n- Can the debt be reduced incrementally?\n- What is the cost of delaying the user-facing feature?\n\nNow the decision becomes grounded instead of emotional.",
    "commonMistakes": "A common mistake is treating all debt as equal. Some debt is annoying but harmless. Some debt blocks strategy or creates real risk.\n\nAnother mistake is making debt invisible in planning. If the roadmap assumes full feature capacity while the team is constantly paying hidden maintenance costs, the plan is fake.\n\nA third mistake is framing debt as engineering preference instead of business impact. The TPM should help explain why the investment matters in outcomes stakeholders understand."
  },
  {
    "id": "tpm-technical-tradeoffs",
    "track": "TPM",
    "category": "Technical Strategy",
    "level": "Intermediate",
    "question": "How would you explain a technical tradeoff to non-technical stakeholders?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.\n\nNon-technical stakeholders do not need every implementation detail, but they do need to understand the consequences of the decision.\n\nThe TPM's job is to translate technical options into user impact, business impact, risk, cost, timing, and reversibility.\n\nDo not say, \"Engineering wants to use Kafka instead of webhooks.\" That may be meaningful to engineers but not to everyone else.\n\nSay, \"Option A is faster to launch but may struggle when volume grows. Option B takes three extra weeks but gives us better reliability and easier partner onboarding later.\""
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a team deciding whether to build a custom fraud rules engine or use a vendor.\n\nThe technical details may involve APIs, data models, latency, alerting, explainability, integrations, and long-term platform architecture. But the stakeholder decision might be:\n\n- Do we need to launch in six weeks?\n- How much fraud risk can we tolerate?\n- Do we need custom rules for our market?\n- What will compliance need to audit?\n- What happens if the vendor is wrong?\n- What is the cost now versus later?\n\nA clear tradeoff explanation compares options in plain language.\n\nOption 1: Use vendor rules first. Faster launch, lower engineering effort, proven baseline, but less customization and vendor dependency.\n\nOption 2: Build in-house. More control and flexibility, but slower launch, more engineering cost, and more operational responsibility.\n\nOption 3: Hybrid. Start with vendor baseline and build internal rule overrides for our highest-risk cases.\n\nNow stakeholders can decide based on strategy, not hidden technical preference.\n\nHere is a simple tradeoff memo:\n\n```txt\nDecision: Use vendor fraud rules for launch, then add internal rule overrides.\n\nContext:\nWe need fraud screening before launch. Building the full rules engine in-house would delay launch by six to eight weeks.\n\nOptions:\n1. Vendor only.\n2. Build fully in-house.\n3. Vendor baseline plus internal overrides for high-risk cases.\n\nRecommendation:\nChoose option 3.\n\nWhy:\nIt gets us to launch with a proven baseline while preserving control over our highest-risk cases.\n\nWhat we give up:\nWe accept vendor dependency and some limits in rule customization during the first launch.\n\nRisk:\nVendor decisions may be hard to explain to compliance or support.\n\nMitigation:\nLog vendor reason codes, build an admin review view, and create manual override rules for priority cases.\n\nRevisit trigger:\nIf manual overrides exceed 15% of flagged cases for two consecutive weeks, revisit the build-versus-buy decision.\n```\n\nThat memo is not just communication. It becomes a record of why the team chose one path and what would make them change their mind."
      },
      {
        "title": "Make it practical",
        "body": "I would present tradeoffs with a simple structure:\n\n1. Decision needed.\n2. Options.\n3. What we gain with each option.\n4. What we give up with each option.\n5. Risks and mitigations.\n6. Cost and timeline.\n7. Reversibility.\n8. Recommendation.\n\nReversibility is especially important. If a decision is easy to change later, the team can move faster. If it is hard to undo, such as a data model, vendor contract, security architecture, or public API, the team should be more deliberate.\n\nI would also avoid false precision. If estimates are uncertain, say so. Stakeholders can handle uncertainty better than surprise."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is overexplaining technical internals before explaining why the decision matters.\n\nAnother mistake is hiding the recommendation. TPMs should not only be note takers. They should synthesize and recommend, while being honest about tradeoffs.\n\nA third mistake is making the decision sound binary when there are staged options. Sometimes the best answer is a phased plan that learns quickly while limiting risk."
      }
    ],
    "answer": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.",
    "reasoning": "I would present tradeoffs with a simple structure:\n\n1. Decision needed.\n2. Options.\n3. What we gain with each option.\n4. What we give up with each option.\n5. Risks and mitigations.\n6. Cost and timeline.\n7. Reversibility.\n8. Recommendation.\n\nReversibility is especially important. If a decision is easy to change later, the team can move faster. If it is hard to undo, such as a data model, vendor contract, security architecture, or public API, the team should be more deliberate.\n\nI would also avoid false precision. If estimates are uncertain, say so. Stakeholders can handle uncertainty better than surprise.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is a technical tradeoff?",
      "Why should tradeoffs be explained in user and business terms?",
      "What does reversibility mean?",
      "Why is a recommendation useful?",
      "How can a phased option reduce risk?"
    ],
    "interviewAnswer": "I would explain the decision in plain language, compare options, and translate technical consequences into business outcomes: timeline, reliability, scalability, user experience, cost, risk, and reversibility.\n\nThen I would give a recommendation with tradeoffs and mitigations. A strong answer helps non-technical stakeholders make an informed decision without pretending the tradeoff does not exist.",
    "sourceLinks": [
      {
        "label": "Atlassian Team Playbook: Trade-offs",
        "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
      },
      {
        "label": "Atlassian Team Playbook: DACI",
        "url": "https://www.atlassian.com/team-playbook/plays/daci"
      }
    ],
    "beginnerExplanation": "A technical tradeoff is a choice where improving one thing usually costs something else. Speed may cost reliability. Customization may cost simplicity. A cheaper vendor may cost flexibility. A faster launch may cost maintainability. Strong security may add friction.\n\nNon-technical stakeholders do not need every implementation detail, but they do need to understand the consequences of the decision.\n\nThe TPM's job is to translate technical options into user impact, business impact, risk, cost, timing, and reversibility.\n\nDo not say, \"Engineering wants to use Kafka instead of webhooks.\" That may be meaningful to engineers but not to everyone else.\n\nSay, \"Option A is faster to launch but may struggle when volume grows. Option B takes three extra weeks but gives us better reliability and easier partner onboarding later.\"",
    "example": "Imagine a team deciding whether to build a custom fraud rules engine or use a vendor.\n\nThe technical details may involve APIs, data models, latency, alerting, explainability, integrations, and long-term platform architecture. But the stakeholder decision might be:\n\n- Do we need to launch in six weeks?\n- How much fraud risk can we tolerate?\n- Do we need custom rules for our market?\n- What will compliance need to audit?\n- What happens if the vendor is wrong?\n- What is the cost now versus later?\n\nA clear tradeoff explanation compares options in plain language.\n\nOption 1: Use vendor rules first. Faster launch, lower engineering effort, proven baseline, but less customization and vendor dependency.\n\nOption 2: Build in-house. More control and flexibility, but slower launch, more engineering cost, and more operational responsibility.\n\nOption 3: Hybrid. Start with vendor baseline and build internal rule overrides for our highest-risk cases.\n\nNow stakeholders can decide based on strategy, not hidden technical preference.\n\nHere is a simple tradeoff memo:\n\n```txt\nDecision: Use vendor fraud rules for launch, then add internal rule overrides.\n\nContext:\nWe need fraud screening before launch. Building the full rules engine in-house would delay launch by six to eight weeks.\n\nOptions:\n1. Vendor only.\n2. Build fully in-house.\n3. Vendor baseline plus internal overrides for high-risk cases.\n\nRecommendation:\nChoose option 3.\n\nWhy:\nIt gets us to launch with a proven baseline while preserving control over our highest-risk cases.\n\nWhat we give up:\nWe accept vendor dependency and some limits in rule customization during the first launch.\n\nRisk:\nVendor decisions may be hard to explain to compliance or support.\n\nMitigation:\nLog vendor reason codes, build an admin review view, and create manual override rules for priority cases.\n\nRevisit trigger:\nIf manual overrides exceed 15% of flagged cases for two consecutive weeks, revisit the build-versus-buy decision.\n```\n\nThat memo is not just communication. It becomes a record of why the team chose one path and what would make them change their mind.",
    "commonMistakes": "A common mistake is overexplaining technical internals before explaining why the decision matters.\n\nAnother mistake is hiding the recommendation. TPMs should not only be note takers. They should synthesize and recommend, while being honest about tradeoffs.\n\nA third mistake is making the decision sound binary when there are staged options. Sometimes the best answer is a phased plan that learns quickly while limiting risk."
  },
  {
    "id": "tpm-user-stories",
    "track": "TPM",
    "category": "Product Requirements",
    "level": "Foundational",
    "question": "How do you write good user stories and acceptance criteria?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A user story describes a user need in a simple format. It helps the team understand who wants something, what they want, and why it matters.\n\nA common format is:\n\n```txt\nAs a [type of user], I want [capability], so that [benefit].\n```\n\nFor example:\n\n```txt\nAs a sender, I want to save a recipient, so that I can send repeat transfers faster.\n```\n\nThis is useful because it keeps the team anchored on the user's goal, not only the feature name.\n\nAcceptance criteria define what must be true for the story to be accepted as complete. They turn the story into testable expectations.\n\nWithout acceptance criteria, different people may imagine different versions of done."
      },
      {
        "title": "Walkthrough",
        "body": "Take the saved recipient story.\n\nWeak acceptance criteria might say:\n\n```txt\nUser can save recipient.\n```\n\nThat is too vague. Can they save from the transfer flow? From settings? What fields are required? What happens if the recipient already exists? Can they edit? Delete? Is there a confirmation screen? What if validation fails?\n\nBetter acceptance criteria are specific and testable:\n\n- User can save a recipient after a successful transfer.\n- Required fields are name, country, payout method, and account identifier.\n- If the account identifier is invalid, the user sees an inline error and cannot save.\n- If the recipient already exists, the user is told and can choose the existing recipient.\n- Saved recipients appear in the recipient picker on the next transfer.\n- Support can see when a recipient was created and by whom.\n\nNow engineering, design, QA, and product can work from the same understanding."
      },
      {
        "title": "Make it practical",
        "body": "Good user stories are small enough to deliver and test. If a story includes onboarding, verification, payments, notifications, admin tooling, reporting, and support scripts, it is probably too big.\n\nGood acceptance criteria cover:\n\nFunctional behavior: what the user can do.\n\nValidation: what input is required and what errors appear.\n\nStates: empty, loading, success, error, disabled, pending, and retry.\n\nPermissions: who can use or see the feature.\n\nData: what is saved, changed, displayed, logged, or audited.\n\nNon-functional needs: performance, accessibility, security, compliance, observability, and localization when relevant.\n\nAcceptance criteria should not over-specify engineering implementation unless the implementation is truly a requirement. The goal is shared understanding, not micromanagement."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is writing stories that are really tasks: \"Build recipient API.\" That may be a valid engineering task, but it does not explain user value.\n\nAnother mistake is vague acceptance criteria. If QA cannot test it and engineering cannot know when it is done, it is not clear enough.\n\nA third mistake is forgetting negative paths. Most product bugs live in edge states: duplicate data, invalid input, partial failure, permission errors, timeouts, and retry behavior."
      }
    ],
    "answer": "A user story describes a user need in a simple format. It helps the team understand who wants something, what they want, and why it matters.",
    "reasoning": "Good user stories are small enough to deliver and test. If a story includes onboarding, verification, payments, notifications, admin tooling, reporting, and support scripts, it is probably too big.\n\nGood acceptance criteria cover:\n\nFunctional behavior: what the user can do.\n\nValidation: what input is required and what errors appear.\n\nStates: empty, loading, success, error, disabled, pending, and retry.\n\nPermissions: who can use or see the feature.\n\nData: what is saved, changed, displayed, logged, or audited.\n\nNon-functional needs: performance, accessibility, security, compliance, observability, and localization when relevant.\n\nAcceptance criteria should not over-specify engineering implementation unless the implementation is truly a requirement. The goal is shared understanding, not micromanagement.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What are the three parts of a common user story format?",
      "Why does the \"so that\" matter?",
      "What makes acceptance criteria testable?",
      "Why should negative paths be included?",
      "When can a user story be too large?"
    ],
    "interviewAnswer": "A good user story explains who the user is, what they need, and why it matters. Acceptance criteria define the testable conditions that must be true for the story to be complete.\n\nI would make stories small, user-centered, and clear. I would write acceptance criteria for happy path, validation, error states, permissions, data changes, and relevant non-functional requirements. A strong answer shows that stories create shared understanding, not just backlog paperwork.",
    "sourceLinks": [
      {
        "label": "Atlassian: User stories",
        "url": "https://www.atlassian.com/agile/project-management/user-stories"
      },
      {
        "label": "Agile Alliance: Acceptance criteria",
        "url": "https://www.agilealliance.org/glossary/acceptance/"
      }
    ],
    "beginnerExplanation": "A user story describes a user need in a simple format. It helps the team understand who wants something, what they want, and why it matters.\n\nA common format is:\n\n```txt\nAs a [type of user], I want [capability], so that [benefit].\n```\n\nFor example:\n\n```txt\nAs a sender, I want to save a recipient, so that I can send repeat transfers faster.\n```\n\nThis is useful because it keeps the team anchored on the user's goal, not only the feature name.\n\nAcceptance criteria define what must be true for the story to be accepted as complete. They turn the story into testable expectations.\n\nWithout acceptance criteria, different people may imagine different versions of done.",
    "example": "Take the saved recipient story.\n\nWeak acceptance criteria might say:\n\n```txt\nUser can save recipient.\n```\n\nThat is too vague. Can they save from the transfer flow? From settings? What fields are required? What happens if the recipient already exists? Can they edit? Delete? Is there a confirmation screen? What if validation fails?\n\nBetter acceptance criteria are specific and testable:\n\n- User can save a recipient after a successful transfer.\n- Required fields are name, country, payout method, and account identifier.\n- If the account identifier is invalid, the user sees an inline error and cannot save.\n- If the recipient already exists, the user is told and can choose the existing recipient.\n- Saved recipients appear in the recipient picker on the next transfer.\n- Support can see when a recipient was created and by whom.\n\nNow engineering, design, QA, and product can work from the same understanding.",
    "commonMistakes": "A common mistake is writing stories that are really tasks: \"Build recipient API.\" That may be a valid engineering task, but it does not explain user value.\n\nAnother mistake is vague acceptance criteria. If QA cannot test it and engineering cannot know when it is done, it is not clear enough.\n\nA third mistake is forgetting negative paths. Most product bugs live in edge states: duplicate data, invalid input, partial failure, permission errors, timeouts, and retry behavior."
  },
  {
    "id": "tpm-vendor-evaluation",
    "track": "TPM",
    "category": "API & Partner Integration",
    "level": "Intermediate",
    "question": "How would you evaluate a third-party vendor for a technical product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A third-party vendor can help a team move faster, but it also becomes part of the product's risk. If the vendor is slow, wrong, expensive, insecure, unavailable, or hard to integrate, customers may blame your product.\n\nEvaluating a vendor is not only procurement. It is a product, technical, security, legal, operational, and financial decision.\n\nThe beginner mistake is to compare vendors only by feature checklist. Feature coverage matters, but it is not enough.\n\nA strong TPM asks:\n\n- Does this vendor solve the actual user and business problem?\n- Can engineering integrate and operate it safely?\n- Does it meet security, privacy, compliance, and legal requirements?\n- What happens when it fails?\n- How much does it cost now and at scale?\n- How hard would it be to switch later?"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine choosing an identity verification vendor.\n\nVendor A has great pricing and easy integration, but weaker coverage in countries the business wants to enter.\n\nVendor B has strong global coverage and compliance support, but integration is more complex and support response is slower.\n\nVendor C has excellent developer experience, but the contract has strict minimums and data retention terms that legal dislikes.\n\nThe right answer depends on strategy. If the company is only launching in one country, Vendor A may be fine. If expansion is the roadmap, Vendor B may be better. If the team needs a fast prototype, Vendor C may be useful but risky for long-term scale.\n\nVendor evaluation is about fit, not abstract best.\n\nA useful scorecard makes the comparison visible:\n\n```txt\nVendor A\n- Product fit: strong for launch country, weak for expansion\n- Technical fit: simple API, limited webhook detail\n- Compliance fit: acceptable for current scope\n- Operations: fast support, limited manual review tooling\n- Commercials: low cost now, medium cost at scale\n- Exit risk: medium\n\nVendor B\n- Product fit: strong global coverage\n- Technical fit: more complex API, stronger status model\n- Compliance fit: stronger audit and reporting\n- Operations: slower support, better admin tooling\n- Commercials: higher minimum contract\n- Exit risk: lower because data export is clearer\n```\n\nThe TPM's job is to make the tradeoff visible enough that the team can choose based on strategy, not demo polish."
      },
      {
        "title": "Make it practical",
        "body": "I would evaluate vendors across several dimensions.\n\nProduct fit: features, user experience, geographic coverage, languages, mobile support, customization, and roadmap alignment.\n\nTechnical fit: API quality, documentation, SDKs, sandbox, webhooks, idempotency, rate limits, latency, uptime, monitoring, versioning, and migration path.\n\nSecurity and compliance: certifications, data handling, encryption, access controls, audit logs, privacy terms, retention, sub-processors, regulatory support, and incident notification.\n\nOperations: support SLAs, escalation process, manual review tools, reporting, reconciliation, status pages, and partner success resources.\n\nCommercials: pricing model, minimums, overage fees, contract length, renewal terms, termination rights, and cost at projected scale.\n\nRisk and exit: vendor lock-in, fallback options, data export, multi-vendor strategy, and what happens during vendor downtime.\n\nThen I would run a proof of concept for the riskiest assumptions instead of only watching a demo.\n\nFor an identity vendor, the proof of concept should not only test \"can we call the API?\" It should test the scary parts:\n\n```txt\nProof-of-concept plan\n\n1. Verify a normal user.\n2. Reject a blurry document.\n3. Put a user into manual review.\n4. Receive delayed webhook events.\n5. Retry a failed request safely.\n6. Confirm support can see the reason and status.\n7. Export decision data needed for audit.\n8. Measure average response time on mobile networks.\n9. Confirm what happens if the vendor is unavailable.\n```\n\nSecurity review also needs concrete questions:\n\n- What personal data does the vendor collect and store?\n- Where is it stored and for how long?\n- Who can access it?\n- Is data encrypted in transit and at rest?\n- What audit logs are available?\n- What certifications or third-party reports exist?\n- How quickly will the vendor notify us about an incident?\n- Can we delete or export data if we leave?"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is letting the best demo win. Demos are optimized to look smooth. Real integration reveals edge cases.\n\nAnother mistake is ignoring operational fit. A vendor can have a great API but poor support when something breaks.\n\nA third mistake is not thinking about exit strategy. If switching later would be painful, that risk should be part of the decision."
      }
    ],
    "answer": "A third-party vendor can help a team move faster, but it also becomes part of the product's risk. If the vendor is slow, wrong, expensive, insecure, unavailable, or hard to integrate, customers may blame your product.",
    "reasoning": "I would evaluate vendors across several dimensions.\n\nProduct fit: features, user experience, geographic coverage, languages, mobile support, customization, and roadmap alignment.\n\nTechnical fit: API quality, documentation, SDKs, sandbox, webhooks, idempotency, rate limits, latency, uptime, monitoring, versioning, and migration path.\n\nSecurity and compliance: certifications, data handling, encryption, access controls, audit logs, privacy terms, retention, sub-processors, regulatory support, and incident notification.\n\nOperations: support SLAs, escalation process, manual review tools, reporting, reconciliation, status pages, and partner success resources.\n\nCommercials: pricing model, minimums, overage fees, contract length, renewal terms, termination rights, and cost at projected scale.\n\nRisk and exit: vendor lock-in, fallback options, data export, multi-vendor strategy, and what happens during vendor downtime.\n\nThen I would run a proof of concept for the riskiest assumptions instead of only watching a demo.\n\nFor an identity vendor, the proof of concept should not only test \"can we call the API?\" It should test the scary parts:\n\n```txt\nProof-of-concept plan\n\n1. Verify a normal user.\n2. Reject a blurry document.\n3. Put a user into manual review.\n4. Receive delayed webhook events.\n5. Retry a failed request safely.\n6. Confirm support can see the reason and status.\n7. Export decision data needed for audit.\n8. Measure average response time on mobile networks.\n9. Confirm what happens if the vendor is unavailable.\n```\n\nSecurity review also needs concrete questions:\n\n- What personal data does the vendor collect and store?\n- Where is it stored and for how long?\n- Who can access it?\n- Is data encrypted in transit and at rest?\n- What audit logs are available?\n- What certifications or third-party reports exist?\n- How quickly will the vendor notify us about an incident?\n- Can we delete or export data if we leave?",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is vendor selection a product risk decision?",
      "Why is a feature checklist not enough?",
      "What technical questions should you ask about an API vendor?",
      "Why do support SLAs matter?",
      "What does vendor lock-in mean?"
    ],
    "interviewAnswer": "I would evaluate a vendor across product fit, technical fit, security, compliance, operations, commercials, and exit risk. I would involve engineering, security, legal, compliance, operations, and finance early.\n\nThen I would run a proof of concept around the riskiest assumptions, not just the easiest demo path. A strong answer shows that vendors can accelerate the roadmap but also become dependencies the product must manage.",
    "sourceLinks": [
      {
        "label": "Google: Vendor Security Assessment Questionnaire",
        "url": "https://github.com/google/vsaq"
      },
      {
        "label": "Atlassian Team Playbook: Trade-offs",
        "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
      }
    ],
    "beginnerExplanation": "A third-party vendor can help a team move faster, but it also becomes part of the product's risk. If the vendor is slow, wrong, expensive, insecure, unavailable, or hard to integrate, customers may blame your product.\n\nEvaluating a vendor is not only procurement. It is a product, technical, security, legal, operational, and financial decision.\n\nThe beginner mistake is to compare vendors only by feature checklist. Feature coverage matters, but it is not enough.\n\nA strong TPM asks:\n\n- Does this vendor solve the actual user and business problem?\n- Can engineering integrate and operate it safely?\n- Does it meet security, privacy, compliance, and legal requirements?\n- What happens when it fails?\n- How much does it cost now and at scale?\n- How hard would it be to switch later?",
    "example": "Imagine choosing an identity verification vendor.\n\nVendor A has great pricing and easy integration, but weaker coverage in countries the business wants to enter.\n\nVendor B has strong global coverage and compliance support, but integration is more complex and support response is slower.\n\nVendor C has excellent developer experience, but the contract has strict minimums and data retention terms that legal dislikes.\n\nThe right answer depends on strategy. If the company is only launching in one country, Vendor A may be fine. If expansion is the roadmap, Vendor B may be better. If the team needs a fast prototype, Vendor C may be useful but risky for long-term scale.\n\nVendor evaluation is about fit, not abstract best.\n\nA useful scorecard makes the comparison visible:\n\n```txt\nVendor A\n- Product fit: strong for launch country, weak for expansion\n- Technical fit: simple API, limited webhook detail\n- Compliance fit: acceptable for current scope\n- Operations: fast support, limited manual review tooling\n- Commercials: low cost now, medium cost at scale\n- Exit risk: medium\n\nVendor B\n- Product fit: strong global coverage\n- Technical fit: more complex API, stronger status model\n- Compliance fit: stronger audit and reporting\n- Operations: slower support, better admin tooling\n- Commercials: higher minimum contract\n- Exit risk: lower because data export is clearer\n```\n\nThe TPM's job is to make the tradeoff visible enough that the team can choose based on strategy, not demo polish.",
    "commonMistakes": "A common mistake is letting the best demo win. Demos are optimized to look smooth. Real integration reveals edge cases.\n\nAnother mistake is ignoring operational fit. A vendor can have a great API but poor support when something breaks.\n\nA third mistake is not thinking about exit strategy. If switching later would be painful, that risk should be part of the decision."
  }
];
