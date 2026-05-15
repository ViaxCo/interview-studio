import type { Question } from "../questionTypes";

export const lesson: Question = {
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
};
