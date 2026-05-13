# Design

## System

Interview Studio is a restrained product UI for focused study. Design serves the workflow: find a question, try the answer, reveal reasoning, save or review it, and continue. The shell should feel dense enough for scanning but calm enough for long reading sessions.

The current app uses a persistent sidebar, track, search, topic, and level controls, a question queue, a detail panel, answer sections, saved queues, mock drills, Google account status, and progress feedback. Future collections should fit this shell without making any one bank feel temporary.

## Theme

Light mode is the default study surface for daytime laptop use. Dark mode is available for late or low-light practice, where the user is reading dense reasoning and code for a sustained session. Both themes must feel equally intentional.

Do not add a theme preference to account sync unless the user explicitly toggled theme. A rendered fallback theme is not user intent.

## Color

Use OKLCH semantic tokens. Neutrals are lightly tinted toward the product's blue-green accent. The color strategy is restrained: accent is reserved for selected state, primary action, focus, progress, saved/reviewed feedback, and topic tinting.

Primary roles:
- `--surface`: main panels and controls.
- `--surface-muted`: sidebar and subdued regions.
- `--surface-raised`: raised controls, answer panels, and grouped surfaces.
- `--surface-selected`: selected or active state.
- `--border` and `--border-strong`: structure, current state, and focus-adjacent emphasis.
- `--text`, `--text-muted`, `--text-soft`: primary reading, secondary metadata, and subdued copy.
- `--accent`, `--accent-strong`, `--accent-soft`: primary action, selected state, progress, and focus.
- `--success-soft` and `--success-text`: reviewed state.
- `--warning-soft`: milestone and recoverable notices.
- `--danger`: reset and blocked-storage warnings.

Track and topic treatment should clarify scope without turning the page into a rainbow. Selected topics and current questions use the topic tint; unselected controls remain quiet.

## Typography

Use the system font stack. Keep the product compact: no hero type inside the app shell. Headings should create a clear hierarchy between brand, question title, section headings, and metadata.

Answer copy is the main reading surface. Body paragraphs should stay around 65 to 75 characters where practical, use generous line-height, and avoid weak low-contrast text. Inline code uses a monospace face, subtle tint, and enough border contrast to remain readable in both themes.

## Layout

Desktop uses a two-column app shell: persistent navigation and progress on the left, active work area on the right. The work area contains a toolbar, question queue, and detail panel. The detail panel may be sticky on large screens because the user is often comparing queue position with the current answer.

Mobile stacks the same workflow without changing the product model: navigation, filters, queue, detail. No horizontal page overflow at 320px and up.

Avoid nested cards. Use framed surfaces only where they represent a selectable item, a control group, an answer section, or an empty state. The app should feel structured, not boxed-in.

## Components

Buttons use a consistent 8px radius, stable height, visible focus, and mode-specific disabled states. Hover states should make clickability obvious without changing selected state. Selected controls should not look like ordinary hover states.

Mode tabs are semantic commitments:
- Browse shows the filtered question bank.
- Saved shows only saved questions.
- Mock mode preserves the queue scope it started from.

The random drill button must draw from the active queue. In Saved mode or a Saved-origin mock drill, it must only use saved questions and must be disabled when that queue is empty.

Question rows need clear current, hover, reviewed, and metadata treatment. Detail tags should quickly show level, reveal state, and review state. Saved and reviewed actions must visually confirm state without relying on color alone.

Answer sections should feel rich but readable: model answer, engineering reasoning, mental model, senior answer moves, code examples, illustrations, common traps, and follow-up prompts. Code examples should use syntax highlighting when possible and remain legible in dark mode.

Empty states should explain the exact state: no saved questions, no matching questions, no selected question, blocked local storage, or importable device progress. Each empty state should include the next useful action when one exists.

## Motion

Use short, functional motion only: row settling, answer reveal, section entrance, saved/reviewed confirmation, progress pulse, and toast entrance. Use ease-out-quint or ease-out-expo curves. Do not animate layout properties.

Respect `prefers-reduced-motion` by removing transform-heavy and decorative motion. State must remain understandable without animation.

## Account And Persistence

Guest progress is local to the device. Signed-in progress uses Google auth and Convex account storage. The UI should make sync status understandable in plain language without exposing implementation details.

Account progress includes reviewed, revealed, saved, and explicit theme preference. Import prompts should only appear when there is meaningful local device progress to import. Failed saves should keep the user's visible change in place and explain that sync failed.

## Responsive

Touch targets should be at least 44px tall or wide where practical. Long labels, question text, code, and answer content must wrap or scroll inside intentional containers without clipping important controls. The sidebar becomes a normal stacked region on smaller screens; the question list and detail panel should keep their hierarchy instead of collapsing into indistinguishable cards.
