---
id: fe-css-cascade-specificity-stacking
track: Frontend
category: CSS
level: Intermediate
question: Explain the CSS cascade, specificity, and stacking context.
sources:
  - label: MDN: CSS cascade
    url: https://developer.mozilla.org/docs/Web/CSS/CSS_cascade/Cascade
  - label: MDN: CSS specificity
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity
  - label: MDN: Stacking context
    url: https://developer.mozilla.org/docs/Web/CSS/Guides/Positioned_layout/Stacking_context
---

## Learn it

CSS can feel confusing because more than one rule can target the same element. The browser needs a way to decide which declaration wins.

The cascade is that decision system. It considers where styles came from, importance, cascade layers, specificity, order, and inheritance.

The beginner mistake is thinking CSS is only "last rule wins." Order matters, but only after other rules are considered.

Specificity is one part of the cascade. It is the weight of a selector.

```css
button {
  color: black;
}

.primary {
  color: blue;
}

#checkout {
  color: red;
}
```

If the same button has `id="checkout"` and `class="primary"`, the ID selector is more specific, so red wins over blue and black.

## Walkthrough

Think of specificity like a score:

```txt
Inline styles:
Very strong

ID selectors:
Strong

Class, attribute, pseudo-class selectors:
Medium

Element and pseudo-element selectors:
Low
```

This is why deeply specific CSS can become hard to override.

```css
.app .sidebar nav ul li a.active {
  color: red;
}
```

Later, someone tries:

```css
.active {
  color: blue;
}
```

The second rule may come later, but it is less specific. The red rule can still win.

That is why good CSS often uses low, predictable specificity.

## Make it practical

Stacking context is a different but related source of confusion. It affects which things appear in front of other things.

A common beginner belief is:

```txt
The biggest z-index always appears on top.
```

That is not always true. `z-index` is compared inside stacking contexts. A child can be trapped inside its parent's stacking context.

```html
<div class="modal-shell">
  <div class="tooltip">Tooltip</div>
</div>

<header class="site-header">Header</header>
```

```css
.modal-shell {
  position: relative;
  z-index: 1;
}

.tooltip {
  position: absolute;
  z-index: 9999;
}

.site-header {
  position: relative;
  z-index: 10;
}
```

Even though the tooltip has `z-index: 9999`, it may still appear behind the header because it lives inside `.modal-shell`, and `.modal-shell` is below the header in the parent stacking order.

To fix stacking bugs, inspect the parent contexts, not only the element with the big `z-index`.

```txt
Debug checklist

1. Which rule is winning in DevTools?
2. Is the losing rule less specific?
3. Is `!important` involved?
4. Is the element inside a stacking context?
5. Is a parent setting position, z-index, transform, opacity, filter, or isolation?
6. Can the CSS be simplified instead of raising z-index again?
```

## Common mistakes

A common mistake is adding `!important` instead of understanding why a rule lost. That may fix one bug and create the next one.

Another mistake is increasing `z-index` forever. If the element is inside a lower stacking context, a bigger number may not help.

A third mistake is writing selectors that are too specific. They make future overrides harder and make the stylesheet fragile.

## Check yourself

- Why is CSS not simply "last rule wins"?
- What is specificity?
- Why can an ID selector beat a class selector?
- What is a stacking context?
- Why might `z-index: 9999` still appear behind another element?

## Interview version

The cascade is the browser's process for deciding which CSS declaration wins. Specificity is the selector weight used when competing rules apply in the same cascade layer and origin. Stacking context controls how elements are layered on the z-axis, and `z-index` is compared within those contexts.

A strong answer should mention cascade order, specificity, source order, avoiding unnecessary `!important`, and debugging stacking bugs by checking parent stacking contexts.
