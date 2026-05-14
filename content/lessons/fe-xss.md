---
id: fe-xss
track: Frontend
category: Security
level: Intermediate
question: What is cross-site scripting, and how do you prevent it?
sources:
  - label: OWASP: Cross Site Scripting Prevention Cheat Sheet
    url: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
  - label: MDN: Content Security Policy
    url: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
---

## Learn it

Cross-site scripting, usually called XSS, happens when an attacker gets malicious JavaScript to run in another user's browser as if it belonged to your site.

That is dangerous because JavaScript running on your site can often read page content, make requests as the user, steal tokens if they are exposed, change what the user sees, or trick the user into taking actions.

The core problem is untrusted input becoming executable code.

Imagine a comment feature. A normal user writes:

```txt
Great article.
```

An attacker writes:

```html
<script>sendCookiesToAttacker()</script>
```

If your app stores that comment and later renders it as real HTML, the browser may execute the attacker's script for every user who views the page.

The beginner-friendly rule is: user input should be treated as data, not as code.

## Walkthrough

In React, this is usually safe:

```jsx
function Comment({ text }) {
  return <p>{text}</p>;
}
```

If `text` contains `<script>alert("bad")</script>`, React escapes it. The browser displays it as text instead of executing it.

This is risky:

```jsx
function Comment({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
```

The name is deliberately scary because React is telling you: if this string contains unsafe HTML, the browser may treat it as real markup and script-capable content.

XSS can also appear in URLs and attributes. A link that accepts any string from a user can become dangerous if it allows schemes like `javascript:`.

```jsx
<a href={userProvidedUrl}>Open profile</a>
```

That does not mean links are always unsafe. It means URL values should be validated based on what the product expects.

## Make it practical

Preventing XSS usually requires several layers.

First, escape output by default. Frameworks like React help when you render values as text.

Second, avoid rendering raw HTML from users. If the product truly needs rich text, sanitize it with a trusted sanitizer that removes dangerous tags and attributes. Do not write your own sanitizer casually.

Third, validate URLs and other dangerous fields. If a profile link should be `https`, enforce that.

Fourth, use safe APIs. Prefer `textContent` over `innerHTML` when setting text manually.

```js
element.textContent = userComment;
```

Fifth, use Content Security Policy as an additional defense. CSP can reduce damage by limiting which scripts the browser is allowed to execute. It should not be your only protection, but it is valuable.

In a real app, I would also pay attention to where tokens are stored, whether cookies are `HttpOnly`, and whether third-party scripts are allowed to run on sensitive pages.

## Common mistakes

A common mistake is thinking XSS is only a backend problem. Frontend code decides how data is rendered, which URLs are trusted, and whether raw HTML is inserted.

Another mistake is trusting data because it came from your own API. If the API stored user input, partner data, CMS content, or imported data, it can still be untrusted.

A third mistake is assuming React makes XSS impossible. React helps by escaping text by default, but unsafe HTML insertion, unsafe URLs, third-party scripts, and bad token handling can still create risk.

## Check yourself

- What does XSS let an attacker do?
- Why is untrusted input becoming executable code dangerous?
- Why is normal React text rendering safer than raw HTML insertion?
- When would sanitization be needed?
- Why is CSP a defense layer rather than the whole solution?

## Interview version

XSS is when attacker-controlled input runs as JavaScript in another user's browser under your site's trust. It can steal data, perform actions as the user, or alter the page.

To prevent it, render untrusted input as text, avoid raw HTML, sanitize rich text when truly needed, validate dangerous values like URLs, use safe DOM APIs, protect tokens, and add Content Security Policy as defense in depth. A strong answer should mention that React escapes text by default but does not remove every XSS risk.
