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
    "id": "fe-css-cascade-specificity-stacking",
    "track": "Frontend",
    "category": "CSS",
    "level": "Intermediate",
    "question": "Explain the CSS cascade, specificity, and stacking context.",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "CSS can feel confusing because more than one rule can target the same element. The browser needs a way to decide which declaration wins.\n\nThe cascade is that decision system. It considers where styles came from, importance, cascade layers, specificity, order, and inheritance.\n\nThe beginner mistake is thinking CSS is only \"last rule wins.\" Order matters, but only after other rules are considered.\n\nSpecificity is one part of the cascade. It is the weight of a selector.\n\n```css\nbutton {\n  color: black;\n}\n\n.primary {\n  color: blue;\n}\n\n#checkout {\n  color: red;\n}\n```\n\nIf the same button has `id=\"checkout\"` and `class=\"primary\"`, the ID selector is more specific, so red wins over blue and black."
      },
      {
        "title": "Walkthrough",
        "body": "Think of specificity like a score:\n\n```txt\nInline styles:\nVery strong\n\nID selectors:\nStrong\n\nClass, attribute, pseudo-class selectors:\nMedium\n\nElement and pseudo-element selectors:\nLow\n```\n\nThis is why deeply specific CSS can become hard to override.\n\n```css\n.app .sidebar nav ul li a.active {\n  color: red;\n}\n```\n\nLater, someone tries:\n\n```css\n.active {\n  color: blue;\n}\n```\n\nThe second rule may come later, but it is less specific. The red rule can still win.\n\nThat is why good CSS often uses low, predictable specificity."
      },
      {
        "title": "Make it practical",
        "body": "Stacking context is a different but related source of confusion. It affects which things appear in front of other things.\n\nA common beginner belief is:\n\n```txt\nThe biggest z-index always appears on top.\n```\n\nThat is not always true. `z-index` is compared inside stacking contexts. A child can be trapped inside its parent's stacking context.\n\n```html\n<div class=\"modal-shell\">\n  <div class=\"tooltip\">Tooltip</div>\n</div>\n\n<header class=\"site-header\">Header</header>\n```\n\n```css\n.modal-shell {\n  position: relative;\n  z-index: 1;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 9999;\n}\n\n.site-header {\n  position: relative;\n  z-index: 10;\n}\n```\n\nEven though the tooltip has `z-index: 9999`, it may still appear behind the header because it lives inside `.modal-shell`, and `.modal-shell` is below the header in the parent stacking order.\n\nTo fix stacking bugs, inspect the parent contexts, not only the element with the big `z-index`.\n\n```txt\nDebug checklist\n\n1. Which rule is winning in DevTools?\n2. Is the losing rule less specific?\n3. Is `!important` involved?\n4. Is the element inside a stacking context?\n5. Is a parent setting position, z-index, transform, opacity, filter, or isolation?\n6. Can the CSS be simplified instead of raising z-index again?\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is adding `!important` instead of understanding why a rule lost. That may fix one bug and create the next one.\n\nAnother mistake is increasing `z-index` forever. If the element is inside a lower stacking context, a bigger number may not help.\n\nA third mistake is writing selectors that are too specific. They make future overrides harder and make the stylesheet fragile."
      }
    ],
    "answer": "CSS can feel confusing because more than one rule can target the same element. The browser needs a way to decide which declaration wins.",
    "reasoning": "Stacking context is a different but related source of confusion. It affects which things appear in front of other things.\n\nA common beginner belief is:\n\n```txt\nThe biggest z-index always appears on top.\n```\n\nThat is not always true. `z-index` is compared inside stacking contexts. A child can be trapped inside its parent's stacking context.\n\n```html\n<div class=\"modal-shell\">\n  <div class=\"tooltip\">Tooltip</div>\n</div>\n\n<header class=\"site-header\">Header</header>\n```\n\n```css\n.modal-shell {\n  position: relative;\n  z-index: 1;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 9999;\n}\n\n.site-header {\n  position: relative;\n  z-index: 10;\n}\n```\n\nEven though the tooltip has `z-index: 9999`, it may still appear behind the header because it lives inside `.modal-shell`, and `.modal-shell` is below the header in the parent stacking order.\n\nTo fix stacking bugs, inspect the parent contexts, not only the element with the big `z-index`.\n\n```txt\nDebug checklist\n\n1. Which rule is winning in DevTools?\n2. Is the losing rule less specific?\n3. Is `!important` involved?\n4. Is the element inside a stacking context?\n5. Is a parent setting position, z-index, transform, opacity, filter, or isolation?\n6. Can the CSS be simplified instead of raising z-index again?\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is CSS not simply \"last rule wins\"?",
      "What is specificity?",
      "Why can an ID selector beat a class selector?",
      "What is a stacking context?",
      "Why might `z-index: 9999` still appear behind another element?"
    ],
    "interviewAnswer": "The cascade is the browser's process for deciding which CSS declaration wins. Specificity is the selector weight used when competing rules apply in the same cascade layer and origin. Stacking context controls how elements are layered on the z-axis, and `z-index` is compared within those contexts.\n\nA strong answer should mention cascade order, specificity, source order, avoiding unnecessary `!important`, and debugging stacking bugs by checking parent stacking contexts.",
    "sourceLinks": [
      {
        "label": "MDN: CSS cascade",
        "url": "https://developer.mozilla.org/docs/Web/CSS/CSS_cascade/Cascade"
      },
      {
        "label": "MDN: CSS specificity",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity"
      },
      {
        "label": "MDN: Stacking context",
        "url": "https://developer.mozilla.org/docs/Web/CSS/Guides/Positioned_layout/Stacking_context"
      }
    ],
    "beginnerExplanation": "CSS can feel confusing because more than one rule can target the same element. The browser needs a way to decide which declaration wins.\n\nThe cascade is that decision system. It considers where styles came from, importance, cascade layers, specificity, order, and inheritance.\n\nThe beginner mistake is thinking CSS is only \"last rule wins.\" Order matters, but only after other rules are considered.\n\nSpecificity is one part of the cascade. It is the weight of a selector.\n\n```css\nbutton {\n  color: black;\n}\n\n.primary {\n  color: blue;\n}\n\n#checkout {\n  color: red;\n}\n```\n\nIf the same button has `id=\"checkout\"` and `class=\"primary\"`, the ID selector is more specific, so red wins over blue and black.",
    "example": "Think of specificity like a score:\n\n```txt\nInline styles:\nVery strong\n\nID selectors:\nStrong\n\nClass, attribute, pseudo-class selectors:\nMedium\n\nElement and pseudo-element selectors:\nLow\n```\n\nThis is why deeply specific CSS can become hard to override.\n\n```css\n.app .sidebar nav ul li a.active {\n  color: red;\n}\n```\n\nLater, someone tries:\n\n```css\n.active {\n  color: blue;\n}\n```\n\nThe second rule may come later, but it is less specific. The red rule can still win.\n\nThat is why good CSS often uses low, predictable specificity.",
    "commonMistakes": "A common mistake is adding `!important` instead of understanding why a rule lost. That may fix one bug and create the next one.\n\nAnother mistake is increasing `z-index` forever. If the element is inside a lower stacking context, a bigger number may not help.\n\nA third mistake is writing selectors that are too specific. They make future overrides harder and make the stylesheet fragile."
  },
  {
    "id": "fe-data-fetching-cache-invalidation",
    "track": "Frontend",
    "category": "React",
    "level": "Intermediate",
    "question": "How should frontend apps handle data fetching and cache invalidation?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.\n\nThe beginner mistake is thinking the problem ends after `fetch()` returns. Real apps need loading states, error states, retries, stale data, background refresh, mutations, and consistency after the user changes something.\n\nServer data is different from local UI state. A dropdown open state belongs to the browser session. A list of invoices belongs to the server. The frontend can cache it, but the server is the real source of truth."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an issues page.\n\n```jsx\nconst queryKey = [\"issues\", { status, owner }];\n```\n\nThat key means: \"the issues list for this status and owner.\" If the user changes the filter, the key changes and the app needs a different data set.\n\nNow imagine the user closes an issue. The old list may be wrong because one item changed status. Cache invalidation tells the app: \"the issues query may be stale, refetch it.\"\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: closeIssue,\n  onSuccess: () => {\n    queryClient.invalidateQueries({ queryKey: [\"issues\"] });\n  },\n});\n```\n\nThe key idea is that fetching is not just making requests. It is managing the relationship between UI state, server state, and time."
      },
      {
        "title": "Make it practical",
        "body": "A good data-fetching plan answers:\n\n1. What is the query key?\n2. What loading UI appears?\n3. What error UI appears?\n4. When is cached data considered stale?\n5. What mutations change this data?\n6. Which queries should be invalidated after mutation?\n7. Should the UI update optimistically?\n8. How does pagination or filtering affect the cache?\n\nHere is a simple optimistic update shape:\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: updateTodo,\n  onMutate: async (nextTodo) => {\n    await queryClient.cancelQueries({ queryKey: [\"todos\"] });\n    const previousTodos = queryClient.getQueryData([\"todos\"]);\n\n    queryClient.setQueryData([\"todos\"], (todos) =>\n      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)\n    );\n\n    return { previousTodos };\n  },\n  onError: (_error, _nextTodo, context) => {\n    queryClient.setQueryData([\"todos\"], context.previousTodos);\n  },\n  onSettled: () => {\n    queryClient.invalidateQueries({ queryKey: [\"todos\"] });\n  },\n});\n```\n\nThis shows the tradeoff. Optimistic updates feel fast, but the app must recover if the server rejects the change."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using one generic key for data that actually depends on filters or user ID. That mixes unrelated data.\n\nAnother mistake is refetching everything after every mutation. That works at small scale but becomes slow and noisy.\n\nA third mistake is forgetting error and stale states. Users need to know whether data is loading, failed, refreshing, or possibly outdated."
      }
    ],
    "answer": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.",
    "reasoning": "A good data-fetching plan answers:\n\n1. What is the query key?\n2. What loading UI appears?\n3. What error UI appears?\n4. When is cached data considered stale?\n5. What mutations change this data?\n6. Which queries should be invalidated after mutation?\n7. Should the UI update optimistically?\n8. How does pagination or filtering affect the cache?\n\nHere is a simple optimistic update shape:\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: updateTodo,\n  onMutate: async (nextTodo) => {\n    await queryClient.cancelQueries({ queryKey: [\"todos\"] });\n    const previousTodos = queryClient.getQueryData([\"todos\"]);\n\n    queryClient.setQueryData([\"todos\"], (todos) =>\n      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)\n    );\n\n    return { previousTodos };\n  },\n  onError: (_error, _nextTodo, context) => {\n    queryClient.setQueryData([\"todos\"], context.previousTodos);\n  },\n  onSettled: () => {\n    queryClient.invalidateQueries({ queryKey: [\"todos\"] });\n  },\n});\n```\n\nThis shows the tradeoff. Optimistic updates feel fast, but the app must recover if the server rejects the change.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is server data different from local UI state?",
      "What is a query key?",
      "What does invalidation mean?",
      "When might optimistic updates be useful?",
      "What can go wrong if cache keys are too vague?"
    ],
    "interviewAnswer": "Frontend data fetching should treat server data as cached, asynchronous state. I would define query keys, loading and error states, stale timing, mutation behavior, invalidation rules, and optimistic update recovery.\n\nA strong answer shows that the hard part is not calling `fetch`. The hard part is keeping the UI honest when data changes, requests fail, filters change, or cached data becomes stale.",
    "sourceLinks": [
      {
        "label": "TanStack Query: Query invalidation",
        "url": "https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation"
      },
      {
        "label": "React: Fetching data with Effects",
        "url": "https://react.dev/reference/react/useEffect#fetching-data-with-effects"
      }
    ],
    "beginnerExplanation": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.\n\nThe beginner mistake is thinking the problem ends after `fetch()` returns. Real apps need loading states, error states, retries, stale data, background refresh, mutations, and consistency after the user changes something.\n\nServer data is different from local UI state. A dropdown open state belongs to the browser session. A list of invoices belongs to the server. The frontend can cache it, but the server is the real source of truth.",
    "example": "Imagine an issues page.\n\n```jsx\nconst queryKey = [\"issues\", { status, owner }];\n```\n\nThat key means: \"the issues list for this status and owner.\" If the user changes the filter, the key changes and the app needs a different data set.\n\nNow imagine the user closes an issue. The old list may be wrong because one item changed status. Cache invalidation tells the app: \"the issues query may be stale, refetch it.\"\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: closeIssue,\n  onSuccess: () => {\n    queryClient.invalidateQueries({ queryKey: [\"issues\"] });\n  },\n});\n```\n\nThe key idea is that fetching is not just making requests. It is managing the relationship between UI state, server state, and time.",
    "commonMistakes": "A common mistake is using one generic key for data that actually depends on filters or user ID. That mixes unrelated data.\n\nAnother mistake is refetching everything after every mutation. That works at small scale but becomes slow and noisy.\n\nA third mistake is forgetting error and stale states. Users need to know whether data is loading, failed, refreshing, or possibly outdated."
  },
  {
    "id": "fe-debounce-throttle",
    "track": "Frontend",
    "category": "JavaScript",
    "level": "Foundational",
    "question": "What is the difference between debounce and throttle?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Debounce and throttle are techniques for controlling how often a function runs.\n\nThey matter because frontend events can fire very quickly. Typing, scrolling, resizing, mouse movement, and input changes can trigger many calls per second. If every event runs expensive work, the UI can feel slow or the server can receive too many requests.\n\nDebounce waits until activity pauses. Throttle runs at most once in a fixed time window.\n\nUse debounce when you care about the final value after the user stops. Use throttle when you want regular updates while activity continues."
      },
      {
        "title": "Walkthrough",
        "body": "Search input is a debounce example. If a user types `react`, you usually do not want to call the API for `r`, `re`, `rea`, `reac`, and `react`. You can wait until the user pauses typing.\n\n```js\nfunction debounce(callback, delay) {\n  let timerId;\n\n  return function debounced(...args) {\n    clearTimeout(timerId);\n\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, delay);\n  };\n}\n```\n\nScroll tracking is often a throttle example. If a user scrolls continuously, you may want to update position at most every 100ms.\n\n```js\nfunction throttle(callback, delay) {\n  let waiting = false;\n\n  return function throttled(...args) {\n    if (waiting) return;\n\n    callback(...args);\n    waiting = true;\n\n    setTimeout(() => {\n      waiting = false;\n    }, delay);\n  };\n}\n```\n\nThe difference is timing. Debounce resets the timer each time. Throttle allows periodic execution."
      },
      {
        "title": "Make it practical",
        "body": "Use debounce for:\n\n- Search suggestions.\n- Auto-save after typing pauses.\n- Validation after input pauses.\n- Resizing work after the resize stops.\n\nUse throttle for:\n\n- Scroll position updates.\n- Infinite-scroll checks.\n- Drag movement.\n- Mouse movement tracking.\n- Sending periodic analytics during continuous activity.\n\nIn React, be careful that the debounced or throttled function has stable identity. If you recreate it on every render, it may lose its timer state.\n\n```jsx\nfunction SearchBox({ onSearch }) {\n  const debouncedSearch = useMemo(\n    () => debounce(onSearch, 300),\n    [onSearch]\n  );\n\n  return (\n    <input onChange={(event) => debouncedSearch(event.target.value)} />\n  );\n}\n```\n\nIn production, you also need cleanup if a component unmounts while a timer is waiting."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using debounce when the user expects continuous feedback. Scroll position should not wait until scrolling fully stops.\n\nAnother mistake is using throttle for search and still sending intermediate values the user did not mean to submit.\n\nA third mistake is forgetting stale closures. A delayed callback may use old props or state if you do not design it carefully."
      }
    ],
    "answer": "Debounce and throttle are techniques for controlling how often a function runs.",
    "reasoning": "Use debounce for:\n\n- Search suggestions.\n- Auto-save after typing pauses.\n- Validation after input pauses.\n- Resizing work after the resize stops.\n\nUse throttle for:\n\n- Scroll position updates.\n- Infinite-scroll checks.\n- Drag movement.\n- Mouse movement tracking.\n- Sending periodic analytics during continuous activity.\n\nIn React, be careful that the debounced or throttled function has stable identity. If you recreate it on every render, it may lose its timer state.\n\n```jsx\nfunction SearchBox({ onSearch }) {\n  const debouncedSearch = useMemo(\n    () => debounce(onSearch, 300),\n    [onSearch]\n  );\n\n  return (\n    <input onChange={(event) => debouncedSearch(event.target.value)} />\n  );\n}\n```\n\nIn production, you also need cleanup if a component unmounts while a timer is waiting.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does debounce wait for?",
      "What does throttle limit?",
      "Why is search usually debounced?",
      "Why is scroll usually throttled?",
      "What React bug can happen if a debounced function is recreated every render?"
    ],
    "interviewAnswer": "Debounce delays a function until activity has stopped for a period of time. Throttle allows a function to run at most once per time interval while activity continues.\n\nI would use debounce for search, validation, and autosave after typing pauses. I would use throttle for scroll, resize, drag, or pointer updates where periodic feedback matters. A strong answer mentions performance, user intent, timers, cleanup, and stale closures.",
    "sourceLinks": [
      {
        "label": "MDN: Debounce",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Debounce"
      },
      {
        "label": "MDN: Throttle",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Throttle"
      }
    ],
    "beginnerExplanation": "Debounce and throttle are techniques for controlling how often a function runs.\n\nThey matter because frontend events can fire very quickly. Typing, scrolling, resizing, mouse movement, and input changes can trigger many calls per second. If every event runs expensive work, the UI can feel slow or the server can receive too many requests.\n\nDebounce waits until activity pauses. Throttle runs at most once in a fixed time window.\n\nUse debounce when you care about the final value after the user stops. Use throttle when you want regular updates while activity continues.",
    "example": "Search input is a debounce example. If a user types `react`, you usually do not want to call the API for `r`, `re`, `rea`, `reac`, and `react`. You can wait until the user pauses typing.\n\n```js\nfunction debounce(callback, delay) {\n  let timerId;\n\n  return function debounced(...args) {\n    clearTimeout(timerId);\n\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, delay);\n  };\n}\n```\n\nScroll tracking is often a throttle example. If a user scrolls continuously, you may want to update position at most every 100ms.\n\n```js\nfunction throttle(callback, delay) {\n  let waiting = false;\n\n  return function throttled(...args) {\n    if (waiting) return;\n\n    callback(...args);\n    waiting = true;\n\n    setTimeout(() => {\n      waiting = false;\n    }, delay);\n  };\n}\n```\n\nThe difference is timing. Debounce resets the timer each time. Throttle allows periodic execution.",
    "commonMistakes": "A common mistake is using debounce when the user expects continuous feedback. Scroll position should not wait until scrolling fully stops.\n\nAnother mistake is using throttle for search and still sending intermediate values the user did not mean to submit.\n\nA third mistake is forgetting stale closures. A delayed callback may use old props or state if you do not design it carefully."
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
    "id": "tpm-ai-agent-tool-permissions",
    "track": "TPM",
    "category": "AI Agents",
    "level": "Intermediate",
    "question": "How would you design permissions for an AI agent that can use tools?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An AI agent with tools can do more than answer. It may search records, create tickets, send messages, issue refunds, change account settings, or trigger workflows.\n\nThe beginner mistake is giving the agent broad access because it makes the demo impressive. In production, tool access is power. The TPM must decide what the agent can do, when it needs approval, and how actions are logged.\n\nThe mental model:\n\n```txt\nRead:\nAgent can view information.\n\nSuggest:\nAgent can recommend an action.\n\nDraft:\nAgent can prepare an action for human approval.\n\nExecute:\nAgent can perform the action.\n```\n\nEach step carries more risk."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a support agent that helps with failed transfers.\n\nSafe tool use:\n\n```txt\nRead transfer status.\nSummarize case.\nDraft support reply.\nCreate internal ticket.\n```\n\nRisky tool use:\n\n```txt\nIssue refund.\nChange KYC status.\nOverride fraud hold.\nClose complaint.\nEdit recipient details.\n```\n\nThe product should not treat these equally."
      },
      {
        "title": "Make it practical",
        "body": "Here is a tool permission artifact:\n\n```txt\nAI agent:\nTransfer support assistant\n\nAllowed without approval:\n- Read transfer status\n- Read public help article\n- Draft response\n- Summarize case\n\nRequires human approval:\n- Send customer message\n- Create refund request\n- Escalate to compliance\n\nNever allowed:\n- Approve KYC\n- Remove fraud hold\n- Change payout recipient\n- Delete audit logs\n- File regulatory report\n\nControls:\n- Tool scopes\n- Confirmation screen\n- Reason required for high-impact actions\n- Audit log of tool call and user approval\n- Rate limits\n- Emergency disable switch\n```\n\nThe TPM should also design failure behavior:\n\n```txt\nIf tool call fails:\nTell the user the action was not completed.\n\nIf confidence is low:\nRoute to human.\n\nIf untrusted text instructs the agent to ignore policy:\nTreat it as user data, not an instruction.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is relying on the prompt alone to control tool use. Permissions should be enforced by the system.\n\nAnother mistake is not separating draft from execute. Drafting is often useful and much safer.\n\nA third mistake is missing audit logs. If an agent changes state, the company needs to know exactly what happened."
      }
    ],
    "answer": "An AI agent with tools can do more than answer. It may search records, create tickets, send messages, issue refunds, change account settings, or trigger workflows.",
    "reasoning": "Here is a tool permission artifact:\n\n```txt\nAI agent:\nTransfer support assistant\n\nAllowed without approval:\n- Read transfer status\n- Read public help article\n- Draft response\n- Summarize case\n\nRequires human approval:\n- Send customer message\n- Create refund request\n- Escalate to compliance\n\nNever allowed:\n- Approve KYC\n- Remove fraud hold\n- Change payout recipient\n- Delete audit logs\n- File regulatory report\n\nControls:\n- Tool scopes\n- Confirmation screen\n- Reason required for high-impact actions\n- Audit log of tool call and user approval\n- Rate limits\n- Emergency disable switch\n```\n\nThe TPM should also design failure behavior:\n\n```txt\nIf tool call fails:\nTell the user the action was not completed.\n\nIf confidence is low:\nRoute to human.\n\nIf untrusted text instructs the agent to ignore policy:\nTreat it as user data, not an instruction.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why are tool permissions important for AI agents?",
      "What is the difference between read, suggest, draft, and execute?",
      "Which fintech actions should require human approval?",
      "Why should permissions be enforced outside the prompt?",
      "What should an audit log capture?"
    ],
    "interviewAnswer": "I would design AI agent permissions by classifying tools by risk, limiting scopes, requiring human approval for consequential actions, forbidding sensitive actions, logging all tool calls, and adding failure handling and emergency disable controls.\n\nA strong TPM answer treats the agent like a powerful user with least-privilege access.",
    "sourceLinks": [
      {
        "label": "OpenAI Docs: Safety in building agents",
        "url": "https://platform.openai.com/docs/guides/agent-builder-safety"
      },
      {
        "label": "OWASP: Top 10 for Large Language Model Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      }
    ],
    "beginnerExplanation": "An AI agent with tools can do more than answer. It may search records, create tickets, send messages, issue refunds, change account settings, or trigger workflows.\n\nThe beginner mistake is giving the agent broad access because it makes the demo impressive. In production, tool access is power. The TPM must decide what the agent can do, when it needs approval, and how actions are logged.\n\nThe mental model:\n\n```txt\nRead:\nAgent can view information.\n\nSuggest:\nAgent can recommend an action.\n\nDraft:\nAgent can prepare an action for human approval.\n\nExecute:\nAgent can perform the action.\n```\n\nEach step carries more risk.",
    "example": "Imagine a support agent that helps with failed transfers.\n\nSafe tool use:\n\n```txt\nRead transfer status.\nSummarize case.\nDraft support reply.\nCreate internal ticket.\n```\n\nRisky tool use:\n\n```txt\nIssue refund.\nChange KYC status.\nOverride fraud hold.\nClose complaint.\nEdit recipient details.\n```\n\nThe product should not treat these equally.",
    "commonMistakes": "A common mistake is relying on the prompt alone to control tool use. Permissions should be enforced by the system.\n\nAnother mistake is not separating draft from execute. Drafting is often useful and much safer.\n\nA third mistake is missing audit logs. If an agent changes state, the company needs to know exactly what happened."
  },
  {
    "id": "tpm-ai-credit-underwriting",
    "track": "TPM",
    "category": "AI & Fintech",
    "level": "Intermediate",
    "question": "How would you approach AI-assisted credit underwriting as a TPM?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.\n\nThe beginner mistake is treating underwriting AI like a normal recommendation model. Credit decisions are high-stakes. They affect people's access to money, business growth, housing, and financial opportunity. They also come with regulatory, fairness, explainability, and model-risk obligations.\n\nThe TPM must ask:\n\n```txt\nWhat decision does the model support?\nWhat data is used?\nCan we explain adverse outcomes?\nHow do we test fairness and performance?\nWho can override the model?\nHow do we monitor drift?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a lender wants to use cash-flow data and machine learning to approve small-business loans.\n\nA weak product requirement says:\n\n```txt\nUse AI to approve loans faster.\n```\n\nA stronger requirement separates the system:\n\n```txt\nInputs:\nBank transactions, revenue trends, repayment history, business age, existing debt, fraud signals.\n\nModel output:\nRisk score and recommended limit.\n\nDecision:\nApprove, decline, request more info, or route to manual review.\n\nExplanation:\nSpecific principal reasons for adverse action.\n\nControls:\nFair lending review, model validation, override workflow, audit trail.\n```\n\nThe TPM should not let the product become a black box."
      },
      {
        "title": "Make it practical",
        "body": "Here is an underwriting requirements artifact:\n\n```txt\nFeature:\nAI-assisted small-business credit decisioning\n\nUser value:\nFaster decisions and fairer access for businesses with strong cash flow but limited traditional credit history.\n\nDecision states:\n- Approved\n- Approved with lower limit\n- More information needed\n- Manual review\n- Declined\n\nRequired evidence:\n- Model performance on historical data\n- Fairness analysis across protected or proxy groups where legally appropriate\n- Reason-code generation\n- Manual-review policy\n- Model monitoring dashboard\n- Adverse-action notice workflow\n\nMetrics:\n- Approval rate\n- Default rate\n- Manual review rate\n- Time to decision\n- Override rate\n- Adverse-action reason distribution\n- Model drift indicators\n```\n\nThe TPM should also define what the model cannot do:\n\n```txt\nNon-goals:\n- The model does not make unreviewable decisions.\n- The model does not use prohibited data.\n- The model does not generate vague decline reasons.\n- The model does not launch without validation and monitoring.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing approval speed without protecting decision quality.\n\nAnother mistake is ignoring explainability until legal review. If the team cannot explain declines, the product is not ready.\n\nA third mistake is not defining human oversight. Manual review and overrides need policy, permissions, and audit logs."
      }
    ],
    "answer": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.",
    "reasoning": "Here is an underwriting requirements artifact:\n\n```txt\nFeature:\nAI-assisted small-business credit decisioning\n\nUser value:\nFaster decisions and fairer access for businesses with strong cash flow but limited traditional credit history.\n\nDecision states:\n- Approved\n- Approved with lower limit\n- More information needed\n- Manual review\n- Declined\n\nRequired evidence:\n- Model performance on historical data\n- Fairness analysis across protected or proxy groups where legally appropriate\n- Reason-code generation\n- Manual-review policy\n- Model monitoring dashboard\n- Adverse-action notice workflow\n\nMetrics:\n- Approval rate\n- Default rate\n- Manual review rate\n- Time to decision\n- Override rate\n- Adverse-action reason distribution\n- Model drift indicators\n```\n\nThe TPM should also define what the model cannot do:\n\n```txt\nNon-goals:\n- The model does not make unreviewable decisions.\n- The model does not use prohibited data.\n- The model does not generate vague decline reasons.\n- The model does not launch without validation and monitoring.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is credit underwriting high-stakes?",
      "What is an adverse action notice?",
      "Why does model validation matter?",
      "What should be monitored after launch?",
      "Why are vague decline reasons a problem?"
    ],
    "interviewAnswer": "I would approach AI-assisted underwriting by defining the decision, data inputs, model output, human review, explainability, adverse-action workflow, fairness testing, model validation, monitoring, overrides, and audit trail.\n\nA strong TPM answer shows that AI credit products must be fast, useful, explainable, governed, and fair enough to operate responsibly.",
    "sourceLinks": [
      {
        "label": "CFPB: Adverse action notices and complex algorithms",
        "url": "https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/"
      },
      {
        "label": "Federal Reserve: SR 11-7 model risk management",
        "url": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf"
      }
    ],
    "beginnerExplanation": "Credit underwriting decides whether a customer qualifies for credit, how much, and on what terms. AI-assisted underwriting uses models to support that decision.\n\nThe beginner mistake is treating underwriting AI like a normal recommendation model. Credit decisions are high-stakes. They affect people's access to money, business growth, housing, and financial opportunity. They also come with regulatory, fairness, explainability, and model-risk obligations.\n\nThe TPM must ask:\n\n```txt\nWhat decision does the model support?\nWhat data is used?\nCan we explain adverse outcomes?\nHow do we test fairness and performance?\nWho can override the model?\nHow do we monitor drift?\n```",
    "example": "Imagine a lender wants to use cash-flow data and machine learning to approve small-business loans.\n\nA weak product requirement says:\n\n```txt\nUse AI to approve loans faster.\n```\n\nA stronger requirement separates the system:\n\n```txt\nInputs:\nBank transactions, revenue trends, repayment history, business age, existing debt, fraud signals.\n\nModel output:\nRisk score and recommended limit.\n\nDecision:\nApprove, decline, request more info, or route to manual review.\n\nExplanation:\nSpecific principal reasons for adverse action.\n\nControls:\nFair lending review, model validation, override workflow, audit trail.\n```\n\nThe TPM should not let the product become a black box.",
    "commonMistakes": "A common mistake is optimizing approval speed without protecting decision quality.\n\nAnother mistake is ignoring explainability until legal review. If the team cannot explain declines, the product is not ready.\n\nA third mistake is not defining human oversight. Manual review and overrides need policy, permissions, and audit logs."
  },
  {
    "id": "tpm-ai-data-privacy-retention",
    "track": "TPM",
    "category": "AI Governance",
    "level": "Intermediate",
    "question": "How would you handle data privacy and retention for an AI feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.\n\nThe beginner mistake is thinking \"we do not train the model\" solves privacy. Even if training is disabled, the feature may still log prompts, store outputs, send data to vendors, or expose sensitive context to users or staff.\n\nThe TPM should ask:\n\n```txt\nWhat data goes into the AI system?\nWhy is each field needed?\nWhere is it stored?\nHow long is it kept?\nWho can see it?\nCan users request deletion?\nDoes a vendor process it?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI assistant summarizes support cases. The case may contain names, phone numbers, transfer IDs, document-review notes, fraud flags, and complaint language.\n\nThe product should not blindly send every field into the model. It should minimize.\n\n```txt\nNeed:\nTransfer status, public reason, customer question, safe support notes.\n\nDo not need:\nFull ID document number, internal fraud rule, analyst private note, unrelated account history.\n```\n\nPrivacy design shapes the data pipeline."
      },
      {
        "title": "Make it practical",
        "body": "Here is a privacy and retention artifact:\n\n```txt\nFeature:\nAI support case summarizer\n\nData used:\n- Customer message\n- Transfer status\n- Support-safe case notes\n- Public reason codes\n\nData excluded:\n- Full identity document number\n- Internal fraud rules\n- Sanctions match details\n- Raw payment credentials\n\nRetention:\n- Prompt and output logs kept for 30 days for quality review.\n- Audit metadata kept according to compliance policy.\n- Sensitive fields redacted before logging.\n\nAccess:\n- Support lead can review samples.\n- Product can review anonymized quality data.\n- Engineering can debug traces with masked data.\n\nVendor controls:\n- Confirm data processing terms.\n- Confirm training settings.\n- Confirm deletion/export process.\n```\n\nThe TPM should also define user-facing and internal policy language. People should know what the AI feature uses and what it does not do."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is sending all available context because it improves quality. More context can create more privacy risk.\n\nAnother mistake is logging raw prompts forever. AI logs can contain sensitive information.\n\nA third mistake is forgetting vendor data flow. If data leaves your system, contracts and controls matter."
      }
    ],
    "answer": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.",
    "reasoning": "Here is a privacy and retention artifact:\n\n```txt\nFeature:\nAI support case summarizer\n\nData used:\n- Customer message\n- Transfer status\n- Support-safe case notes\n- Public reason codes\n\nData excluded:\n- Full identity document number\n- Internal fraud rules\n- Sanctions match details\n- Raw payment credentials\n\nRetention:\n- Prompt and output logs kept for 30 days for quality review.\n- Audit metadata kept according to compliance policy.\n- Sensitive fields redacted before logging.\n\nAccess:\n- Support lead can review samples.\n- Product can review anonymized quality data.\n- Engineering can debug traces with masked data.\n\nVendor controls:\n- Confirm data processing terms.\n- Confirm training settings.\n- Confirm deletion/export process.\n```\n\nThe TPM should also define user-facing and internal policy language. People should know what the AI feature uses and what it does not do.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is \"not used for training\" not the whole privacy story?",
      "What does data minimization mean for AI?",
      "Why do AI logs need retention rules?",
      "Who should access AI traces?",
      "What vendor controls matter?"
    ],
    "interviewAnswer": "I would handle AI privacy by mapping data inputs, minimizing sensitive fields, defining retention, redaction, access controls, vendor terms, deletion process, audit logs, and user-facing transparency.\n\nA strong TPM answer shows that AI privacy covers prompts, context, outputs, logs, vendors, and lifecycle.",
    "sourceLinks": [
      {
        "label": "NIST: Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "ICO: Data protection by design and by default",
        "url": "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/"
      }
    ],
    "beginnerExplanation": "AI features often need data: prompts, documents, customer records, chat history, transaction details, support tickets, and model outputs. Privacy and retention decide what data is used, stored, shared, deleted, and audited.\n\nThe beginner mistake is thinking \"we do not train the model\" solves privacy. Even if training is disabled, the feature may still log prompts, store outputs, send data to vendors, or expose sensitive context to users or staff.\n\nThe TPM should ask:\n\n```txt\nWhat data goes into the AI system?\nWhy is each field needed?\nWhere is it stored?\nHow long is it kept?\nWho can see it?\nCan users request deletion?\nDoes a vendor process it?\n```",
    "example": "Imagine an AI assistant summarizes support cases. The case may contain names, phone numbers, transfer IDs, document-review notes, fraud flags, and complaint language.\n\nThe product should not blindly send every field into the model. It should minimize.\n\n```txt\nNeed:\nTransfer status, public reason, customer question, safe support notes.\n\nDo not need:\nFull ID document number, internal fraud rule, analyst private note, unrelated account history.\n```\n\nPrivacy design shapes the data pipeline.",
    "commonMistakes": "A common mistake is sending all available context because it improves quality. More context can create more privacy risk.\n\nAnother mistake is logging raw prompts forever. AI logs can contain sensitive information.\n\nA third mistake is forgetting vendor data flow. If data leaves your system, contracts and controls matter."
  },
  {
    "id": "tpm-ai-fraud-detection",
    "track": "TPM",
    "category": "AI & Risk",
    "level": "Intermediate",
    "question": "How would you design an AI-assisted fraud detection product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.\n\nThe beginner mistake is thinking the model is the product. The product is the full decision system: signals, model score, rules, human review, user action, appeals, monitoring, and feedback.\n\nFraud systems have two painful error types:\n\n```txt\nFalse negative:\nBad activity is allowed.\n\nFalse positive:\nA legitimate user is blocked, delayed, or reviewed.\n```\n\nThe TPM must care about both. A fraud model that blocks everyone may reduce fraud but destroy the product."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a payment app wants AI to detect suspicious transfers.\n\nA weak plan says:\n\n```txt\nUse a fraud model to block risky transfers.\n```\n\nA strong plan defines decisions:\n\n```txt\nLow risk:\nAllow automatically.\n\nMedium risk:\nStep-up verification or manual review.\n\nHigh risk:\nBlock or hold pending review.\n\nUnknown:\nUse conservative limits and gather more evidence.\n```\n\nThe model score should not be the only input. Rules, known fraud patterns, sanctions/compliance checks, user history, and operational capacity all matter."
      },
      {
        "title": "Make it practical",
        "body": "Here is an AI fraud product artifact:\n\n```txt\nGoal:\nReduce fraud loss without creating unacceptable false positives.\n\nInputs:\n- Transaction amount\n- Sender history\n- Recipient history\n- Device and IP signals\n- Velocity\n- Corridor risk\n- Failed verification attempts\n- Chargeback history\n\nDecision outputs:\n- Allow\n- Step-up verification\n- Manual review\n- Temporary hold\n- Block\n\nHuman review:\n- Show top risk signals\n- Show similar prior activity\n- Let analyst record decision reason\n- Feed confirmed outcomes back into evaluation\n\nGuardrail metrics:\n- Fraud loss\n- False-positive rate\n- Manual review backlog\n- Average review time\n- Legitimate users blocked\n- Support contacts\n```\n\nThe TPM also needs an evaluation plan:\n\n```txt\nBefore launch:\nBacktest on historical transactions.\n\nDuring beta:\nRun in shadow mode, compare model recommendation to current process.\n\nAfter launch:\nMonitor drift, false positives, fraud loss, and analyst overrides.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing only fraud loss. If false positives explode, the product harms good users.\n\nAnother mistake is launching without human review tooling. Fraud teams need explanations, queues, and decision recording.\n\nA third mistake is not monitoring model drift. Fraud patterns change as attackers adapt."
      }
    ],
    "answer": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.",
    "reasoning": "Here is an AI fraud product artifact:\n\n```txt\nGoal:\nReduce fraud loss without creating unacceptable false positives.\n\nInputs:\n- Transaction amount\n- Sender history\n- Recipient history\n- Device and IP signals\n- Velocity\n- Corridor risk\n- Failed verification attempts\n- Chargeback history\n\nDecision outputs:\n- Allow\n- Step-up verification\n- Manual review\n- Temporary hold\n- Block\n\nHuman review:\n- Show top risk signals\n- Show similar prior activity\n- Let analyst record decision reason\n- Feed confirmed outcomes back into evaluation\n\nGuardrail metrics:\n- Fraud loss\n- False-positive rate\n- Manual review backlog\n- Average review time\n- Legitimate users blocked\n- Support contacts\n```\n\nThe TPM also needs an evaluation plan:\n\n```txt\nBefore launch:\nBacktest on historical transactions.\n\nDuring beta:\nRun in shadow mode, compare model recommendation to current process.\n\nAfter launch:\nMonitor drift, false positives, fraud loss, and analyst overrides.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is the model not the whole product?",
      "What is a false positive in fraud detection?",
      "What decisions can sit between allow and block?",
      "Why is shadow mode useful?",
      "What should human reviewers see?"
    ],
    "interviewAnswer": "I would design AI fraud detection as a decision system: risk signals, model scoring, rules, human review, user actions, feedback loops, monitoring, and guardrails. I would backtest, use shadow mode, launch gradually, and track fraud loss, false positives, review backlog, drift, and customer harm.\n\nA strong answer balances risk reduction with legitimate-user experience.",
    "sourceLinks": [
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "Stripe Docs: Fraud prevention rules",
        "url": "https://docs.stripe.com/radar/rules"
      }
    ],
    "beginnerExplanation": "AI-assisted fraud detection uses models to help identify risky behavior, suspicious transactions, or accounts that need review.\n\nThe beginner mistake is thinking the model is the product. The product is the full decision system: signals, model score, rules, human review, user action, appeals, monitoring, and feedback.\n\nFraud systems have two painful error types:\n\n```txt\nFalse negative:\nBad activity is allowed.\n\nFalse positive:\nA legitimate user is blocked, delayed, or reviewed.\n```\n\nThe TPM must care about both. A fraud model that blocks everyone may reduce fraud but destroy the product.",
    "example": "Imagine a payment app wants AI to detect suspicious transfers.\n\nA weak plan says:\n\n```txt\nUse a fraud model to block risky transfers.\n```\n\nA strong plan defines decisions:\n\n```txt\nLow risk:\nAllow automatically.\n\nMedium risk:\nStep-up verification or manual review.\n\nHigh risk:\nBlock or hold pending review.\n\nUnknown:\nUse conservative limits and gather more evidence.\n```\n\nThe model score should not be the only input. Rules, known fraud patterns, sanctions/compliance checks, user history, and operational capacity all matter.",
    "commonMistakes": "A common mistake is optimizing only fraud loss. If false positives explode, the product harms good users.\n\nAnother mistake is launching without human review tooling. Fraud teams need explanations, queues, and decision recording.\n\nA third mistake is not monitoring model drift. Fraud patterns change as attackers adapt."
  },
  {
    "id": "tpm-ai-governance-risk-tiering",
    "track": "TPM",
    "category": "AI Governance",
    "level": "Intermediate",
    "question": "How would you create a risk-tiering model for AI features?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.\n\nThe beginner mistake is treating all AI features the same. An AI that rewrites marketing copy is not the same as an AI that recommends whether a customer gets credit, flags fraud, blocks an account, or drafts regulated support responses.\n\nThe mental model:\n\n```txt\nLow-risk AI:\nHelps with low-stakes productivity. Human can easily verify output.\n\nMedium-risk AI:\nInfluences user experience or business decisions, but humans can review before harm.\n\nHigh-risk AI:\nAffects money, access, eligibility, identity, compliance, safety, or legal outcomes.\n```\n\nThe TPM's job is to make the risk visible early so the team does not discover governance requirements after building the wrong product."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine three AI ideas:\n\n```txt\nIdea 1:\nSummarize internal meeting notes.\n\nIdea 2:\nDraft support replies about failed transfers.\n\nIdea 3:\nRecommend whether to block a suspicious account.\n```\n\nAll use AI, but they should not share the same launch process. The account-blocking system needs stricter review, human oversight, audit logs, false-positive monitoring, and appeal paths."
      },
      {
        "title": "Make it practical",
        "body": "Here is a risk-tiering artifact:\n\n```txt\nAI feature:\nFraud risk recommendation\n\nDecision influence:\nModel recommends allow, review, hold, or block.\n\nPotential harms:\n- Legitimate user blocked\n- Fraud allowed\n- Compliance issue missed\n- Analyst overtrusts model\n\nRisk tier:\nHigh\n\nRequired controls:\n- Human review before block\n- Model score explanation for analyst\n- Audit trail for recommendation and decision\n- False-positive monitoring\n- Drift monitoring\n- Weekly risk review during beta\n- Clear appeal or support path\n```\n\nFor lower-risk features, controls can be lighter. But every tier should have a clear reason."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is tiering based on model sophistication instead of user harm. A simple model can be high risk if it affects money or access.\n\nAnother mistake is using governance as a blocker only at the end. Tiering should happen during discovery.\n\nA third mistake is not revisiting risk after launch. A feature can become higher risk as usage grows."
      }
    ],
    "answer": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.",
    "reasoning": "Here is a risk-tiering artifact:\n\n```txt\nAI feature:\nFraud risk recommendation\n\nDecision influence:\nModel recommends allow, review, hold, or block.\n\nPotential harms:\n- Legitimate user blocked\n- Fraud allowed\n- Compliance issue missed\n- Analyst overtrusts model\n\nRisk tier:\nHigh\n\nRequired controls:\n- Human review before block\n- Model score explanation for analyst\n- Audit trail for recommendation and decision\n- False-positive monitoring\n- Drift monitoring\n- Weekly risk review during beta\n- Clear appeal or support path\n```\n\nFor lower-risk features, controls can be lighter. But every tier should have a clear reason.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why should AI features be risk-tiered?",
      "What makes an AI feature high risk?",
      "Why is user harm more important than model complexity?",
      "What controls might a high-risk AI feature need?",
      "When should the risk tier be revisited?"
    ],
    "interviewAnswer": "I would create AI risk tiers by looking at the decision the AI influences, potential user harm, data sensitivity, reversibility, human oversight, regulatory exposure, and operational impact.\n\nA strong TPM answer shows that AI governance is proportional: light enough for low-risk features, strict enough for money, identity, compliance, and access decisions.",
    "sourceLinks": [
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "Microsoft: Responsible AI principles",
        "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
      }
    ],
    "beginnerExplanation": "AI risk tiering is a way to decide how much review, testing, monitoring, and control an AI feature needs before launch.\n\nThe beginner mistake is treating all AI features the same. An AI that rewrites marketing copy is not the same as an AI that recommends whether a customer gets credit, flags fraud, blocks an account, or drafts regulated support responses.\n\nThe mental model:\n\n```txt\nLow-risk AI:\nHelps with low-stakes productivity. Human can easily verify output.\n\nMedium-risk AI:\nInfluences user experience or business decisions, but humans can review before harm.\n\nHigh-risk AI:\nAffects money, access, eligibility, identity, compliance, safety, or legal outcomes.\n```\n\nThe TPM's job is to make the risk visible early so the team does not discover governance requirements after building the wrong product.",
    "example": "Imagine three AI ideas:\n\n```txt\nIdea 1:\nSummarize internal meeting notes.\n\nIdea 2:\nDraft support replies about failed transfers.\n\nIdea 3:\nRecommend whether to block a suspicious account.\n```\n\nAll use AI, but they should not share the same launch process. The account-blocking system needs stricter review, human oversight, audit logs, false-positive monitoring, and appeal paths.",
    "commonMistakes": "A common mistake is tiering based on model sophistication instead of user harm. A simple model can be high risk if it affects money or access.\n\nAnother mistake is using governance as a blocker only at the end. Tiering should happen during discovery.\n\nA third mistake is not revisiting risk after launch. A feature can become higher risk as usage grows."
  },
  {
    "id": "tpm-ai-model-evaluation",
    "track": "TPM",
    "category": "AI Product",
    "level": "Intermediate",
    "question": "How would you evaluate whether an AI feature is ready to launch?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"\n\nThe beginner mistake is testing a few happy-path prompts and calling it done. AI systems can fail inconsistently. They can hallucinate, refuse when they should answer, answer when they should refuse, use stale context, expose sensitive data, or produce different outputs for similar inputs.\n\nA TPM should evaluate the product behavior, not just the model."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI assistant that summarizes customer complaints for a fintech support team.\n\nA weak evaluation says:\n\n```txt\nTry 20 examples. Looks good.\n```\n\nA stronger evaluation defines success:\n\n```txt\nThe summary must:\n- Identify the customer's issue\n- Preserve amount, date, and transfer ID accurately\n- Avoid inventing facts\n- Flag complaint language\n- Exclude sensitive internal-only fraud notes\n- Be short enough for an agent to scan\n```\n\nNow the team can test outputs against criteria."
      },
      {
        "title": "Make it practical",
        "body": "Here is an evaluation plan:\n\n```txt\nFeature:\nAI support case summarizer\n\nDataset:\n- 200 historical support cases\n- 50 payment delay cases\n- 50 failed verification cases\n- 50 refund or dispute cases\n- 25 angry customer cases\n- 25 cases with sensitive internal notes\n\nEvaluation criteria:\n- Factual accuracy\n- Missing critical detail\n- Hallucinated detail\n- Sensitive information leakage\n- Complaint detection\n- Clarity for support agent\n- Correct escalation flag\n\nLaunch threshold:\n- 95 percent factual accuracy on critical fields\n- 0 severe sensitive-data leaks\n- 90 percent complaint detection recall\n- Human agents prefer AI summary over current workflow in beta\n```\n\nThe TPM should also define monitoring:\n\n```txt\nPost-launch:\n- Agent edit rate\n- Agent thumbs-down rate\n- Escalation miss rate\n- Complaint miss rate\n- Sensitive leakage reports\n- Latency\n- Cost per summary\n```\n\nIf the feature is high-risk, use human approval before outputs reach customers."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is evaluating only average quality. A small number of severe failures can make the product unsafe.\n\nAnother mistake is using synthetic examples only. Real messy cases reveal issues polished examples miss.\n\nA third mistake is not refreshing evals after prompts, models, tools, or policies change."
      }
    ],
    "answer": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"",
    "reasoning": "Here is an evaluation plan:\n\n```txt\nFeature:\nAI support case summarizer\n\nDataset:\n- 200 historical support cases\n- 50 payment delay cases\n- 50 failed verification cases\n- 50 refund or dispute cases\n- 25 angry customer cases\n- 25 cases with sensitive internal notes\n\nEvaluation criteria:\n- Factual accuracy\n- Missing critical detail\n- Hallucinated detail\n- Sensitive information leakage\n- Complaint detection\n- Clarity for support agent\n- Correct escalation flag\n\nLaunch threshold:\n- 95 percent factual accuracy on critical fields\n- 0 severe sensitive-data leaks\n- 90 percent complaint detection recall\n- Human agents prefer AI summary over current workflow in beta\n```\n\nThe TPM should also define monitoring:\n\n```txt\nPost-launch:\n- Agent edit rate\n- Agent thumbs-down rate\n- Escalation miss rate\n- Complaint miss rate\n- Sensitive leakage reports\n- Latency\n- Cost per summary\n```\n\nIf the feature is high-risk, use human approval before outputs reach customers.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is AI evaluation more than trying a few prompts?",
      "What is a launch threshold?",
      "Why should evals include edge cases?",
      "What should be monitored after launch?",
      "Why might human approval be needed?"
    ],
    "interviewAnswer": "I would evaluate an AI feature by defining the intended workflow, creating representative and edge-case test sets, setting criteria and launch thresholds, measuring severe failures, testing human review, and monitoring post-launch quality, latency, cost, and harm signals.\n\nA strong TPM answer shows that AI readiness is evidence-based and workflow-specific.",
    "sourceLinks": [
      {
        "label": "OpenAI Docs: Working with evals",
        "url": "https://platform.openai.com/docs/guides/evals"
      },
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "beginnerExplanation": "AI evaluation is how the team checks whether an AI feature behaves well enough for its intended use. It is not just \"does the model seem smart?\" It is \"does the system reliably produce acceptable outputs for the real workflow, including edge cases and failures?\"\n\nThe beginner mistake is testing a few happy-path prompts and calling it done. AI systems can fail inconsistently. They can hallucinate, refuse when they should answer, answer when they should refuse, use stale context, expose sensitive data, or produce different outputs for similar inputs.\n\nA TPM should evaluate the product behavior, not just the model.",
    "example": "Imagine an AI assistant that summarizes customer complaints for a fintech support team.\n\nA weak evaluation says:\n\n```txt\nTry 20 examples. Looks good.\n```\n\nA stronger evaluation defines success:\n\n```txt\nThe summary must:\n- Identify the customer's issue\n- Preserve amount, date, and transfer ID accurately\n- Avoid inventing facts\n- Flag complaint language\n- Exclude sensitive internal-only fraud notes\n- Be short enough for an agent to scan\n```\n\nNow the team can test outputs against criteria.",
    "commonMistakes": "A common mistake is evaluating only average quality. A small number of severe failures can make the product unsafe.\n\nAnother mistake is using synthetic examples only. Real messy cases reveal issues polished examples miss.\n\nA third mistake is not refreshing evals after prompts, models, tools, or policies change."
  },
  {
    "id": "tpm-ai-observability-monitoring",
    "track": "TPM",
    "category": "AI Operations",
    "level": "Intermediate",
    "question": "What would you monitor for an AI feature in production?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.\n\nThe beginner mistake is monitoring only uptime. An AI feature can be \"up\" while giving wrong, unsafe, expensive, slow, or unhelpful answers.\n\nThe mental model:\n\n```txt\nTraditional monitoring:\nIs the system available and fast?\n\nAI monitoring:\nIs the system available, fast, useful, safe, grounded, and cost-controlled?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a fintech AI assistant that answers support questions.\n\nYou need to know:\n\n```txt\nQuality:\nAre answers accurate?\n\nGrounding:\nDid the answer use the right source?\n\nSafety:\nDid it reveal sensitive info or give prohibited advice?\n\nOperations:\nDid it escalate when needed?\n\nCost:\nAre token costs growing unexpectedly?\n\nLatency:\nAre users waiting too long?\n```\n\nWithout these, the team will not know whether the feature is helping or quietly creating risk."
      },
      {
        "title": "Make it practical",
        "body": "Here is a production monitoring plan:\n\n```txt\nFeature:\nAI transfer-status assistant\n\nOperational metrics:\n- Request volume\n- Error rate\n- Latency p50/p95\n- Tool-call failure rate\n- Retrieval failure rate\n- Cost per conversation\n\nQuality metrics:\n- Thumbs-up/down\n- Human escalation rate\n- Agent correction rate\n- Factual error reports\n- Unsupported answer rate\n\nSafety metrics:\n- Sensitive data leakage reports\n- Policy violation rate\n- Fraud/compliance escalation misses\n- Prompt injection attempts\n\nTrace data:\n- User intent\n- Retrieved documents or records\n- Model version\n- Prompt version\n- Tool calls\n- Final answer\n- Refusal or escalation reason\n```\n\nThe TPM should define alert thresholds before launch. For example, if support corrections spike after a prompt change, pause the rollout."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is not logging enough context to debug failures. If you only store the final answer, you may not know whether retrieval, prompt, model, or tool call failed.\n\nAnother mistake is monitoring user satisfaction without safety. Users may like fast answers that are wrong.\n\nA third mistake is ignoring cost. AI features can become financially unhealthy before they become technically broken."
      }
    ],
    "answer": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.",
    "reasoning": "Here is a production monitoring plan:\n\n```txt\nFeature:\nAI transfer-status assistant\n\nOperational metrics:\n- Request volume\n- Error rate\n- Latency p50/p95\n- Tool-call failure rate\n- Retrieval failure rate\n- Cost per conversation\n\nQuality metrics:\n- Thumbs-up/down\n- Human escalation rate\n- Agent correction rate\n- Factual error reports\n- Unsupported answer rate\n\nSafety metrics:\n- Sensitive data leakage reports\n- Policy violation rate\n- Fraud/compliance escalation misses\n- Prompt injection attempts\n\nTrace data:\n- User intent\n- Retrieved documents or records\n- Model version\n- Prompt version\n- Tool calls\n- Final answer\n- Refusal or escalation reason\n```\n\nThe TPM should define alert thresholds before launch. For example, if support corrections spike after a prompt change, pause the rollout.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is uptime not enough for AI monitoring?",
      "What trace data helps debug an AI failure?",
      "Why should cost be monitored?",
      "What safety metrics matter in fintech support?",
      "What should trigger a rollout pause?"
    ],
    "interviewAnswer": "I would monitor AI features across availability, latency, cost, quality, grounding, safety, escalation, tool use, and user feedback. I would log prompts, model versions, retrieved context, tool calls, outputs, and decisions so failures are debuggable.\n\nA strong answer shows that AI production health includes behavior, not just infrastructure.",
    "sourceLinks": [
      {
        "label": "Microsoft Learn: Agent monitoring dashboard",
        "url": "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/how-to-monitor-agents-dashboard"
      },
      {
        "label": "OpenAI Agents SDK: Tracing",
        "url": "https://openai.github.io/openai-agents-js/guides/tracing/"
      }
    ],
    "beginnerExplanation": "AI observability means understanding how an AI feature behaves in production: what users ask, what the system retrieves, what the model outputs, what tools it calls, how long it takes, how much it costs, and where it fails.\n\nThe beginner mistake is monitoring only uptime. An AI feature can be \"up\" while giving wrong, unsafe, expensive, slow, or unhelpful answers.\n\nThe mental model:\n\n```txt\nTraditional monitoring:\nIs the system available and fast?\n\nAI monitoring:\nIs the system available, fast, useful, safe, grounded, and cost-controlled?\n```",
    "example": "Imagine a fintech AI assistant that answers support questions.\n\nYou need to know:\n\n```txt\nQuality:\nAre answers accurate?\n\nGrounding:\nDid the answer use the right source?\n\nSafety:\nDid it reveal sensitive info or give prohibited advice?\n\nOperations:\nDid it escalate when needed?\n\nCost:\nAre token costs growing unexpectedly?\n\nLatency:\nAre users waiting too long?\n```\n\nWithout these, the team will not know whether the feature is helping or quietly creating risk.",
    "commonMistakes": "A common mistake is not logging enough context to debug failures. If you only store the final answer, you may not know whether retrieval, prompt, model, or tool call failed.\n\nAnother mistake is monitoring user satisfaction without safety. Users may like fast answers that are wrong.\n\nA third mistake is ignoring cost. AI features can become financially unhealthy before they become technically broken."
  },
  {
    "id": "tpm-ai-support-agent-regulated-fintech",
    "track": "TPM",
    "category": "AI & Customer Operations",
    "level": "Intermediate",
    "question": "How would you launch an AI support agent in a regulated fintech product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.\n\nIn regulated fintech, support answers can affect money, identity, fraud, compliance, account access, and customer trust. The beginner mistake is launching a chatbot as if wrong answers are just a UX issue. In fintech, a wrong answer can tell a user the wrong payment status, expose sensitive data, promise a refund, or mishandle a complaint.\n\nThe TPM should decide where AI is allowed to act:\n\n```txt\nAnswer only:\nAI gives general information.\n\nDraft only:\nAI drafts for a human agent.\n\nAssist:\nAI summarizes and suggests next steps.\n\nAct:\nAI changes account state or triggers workflows.\n```\n\nThe risk increases sharply as the AI moves from answering to acting."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a customer asks: \"Where is my transfer?\"\n\nA weak AI agent might respond from generic policy:\n\n```txt\nMost transfers arrive in 1-3 days.\n```\n\nBut this customer's transfer may be failed, pending compliance review, delayed by a partner, or already paid. The AI must use trusted system data and know what it is allowed to say.\n\nA safer version:\n\n```txt\nI found your transfer. It is still pending with our payout partner.\nYou do not need to send it again. We will update the status here when the partner confirms the final result.\n```\n\nThat answer needs retrieval, permissions, state awareness, and safety rules."
      },
      {
        "title": "Make it practical",
        "body": "Here is a launch artifact:\n\n```txt\nUse case:\nAI support assistant for transfer status questions\n\nAllowed:\n- Explain visible transfer status\n- Summarize support case history\n- Draft replies for human approval\n- Link to help articles\n\nNot allowed:\n- Promise refunds\n- Explain suspicious activity rules\n- Reveal fraud or sanctions logic\n- Change KYC status\n- Close complaints\n- Move money\n\nRequired data:\n- Transfer status\n- Public status reason\n- Expected next update\n- Support-safe macro\n- User authentication state\n\nGuardrails:\n- Use only approved knowledge sources\n- Refuse account-specific answers if user is not authenticated\n- Escalate compliance, fraud, legal, or complaint cases to humans\n- Log AI response, sources, and confidence\n```\n\nEvaluation should include real support scenarios:\n\n```txt\nTest cases:\n- Pending transfer\n- Failed transfer\n- Possible duplicate payment\n- KYC review\n- Sanctions review\n- Refund request\n- Complaint language\n- Angry customer\n- Unauthenticated account question\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is measuring only deflection. If the bot reduces tickets by giving wrong answers, that is not success.\n\nAnother mistake is letting AI answer from stale or generic knowledge when account state matters.\n\nA third mistake is skipping escalation design. Regulated support needs clear human handoff paths."
      }
    ],
    "answer": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.",
    "reasoning": "Here is a launch artifact:\n\n```txt\nUse case:\nAI support assistant for transfer status questions\n\nAllowed:\n- Explain visible transfer status\n- Summarize support case history\n- Draft replies for human approval\n- Link to help articles\n\nNot allowed:\n- Promise refunds\n- Explain suspicious activity rules\n- Reveal fraud or sanctions logic\n- Change KYC status\n- Close complaints\n- Move money\n\nRequired data:\n- Transfer status\n- Public status reason\n- Expected next update\n- Support-safe macro\n- User authentication state\n\nGuardrails:\n- Use only approved knowledge sources\n- Refuse account-specific answers if user is not authenticated\n- Escalate compliance, fraud, legal, or complaint cases to humans\n- Log AI response, sources, and confidence\n```\n\nEvaluation should include real support scenarios:\n\n```txt\nTest cases:\n- Pending transfer\n- Failed transfer\n- Possible duplicate payment\n- KYC review\n- Sanctions review\n- Refund request\n- Complaint language\n- Angry customer\n- Unauthenticated account question\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is fintech support higher risk than generic support?",
      "What is the difference between draft-only and act?",
      "What should the AI support agent not be allowed to do?",
      "Why does authentication matter?",
      "What metrics should be watched besides ticket deflection?"
    ],
    "interviewAnswer": "I would launch an AI support agent by choosing a narrow use case, defining allowed and prohibited actions, grounding answers in trusted data, adding human escalation, testing risky scenarios, logging outputs, and monitoring accuracy, escalation rate, complaints, and customer harm.\n\nA strong TPM answer treats AI support as an operating system with permissions, not just a chatbot.",
    "sourceLinks": [
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "Microsoft: Responsible AI principles",
        "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
      }
    ],
    "beginnerExplanation": "An AI support agent can answer customer questions, summarize cases, draft replies, or help support agents work faster.\n\nIn regulated fintech, support answers can affect money, identity, fraud, compliance, account access, and customer trust. The beginner mistake is launching a chatbot as if wrong answers are just a UX issue. In fintech, a wrong answer can tell a user the wrong payment status, expose sensitive data, promise a refund, or mishandle a complaint.\n\nThe TPM should decide where AI is allowed to act:\n\n```txt\nAnswer only:\nAI gives general information.\n\nDraft only:\nAI drafts for a human agent.\n\nAssist:\nAI summarizes and suggests next steps.\n\nAct:\nAI changes account state or triggers workflows.\n```\n\nThe risk increases sharply as the AI moves from answering to acting.",
    "example": "Imagine a customer asks: \"Where is my transfer?\"\n\nA weak AI agent might respond from generic policy:\n\n```txt\nMost transfers arrive in 1-3 days.\n```\n\nBut this customer's transfer may be failed, pending compliance review, delayed by a partner, or already paid. The AI must use trusted system data and know what it is allowed to say.\n\nA safer version:\n\n```txt\nI found your transfer. It is still pending with our payout partner.\nYou do not need to send it again. We will update the status here when the partner confirms the final result.\n```\n\nThat answer needs retrieval, permissions, state awareness, and safety rules.",
    "commonMistakes": "A common mistake is measuring only deflection. If the bot reduces tickets by giving wrong answers, that is not success.\n\nAnother mistake is letting AI answer from stale or generic knowledge when account state matters.\n\nA third mistake is skipping escalation design. Regulated support needs clear human handoff paths."
  },
  {
    "id": "tpm-ai-vendor-evaluation",
    "track": "TPM",
    "category": "AI Product",
    "level": "Intermediate",
    "question": "How would you evaluate an AI vendor for a fintech product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.\n\nThe beginner mistake is evaluating only demo quality. A demo can look impressive while the vendor fails on latency, cost, privacy, auditability, uptime, eval tooling, data controls, or security.\n\nFor fintech, vendor questions are sharper because the product may touch money, identity, support, fraud, or compliance."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a vendor offers an AI support agent for financial services.\n\nA weak evaluation asks:\n\n```txt\nCan it answer our help center questions?\n```\n\nA stronger evaluation asks:\n\n```txt\nCan it answer accurately from approved sources?\nCan it refuse prohibited topics?\nCan it avoid exposing sensitive account data?\nCan it escalate complaints and fraud cases?\nCan we audit what it said and why?\nCan we control data retention?\nCan it meet latency and uptime needs?\nCan we leave the vendor later?\n```\n\nThe TPM should test the riskiest assumptions, not the prettiest demo path."
      },
      {
        "title": "Make it practical",
        "body": "Here is an AI vendor scorecard:\n\n```txt\nProduct fit:\n- Supported use cases\n- Quality on our real cases\n- Multilingual support\n- Human handoff\n\nRisk and safety:\n- Refusal behavior\n- Prompt injection handling\n- Sensitive data handling\n- Audit logs\n- Red-team results\n\nData and compliance:\n- Data retention\n- Training-on-customer-data controls\n- Subprocessors\n- Region controls\n- Deletion and export\n\nOperations:\n- SLA\n- Latency\n- Incident communication\n- Monitoring dashboard\n- Support escalation\n\nCommercials:\n- Pricing model\n- Cost at projected volume\n- Overages\n- Contract lock-in\n\nExit:\n- Data export\n- Prompt/config export\n- Fallback provider\n- Migration effort\n```\n\nThe proof of concept should use real scenarios:\n\n```txt\nPOC cases:\n- Failed transfer\n- KYC pending\n- Refund request\n- Sanctions review\n- Angry complaint\n- Prompt injection attempt\n- Unauthenticated account question\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is evaluating vendors with sanitized test cases. Real support and risk cases are messy.\n\nAnother mistake is ignoring data terms. AI vendors may have different retention, training, and logging policies.\n\nA third mistake is not planning exit. AI vendor lock-in can be hidden in prompts, tools, eval datasets, and workflows."
      }
    ],
    "answer": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.",
    "reasoning": "Here is an AI vendor scorecard:\n\n```txt\nProduct fit:\n- Supported use cases\n- Quality on our real cases\n- Multilingual support\n- Human handoff\n\nRisk and safety:\n- Refusal behavior\n- Prompt injection handling\n- Sensitive data handling\n- Audit logs\n- Red-team results\n\nData and compliance:\n- Data retention\n- Training-on-customer-data controls\n- Subprocessors\n- Region controls\n- Deletion and export\n\nOperations:\n- SLA\n- Latency\n- Incident communication\n- Monitoring dashboard\n- Support escalation\n\nCommercials:\n- Pricing model\n- Cost at projected volume\n- Overages\n- Contract lock-in\n\nExit:\n- Data export\n- Prompt/config export\n- Fallback provider\n- Migration effort\n```\n\nThe proof of concept should use real scenarios:\n\n```txt\nPOC cases:\n- Failed transfer\n- KYC pending\n- Refund request\n- Sanctions review\n- Angry complaint\n- Prompt injection attempt\n- Unauthenticated account question\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is demo quality not enough?",
      "What should an AI vendor POC test?",
      "What data terms matter?",
      "Why is auditability important in fintech AI?",
      "What makes AI vendor lock-in painful?"
    ],
    "interviewAnswer": "I would evaluate an AI vendor across product quality, safety, privacy, compliance, auditability, latency, uptime, cost, data controls, operational support, and exit path. I would run a POC on real high-risk scenarios before recommending adoption.\n\nA strong answer treats AI vendor choice as a product, risk, and operating decision.",
    "sourceLinks": [
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "OWASP: Top 10 for Large Language Model Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      }
    ],
    "beginnerExplanation": "AI vendor evaluation is deciding whether an external AI provider is reliable, safe, compliant, and useful enough for your product.\n\nThe beginner mistake is evaluating only demo quality. A demo can look impressive while the vendor fails on latency, cost, privacy, auditability, uptime, eval tooling, data controls, or security.\n\nFor fintech, vendor questions are sharper because the product may touch money, identity, support, fraud, or compliance.",
    "example": "Imagine a vendor offers an AI support agent for financial services.\n\nA weak evaluation asks:\n\n```txt\nCan it answer our help center questions?\n```\n\nA stronger evaluation asks:\n\n```txt\nCan it answer accurately from approved sources?\nCan it refuse prohibited topics?\nCan it avoid exposing sensitive account data?\nCan it escalate complaints and fraud cases?\nCan we audit what it said and why?\nCan we control data retention?\nCan it meet latency and uptime needs?\nCan we leave the vendor later?\n```\n\nThe TPM should test the riskiest assumptions, not the prettiest demo path.",
    "commonMistakes": "A common mistake is evaluating vendors with sanitized test cases. Real support and risk cases are messy.\n\nAnother mistake is ignoring data terms. AI vendors may have different retention, training, and logging policies.\n\nA third mistake is not planning exit. AI vendor lock-in can be hidden in prompts, tools, eval datasets, and workflows."
  },
  {
    "id": "tpm-ambiguous-executive-ask",
    "track": "TPM",
    "category": "Product Strategy",
    "level": "Intermediate",
    "question": "How would you handle an ambiguous executive request?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.\n\nExamples:\n\n```txt\n\"We need an AI strategy.\"\n\"Make onboarding enterprise-ready.\"\n\"Improve reliability.\"\n\"Monetize the API.\"\n\"Reduce operational risk.\"\n```\n\nThe beginner mistake is either obeying literally or pushing back too quickly. A stronger TPM treats the request as a signal. The executive may be pointing at a real business concern, but the team still needs clarity before committing roadmap capacity.\n\nThe TPM's job is to turn ambiguity into a decision:\n\n```txt\nWhat outcome are we trying to create?\nWhy now?\nFor whom?\nWhat evidence do we have?\nWhat options exist?\nWhat tradeoffs are acceptable?\nHow will we know it worked?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the CEO says, \"We need to make the product enterprise-ready this quarter.\"\n\nA weak response is:\n\n```txt\nAdd SSO, audit logs, custom roles, and admin dashboard.\n```\n\nThose may be useful, but the team does not yet know the goal. Enterprise-ready for whom? A bank? A startup with 20 employees? A procurement checklist? A signed customer?\n\nA stronger TPM clarifies:\n\n```txt\nPossible meanings:\n- Close one named enterprise deal\n- Pass security review\n- Support teams and permissions\n- Improve admin controls\n- Meet compliance procurement requirements\n- Support higher-volume usage\n```\n\nEach meaning leads to a different plan."
      },
      {
        "title": "Make it practical",
        "body": "Here is a clarification memo:\n\n```txt\nRequest:\nMake the product enterprise-ready this quarter.\n\nClarifying questions:\n1. Which customer or segment is driving this?\n2. What deal, risk, or company goal makes this urgent?\n3. Which procurement or security blockers exist today?\n4. What must be true by end of quarter?\n5. What can wait?\n\nCurrent evidence:\n- Two enterprise prospects asked for SSO and audit logs.\n- One existing customer asked for role-based approvals.\n- Security questionnaire flagged data retention and admin access.\n\nOptions:\n\nOption A: Deal unblocker\nBuild SSO, audit log export, and security documentation.\n\nOption B: Admin foundation\nBuild organization model, roles, permissions, and audit events.\n\nOption C: Enterprise platform\nBuild SSO, custom roles, audit logs, approvals, data retention, and SCIM.\n\nRecommendation:\nChoose Option B plus security documentation this quarter.\n\nWhy:\nPermissions and auditability unlock multiple enterprise asks and reduce future rework. Full enterprise platform is too large for one quarter.\n```\n\nThis turns a vague request into options leadership can actually choose between."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is pretending ambiguity is clarity because the request came from an executive.\n\nAnother mistake is asking only \"what do you want us to build?\" Better questions uncover the business outcome and constraint.\n\nA third mistake is turning every executive request into an emergency. Some are urgent. Some need discovery. Some should be declined or reframed."
      }
    ],
    "answer": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.",
    "reasoning": "Here is a clarification memo:\n\n```txt\nRequest:\nMake the product enterprise-ready this quarter.\n\nClarifying questions:\n1. Which customer or segment is driving this?\n2. What deal, risk, or company goal makes this urgent?\n3. Which procurement or security blockers exist today?\n4. What must be true by end of quarter?\n5. What can wait?\n\nCurrent evidence:\n- Two enterprise prospects asked for SSO and audit logs.\n- One existing customer asked for role-based approvals.\n- Security questionnaire flagged data retention and admin access.\n\nOptions:\n\nOption A: Deal unblocker\nBuild SSO, audit log export, and security documentation.\n\nOption B: Admin foundation\nBuild organization model, roles, permissions, and audit events.\n\nOption C: Enterprise platform\nBuild SSO, custom roles, audit logs, approvals, data retention, and SCIM.\n\nRecommendation:\nChoose Option B plus security documentation this quarter.\n\nWhy:\nPermissions and auditability unlock multiple enterprise asks and reduce future rework. Full enterprise platform is too large for one quarter.\n```\n\nThis turns a vague request into options leadership can actually choose between.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why should an ambiguous executive request be treated as a signal?",
      "What questions help clarify the real outcome?",
      "Why is \"enterprise-ready\" not specific enough?",
      "What should a clarification memo include?",
      "How can a TPM push back without being dismissive?"
    ],
    "interviewAnswer": "I would handle an ambiguous executive request by clarifying the business outcome, customer or segment, urgency, evidence, constraints, options, tradeoffs, and success metrics. Then I would present a recommendation and confirm the decision.\n\nA strong answer shows that the TPM can respect leadership direction while still protecting the team from vague execution.",
    "sourceLinks": [
      {
        "label": "Atlassian: Better team decision making",
        "url": "https://www.atlassian.com/team-playbook/examples/making-decisions"
      },
      {
        "label": "ProductPlan: Product vision vs product strategy",
        "url": "https://www.productplan.com/learn/product-vision-vs-product-strategy/"
      }
    ],
    "beginnerExplanation": "An ambiguous executive request is a direction from leadership that sounds important but is not yet specific enough to build.\n\nExamples:\n\n```txt\n\"We need an AI strategy.\"\n\"Make onboarding enterprise-ready.\"\n\"Improve reliability.\"\n\"Monetize the API.\"\n\"Reduce operational risk.\"\n```\n\nThe beginner mistake is either obeying literally or pushing back too quickly. A stronger TPM treats the request as a signal. The executive may be pointing at a real business concern, but the team still needs clarity before committing roadmap capacity.\n\nThe TPM's job is to turn ambiguity into a decision:\n\n```txt\nWhat outcome are we trying to create?\nWhy now?\nFor whom?\nWhat evidence do we have?\nWhat options exist?\nWhat tradeoffs are acceptable?\nHow will we know it worked?\n```",
    "example": "Imagine the CEO says, \"We need to make the product enterprise-ready this quarter.\"\n\nA weak response is:\n\n```txt\nAdd SSO, audit logs, custom roles, and admin dashboard.\n```\n\nThose may be useful, but the team does not yet know the goal. Enterprise-ready for whom? A bank? A startup with 20 employees? A procurement checklist? A signed customer?\n\nA stronger TPM clarifies:\n\n```txt\nPossible meanings:\n- Close one named enterprise deal\n- Pass security review\n- Support teams and permissions\n- Improve admin controls\n- Meet compliance procurement requirements\n- Support higher-volume usage\n```\n\nEach meaning leads to a different plan.",
    "commonMistakes": "A common mistake is pretending ambiguity is clarity because the request came from an executive.\n\nAnother mistake is asking only \"what do you want us to build?\" Better questions uncover the business outcome and constraint.\n\nA third mistake is turning every executive request into an emergency. Some are urgent. Some need discovery. Some should be declined or reframed."
  },
  {
    "id": "tpm-aml-transaction-monitoring",
    "track": "TPM",
    "category": "Compliance & Risk",
    "level": "Intermediate",
    "question": "How would you define requirements for AML transaction monitoring?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.\n\nThe beginner mistake is thinking monitoring is just a list of rules like \"flag transactions over $10,000.\" Real monitoring looks for patterns, context, risk, customer history, geography, velocity, counterparties, and unusual behavior.\n\nA TPM does not decide legal obligations alone. Compliance owns policy. But the TPM helps turn policy into a product and system workflow that can be built, tested, operated, and audited."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance product. A user sends five transfers just below a review threshold to different recipients in a short period.\n\nThat pattern may be normal for a business user, suspicious for a new consumer, or explainable during a family emergency. The product must route it to the right review, not automatically accuse the user.\n\nA monitoring system needs:\n\n```txt\nSignals:\nAmount, velocity, corridor, recipient count, device, funding source, user age, risk tier.\n\nRules:\nThresholds, combinations, patterns, and escalation logic.\n\nCases:\nA place for analysts to review alerts and record decisions.\n\nOutcomes:\nClear, release, request information, limit account, file report, or escalate.\n```"
      },
      {
        "title": "Make it practical",
        "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nAML transaction monitoring for remittance\n\nAlert examples:\n- Rapid increase in transfer volume\n- Multiple recipients added in one day\n- Repeated transfers just below review threshold\n- High-risk corridor plus new device\n- Sender and recipient data mismatch\n\nCase workflow:\n1. Alert generated\n2. Analyst reviews customer profile and transaction history\n3. Analyst records disposition\n4. Product action applied if needed\n5. Audit trail preserved\n\nAnalyst tools:\n- User profile\n- KYC/KYB status\n- Transaction history\n- Recipient graph\n- Device and IP signals\n- Previous alerts\n- Notes and evidence\n```\n\nThe TPM also needs to define metrics:\n\n```txt\nOperational metrics:\n- Alert volume\n- Case backlog\n- Average review time\n- Escalation rate\n- False-positive rate\n- Repeat alert rate\n\nRisk metrics:\n- Confirmed suspicious cases\n- Loss prevented\n- Policy breaches\n- Late review count\n```\n\nThe product should avoid telling users \"you triggered AML monitoring.\" User-facing copy should be safe and plain, such as: \"We need more information before this transfer can continue.\""
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is creating too many alerts. If analysts drown in low-quality alerts, real risk may be missed.\n\nAnother mistake is not designing case management. Detection without review workflow is not operationally useful.\n\nA third mistake is exposing sensitive compliance logic to users. The product can explain next steps without revealing monitoring rules."
      }
    ],
    "answer": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.",
    "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nAML transaction monitoring for remittance\n\nAlert examples:\n- Rapid increase in transfer volume\n- Multiple recipients added in one day\n- Repeated transfers just below review threshold\n- High-risk corridor plus new device\n- Sender and recipient data mismatch\n\nCase workflow:\n1. Alert generated\n2. Analyst reviews customer profile and transaction history\n3. Analyst records disposition\n4. Product action applied if needed\n5. Audit trail preserved\n\nAnalyst tools:\n- User profile\n- KYC/KYB status\n- Transaction history\n- Recipient graph\n- Device and IP signals\n- Previous alerts\n- Notes and evidence\n```\n\nThe TPM also needs to define metrics:\n\n```txt\nOperational metrics:\n- Alert volume\n- Case backlog\n- Average review time\n- Escalation rate\n- False-positive rate\n- Repeat alert rate\n\nRisk metrics:\n- Confirmed suspicious cases\n- Loss prevented\n- Policy breaches\n- Late review count\n```\n\nThe product should avoid telling users \"you triggered AML monitoring.\" User-facing copy should be safe and plain, such as: \"We need more information before this transfer can continue.\"",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does AML transaction monitoring try to detect?",
      "Why are patterns more useful than single thresholds?",
      "What should an analyst case view include?",
      "Why is false-positive rate important?",
      "Why should user-facing copy avoid exposing monitoring logic?"
    ],
    "interviewAnswer": "I would define AML monitoring requirements with compliance by mapping risk signals, alert rules, case workflow, analyst tools, dispositions, user actions, audit trail, and metrics like alert volume, backlog, review time, false positives, and confirmed suspicious cases.\n\nA strong TPM answer shows that monitoring is both a detection system and an operations product.",
    "sourceLinks": [
      {
        "label": "eCFR: MSB suspicious activity reporting",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022/subpart-C/section-1022.320"
      },
      {
        "label": "eCFR: Reports by financial institutions of suspicious transactions",
        "url": "https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.320"
      }
    ],
    "beginnerExplanation": "AML transaction monitoring is the process of detecting activity that may indicate money laundering, fraud, sanctions evasion, or other financial crime.\n\nThe beginner mistake is thinking monitoring is just a list of rules like \"flag transactions over $10,000.\" Real monitoring looks for patterns, context, risk, customer history, geography, velocity, counterparties, and unusual behavior.\n\nA TPM does not decide legal obligations alone. Compliance owns policy. But the TPM helps turn policy into a product and system workflow that can be built, tested, operated, and audited.",
    "example": "Imagine a remittance product. A user sends five transfers just below a review threshold to different recipients in a short period.\n\nThat pattern may be normal for a business user, suspicious for a new consumer, or explainable during a family emergency. The product must route it to the right review, not automatically accuse the user.\n\nA monitoring system needs:\n\n```txt\nSignals:\nAmount, velocity, corridor, recipient count, device, funding source, user age, risk tier.\n\nRules:\nThresholds, combinations, patterns, and escalation logic.\n\nCases:\nA place for analysts to review alerts and record decisions.\n\nOutcomes:\nClear, release, request information, limit account, file report, or escalate.\n```",
    "commonMistakes": "A common mistake is creating too many alerts. If analysts drown in low-quality alerts, real risk may be missed.\n\nAnother mistake is not designing case management. Detection without review workflow is not operationally useful.\n\nA third mistake is exposing sensitive compliance logic to users. The product can explain next steps without revealing monitoring rules."
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
    "id": "tpm-api-product-design",
    "track": "TPM",
    "category": "API & Partner Integration",
    "level": "Intermediate",
    "question": "How would you design an API product from scratch?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.\n\nThe beginner mistake is thinking API design starts with endpoints. It does not. It starts with the job the API helps another system complete. What action is the partner trying to perform? What data do they need? What errors will they see? How will they test? How will they know whether the integration is working?\n\nAn API product needs a clear promise. For example: \"This API lets partners create payouts, track payout status, receive status updates, and reconcile final outcomes.\" That promise is more useful than starting with `/v1/payouts`."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a company wants to expose a payout API to partners.\n\nThe API needs more than a create endpoint. A partner needs to:\n\n1. Authenticate safely.\n2. Create a payout request.\n3. Avoid duplicate payouts if they retry.\n4. Know whether the payout is accepted, processing, paid, failed, reversed, or unknown.\n5. Receive webhook events when status changes.\n6. Query status later.\n7. Understand errors.\n8. Test in a sandbox.\n9. Reconcile their records with yours.\n\nThat means the TPM should think in resources, workflows, states, and operating needs.\n\n```txt\nCore resources\n- Partner\n- Recipient\n- Payout\n- Payout status event\n- Reconciliation report\n\nCore actions\n- Create payout\n- Retrieve payout\n- Cancel payout if still cancellable\n- Receive status webhook\n- List reports\n```\n\nNow engineering can discuss endpoints, schemas, auth, rate limits, and versioning with a real product shape."
      },
      {
        "title": "Make it practical",
        "body": "I would define the API product in layers.\n\nFirst, define the user and use case. Is this API for public developers, strategic partners, internal teams, or one integration?\n\nSecond, define the resource model. What are the nouns? What state transitions are allowed? Which fields are required? Which fields are returned?\n\nThird, define reliability behavior. What happens on timeout? Can clients retry? Is the API idempotent? Are webhooks guaranteed, duplicated, delayed, or best effort?\n\nFourth, define developer experience. The API needs docs, examples, sandbox data, test credentials, error-code explanations, SDK decisions, changelog, and support path.\n\nFifth, define operations. What dashboards show API health? Who sees partner errors? How are rate limits enforced? What happens during incidents?\n\n```txt\nAPI readiness checklist\n\n- Authentication model approved.\n- Resource names and status model documented.\n- Error codes written in developer-friendly language.\n- Idempotency behavior tested.\n- Webhook retry behavior documented.\n- Sandbox supports happy and failure paths.\n- Monitoring includes latency, error rate, webhook delivery, and partner-level failures.\n- Support knows how to identify a partner request by ID.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is designing around internal database tables. API users do not care how your tables are shaped. They need stable product concepts.\n\nAnother mistake is treating docs as an afterthought. For an API product, documentation is part of the product experience.\n\nA third mistake is ignoring failure behavior. A partner needs to know what to do when a request times out, a webhook is late, or a status is unknown."
      }
    ],
    "answer": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.",
    "reasoning": "I would define the API product in layers.\n\nFirst, define the user and use case. Is this API for public developers, strategic partners, internal teams, or one integration?\n\nSecond, define the resource model. What are the nouns? What state transitions are allowed? Which fields are required? Which fields are returned?\n\nThird, define reliability behavior. What happens on timeout? Can clients retry? Is the API idempotent? Are webhooks guaranteed, duplicated, delayed, or best effort?\n\nFourth, define developer experience. The API needs docs, examples, sandbox data, test credentials, error-code explanations, SDK decisions, changelog, and support path.\n\nFifth, define operations. What dashboards show API health? Who sees partner errors? How are rate limits enforced? What happens during incidents?\n\n```txt\nAPI readiness checklist\n\n- Authentication model approved.\n- Resource names and status model documented.\n- Error codes written in developer-friendly language.\n- Idempotency behavior tested.\n- Webhook retry behavior documented.\n- Sandbox supports happy and failure paths.\n- Monitoring includes latency, error rate, webhook delivery, and partner-level failures.\n- Support knows how to identify a partner request by ID.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Who are the users of an API product?",
      "Why should API design start with workflows instead of endpoints?",
      "What does idempotency protect against?",
      "Why do webhook behavior and retry rules matter?",
      "What should be in an API readiness checklist?"
    ],
    "interviewAnswer": "I would design an API product by starting with the developer or partner workflow, then defining resources, state transitions, request and response contracts, errors, authentication, idempotency, webhooks, versioning, documentation, sandbox, monitoring, and support paths.\n\nA strong TPM answer treats the API as a product experience, not just a set of endpoints. The API must be understandable, reliable, testable, operable, and safe to change.",
    "sourceLinks": [
      {
        "label": "Google Cloud: API design guide",
        "url": "https://cloud.google.com/apis/design"
      },
      {
        "label": "Microsoft Azure: Web API design best practices",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
      }
    ],
    "beginnerExplanation": "An API product is a product other builders use. The users are developers, partners, internal teams, support teams, and sometimes compliance or operations teams who rely on the API's behavior.\n\nThe beginner mistake is thinking API design starts with endpoints. It does not. It starts with the job the API helps another system complete. What action is the partner trying to perform? What data do they need? What errors will they see? How will they test? How will they know whether the integration is working?\n\nAn API product needs a clear promise. For example: \"This API lets partners create payouts, track payout status, receive status updates, and reconcile final outcomes.\" That promise is more useful than starting with `/v1/payouts`.",
    "example": "Imagine a company wants to expose a payout API to partners.\n\nThe API needs more than a create endpoint. A partner needs to:\n\n1. Authenticate safely.\n2. Create a payout request.\n3. Avoid duplicate payouts if they retry.\n4. Know whether the payout is accepted, processing, paid, failed, reversed, or unknown.\n5. Receive webhook events when status changes.\n6. Query status later.\n7. Understand errors.\n8. Test in a sandbox.\n9. Reconcile their records with yours.\n\nThat means the TPM should think in resources, workflows, states, and operating needs.\n\n```txt\nCore resources\n- Partner\n- Recipient\n- Payout\n- Payout status event\n- Reconciliation report\n\nCore actions\n- Create payout\n- Retrieve payout\n- Cancel payout if still cancellable\n- Receive status webhook\n- List reports\n```\n\nNow engineering can discuss endpoints, schemas, auth, rate limits, and versioning with a real product shape.",
    "commonMistakes": "A common mistake is designing around internal database tables. API users do not care how your tables are shaped. They need stable product concepts.\n\nAnother mistake is treating docs as an afterthought. For an API product, documentation is part of the product experience.\n\nA third mistake is ignoring failure behavior. A partner needs to know what to do when a request times out, a webhook is late, or a status is unknown."
  },
  {
    "id": "tpm-api-versioning",
    "track": "TPM",
    "category": "API & Partner Integration",
    "level": "Intermediate",
    "question": "How would you handle API versioning and backwards compatibility?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "API versioning is how you change an API without breaking the systems that already depend on it.\n\nThis matters because API users are not inside your sprint. A partner may have built code around your current fields, errors, statuses, and assumptions. If you change those suddenly, their product may break even if your own product still works.\n\nBackwards compatibility means old clients can keep working after you ship a change. A compatible change adds something without changing the meaning of what already exists. A breaking change removes, renames, changes type, changes required behavior, or changes the meaning of a field."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a payout API returns this:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000\n}\n```\n\nAdding a new optional field is usually safe:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000,\n  \"paid_at\": \"2026-05-14T10:00:00Z\"\n}\n```\n\nBut changing `amount` from cents to dollars is breaking. Changing `status` from `\"paid\"` to `\"completed\"` is breaking. Making a previously optional field required is breaking.\n\nThe TPM has to help the team separate \"we want cleaner design\" from \"partners can safely absorb this change.\""
      },
      {
        "title": "Make it practical",
        "body": "I would manage API changes with a compatibility policy.\n\n```txt\nSafe changes\n- Add optional response fields.\n- Add new endpoints.\n- Add new optional request parameters.\n- Add new webhook event types if consumers can ignore unknown events.\n\nRisky or breaking changes\n- Remove fields.\n- Rename fields.\n- Change field type.\n- Change status meanings.\n- Change required parameters.\n- Change error-code behavior.\n- Change authentication behavior.\n```\n\nThen I would define the migration plan.\n\n```txt\nMigration plan\n\n1. Announce the new version and what changed.\n2. Provide docs and before/after examples.\n3. Let partners test in sandbox.\n4. Keep the old version available for a defined period.\n5. Track partner adoption.\n6. Send reminders before deprecation.\n7. Provide support for high-value or high-risk partners.\n8. Remove the old version only after the agreed deprecation window.\n```\n\nThe exact versioning method can vary: URL versions, headers, date-based versions, or account-level pinned versions. The product decision is less about which style sounds best and more about whether partners can understand, test, and adopt changes safely."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is assuming a small change cannot break anyone. Small schema changes can break strict clients.\n\nAnother mistake is versioning too late. If the team waits until the first breaking change, partners may already depend on undocumented behavior.\n\nA third mistake is forgetting webhooks. Webhook payloads and event names are API contracts too."
      }
    ],
    "answer": "API versioning is how you change an API without breaking the systems that already depend on it.",
    "reasoning": "I would manage API changes with a compatibility policy.\n\n```txt\nSafe changes\n- Add optional response fields.\n- Add new endpoints.\n- Add new optional request parameters.\n- Add new webhook event types if consumers can ignore unknown events.\n\nRisky or breaking changes\n- Remove fields.\n- Rename fields.\n- Change field type.\n- Change status meanings.\n- Change required parameters.\n- Change error-code behavior.\n- Change authentication behavior.\n```\n\nThen I would define the migration plan.\n\n```txt\nMigration plan\n\n1. Announce the new version and what changed.\n2. Provide docs and before/after examples.\n3. Let partners test in sandbox.\n4. Keep the old version available for a defined period.\n5. Track partner adoption.\n6. Send reminders before deprecation.\n7. Provide support for high-value or high-risk partners.\n8. Remove the old version only after the agreed deprecation window.\n```\n\nThe exact versioning method can vary: URL versions, headers, date-based versions, or account-level pinned versions. The product decision is less about which style sounds best and more about whether partners can understand, test, and adopt changes safely.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What makes an API change breaking?",
      "Why is adding an optional response field usually safer than renaming one?",
      "What should be in a deprecation plan?",
      "Why do webhook payloads need compatibility thinking?",
      "What adoption signals would you track during migration?"
    ],
    "interviewAnswer": "I would handle API versioning by defining a compatibility policy, separating safe additive changes from breaking changes, and creating a migration plan with docs, sandbox support, adoption tracking, deprecation timelines, and partner communication.\n\nA strong answer shows respect for external dependencies. The goal is not only to ship a cleaner API. It is to change the API without surprising or breaking the systems that rely on it.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: Versioning",
        "url": "https://docs.stripe.com/api/versioning"
      },
      {
        "label": "Microsoft Azure: API versioning guidance",
        "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api"
      }
    ],
    "beginnerExplanation": "API versioning is how you change an API without breaking the systems that already depend on it.\n\nThis matters because API users are not inside your sprint. A partner may have built code around your current fields, errors, statuses, and assumptions. If you change those suddenly, their product may break even if your own product still works.\n\nBackwards compatibility means old clients can keep working after you ship a change. A compatible change adds something without changing the meaning of what already exists. A breaking change removes, renames, changes type, changes required behavior, or changes the meaning of a field.",
    "example": "Imagine a payout API returns this:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000\n}\n```\n\nAdding a new optional field is usually safe:\n\n```json\n{\n  \"id\": \"po_123\",\n  \"status\": \"paid\",\n  \"amount\": 5000,\n  \"paid_at\": \"2026-05-14T10:00:00Z\"\n}\n```\n\nBut changing `amount` from cents to dollars is breaking. Changing `status` from `\"paid\"` to `\"completed\"` is breaking. Making a previously optional field required is breaking.\n\nThe TPM has to help the team separate \"we want cleaner design\" from \"partners can safely absorb this change.\"",
    "commonMistakes": "A common mistake is assuming a small change cannot break anyone. Small schema changes can break strict clients.\n\nAnother mistake is versioning too late. If the team waits until the first breaking change, partners may already depend on undocumented behavior.\n\nA third mistake is forgetting webhooks. Webhook payloads and event names are API contracts too."
  },
  {
    "id": "tpm-build-versus-buy",
    "track": "TPM",
    "category": "Technical Strategy",
    "level": "Intermediate",
    "question": "How would you make a build versus buy decision?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.\n\nThe beginner mistake is reducing the decision to cost. Buying can look cheaper because the first invoice is smaller than a build estimate. Building can look cheaper because the team ignores maintenance, support, compliance, uptime, security, and opportunity cost.\n\nThe better question is: what capability should this company own, and what capability should it rent?\n\nIf the capability differentiates the product, gives strategic control, or is tightly tied to the customer promise, building may make sense. If it is a commodity capability where vendors are mature and switching risk is manageable, buying may be better."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a fintech company deciding whether to build identity verification or buy a vendor.\n\nBuying may give faster launch, tested document capture, global coverage, fraud signals, compliance reporting, and operational tooling. But it creates vendor dependency, cost at scale, less customization, and potential data-sharing concerns.\n\nBuilding may give control, custom risk logic, tailored UX, and long-term differentiation. But it requires engineering, fraud expertise, compliance review, document processing, support tooling, monitoring, and ongoing regulatory updates.\n\nThe decision is not emotional. It is a tradeoff.\n\n```txt\nBuild if:\n- The capability differentiates the product.\n- Requirements are unusual or deeply tied to strategy.\n- Vendor limitations would block the roadmap.\n- Data control or compliance needs require ownership.\n- The team can maintain it responsibly.\n\nBuy if:\n- The capability is common and vendors are mature.\n- Speed matters more than customization.\n- Internal expertise is limited.\n- Compliance or operational burden is high.\n- Switching risk is acceptable.\n```"
      },
      {
        "title": "Make it practical",
        "body": "I would compare options across dimensions:\n\n```txt\nDecision: Build, buy, open source, or hybrid?\n\nCriteria:\n- User impact\n- Strategic differentiation\n- Time to market\n- Total cost of ownership\n- Integration effort\n- Maintenance burden\n- Security and compliance risk\n- Vendor lock-in\n- Data ownership\n- Reliability and support\n- Exit path\n```\n\nThen I would make a recommendation with assumptions.\n\n```txt\nRecommendation:\nBuy identity verification for launch, but build internal risk rules and vendor abstraction.\n\nWhy:\nVendor coverage gets us live faster, while internal rules preserve control over our highest-risk decisions.\n\nRisk:\nVendor cost may rise with volume.\n\nMitigation:\nNegotiate volume tiers, export decision data, and design integration boundaries so a future second vendor is possible.\n```\n\nThat is better than saying \"buy because it is faster\" or \"build because we want control.\" It shows the product logic."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is comparing vendor price to only initial build cost. The real comparison is total cost of ownership.\n\nAnother mistake is ignoring exit risk. If leaving a vendor later would be painful, that cost belongs in the decision.\n\nA third mistake is building a commodity capability because the team enjoys technical control. Product strategy should drive ownership, not engineering pride."
      }
    ],
    "answer": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.",
    "reasoning": "I would compare options across dimensions:\n\n```txt\nDecision: Build, buy, open source, or hybrid?\n\nCriteria:\n- User impact\n- Strategic differentiation\n- Time to market\n- Total cost of ownership\n- Integration effort\n- Maintenance burden\n- Security and compliance risk\n- Vendor lock-in\n- Data ownership\n- Reliability and support\n- Exit path\n```\n\nThen I would make a recommendation with assumptions.\n\n```txt\nRecommendation:\nBuy identity verification for launch, but build internal risk rules and vendor abstraction.\n\nWhy:\nVendor coverage gets us live faster, while internal rules preserve control over our highest-risk decisions.\n\nRisk:\nVendor cost may rise with volume.\n\nMitigation:\nNegotiate volume tiers, export decision data, and design integration boundaries so a future second vendor is possible.\n```\n\nThat is better than saying \"buy because it is faster\" or \"build because we want control.\" It shows the product logic.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is cost alone not enough for build versus buy?",
      "What does strategic differentiation mean?",
      "What is total cost of ownership?",
      "Why does exit path matter?",
      "When might a hybrid approach be best?"
    ],
    "interviewAnswer": "I would evaluate build versus buy by looking at strategic differentiation, user impact, time to market, total cost, integration effort, maintenance burden, compliance, reliability, vendor lock-in, data ownership, and exit path.\n\nA strong answer does not default to building or buying. It explains which capabilities the company should own and which it can safely rent, then recommends a path with risks and mitigations.",
    "sourceLinks": [
      {
        "label": "Product School: Build vs buy",
        "url": "https://productschool.com/blog/leadership/build-vs-buy"
      },
      {
        "label": "Atlassian Team Playbook: Trade-offs",
        "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
      }
    ],
    "beginnerExplanation": "A build versus buy decision asks whether the team should create a capability itself, buy a vendor product, use open source, or combine approaches.\n\nThe beginner mistake is reducing the decision to cost. Buying can look cheaper because the first invoice is smaller than a build estimate. Building can look cheaper because the team ignores maintenance, support, compliance, uptime, security, and opportunity cost.\n\nThe better question is: what capability should this company own, and what capability should it rent?\n\nIf the capability differentiates the product, gives strategic control, or is tightly tied to the customer promise, building may make sense. If it is a commodity capability where vendors are mature and switching risk is manageable, buying may be better.",
    "example": "Imagine a fintech company deciding whether to build identity verification or buy a vendor.\n\nBuying may give faster launch, tested document capture, global coverage, fraud signals, compliance reporting, and operational tooling. But it creates vendor dependency, cost at scale, less customization, and potential data-sharing concerns.\n\nBuilding may give control, custom risk logic, tailored UX, and long-term differentiation. But it requires engineering, fraud expertise, compliance review, document processing, support tooling, monitoring, and ongoing regulatory updates.\n\nThe decision is not emotional. It is a tradeoff.\n\n```txt\nBuild if:\n- The capability differentiates the product.\n- Requirements are unusual or deeply tied to strategy.\n- Vendor limitations would block the roadmap.\n- Data control or compliance needs require ownership.\n- The team can maintain it responsibly.\n\nBuy if:\n- The capability is common and vendors are mature.\n- Speed matters more than customization.\n- Internal expertise is limited.\n- Compliance or operational burden is high.\n- Switching risk is acceptable.\n```",
    "commonMistakes": "A common mistake is comparing vendor price to only initial build cost. The real comparison is total cost of ownership.\n\nAnother mistake is ignoring exit risk. If leaving a vendor later would be painful, that cost belongs in the decision.\n\nA third mistake is building a commodity capability because the team enjoys technical control. Product strategy should drive ownership, not engineering pride."
  },
  {
    "id": "tpm-chargebacks-disputes",
    "track": "TPM",
    "category": "Payments & Remittance",
    "level": "Intermediate",
    "question": "How would you design a product workflow for chargebacks and payment disputes?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.\n\nThe beginner mistake is thinking disputes are only a finance problem. Disputes affect risk, customer experience, merchant trust, support, evidence collection, product policy, and account health.\n\nThe product must answer:\n\n```txt\nWho is notified?\nWhat evidence is needed?\nWho decides whether to fight or accept?\nWhat deadlines apply?\nHow does the disputed amount affect balances?\nWhat happens if the dispute is won or lost?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a marketplace seller receives a $500 order. Two weeks later, the buyer disputes the payment as unauthorized.\n\nThe product cannot simply show \"payment failed.\" The seller needs to know money is being held, what the reason is, what evidence is needed, and when a response is due.\n\nA weak workflow says:\n\n```txt\nSend dispute email. Let support handle it.\n```\n\nA stronger workflow has states:\n\n```txt\nDispute opened\n-> Evidence needed\n-> Evidence submitted\n-> Under review\n-> Won\nor\n-> Lost\nor\n-> Accepted\n```\n\nEach state needs UI, notifications, support visibility, ledger impact, and audit history."
      },
      {
        "title": "Make it practical",
        "body": "Here is a dispute workflow artifact:\n\n```txt\nDispute intake:\n- Dispute ID\n- Payment ID\n- Amount\n- Currency\n- Reason code\n- Evidence deadline\n- Current balance impact\n- Seller account\n- Buyer transaction details\n\nEvidence checklist:\n- Receipt\n- Delivery proof\n- Customer communication\n- Login or device evidence\n- Refund policy acceptance\n- Service usage logs\n- Identity verification evidence, if relevant\n\nDecision rules:\n- Auto-accept low-value disputes below cost threshold.\n- Fight disputes with strong evidence and high value.\n- Escalate repeat buyer abuse.\n- Block seller payouts if dispute risk exceeds threshold.\n```\n\nThe TPM also needs balance behavior:\n\n```txt\nWhen dispute opens:\nMove disputed amount from available balance to held/disputed balance.\n\nIf won:\nRelease funds back to available balance.\n\nIf lost:\nRecord loss, fee, and final ledger adjustment.\n```\n\nThis protects both accounting accuracy and user understanding."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is not collecting evidence before disputes happen. If logs and receipts are missing, the team cannot reconstruct the story later.\n\nAnother mistake is treating dispute response as purely manual. The product can pre-fill evidence and guide the user.\n\nA third mistake is hiding deadlines. Missing a response deadline can turn a possibly winnable dispute into a loss."
      }
    ],
    "answer": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.",
    "reasoning": "Here is a dispute workflow artifact:\n\n```txt\nDispute intake:\n- Dispute ID\n- Payment ID\n- Amount\n- Currency\n- Reason code\n- Evidence deadline\n- Current balance impact\n- Seller account\n- Buyer transaction details\n\nEvidence checklist:\n- Receipt\n- Delivery proof\n- Customer communication\n- Login or device evidence\n- Refund policy acceptance\n- Service usage logs\n- Identity verification evidence, if relevant\n\nDecision rules:\n- Auto-accept low-value disputes below cost threshold.\n- Fight disputes with strong evidence and high value.\n- Escalate repeat buyer abuse.\n- Block seller payouts if dispute risk exceeds threshold.\n```\n\nThe TPM also needs balance behavior:\n\n```txt\nWhen dispute opens:\nMove disputed amount from available balance to held/disputed balance.\n\nIf won:\nRelease funds back to available balance.\n\nIf lost:\nRecord loss, fee, and final ledger adjustment.\n```\n\nThis protects both accounting accuracy and user understanding.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why are disputes a product problem?",
      "What states should a dispute workflow have?",
      "What evidence might be needed?",
      "How should disputes affect available balance?",
      "Why do deadlines matter?"
    ],
    "interviewAnswer": "I would design disputes around lifecycle states, evidence collection, deadlines, balance impact, decision rules, notifications, support tooling, and audit history.\n\nA strong TPM answer shows that disputes are not just finance operations. They are a risk and trust workflow that needs product design.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: Disputes",
        "url": "https://docs.stripe.com/disputes"
      },
      {
        "label": "Stripe Docs: How disputes work",
        "url": "https://docs.stripe.com/disputes/how-disputes-work"
      }
    ],
    "beginnerExplanation": "A dispute happens when a cardholder challenges a payment with their issuer. A chargeback is the money reversal that can happen through the dispute process.\n\nThe beginner mistake is thinking disputes are only a finance problem. Disputes affect risk, customer experience, merchant trust, support, evidence collection, product policy, and account health.\n\nThe product must answer:\n\n```txt\nWho is notified?\nWhat evidence is needed?\nWho decides whether to fight or accept?\nWhat deadlines apply?\nHow does the disputed amount affect balances?\nWhat happens if the dispute is won or lost?\n```",
    "example": "Imagine a marketplace seller receives a $500 order. Two weeks later, the buyer disputes the payment as unauthorized.\n\nThe product cannot simply show \"payment failed.\" The seller needs to know money is being held, what the reason is, what evidence is needed, and when a response is due.\n\nA weak workflow says:\n\n```txt\nSend dispute email. Let support handle it.\n```\n\nA stronger workflow has states:\n\n```txt\nDispute opened\n-> Evidence needed\n-> Evidence submitted\n-> Under review\n-> Won\nor\n-> Lost\nor\n-> Accepted\n```\n\nEach state needs UI, notifications, support visibility, ledger impact, and audit history.",
    "commonMistakes": "A common mistake is not collecting evidence before disputes happen. If logs and receipts are missing, the team cannot reconstruct the story later.\n\nAnother mistake is treating dispute response as purely manual. The product can pre-fill evidence and guide the user.\n\nA third mistake is hiding deadlines. Missing a response deadline can turn a possibly winnable dispute into a loss."
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
    "id": "tpm-data-product-reporting-requirements",
    "track": "TPM",
    "category": "Data & Reporting",
    "level": "Intermediate",
    "question": "How would you define requirements for a reporting or data product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.\n\nThe beginner mistake is asking stakeholders, \"What charts do you want?\" That usually creates dashboards full of numbers nobody trusts or uses.\n\nA stronger TPM starts with the decision the report should support:\n\n```txt\nBad starting point:\nWhat dashboard do you want?\n\nBetter starting point:\nWhat decision will someone make with this data?\n```\n\nData products need product requirements and data requirements. The product side defines users, decisions, workflow, permissions, and usability. The data side defines metrics, sources, freshness, definitions, quality, lineage, and trust."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine operations wants a payout health dashboard.\n\nA weak requirement says:\n\n```txt\nShow payout success rate, failures, and volume.\n```\n\nThat is not enough. The team still does not know who uses it, how fresh the data must be, what counts as success, or what action someone takes when the metric changes.\n\nA better requirement says:\n\n```txt\nUser:\nOperations lead monitoring daily payout health.\n\nDecision:\nShould we pause a corridor, escalate to a partner, or alert support?\n\nCore questions:\n- Are payouts succeeding?\n- Which corridor is unhealthy?\n- Is the issue new or ongoing?\n- Which partner or payout method is involved?\n- How many users and how much money are affected?\n- What should operations do next?\n```\n\nNow the dashboard has a job."
      },
      {
        "title": "Make it practical",
        "body": "Here is a data product requirements artifact:\n\n```txt\nDashboard:\nPayout health monitor\n\nUsers:\nOperations lead, support manager, TPM, payments engineering\n\nPrimary decisions:\n- Pause a corridor\n- Escalate to partner\n- Prepare support messaging\n- Investigate reconciliation exceptions\n\nMetrics:\n- Payout success rate\n- Failure rate by corridor\n- Pending payouts older than SLA\n- Total affected users\n- Total affected amount\n- Partner error code distribution\n\nDefinitions:\nSuccess = payout reached final paid state.\nFailure = payout reached final failed or reversed state.\nPending breach = payout pending longer than corridor SLA.\n\nDimensions:\nCorridor, partner, payout method, customer segment, status, time window.\n\nFreshness:\nOperational view updates every five minutes.\nExecutive summary updates daily.\n\nPermissions:\nSupport can see status and safe reason.\nFinance can export reconciliation.\nOnly admins can see full sensitive details.\n\nTrust requirements:\n- Show last updated time.\n- Show data source.\n- Show known exclusions.\n- Alert when data pipeline is delayed.\n```\n\nThe TPM should also define non-goals. A dashboard that tries to answer every question becomes unusable."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is building charts before agreeing on metric definitions. If teams disagree on what \"active user\" or \"successful payout\" means, the dashboard will create arguments instead of decisions.\n\nAnother mistake is ignoring freshness. A real-time operations dashboard and a monthly finance report have different needs.\n\nA third mistake is forgetting permissions. Reports often expose sensitive user, financial, or operational data."
      }
    ],
    "answer": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.",
    "reasoning": "Here is a data product requirements artifact:\n\n```txt\nDashboard:\nPayout health monitor\n\nUsers:\nOperations lead, support manager, TPM, payments engineering\n\nPrimary decisions:\n- Pause a corridor\n- Escalate to partner\n- Prepare support messaging\n- Investigate reconciliation exceptions\n\nMetrics:\n- Payout success rate\n- Failure rate by corridor\n- Pending payouts older than SLA\n- Total affected users\n- Total affected amount\n- Partner error code distribution\n\nDefinitions:\nSuccess = payout reached final paid state.\nFailure = payout reached final failed or reversed state.\nPending breach = payout pending longer than corridor SLA.\n\nDimensions:\nCorridor, partner, payout method, customer segment, status, time window.\n\nFreshness:\nOperational view updates every five minutes.\nExecutive summary updates daily.\n\nPermissions:\nSupport can see status and safe reason.\nFinance can export reconciliation.\nOnly admins can see full sensitive details.\n\nTrust requirements:\n- Show last updated time.\n- Show data source.\n- Show known exclusions.\n- Alert when data pipeline is delayed.\n```\n\nThe TPM should also define non-goals. A dashboard that tries to answer every question becomes unusable.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why should reporting requirements start with decisions?",
      "What is a metric definition?",
      "Why does freshness matter?",
      "What does data lineage help users trust?",
      "Why are permissions important for reporting products?"
    ],
    "interviewAnswer": "I would define reporting requirements by identifying the users, decisions, key questions, metric definitions, data sources, freshness needs, dimensions, permissions, data quality expectations, and actions the report should support.\n\nA strong TPM answer shows that dashboards are not decoration. They are decision tools, and people must understand and trust the data.",
    "sourceLinks": [
      {
        "label": "Atlassian: Product analytics",
        "url": "https://www.atlassian.com/agile/product-management/product-analytics"
      },
      {
        "label": "Atlassian: Product management KPIs",
        "url": "https://www.atlassian.com/agile/product-management/product-management-kpis"
      }
    ],
    "beginnerExplanation": "A reporting or data product helps people make decisions from data. It might be an internal dashboard, customer-facing analytics page, compliance report, finance export, partner report, or executive KPI view.\n\nThe beginner mistake is asking stakeholders, \"What charts do you want?\" That usually creates dashboards full of numbers nobody trusts or uses.\n\nA stronger TPM starts with the decision the report should support:\n\n```txt\nBad starting point:\nWhat dashboard do you want?\n\nBetter starting point:\nWhat decision will someone make with this data?\n```\n\nData products need product requirements and data requirements. The product side defines users, decisions, workflow, permissions, and usability. The data side defines metrics, sources, freshness, definitions, quality, lineage, and trust.",
    "example": "Imagine operations wants a payout health dashboard.\n\nA weak requirement says:\n\n```txt\nShow payout success rate, failures, and volume.\n```\n\nThat is not enough. The team still does not know who uses it, how fresh the data must be, what counts as success, or what action someone takes when the metric changes.\n\nA better requirement says:\n\n```txt\nUser:\nOperations lead monitoring daily payout health.\n\nDecision:\nShould we pause a corridor, escalate to a partner, or alert support?\n\nCore questions:\n- Are payouts succeeding?\n- Which corridor is unhealthy?\n- Is the issue new or ongoing?\n- Which partner or payout method is involved?\n- How many users and how much money are affected?\n- What should operations do next?\n```\n\nNow the dashboard has a job.",
    "commonMistakes": "A common mistake is building charts before agreeing on metric definitions. If teams disagree on what \"active user\" or \"successful payout\" means, the dashboard will create arguments instead of decisions.\n\nAnother mistake is ignoring freshness. A real-time operations dashboard and a monthly finance report have different needs.\n\nA third mistake is forgetting permissions. Reports often expose sensitive user, financial, or operational data."
  },
  {
    "id": "tpm-dependency-risk",
    "track": "TPM",
    "category": "Execution & Delivery",
    "level": "Intermediate",
    "question": "How would you manage dependency risk across multiple teams?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A dependency is work that one team needs from another team before it can finish its own work.\n\nThe beginner mistake is discovering dependencies late. Late dependency discovery is painful because the other team may already have a full roadmap, a different priority, or a technical constraint nobody planned for.\n\nDependency risk is not only \"Team B is late.\" It can also mean the dependency is unclear, unowned, too large, technically risky, or not actually committed by the team expected to deliver it.\n\nThe mental model is:\n\n```txt\nDependency = \"We need something from someone else.\"\nDependency risk = \"That something may not arrive in the right shape, quality, or time.\"\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the product team is launching business accounts.\n\nYour team owns the user experience. But the launch depends on:\n\n```txt\nIdentity team:\nBusiness verification API\n\nPlatform team:\nOrganization and role model\n\nData team:\nBusiness account reporting tables\n\nCompliance team:\nPolicy approval and review rules\n\nSupport operations:\nMacros and investigation flow\n```\n\nA weak plan says, \"We need these teams.\" A strong plan names the exact contract.\n\n```txt\nDependency register\n\nDependency:\nBusiness verification API\n\nOwner:\nIdentity team\n\nNeeded by:\nMarch 12 for integration testing\n\nDefinition of done:\n- Create verification request\n- Return pending, approved, rejected, needs_more_info\n- Include reason code for support\n- Sandbox supports approved and rejected test businesses\n\nRisk:\nIdentity team has not committed to reason codes.\n\nMitigation:\nEscalate by Feb 16 or reduce launch scope to approved/pending only.\n```\n\nThis makes the dependency visible enough to manage."
      },
      {
        "title": "Make it practical",
        "body": "I would manage dependency risk in four passes.\n\nFirst, discover dependencies early. Ask engineering what systems, teams, data, approvals, migrations, or operational changes are needed.\n\nSecond, define the contract. A dependency should have an owner, expected date, definition of done, integration point, test plan, and fallback.\n\nThird, track health. Not all dependencies need the same attention. Red ones need active management.\n\nFourth, communicate impact. If a dependency slips, say what customer, launch, compliance, or revenue outcome is affected.\n\n```txt\nDependency health model\n\nGreen:\nOwner confirmed, scope clear, date realistic, no blocker.\n\nYellow:\nOwner confirmed, but scope/date/risk still uncertain.\n\nRed:\nNo owner, no commitment, late delivery, or missing launch-critical behavior.\n```\n\nThe TPM should not only ask, \"Is it on track?\" A better question is, \"What evidence tells us it is on track?\""
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is tracking dependencies as vague bullets. \"Need data team\" is not a manageable dependency.\n\nAnother mistake is assuming another team's roadmap commitment exists because someone said \"sounds good\" in a meeting.\n\nA third mistake is escalating too late. Escalation is not drama. It is making a risk visible while there is still time to change the plan."
      }
    ],
    "answer": "A dependency is work that one team needs from another team before it can finish its own work.",
    "reasoning": "I would manage dependency risk in four passes.\n\nFirst, discover dependencies early. Ask engineering what systems, teams, data, approvals, migrations, or operational changes are needed.\n\nSecond, define the contract. A dependency should have an owner, expected date, definition of done, integration point, test plan, and fallback.\n\nThird, track health. Not all dependencies need the same attention. Red ones need active management.\n\nFourth, communicate impact. If a dependency slips, say what customer, launch, compliance, or revenue outcome is affected.\n\n```txt\nDependency health model\n\nGreen:\nOwner confirmed, scope clear, date realistic, no blocker.\n\nYellow:\nOwner confirmed, but scope/date/risk still uncertain.\n\nRed:\nNo owner, no commitment, late delivery, or missing launch-critical behavior.\n```\n\nThe TPM should not only ask, \"Is it on track?\" A better question is, \"What evidence tells us it is on track?\"",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What information should a dependency have before it is manageable?",
      "Why is \"owner confirmed\" different from \"someone agreed in a meeting\"?",
      "What makes a dependency red instead of yellow?",
      "Why should dependencies include a definition of done?",
      "What should a TPM communicate when a dependency slips?"
    ],
    "interviewAnswer": "I would manage dependency risk by discovering dependencies early, assigning owners, defining the contract and definition of done, tracking health, creating fallbacks, and communicating impact when risk changes.\n\nA strong TPM answer shows that dependencies are not just project-management labels. They are cross-team commitments that need evidence, ownership, and active risk management.",
    "sourceLinks": [
      {
        "label": "Atlassian: Advanced Roadmaps dependencies",
        "url": "https://www.atlassian.com/software/jira/guides/advanced-roadmaps/overview"
      },
      {
        "label": "Atlassian Support: Manage dependencies in plans",
        "url": "https://support.atlassian.com/jira-software-cloud/docs/view-and-manage-dependencies-in-advanced-roadmaps/"
      }
    ],
    "beginnerExplanation": "A dependency is work that one team needs from another team before it can finish its own work.\n\nThe beginner mistake is discovering dependencies late. Late dependency discovery is painful because the other team may already have a full roadmap, a different priority, or a technical constraint nobody planned for.\n\nDependency risk is not only \"Team B is late.\" It can also mean the dependency is unclear, unowned, too large, technically risky, or not actually committed by the team expected to deliver it.\n\nThe mental model is:\n\n```txt\nDependency = \"We need something from someone else.\"\nDependency risk = \"That something may not arrive in the right shape, quality, or time.\"\n```",
    "example": "Imagine the product team is launching business accounts.\n\nYour team owns the user experience. But the launch depends on:\n\n```txt\nIdentity team:\nBusiness verification API\n\nPlatform team:\nOrganization and role model\n\nData team:\nBusiness account reporting tables\n\nCompliance team:\nPolicy approval and review rules\n\nSupport operations:\nMacros and investigation flow\n```\n\nA weak plan says, \"We need these teams.\" A strong plan names the exact contract.\n\n```txt\nDependency register\n\nDependency:\nBusiness verification API\n\nOwner:\nIdentity team\n\nNeeded by:\nMarch 12 for integration testing\n\nDefinition of done:\n- Create verification request\n- Return pending, approved, rejected, needs_more_info\n- Include reason code for support\n- Sandbox supports approved and rejected test businesses\n\nRisk:\nIdentity team has not committed to reason codes.\n\nMitigation:\nEscalate by Feb 16 or reduce launch scope to approved/pending only.\n```\n\nThis makes the dependency visible enough to manage.",
    "commonMistakes": "A common mistake is tracking dependencies as vague bullets. \"Need data team\" is not a manageable dependency.\n\nAnother mistake is assuming another team's roadmap commitment exists because someone said \"sounds good\" in a meeting.\n\nA third mistake is escalating too late. Escalation is not drama. It is making a risk visible while there is still time to change the plan."
  },
  {
    "id": "tpm-enterprise-permissions-auditability",
    "track": "TPM",
    "category": "Enterprise Product",
    "level": "Intermediate",
    "question": "How would you design enterprise permissions, roles, and auditability?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?\n\nThe beginner mistake is treating permissions as a few checkboxes. In real enterprise products, permissions affect security, compliance, support, sales, onboarding, customer trust, and incident response.\n\nThere are usually three related ideas:\n\n```txt\nRole:\nA named bundle of permissions, such as Owner, Admin, Analyst, Finance user, or Viewer.\n\nPermission:\nA specific action, such as invite user, approve payout, export report, edit billing, or view audit log.\n\nAuditability:\nThe ability to see who did what, when, from where, and what changed.\n```\n\nFor a TPM, the job is not to invent random roles. The job is to understand customer workflows, risk, compliance needs, and administrative reality."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a business payments product. A customer says: \"We need team accounts before we can use this.\"\n\nThat request hides several product questions:\n\n1. Who can add team members?\n2. Who can create a payout?\n3. Who can approve a payout?\n4. Who can see recipient bank details?\n5. Who can export reports?\n6. Who can change billing or limits?\n7. Who can view audit logs?\n8. What happens when an employee leaves?\n\nA weak answer says, \"We will add Admin and Member.\"\n\nA stronger answer starts with workflows and risk:\n\n```txt\nWorkflow:\nBusiness sends supplier payments.\n\nRisky actions:\n- Add or edit recipient\n- Create payout\n- Approve payout\n- Raise transaction limit\n- Export financial report\n- Invite user\n- Change role\n- View sensitive recipient details\n\nLower-risk actions:\n- View payment status\n- Download own receipt\n- View masked recipient details\n```\n\nNow the team can design roles that match real jobs."
      },
      {
        "title": "Make it practical",
        "body": "Here is a simple permissions matrix:\n\n```txt\nPermission                      Owner  Admin  Finance  Viewer\n\nInvite user                     Yes    Yes    No       No\nChange user role                Yes    No     No       No\nCreate payout                   Yes    Yes    Yes      No\nApprove payout                  Yes    Yes    No       No\nView payout status              Yes    Yes    Yes      Yes\nExport reconciliation report    Yes    Yes    Yes      No\nView full recipient details     Yes    Yes    Masked   Masked\nChange billing settings         Yes    No     No       No\nView audit log                  Yes    Yes    No       No\n```\n\nThen define audit events:\n\n```txt\nAudit log events\n\nUser management:\n- User invited\n- User removed\n- Role changed\n\nMoney movement:\n- Payout created\n- Payout approved\n- Payout cancelled\n- Recipient edited\n\nSecurity:\n- Login failed repeatedly\n- MFA disabled\n- API key created\n- Webhook endpoint changed\n\nReporting:\n- Sensitive export downloaded\n- Audit log viewed\n```\n\nEach event should include actor, timestamp, organization, target object, old value when safe, new value when safe, IP or device context when available, and request ID.\n\nThe TPM should also decide default roles carefully. Enterprise buyers often expect least privilege. A new user should not accidentally get permission to move money or export sensitive data."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is designing roles around internal implementation instead of customer jobs.\n\nAnother mistake is forgetting audit logs until after enterprise customers ask for them. If the product handles money, identity, health, privacy, or admin actions, auditability is part of the product.\n\nA third mistake is letting every permission become fully custom too early. Custom roles are powerful, but they add complexity to UI, support, testing, docs, and permission bugs."
      }
    ],
    "answer": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?",
    "reasoning": "Here is a simple permissions matrix:\n\n```txt\nPermission                      Owner  Admin  Finance  Viewer\n\nInvite user                     Yes    Yes    No       No\nChange user role                Yes    No     No       No\nCreate payout                   Yes    Yes    Yes      No\nApprove payout                  Yes    Yes    No       No\nView payout status              Yes    Yes    Yes      Yes\nExport reconciliation report    Yes    Yes    Yes      No\nView full recipient details     Yes    Yes    Masked   Masked\nChange billing settings         Yes    No     No       No\nView audit log                  Yes    Yes    No       No\n```\n\nThen define audit events:\n\n```txt\nAudit log events\n\nUser management:\n- User invited\n- User removed\n- Role changed\n\nMoney movement:\n- Payout created\n- Payout approved\n- Payout cancelled\n- Recipient edited\n\nSecurity:\n- Login failed repeatedly\n- MFA disabled\n- API key created\n- Webhook endpoint changed\n\nReporting:\n- Sensitive export downloaded\n- Audit log viewed\n```\n\nEach event should include actor, timestamp, organization, target object, old value when safe, new value when safe, IP or device context when available, and request ID.\n\nThe TPM should also decide default roles carefully. Enterprise buyers often expect least privilege. A new user should not accidentally get permission to move money or export sensitive data.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between a role and a permission?",
      "Why do enterprise customers care about audit logs?",
      "What actions usually need stricter permission controls?",
      "Why is least privilege important?",
      "When might custom roles be worth the complexity?"
    ],
    "interviewAnswer": "I would design enterprise permissions by mapping customer workflows, identifying risky actions, defining roles, writing a permissions matrix, and specifying audit events. I would include least-privilege defaults, admin controls, sensitive-data masking, role-change history, and support visibility.\n\nA strong answer shows that permissions are not just UI checkboxes. They are part of security, compliance, customer trust, and enterprise readiness.",
    "sourceLinks": [
      {
        "label": "Google Cloud: IAM roles and permissions",
        "url": "https://cloud.google.com/iam/docs/permissions-reference"
      },
      {
        "label": "Atlassian Support: Audit log activities",
        "url": "https://support.atlassian.com/security-and-access-policies/docs/accessing-audit-log-activities/"
      }
    ],
    "beginnerExplanation": "Enterprise permissions answer a simple question: who is allowed to do what, to which data, and who can prove what happened later?\n\nThe beginner mistake is treating permissions as a few checkboxes. In real enterprise products, permissions affect security, compliance, support, sales, onboarding, customer trust, and incident response.\n\nThere are usually three related ideas:\n\n```txt\nRole:\nA named bundle of permissions, such as Owner, Admin, Analyst, Finance user, or Viewer.\n\nPermission:\nA specific action, such as invite user, approve payout, export report, edit billing, or view audit log.\n\nAuditability:\nThe ability to see who did what, when, from where, and what changed.\n```\n\nFor a TPM, the job is not to invent random roles. The job is to understand customer workflows, risk, compliance needs, and administrative reality.",
    "example": "Imagine a business payments product. A customer says: \"We need team accounts before we can use this.\"\n\nThat request hides several product questions:\n\n1. Who can add team members?\n2. Who can create a payout?\n3. Who can approve a payout?\n4. Who can see recipient bank details?\n5. Who can export reports?\n6. Who can change billing or limits?\n7. Who can view audit logs?\n8. What happens when an employee leaves?\n\nA weak answer says, \"We will add Admin and Member.\"\n\nA stronger answer starts with workflows and risk:\n\n```txt\nWorkflow:\nBusiness sends supplier payments.\n\nRisky actions:\n- Add or edit recipient\n- Create payout\n- Approve payout\n- Raise transaction limit\n- Export financial report\n- Invite user\n- Change role\n- View sensitive recipient details\n\nLower-risk actions:\n- View payment status\n- Download own receipt\n- View masked recipient details\n```\n\nNow the team can design roles that match real jobs.",
    "commonMistakes": "A common mistake is designing roles around internal implementation instead of customer jobs.\n\nAnother mistake is forgetting audit logs until after enterprise customers ask for them. If the product handles money, identity, health, privacy, or admin actions, auditability is part of the product.\n\nA third mistake is letting every permission become fully custom too early. Custom roles are powerful, but they add complexity to UI, support, testing, docs, and permission bugs."
  },
  {
    "id": "tpm-experiment-design-risk",
    "track": "TPM",
    "category": "Metrics & Experimentation",
    "level": "Intermediate",
    "question": "How would you design an experiment when the product area has compliance or user-risk constraints?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.\n\nThe beginner mistake is thinking \"experiment\" always means \"ship two versions and see which wins.\" In regulated, financial, health, safety, privacy, or trust-sensitive products, some experiments can harm users, create unfair treatment, or violate policy.\n\nThe TPM still needs learning, but the learning method must match the risk.\n\nThe mental model is:\n\n```txt\nLow-risk change:\nUse normal A/B test if measurement is clean.\n\nMedium-risk change:\nUse limited rollout, guardrails, and monitoring.\n\nHigh-risk change:\nUse research, simulation, backtesting, expert review, or staged release before live exposure.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance app wants to reduce identity-verification drop-off.\n\nThe growth idea is: \"Ask fewer questions upfront.\"\n\nThat might improve conversion. But it may also allow risky users to move further into the product before required checks happen.\n\nA weak experiment plan says:\n\n```txt\nVariant A: current onboarding\nVariant B: shorter onboarding\nPrimary metric: signup completion\nShip to 50 percent of users\n```\n\nThat ignores compliance and risk.\n\nA stronger experiment plan says:\n\n```txt\nHypothesis:\nMoving low-risk profile questions later will improve signup completion without increasing risky account progression.\n\nEligible users:\nOnly users in low-risk corridors and low transaction limits.\n\nPrimary metric:\nVerified signup completion.\n\nGuardrail metrics:\n- Manual review rate\n- Suspicious activity flags\n- Failed verification rate\n- Support contacts about missing information\n- Time to compliance decision\n\nRollout:\n5 percent for 48 hours, then 20 percent if guardrails stay healthy.\n\nStop condition:\nPause if manual review rate or suspicious flags exceed threshold.\n```\n\nNow the experiment has a learning goal and a safety model."
      },
      {
        "title": "Make it practical",
        "body": "If live experimentation is too risky, I would choose another learning method.\n\n```txt\nAlternatives to a risky A/B test\n\nUser research:\nWatch users complete the flow and identify confusion.\n\nPrototype test:\nTest comprehension before changing production behavior.\n\nBacktesting:\nRun proposed risk rules against historical data.\n\nShadow mode:\nCompute the new decision in the background without affecting users.\n\nLimited beta:\nExpose a small, low-risk group with active monitoring.\n\nPolicy review:\nConfirm the experiment does not violate compliance requirements.\n```\n\nThe TPM should also decide what \"success\" means before the experiment starts. If signup completion improves but manual review doubles, that may not be a win."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing the primary metric while ignoring harm. More signups are not useful if the product creates more fraud, support burden, or compliance exposure.\n\nAnother mistake is using an experiment where research would answer the question faster and more safely.\n\nA third mistake is failing to define stop conditions. If the team has no pause rule, it may argue while users are already being affected."
      }
    ],
    "answer": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.",
    "reasoning": "If live experimentation is too risky, I would choose another learning method.\n\n```txt\nAlternatives to a risky A/B test\n\nUser research:\nWatch users complete the flow and identify confusion.\n\nPrototype test:\nTest comprehension before changing production behavior.\n\nBacktesting:\nRun proposed risk rules against historical data.\n\nShadow mode:\nCompute the new decision in the background without affecting users.\n\nLimited beta:\nExpose a small, low-risk group with active monitoring.\n\nPolicy review:\nConfirm the experiment does not violate compliance requirements.\n```\n\nThe TPM should also decide what \"success\" means before the experiment starts. If signup completion improves but manual review doubles, that may not be a win.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is an A/B test not always the right experiment?",
      "What is a guardrail metric?",
      "Why might signup completion be a misleading success metric?",
      "What is shadow mode?",
      "When would user research be better than a live experiment?"
    ],
    "interviewAnswer": "I would design the experiment by defining the hypothesis, eligible population, primary metric, guardrail metrics, rollout size, stop conditions, monitoring plan, and compliance review. If live exposure is too risky, I would use research, prototype testing, backtesting, shadow mode, or a small controlled beta.\n\nA strong TPM answer shows that experimentation is about learning responsibly, not just moving a metric.",
    "sourceLinks": [
      {
        "label": "Microsoft Research: Trustworthy experimentation",
        "url": "https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/"
      },
      {
        "label": "GOV.UK Service Manual: Plan user research",
        "url": "https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service"
      }
    ],
    "beginnerExplanation": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.\n\nThe beginner mistake is thinking \"experiment\" always means \"ship two versions and see which wins.\" In regulated, financial, health, safety, privacy, or trust-sensitive products, some experiments can harm users, create unfair treatment, or violate policy.\n\nThe TPM still needs learning, but the learning method must match the risk.\n\nThe mental model is:\n\n```txt\nLow-risk change:\nUse normal A/B test if measurement is clean.\n\nMedium-risk change:\nUse limited rollout, guardrails, and monitoring.\n\nHigh-risk change:\nUse research, simulation, backtesting, expert review, or staged release before live exposure.\n```",
    "example": "Imagine a remittance app wants to reduce identity-verification drop-off.\n\nThe growth idea is: \"Ask fewer questions upfront.\"\n\nThat might improve conversion. But it may also allow risky users to move further into the product before required checks happen.\n\nA weak experiment plan says:\n\n```txt\nVariant A: current onboarding\nVariant B: shorter onboarding\nPrimary metric: signup completion\nShip to 50 percent of users\n```\n\nThat ignores compliance and risk.\n\nA stronger experiment plan says:\n\n```txt\nHypothesis:\nMoving low-risk profile questions later will improve signup completion without increasing risky account progression.\n\nEligible users:\nOnly users in low-risk corridors and low transaction limits.\n\nPrimary metric:\nVerified signup completion.\n\nGuardrail metrics:\n- Manual review rate\n- Suspicious activity flags\n- Failed verification rate\n- Support contacts about missing information\n- Time to compliance decision\n\nRollout:\n5 percent for 48 hours, then 20 percent if guardrails stay healthy.\n\nStop condition:\nPause if manual review rate or suspicious flags exceed threshold.\n```\n\nNow the experiment has a learning goal and a safety model.",
    "commonMistakes": "A common mistake is optimizing the primary metric while ignoring harm. More signups are not useful if the product creates more fraud, support burden, or compliance exposure.\n\nAnother mistake is using an experiment where research would answer the question faster and more safely.\n\nA third mistake is failing to define stop conditions. If the team has no pause rule, it may argue while users are already being affected."
  },
  {
    "id": "tpm-fraud-compliance-tradeoffs",
    "track": "TPM",
    "category": "Risk & Compliance",
    "level": "Intermediate",
    "question": "How would you balance fraud prevention, compliance, and user experience?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Fraud prevention, compliance, and user experience often pull against each other.\n\nFraud teams want to block bad actors. Compliance teams want required checks and audit evidence. Product teams want legitimate users to complete their jobs without unnecessary friction. The hard part is that all three goals are valid.\n\nThe beginner mistake is treating this as a simple slider:\n\n```txt\nMore checks = safer.\nFewer checks = better UX.\n```\n\nReality is more nuanced. Bad checks can block good users and still miss risky ones. Good controls use risk signals to apply the right amount of friction to the right users at the right time.\n\nThe mental model is:\n\n```txt\nDo not ask every user for everything.\nDo not let every user do everything.\nUse risk to decide what is allowed, what is reviewed, and what needs more proof.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance app sees rising fraud on new accounts.\n\nA blunt solution is:\n\n```txt\nRequire every new user to upload ID, proof of address, selfie, source of funds, and manual review before sending any amount.\n```\n\nThat may reduce some fraud, but it will also hurt many legitimate users. It may overwhelm operations and increase abandonment.\n\nA better solution is risk-based:\n\n```txt\nLow-risk user:\n- Can create account.\n- Can verify basic identity.\n- Gets low initial limits.\n\nMedium-risk user:\n- Needs document verification before sending.\n- May have lower transaction limits.\n- May trigger extra review for unusual behavior.\n\nHigh-risk user:\n- Cannot send until manual review.\n- May need extra documents.\n- May be blocked if risk is unacceptable.\n```\n\nThe product goal is not \"zero friction.\" The goal is appropriate friction."
      },
      {
        "title": "Make it practical",
        "body": "I would define the decision system with compliance, fraud, operations, and engineering.\n\n```txt\nRisk decision table\n\nSignal:\nNew device + high amount + risky corridor\n\nDecision:\nStep-up verification before payment submission\n\nUser experience:\nExplain that extra verification is needed to protect the account and transfer.\n\nOperations:\nRoute to manual review if automatic checks fail.\n\nMetric:\nFraud rate, false-positive rate, completion rate, review time, support contacts.\n```\n\nThe TPM needs to track both protection and harm.\n\n```txt\nProtection metrics:\n- Fraud loss\n- Dispute rate\n- Suspicious activity flags\n- Confirmed bad accounts blocked\n\nUser harm metrics:\n- False positives\n- Legitimate users blocked\n- Verification drop-off\n- Manual review wait time\n- Support complaints\n```\n\nIf fraud decreases but false positives explode, the product may be safer on paper but worse in practice."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing only for conversion. In regulated or fraud-heavy products, unsafe growth can create major losses.\n\nAnother mistake is optimizing only for blocking. Blocking many good users is also product harm.\n\nA third mistake is hiding decisions from users. You may not be able to reveal fraud logic, but users still need clear, safe explanations and next steps."
      }
    ],
    "answer": "Fraud prevention, compliance, and user experience often pull against each other.",
    "reasoning": "I would define the decision system with compliance, fraud, operations, and engineering.\n\n```txt\nRisk decision table\n\nSignal:\nNew device + high amount + risky corridor\n\nDecision:\nStep-up verification before payment submission\n\nUser experience:\nExplain that extra verification is needed to protect the account and transfer.\n\nOperations:\nRoute to manual review if automatic checks fail.\n\nMetric:\nFraud rate, false-positive rate, completion rate, review time, support contacts.\n```\n\nThe TPM needs to track both protection and harm.\n\n```txt\nProtection metrics:\n- Fraud loss\n- Dispute rate\n- Suspicious activity flags\n- Confirmed bad accounts blocked\n\nUser harm metrics:\n- False positives\n- Legitimate users blocked\n- Verification drop-off\n- Manual review wait time\n- Support complaints\n```\n\nIf fraud decreases but false positives explode, the product may be safer on paper but worse in practice.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is \"more checks\" not always the best answer?",
      "What is a false positive in fraud prevention?",
      "Why should risk controls be tiered?",
      "What metrics show whether controls are too strict?",
      "How can product copy help without exposing fraud logic?"
    ],
    "interviewAnswer": "I would balance fraud, compliance, and UX by using a risk-based model. Low-risk users get lower friction, higher-risk users get step-up checks or review, and unacceptable-risk users are blocked. I would measure fraud loss, dispute rate, false positives, conversion, review time, and support contacts.\n\nA strong TPM answer shows that safety and UX are not enemies. The job is to apply the right control at the right moment and measure both protection and user harm.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: Fraud prevention rules",
        "url": "https://docs.stripe.com/radar/rules"
      },
      {
        "label": "Federal Reserve: Risk-based customer due diligence",
        "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2205.htm"
      }
    ],
    "beginnerExplanation": "Fraud prevention, compliance, and user experience often pull against each other.\n\nFraud teams want to block bad actors. Compliance teams want required checks and audit evidence. Product teams want legitimate users to complete their jobs without unnecessary friction. The hard part is that all three goals are valid.\n\nThe beginner mistake is treating this as a simple slider:\n\n```txt\nMore checks = safer.\nFewer checks = better UX.\n```\n\nReality is more nuanced. Bad checks can block good users and still miss risky ones. Good controls use risk signals to apply the right amount of friction to the right users at the right time.\n\nThe mental model is:\n\n```txt\nDo not ask every user for everything.\nDo not let every user do everything.\nUse risk to decide what is allowed, what is reviewed, and what needs more proof.\n```",
    "example": "Imagine a remittance app sees rising fraud on new accounts.\n\nA blunt solution is:\n\n```txt\nRequire every new user to upload ID, proof of address, selfie, source of funds, and manual review before sending any amount.\n```\n\nThat may reduce some fraud, but it will also hurt many legitimate users. It may overwhelm operations and increase abandonment.\n\nA better solution is risk-based:\n\n```txt\nLow-risk user:\n- Can create account.\n- Can verify basic identity.\n- Gets low initial limits.\n\nMedium-risk user:\n- Needs document verification before sending.\n- May have lower transaction limits.\n- May trigger extra review for unusual behavior.\n\nHigh-risk user:\n- Cannot send until manual review.\n- May need extra documents.\n- May be blocked if risk is unacceptable.\n```\n\nThe product goal is not \"zero friction.\" The goal is appropriate friction.",
    "commonMistakes": "A common mistake is optimizing only for conversion. In regulated or fraud-heavy products, unsafe growth can create major losses.\n\nAnother mistake is optimizing only for blocking. Blocking many good users is also product harm.\n\nA third mistake is hiding decisions from users. You may not be able to reveal fraud logic, but users still need clear, safe explanations and next steps."
  },
  {
    "id": "tpm-fx-liquidity-remittance",
    "track": "TPM",
    "category": "Payments & Remittance",
    "level": "Intermediate",
    "question": "How would you think about FX, liquidity, and payout reliability in a remittance product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.\n\nThe beginner mistake is thinking the product is done when the sender pays. The sender payment is only one side. The product still has to convert currency, manage settlement timing, fund payout accounts, route to partners, and reconcile what happened.\n\nThe user sees one promise:\n\n```txt\nSend $100. Recipient gets ₦150,000 today.\n```\n\nBehind that promise are many operational requirements."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a user sends money from the US to Nigeria.\n\nThe app needs to know:\n\n```txt\nFunding:\nHas the sender payment settled or is it still pending?\n\nFX:\nWhat rate is shown? How long is it locked?\n\nLiquidity:\nDo we have enough local currency to pay the recipient?\n\nRouting:\nWhich payout partner should be used?\n\nReliability:\nWhat happens if the partner is slow or down?\n\nReconciliation:\nDid the recipient get paid, and did our records match partner records?\n```\n\nA TPM does not need to be a treasury trader, but they must understand that product promises depend on money operations."
      },
      {
        "title": "Make it practical",
        "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nSame-day USD to NGN remittance\n\nUser-facing promise:\nShow recipient amount, fee, expected delivery time, and exchange rate lock window.\n\nFX requirements:\n- Rate source defined\n- Rate lock duration shown\n- Expired quote requires refresh\n- Margin and fee separated or clearly explained\n\nLiquidity requirements:\n- Corridor balance monitored\n- Minimum balance threshold\n- Alert before liquidity shortage\n- Fallback route if primary payout balance is low\n\nPayout requirements:\n- Partner status checked before submission\n- Payout status visible to support\n- Delayed payouts get user-safe status copy\n- Failed payouts trigger retry or refund rules\n\nMetrics:\n- Quote-to-submit conversion\n- Payout success rate\n- Time to final status\n- Liquidity shortage incidents\n- FX quote expiry rate\n- Support contacts by corridor\n```\n\nThe TPM should also define risk scenarios:\n\n```txt\nIf liquidity is low:\nLimit transaction size, switch route, or pause corridor.\n\nIf FX moves before payment is submitted:\nRefresh quote before user confirms.\n\nIf partner is down:\nRoute to backup partner or show delayed delivery before payment.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is promising delivery speed without confirming payout capacity.\n\nAnother mistake is hiding rate expiry. Users get angry if the recipient amount changes after they thought the quote was locked.\n\nA third mistake is not monitoring corridor-level health. Global averages can hide one broken country corridor."
      }
    ],
    "answer": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.",
    "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nSame-day USD to NGN remittance\n\nUser-facing promise:\nShow recipient amount, fee, expected delivery time, and exchange rate lock window.\n\nFX requirements:\n- Rate source defined\n- Rate lock duration shown\n- Expired quote requires refresh\n- Margin and fee separated or clearly explained\n\nLiquidity requirements:\n- Corridor balance monitored\n- Minimum balance threshold\n- Alert before liquidity shortage\n- Fallback route if primary payout balance is low\n\nPayout requirements:\n- Partner status checked before submission\n- Payout status visible to support\n- Delayed payouts get user-safe status copy\n- Failed payouts trigger retry or refund rules\n\nMetrics:\n- Quote-to-submit conversion\n- Payout success rate\n- Time to final status\n- Liquidity shortage incidents\n- FX quote expiry rate\n- Support contacts by corridor\n```\n\nThe TPM should also define risk scenarios:\n\n```txt\nIf liquidity is low:\nLimit transaction size, switch route, or pause corridor.\n\nIf FX moves before payment is submitted:\nRefresh quote before user confirms.\n\nIf partner is down:\nRoute to backup partner or show delayed delivery before payment.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is liquidity in a remittance product?",
      "Why is sender payment not the end of the money movement?",
      "What does an FX rate lock protect?",
      "What metrics show payout reliability?",
      "What can the product do if liquidity is low?"
    ],
    "interviewAnswer": "I would think about remittance as a full money-movement promise: funding, FX quote, liquidity, payout routing, partner reliability, user communication, and reconciliation. I would define rate-lock rules, corridor liquidity thresholds, fallback routes, payout states, and metrics like payout success, time to final status, quote expiry, and support contacts.\n\nA strong TPM answer connects customer promise to treasury and operations reality.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: Balances and settlement time",
        "url": "https://docs.stripe.com/payments/balances"
      },
      {
        "label": "Stripe Docs: Payout reconciliation report",
        "url": "https://docs.stripe.com/reports/payout-reconciliation"
      }
    ],
    "beginnerExplanation": "Remittance products move money across people, currencies, countries, banks, and partners. FX is the currency conversion. Liquidity is having enough funds in the right place and currency to complete payouts. Payout reliability is whether recipients actually receive money as promised.\n\nThe beginner mistake is thinking the product is done when the sender pays. The sender payment is only one side. The product still has to convert currency, manage settlement timing, fund payout accounts, route to partners, and reconcile what happened.\n\nThe user sees one promise:\n\n```txt\nSend $100. Recipient gets ₦150,000 today.\n```\n\nBehind that promise are many operational requirements.",
    "example": "Imagine a user sends money from the US to Nigeria.\n\nThe app needs to know:\n\n```txt\nFunding:\nHas the sender payment settled or is it still pending?\n\nFX:\nWhat rate is shown? How long is it locked?\n\nLiquidity:\nDo we have enough local currency to pay the recipient?\n\nRouting:\nWhich payout partner should be used?\n\nReliability:\nWhat happens if the partner is slow or down?\n\nReconciliation:\nDid the recipient get paid, and did our records match partner records?\n```\n\nA TPM does not need to be a treasury trader, but they must understand that product promises depend on money operations.",
    "commonMistakes": "A common mistake is promising delivery speed without confirming payout capacity.\n\nAnother mistake is hiding rate expiry. Users get angry if the recipient amount changes after they thought the quote was locked.\n\nA third mistake is not monitoring corridor-level health. Global averages can hide one broken country corridor."
  },
  {
    "id": "tpm-hallucination-mitigation-fintech",
    "track": "TPM",
    "category": "AI & Customer Operations",
    "level": "Intermediate",
    "question": "How would you reduce hallucination risk in a fintech AI feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.\n\nThe beginner mistake is saying \"make the model more accurate.\" That is not a product plan. The TPM needs to design the workflow so the AI has trusted sources, knows when to refuse, and cannot take risky actions based on invented information."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a user asks, \"Will my transfer arrive today?\"\n\nA risky AI answer:\n\n```txt\nYes, your transfer will arrive by 5 PM.\n```\n\nIf the system does not have confirmed payout status, that answer may be invented.\n\nA safer answer:\n\n```txt\nYour transfer is currently pending with our payout partner. We do not have a final arrival time yet. You do not need to send it again.\n```\n\nThe difference is grounding. The safe answer uses known status and avoids unsupported promises."
      },
      {
        "title": "Make it practical",
        "body": "Here is a hallucination mitigation artifact:\n\n```txt\nFeature:\nAI transfer status assistant\n\nAllowed sources:\n- Transfer status API\n- Approved status explanations\n- Help center articles\n- Support-safe reason codes\n\nNot allowed:\n- Guessing delivery time\n- Inventing fees\n- Promising refunds\n- Explaining fraud or sanctions logic\n- Giving legal or compliance advice\n\nRequired behavior:\n- Cite or attach source internally\n- Say when information is unavailable\n- Escalate uncertain cases\n- Use structured status templates\n- Refuse unsupported actions\n\nEvaluation cases:\n- Missing status\n- Conflicting partner status\n- Delayed payout\n- Failed transfer\n- Refund request\n- Compliance review\n- User asks for guarantee\n```\n\nThe TPM should monitor severe hallucinations separately from minor wording issues. One invented refund promise can be worse than many awkward sentences."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is relying only on prompt wording. Grounding, retrieval, templates, evals, and permissions matter more.\n\nAnother mistake is optimizing for confident tone. In regulated products, appropriate uncertainty is safer.\n\nA third mistake is not defining prohibited claims. The AI needs clear boundaries."
      }
    ],
    "answer": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.",
    "reasoning": "Here is a hallucination mitigation artifact:\n\n```txt\nFeature:\nAI transfer status assistant\n\nAllowed sources:\n- Transfer status API\n- Approved status explanations\n- Help center articles\n- Support-safe reason codes\n\nNot allowed:\n- Guessing delivery time\n- Inventing fees\n- Promising refunds\n- Explaining fraud or sanctions logic\n- Giving legal or compliance advice\n\nRequired behavior:\n- Cite or attach source internally\n- Say when information is unavailable\n- Escalate uncertain cases\n- Use structured status templates\n- Refuse unsupported actions\n\nEvaluation cases:\n- Missing status\n- Conflicting partner status\n- Delayed payout\n- Failed transfer\n- Refund request\n- Compliance review\n- User asks for guarantee\n```\n\nThe TPM should monitor severe hallucinations separately from minor wording issues. One invented refund promise can be worse than many awkward sentences.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why are hallucinations more dangerous in fintech?",
      "What does grounding mean?",
      "Why should the AI say when information is unavailable?",
      "What claims should be prohibited?",
      "How would you evaluate hallucination risk?"
    ],
    "interviewAnswer": "I would reduce hallucination risk by grounding the AI in trusted sources, limiting allowed claims, using templates for high-risk answers, requiring refusal or escalation when data is missing, evaluating edge cases, and monitoring severe factual errors.\n\nA strong TPM answer designs the product so the AI cannot safely rely on guessing.",
    "sourceLinks": [
      {
        "label": "OpenAI Docs: Evaluation best practices",
        "url": "https://platform.openai.com/docs/guides/evaluation-best-practices"
      },
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "beginnerExplanation": "A hallucination is when an AI system produces information that sounds plausible but is not grounded in truth. In fintech, hallucinations can be dangerous because they may misstate payment status, fees, refund eligibility, compliance requirements, or account restrictions.\n\nThe beginner mistake is saying \"make the model more accurate.\" That is not a product plan. The TPM needs to design the workflow so the AI has trusted sources, knows when to refuse, and cannot take risky actions based on invented information.",
    "example": "Imagine a user asks, \"Will my transfer arrive today?\"\n\nA risky AI answer:\n\n```txt\nYes, your transfer will arrive by 5 PM.\n```\n\nIf the system does not have confirmed payout status, that answer may be invented.\n\nA safer answer:\n\n```txt\nYour transfer is currently pending with our payout partner. We do not have a final arrival time yet. You do not need to send it again.\n```\n\nThe difference is grounding. The safe answer uses known status and avoids unsupported promises.",
    "commonMistakes": "A common mistake is relying only on prompt wording. Grounding, retrieval, templates, evals, and permissions matter more.\n\nAnother mistake is optimizing for confident tone. In regulated products, appropriate uncertainty is safer.\n\nA third mistake is not defining prohibited claims. The AI needs clear boundaries."
  },
  {
    "id": "tpm-human-in-the-loop-ai-review",
    "track": "TPM",
    "category": "AI Operations",
    "level": "Intermediate",
    "question": "How would you design a human-in-the-loop review workflow for AI decisions?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.\n\nThe beginner mistake is saying \"a human will review it\" without designing the actual workflow. Humans need queues, context, decision options, policies, training, audit logs, and capacity.\n\nThe TPM should ask:\n\n```txt\nWhat does the AI recommend?\nWhen must a human review?\nWhat evidence does the reviewer see?\nWhat decisions can the reviewer make?\nWhat happens after the decision?\nHow do we learn from reviewer corrections?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI model flags transfers for fraud review.\n\nA bad workflow dumps alerts into a queue with a risk score and no context. Analysts either overtrust the score or waste time digging.\n\nA good workflow gives reviewable evidence:\n\n```txt\nAI recommendation:\nManual review\n\nTop signals:\n- New device\n- New recipient\n- High-risk corridor\n- Transfer amount 4x user average\n- Similar pattern seen in confirmed fraud cases\n\nReviewer actions:\n- Approve\n- Request verification\n- Hold\n- Block\n- Escalate\n```\n\nNow the human can make a responsible decision."
      },
      {
        "title": "Make it practical",
        "body": "Here is a review workflow artifact:\n\n```txt\nReview trigger:\nAI risk score between 70 and 90, or any score with high-risk corridor.\n\nQueue priority:\n1. Money already captured\n2. High-value transfer\n3. Time-sensitive payout\n4. Repeat customer\n\nReviewer view:\n- Customer profile\n- KYC status\n- Transfer history\n- Recipient history\n- Model score\n- Top risk signals\n- Policy guidance\n- Similar prior cases\n\nDecision requirements:\n- Decision reason required\n- Notes required for block\n- Escalation required for sanctions or legal concern\n- All decisions audited\n```\n\nThe TPM should also monitor reviewer quality:\n\n```txt\nMetrics:\n- Review backlog\n- Time to decision\n- Override rate\n- Reviewer disagreement rate\n- Confirmed fraud after approval\n- False-positive appeals\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using humans as decoration. If reviewers cannot override or understand the AI, oversight is weak.\n\nAnother mistake is creating more alerts than humans can handle. A huge backlog can be worse than no review.\n\nA third mistake is not feeding review outcomes back into evaluation."
      }
    ],
    "answer": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.",
    "reasoning": "Here is a review workflow artifact:\n\n```txt\nReview trigger:\nAI risk score between 70 and 90, or any score with high-risk corridor.\n\nQueue priority:\n1. Money already captured\n2. High-value transfer\n3. Time-sensitive payout\n4. Repeat customer\n\nReviewer view:\n- Customer profile\n- KYC status\n- Transfer history\n- Recipient history\n- Model score\n- Top risk signals\n- Policy guidance\n- Similar prior cases\n\nDecision requirements:\n- Decision reason required\n- Notes required for block\n- Escalation required for sanctions or legal concern\n- All decisions audited\n```\n\nThe TPM should also monitor reviewer quality:\n\n```txt\nMetrics:\n- Review backlog\n- Time to decision\n- Override rate\n- Reviewer disagreement rate\n- Confirmed fraud after approval\n- False-positive appeals\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What does human-in-the-loop mean?",
      "Why is a review queue not enough?",
      "What context should reviewers see?",
      "How can review capacity become a product risk?",
      "What metrics show review workflow health?"
    ],
    "interviewAnswer": "I would design human review by defining triggers, queue priority, reviewer context, allowed decisions, policy guidance, audit logs, escalation paths, capacity metrics, and feedback loops.\n\nA strong answer shows that human oversight is an operating workflow, not a sentence in a PRD.",
    "sourceLinks": [
      {
        "label": "Microsoft: Responsible AI principles",
        "url": "https://www.microsoft.com/en-us/ai/principles-and-approach/"
      },
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "beginnerExplanation": "Human-in-the-loop means a person reviews, approves, corrects, or overrides an AI recommendation before or after it affects users.\n\nThe beginner mistake is saying \"a human will review it\" without designing the actual workflow. Humans need queues, context, decision options, policies, training, audit logs, and capacity.\n\nThe TPM should ask:\n\n```txt\nWhat does the AI recommend?\nWhen must a human review?\nWhat evidence does the reviewer see?\nWhat decisions can the reviewer make?\nWhat happens after the decision?\nHow do we learn from reviewer corrections?\n```",
    "example": "Imagine an AI model flags transfers for fraud review.\n\nA bad workflow dumps alerts into a queue with a risk score and no context. Analysts either overtrust the score or waste time digging.\n\nA good workflow gives reviewable evidence:\n\n```txt\nAI recommendation:\nManual review\n\nTop signals:\n- New device\n- New recipient\n- High-risk corridor\n- Transfer amount 4x user average\n- Similar pattern seen in confirmed fraud cases\n\nReviewer actions:\n- Approve\n- Request verification\n- Hold\n- Block\n- Escalate\n```\n\nNow the human can make a responsible decision.",
    "commonMistakes": "A common mistake is using humans as decoration. If reviewers cannot override or understand the AI, oversight is weak.\n\nAnother mistake is creating more alerts than humans can handle. A huge backlog can be worse than no review.\n\nA third mistake is not feeding review outcomes back into evaluation."
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
        "body": "I would handle the incident in phases.\n\nFirst, declare and triage. Identify severity, affected flows, start time, customer impact, and current owner.\n\nSecond, stabilize. If a recent deployment caused it, consider rollback. If a partner is down, route traffic elsewhere if possible. If the feature creates customer harm, temporarily disable the risky path.\n\nThird, communicate. Keep internal stakeholders updated at a predictable cadence. Give support clear language. If customers need to know, communicate honestly: what is affected, what they can do, and when the next update will come.\n\nFourth, verify recovery. Do not trust one green log line. Confirm with metrics, customer journey checks, partner status, support volume, and if relevant, reconciliation data.\n\nFifth, run a blameless postmortem. The goal is not to find one person to blame. It is to understand the chain of events and improve the system: monitoring, alerts, test coverage, rollout process, runbooks, dependency resilience, and product fallback states.\n\nDuring the incident, a TPM can keep a simple timeline like this:\n\n```txt\nIncident:\nCard payments failing for users in Nigeria.\n\nSeverity:\nHigh. Users cannot complete payment. Money movement is blocked, but no evidence of duplicate charge yet.\n\nKnown impact:\n- Started around 10:12\n- Affects card payments only\n- Bank transfer still works\n- Existing transfers are not affected\n- Support tickets rising\n\nOpen questions:\n- Are any authorizations captured but shown as failed?\n- Is this our change, payment processor issue, or bank/network issue?\n- Can we safely route users to bank transfer?\n\nActions:\n10:20 Engineering checking payment logs.\n10:23 Support using approved macro.\n10:27 Product paused card option for new attempts in affected corridor.\n10:31 Payments partner contacted.\n10:40 Next update due.\n```\n\nA customer or support update should be plain:\n\n```txt\nWe are seeing failed card payment attempts for some users in Nigeria.\n\nBank transfer is still available. Existing submitted transfers are not affected.\n\nWe are investigating with our payment partner and will share the next update by 10:40.\n```\n\nAfter recovery, the postmortem should separate technical recovery from customer recovery:\n\n```txt\nPostmortem outline\n\nWhat happened:\nCard payment attempts failed for 42 minutes in one corridor.\n\nCustomer impact:\n1,420 failed attempts, 380 support contacts, 0 confirmed duplicate charges.\n\nDetection:\nSupport noticed before automated alert.\n\nRoot cause:\nPartner response-code mapping changed and our system treated retryable failures as hard failures.\n\nWhy existing defenses missed it:\nNo alert on corridor-level card failure spike. Contract test did not cover the new response code.\n\nFollow-up actions:\n- Add alert for payment failure rate by corridor and method.\n- Add contract test for partner response-code mapping.\n- Update support dashboard to show partner error category.\n- Add fallback copy that routes users to bank transfer when card failure rate is high.\n```\n\nThis is how the TPM answer becomes real. It shows the operating rhythm, the customer language, and the learning loop."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing for silence. Teams sometimes avoid declaring incidents because it feels dramatic. That delays coordination.\n\nAnother mistake is communicating certainty too early. It is better to say what is known, what is unknown, and when the next update will come.\n\nA third mistake is calling the incident done when the service recovers but customers are still affected. Payment reversals, stuck orders, missing notifications, or support tickets may continue after the technical fix."
      }
    ],
    "answer": "A production incident is when the product is not behaving in a way customers, the business, or internal teams can safely rely on. It might be an outage, broken checkout, delayed payments, incorrect pricing, missing notifications, a data issue, or a third-party partner failure.",
    "reasoning": "I would handle the incident in phases.\n\nFirst, declare and triage. Identify severity, affected flows, start time, customer impact, and current owner.\n\nSecond, stabilize. If a recent deployment caused it, consider rollback. If a partner is down, route traffic elsewhere if possible. If the feature creates customer harm, temporarily disable the risky path.\n\nThird, communicate. Keep internal stakeholders updated at a predictable cadence. Give support clear language. If customers need to know, communicate honestly: what is affected, what they can do, and when the next update will come.\n\nFourth, verify recovery. Do not trust one green log line. Confirm with metrics, customer journey checks, partner status, support volume, and if relevant, reconciliation data.\n\nFifth, run a blameless postmortem. The goal is not to find one person to blame. It is to understand the chain of events and improve the system: monitoring, alerts, test coverage, rollout process, runbooks, dependency resilience, and product fallback states.\n\nDuring the incident, a TPM can keep a simple timeline like this:\n\n```txt\nIncident:\nCard payments failing for users in Nigeria.\n\nSeverity:\nHigh. Users cannot complete payment. Money movement is blocked, but no evidence of duplicate charge yet.\n\nKnown impact:\n- Started around 10:12\n- Affects card payments only\n- Bank transfer still works\n- Existing transfers are not affected\n- Support tickets rising\n\nOpen questions:\n- Are any authorizations captured but shown as failed?\n- Is this our change, payment processor issue, or bank/network issue?\n- Can we safely route users to bank transfer?\n\nActions:\n10:20 Engineering checking payment logs.\n10:23 Support using approved macro.\n10:27 Product paused card option for new attempts in affected corridor.\n10:31 Payments partner contacted.\n10:40 Next update due.\n```\n\nA customer or support update should be plain:\n\n```txt\nWe are seeing failed card payment attempts for some users in Nigeria.\n\nBank transfer is still available. Existing submitted transfers are not affected.\n\nWe are investigating with our payment partner and will share the next update by 10:40.\n```\n\nAfter recovery, the postmortem should separate technical recovery from customer recovery:\n\n```txt\nPostmortem outline\n\nWhat happened:\nCard payment attempts failed for 42 minutes in one corridor.\n\nCustomer impact:\n1,420 failed attempts, 380 support contacts, 0 confirmed duplicate charges.\n\nDetection:\nSupport noticed before automated alert.\n\nRoot cause:\nPartner response-code mapping changed and our system treated retryable failures as hard failures.\n\nWhy existing defenses missed it:\nNo alert on corridor-level card failure spike. Contract test did not cover the new response code.\n\nFollow-up actions:\n- Add alert for payment failure rate by corridor and method.\n- Add contract test for partner response-code mapping.\n- Update support dashboard to show partner error category.\n- Add fallback copy that routes users to bank transfer when card failure rate is high.\n```\n\nThis is how the TPM answer becomes real. It shows the operating rhythm, the customer language, and the learning loop.",
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
    "id": "tpm-internal-tools",
    "track": "TPM",
    "category": "Internal Tools",
    "level": "Foundational",
    "question": "How would you prioritize and build an internal tool for operations or support teams?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.\n\nThe beginner mistake is treating internal users as if their pain matters less because they are employees. But internal tool problems can become customer problems. If support cannot investigate a failed payout, the customer waits. If compliance reviewers lack context, safe users may be blocked. If operations relies on spreadsheets, mistakes become expensive.\n\nThe mental model is:\n\n```txt\nExternal product:\nHelps customers complete jobs.\n\nInternal tool:\nHelps the company complete the work needed to serve customers.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine support agents need a tool to investigate payment failures.\n\nA weak requirement says:\n\n```txt\nBuild support dashboard.\n```\n\nThat is too vague. A useful TPM asks what job the agent is trying to do.\n\n```txt\nSupport agent job:\nWhen a customer says \"my payment failed,\" the agent needs to identify the payment, understand the current status, know whether money moved, see the reason for failure, choose the right next action, and explain it clearly to the customer.\n```\n\nNow the product shape is clearer.\n\n```txt\nMinimum useful internal tool\n\nSearch:\n- Customer email\n- Transaction ID\n- Recipient phone\n- Partner reference\n\nPayment view:\n- Current status\n- Status history\n- Failure reason\n- Partner response\n- Retry eligibility\n- Refund or reversal state\n\nAgent guidance:\n- What this status means\n- What action is allowed\n- What the agent should tell the customer\n- When to escalate\n```\n\nThis is much better than a generic admin table."
      },
      {
        "title": "Make it practical",
        "body": "I would prioritize internal tool work by looking at volume, severity, risk, time saved, customer impact, and error reduction.\n\n```txt\nInternal tool prioritization table\n\nProblem:\nAgents cannot see partner failure reason.\n\nEvidence:\n32 percent of payment tickets require engineering help.\n\nImpact:\nCustomers wait longer. Engineers get interrupted. Agents give vague answers.\n\nSolution:\nShow normalized failure reason and recommended support macro.\n\nSuccess metric:\nReduce payment-ticket escalation to engineering from 32 percent to 12 percent.\n\nRisk:\nReason codes may expose sensitive fraud information.\n\nMitigation:\nRole-based visibility and safe customer-facing explanation.\n```\n\nThe TPM also needs to think about permissions, audit logs, training, and operational ownership. Internal tools often touch sensitive data."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is copying database fields into a UI and calling it a tool. Internal users need workflow support, not raw data dumps.\n\nAnother mistake is skipping research because the users are coworkers. Watching five agents do the job can reveal more than a week of guessing.\n\nA third mistake is ignoring governance. Internal tools need permissions, audit logs, and clear rules about who can take risky actions."
      }
    ],
    "answer": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.",
    "reasoning": "I would prioritize internal tool work by looking at volume, severity, risk, time saved, customer impact, and error reduction.\n\n```txt\nInternal tool prioritization table\n\nProblem:\nAgents cannot see partner failure reason.\n\nEvidence:\n32 percent of payment tickets require engineering help.\n\nImpact:\nCustomers wait longer. Engineers get interrupted. Agents give vague answers.\n\nSolution:\nShow normalized failure reason and recommended support macro.\n\nSuccess metric:\nReduce payment-ticket escalation to engineering from 32 percent to 12 percent.\n\nRisk:\nReason codes may expose sensitive fraud information.\n\nMitigation:\nRole-based visibility and safe customer-facing explanation.\n```\n\nThe TPM also needs to think about permissions, audit logs, training, and operational ownership. Internal tools often touch sensitive data.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is an internal tool still a product?",
      "How can internal tool problems hurt customers?",
      "What is the difference between raw data and workflow support?",
      "Why do permissions matter in internal tools?",
      "What metrics could prove an internal tool is working?"
    ],
    "interviewAnswer": "I would build an internal tool by studying the user's workflow, defining the job to be done, prioritizing high-volume or high-risk pain points, designing for speed and accuracy, and measuring outcomes like resolution time, escalation rate, error rate, and customer impact.\n\nA strong answer treats internal teams as real users and connects internal efficiency to customer outcomes and business risk.",
    "sourceLinks": [
      {
        "label": "GOV.UK Service Manual: User needs",
        "url": "https://www.gov.uk/service-manual/user-centred-design/user-needs"
      },
      {
        "label": "Atlassian: IT service management",
        "url": "https://www.atlassian.com/itsm"
      }
    ],
    "beginnerExplanation": "An internal tool is still a product. Its users may be support agents, compliance reviewers, operations specialists, sales teams, finance teams, or engineers.\n\nThe beginner mistake is treating internal users as if their pain matters less because they are employees. But internal tool problems can become customer problems. If support cannot investigate a failed payout, the customer waits. If compliance reviewers lack context, safe users may be blocked. If operations relies on spreadsheets, mistakes become expensive.\n\nThe mental model is:\n\n```txt\nExternal product:\nHelps customers complete jobs.\n\nInternal tool:\nHelps the company complete the work needed to serve customers.\n```",
    "example": "Imagine support agents need a tool to investigate payment failures.\n\nA weak requirement says:\n\n```txt\nBuild support dashboard.\n```\n\nThat is too vague. A useful TPM asks what job the agent is trying to do.\n\n```txt\nSupport agent job:\nWhen a customer says \"my payment failed,\" the agent needs to identify the payment, understand the current status, know whether money moved, see the reason for failure, choose the right next action, and explain it clearly to the customer.\n```\n\nNow the product shape is clearer.\n\n```txt\nMinimum useful internal tool\n\nSearch:\n- Customer email\n- Transaction ID\n- Recipient phone\n- Partner reference\n\nPayment view:\n- Current status\n- Status history\n- Failure reason\n- Partner response\n- Retry eligibility\n- Refund or reversal state\n\nAgent guidance:\n- What this status means\n- What action is allowed\n- What the agent should tell the customer\n- When to escalate\n```\n\nThis is much better than a generic admin table.",
    "commonMistakes": "A common mistake is copying database fields into a UI and calling it a tool. Internal users need workflow support, not raw data dumps.\n\nAnother mistake is skipping research because the users are coworkers. Watching five agents do the job can reveal more than a week of guessing.\n\nA third mistake is ignoring governance. Internal tools need permissions, audit logs, and clear rules about who can take risky actions."
  },
  {
    "id": "tpm-ledger-balances-holds",
    "track": "TPM",
    "category": "Fintech Infrastructure",
    "level": "Intermediate",
    "question": "How would you define product requirements for a ledger, balances, and holds system?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?\n\nThe beginner mistake is thinking a balance is just one number in a database row. In fintech, a user can have several balance concepts at the same time.\n\n```txt\nCurrent balance:\nAll funds recorded in the account.\n\nAvailable balance:\nFunds the user can actually spend or withdraw.\n\nPending balance:\nFunds not final yet, such as incoming settlement or card authorization.\n\nHeld balance:\nFunds reserved for risk, dispute, compliance, or operational reasons.\n```\n\nIf the product mixes these up, users may spend money they should not spend, support may give wrong answers, and finance may fail reconciliation."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a marketplace wallet. A seller receives a $100 payment. The platform holds $10 as a risk reserve, charges a $3 fee, and makes $87 available for payout after settlement.\n\nA weak requirement says:\n\n```txt\nShow seller balance.\n```\n\nA strong requirement asks:\n\n```txt\nWhich balance is shown?\nWhen does it become available?\nWhat is held and why?\nCan the hold expire?\nWho can override it?\nWhat audit trail proves the calculation?\nWhat happens if the payment is reversed?\n```\n\nThe product needs to explain money states without exposing accounting internals to the user."
      },
      {
        "title": "Make it practical",
        "body": "Here is a requirements artifact:\n\n```txt\nFeature:\nSeller wallet balance\n\nUser-facing balances:\n- Available for payout\n- Pending settlement\n- Held in reserve\n\nLedger events:\n- Payment received\n- Platform fee assessed\n- Risk reserve hold created\n- Funds settled\n- Payout initiated\n- Payout completed\n- Dispute opened\n- Hold released or extended\n\nRules:\n- Users can only withdraw available balance.\n- Pending funds become available after settlement.\n- Risk holds reduce available balance.\n- Every balance change must be traceable to a ledger event.\n- Manual adjustments require reason code, approver, and audit log.\n\nSupport view:\n- Current balance\n- Available balance\n- Pending amount\n- Held amount\n- Hold reason\n- Expected release date\n- Related transaction IDs\n```\n\nThe TPM also needs to define user copy:\n\n```txt\n$87.00 available\n$10.00 held until June 2 for standard risk review\n$100.00 payment received, $3.00 platform fee applied\n```\n\nThat copy is short, but it is backed by a precise ledger model."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is letting engineers build ledger states without product definitions. That leads to support and UI confusion later.\n\nAnother mistake is hiding holds from users. If money is unavailable, the product should explain why and what happens next where legally and operationally safe.\n\nA third mistake is allowing manual adjustments without auditability. In money systems, manual fixes need controls."
      }
    ],
    "answer": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?",
    "reasoning": "Here is a requirements artifact:\n\n```txt\nFeature:\nSeller wallet balance\n\nUser-facing balances:\n- Available for payout\n- Pending settlement\n- Held in reserve\n\nLedger events:\n- Payment received\n- Platform fee assessed\n- Risk reserve hold created\n- Funds settled\n- Payout initiated\n- Payout completed\n- Dispute opened\n- Hold released or extended\n\nRules:\n- Users can only withdraw available balance.\n- Pending funds become available after settlement.\n- Risk holds reduce available balance.\n- Every balance change must be traceable to a ledger event.\n- Manual adjustments require reason code, approver, and audit log.\n\nSupport view:\n- Current balance\n- Available balance\n- Pending amount\n- Held amount\n- Hold reason\n- Expected release date\n- Related transaction IDs\n```\n\nThe TPM also needs to define user copy:\n\n```txt\n$87.00 available\n$10.00 held until June 2 for standard risk review\n$100.00 payment received, $3.00 platform fee applied\n```\n\nThat copy is short, but it is backed by a precise ledger model.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is available balance different from current balance?",
      "What is a hold?",
      "Why does every balance change need an event?",
      "What should support see when a user asks about missing money?",
      "Why are manual adjustments risky?"
    ],
    "interviewAnswer": "I would define ledger requirements by separating current, available, pending, and held balances; mapping every balance change to immutable events; defining hold reasons and release rules; adding support visibility; and requiring audit logs for manual changes.\n\nA strong TPM answer shows that balances are product promises backed by accounting-grade system behavior.",
    "sourceLinks": [
      {
        "label": "Modern Treasury: Ledgers",
        "url": "https://www.moderntreasury.com/ledgers"
      },
      {
        "label": "Stripe Treasury: Working with balances and transactions",
        "url": "https://docs.stripe.com/treasury/account-management/working-with-balances-and-transactions"
      }
    ],
    "beginnerExplanation": "A ledger is the system of record for money movement. It answers: how much money is available, where did it come from, where did it go, what is pending, and what can be proven later?\n\nThe beginner mistake is thinking a balance is just one number in a database row. In fintech, a user can have several balance concepts at the same time.\n\n```txt\nCurrent balance:\nAll funds recorded in the account.\n\nAvailable balance:\nFunds the user can actually spend or withdraw.\n\nPending balance:\nFunds not final yet, such as incoming settlement or card authorization.\n\nHeld balance:\nFunds reserved for risk, dispute, compliance, or operational reasons.\n```\n\nIf the product mixes these up, users may spend money they should not spend, support may give wrong answers, and finance may fail reconciliation.",
    "example": "Imagine a marketplace wallet. A seller receives a $100 payment. The platform holds $10 as a risk reserve, charges a $3 fee, and makes $87 available for payout after settlement.\n\nA weak requirement says:\n\n```txt\nShow seller balance.\n```\n\nA strong requirement asks:\n\n```txt\nWhich balance is shown?\nWhen does it become available?\nWhat is held and why?\nCan the hold expire?\nWho can override it?\nWhat audit trail proves the calculation?\nWhat happens if the payment is reversed?\n```\n\nThe product needs to explain money states without exposing accounting internals to the user.",
    "commonMistakes": "A common mistake is letting engineers build ledger states without product definitions. That leads to support and UI confusion later.\n\nAnother mistake is hiding holds from users. If money is unavailable, the product should explain why and what happens next where legally and operationally safe.\n\nA third mistake is allowing manual adjustments without auditability. In money systems, manual fixes need controls."
  },
  {
    "id": "tpm-llm-cost-latency-tradeoffs",
    "track": "TPM",
    "category": "AI Product",
    "level": "Intermediate",
    "question": "How would you manage cost and latency tradeoffs for an LLM-powered feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.\n\nThe beginner mistake is picking the strongest model for everything. That may work in a demo but fail in production if responses are too slow or too expensive.\n\nThe TPM needs to think in product tiers:\n\n```txt\nHigh-quality model:\nBetter reasoning, higher cost, often higher latency.\n\nSmaller or faster model:\nLower cost and faster, but may need narrower tasks or stricter guardrails.\n\nCached or reused output:\nFast and cheap when the answer does not need fresh reasoning.\n\nHuman review:\nSlower and more expensive, but safer for high-risk outcomes.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI support assistant in a remittance app.\n\nNot every task needs the same model:\n\n```txt\nClassify ticket category:\nFast, cheap model may be enough.\n\nSummarize long case history:\nMay need a model with larger context.\n\nDraft customer response for failed transfer:\nNeeds accuracy and policy grounding.\n\nRecommend fraud action:\nMay need human review regardless of model.\n```\n\nThe TPM should map task risk and complexity before choosing model strategy."
      },
      {
        "title": "Make it practical",
        "body": "Here is a cost-latency artifact:\n\n```txt\nFeature:\nAI support assistant\n\nTask 1:\nIntent classification\nTarget latency: under 500 ms\nQuality requirement: medium\nModel strategy: small model\n\nTask 2:\nCase summary\nTarget latency: under 3 seconds\nQuality requirement: high factual accuracy\nModel strategy: stronger model, structured output\n\nTask 3:\nCustomer reply draft\nTarget latency: under 5 seconds\nQuality requirement: high, policy grounded\nModel strategy: stronger model plus retrieval\n\nTask 4:\nCompliance-sensitive answer\nTarget latency: human workflow acceptable\nQuality requirement: very high\nModel strategy: draft-only with human approval\n```\n\nThen define controls:\n\n```txt\nOptimization levers:\n- Shorter prompts\n- Retrieval only when needed\n- Prompt caching\n- Smaller model for classification\n- Batch processing for non-urgent work\n- Output length limits\n- Reuse prior summaries\n- Escalate high-risk tasks instead of over-automating\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is optimizing cost before defining acceptable quality. Cheap wrong answers are expensive.\n\nAnother mistake is optimizing quality without user patience. A perfect answer that takes too long may not work in support.\n\nA third mistake is ignoring usage growth. A feature that is affordable with 1,000 requests may become painful at 1 million."
      }
    ],
    "answer": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.",
    "reasoning": "Here is a cost-latency artifact:\n\n```txt\nFeature:\nAI support assistant\n\nTask 1:\nIntent classification\nTarget latency: under 500 ms\nQuality requirement: medium\nModel strategy: small model\n\nTask 2:\nCase summary\nTarget latency: under 3 seconds\nQuality requirement: high factual accuracy\nModel strategy: stronger model, structured output\n\nTask 3:\nCustomer reply draft\nTarget latency: under 5 seconds\nQuality requirement: high, policy grounded\nModel strategy: stronger model plus retrieval\n\nTask 4:\nCompliance-sensitive answer\nTarget latency: human workflow acceptable\nQuality requirement: very high\nModel strategy: draft-only with human approval\n```\n\nThen define controls:\n\n```txt\nOptimization levers:\n- Shorter prompts\n- Retrieval only when needed\n- Prompt caching\n- Smaller model for classification\n- Batch processing for non-urgent work\n- Output length limits\n- Reuse prior summaries\n- Escalate high-risk tasks instead of over-automating\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why should not every task use the strongest model?",
      "What is a latency target?",
      "Why can output length affect cost and speed?",
      "When is human review better than a bigger model?",
      "What metrics show AI unit economics?"
    ],
    "interviewAnswer": "I would manage LLM cost and latency by splitting the workflow into tasks, setting quality and latency targets, choosing model strategy per task, using caching or smaller models where safe, limiting output, and monitoring cost per successful outcome.\n\nA strong TPM answer connects AI model choices to user experience and unit economics.",
    "sourceLinks": [
      {
        "label": "OpenAI Docs: Latency optimization",
        "url": "https://platform.openai.com/docs/guides/latency-optimization"
      },
      {
        "label": "OpenAI Docs: Cost optimization",
        "url": "https://platform.openai.com/docs/guides/cost-optimization"
      }
    ],
    "beginnerExplanation": "LLM features have product economics. Every request can carry cost, latency, and quality tradeoffs.\n\nThe beginner mistake is picking the strongest model for everything. That may work in a demo but fail in production if responses are too slow or too expensive.\n\nThe TPM needs to think in product tiers:\n\n```txt\nHigh-quality model:\nBetter reasoning, higher cost, often higher latency.\n\nSmaller or faster model:\nLower cost and faster, but may need narrower tasks or stricter guardrails.\n\nCached or reused output:\nFast and cheap when the answer does not need fresh reasoning.\n\nHuman review:\nSlower and more expensive, but safer for high-risk outcomes.\n```",
    "example": "Imagine an AI support assistant in a remittance app.\n\nNot every task needs the same model:\n\n```txt\nClassify ticket category:\nFast, cheap model may be enough.\n\nSummarize long case history:\nMay need a model with larger context.\n\nDraft customer response for failed transfer:\nNeeds accuracy and policy grounding.\n\nRecommend fraud action:\nMay need human review regardless of model.\n```\n\nThe TPM should map task risk and complexity before choosing model strategy.",
    "commonMistakes": "A common mistake is optimizing cost before defining acceptable quality. Cheap wrong answers are expensive.\n\nAnother mistake is optimizing quality without user patience. A perfect answer that takes too long may not work in support.\n\nA third mistake is ignoring usage growth. A feature that is affordable with 1,000 requests may become painful at 1 million."
  },
  {
    "id": "tpm-migration-communications",
    "track": "TPM",
    "category": "Migration & Change Management",
    "level": "Intermediate",
    "question": "How would you communicate a technical migration to customers and internal teams?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.\n\nThe beginner mistake is treating migration communication as a launch announcement. Migration communication is really change management. Different groups need different information at different times.\n\nCustomers care about:\n\n```txt\nWill anything break?\nWill my data change?\nDo I need to do anything?\nWhen is this happening?\nWho do I contact if something looks wrong?\n```\n\nInternal teams care about:\n\n```txt\nWhat is changing?\nWho is affected?\nWhat is the rollout plan?\nWhat are the known risks?\nHow do we support, monitor, and roll back?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the company is migrating customers from an old reporting system to a new analytics platform.\n\nA weak communication plan says:\n\n```txt\nEmail customers when the migration is done.\n```\n\nThat is too late. If reports look different, exports change, or data refresh timing changes, customers and support will be surprised.\n\nA better plan segments the audience:\n\n```txt\nInternal engineering:\nTechnical rollout, data validation, rollback, monitoring.\n\nSupport:\nCustomer-facing explanation, known differences, escalation path.\n\nSales and customer success:\nWhich accounts are affected, timing, benefits, risks.\n\nCustomers:\nWhat changes, when, what action is needed, how to get help.\n\nLeadership:\nProgress, risk, customer impact, decision points.\n```\n\nThe message should match the audience. Customers do not need the database migration strategy. Support does need enough detail to answer real questions."
      },
      {
        "title": "Make it practical",
        "body": "Here is a migration communications plan:\n\n```txt\nMigration:\nMove business reporting from legacy reports to new analytics platform.\n\nCustomer-facing promise:\nReports will be faster, easier to filter, and exportable in the same formats.\n\nCustomer impact:\n- Report layout changes\n- Export names change\n- Historical data remains available\n- No action required for most customers\n- API report endpoint changes for customers using automation\n\nTimeline:\nWeek 1: internal validation\nWeek 2: beta customers\nWeek 3: 20 percent rollout\nWeek 4: full rollout if guardrails pass\n\nCustomer comms:\n- 14 days before: explain change and timeline\n- 3 days before: reminder with support link\n- Day of migration: confirmation and known differences\n- After migration: check-in for high-value accounts\n\nSupport enablement:\n- Macro for \"what changed\"\n- Known differences page\n- Escalation tag\n- Rollback contact\n- Data validation checklist\n```\n\nHere is a customer email structure:\n\n```txt\nSubject:\nUpcoming reporting update on May 28\n\nWhat is changing:\nYour reports will move to a faster analytics experience with the same historical data.\n\nWhen:\nWe plan to migrate your workspace between May 28 and May 30.\n\nWhat you need to do:\nMost customers do not need to take action. If you use automated report exports, review the endpoint notes linked below.\n\nWhat may look different:\nSome report names and filters have changed. Export formats remain available.\n\nHelp:\nContact support if a report looks missing or if totals do not match expectations.\n```\n\nGood migration communication reduces surprise. It does not promise zero risk."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is communicating only the benefit. Customers also need to know what changes and what action is required.\n\nAnother mistake is sending the same message to every audience. Engineering, support, executives, and customers need different levels of detail.\n\nA third mistake is not preparing support. If support learns from customers, the migration already feels sloppy."
      }
    ],
    "answer": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.",
    "reasoning": "Here is a migration communications plan:\n\n```txt\nMigration:\nMove business reporting from legacy reports to new analytics platform.\n\nCustomer-facing promise:\nReports will be faster, easier to filter, and exportable in the same formats.\n\nCustomer impact:\n- Report layout changes\n- Export names change\n- Historical data remains available\n- No action required for most customers\n- API report endpoint changes for customers using automation\n\nTimeline:\nWeek 1: internal validation\nWeek 2: beta customers\nWeek 3: 20 percent rollout\nWeek 4: full rollout if guardrails pass\n\nCustomer comms:\n- 14 days before: explain change and timeline\n- 3 days before: reminder with support link\n- Day of migration: confirmation and known differences\n- After migration: check-in for high-value accounts\n\nSupport enablement:\n- Macro for \"what changed\"\n- Known differences page\n- Escalation tag\n- Rollback contact\n- Data validation checklist\n```\n\nHere is a customer email structure:\n\n```txt\nSubject:\nUpcoming reporting update on May 28\n\nWhat is changing:\nYour reports will move to a faster analytics experience with the same historical data.\n\nWhen:\nWe plan to migrate your workspace between May 28 and May 30.\n\nWhat you need to do:\nMost customers do not need to take action. If you use automated report exports, review the endpoint notes linked below.\n\nWhat may look different:\nSome report names and filters have changed. Export formats remain available.\n\nHelp:\nContact support if a report looks missing or if totals do not match expectations.\n```\n\nGood migration communication reduces surprise. It does not promise zero risk.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is migration communication different from a launch announcement?",
      "What do customers need to know during a migration?",
      "Why should support be enabled before customers are notified?",
      "What should a customer migration email include?",
      "How can rollout stages reduce migration risk?"
    ],
    "interviewAnswer": "I would communicate a migration by segmenting audiences, explaining what changes, who is affected, timeline, required actions, risks, support path, and rollback or mitigation plans. I would prepare internal teams before customer communication and use staged rollout updates.\n\nA strong TPM answer shows that migration success depends on trust, timing, support readiness, and clear expectations, not only technical execution.",
    "sourceLinks": [
      {
        "label": "AWS: Migration strategies",
        "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html"
      },
      {
        "label": "Martin Fowler: Strangler Fig Application",
        "url": "https://martinfowler.com/bliki/StranglerFigApplication.html"
      }
    ],
    "beginnerExplanation": "A technical migration moves users, data, traffic, workflows, or systems from an old implementation to a new one.\n\nThe beginner mistake is treating migration communication as a launch announcement. Migration communication is really change management. Different groups need different information at different times.\n\nCustomers care about:\n\n```txt\nWill anything break?\nWill my data change?\nDo I need to do anything?\nWhen is this happening?\nWho do I contact if something looks wrong?\n```\n\nInternal teams care about:\n\n```txt\nWhat is changing?\nWho is affected?\nWhat is the rollout plan?\nWhat are the known risks?\nHow do we support, monitor, and roll back?\n```",
    "example": "Imagine the company is migrating customers from an old reporting system to a new analytics platform.\n\nA weak communication plan says:\n\n```txt\nEmail customers when the migration is done.\n```\n\nThat is too late. If reports look different, exports change, or data refresh timing changes, customers and support will be surprised.\n\nA better plan segments the audience:\n\n```txt\nInternal engineering:\nTechnical rollout, data validation, rollback, monitoring.\n\nSupport:\nCustomer-facing explanation, known differences, escalation path.\n\nSales and customer success:\nWhich accounts are affected, timing, benefits, risks.\n\nCustomers:\nWhat changes, when, what action is needed, how to get help.\n\nLeadership:\nProgress, risk, customer impact, decision points.\n```\n\nThe message should match the audience. Customers do not need the database migration strategy. Support does need enough detail to answer real questions.",
    "commonMistakes": "A common mistake is communicating only the benefit. Customers also need to know what changes and what action is required.\n\nAnother mistake is sending the same message to every audience. Engineering, support, executives, and customers need different levels of detail.\n\nA third mistake is not preparing support. If support learns from customers, the migration already feels sloppy."
  },
  {
    "id": "tpm-migration-planning",
    "track": "TPM",
    "category": "Technical Strategy",
    "level": "Intermediate",
    "question": "How would you plan a platform or data migration?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.\n\nFor a TPM, the migration is a product and operations problem, not just an engineering project. You need to know what changes for users, what changes for internal teams, what data must be preserved, how the team validates correctness, and how to recover if the migration goes wrong."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine moving scheduled transfers from an old payments service to a new orchestration platform.\n\nThe risky questions are:\n\n- Which scheduled transfers already exist?\n- Which service owns them during migration?\n- Can both systems execute the same transfer by accident?\n- What happens to transfers scheduled during the migration window?\n- How do we verify every schedule moved correctly?\n- Can we roll back?\n- What does support see if a user asks about a migrated transfer?\n\nThis is why a migration plan needs phases.\n\n```txt\nPhase 1: Inventory\n- List data, users, workflows, dependencies, and owners.\n\nPhase 2: Dual read or shadow mode\n- New system observes or mirrors behavior without owning the user outcome.\n\nPhase 3: Limited migration\n- Move a low-risk cohort or one corridor.\n\nPhase 4: Expand\n- Increase traffic or data volume after validation.\n\nPhase 5: Decommission\n- Remove old paths only after no active dependency remains.\n```"
      },
      {
        "title": "Make it practical",
        "body": "I would define migration readiness before moving anything.\n\n```txt\nMigration readiness\n\n- Source data is understood.\n- Target data model is mapped.\n- Validation rules are written.\n- Duplicate execution risk is controlled.\n- Rollback or forward-fix plan exists.\n- Support and operations have visibility.\n- Monitoring covers success, failure, latency, and data mismatch.\n- Stakeholders know the migration window and escalation path.\n```\n\nFor data, I would define reconciliation checks:\n\n```txt\nReconciliation checks\n\n- Count of records before and after.\n- Sum of money fields before and after.\n- Status mapping completeness.\n- Missing required fields.\n- Duplicate IDs.\n- Failed transformations.\n- Sample manual review of high-risk records.\n```\n\nThe TPM should also define communication. Users may not need to know about a backend migration, but support and operations usually do."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating migration as complete when data is copied. It is not complete until the product works, the data reconciles, and old dependencies are safely retired.\n\nAnother mistake is forgetting in-flight activity. Users may create, edit, or cancel things while migration is happening.\n\nA third mistake is assuming rollback is always easy. If the new system mutates data, the team may need a forward-fix plan instead."
      }
    ],
    "answer": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.",
    "reasoning": "I would define migration readiness before moving anything.\n\n```txt\nMigration readiness\n\n- Source data is understood.\n- Target data model is mapped.\n- Validation rules are written.\n- Duplicate execution risk is controlled.\n- Rollback or forward-fix plan exists.\n- Support and operations have visibility.\n- Monitoring covers success, failure, latency, and data mismatch.\n- Stakeholders know the migration window and escalation path.\n```\n\nFor data, I would define reconciliation checks:\n\n```txt\nReconciliation checks\n\n- Count of records before and after.\n- Sum of money fields before and after.\n- Status mapping completeness.\n- Missing required fields.\n- Duplicate IDs.\n- Failed transformations.\n- Sample manual review of high-risk records.\n```\n\nThe TPM should also define communication. Users may not need to know about a backend migration, but support and operations usually do.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is migration a product risk, not only an engineering task?",
      "What does shadow mode help test?",
      "Why is reconciliation important?",
      "What makes rollback hard?",
      "What should support know during a migration?"
    ],
    "interviewAnswer": "I would plan a migration by inventorying users, data, workflows, dependencies, and risks; defining phases; validating data mapping; controlling duplicate execution; adding reconciliation checks; preparing monitoring, support, rollback or forward-fix plans; and migrating gradually.\n\nA strong answer shows that the goal is not simply moving data. The goal is preserving customer trust while changing the system underneath.",
    "sourceLinks": [
      {
        "label": "Martin Fowler: Strangler Fig Application",
        "url": "https://martinfowler.com/bliki/StranglerFigApplication.html"
      },
      {
        "label": "AWS Prescriptive Guidance: Migration strategies",
        "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/migration-strategies.html"
      }
    ],
    "beginnerExplanation": "A migration moves users, data, traffic, or workflows from an old system to a new one. Migrations are risky because the user may not care that a new platform is cleaner. They care whether their data is correct, the product still works, and nothing disappears.\n\nFor a TPM, the migration is a product and operations problem, not just an engineering project. You need to know what changes for users, what changes for internal teams, what data must be preserved, how the team validates correctness, and how to recover if the migration goes wrong.",
    "example": "Imagine moving scheduled transfers from an old payments service to a new orchestration platform.\n\nThe risky questions are:\n\n- Which scheduled transfers already exist?\n- Which service owns them during migration?\n- Can both systems execute the same transfer by accident?\n- What happens to transfers scheduled during the migration window?\n- How do we verify every schedule moved correctly?\n- Can we roll back?\n- What does support see if a user asks about a migrated transfer?\n\nThis is why a migration plan needs phases.\n\n```txt\nPhase 1: Inventory\n- List data, users, workflows, dependencies, and owners.\n\nPhase 2: Dual read or shadow mode\n- New system observes or mirrors behavior without owning the user outcome.\n\nPhase 3: Limited migration\n- Move a low-risk cohort or one corridor.\n\nPhase 4: Expand\n- Increase traffic or data volume after validation.\n\nPhase 5: Decommission\n- Remove old paths only after no active dependency remains.\n```",
    "commonMistakes": "A common mistake is treating migration as complete when data is copied. It is not complete until the product works, the data reconciles, and old dependencies are safely retired.\n\nAnother mistake is forgetting in-flight activity. Users may create, edit, or cancel things while migration is happening.\n\nA third mistake is assuming rollback is always easy. If the new system mutates data, the team may need a forward-fix plan instead."
  },
  {
    "id": "tpm-model-drift-risk-systems",
    "track": "TPM",
    "category": "AI & Risk",
    "level": "Intermediate",
    "question": "How would you monitor model drift in an AI risk system?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.\n\nThe beginner mistake is thinking a model that performed well at launch will keep performing well. Risk systems need ongoing monitoring because the data and adversaries do not stay still.\n\nThere are two useful drift ideas:\n\n```txt\nData drift:\nInputs change. Example: more transactions now come from a new country.\n\nPerformance drift:\nOutcomes get worse. Example: false positives rise or fraud misses increase.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI fraud model that worked well for US card payments. The company launches a new remittance corridor. Transaction sizes, names, devices, funding sources, and fraud behavior now look different.\n\nIf the model is not monitored, it may:\n\n```txt\nBlock too many legitimate users.\nMiss new fraud patterns.\nCreate analyst backlog.\nTreat normal corridor behavior as suspicious.\nOverfit to old fraud signals.\n```\n\nThe TPM should plan monitoring before expansion."
      },
      {
        "title": "Make it practical",
        "body": "Here is a drift monitoring artifact:\n\n```txt\nSystem:\nAI fraud risk model\n\nInput drift metrics:\n- Transaction amount distribution\n- Corridor mix\n- Device mix\n- New recipient rate\n- User tenure distribution\n\nOutcome metrics:\n- Confirmed fraud rate\n- False-positive rate\n- Manual review rate\n- Analyst override rate\n- Appeal success rate\n- Fraud loss after approval\n\nSegments:\n- Corridor\n- Funding method\n- New versus returning users\n- Business versus consumer\n- High-value transfers\n\nReview cadence:\n- Daily during new corridor launch\n- Weekly for normal operations\n- Immediate review after fraud spike or policy change\n\nActions:\n- Adjust thresholds\n- Add rules\n- Retrain model\n- Narrow rollout\n- Increase manual review\n- Pause automated decisions\n```\n\nThe TPM should also define ownership. Data science may monitor model metrics, but product owns whether the current behavior is acceptable for users and the business."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is monitoring only aggregate performance. Drift often appears in one segment first.\n\nAnother mistake is waiting for fraud losses before acting. Leading indicators like analyst overrides and false positives can warn earlier.\n\nA third mistake is not documenting model changes. If performance changes after retraining, the team needs traceability."
      }
    ],
    "answer": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.",
    "reasoning": "Here is a drift monitoring artifact:\n\n```txt\nSystem:\nAI fraud risk model\n\nInput drift metrics:\n- Transaction amount distribution\n- Corridor mix\n- Device mix\n- New recipient rate\n- User tenure distribution\n\nOutcome metrics:\n- Confirmed fraud rate\n- False-positive rate\n- Manual review rate\n- Analyst override rate\n- Appeal success rate\n- Fraud loss after approval\n\nSegments:\n- Corridor\n- Funding method\n- New versus returning users\n- Business versus consumer\n- High-value transfers\n\nReview cadence:\n- Daily during new corridor launch\n- Weekly for normal operations\n- Immediate review after fraud spike or policy change\n\nActions:\n- Adjust thresholds\n- Add rules\n- Retrain model\n- Narrow rollout\n- Increase manual review\n- Pause automated decisions\n```\n\nThe TPM should also define ownership. Data science may monitor model metrics, but product owns whether the current behavior is acceptable for users and the business.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is model drift?",
      "What is the difference between data drift and performance drift?",
      "Why should drift be monitored by segment?",
      "What early warning metrics matter?",
      "What actions can the team take when drift appears?"
    ],
    "interviewAnswer": "I would monitor model drift by tracking input distributions, outcome metrics, false positives, fraud misses, overrides, appeals, and segment-level performance. I would define review cadence, alert thresholds, ownership, and actions like threshold changes, retraining, added rules, or pausing automation.\n\nA strong TPM answer treats AI risk systems as living products that need continuous governance.",
    "sourceLinks": [
      {
        "label": "NIST: AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        "label": "Federal Reserve: SR 11-7 model risk management",
        "url": "https://www.federalreserve.gov/boarddocs/srletters/2011/sr1107a1.pdf"
      }
    ],
    "beginnerExplanation": "Model drift happens when a model's performance changes because the world around it changes. Fraud patterns change. Customer behavior changes. New corridors launch. Economic conditions shift. Attackers adapt.\n\nThe beginner mistake is thinking a model that performed well at launch will keep performing well. Risk systems need ongoing monitoring because the data and adversaries do not stay still.\n\nThere are two useful drift ideas:\n\n```txt\nData drift:\nInputs change. Example: more transactions now come from a new country.\n\nPerformance drift:\nOutcomes get worse. Example: false positives rise or fraud misses increase.\n```",
    "example": "Imagine an AI fraud model that worked well for US card payments. The company launches a new remittance corridor. Transaction sizes, names, devices, funding sources, and fraud behavior now look different.\n\nIf the model is not monitored, it may:\n\n```txt\nBlock too many legitimate users.\nMiss new fraud patterns.\nCreate analyst backlog.\nTreat normal corridor behavior as suspicious.\nOverfit to old fraud signals.\n```\n\nThe TPM should plan monitoring before expansion.",
    "commonMistakes": "A common mistake is monitoring only aggregate performance. Drift often appears in one segment first.\n\nAnother mistake is waiting for fraud losses before acting. Leading indicators like analyst overrides and false positives can warn earlier.\n\nA third mistake is not documenting model changes. If performance changes after retraining, the team needs traceability."
  },
  {
    "id": "tpm-onboarding-activation-metrics",
    "track": "TPM",
    "category": "Metrics",
    "level": "Foundational",
    "question": "How would you measure onboarding and activation for a product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.\n\nThe beginner mistake is treating signup as activation. A signup means someone entered the door. Activation means they did something that makes future usage more likely.\n\nFor a remittance app, activation might be completing the first successful transfer. For a developer API, activation might be making the first successful sandbox request and receiving a webhook. For a TPM, the work is to define the behavior that proves value, then measure the path to that behavior."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a money transfer product.\n\nThe onboarding funnel might be:\n\n```txt\n1. Account created.\n2. Profile completed.\n3. Identity submitted.\n4. Identity approved.\n5. Recipient added.\n6. Quote viewed.\n7. Transfer started.\n8. Transfer funded.\n9. Transfer completed.\n```\n\nThe activation metric may be \"first successful transfer completed within seven days of signup.\" That is stronger than \"user clicked send\" because it captures the real product promise.\n\nBut activation can have guardrails. If users activate faster but failed transfers or fraud alerts rise, the product may be creating risk."
      },
      {
        "title": "Make it practical",
        "body": "I would define metrics in layers.\n\n```txt\nPrimary activation metric\n- First successful transfer within seven days.\n\nFunnel metrics\n- Signup completion.\n- Profile completion.\n- Verification approval.\n- Recipient creation.\n- Quote view.\n- Transfer start.\n- Transfer completion.\n\nQuality metrics\n- Verification retry rate.\n- Transfer failure rate.\n- Time stuck in pending.\n- Support contacts during onboarding.\n\nRisk guardrails\n- Fraud alerts.\n- Compliance review rate.\n- Mistaken recipient reports.\n- Chargebacks or reversals.\n```\n\nThen I would segment the metrics. New users from one country may fail identity checks more often. Mobile users may abandon document capture. Users with unsupported payout methods may stop at recipient setup. Segmentation turns \"activation is low\" into a fixable product problem.\n\nI would also define event instrumentation before launch. If the app does not log each step consistently, the team will not know where users are dropping."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is choosing an activation metric because it is easy to measure. The metric should represent value, not convenience.\n\nAnother mistake is ignoring time. Activation in one day and activation in sixty days mean different things.\n\nA third mistake is optimizing conversion while damaging trust or risk. In regulated products, guardrails matter."
      }
    ],
    "answer": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.",
    "reasoning": "I would define metrics in layers.\n\n```txt\nPrimary activation metric\n- First successful transfer within seven days.\n\nFunnel metrics\n- Signup completion.\n- Profile completion.\n- Verification approval.\n- Recipient creation.\n- Quote view.\n- Transfer start.\n- Transfer completion.\n\nQuality metrics\n- Verification retry rate.\n- Transfer failure rate.\n- Time stuck in pending.\n- Support contacts during onboarding.\n\nRisk guardrails\n- Fraud alerts.\n- Compliance review rate.\n- Mistaken recipient reports.\n- Chargebacks or reversals.\n```\n\nThen I would segment the metrics. New users from one country may fail identity checks more often. Mobile users may abandon document capture. Users with unsupported payout methods may stop at recipient setup. Segmentation turns \"activation is low\" into a fixable product problem.\n\nI would also define event instrumentation before launch. If the app does not log each step consistently, the team will not know where users are dropping.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between signup and activation?",
      "Why should activation represent meaningful value?",
      "What funnel steps might matter in a remittance app?",
      "Why do guardrail metrics matter?",
      "How can segmentation make onboarding problems easier to fix?"
    ],
    "interviewAnswer": "I would define activation as the first behavior that proves the user experienced meaningful value, then measure the onboarding funnel leading to that behavior. For a remittance app, that might be first successful transfer within seven days.\n\nA strong answer includes funnel metrics, quality metrics, risk guardrails, segmentation, and instrumentation. It avoids treating signup or clicks as proof of activation.",
    "sourceLinks": [
      {
        "label": "Amplitude: Activation metric",
        "url": "https://amplitude.com/blog/activation-metric"
      },
      {
        "label": "Atlassian Team Playbook: Goals, signals, measures",
        "url": "https://www.atlassian.com/team-playbook/plays/goals-signals-measures"
      }
    ],
    "beginnerExplanation": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.\n\nThe beginner mistake is treating signup as activation. A signup means someone entered the door. Activation means they did something that makes future usage more likely.\n\nFor a remittance app, activation might be completing the first successful transfer. For a developer API, activation might be making the first successful sandbox request and receiving a webhook. For a TPM, the work is to define the behavior that proves value, then measure the path to that behavior.",
    "example": "Imagine a money transfer product.\n\nThe onboarding funnel might be:\n\n```txt\n1. Account created.\n2. Profile completed.\n3. Identity submitted.\n4. Identity approved.\n5. Recipient added.\n6. Quote viewed.\n7. Transfer started.\n8. Transfer funded.\n9. Transfer completed.\n```\n\nThe activation metric may be \"first successful transfer completed within seven days of signup.\" That is stronger than \"user clicked send\" because it captures the real product promise.\n\nBut activation can have guardrails. If users activate faster but failed transfers or fraud alerts rise, the product may be creating risk.",
    "commonMistakes": "A common mistake is choosing an activation metric because it is easy to measure. The metric should represent value, not convenience.\n\nAnother mistake is ignoring time. Activation in one day and activation in sixty days mean different things.\n\nA third mistake is optimizing conversion while damaging trust or risk. In regulated products, guardrails matter."
  },
  {
    "id": "tpm-partner-outage-fallback",
    "track": "TPM",
    "category": "Operations",
    "level": "Intermediate",
    "question": "How would you handle a critical partner API outage?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.\n\nFor a TPM, the key question is not only \"when will the partner come back?\" It is \"how do we protect users, reduce harm, communicate clearly, and keep the business operating while the dependency is unhealthy?\"\n\nIf the partner moves money, verifies identity, sends notifications, or screens fraud, the outage can create financial, compliance, support, and trust risk."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a payout partner is timing out. Users are trying to send money.\n\nThe dangerous cases are:\n\n- A request timed out, but the partner may still process it.\n- A user retries and might create a duplicate payout.\n- Your app shows failure even though money may move later.\n- Webhooks are delayed, so status is stale.\n- Support cannot tell customers what happened.\n\nThe TPM should help classify the outage:\n\n```txt\nSeverity questions\n\n- Is every user affected or only one corridor?\n- Are new requests failing, or only status updates?\n- Is money movement uncertain?\n- Can users safely retry?\n- Is there a backup partner?\n- What message should users and support see?\n```"
      },
      {
        "title": "Make it practical",
        "body": "I would handle the outage in phases.\n\nFirst, contain risk. If duplicate money movement is possible, stop new attempts or disable retries until the state is known.\n\nSecond, degrade gracefully. If a backup partner exists, route eligible traffic there. If not, show clear pending or unavailable states instead of pretending everything is fine.\n\nThird, communicate internally. Engineering, support, operations, compliance, and leadership need a shared incident channel and status updates.\n\nFourth, communicate to users when needed. The message should explain what is affected, what users can do, and when the next update is expected.\n\nFifth, recover and reconcile. When the partner returns, confirm final statuses, identify stuck transactions, resolve duplicates, and update customers.\n\n```txt\nFallback decision guide\n\nIf partner status is unknown:\n- Pause new requests if duplicate execution is possible.\n- Show pending state for affected transactions.\n- Disable user retry until idempotency or final state is confirmed.\n\nIf backup partner is available:\n- Route only supported corridors or payment types.\n- Monitor failure rate and cost.\n- Keep partner-specific limits visible to support.\n\nIf no fallback exists:\n- Stop the affected flow.\n- Preserve user input where safe.\n- Notify when service returns.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is letting users retry when the first request may still complete. That can create duplicates.\n\nAnother mistake is hiding the problem behind generic errors. Users and support need the truth in plain language.\n\nA third mistake is ending the incident when the partner returns. Recovery also includes reconciliation, customer communication, and operational cleanup."
      }
    ],
    "answer": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.",
    "reasoning": "I would handle the outage in phases.\n\nFirst, contain risk. If duplicate money movement is possible, stop new attempts or disable retries until the state is known.\n\nSecond, degrade gracefully. If a backup partner exists, route eligible traffic there. If not, show clear pending or unavailable states instead of pretending everything is fine.\n\nThird, communicate internally. Engineering, support, operations, compliance, and leadership need a shared incident channel and status updates.\n\nFourth, communicate to users when needed. The message should explain what is affected, what users can do, and when the next update is expected.\n\nFifth, recover and reconcile. When the partner returns, confirm final statuses, identify stuck transactions, resolve duplicates, and update customers.\n\n```txt\nFallback decision guide\n\nIf partner status is unknown:\n- Pause new requests if duplicate execution is possible.\n- Show pending state for affected transactions.\n- Disable user retry until idempotency or final state is confirmed.\n\nIf backup partner is available:\n- Route only supported corridors or payment types.\n- Monitor failure rate and cost.\n- Keep partner-specific limits visible to support.\n\nIf no fallback exists:\n- Stop the affected flow.\n- Preserve user input where safe.\n- Notify when service returns.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why can a timeout be more dangerous than a clear failure?",
      "When should retries be disabled?",
      "What makes a fallback partner safe to use?",
      "Why does support need partner-specific visibility?",
      "What recovery work remains after the partner is back?"
    ],
    "interviewAnswer": "I would handle a partner outage by triaging scope and risk, containing harmful actions, disabling unsafe retries, routing to fallback where possible, communicating clearly, monitoring the affected flow, and reconciling final states after recovery.\n\nA strong TPM answer shows that partner outages are product incidents. The priority is customer trust, operational clarity, and safe recovery, not only waiting for the partner status page to turn green.",
    "sourceLinks": [
      {
        "label": "Google SRE: Addressing cascading failures",
        "url": "https://sre.google/sre-book/addressing-cascading-failures/"
      },
      {
        "label": "Atlassian: Incident management",
        "url": "https://www.atlassian.com/incident-management"
      }
    ],
    "beginnerExplanation": "A partner API outage happens when a system your product depends on becomes unavailable, slow, unreliable, or returns unclear results. The product may still be online, but the user journey is broken because an external dependency is broken.\n\nFor a TPM, the key question is not only \"when will the partner come back?\" It is \"how do we protect users, reduce harm, communicate clearly, and keep the business operating while the dependency is unhealthy?\"\n\nIf the partner moves money, verifies identity, sends notifications, or screens fraud, the outage can create financial, compliance, support, and trust risk.",
    "example": "Imagine a payout partner is timing out. Users are trying to send money.\n\nThe dangerous cases are:\n\n- A request timed out, but the partner may still process it.\n- A user retries and might create a duplicate payout.\n- Your app shows failure even though money may move later.\n- Webhooks are delayed, so status is stale.\n- Support cannot tell customers what happened.\n\nThe TPM should help classify the outage:\n\n```txt\nSeverity questions\n\n- Is every user affected or only one corridor?\n- Are new requests failing, or only status updates?\n- Is money movement uncertain?\n- Can users safely retry?\n- Is there a backup partner?\n- What message should users and support see?\n```",
    "commonMistakes": "A common mistake is letting users retry when the first request may still complete. That can create duplicates.\n\nAnother mistake is hiding the problem behind generic errors. Users and support need the truth in plain language.\n\nA third mistake is ending the incident when the partner returns. Recovery also includes reconciliation, customer communication, and operational cleanup."
  },
  {
    "id": "tpm-payments-remittance-requirements",
    "track": "TPM",
    "category": "Product Requirements",
    "level": "Intermediate",
    "question": "How would you define requirements for a payments or remittance feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.\n\nThe beginner mistake is writing only the happy path: \"User sends money to a recipient.\" A real payments feature has states, limits, fees, exchange rates, funding methods, compliance checks, partner statuses, reversals, refunds, retries, reconciliation, notifications, and support visibility.\n\nThe TPM's job is to turn the money movement into a clear product and system contract."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a user sends $100 to a family member in another country.\n\nThe product must answer:\n\n- Who is the sender?\n- Who is the recipient?\n- Is the sender verified?\n- Is the recipient allowed?\n- What is the exchange rate?\n- What fees apply?\n- How will the sender fund the transfer?\n- Which payout partner will deliver it?\n- What happens if funding succeeds but payout fails?\n- What status does the user see?\n- What does support see?\n\nThis is why requirements should include a state model.\n\n```txt\nTransfer states\n\nDraft\nQuote shown\nUser confirmed\nFunding pending\nFunded\nCompliance review\nPayout processing\nPaid\nFailed\nReversed\nRefunded\nUnknown\n```\n\nEach state should have allowed actions, user copy, support visibility, and system owner."
      },
      {
        "title": "Make it practical",
        "body": "I would write requirements across product, technical, risk, and operations.\n\n```txt\nCore requirements\n\n- User can enter amount, recipient, funding method, and payout method.\n- User sees fees, exchange rate, estimated delivery time, and total cost before confirming.\n- System checks user eligibility, recipient eligibility, limits, sanctions, and fraud risk before payout.\n- Each transfer has a unique idempotency key so retries do not create duplicates.\n- User receives clear status updates.\n- Support can search by transfer ID and see status history.\n- Reconciliation identifies partner mismatches.\n```\n\nThen I would define edge cases:\n\n```txt\nEdge cases\n\n- Funding fails.\n- Funding succeeds but payout fails.\n- Partner timeout.\n- Duplicate submit.\n- Exchange rate expires.\n- Recipient details are invalid.\n- Compliance review is required.\n- User cancels before funding.\n- Refund is required.\n```\n\nGood requirements make these cases explicit before engineering has to guess."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating payment status as a single success or failure. Real money movement often has pending, uncertain, reversed, and manually reviewed states.\n\nAnother mistake is ignoring idempotency. Retrying money movement without duplicate protection is dangerous.\n\nA third mistake is forgetting support and reconciliation. If customers ask where their money is, the company needs evidence."
      }
    ],
    "answer": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.",
    "reasoning": "I would write requirements across product, technical, risk, and operations.\n\n```txt\nCore requirements\n\n- User can enter amount, recipient, funding method, and payout method.\n- User sees fees, exchange rate, estimated delivery time, and total cost before confirming.\n- System checks user eligibility, recipient eligibility, limits, sanctions, and fraud risk before payout.\n- Each transfer has a unique idempotency key so retries do not create duplicates.\n- User receives clear status updates.\n- Support can search by transfer ID and see status history.\n- Reconciliation identifies partner mismatches.\n```\n\nThen I would define edge cases:\n\n```txt\nEdge cases\n\n- Funding fails.\n- Funding succeeds but payout fails.\n- Partner timeout.\n- Duplicate submit.\n- Exchange rate expires.\n- Recipient details are invalid.\n- Compliance review is required.\n- User cancels before funding.\n- Refund is required.\n```\n\nGood requirements make these cases explicit before engineering has to guess.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is the happy path not enough for payments?",
      "What states might a transfer move through?",
      "Why does idempotency matter?",
      "What should users see before confirming?",
      "Why do support and reconciliation need requirements?"
    ],
    "interviewAnswer": "I would define payments or remittance requirements by covering the full money-movement lifecycle: quote, confirmation, funding, compliance, payout, status updates, failure handling, refunds or reversals, idempotency, reconciliation, notifications, limits, and support tooling.\n\nA strong answer makes edge cases explicit and shows that customer trust depends on accurate status, safe retries, and operational visibility.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: PaymentIntents",
        "url": "https://docs.stripe.com/payments/payment-intents"
      },
      {
        "label": "Stripe Docs: Idempotent requests",
        "url": "https://docs.stripe.com/api/idempotent_requests"
      }
    ],
    "beginnerExplanation": "Payments and remittance features need unusually careful requirements because mistakes can move money incorrectly, block legitimate users, create regulatory risk, or overwhelm support.\n\nThe beginner mistake is writing only the happy path: \"User sends money to a recipient.\" A real payments feature has states, limits, fees, exchange rates, funding methods, compliance checks, partner statuses, reversals, refunds, retries, reconciliation, notifications, and support visibility.\n\nThe TPM's job is to turn the money movement into a clear product and system contract.",
    "example": "Imagine a user sends $100 to a family member in another country.\n\nThe product must answer:\n\n- Who is the sender?\n- Who is the recipient?\n- Is the sender verified?\n- Is the recipient allowed?\n- What is the exchange rate?\n- What fees apply?\n- How will the sender fund the transfer?\n- Which payout partner will deliver it?\n- What happens if funding succeeds but payout fails?\n- What status does the user see?\n- What does support see?\n\nThis is why requirements should include a state model.\n\n```txt\nTransfer states\n\nDraft\nQuote shown\nUser confirmed\nFunding pending\nFunded\nCompliance review\nPayout processing\nPaid\nFailed\nReversed\nRefunded\nUnknown\n```\n\nEach state should have allowed actions, user copy, support visibility, and system owner.",
    "commonMistakes": "A common mistake is treating payment status as a single success or failure. Real money movement often has pending, uncertain, reversed, and manually reviewed states.\n\nAnother mistake is ignoring idempotency. Retrying money movement without duplicate protection is dangerous.\n\nA third mistake is forgetting support and reconciliation. If customers ask where their money is, the company needs evidence."
  },
  {
    "id": "tpm-platform-product-sense",
    "track": "TPM",
    "category": "Platform Product",
    "level": "Intermediate",
    "question": "How would you show product sense for a platform or developer product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.\n\nFor a platform, the user might be a developer, partner, internal team, data analyst, operations team, or third-party app. They do not only care whether the product exists. They care whether it is understandable, reliable, stable, documented, testable, and safe to build on.\n\nThe beginner mistake is judging a platform only by visible features. A platform can have few screens and still be a major product. The experience may live in APIs, SDKs, logs, docs, sandbox behavior, uptime, permissions, and support.\n\nThe mental model is:\n\n```txt\nConsumer product:\nCan the user complete the task?\n\nPlatform product:\nCan another team or developer reliably build their own task on top of this?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a company offers a payments API.\n\nA shallow product-sense answer says:\n\n```txt\nMake the API fast and easy to use.\n```\n\nThat is true but too vague.\n\nA stronger answer names the platform experience:\n\n```txt\nDeveloper needs:\n- Understand the API quickly.\n- Test without moving real money.\n- Create payments safely.\n- Retry without duplicate charges.\n- Receive status updates.\n- Debug failures.\n- Trust versioning and change management.\n- Get help when production is broken.\n\nBusiness needs:\n- More successful integrations.\n- Lower support burden.\n- Higher payment volume.\n- Better partner trust.\n- Safer operations.\n```\n\nNow product sense becomes specific. The TPM might prioritize idempotency, sandbox data, webhook logs, clearer errors, or better onboarding before adding new endpoints."
      },
      {
        "title": "Make it practical",
        "body": "I would evaluate a platform product with a developer journey.\n\n```txt\nDeveloper journey for API product\n\n1. Discovery\nCan the developer understand what the product does?\n\n2. Access\nCan they get credentials and permissions?\n\n3. First success\nCan they make the first working request quickly?\n\n4. Real integration\nCan they handle auth, errors, retries, webhooks, and test data?\n\n5. Production\nCan they monitor usage, debug failures, and trust uptime?\n\n6. Change\nCan they survive version changes without surprise breakage?\n```\n\nThen I would pick metrics for each stage.\n\n```txt\nPlatform metrics\n\nActivation:\nTime to first successful API call\n\nIntegration health:\nWebhook delivery success, error rate, retry rate\n\nDeveloper experience:\nDocs search success, support tickets per integration\n\nBusiness:\nActive integrations, transaction volume, partner retention\n\nReliability:\nLatency, uptime, incident count, failed requests by endpoint\n```\n\nGood platform product sense means you can see the invisible user experience."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating documentation as separate from the product. For developer products, docs are part of the product surface.\n\nAnother mistake is ignoring failure paths. Developers judge platforms by what happens when things go wrong.\n\nA third mistake is shipping breaking changes casually. Platform users build businesses and workflows on top of your contracts."
      }
    ],
    "answer": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.",
    "reasoning": "I would evaluate a platform product with a developer journey.\n\n```txt\nDeveloper journey for API product\n\n1. Discovery\nCan the developer understand what the product does?\n\n2. Access\nCan they get credentials and permissions?\n\n3. First success\nCan they make the first working request quickly?\n\n4. Real integration\nCan they handle auth, errors, retries, webhooks, and test data?\n\n5. Production\nCan they monitor usage, debug failures, and trust uptime?\n\n6. Change\nCan they survive version changes without surprise breakage?\n```\n\nThen I would pick metrics for each stage.\n\n```txt\nPlatform metrics\n\nActivation:\nTime to first successful API call\n\nIntegration health:\nWebhook delivery success, error rate, retry rate\n\nDeveloper experience:\nDocs search success, support tickets per integration\n\nBusiness:\nActive integrations, transaction volume, partner retention\n\nReliability:\nLatency, uptime, incident count, failed requests by endpoint\n```\n\nGood platform product sense means you can see the invisible user experience.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Who are the users of a platform product?",
      "Why are docs part of the product experience?",
      "What is \"time to first successful API call\" measuring?",
      "Why do webhooks and logs matter for developer experience?",
      "How is platform product sense different from consumer product sense?"
    ],
    "interviewAnswer": "I would show platform product sense by focusing on the builder journey: discovery, access, first success, real integration, production operations, and change management. I would care about docs, sandbox, auth, errors, retries, webhooks, observability, reliability, versioning, and support.\n\nA strong answer shows that a platform product is not only endpoints. It is the full experience of building safely and confidently on top of the product.",
    "sourceLinks": [
      {
        "label": "OpenAPI Initiative: OpenAPI specification",
        "url": "https://learn.openapis.org/specification/"
      },
      {
        "label": "Google Cloud: API design guide",
        "url": "https://cloud.google.com/apis/design"
      }
    ],
    "beginnerExplanation": "Product sense for a consumer app often means understanding user motivation, workflow, usability, and business value. Product sense for a platform product means all of that, plus understanding that your \"user\" may be another builder.\n\nFor a platform, the user might be a developer, partner, internal team, data analyst, operations team, or third-party app. They do not only care whether the product exists. They care whether it is understandable, reliable, stable, documented, testable, and safe to build on.\n\nThe beginner mistake is judging a platform only by visible features. A platform can have few screens and still be a major product. The experience may live in APIs, SDKs, logs, docs, sandbox behavior, uptime, permissions, and support.\n\nThe mental model is:\n\n```txt\nConsumer product:\nCan the user complete the task?\n\nPlatform product:\nCan another team or developer reliably build their own task on top of this?\n```",
    "example": "Imagine a company offers a payments API.\n\nA shallow product-sense answer says:\n\n```txt\nMake the API fast and easy to use.\n```\n\nThat is true but too vague.\n\nA stronger answer names the platform experience:\n\n```txt\nDeveloper needs:\n- Understand the API quickly.\n- Test without moving real money.\n- Create payments safely.\n- Retry without duplicate charges.\n- Receive status updates.\n- Debug failures.\n- Trust versioning and change management.\n- Get help when production is broken.\n\nBusiness needs:\n- More successful integrations.\n- Lower support burden.\n- Higher payment volume.\n- Better partner trust.\n- Safer operations.\n```\n\nNow product sense becomes specific. The TPM might prioritize idempotency, sandbox data, webhook logs, clearer errors, or better onboarding before adding new endpoints.",
    "commonMistakes": "A common mistake is treating documentation as separate from the product. For developer products, docs are part of the product surface.\n\nAnother mistake is ignoring failure paths. Developers judge platforms by what happens when things go wrong.\n\nA third mistake is shipping breaking changes casually. Platform users build businesses and workflows on top of your contracts."
  },
  {
    "id": "tpm-post-launch-operations",
    "track": "TPM",
    "category": "Operations",
    "level": "Intermediate",
    "question": "What would you monitor after launching a high-risk product feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.\n\nThe beginner mistake is treating launch as the finish line. For risky features, launch is when the team starts learning whether the feature behaves safely in the real world.\n\nA TPM should think about three kinds of health:\n\n```txt\nProduct health:\nAre users getting the intended value?\n\nSystem health:\nIs the product technically reliable?\n\nOperational health:\nCan support, compliance, operations, and partners handle what is happening?\n```\n\nIf one of these fails, the launch may need to pause even if the code technically works."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine launching a new payout partner behind a feature flag.\n\nThe team should not only watch \"number of payouts.\" They need to know whether payouts are succeeding, how long they stay pending, whether partner errors are rising, whether support tickets are increasing, and whether reconciliation still works.\n\nA weak launch plan says:\n\n```txt\nLaunch Monday and check metrics later.\n```\n\nA stronger plan says:\n\n```txt\nLaunch shape:\n5 percent of eligible payouts in one corridor.\n\nReview windows:\nOne hour, four hours, 24 hours, one week.\n\nPause criteria:\n- Failure rate above threshold\n- Pending duration above SLA\n- Reconciliation mismatch\n- Support contacts spike\n- Partner incident report\n```\n\nNow launch is controlled, not hopeful."
      },
      {
        "title": "Make it practical",
        "body": "Here is a post-launch operating plan:\n\n```txt\nFeature:\nNew payout partner\n\nProduct metrics:\n- Payout completion rate\n- Median and p95 time to final status\n- User retry rate\n- Drop-off after partner selection\n\nSystem metrics:\n- API latency\n- Error rate\n- Timeout rate\n- Webhook delivery success\n- Queue backlog\n\nOperational metrics:\n- Pending payouts older than SLA\n- Manual review volume\n- Reconciliation exceptions\n- Support tickets by reason\n- Partner escalation count\n\nCustomer safety:\n- Duplicate payout attempts\n- Incorrect status shown to user\n- Money captured but not submitted\n\nDecision rules:\n- Continue rollout if all guardrails stay healthy for 24 hours.\n- Pause if failure rate doubles baseline.\n- Roll back if money movement state becomes unclear.\n- Escalate if partner does not respond within SLA.\n```\n\nThe TPM should also define ownership:\n\n```txt\nOwner map\n\nEngineering:\nSystem metrics, rollback, technical investigation.\n\nOperations:\nPending payouts, manual review, reconciliation.\n\nSupport:\nCustomer reports, macros, escalation tags.\n\nProduct:\nRollout decision, customer impact, tradeoffs, post-launch review.\n```"
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is monitoring only success metrics. You also need guardrails and failure signals.\n\nAnother mistake is waiting too long for the first review. High-risk launches need early observation.\n\nA third mistake is not defining pause or rollback criteria before launch. Teams make worse decisions under pressure."
      }
    ],
    "answer": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.",
    "reasoning": "Here is a post-launch operating plan:\n\n```txt\nFeature:\nNew payout partner\n\nProduct metrics:\n- Payout completion rate\n- Median and p95 time to final status\n- User retry rate\n- Drop-off after partner selection\n\nSystem metrics:\n- API latency\n- Error rate\n- Timeout rate\n- Webhook delivery success\n- Queue backlog\n\nOperational metrics:\n- Pending payouts older than SLA\n- Manual review volume\n- Reconciliation exceptions\n- Support tickets by reason\n- Partner escalation count\n\nCustomer safety:\n- Duplicate payout attempts\n- Incorrect status shown to user\n- Money captured but not submitted\n\nDecision rules:\n- Continue rollout if all guardrails stay healthy for 24 hours.\n- Pause if failure rate doubles baseline.\n- Roll back if money movement state becomes unclear.\n- Escalate if partner does not respond within SLA.\n```\n\nThe TPM should also define ownership:\n\n```txt\nOwner map\n\nEngineering:\nSystem metrics, rollback, technical investigation.\n\nOperations:\nPending payouts, manual review, reconciliation.\n\nSupport:\nCustomer reports, macros, escalation tags.\n\nProduct:\nRollout decision, customer impact, tradeoffs, post-launch review.\n```",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is launch not the finish line?",
      "What is the difference between product, system, and operational health?",
      "What are pause criteria?",
      "Why are early review windows useful?",
      "Who should own post-launch monitoring?"
    ],
    "interviewAnswer": "I would monitor product outcomes, system reliability, operational workload, customer safety, support volume, and guardrail metrics. I would define review windows, rollout stages, pause criteria, rollback criteria, owners, and communication paths before launch.\n\nA strong TPM answer treats launch as an operating phase, not a celebration.",
    "sourceLinks": [
      {
        "label": "Google SRE: Monitoring distributed systems",
        "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
      },
      {
        "label": "LaunchDarkly Docs: Guarded rollouts",
        "url": "https://launchdarkly.com/docs/home/releases/managing-guarded-rollouts"
      }
    ],
    "beginnerExplanation": "Post-launch operations are the activities that happen after a feature is released: monitoring, support, incident response, metric review, rollback decisions, customer communication, and follow-up work.\n\nThe beginner mistake is treating launch as the finish line. For risky features, launch is when the team starts learning whether the feature behaves safely in the real world.\n\nA TPM should think about three kinds of health:\n\n```txt\nProduct health:\nAre users getting the intended value?\n\nSystem health:\nIs the product technically reliable?\n\nOperational health:\nCan support, compliance, operations, and partners handle what is happening?\n```\n\nIf one of these fails, the launch may need to pause even if the code technically works.",
    "example": "Imagine launching a new payout partner behind a feature flag.\n\nThe team should not only watch \"number of payouts.\" They need to know whether payouts are succeeding, how long they stay pending, whether partner errors are rising, whether support tickets are increasing, and whether reconciliation still works.\n\nA weak launch plan says:\n\n```txt\nLaunch Monday and check metrics later.\n```\n\nA stronger plan says:\n\n```txt\nLaunch shape:\n5 percent of eligible payouts in one corridor.\n\nReview windows:\nOne hour, four hours, 24 hours, one week.\n\nPause criteria:\n- Failure rate above threshold\n- Pending duration above SLA\n- Reconciliation mismatch\n- Support contacts spike\n- Partner incident report\n```\n\nNow launch is controlled, not hopeful.",
    "commonMistakes": "A common mistake is monitoring only success metrics. You also need guardrails and failure signals.\n\nAnother mistake is waiting too long for the first review. High-risk launches need early observation.\n\nA third mistake is not defining pause or rollback criteria before launch. Teams make worse decisions under pressure."
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
        "body": "I would start by naming the decision goal. Are we optimizing for revenue, activation, risk reduction, reliability, compliance, cost, or delivery of a committed launch? Without that, prioritization becomes a political argument.\n\nThen I would collect the candidate work and describe each item in comparable language: user affected, business value, risk reduced, evidence, dependencies, effort, and cost of delay.\n\nNext, I would use a lightweight scoring model like RICE or a similar method to expose assumptions. The value is not the math alone. The value is forcing the team to ask: how many customers does this affect, how big is the impact, how sure are we, and how expensive is the work?\n\nAfter that, I would handle non-score factors explicitly. Regulatory deadlines, contractual commitments, major incidents, dependencies, and severe technical debt may need special treatment. I would also reserve some capacity for urgent defects and operational risk so the roadmap does not pretend nothing unexpected will happen.\n\nFinally, I would communicate the tradeoff. A good roadmap decision should say what we are doing, why it matters now, what we are not doing, what risk we are accepting, and when we will revisit the decision.\n\nHere is what that can look like as an artifact:\n\n```txt\nQuarter goal:\nIncrease successful repeat transfers while keeping operations workload stable.\n\nCapacity:\nTwo product engineers, one backend engineer, one shared designer.\n\nCandidates:\n\n1. Saved recipient improvements\nReach: 18,000 repeat senders per month\nImpact: high\nConfidence: medium\nEffort: medium\nRisk: wrong-recipient mistakes if confirmation is weak\n\n2. New payout partner\nReach: one new corridor\nImpact: high for expansion\nConfidence: low until partner testing is done\nEffort: high\nRisk: partner reliability and reconciliation gaps\n\n3. Reconciliation automation\nReach: operations team and all failed/pending transfers\nImpact: medium for users, high for operations\nConfidence: high\nEffort: medium\nRisk: low if shipped behind internal tooling\n\n4. Sales dashboard\nReach: two enterprise prospects\nImpact: possible revenue\nConfidence: low\nEffort: low to medium\nRisk: could become a custom-reporting trap\n```\n\nA possible decision:\n\n```txt\nDo now:\n- Reconciliation automation\n- Saved recipient improvements\n\nWhy:\nThey support the quarter goal and reduce both user friction and operational load.\n\nDo discovery only:\n- New payout partner\n\nWhy:\nIt may be important, but partner risk and effort are still too uncertain for a full build commitment.\n\nDefer:\n- Sales dashboard\n\nWhy:\nThe evidence is narrow. Offer a manual report for the two prospects and revisit if demand repeats.\n\nRisk accepted:\nCorridor expansion may move slower this quarter.\n\nRevisit trigger:\nIf partner testing proves simple or the enterprise deal becomes committed revenue, re-run the decision.\n```\n\nNotice what makes this useful. The TPM is not saying \"my score says no.\" They are explaining the company goal, the evidence, the risk, the deferred work, and the trigger that could change the answer."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is using a framework to avoid judgment. RICE can help, but it cannot understand strategy by itself. A high score does not automatically beat a compliance deadline or a critical dependency.\n\nAnother mistake is prioritizing whoever is loudest. Escalations should be heard, but they still need to be translated into impact, urgency, evidence, and cost.\n\nA third mistake is ignoring technical and operational work because it is less visible. If technical debt slows every roadmap item or operations teams are drowning in manual work, that is product impact."
      }
    ],
    "answer": "Prioritization is deciding what gets built now, what waits, and what does not get built. It sounds simple until every option is important to someone.",
    "reasoning": "I would start by naming the decision goal. Are we optimizing for revenue, activation, risk reduction, reliability, compliance, cost, or delivery of a committed launch? Without that, prioritization becomes a political argument.\n\nThen I would collect the candidate work and describe each item in comparable language: user affected, business value, risk reduced, evidence, dependencies, effort, and cost of delay.\n\nNext, I would use a lightweight scoring model like RICE or a similar method to expose assumptions. The value is not the math alone. The value is forcing the team to ask: how many customers does this affect, how big is the impact, how sure are we, and how expensive is the work?\n\nAfter that, I would handle non-score factors explicitly. Regulatory deadlines, contractual commitments, major incidents, dependencies, and severe technical debt may need special treatment. I would also reserve some capacity for urgent defects and operational risk so the roadmap does not pretend nothing unexpected will happen.\n\nFinally, I would communicate the tradeoff. A good roadmap decision should say what we are doing, why it matters now, what we are not doing, what risk we are accepting, and when we will revisit the decision.\n\nHere is what that can look like as an artifact:\n\n```txt\nQuarter goal:\nIncrease successful repeat transfers while keeping operations workload stable.\n\nCapacity:\nTwo product engineers, one backend engineer, one shared designer.\n\nCandidates:\n\n1. Saved recipient improvements\nReach: 18,000 repeat senders per month\nImpact: high\nConfidence: medium\nEffort: medium\nRisk: wrong-recipient mistakes if confirmation is weak\n\n2. New payout partner\nReach: one new corridor\nImpact: high for expansion\nConfidence: low until partner testing is done\nEffort: high\nRisk: partner reliability and reconciliation gaps\n\n3. Reconciliation automation\nReach: operations team and all failed/pending transfers\nImpact: medium for users, high for operations\nConfidence: high\nEffort: medium\nRisk: low if shipped behind internal tooling\n\n4. Sales dashboard\nReach: two enterprise prospects\nImpact: possible revenue\nConfidence: low\nEffort: low to medium\nRisk: could become a custom-reporting trap\n```\n\nA possible decision:\n\n```txt\nDo now:\n- Reconciliation automation\n- Saved recipient improvements\n\nWhy:\nThey support the quarter goal and reduce both user friction and operational load.\n\nDo discovery only:\n- New payout partner\n\nWhy:\nIt may be important, but partner risk and effort are still too uncertain for a full build commitment.\n\nDefer:\n- Sales dashboard\n\nWhy:\nThe evidence is narrow. Offer a manual report for the two prospects and revisit if demand repeats.\n\nRisk accepted:\nCorridor expansion may move slower this quarter.\n\nRevisit trigger:\nIf partner testing proves simple or the enterprise deal becomes committed revenue, re-run the decision.\n```\n\nNotice what makes this useful. The TPM is not saying \"my score says no.\" They are explaining the company goal, the evidence, the risk, the deferred work, and the trigger that could change the answer.",
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
    "id": "tpm-privacy-by-design",
    "track": "TPM",
    "category": "Security & Compliance",
    "level": "Intermediate",
    "question": "How would you apply privacy by design to a new product feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.\n\nThe beginner mistake is thinking privacy is only a legal review at the end. By then, the team may have already collected too much data, exposed it to too many people, stored it too long, or made deletion hard.\n\nFor a TPM, privacy by design is a product-thinking discipline:\n\n```txt\nWhat data do we need?\nWhy do we need it?\nWho can see it?\nHow long do we keep it?\nHow does the user understand and control it?\nWhat could go wrong for the person if this data is misused?\n```\n\nPrivacy is not only about avoiding fines. It is about user trust and reducing harm."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance product wants to add \"recipient suggestions.\" When a user sends money, the app suggests previous recipients and maybe contacts from the user's phone.\n\nA weak approach says:\n\n```txt\nAsk for contact access and upload contacts so suggestions work.\n```\n\nA privacy-by-design approach asks:\n\n```txt\nIs contact access actually required?\nCan suggestions work from recipients the user already paid?\nCan contact matching happen on device?\nCan the user choose not to enable contacts?\nWhat exactly is uploaded?\nAre contacts stored?\nCan the user delete imported data?\nDo recipients know their data is being used?\n```\n\nThe product may decide that saved recipients are enough for the first version. That is a privacy-friendly product decision, not a legal afterthought."
      },
      {
        "title": "Make it practical",
        "body": "Here is a privacy review artifact:\n\n```txt\nFeature:\nRecipient suggestions\n\nUser value:\nHelp repeat senders find trusted recipients faster.\n\nPersonal data involved:\n- Sender account ID\n- Recipient name\n- Recipient country\n- Recipient payout method\n- Recent transfer history\n- Optional phone contacts, if enabled later\n\nData minimization:\nUse saved and recent recipients first. Do not request phone contacts in v1.\n\nAccess:\nUser sees own recipients. Support sees masked details. Admin access is audited.\n\nRetention:\nRecipient records follow account retention policy. Deleted recipients no longer appear in suggestions.\n\nUser control:\nUser can remove a recipient from suggestions.\n\nRisk:\nWrong suggestion could expose recipient name on a shared device.\n\nMitigation:\nShow masked identifiers and require confirmation before transfer.\n```\n\nThe TPM should also ask whether the feature changes the privacy notice, consent flow, deletion process, or support scripts."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is collecting data because it might be useful later. That creates privacy and security burden without clear user value.\n\nAnother mistake is hiding privacy choices in vague copy. Users should understand what is happening in plain language.\n\nA third mistake is forgetting lifecycle. Privacy includes collection, use, access, sharing, retention, deletion, and auditability."
      }
    ],
    "answer": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.",
    "reasoning": "Here is a privacy review artifact:\n\n```txt\nFeature:\nRecipient suggestions\n\nUser value:\nHelp repeat senders find trusted recipients faster.\n\nPersonal data involved:\n- Sender account ID\n- Recipient name\n- Recipient country\n- Recipient payout method\n- Recent transfer history\n- Optional phone contacts, if enabled later\n\nData minimization:\nUse saved and recent recipients first. Do not request phone contacts in v1.\n\nAccess:\nUser sees own recipients. Support sees masked details. Admin access is audited.\n\nRetention:\nRecipient records follow account retention policy. Deleted recipients no longer appear in suggestions.\n\nUser control:\nUser can remove a recipient from suggestions.\n\nRisk:\nWrong suggestion could expose recipient name on a shared device.\n\nMitigation:\nShow masked identifiers and require confirmation before transfer.\n```\n\nThe TPM should also ask whether the feature changes the privacy notice, consent flow, deletion process, or support scripts.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is privacy by design different from legal review at the end?",
      "What does data minimization mean?",
      "Why should retention be defined before launch?",
      "What user controls might privacy-sensitive features need?",
      "How can a product feature create privacy harm even if it is useful?"
    ],
    "interviewAnswer": "I would apply privacy by design by identifying the data involved, the purpose for each data element, minimization options, access controls, retention, deletion, user consent or control, auditability, and potential user harms.\n\nA strong TPM answer shows that privacy is part of product quality. The feature should collect the least data needed, explain itself clearly, and protect users across the full data lifecycle.",
    "sourceLinks": [
      {
        "label": "NIST: Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "ICO: Data protection by design and by default",
        "url": "https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/accountability-and-governance/data-protection-by-design-and-default/"
      }
    ],
    "beginnerExplanation": "Privacy by design means privacy is considered while the product is being shaped, not after the feature is already built.\n\nThe beginner mistake is thinking privacy is only a legal review at the end. By then, the team may have already collected too much data, exposed it to too many people, stored it too long, or made deletion hard.\n\nFor a TPM, privacy by design is a product-thinking discipline:\n\n```txt\nWhat data do we need?\nWhy do we need it?\nWho can see it?\nHow long do we keep it?\nHow does the user understand and control it?\nWhat could go wrong for the person if this data is misused?\n```\n\nPrivacy is not only about avoiding fines. It is about user trust and reducing harm.",
    "example": "Imagine a remittance product wants to add \"recipient suggestions.\" When a user sends money, the app suggests previous recipients and maybe contacts from the user's phone.\n\nA weak approach says:\n\n```txt\nAsk for contact access and upload contacts so suggestions work.\n```\n\nA privacy-by-design approach asks:\n\n```txt\nIs contact access actually required?\nCan suggestions work from recipients the user already paid?\nCan contact matching happen on device?\nCan the user choose not to enable contacts?\nWhat exactly is uploaded?\nAre contacts stored?\nCan the user delete imported data?\nDo recipients know their data is being used?\n```\n\nThe product may decide that saved recipients are enough for the first version. That is a privacy-friendly product decision, not a legal afterthought.",
    "commonMistakes": "A common mistake is collecting data because it might be useful later. That creates privacy and security burden without clear user value.\n\nAnother mistake is hiding privacy choices in vague copy. Users should understand what is happening in plain language.\n\nA third mistake is forgetting lifecycle. Privacy includes collection, use, access, sharing, retention, deletion, and auditability."
  },
  {
    "id": "tpm-prompt-versioning-change-management",
    "track": "TPM",
    "category": "AI Product",
    "level": "Intermediate",
    "question": "How would you manage prompt changes and versioning in a production AI feature?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.\n\nThe beginner mistake is treating prompt edits like copy tweaks. In production AI systems, prompt changes need versioning, testing, review, rollout, and rollback just like code or rules.\n\nThe mental model:\n\n```txt\nPrompt version:\nWhat instructions were active?\n\nEvaluation:\nDid the new version improve behavior without breaking important cases?\n\nRollout:\nWho sees the new version first?\n\nRollback:\nHow do we return to the previous version if quality drops?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine an AI support assistant that summarizes failed transfer cases. A PM changes the prompt to make summaries shorter. Now the summary sometimes omits the transfer ID or complaint language.\n\nThat is not a small writing issue. Support agents may miss escalation requirements.\n\nA safer system asks:\n\n```txt\nWhat changed?\nWhy did it change?\nWhich evals passed?\nWhich cases got worse?\nWho approved it?\nWhich users or agents see it first?\nCan we roll back quickly?\n```"
      },
      {
        "title": "Make it practical",
        "body": "Here is a prompt-change artifact:\n\n```txt\nPrompt:\nSupport case summarizer\n\nChange:\nReduce summary length and force structured fields.\n\nReason:\nAgents said long summaries slow triage.\n\nRequired evals:\n- Payment delay cases\n- Refund requests\n- Complaint language\n- KYC review cases\n- Sensitive internal notes\n\nMust not regress:\n- Transfer ID accuracy\n- Amount accuracy\n- Complaint detection\n- Sensitive note exclusion\n\nRollout:\n10 percent of agents for 48 hours.\n\nMonitoring:\n- Agent edit rate\n- Thumbs-down rate\n- Escalation miss rate\n- Average handle time\n\nRollback:\nRevert to v12 if severe factual error or complaint miss exceeds threshold.\n```\n\nThat makes prompt management operational instead of vibes-based."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is not knowing which prompt produced a bad output. Without version logs, debugging is guesswork.\n\nAnother mistake is evaluating only the changed happy path. Prompt edits can break unrelated cases.\n\nA third mistake is rolling out to everyone at once. Production prompts deserve controlled release."
      }
    ],
    "answer": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.",
    "reasoning": "Here is a prompt-change artifact:\n\n```txt\nPrompt:\nSupport case summarizer\n\nChange:\nReduce summary length and force structured fields.\n\nReason:\nAgents said long summaries slow triage.\n\nRequired evals:\n- Payment delay cases\n- Refund requests\n- Complaint language\n- KYC review cases\n- Sensitive internal notes\n\nMust not regress:\n- Transfer ID accuracy\n- Amount accuracy\n- Complaint detection\n- Sensitive note exclusion\n\nRollout:\n10 percent of agents for 48 hours.\n\nMonitoring:\n- Agent edit rate\n- Thumbs-down rate\n- Escalation miss rate\n- Average handle time\n\nRollback:\nRevert to v12 if severe factual error or complaint miss exceeds threshold.\n```\n\nThat makes prompt management operational instead of vibes-based.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is a prompt change a product change?",
      "What should be logged with each prompt version?",
      "Why do evals need regression cases?",
      "What metrics reveal prompt quality after launch?",
      "Why is rollback important?"
    ],
    "interviewAnswer": "I would manage production prompts with version history, change reason, evals, regression tests, approval, staged rollout, monitoring, and rollback.\n\nA strong TPM answer treats prompts as part of the product contract, not informal text hidden inside the system.",
    "sourceLinks": [
      {
        "label": "OpenAI Docs: Prompting",
        "url": "https://platform.openai.com/docs/guides/prompting"
      },
      {
        "label": "OpenAI Docs: Evaluation best practices",
        "url": "https://platform.openai.com/docs/guides/evaluation-best-practices"
      }
    ],
    "beginnerExplanation": "Prompts are product behavior. Changing a prompt can change what the AI says, refuses, summarizes, omits, escalates, or recommends.\n\nThe beginner mistake is treating prompt edits like copy tweaks. In production AI systems, prompt changes need versioning, testing, review, rollout, and rollback just like code or rules.\n\nThe mental model:\n\n```txt\nPrompt version:\nWhat instructions were active?\n\nEvaluation:\nDid the new version improve behavior without breaking important cases?\n\nRollout:\nWho sees the new version first?\n\nRollback:\nHow do we return to the previous version if quality drops?\n```",
    "example": "Imagine an AI support assistant that summarizes failed transfer cases. A PM changes the prompt to make summaries shorter. Now the summary sometimes omits the transfer ID or complaint language.\n\nThat is not a small writing issue. Support agents may miss escalation requirements.\n\nA safer system asks:\n\n```txt\nWhat changed?\nWhy did it change?\nWhich evals passed?\nWhich cases got worse?\nWho approved it?\nWhich users or agents see it first?\nCan we roll back quickly?\n```",
    "commonMistakes": "A common mistake is not knowing which prompt produced a bad output. Without version logs, debugging is guesswork.\n\nAnother mistake is evaluating only the changed happy path. Prompt edits can break unrelated cases.\n\nA third mistake is rolling out to everyone at once. Production prompts deserve controlled release."
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
    "id": "tpm-roadmap-cross-functional-pressure",
    "track": "TPM",
    "category": "Roadmap & Prioritization",
    "level": "Intermediate",
    "question": "How would you build a roadmap when engineering, compliance, sales, and leadership all want different things?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.\n\nThe beginner mistake is trying to satisfy every stakeholder by putting every request on the roadmap. That creates a roadmap that looks aligned in a meeting but fails in real life because the team cannot actually execute it.\n\nWhen engineering, compliance, sales, and leadership disagree, the TPM's job is not to pick the loudest stakeholder. The job is to translate requests into outcomes, constraints, risks, and sequencing.\n\nThe simple mental model is:\n\n```txt\nStakeholder request: \"Build this.\"\nTPM translation: \"What outcome, risk, obligation, or dependency does this represent?\"\nRoadmap decision: \"Given our goals and constraints, what should happen now, next, or later?\"\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a fintech product team has four pressures:\n\n```txt\nSales:\n\"Enterprise client needs team permissions this quarter.\"\n\nCompliance:\n\"We need stronger transaction monitoring before volume increases.\"\n\nEngineering:\n\"The payout system is hard to change and needs refactoring.\"\n\nLeadership:\n\"We promised a new corridor launch.\"\n```\n\nA weak TPM turns this into a fight over whose item gets priority.\n\nA strong TPM clarifies what each request means:\n\n```txt\nTeam permissions:\nOutcome: unlock enterprise deals.\nRisk: poor permissions could expose sensitive financial data.\n\nTransaction monitoring:\nOutcome: reduce regulatory and fraud risk.\nRisk: launching more volume before controls may create compliance exposure.\n\nPayout refactor:\nOutcome: make future corridor launches faster and safer.\nRisk: invisible work may be hard to justify unless tied to launch reliability.\n\nNew corridor:\nOutcome: revenue growth and market expansion.\nRisk: launch fails if operations, compliance, and partner readiness are weak.\n```\n\nNow the roadmap conversation changes. It is no longer \"sales versus engineering.\" It becomes \"what sequence gets us revenue without creating unacceptable risk?\""
      },
      {
        "title": "Make it practical",
        "body": "I would create a roadmap view that separates outcomes from work items.\n\n```txt\nQuarter goal:\nExpand higher-value business payments safely.\n\nNow:\n- Complete transaction monitoring controls for higher-volume users.\n- Ship basic team roles: owner and finance user.\n- Refactor payout retry logic needed for corridor reliability.\n\nNext:\n- Launch corridor beta to limited customers.\n- Add audit log for business accounts.\n- Expand team permissions after usage data.\n\nLater:\n- Advanced approval workflows.\n- More corridors.\n- Bulk payout import.\n```\n\nThen I would explain tradeoffs plainly.\n\n```txt\nDecision:\nWe will not launch the corridor to all users this quarter.\n\nReason:\nThe compliance and retry-control work is required to make the launch safe.\n\nCompromise:\nWe will run a limited beta with selected customers after readiness checks pass.\n\nEvidence:\nSales still gets a customer-facing path, leadership gets progress, compliance gets controls, and engineering removes a key reliability risk.\n```\n\nThis is what strong TPM roadmap work often looks like. It does not make everyone perfectly happy, but it makes the reasoning clear."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is ranking stakeholder requests without translating them into outcomes and risks.\n\nAnother mistake is treating roadmap dates as promises before dependencies are understood.\n\nA third mistake is hiding the reason for tradeoffs. If stakeholders only hear \"not now,\" they may assume their request was ignored."
      }
    ],
    "answer": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.",
    "reasoning": "I would create a roadmap view that separates outcomes from work items.\n\n```txt\nQuarter goal:\nExpand higher-value business payments safely.\n\nNow:\n- Complete transaction monitoring controls for higher-volume users.\n- Ship basic team roles: owner and finance user.\n- Refactor payout retry logic needed for corridor reliability.\n\nNext:\n- Launch corridor beta to limited customers.\n- Add audit log for business accounts.\n- Expand team permissions after usage data.\n\nLater:\n- Advanced approval workflows.\n- More corridors.\n- Bulk payout import.\n```\n\nThen I would explain tradeoffs plainly.\n\n```txt\nDecision:\nWe will not launch the corridor to all users this quarter.\n\nReason:\nThe compliance and retry-control work is required to make the launch safe.\n\nCompromise:\nWe will run a limited beta with selected customers after readiness checks pass.\n\nEvidence:\nSales still gets a customer-facing path, leadership gets progress, compliance gets controls, and engineering removes a key reliability risk.\n```\n\nThis is what strong TPM roadmap work often looks like. It does not make everyone perfectly happy, but it makes the reasoning clear.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is a roadmap different from a backlog?",
      "How can two stakeholder requests both be valid but still not both fit now?",
      "Why should roadmap items connect to outcomes?",
      "What is the danger of promising dates before dependency discovery?",
      "How can a TPM communicate a deferral without making it sound dismissive?"
    ],
    "interviewAnswer": "I would build the roadmap by translating each stakeholder request into the outcome, risk, constraint, and dependency behind it. Then I would sequence work around the company goal, customer impact, regulatory risk, technical dependencies, and delivery capacity.\n\nA strong answer shows that the TPM can create alignment without pretending every request can be done immediately.",
    "sourceLinks": [
      {
        "label": "Atlassian: Product roadmaps",
        "url": "https://www.atlassian.com/agile/product-management/product-roadmaps"
      },
      {
        "label": "ProductPlan: Product management frameworks",
        "url": "https://www.productplan.com/learn/product-management-frameworks"
      }
    ],
    "beginnerExplanation": "A roadmap is not a wish list. It is a communication tool that explains the most important outcomes the team is pursuing and the order in which the team intends to pursue them.\n\nThe beginner mistake is trying to satisfy every stakeholder by putting every request on the roadmap. That creates a roadmap that looks aligned in a meeting but fails in real life because the team cannot actually execute it.\n\nWhen engineering, compliance, sales, and leadership disagree, the TPM's job is not to pick the loudest stakeholder. The job is to translate requests into outcomes, constraints, risks, and sequencing.\n\nThe simple mental model is:\n\n```txt\nStakeholder request: \"Build this.\"\nTPM translation: \"What outcome, risk, obligation, or dependency does this represent?\"\nRoadmap decision: \"Given our goals and constraints, what should happen now, next, or later?\"\n```",
    "example": "Imagine a fintech product team has four pressures:\n\n```txt\nSales:\n\"Enterprise client needs team permissions this quarter.\"\n\nCompliance:\n\"We need stronger transaction monitoring before volume increases.\"\n\nEngineering:\n\"The payout system is hard to change and needs refactoring.\"\n\nLeadership:\n\"We promised a new corridor launch.\"\n```\n\nA weak TPM turns this into a fight over whose item gets priority.\n\nA strong TPM clarifies what each request means:\n\n```txt\nTeam permissions:\nOutcome: unlock enterprise deals.\nRisk: poor permissions could expose sensitive financial data.\n\nTransaction monitoring:\nOutcome: reduce regulatory and fraud risk.\nRisk: launching more volume before controls may create compliance exposure.\n\nPayout refactor:\nOutcome: make future corridor launches faster and safer.\nRisk: invisible work may be hard to justify unless tied to launch reliability.\n\nNew corridor:\nOutcome: revenue growth and market expansion.\nRisk: launch fails if operations, compliance, and partner readiness are weak.\n```\n\nNow the roadmap conversation changes. It is no longer \"sales versus engineering.\" It becomes \"what sequence gets us revenue without creating unacceptable risk?\"",
    "commonMistakes": "A common mistake is ranking stakeholder requests without translating them into outcomes and risks.\n\nAnother mistake is treating roadmap dates as promises before dependencies are understood.\n\nA third mistake is hiding the reason for tradeoffs. If stakeholders only hear \"not now,\" they may assume their request was ignored."
  },
  {
    "id": "tpm-sanctions-screening-false-positives",
    "track": "TPM",
    "category": "Compliance & Risk",
    "level": "Intermediate",
    "question": "How would you design sanctions screening while managing false positives?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.\n\nThe beginner mistake is thinking screening is a simple yes/no name match. Names are messy. People share names. Names can be transliterated. Addresses may be incomplete. Businesses may have beneficial owners. A match may be a true hit or a false positive.\n\nThe product challenge is serious:\n\n```txt\nIf the system misses a true hit:\nThe company may violate sanctions obligations.\n\nIf the system blocks too many false positives:\nLegitimate users are harmed, support gets flooded, and conversion suffers.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a user named \"Mohammed Ali\" signs up. The name may produce a potential match against a sanctions list, but that does not mean the user is sanctioned.\n\nA weak product blocks the user with vague copy:\n\n```txt\nYour account is banned.\n```\n\nA stronger product creates a review workflow:\n\n```txt\nPotential match found\n-> Account action limited\n-> Compliance review opened\n-> Additional identifiers compared\n-> Cleared, blocked, or escalated\n```\n\nThe system should compare more than name: date of birth, address, nationality, document ID, business ownership, and other identifiers where available and allowed."
      },
      {
        "title": "Make it practical",
        "body": "Here is a sanctions screening requirements artifact:\n\n```txt\nScreening moments:\n- Account creation\n- Recipient creation\n- Business owner update\n- Large transfer\n- List update rescreening\n\nMatch data:\n- Name\n- Aliases\n- Date of birth\n- Country\n- Address\n- Document number\n- Business registration\n- Beneficial owner\n\nReview outcomes:\n- Cleared false positive\n- True hit\n- Need more information\n- Escalate to compliance lead\n\nUser actions while pending:\n- Allow account browsing\n- Block money movement\n- Prevent payout or transfer submission\n- Show safe copy\n```\n\nSafe user copy:\n\n```txt\nWe need to review your information before you can send money.\n\nThis usually takes one business day. We will contact you if we need more information.\n```\n\nDo not tell the user exactly which list or rule was triggered if that creates compliance or evasion risk."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is auto-blocking every name match. That creates unnecessary user harm and operational noise.\n\nAnother mistake is permanently clearing a false positive without rescreening when lists or user details change.\n\nA third mistake is exposing sensitive screening logic in customer copy or support macros."
      }
    ],
    "answer": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.",
    "reasoning": "Here is a sanctions screening requirements artifact:\n\n```txt\nScreening moments:\n- Account creation\n- Recipient creation\n- Business owner update\n- Large transfer\n- List update rescreening\n\nMatch data:\n- Name\n- Aliases\n- Date of birth\n- Country\n- Address\n- Document number\n- Business registration\n- Beneficial owner\n\nReview outcomes:\n- Cleared false positive\n- True hit\n- Need more information\n- Escalate to compliance lead\n\nUser actions while pending:\n- Allow account browsing\n- Block money movement\n- Prevent payout or transfer submission\n- Show safe copy\n```\n\nSafe user copy:\n\n```txt\nWe need to review your information before you can send money.\n\nThis usually takes one business day. We will contact you if we need more information.\n```\n\nDo not tell the user exactly which list or rule was triggered if that creates compliance or evasion risk.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is sanctions screening not just a name match?",
      "What is a false positive?",
      "When should users be rescreened?",
      "What actions might be blocked during review?",
      "Why must customer copy be careful?"
    ],
    "interviewAnswer": "I would design sanctions screening around screening events, match data, review workflow, user-state restrictions, false-positive handling, rescreening, audit logs, and safe customer communication.\n\nA strong TPM answer balances compliance protection with legitimate-user harm and operational review quality.",
    "sourceLinks": [
      {
        "label": "OFAC: Sanctions List Search FAQs",
        "url": "https://ofac.treasury.gov/faqs/search"
      },
      {
        "label": "OFAC: False hit lists guidance",
        "url": "https://ofac.treasury.gov/system/files/126/false_hit.pdf"
      }
    ],
    "beginnerExplanation": "Sanctions screening checks whether a person, business, country, wallet, vessel, or other party may match a sanctions list.\n\nThe beginner mistake is thinking screening is a simple yes/no name match. Names are messy. People share names. Names can be transliterated. Addresses may be incomplete. Businesses may have beneficial owners. A match may be a true hit or a false positive.\n\nThe product challenge is serious:\n\n```txt\nIf the system misses a true hit:\nThe company may violate sanctions obligations.\n\nIf the system blocks too many false positives:\nLegitimate users are harmed, support gets flooded, and conversion suffers.\n```",
    "example": "Imagine a user named \"Mohammed Ali\" signs up. The name may produce a potential match against a sanctions list, but that does not mean the user is sanctioned.\n\nA weak product blocks the user with vague copy:\n\n```txt\nYour account is banned.\n```\n\nA stronger product creates a review workflow:\n\n```txt\nPotential match found\n-> Account action limited\n-> Compliance review opened\n-> Additional identifiers compared\n-> Cleared, blocked, or escalated\n```\n\nThe system should compare more than name: date of birth, address, nationality, document ID, business ownership, and other identifiers where available and allowed.",
    "commonMistakes": "A common mistake is auto-blocking every name match. That creates unnecessary user harm and operational noise.\n\nAnother mistake is permanently clearing a false positive without rescreening when lists or user details change.\n\nA third mistake is exposing sensitive screening logic in customer copy or support macros."
  },
  {
    "id": "tpm-security-review-product-manager",
    "track": "TPM",
    "category": "Security & Compliance",
    "level": "Intermediate",
    "question": "How should a product manager work with security review?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Security review is how the team identifies and reduces security risk before a feature creates harm.\n\nThe beginner mistake is treating security as a gatekeeper that says yes or no at the end. A better TPM brings security into the product conversation early enough to shape requirements, design, rollout, and operations.\n\nThe TPM does not need to be the security engineer. But they should understand what kind of feature increases security risk:\n\n```txt\n- Authentication or login\n- Permissions and roles\n- Payments or money movement\n- Sensitive data\n- File upload\n- Public APIs\n- Webhooks\n- Admin tools\n- Exports\n- Third-party integrations\n- User-generated content\n```\n\nIf a feature touches one of these areas, security review is not optional polish. It is part of readiness."
      },
      {
        "title": "Walkthrough",
        "body": "Imagine the team is adding API keys for partners.\n\nA weak TPM says:\n\n```txt\nEngineering will make API keys secure.\n```\n\nA stronger TPM asks product-level security questions:\n\n```txt\nWho can create an API key?\nCan keys be scoped?\nCan keys expire?\nCan keys be revoked?\nCan users see the key again after creation?\nHow are keys stored?\nAre key creation and deletion audited?\nCan support see keys?\nWhat rate limits apply?\nWhat happens if a key is leaked?\n```\n\nThose questions shape the product requirements before implementation."
      },
      {
        "title": "Make it practical",
        "body": "Here is a security review checklist a TPM can use:\n\n```txt\nFeature:\nPartner API keys\n\nData and actions:\n- Create key\n- Name key\n- Scope key to specific API actions\n- Rotate key\n- Revoke key\n- View last used timestamp\n\nThreats:\n- Unauthorized user creates key\n- Key leaks through screenshot, logs, or support tooling\n- Key has too much access\n- Abused key creates high-volume requests\n- Deleted employee keeps access\n\nControls:\n- Only Owner/Admin can create keys\n- Key is shown once\n- Secret is hashed at rest\n- Scopes are required\n- Rate limits apply\n- Creation, rotation, and revocation are audited\n- Last-used timestamp visible\n- Emergency revoke path exists\n\nLaunch evidence:\n- Permission tests pass\n- Logs do not expose secret\n- Rate-limit behavior tested\n- Support runbook written\n- Incident response path known\n```\n\nThe TPM should make security findings actionable. If security says \"scope keys,\" the requirement should become a user-visible behavior, not a vague ticket."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is bringing security in after the UX and engineering plan are fixed. That creates conflict and rework.\n\nAnother mistake is treating security requirements as invisible. Many controls need product decisions: copy, permissions, admin UI, alerts, logs, and recovery.\n\nA third mistake is accepting risk without naming it. If a security issue is deferred, the approver, reason, mitigation, and revisit date should be clear."
      }
    ],
    "answer": "Security review is how the team identifies and reduces security risk before a feature creates harm.",
    "reasoning": "Here is a security review checklist a TPM can use:\n\n```txt\nFeature:\nPartner API keys\n\nData and actions:\n- Create key\n- Name key\n- Scope key to specific API actions\n- Rotate key\n- Revoke key\n- View last used timestamp\n\nThreats:\n- Unauthorized user creates key\n- Key leaks through screenshot, logs, or support tooling\n- Key has too much access\n- Abused key creates high-volume requests\n- Deleted employee keeps access\n\nControls:\n- Only Owner/Admin can create keys\n- Key is shown once\n- Secret is hashed at rest\n- Scopes are required\n- Rate limits apply\n- Creation, rotation, and revocation are audited\n- Last-used timestamp visible\n- Emergency revoke path exists\n\nLaunch evidence:\n- Permission tests pass\n- Logs do not expose secret\n- Rate-limit behavior tested\n- Support runbook written\n- Incident response path known\n```\n\nThe TPM should make security findings actionable. If security says \"scope keys,\" the requirement should become a user-visible behavior, not a vague ticket.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Which feature types usually need security review?",
      "Why should security be involved before implementation is complete?",
      "What product decisions exist in API key security?",
      "What does it mean to turn a security finding into a requirement?",
      "How should deferred security risk be documented?"
    ],
    "interviewAnswer": "I would work with security early by identifying sensitive data, risky actions, threat scenarios, required controls, test evidence, rollout risks, and operational responses. I would translate security findings into clear product requirements and track any accepted risk explicitly.\n\nA strong TPM answer shows respect for security expertise while owning the product decisions needed to make the feature safe.",
    "sourceLinks": [
      {
        "label": "OWASP: Application Security Verification Standard",
        "url": "https://owasp.org/www-project-application-security-verification-standard/"
      },
      {
        "label": "OWASP: Product Security Guide",
        "url": "https://owasp.org/www-project-product-security-guide/"
      }
    ],
    "beginnerExplanation": "Security review is how the team identifies and reduces security risk before a feature creates harm.\n\nThe beginner mistake is treating security as a gatekeeper that says yes or no at the end. A better TPM brings security into the product conversation early enough to shape requirements, design, rollout, and operations.\n\nThe TPM does not need to be the security engineer. But they should understand what kind of feature increases security risk:\n\n```txt\n- Authentication or login\n- Permissions and roles\n- Payments or money movement\n- Sensitive data\n- File upload\n- Public APIs\n- Webhooks\n- Admin tools\n- Exports\n- Third-party integrations\n- User-generated content\n```\n\nIf a feature touches one of these areas, security review is not optional polish. It is part of readiness.",
    "example": "Imagine the team is adding API keys for partners.\n\nA weak TPM says:\n\n```txt\nEngineering will make API keys secure.\n```\n\nA stronger TPM asks product-level security questions:\n\n```txt\nWho can create an API key?\nCan keys be scoped?\nCan keys expire?\nCan keys be revoked?\nCan users see the key again after creation?\nHow are keys stored?\nAre key creation and deletion audited?\nCan support see keys?\nWhat rate limits apply?\nWhat happens if a key is leaked?\n```\n\nThose questions shape the product requirements before implementation.",
    "commonMistakes": "A common mistake is bringing security in after the UX and engineering plan are fixed. That creates conflict and rework.\n\nAnother mistake is treating security requirements as invisible. Many controls need product decisions: copy, permissions, admin UI, alerts, logs, and recovery.\n\nA third mistake is accepting risk without naming it. If a security issue is deferred, the approver, reason, mitigation, and revisit date should be clear."
  },
  {
    "id": "tpm-settlement-reconciliation-mismatches",
    "track": "TPM",
    "category": "Payments & Remittance",
    "level": "Intermediate",
    "question": "How would you handle settlement and reconciliation mismatches in a fintech product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.\n\nThe beginner mistake is assuming a successful payment means the money story is finished. In real fintech systems, the product may show success before funds settle. Fees, reversals, retries, settlement timing, FX, chargebacks, and partner reports can all create mismatches.\n\nReconciliation answers:\n\n```txt\nWhat did we think happened?\nWhat did the bank or partner say happened?\nWhere do they differ?\nWho owns fixing the difference?\nWhat customer or financial impact exists?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine your app shows 10,000 successful card payments yesterday, but the payout file from the processor only includes 9,980 payments. That does not automatically mean 20 payments are lost. They may be delayed, reversed, fee-adjusted, settled in a later batch, or reported under another identifier.\n\nA weak TPM says, \"Ask engineering to fix reconciliation.\"\n\nA strong TPM defines the product and operational workflow:\n\n```txt\nMismatch types:\n- Missing transaction\n- Duplicate transaction\n- Amount mismatch\n- Fee mismatch\n- Currency or FX mismatch\n- Status mismatch\n- Settlement-date mismatch\n- Unknown partner reference\n\nSeverity:\n- Customer money affected\n- Internal accounting only\n- Report delay only\n- Partner data missing\n```"
      },
      {
        "title": "Make it practical",
        "body": "Here is a reconciliation requirements artifact:\n\n```txt\nFeature:\nDaily settlement reconciliation\n\nInputs:\n- Internal ledger events\n- Processor payout report\n- Bank statement\n- Fee report\n- Dispute and refund report\n\nMatching keys:\n- Internal transaction ID\n- Processor charge ID\n- Payout ID\n- Bank reference\n- Amount\n- Currency\n- Settlement date\n\nOutput states:\n- Matched\n- Pending external settlement\n- Internal-only\n- External-only\n- Amount mismatch\n- Duplicate candidate\n- Needs manual review\n\nOperations workflow:\n- Show mismatch reason\n- Assign owner\n- Add notes\n- Mark resolved\n- Export audit report\n```\n\nThe TPM should also define customer impact rules:\n\n```txt\nIf mismatch affects customer-visible balance:\nEscalate same day.\n\nIf mismatch is only report timing:\nKeep operations informed but do not message customers.\n\nIf mismatch suggests duplicate debit or missing payout:\nPause related automation until reviewed.\n```\n\nThat is how reconciliation becomes a product capability, not a spreadsheet ritual."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is building reconciliation as an internal afterthought. If money moves, reconciliation is part of product safety.\n\nAnother mistake is not preserving identifiers across systems. Without shared IDs, operations waste hours manually matching records.\n\nA third mistake is treating every mismatch equally. A delayed report and a missing customer payout need different urgency."
      }
    ],
    "answer": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.",
    "reasoning": "Here is a reconciliation requirements artifact:\n\n```txt\nFeature:\nDaily settlement reconciliation\n\nInputs:\n- Internal ledger events\n- Processor payout report\n- Bank statement\n- Fee report\n- Dispute and refund report\n\nMatching keys:\n- Internal transaction ID\n- Processor charge ID\n- Payout ID\n- Bank reference\n- Amount\n- Currency\n- Settlement date\n\nOutput states:\n- Matched\n- Pending external settlement\n- Internal-only\n- External-only\n- Amount mismatch\n- Duplicate candidate\n- Needs manual review\n\nOperations workflow:\n- Show mismatch reason\n- Assign owner\n- Add notes\n- Mark resolved\n- Export audit report\n```\n\nThe TPM should also define customer impact rules:\n\n```txt\nIf mismatch affects customer-visible balance:\nEscalate same day.\n\nIf mismatch is only report timing:\nKeep operations informed but do not message customers.\n\nIf mismatch suggests duplicate debit or missing payout:\nPause related automation until reviewed.\n```\n\nThat is how reconciliation becomes a product capability, not a spreadsheet ritual.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between settlement and reconciliation?",
      "Why can a successful payment still create reconciliation work?",
      "What identifiers help match records?",
      "Which mismatch types are most urgent?",
      "What should operations be able to do in a reconciliation tool?"
    ],
    "interviewAnswer": "I would handle settlement and reconciliation by defining data sources, matching keys, mismatch types, severity levels, operational workflow, customer-impact rules, and audit reporting.\n\nA strong TPM answer shows that reconciliation protects customer trust, finance accuracy, and operational control.",
    "sourceLinks": [
      {
        "label": "Stripe Docs: Bank reconciliation",
        "url": "https://docs.stripe.com/reconciliation"
      },
      {
        "label": "Stripe Docs: Payout reconciliation",
        "url": "https://docs.stripe.com/payouts/reconciliation"
      }
    ],
    "beginnerExplanation": "Settlement is when money actually moves or becomes final between financial parties. Reconciliation is the process of proving that your internal records match external records from banks, processors, partners, or payment networks.\n\nThe beginner mistake is assuming a successful payment means the money story is finished. In real fintech systems, the product may show success before funds settle. Fees, reversals, retries, settlement timing, FX, chargebacks, and partner reports can all create mismatches.\n\nReconciliation answers:\n\n```txt\nWhat did we think happened?\nWhat did the bank or partner say happened?\nWhere do they differ?\nWho owns fixing the difference?\nWhat customer or financial impact exists?\n```",
    "example": "Imagine your app shows 10,000 successful card payments yesterday, but the payout file from the processor only includes 9,980 payments. That does not automatically mean 20 payments are lost. They may be delayed, reversed, fee-adjusted, settled in a later batch, or reported under another identifier.\n\nA weak TPM says, \"Ask engineering to fix reconciliation.\"\n\nA strong TPM defines the product and operational workflow:\n\n```txt\nMismatch types:\n- Missing transaction\n- Duplicate transaction\n- Amount mismatch\n- Fee mismatch\n- Currency or FX mismatch\n- Status mismatch\n- Settlement-date mismatch\n- Unknown partner reference\n\nSeverity:\n- Customer money affected\n- Internal accounting only\n- Report delay only\n- Partner data missing\n```",
    "commonMistakes": "A common mistake is building reconciliation as an internal afterthought. If money moves, reconciliation is part of product safety.\n\nAnother mistake is not preserving identifiers across systems. Without shared IDs, operations waste hours manually matching records.\n\nA third mistake is treating every mismatch equally. A delayed report and a missing customer payout need different urgency."
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
        "body": "I would choose metrics in layers.\n\nFirst, define the goal in plain language. \"Help users complete repeat transfers with less effort.\"\n\nSecond, choose an activation metric. Are users discovering and setting up the feature?\n\nThird, choose a usage metric. Are users actually using it in the intended flow?\n\nFourth, choose an outcome metric. Is the user or business result improving?\n\nFifth, choose quality and guardrail metrics. Did errors, complaints, risk, latency, or cost get worse?\n\nSixth, decide how to measure. What events do we need? What properties? What baseline period? What cohort? What time window? What dashboard? What review date?\n\nFor interview answers, it helps to avoid giving one lonely metric. A real product needs a small set: one primary success metric, supporting diagnostics, and guardrails.\n\nA strong metrics answer often looks like a small tree:\n\n```txt\nFeature:\nSaved recipients for repeat transfers\n\nProduct promise:\nRepeat senders can send to trusted recipients faster, with fewer mistakes.\n\nPrimary success metric:\nRepeat transfer completion rate for users with saved recipients.\n\nActivation metrics:\n- Percentage of eligible users who save at least one recipient\n- Percentage of repeat senders who see the saved-recipient entry point\n\nUsage metrics:\n- Percentage of repeat transfers started from saved recipients\n- Number of saved recipients used more than once\n\nEfficiency metrics:\n- Median time from \"start transfer\" to \"submit transfer\"\n- Number of recipient-detail edits per repeat transfer\n\nQuality metrics:\n- Failed transfers caused by incorrect recipient details\n- Recipient deletion or correction rate\n\nGuardrail metrics:\n- Mistaken-recipient support tickets\n- Fraud or account-takeover flags involving saved recipients\n- Transfer cancellation rate after recipient selection\n```\n\nThen define the instrumentation before launch:\n\n```txt\nEvents needed:\n- recipient_save_started\n- recipient_save_completed\n- recipient_selected\n- transfer_submitted\n- transfer_completed\n- transfer_failed\n- recipient_edited\n- recipient_deleted\n\nUseful properties:\n- user_id\n- recipient_id\n- corridor\n- payout_method\n- is_repeat_sender\n- transfer_status\n- failure_reason\n- source: saved_recipient, manual_entry, recent_recipient\n\nBaseline:\nCompare repeat-transfer completion and time-to-submit from the 30 days before launch.\n\nReview window:\nLook at early guardrails after 24 hours, then success metrics after one or two full repeat-transfer cycles.\n```\n\nThis is the difference between \"I would track conversion\" and \"I know how to prove whether the feature helped without creating new harm.\""
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is calling an output a success metric. \"Feature launched\" is a delivery milestone, not proof of user value.\n\nAnother mistake is using vanity metrics. A click can be curiosity, confusion, or success. You need context.\n\nA third mistake is choosing too many metrics. If everything is important, the team may not know what to optimize."
      }
    ],
    "answer": "Success metrics tell the team whether a feature is actually working. Without metrics, teams often celebrate shipping rather than impact.",
    "reasoning": "I would choose metrics in layers.\n\nFirst, define the goal in plain language. \"Help users complete repeat transfers with less effort.\"\n\nSecond, choose an activation metric. Are users discovering and setting up the feature?\n\nThird, choose a usage metric. Are users actually using it in the intended flow?\n\nFourth, choose an outcome metric. Is the user or business result improving?\n\nFifth, choose quality and guardrail metrics. Did errors, complaints, risk, latency, or cost get worse?\n\nSixth, decide how to measure. What events do we need? What properties? What baseline period? What cohort? What time window? What dashboard? What review date?\n\nFor interview answers, it helps to avoid giving one lonely metric. A real product needs a small set: one primary success metric, supporting diagnostics, and guardrails.\n\nA strong metrics answer often looks like a small tree:\n\n```txt\nFeature:\nSaved recipients for repeat transfers\n\nProduct promise:\nRepeat senders can send to trusted recipients faster, with fewer mistakes.\n\nPrimary success metric:\nRepeat transfer completion rate for users with saved recipients.\n\nActivation metrics:\n- Percentage of eligible users who save at least one recipient\n- Percentage of repeat senders who see the saved-recipient entry point\n\nUsage metrics:\n- Percentage of repeat transfers started from saved recipients\n- Number of saved recipients used more than once\n\nEfficiency metrics:\n- Median time from \"start transfer\" to \"submit transfer\"\n- Number of recipient-detail edits per repeat transfer\n\nQuality metrics:\n- Failed transfers caused by incorrect recipient details\n- Recipient deletion or correction rate\n\nGuardrail metrics:\n- Mistaken-recipient support tickets\n- Fraud or account-takeover flags involving saved recipients\n- Transfer cancellation rate after recipient selection\n```\n\nThen define the instrumentation before launch:\n\n```txt\nEvents needed:\n- recipient_save_started\n- recipient_save_completed\n- recipient_selected\n- transfer_submitted\n- transfer_completed\n- transfer_failed\n- recipient_edited\n- recipient_deleted\n\nUseful properties:\n- user_id\n- recipient_id\n- corridor\n- payout_method\n- is_repeat_sender\n- transfer_status\n- failure_reason\n- source: saved_recipient, manual_entry, recent_recipient\n\nBaseline:\nCompare repeat-transfer completion and time-to-submit from the 30 days before launch.\n\nReview window:\nLook at early guardrails after 24 hours, then success metrics after one or two full repeat-transfer cycles.\n```\n\nThis is the difference between \"I would track conversion\" and \"I know how to prove whether the feature helped without creating new harm.\"",
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
    "id": "tpm-support-feedback-loop",
    "track": "TPM",
    "category": "Discovery & Feedback",
    "level": "Foundational",
    "question": "How would you turn support tickets and customer feedback into product decisions?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.\n\nThe beginner mistake is reacting to the latest loud complaint. One angry ticket may reveal a real issue, but it may also be an edge case. A thousand vague tickets may hide several different problems. The TPM needs a feedback loop that separates noise from evidence.\n\nThe mental model is:\n\n```txt\nTicket:\n\"I cannot send money.\"\n\nSignal:\nThe user got stuck.\n\nInsight:\nUsers do not understand pending verification.\n\nProduct decision:\nImprove status explanation, support visibility, and recovery path.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine support receives many tickets saying:\n\n```txt\n\"My transfer is stuck.\"\n\"Why is this taking so long?\"\n\"Did my money disappear?\"\n\"Cancel this now.\"\n```\n\nA weak product response is: \"Add a tooltip saying transfers can take time.\"\n\nA stronger TPM asks:\n\n```txt\nWhat exact status are these users in?\nWhich corridors are affected?\nHow long have they waited?\nWhat did the UI say?\nCould support see the real status?\nDid the partner send delayed webhooks?\nDid users have any action they could take?\n```\n\nAfter tagging and analysis, the TPM might find three different issues:\n\n```txt\nPattern 1:\nUsers in \"processing\" status do not know what it means.\n\nPattern 2:\nPartner delays are concentrated in one corridor.\n\nPattern 3:\nSupport cannot see whether the payout is retrying or waiting for partner confirmation.\n```\n\nEach pattern needs a different solution."
      },
      {
        "title": "Make it practical",
        "body": "I would create a feedback loop with clear steps.\n\n```txt\nSupport-to-product loop\n\n1. Capture\nCollect tickets, chat logs, call notes, app feedback, sales notes, and support tags.\n\n2. Normalize\nGroup feedback by user job, product area, status, segment, and severity.\n\n3. Quantify\nCount frequency, affected revenue, affected customer segment, and repeat contacts.\n\n4. Qualify\nRead real examples so the team understands the user pain.\n\n5. Diagnose\nSeparate symptom from root cause.\n\n6. Decide\nCreate product fixes, operational fixes, documentation updates, or monitoring improvements.\n\n7. Close the loop\nTell support what changed and how to explain it.\n```\n\nA good product decision is not always a new feature. Sometimes the fix is better copy, a status page, clearer error codes, support tooling, partner escalation, or a policy change."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is counting tickets without reading them. Volume matters, but language and context reveal why users are confused.\n\nAnother mistake is letting support become a one-way inbox. Product should tell support what changed, what is coming, and what evidence is still needed.\n\nA third mistake is treating every request as a feature request. Many tickets are symptoms of unclear status, broken expectations, poor onboarding, or missing operational visibility."
      }
    ],
    "answer": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.",
    "reasoning": "I would create a feedback loop with clear steps.\n\n```txt\nSupport-to-product loop\n\n1. Capture\nCollect tickets, chat logs, call notes, app feedback, sales notes, and support tags.\n\n2. Normalize\nGroup feedback by user job, product area, status, segment, and severity.\n\n3. Quantify\nCount frequency, affected revenue, affected customer segment, and repeat contacts.\n\n4. Qualify\nRead real examples so the team understands the user pain.\n\n5. Diagnose\nSeparate symptom from root cause.\n\n6. Decide\nCreate product fixes, operational fixes, documentation updates, or monitoring improvements.\n\n7. Close the loop\nTell support what changed and how to explain it.\n```\n\nA good product decision is not always a new feature. Sometimes the fix is better copy, a status page, clearer error codes, support tooling, partner escalation, or a policy change.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "Why is a ticket not automatically an insight?",
      "What is the difference between symptom and root cause?",
      "Why should feedback be grouped by product state or user job?",
      "How can support feedback improve internal tools?",
      "What does it mean to close the loop with support?"
    ],
    "interviewAnswer": "I would turn support feedback into product decisions by capturing signals, grouping them into patterns, quantifying impact, reading examples, diagnosing root cause, deciding the right type of fix, and closing the loop with support.\n\nA strong TPM answer shows that feedback is evidence, not instructions. The TPM must convert raw complaints into product understanding and better decisions.",
    "sourceLinks": [
      {
        "label": "Productboard: Customer insights",
        "url": "https://www.productboard.com/use-cases/customer-insights/"
      },
      {
        "label": "GOV.UK Service Manual: User needs",
        "url": "https://www.gov.uk/service-manual/user-centred-design/user-needs"
      }
    ],
    "beginnerExplanation": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.\n\nThe beginner mistake is reacting to the latest loud complaint. One angry ticket may reveal a real issue, but it may also be an edge case. A thousand vague tickets may hide several different problems. The TPM needs a feedback loop that separates noise from evidence.\n\nThe mental model is:\n\n```txt\nTicket:\n\"I cannot send money.\"\n\nSignal:\nThe user got stuck.\n\nInsight:\nUsers do not understand pending verification.\n\nProduct decision:\nImprove status explanation, support visibility, and recovery path.\n```",
    "example": "Imagine support receives many tickets saying:\n\n```txt\n\"My transfer is stuck.\"\n\"Why is this taking so long?\"\n\"Did my money disappear?\"\n\"Cancel this now.\"\n```\n\nA weak product response is: \"Add a tooltip saying transfers can take time.\"\n\nA stronger TPM asks:\n\n```txt\nWhat exact status are these users in?\nWhich corridors are affected?\nHow long have they waited?\nWhat did the UI say?\nCould support see the real status?\nDid the partner send delayed webhooks?\nDid users have any action they could take?\n```\n\nAfter tagging and analysis, the TPM might find three different issues:\n\n```txt\nPattern 1:\nUsers in \"processing\" status do not know what it means.\n\nPattern 2:\nPartner delays are concentrated in one corridor.\n\nPattern 3:\nSupport cannot see whether the payout is retrying or waiting for partner confirmation.\n```\n\nEach pattern needs a different solution.",
    "commonMistakes": "A common mistake is counting tickets without reading them. Volume matters, but language and context reveal why users are confused.\n\nAnother mistake is letting support become a one-way inbox. Product should tell support what changed, what is coming, and what evidence is still needed.\n\nA third mistake is treating every request as a feature request. Many tickets are symptoms of unclear status, broken expectations, poor onboarding, or missing operational visibility."
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
        "body": "I would prioritize technical debt when it blocks important product goals, creates repeated incidents, slows delivery significantly, raises compliance or security risk, increases operational load, or makes future changes unsafe.\n\nI would not automatically pause all product work for a vague cleanup project. I would ask engineering to frame the debt in terms of risk and outcomes. For example: \"Refactor payout status handling so new partners can be added in two weeks instead of six, and reduce reconciliation bugs.\"\n\nGood debt work often has a clear scope:\n\n1. What pain are we reducing?\n2. What product work becomes easier afterward?\n3. What risk decreases?\n4. How will we know the investment worked?\n5. Can it be shipped incrementally?\n\nSometimes the right plan is to allocate a percentage of capacity to debt. Sometimes it is to tie debt work to a feature. Sometimes it is to stop and fix a dangerous foundation before continuing.\n\nHere is an example debt sizing artifact:\n\n```txt\nDebt:\nPayout status mapping is duplicated across three services.\n\nProduct impact:\n- New payout partners take six weeks because every partner needs custom status mapping.\n- Support sometimes sees \"unknown\" when the partner has already returned a useful reason.\n- Reconciliation bugs create manual operations work.\n\nEvidence:\n- 7 payout-status bugs in the last quarter\n- 18 support escalations in the last month\n- Two planned partner launches depend on this area\n\nOptions:\n\nOption A: Do nothing now\nBenefit: fastest path to current feature\nCost: partner launches remain slow and risky\n\nOption B: Full rewrite\nBenefit: clean long-term foundation\nCost: delays roadmap by a quarter and carries migration risk\n\nOption C: Incremental debt payment\nBenefit: create one shared status-mapping module while building the next partner\nCost: adds two weeks to the next partner launch\n```\n\nA reasonable TPM recommendation:\n\n```txt\nRecommendation:\nChoose Option C.\n\nWhy:\nThe debt directly affects two planned launches and repeated support issues, but a full rewrite is too large for the current quarter.\n\nSuccess measure:\n- Next partner launch uses shared mapping\n- Status-related support escalations drop by 50 percent\n- New partner status mapping can be configured in days, not weeks\n\nGuardrail:\nDo not expand scope into a full payment-platform rewrite.\n```\n\nThat is the interview move: translate debt into product consequences, compare options, recommend a scoped investment, and define how the team will know it worked."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is treating all debt as equal. Some debt is annoying but harmless. Some debt blocks strategy or creates real risk.\n\nAnother mistake is making debt invisible in planning. If the roadmap assumes full feature capacity while the team is constantly paying hidden maintenance costs, the plan is fake.\n\nA third mistake is framing debt as engineering preference instead of business impact. The TPM should help explain why the investment matters in outcomes stakeholders understand."
      }
    ],
    "answer": "Technical debt is the future cost created by technical choices that make the system harder to change, operate, understand, or trust. Sometimes debt is taken deliberately to learn quickly. Sometimes it appears accidentally through rushed work, old assumptions, missing tests, weak architecture, or repeated patches.",
    "reasoning": "I would prioritize technical debt when it blocks important product goals, creates repeated incidents, slows delivery significantly, raises compliance or security risk, increases operational load, or makes future changes unsafe.\n\nI would not automatically pause all product work for a vague cleanup project. I would ask engineering to frame the debt in terms of risk and outcomes. For example: \"Refactor payout status handling so new partners can be added in two weeks instead of six, and reduce reconciliation bugs.\"\n\nGood debt work often has a clear scope:\n\n1. What pain are we reducing?\n2. What product work becomes easier afterward?\n3. What risk decreases?\n4. How will we know the investment worked?\n5. Can it be shipped incrementally?\n\nSometimes the right plan is to allocate a percentage of capacity to debt. Sometimes it is to tie debt work to a feature. Sometimes it is to stop and fix a dangerous foundation before continuing.\n\nHere is an example debt sizing artifact:\n\n```txt\nDebt:\nPayout status mapping is duplicated across three services.\n\nProduct impact:\n- New payout partners take six weeks because every partner needs custom status mapping.\n- Support sometimes sees \"unknown\" when the partner has already returned a useful reason.\n- Reconciliation bugs create manual operations work.\n\nEvidence:\n- 7 payout-status bugs in the last quarter\n- 18 support escalations in the last month\n- Two planned partner launches depend on this area\n\nOptions:\n\nOption A: Do nothing now\nBenefit: fastest path to current feature\nCost: partner launches remain slow and risky\n\nOption B: Full rewrite\nBenefit: clean long-term foundation\nCost: delays roadmap by a quarter and carries migration risk\n\nOption C: Incremental debt payment\nBenefit: create one shared status-mapping module while building the next partner\nCost: adds two weeks to the next partner launch\n```\n\nA reasonable TPM recommendation:\n\n```txt\nRecommendation:\nChoose Option C.\n\nWhy:\nThe debt directly affects two planned launches and repeated support issues, but a full rewrite is too large for the current quarter.\n\nSuccess measure:\n- Next partner launch uses shared mapping\n- Status-related support escalations drop by 50 percent\n- New partner status mapping can be configured in days, not weeks\n\nGuardrail:\nDo not expand scope into a full payment-platform rewrite.\n```\n\nThat is the interview move: translate debt into product consequences, compare options, recommend a scoped investment, and define how the team will know it worked.",
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
    "id": "tpm-technical-product-strategy",
    "track": "TPM",
    "category": "Technical Strategy",
    "level": "Intermediate",
    "question": "How would you create a technical product strategy?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "A technical product strategy explains where the product should go, why that direction matters, and what technical bets are needed to get there.\n\nThe beginner mistake is thinking strategy means \"a list of features.\" A feature list says what the team might build. A strategy explains the logic behind the choices. It says which customer problem matters most, which market or business goal the product supports, what the product must become technically, and what the team will deliberately not do.\n\nFor a TPM, the technical part matters because the best product idea may depend on platform readiness, data quality, API reliability, compliance controls, scalability, security, or migration work. If the strategy ignores those realities, the roadmap becomes fantasy.\n\nThe simple mental model is:\n\n```txt\nProduct strategy = where we are going and why.\nTechnical strategy = what capabilities must exist for that direction to be real.\nRoadmap = the sequence of work that moves us there.\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a remittance company wants to serve small businesses, not only individual senders.\n\nA shallow strategy says:\n\n```txt\nBuild business accounts.\nAdd bulk payments.\nAdd team permissions.\nAdd invoices.\n```\n\nThat is not enough. It does not explain why these things matter, which customer segment comes first, or what platform work is required.\n\nA stronger strategy says:\n\n```txt\nGoal:\nHelp small import/export businesses pay suppliers faster and with clearer tracking.\n\nTarget customer:\nBusinesses sending recurring payments to a known set of suppliers.\n\nWinning promise:\nReliable cross-border payouts, predictable fees, payment status visibility, and audit-friendly records.\n\nTechnical bets:\n- Business identity verification, not only individual KYC.\n- Recipient directory with reusable supplier profiles.\n- Bulk payout workflow with idempotent creation.\n- Role-based access for owner, finance user, and viewer.\n- Reconciliation reports for accounting.\n- Monitoring for payout delays and failed corridors.\n\nNon-goals for now:\n- Full invoicing product.\n- Payroll.\n- Card issuing.\n```\n\nNow the team can make better tradeoffs. If engineering says bulk payouts require a new payout orchestration layer, that is not \"backend work nobody sees.\" It is a strategic capability."
      },
      {
        "title": "Make it practical",
        "body": "I would create the strategy in layers.\n\nFirst, define the product goal. What outcome should change for customers or the business?\n\nSecond, define the customer and use case. Strategy gets weak when it tries to serve everyone.\n\nThird, define the product promise. What should the customer trust us to do better than alternatives?\n\nFourth, map the technical capabilities needed to keep that promise.\n\nFifth, turn those capabilities into sequencing. Some capabilities unlock others. For example, team permissions may need an organization model first.\n\nHere is a practical artifact:\n\n```txt\nTechnical product strategy brief\n\nCustomer problem:\nSmall businesses need repeatable supplier payments with reliable status and records.\n\nBusiness goal:\nGrow business transaction volume while keeping compliance and operations cost under control.\n\nProduct bet:\nBusiness customers value reliability, repeatability, and auditability more than a long menu of features.\n\nRequired capabilities:\n1. Business verification\n2. Organization and roles model\n3. Recipient directory\n4. Bulk payout creation\n5. Reconciliation export\n6. Corridor health monitoring\n\nMain risks:\n- Compliance review takes longer than planned.\n- Bulk retries create duplicate payouts.\n- Support cannot investigate business account issues.\n\nFirst milestone:\nBusiness profile + saved recipients + single payout with business audit trail.\n```\n\nThis artifact is useful because it connects user value, business value, and technical work in one place."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is writing strategy as a slogan. \"Be the best API platform\" is not strategy unless it says which users, which advantage, and which capabilities matter.\n\nAnother mistake is hiding technical foundation work. If the roadmap only shows visible features, leadership may not understand why platform work is required.\n\nA third mistake is ignoring tradeoffs. A strategy should make choices. If every customer segment and every feature is equally important, the team has no strategy."
      }
    ],
    "answer": "A technical product strategy explains where the product should go, why that direction matters, and what technical bets are needed to get there.",
    "reasoning": "I would create the strategy in layers.\n\nFirst, define the product goal. What outcome should change for customers or the business?\n\nSecond, define the customer and use case. Strategy gets weak when it tries to serve everyone.\n\nThird, define the product promise. What should the customer trust us to do better than alternatives?\n\nFourth, map the technical capabilities needed to keep that promise.\n\nFifth, turn those capabilities into sequencing. Some capabilities unlock others. For example, team permissions may need an organization model first.\n\nHere is a practical artifact:\n\n```txt\nTechnical product strategy brief\n\nCustomer problem:\nSmall businesses need repeatable supplier payments with reliable status and records.\n\nBusiness goal:\nGrow business transaction volume while keeping compliance and operations cost under control.\n\nProduct bet:\nBusiness customers value reliability, repeatability, and auditability more than a long menu of features.\n\nRequired capabilities:\n1. Business verification\n2. Organization and roles model\n3. Recipient directory\n4. Bulk payout creation\n5. Reconciliation export\n6. Corridor health monitoring\n\nMain risks:\n- Compliance review takes longer than planned.\n- Bulk retries create duplicate payouts.\n- Support cannot investigate business account issues.\n\nFirst milestone:\nBusiness profile + saved recipients + single payout with business audit trail.\n```\n\nThis artifact is useful because it connects user value, business value, and technical work in one place.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between strategy and roadmap?",
      "Why does a TPM need to connect product goals to technical capabilities?",
      "What makes a technical capability strategic instead of just implementation detail?",
      "Why should a strategy include non-goals?",
      "What would make a strategy too vague to guide decisions?"
    ],
    "interviewAnswer": "I would create a technical product strategy by defining the customer, the product promise, the business goal, the technical capabilities needed to deliver that promise, the sequencing of those capabilities, the risks, and the explicit non-goals.\n\nA strong TPM answer shows that strategy is not a feature list. It is the reasoning that helps the team choose what to build, what to defer, and which technical investments are necessary for the product direction to work.",
    "sourceLinks": [
      {
        "label": "ProductPlan: Product strategy",
        "url": "https://www.productplan.com/learn/product-strategy/"
      },
      {
        "label": "Atlassian: Agile roadmaps",
        "url": "https://www.atlassian.com/agile/product-management/roadmaps"
      }
    ],
    "beginnerExplanation": "A technical product strategy explains where the product should go, why that direction matters, and what technical bets are needed to get there.\n\nThe beginner mistake is thinking strategy means \"a list of features.\" A feature list says what the team might build. A strategy explains the logic behind the choices. It says which customer problem matters most, which market or business goal the product supports, what the product must become technically, and what the team will deliberately not do.\n\nFor a TPM, the technical part matters because the best product idea may depend on platform readiness, data quality, API reliability, compliance controls, scalability, security, or migration work. If the strategy ignores those realities, the roadmap becomes fantasy.\n\nThe simple mental model is:\n\n```txt\nProduct strategy = where we are going and why.\nTechnical strategy = what capabilities must exist for that direction to be real.\nRoadmap = the sequence of work that moves us there.\n```",
    "example": "Imagine a remittance company wants to serve small businesses, not only individual senders.\n\nA shallow strategy says:\n\n```txt\nBuild business accounts.\nAdd bulk payments.\nAdd team permissions.\nAdd invoices.\n```\n\nThat is not enough. It does not explain why these things matter, which customer segment comes first, or what platform work is required.\n\nA stronger strategy says:\n\n```txt\nGoal:\nHelp small import/export businesses pay suppliers faster and with clearer tracking.\n\nTarget customer:\nBusinesses sending recurring payments to a known set of suppliers.\n\nWinning promise:\nReliable cross-border payouts, predictable fees, payment status visibility, and audit-friendly records.\n\nTechnical bets:\n- Business identity verification, not only individual KYC.\n- Recipient directory with reusable supplier profiles.\n- Bulk payout workflow with idempotent creation.\n- Role-based access for owner, finance user, and viewer.\n- Reconciliation reports for accounting.\n- Monitoring for payout delays and failed corridors.\n\nNon-goals for now:\n- Full invoicing product.\n- Payroll.\n- Card issuing.\n```\n\nNow the team can make better tradeoffs. If engineering says bulk payouts require a new payout orchestration layer, that is not \"backend work nobody sees.\" It is a strategic capability.",
    "commonMistakes": "A common mistake is writing strategy as a slogan. \"Be the best API platform\" is not strategy unless it says which users, which advantage, and which capabilities matter.\n\nAnother mistake is hiding technical foundation work. If the roadmap only shows visible features, leadership may not understand why platform work is required.\n\nA third mistake is ignoring tradeoffs. A strategy should make choices. If every customer segment and every feature is equally important, the team has no strategy."
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
    "id": "tpm-usage-based-pricing-packaging",
    "track": "TPM",
    "category": "Pricing & Packaging",
    "level": "Intermediate",
    "question": "How would you design pricing and packaging for an API or usage-based product?",
    "lessonSections": [
      {
        "title": "Learn it",
        "body": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.\n\nFor API and platform products, pricing is often usage-based. Customers may pay per API call, transaction, active user, document processed, webhook delivery, seat, storage unit, or money movement volume.\n\nThe beginner mistake is choosing a meter only because it is easy to count. A good pricing meter should be understandable, connected to customer value, hard to accidentally abuse, and possible to measure accurately.\n\nThe mental model is:\n\n```txt\nPackaging:\nWhat is included?\n\nPricing:\nWhat does it cost?\n\nMetering:\nWhat unit do we count?\n\nEntitlements:\nWhat is the customer allowed to use?\n\nBilling experience:\nCan the customer predict, understand, and trust the bill?\n```"
      },
      {
        "title": "Walkthrough",
        "body": "Imagine a company sells a fraud-screening API.\n\nPossible meters:\n\n```txt\nPer API request:\nEasy to measure, but customers may worry retries or failed requests cost money.\n\nPer completed screening:\nCloser to value, but the system must define what \"completed\" means.\n\nPer approved transaction:\nVery tied to value, but the vendor takes revenue risk if fraud checks block many transactions.\n\nMonthly platform fee plus usage:\nPredictable base revenue, then scales with customer usage.\n```\n\nThe TPM has to think beyond revenue. Pricing affects product behavior. If customers pay per request, they may avoid useful checks. If the free tier is too generous, heavy users may never convert. If overages are confusing, finance and support will get angry tickets."
      },
      {
        "title": "Make it practical",
        "body": "Here is a pricing design artifact:\n\n```txt\nProduct:\nFraud screening API\n\nPrimary value:\nReduce fraud losses while allowing good users through.\n\nCustomer segments:\n- Startup: low volume, needs simple setup\n- Growth: medium volume, needs rules and dashboard\n- Enterprise: high volume, needs SLA, audit logs, custom limits\n\nPackages:\n\nStarter:\n- 5,000 screenings/month included\n- Basic risk score\n- Standard support\n\nGrowth:\n- 50,000 screenings/month included\n- Rules engine\n- Webhooks\n- Dashboard exports\n\nEnterprise:\n- Custom volume\n- SLA\n- SSO and audit logs\n- Dedicated support\n- Contracted data-retention terms\n\nMeter:\nCompleted screening event\n\nWhy this meter:\nIt maps to customer value better than raw API calls and avoids charging for failed retries.\n\nGuardrails:\n- Usage dashboard\n- Threshold alerts at 80 percent and 100 percent\n- Idempotency to avoid duplicate billing\n- Clear overage pricing\n```\n\nThe TPM also needs to define billing edge cases.\n\n```txt\nBilling edge cases\n\n- What counts if the API times out?\n- What counts if the customer retries with the same idempotency key?\n- Are sandbox calls billable?\n- Are failed screenings billable?\n- Can customers set spend limits?\n- How are refunds or billing disputes handled?\n- What usage is shown in real time versus after invoice close?\n```\n\nThis is the part interviewers listen for. A strong TPM understands that pricing is also a product experience."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is picking a meter that customers do not understand. Confusing bills create distrust.\n\nAnother mistake is ignoring cost drivers. If the product has expensive third-party checks or compute costs, pricing must account for them.\n\nA third mistake is forgetting entitlements. The app must know what each plan can use before the bill is generated."
      }
    ],
    "answer": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.",
    "reasoning": "Here is a pricing design artifact:\n\n```txt\nProduct:\nFraud screening API\n\nPrimary value:\nReduce fraud losses while allowing good users through.\n\nCustomer segments:\n- Startup: low volume, needs simple setup\n- Growth: medium volume, needs rules and dashboard\n- Enterprise: high volume, needs SLA, audit logs, custom limits\n\nPackages:\n\nStarter:\n- 5,000 screenings/month included\n- Basic risk score\n- Standard support\n\nGrowth:\n- 50,000 screenings/month included\n- Rules engine\n- Webhooks\n- Dashboard exports\n\nEnterprise:\n- Custom volume\n- SLA\n- SSO and audit logs\n- Dedicated support\n- Contracted data-retention terms\n\nMeter:\nCompleted screening event\n\nWhy this meter:\nIt maps to customer value better than raw API calls and avoids charging for failed retries.\n\nGuardrails:\n- Usage dashboard\n- Threshold alerts at 80 percent and 100 percent\n- Idempotency to avoid duplicate billing\n- Clear overage pricing\n```\n\nThe TPM also needs to define billing edge cases.\n\n```txt\nBilling edge cases\n\n- What counts if the API times out?\n- What counts if the customer retries with the same idempotency key?\n- Are sandbox calls billable?\n- Are failed screenings billable?\n- Can customers set spend limits?\n- How are refunds or billing disputes handled?\n- What usage is shown in real time versus after invoice close?\n```\n\nThis is the part interviewers listen for. A strong TPM understands that pricing is also a product experience.",
    "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    "followUps": [
      "What is the difference between pricing and packaging?",
      "Why should a usage meter map to customer value?",
      "What billing edge cases matter for API products?",
      "Why do usage alerts improve trust?",
      "How can pricing accidentally shape bad product behavior?"
    ],
    "interviewAnswer": "I would design usage-based pricing by identifying customer segments, the value metric, packages, entitlements, usage meter, billing edge cases, cost drivers, and customer controls like dashboards, alerts, and spend limits.\n\nA strong answer treats billing as a product surface. Customers should understand what they are paying for, why it maps to value, and how to avoid surprise.",
    "sourceLinks": [
      {
        "label": "Stripe: Usage-based billing",
        "url": "https://stripe.com/billing/usage-based-billing"
      },
      {
        "label": "Stripe Docs: Usage-based pricing models",
        "url": "https://docs.stripe.com/billing/subscriptions/usage-based-legacy/pricing-models"
      }
    ],
    "beginnerExplanation": "Pricing and packaging decide what customers pay for, what they get at each level, and how the company captures value.\n\nFor API and platform products, pricing is often usage-based. Customers may pay per API call, transaction, active user, document processed, webhook delivery, seat, storage unit, or money movement volume.\n\nThe beginner mistake is choosing a meter only because it is easy to count. A good pricing meter should be understandable, connected to customer value, hard to accidentally abuse, and possible to measure accurately.\n\nThe mental model is:\n\n```txt\nPackaging:\nWhat is included?\n\nPricing:\nWhat does it cost?\n\nMetering:\nWhat unit do we count?\n\nEntitlements:\nWhat is the customer allowed to use?\n\nBilling experience:\nCan the customer predict, understand, and trust the bill?\n```",
    "example": "Imagine a company sells a fraud-screening API.\n\nPossible meters:\n\n```txt\nPer API request:\nEasy to measure, but customers may worry retries or failed requests cost money.\n\nPer completed screening:\nCloser to value, but the system must define what \"completed\" means.\n\nPer approved transaction:\nVery tied to value, but the vendor takes revenue risk if fraud checks block many transactions.\n\nMonthly platform fee plus usage:\nPredictable base revenue, then scales with customer usage.\n```\n\nThe TPM has to think beyond revenue. Pricing affects product behavior. If customers pay per request, they may avoid useful checks. If the free tier is too generous, heavy users may never convert. If overages are confusing, finance and support will get angry tickets.",
    "commonMistakes": "A common mistake is picking a meter that customers do not understand. Confusing bills create distrust.\n\nAnother mistake is ignoring cost drivers. If the product has expensive third-party checks or compute costs, pricing must account for them.\n\nA third mistake is forgetting entitlements. The app must know what each plan can use before the bill is generated."
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
        "body": "Good user stories are small enough to deliver and test. If a story includes onboarding, verification, payments, notifications, admin tooling, reporting, and support scripts, it is probably too big.\n\nGood acceptance criteria cover:\n\nFunctional behavior: what the user can do.\n\nValidation: what input is required and what errors appear.\n\nStates: empty, loading, success, error, disabled, pending, and retry.\n\nPermissions: who can use or see the feature.\n\nData: what is saved, changed, displayed, logged, or audited.\n\nNon-functional needs: performance, accessibility, security, compliance, observability, and localization when relevant.\n\nAcceptance criteria should not over-specify engineering implementation unless the implementation is truly a requirement. The goal is shared understanding, not micromanagement.\n\nHere is how an oversized epic can be split into useful stories.\n\n```txt\nEpic:\nHelp repeat senders use saved recipients.\n\nStory 1:\nAs a repeat sender, I want to save a recipient after a successful transfer, so that I can reuse the details next time.\n\nAcceptance criteria:\n- User can save the recipient from the transfer success screen.\n- User sees the recipient name, country, payout method, and masked account identifier before saving.\n- Duplicate recipient is detected and the existing recipient is offered instead.\n- Save failure preserves the transfer receipt and lets the user retry.\n- Audit log records user, recipient ID, and creation time.\n\nStory 2:\nAs a repeat sender, I want to choose a saved recipient when starting a transfer, so that I do not re-enter details.\n\nAcceptance criteria:\n- Saved recipients appear in the recipient step.\n- User can search by recipient name.\n- Selecting a recipient pre-fills payout details.\n- User can still choose to enter a new recipient.\n- Ineligible recipients are shown with an explanation or hidden according to policy.\n\nStory 3:\nAs a support agent, I want to see which saved recipient was used, so that I can investigate transfer issues.\n\nAcceptance criteria:\n- Support can see recipient ID, display name, payout method, and creation date.\n- Sensitive account details are masked.\n- Agent can see whether the recipient was edited before the failed transfer.\n- Access is limited to support roles.\n```\n\nThe lesson is that good stories follow user jobs. \"Build saved recipients\" is too big. \"Save after transfer,\" \"select during transfer,\" and \"support can investigate\" are smaller and testable.\n\nA strong acceptance-criteria format is:\n\n```txt\nGiven a repeat sender has completed a transfer\nWhen they choose to save the recipient\nThen the recipient appears in their saved recipient list for the next transfer\n\nGiven the recipient already exists\nWhen the user tries to save it again\nThen the app explains that it is already saved and links to the existing recipient\n```\n\nThis format is useful because it forces the team to name the starting state, the user action, and the expected result."
      },
      {
        "title": "Common mistakes",
        "body": "A common mistake is writing stories that are really tasks: \"Build recipient API.\" That may be a valid engineering task, but it does not explain user value.\n\nAnother mistake is vague acceptance criteria. If QA cannot test it and engineering cannot know when it is done, it is not clear enough.\n\nA third mistake is forgetting negative paths. Most product bugs live in edge states: duplicate data, invalid input, partial failure, permission errors, timeouts, and retry behavior."
      }
    ],
    "answer": "A user story describes a user need in a simple format. It helps the team understand who wants something, what they want, and why it matters.",
    "reasoning": "Good user stories are small enough to deliver and test. If a story includes onboarding, verification, payments, notifications, admin tooling, reporting, and support scripts, it is probably too big.\n\nGood acceptance criteria cover:\n\nFunctional behavior: what the user can do.\n\nValidation: what input is required and what errors appear.\n\nStates: empty, loading, success, error, disabled, pending, and retry.\n\nPermissions: who can use or see the feature.\n\nData: what is saved, changed, displayed, logged, or audited.\n\nNon-functional needs: performance, accessibility, security, compliance, observability, and localization when relevant.\n\nAcceptance criteria should not over-specify engineering implementation unless the implementation is truly a requirement. The goal is shared understanding, not micromanagement.\n\nHere is how an oversized epic can be split into useful stories.\n\n```txt\nEpic:\nHelp repeat senders use saved recipients.\n\nStory 1:\nAs a repeat sender, I want to save a recipient after a successful transfer, so that I can reuse the details next time.\n\nAcceptance criteria:\n- User can save the recipient from the transfer success screen.\n- User sees the recipient name, country, payout method, and masked account identifier before saving.\n- Duplicate recipient is detected and the existing recipient is offered instead.\n- Save failure preserves the transfer receipt and lets the user retry.\n- Audit log records user, recipient ID, and creation time.\n\nStory 2:\nAs a repeat sender, I want to choose a saved recipient when starting a transfer, so that I do not re-enter details.\n\nAcceptance criteria:\n- Saved recipients appear in the recipient step.\n- User can search by recipient name.\n- Selecting a recipient pre-fills payout details.\n- User can still choose to enter a new recipient.\n- Ineligible recipients are shown with an explanation or hidden according to policy.\n\nStory 3:\nAs a support agent, I want to see which saved recipient was used, so that I can investigate transfer issues.\n\nAcceptance criteria:\n- Support can see recipient ID, display name, payout method, and creation date.\n- Sensitive account details are masked.\n- Agent can see whether the recipient was edited before the failed transfer.\n- Access is limited to support roles.\n```\n\nThe lesson is that good stories follow user jobs. \"Build saved recipients\" is too big. \"Save after transfer,\" \"select during transfer,\" and \"support can investigate\" are smaller and testable.\n\nA strong acceptance-criteria format is:\n\n```txt\nGiven a repeat sender has completed a transfer\nWhen they choose to save the recipient\nThen the recipient appears in their saved recipient list for the next transfer\n\nGiven the recipient already exists\nWhen the user tries to save it again\nThen the app explains that it is already saved and links to the existing recipient\n```\n\nThis format is useful because it forces the team to name the starting state, the user action, and the expected result.",
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
