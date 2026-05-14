---
id: fe-flexbox-grid
track: Frontend
category: CSS
level: Foundational
question: When would you use Flexbox versus CSS Grid?
sources:
  - label: MDN: Basic concepts of flexbox
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
  - label: MDN: Basic concepts of grid layout
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
---

## Learn it

Flexbox and Grid are both layout systems in CSS, but they are built for different layout problems.

Flexbox is mainly for one-dimensional layout. That means you are arranging items in a row or a column. You can wrap to multiple lines, but the core thinking is still one direction at a time.

Grid is mainly for two-dimensional layout. That means you are arranging items across rows and columns at the same time.

A simple way to remember it:

- Use Flexbox when the content itself should decide how space is shared along one direction.
- Use Grid when the page or component needs a deliberate row-and-column structure.

For example, a button group, navigation bar, toolbar, avatar plus text row, or centered modal content is usually a Flexbox problem.

A dashboard, pricing table, gallery, card layout, calendar, or page shell with named areas is often a Grid problem.

## Walkthrough

Here is a Flexbox row:

```css
.toolbar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toolbar .search {
  flex: 1;
}
```

This says: place the toolbar items in a row, align them vertically, leave a gap, and let the search field take remaining space. The exact width of each item can adapt to the content and available space.

Here is a Grid layout:

```css
.dashboard {
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar {
  grid-area: sidebar;
}
```

This says: create a defined page structure with columns and rows. The sidebar occupies a named area. The main content has a predictable position.

The difference is not about which syntax looks nicer. It is about the job. Flexbox is great when items flow along an axis. Grid is great when you are designing a layout map.

## Make it practical

A good frontend engineer often uses both together.

Imagine a product dashboard. The outer page might use Grid because the app has a sidebar, header, and main content area. Inside the header, Flexbox might align the title, search field, and account menu. Inside a card, Flexbox might align an icon and label. Inside the main area, Grid might arrange analytic tiles.

```css
.app-shell {
  display: grid;
  grid-template-columns: 15rem minmax(0, 1fr);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}
```

This combination is normal. You do not need to pick one layout system for the entire app.

When deciding, ask: am I aligning items in one direction, or am I defining a structure across both rows and columns? That question usually gets you to the right tool.

## Common mistakes

A common mistake is using Flexbox for a layout that really needs columns to line up across rows. Flexbox can wrap, but each line behaves independently. If you need consistent tracks across rows, Grid is usually cleaner.

Another mistake is using Grid for tiny one-axis alignment. A row with an icon, label, spacer, and button is often easier with Flexbox.

Also remember that layout should protect content. Avoid fixed widths unless you really need them. Use `minmax(0, 1fr)`, `auto-fit`, `min()`, `max()`, and responsive constraints so text and controls have room to behave on small screens.

## Check yourself

- What does one-dimensional layout mean?
- What does two-dimensional layout mean?
- Why is a toolbar usually a Flexbox problem?
- Why is a dashboard shell usually a Grid problem?
- Can Flexbox and Grid be used together in the same component tree?

## Interview version

Flexbox is best for one-dimensional layout, where items are arranged along a row or column and space is distributed along that axis. Grid is best for two-dimensional layout, where rows and columns need to be controlled together.

I would use Flexbox for nav bars, toolbars, centering, and small alignment patterns. I would use Grid for dashboards, galleries, page shells, calendars, and layouts where items must line up across both axes. In real apps, I often combine them.
