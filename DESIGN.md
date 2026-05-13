# Design

## System

Interview Studio is a restrained product UI. Design serves focused interview practice: dense enough to scan quickly, calm enough for sustained reading, and explicit enough for keyboard and screen reader users. The shell should support future collections without making the current frontend collection feel bolted on.

## Color

Use OKLCH semantic tokens. Neutrals are lightly tinted toward the product accent. Accent color is reserved for primary actions, selected state, focus, and progress. Avoid decorative metric-color usage and avoid gray text on colored surfaces.

Primary roles:
- `--surface`: main panels and controls
- `--surface-muted`: sidebars and subdued regions
- `--surface-raised`: selected rows and answer sections
- `--text`: primary text
- `--text-muted`: secondary text
- `--accent`: primary action and selection
- `--accent-strong`: high-contrast accent text
- `--danger`: destructive/reset actions with AA contrast
- `--border`: structural borders
- `--focus`: keyboard focus outline

## Typography

Use the system font stack. Keep headings compact and product-like, not hero-like. Body copy should stay within readable measure, especially answer reasoning. Labels and metadata use smaller type with strong enough weight and contrast.

## Layout

Desktop uses a persistent navigation sidebar, top controls, a question queue, and a question detail panel. Mobile stacks the same workflow: navigation, filters, question queue, then detail. Avoid nested card styling; use framed repeated items only where they represent selectable questions or answer sections.

## Components

Buttons use consistent height, radius, focus treatment, and semantic state. Selectable categories and questions expose current state with ARIA. Reveal controls expose expanded state and connect to the answer panel. Empty states are concise and action-oriented.

## Motion

Use short, functional transitions only for hover/focus/selection. Respect `prefers-reduced-motion` by removing transform and transition effects.

## Responsive

No horizontal page overflow at 320px and up. Touch targets should be at least 44px tall/wide where practical. Long labels must wrap or scroll within intentional containers without clipping important controls.
