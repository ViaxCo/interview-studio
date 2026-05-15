import type { Question } from "../questionTypes";

export const lesson: Question = {
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
};
