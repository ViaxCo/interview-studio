import type { Question } from "../questionTypes";

export const lesson: Question = {
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
};
