# Content Audit

Date: 2026-05-14

## Summary

The current lesson bank is a strong foundation. It is no longer a shallow answer dump. It now behaves like a beginner-friendly learning system: each lesson has a concept explanation, walkthrough, practical application, mistakes, self-check prompts, an interview version, and sources.

The biggest remaining gap is not structure. The structure is working. The biggest gap is depth variance: frontend lessons often teach through concrete code, while several TPM lessons still lean on frameworks and lists where they should show richer artifacts, decision examples, tradeoff memos, launch checklists, metrics trees, or realistic product scenarios.

Current bank:

- 44 total lessons.
- 17 Frontend lessons.
- 27 TPM lessons.
- 23,675 lesson words, excluding fenced code.
- 160 fenced code blocks.
- 89 source links.
- 89 source links reachable after cleanup and the latest batch.
- 0 source links failing after cleanup and the latest batch.

## Scoring Rubric

- A: Strong enough to ship. Minor polish only.
- B: Good lesson. Add one richer example, artifact, or scenario before calling it gold standard.
- C: Needs rewrite or major expansion before it should represent the product.
- D: Do not ship in current form.

## Lesson Ratings

| Lesson | Rating | Notes |
|---|---:|---|
| `fe-closures` | A | Strong beginner explanation, useful examples, clear mental model. This is the model for frontend depth. |
| `fe-controlled-components` | B+ | Good. Add a small note on file inputs, form libraries, and when controlled inputs cause too many rerenders. |
| `fe-core-web-vitals` | B | Clear, but needs metric thresholds, tooling flow, and an example diagnosis from a real page. |
| `fe-event-loop` | A- | Strong. Could add one visual timeline or render/microtask caution. |
| `fe-flexbox-grid` | B+ | Good. Add a failing layout example where Flexbox wrapping is the wrong tool. |
| `fe-promises-async-await` | B | Good foundation. Add cancellation with `AbortController`, race handling, and `Promise.allSettled`. |
| `fe-props-state` | B+ | Clear. Add one example of lifting state and one anti-pattern around syncing props to state. |
| `fe-react-keys` | A- | Strong. Add one form-input state bug example if expanding. |
| `fe-semantic-html` | B+ | Good. Add accessible name examples and one bad ARIA replacement example. |
| `fe-testing-confidence` | B | Useful but still generic. Needs examples of what not to mock, test boundaries, and server state. |
| `fe-use-effect` | A- | Strong. Add one cleanup race/cancellation example for completeness. |
| `fe-xss` | B+ | Good. Add reflected, stored, and DOM XSS categories, plus URL validation examples. |
| `tpm-api-integration` | A- | Strongest TPM lesson. It has a real product workflow and failure modes. |
| `tpm-compliance-ux` | B | Good direction, but needs risk tiers, verification states, and a sample onboarding decision table. |
| `tpm-incident-management` | B+ | Good. Add sample incident timeline, comms cadence, and customer-impact matrix. |
| `tpm-prd` | B | Clear. Needs a mini PRD artifact or before/after PRD excerpt. |
| `tpm-prioritization` | B+ | Good. Add a scored example with tradeoffs and what gets deferred. |
| `tpm-release-readiness` | B | Useful, but checklist-like. Needs a launch readiness table and go/no-go example. |
| `tpm-stakeholder-alignment` | B+ | Good framing. Add a short decision memo example. |
| `tpm-success-metrics` | B+ | Strong conceptually. Add a metrics tree and instrumentation plan. |
| `tpm-technical-debt` | B+ | Good. Add debt sizing and roadmap capacity example. |
| `tpm-technical-tradeoffs` | B | Useful but framework-like. Needs a concrete tradeoff memo. |
| `tpm-user-stories` | B+ | Good. Add a full story split example from epic to small stories. |
| `tpm-vendor-evaluation` | B | Good skeleton. Needs vendor scorecard, security checklist, and exit-risk example. |

No lesson is currently a C or D. That is good. The next work is enrichment, not rescue.

## Source Cleanup

These source URLs failed or were blocked during the initial audit and have been replaced:

| Lesson | Old source URL | Result | Resolution |
|---|---|---:|---|
| `tpm-compliance-ux` | `https://www.fatf-gafi.org/en/topics/risk-based-approach.html` | 403 | Replaced with Federal Reserve risk-based customer due diligence source. |
| `tpm-prioritization` | `https://www.productplan.com/learn/prioritize-product-roadmap/` | 404 | Replaced with current ProductPlan prioritization support source. |
| `tpm-release-readiness` | `https://www.atlassian.com/continuous-delivery/release-management` | 404 | Replaced with Atlassian continuous delivery source. |
| `tpm-stakeholder-alignment` | `https://www.atlassian.com/team-playbook/plays/trade-off-sliders` | 404 | Replaced with current Atlassian trade-offs source. |
| `tpm-technical-tradeoffs` | `https://www.atlassian.com/team-playbook/plays/trade-off-sliders` | 404 | Replaced with current Atlassian trade-offs source. |
| `tpm-vendor-evaluation` | `https://owasp.org/www-project-vendor-security-questionnaire/` | 404 | Replaced with Google VSAQ source. |
| `tpm-vendor-evaluation` | `https://www.atlassian.com/team-playbook/plays/trade-off-sliders` | 404 | Replaced with current Atlassian trade-offs source. |

All 89 source links passed the latest reachability check.

## Priority Rewrite List

### Priority 1: TPM Gold Standard Enrichment

These lessons were upgraded first because they are important for upcoming TPM interviews:

1. `tpm-compliance-ux`
   - Added a risk-tier model.
   - Added a user-state machine.
   - Added sample recovery copy.
   - Replaced blocked source.

