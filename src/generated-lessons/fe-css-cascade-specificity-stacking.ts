import type { Question } from "../questionTypes";

export const lesson: Question = {
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
};
