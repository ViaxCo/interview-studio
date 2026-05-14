---
id: tpm-stakeholder-alignment
track: TPM
category: Stakeholder Management
level: Intermediate
question: How would you handle conflicting stakeholder priorities?
sources:
  - label: Atlassian Team Playbook: DACI
    url: https://www.atlassian.com/team-playbook/plays/daci
  - label: Atlassian Team Playbook: Trade-offs
    url: https://www.atlassian.com/team-playbook/plays/trade-offs
---

## Learn it

Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.

The TPM's job is not to make everyone equally happy. The job is to make the tradeoff explicit, connect it to product and business goals, and help the right decision-maker choose with the best available information.

The beginner mistake is to treat stakeholder management as persuasion only. A stronger TPM treats it as decision design. Who decides? What evidence matters? What are the options? What are the consequences? What are we optimizing for right now?

## Walkthrough

Imagine a team building a new onboarding flow.

Sales wants it faster because prospects abandon setup. Compliance wants additional verification. Engineering wants to fix the architecture first because the current flow is hard to change. Support wants clearer status messages because users keep opening tickets.

If you ask each group what they want, you get a list of demands. If you ask what risk or outcome they care about, you get something more useful.

Sales cares about activation and revenue.

Compliance cares about regulatory exposure and fraud.

Engineering cares about delivery risk and maintainability.

Support cares about customer confusion and operational load.

Now the TPM can frame options:

1. Launch the faster flow with current controls.
2. Add all compliance checks before launch.
3. Launch a progressive flow with required checks before risky actions.
4. Delay launch to refactor first.

Each option has tradeoffs. The conversation becomes about choosing deliberately, not arguing forever.

## Make it practical

I would start by writing the decision clearly. For example: "Should we launch progressive onboarding in Q2 with risk-based verification, or delay until the full identity platform refactor is complete?"

Then I would gather evidence:

- User impact and drop-off data.
- Revenue or strategic value.
- Compliance requirements and risk tolerance.
- Engineering effort and reliability risk.
- Support and operations impact.
- Dependencies and timing constraints.

Next, I would define decision roles. A framework like DACI helps: driver, approver, contributors, informed. The TPM may drive the decision, but the approver may be a product leader, compliance owner, or executive depending on the risk.

Then I would present options with consequences. Avoid hiding tradeoffs. A good decision memo says what we gain, what we give up, what risk remains, and how we will monitor it.

After the decision, I would communicate it clearly. Stakeholders may disagree, but they should understand why the decision was made and what would cause us to revisit it.

## Common mistakes

A common mistake is trying to solve conflict through more meetings without clarifying the decision. Meetings help only when the decision and decision-maker are clear.

Another mistake is using volume as priority. The loudest stakeholder is not automatically the most important stakeholder.

A third mistake is pretending there is no tradeoff. Mature product work often means choosing between good things under constraints.

## Check yourself

- Why is stakeholder conflict normal in product work?
- What is the difference between demands and underlying outcomes?
- Why should decision roles be explicit?
- What should an options memo include?
- How do you keep alignment after a decision is made?

## Interview version

I would clarify the actual decision, identify the outcome each stakeholder is optimizing for, gather evidence, define decision roles, and present options with tradeoffs. Then I would help the right approver make a decision and communicate the rationale.

A strong answer shows that alignment is not about pleasing everyone. It is about making tradeoffs visible, tying them to goals, and moving the team forward with a clear decision.
