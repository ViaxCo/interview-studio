# Product

## Register

product

## Users

Interview Studio is for interview candidates, mentors, and interviewers who need a focused practice workspace for technical interview preparation. Candidates use it while studying under time pressure, often in short sessions where they need to recall an answer, compare it with a stronger model, and decide what to review next. Mentors and interviewers use it to guide practice, spot weak areas, and rehearse follow-up questions.

The product supports frontend engineering and technical product management today while feeling prepared for broader interview collections later. The name is Interview Studio, not Frontend Interview Studio, because the long-term shape is a reusable practice environment for multiple domains.

## Product Purpose

Interview Studio helps users practice with a large bank of interview questions, strong model answers, engineering reasoning, follow-up prompts, code examples, and lightweight progress tracking. The current product has frontend engineering and TPM tracks, searchable and filterable by track, topic, and level.

Success means a user can quickly find a topic, try answering before revealing guidance, understand the engineering reason behind the answer, save questions for later, run saved-only or general drills, and keep progress across devices when signed in with Google. The interface should make review state obvious without turning the study session into a dashboard performance.

## Brand Personality

Rigorous, calm, practical. The product should feel like a serious study room with excellent materials: direct, trustworthy, and quietly encouraging. It should avoid both academic dryness and flashy coaching-app energy.

The voice is plain and useful. It should explain what changed, what is saved, what is empty, and what the user can do next without motivational filler.

## Anti-references

Avoid generic AI SaaS dashboard styling: oversized hero metrics, decorative gradients, ornamental charts, vague productivity copy, and heavy card grids. Avoid gamified coaching surfaces that make practice feel like a streak app. Avoid interview-prep pages that bury the actual question bank behind marketing copy.

Avoid UI behavior that breaks a user's mental model: Saved mode must stay saved-only, reviewed state must not look clickable unless it is, account sync should never silently imply a default preference was a user choice, and completion indicators must not claim the bank is finished early.

## Design Principles

- Practice before reveal: the interface should encourage recall before showing the model answer.
- Explanation over trivia: answers should foreground engineering reasoning, tradeoffs, examples, traps, and follow-up thinking.
- Quiet confidence: keep the surface restrained, readable, and useful for long study sessions.
- State is visible and semantic: selected, reviewed, saved, expanded, synced, empty, and disabled states must be clear visually and to assistive technology.
- Mode promises are contracts: Browse, Saved, and Mock mode must use the queue they imply. Saved drills must never drift into unsaved questions.
- Small surface, real depth: prioritize search, filtering, answer quality, review state, account progress, and drill flow over decorative presentation.

## Accessibility & Inclusion

Target WCAG AA. All controls must be keyboard reachable, have visible focus, expose selected and expanded state semantically, meet contrast requirements, respect reduced motion, and preserve usable touch targets on mobile.

The product should work for users studying late, under stress, or on small screens. Dark mode is available for low-light study. Motion should be short and functional, never required to understand state.