2. `tpm-release-readiness`
   - Added a launch readiness checklist with owners.
   - Added go/no-go decision example.
   - Added rollback and feature-flag nuance.
   - Replaced broken source.

3. `tpm-vendor-evaluation`
   - Added vendor scorecard.
   - Added security/compliance review questions.
   - Added proof-of-concept plan.
   - Replaced broken sources.

4. `tpm-technical-tradeoffs`
   - Added a one-page tradeoff memo example.
   - Added recommendation, risk, mitigation, and revisit trigger.
   - Replaced broken source.

5. `tpm-prd`
   - Added a mini PRD excerpt.
   - Added weak versus strong requirements.
   - Added technical edge cases.

### Priority 2: Frontend Depth Additions

These do not need rewrites, but they should gain more practical examples:

1. `fe-promises-async-await`
   - Add cancellation with `AbortController`.
   - Add `Promise.allSettled`.
   - Add race/stale result explanation.

2. `fe-core-web-vitals`
   - Add thresholds.
   - Add tools: Lighthouse, WebPageTest, Chrome Performance panel, field data.
   - Add one end-to-end diagnosis example.

3. `fe-testing-confidence`
   - Add testing boundaries.
   - Add "mock API, not implementation details" example.
   - Add what belongs in unit, component, and end-to-end tests.

4. `fe-xss`
   - Add reflected, stored, DOM XSS.
   - Add URL validation and safe rich text handling examples.

### Priority 3: TPM Quality Pass

Completed on 2026-05-14: five older TPM lessons were enriched with concrete artifacts:

1. `tpm-prioritization`
   - Added a quarter-goal prioritization artifact.
   - Added do-now, discovery-only, deferred, risk, and revisit-trigger example.

2. `tpm-success-metrics`
   - Added a saved-recipient metrics tree.
   - Added instrumentation events, properties, baseline, and review-window plan.

3. `tpm-incident-management`
   - Added incident timeline, support/customer update, and postmortem outline.

4. `tpm-user-stories`
   - Added epic-to-story splitting example.
   - Added Given/When/Then acceptance criteria examples.

5. `tpm-technical-debt`
   - Added debt sizing artifact.
   - Added options, recommendation, success measures, and guardrail.

The app now also has guided learning paths:

1. TPM crash path.
2. API and platform TPM.
3. Fintech and risk TPM.
4. Frontend foundations.

## Missing Topic Map

### Frontend Topics To Add Next

High-value interview topics not yet covered or not yet deeply expanded:

1. Memoization: `useMemo`, `useCallback`, `React.memo`.
2. State management: local state, context, server state, global stores.
3. Browser rendering pipeline: DOM, CSSOM, layout, paint, compositing.
4. Accessibility: focus management, keyboard navigation, accessible names.
5. TypeScript in frontend apps.
6. Build tooling: bundling, code splitting, tree shaking.
7. HTTP, caching, cookies, CORS, and auth basics.

### TPM Topics To Add Next

Prioritize TPM first because the client has interviews lined up. The first two expansion batches now cover the original highest-priority TPM list. Remaining TPM gaps to add or deepen:

1. Product requirements for data products and reporting.
2. Marketplace or supply-demand product tradeoffs.
3. Enterprise permissions, roles, and auditability.
4. Pricing, packaging, and usage-based billing for technical products.
5. Migration communications and customer change management.
6. Post-launch monitoring and product operations.
7. Security review and privacy-by-design for product managers.
8. Working with ambiguous executive asks.

## Content Standard Going Forward

Every new lesson should include:

1. Beginner mental model
   - Plain-language explanation before any jargon.
   - One sentence that tells the learner why the concept exists.

2. Concrete walkthrough
   - Frontend: code, UI state, browser behavior, or failure example.
   - TPM: scenario, artifact, decision memo, checklist, table, or operating model.

3. Practical application
   - How this appears in real work.
   - What decision the learner should make differently after understanding it.

4. Common mistakes
   - At least three mistakes.
   - Include the actual consequence, not just "do not do this."

5. Check yourself
   - Five prompts.
   - Prompts should test understanding, not memorization.

6. Interview version
   - Concise answer.
   - Mention what a strong candidate should include.

7. Sources
   - At least two accessible sources.
   - Prefer official docs, primary docs, or durable handbooks.
   - Source links must be reachable.

## Recommended Next Batch

Completed on 2026-05-14: the first expansion batch added 10 lessons, weighted toward TPM:

1. TPM: Design an API product from scratch.
2. TPM: Build versus buy.
3. TPM: Payments/remittance requirements.
4. TPM: API versioning and backwards compatibility.
5. TPM: Partner outage fallback strategy.
6. TPM: Migration planning.
7. TPM: Product metrics for onboarding and activation.
8. Frontend: React rerenders.
9. Frontend: Data fetching and cache invalidation.
10. Frontend: Debounce and throttle.

Completed on 2026-05-14: the second expansion batch added 10 more lessons:

1. TPM: Technical product strategy.
2. TPM: Roadmaps under cross-functional pressure.
3. TPM: Dependency risk across teams.
4. TPM: Experiment design with compliance or user-risk constraints.
5. TPM: Internal tools for operations and support.
6. TPM: Support feedback loops.
7. TPM: Fraud, compliance, and UX tradeoffs.
8. TPM: Platform product sense.
9. Frontend: Event propagation and delegation.
10. Frontend: CSS cascade, specificity, and stacking context.

## Immediate Next Step

Source cleanup, Priority 1 TPM enrichment, and two 10-lesson expansion batches are now complete.

Recommended order:

1. Review the guided paths in the app and confirm the sequencing feels right.
2. Commit the quality-pass and learning-path update after review.
3. Add the next TPM batch around enterprise, pricing, security/privacy, data products, and post-launch operations.
4. Keep running source validation and browser spot-checks after every batch.
