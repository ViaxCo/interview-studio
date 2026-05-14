---
id: fe-semantic-html
track: Frontend
category: Accessibility
level: Foundational
question: Why does semantic HTML matter?
sources:
  - label: MDN: HTML elements reference
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
  - label: WAI-ARIA APG: Read me first
    url: https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
---

## Learn it

Semantic HTML means using HTML elements according to their meaning, not only their appearance.

A `<button>` means an action can be triggered. An `<a>` means navigation to another location. A `<nav>` means a navigation region. A `<main>` means the main content of the page. A `<form>` means a set of controls can be submitted. A heading means a section title.

This matters because the browser, screen readers, keyboard users, search engines, password managers, form tools, and testing tools all understand meaning from HTML.

If you use the right element, you get useful behavior for free. A real button can be focused with the keyboard. It responds to Enter and Space. It communicates itself as a button to assistive technology. It can be disabled. It participates in forms.

If you use a `<div>` and make it look like a button, you have to rebuild all of that behavior yourself.

```html
<button type="button">Save changes</button>
```

This is better than:

```html
<div class="button">Save changes</div>
```

The second version may look correct visually, but it has weak meaning and weak built-in behavior.

## Walkthrough

The most common semantic decision is button versus link.

Use a link when the user is going somewhere.

```html
<a href="/settings">Account settings</a>
```

Use a button when the user is doing something on the current page.

```html
<button type="button">Open menu</button>
```

This distinction helps keyboard and screen reader users understand what will happen. It also helps the browser provide the right default behavior.

Headings are another major example. Headings create a document outline. A screen reader user can jump between headings to understand the page structure, similar to how a sighted user scans large text.

```html
<main>
  <h1>Billing</h1>
  <section>
    <h2>Payment method</h2>
  </section>
  <section>
    <h2>Invoices</h2>
  </section>
</main>
```

This is much more understandable than a page made entirely of styled `<div>` elements.

## Make it practical

Semantic HTML does not mean ugly HTML. You can style semantic elements however the design requires. The point is to start with the correct meaning, then style it.

For forms, connect labels to inputs.

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" />
```

For page structure, use landmarks.

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>
```

For interactive controls, prefer native elements before reaching for ARIA. ARIA can add accessibility information, but it does not automatically add all native keyboard behavior. A custom div with `role="button"` still needs keyboard handling, focus styling, disabled behavior, and careful testing.

The best practical mindset is: choose the HTML element that already means what the UI does.

## Common mistakes

A common mistake is using clickable divs everywhere because they are easy to style. That creates keyboard and assistive technology problems.

Another mistake is using ARIA to cover up incorrect HTML. ARIA is powerful, but native semantic elements are usually more reliable.

A third mistake is choosing elements based on visual style. A link can look like a button. A button can look like an icon. Meaning should come from behavior, not appearance.

## Check yourself

- What does semantic HTML mean?
- When should you use a link instead of a button?
- Why are headings important for navigation?
- Why is a native button better than a clickable div?
- Why should ARIA not be your first tool for normal controls?

## Interview version

Semantic HTML means using elements for their real meaning and behavior. It improves accessibility, keyboard support, browser behavior, maintainability, and tooling because the platform understands what the UI is.

I would use links for navigation, buttons for actions, labels for inputs, headings for structure, and landmarks for page regions. A strong answer should mention that native elements give built-in behavior that custom divs and ARIA often require you to recreate manually.
