import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-stakeholder-alignment",
  "track": "TPM",
  "category": "Stakeholder Management",
  "level": "Intermediate",
  "question": "How would you handle conflicting stakeholder priorities?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.\n\nThe TPM's job is not to make everyone equally happy. The job is to make the tradeoff explicit, connect it to product and business goals, and help the right decision-maker choose with the best available information.\n\nThe beginner mistake is to treat stakeholder management as persuasion only. A stronger TPM treats it as decision design. Who decides? What evidence matters? What are the options? What are the consequences? What are we optimizing for right now?"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a team building a new onboarding flow.\n\nSales wants it faster because prospects abandon setup. Compliance wants additional verification. Engineering wants to fix the architecture first because the current flow is hard to change. Support wants clearer status messages because users keep opening tickets.\n\nIf you ask each group what they want, you get a list of demands. If you ask what risk or outcome they care about, you get something more useful.\n\nSales cares about activation and revenue.\n\nCompliance cares about regulatory exposure and fraud.\n\nEngineering cares about delivery risk and maintainability.\n\nSupport cares about customer confusion and operational load.\n\nNow the TPM can frame options:\n\n1. Launch the faster flow with current controls.\n2. Add all compliance checks before launch.\n3. Launch a progressive flow with required checks before risky actions.\n4. Delay launch to refactor first.\n\nEach option has tradeoffs. The conversation becomes about choosing deliberately, not arguing forever."
    },
    {
      "title": "Make it practical",
      "body": "I would start by writing the decision clearly. For example: \"Should we launch progressive onboarding in Q2 with risk-based verification, or delay until the full identity platform refactor is complete?\"\n\nThen I would gather evidence:\n\n- User impact and drop-off data.\n- Revenue or strategic value.\n- Compliance requirements and risk tolerance.\n- Engineering effort and reliability risk.\n- Support and operations impact.\n- Dependencies and timing constraints.\n\nNext, I would define decision roles. A framework like DACI helps: driver, approver, contributors, informed. The TPM may drive the decision, but the approver may be a product leader, compliance owner, or executive depending on the risk.\n\nThen I would present options with consequences. Avoid hiding tradeoffs. A good decision memo says what we gain, what we give up, what risk remains, and how we will monitor it.\n\nAfter the decision, I would communicate it clearly. Stakeholders may disagree, but they should understand why the decision was made and what would cause us to revisit it."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is trying to solve conflict through more meetings without clarifying the decision. Meetings help only when the decision and decision-maker are clear.\n\nAnother mistake is using volume as priority. The loudest stakeholder is not automatically the most important stakeholder.\n\nA third mistake is pretending there is no tradeoff. Mature product work often means choosing between good things under constraints."
    }
  ],
  "answer": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.",
  "reasoning": "I would start by writing the decision clearly. For example: \"Should we launch progressive onboarding in Q2 with risk-based verification, or delay until the full identity platform refactor is complete?\"\n\nThen I would gather evidence:\n\n- User impact and drop-off data.\n- Revenue or strategic value.\n- Compliance requirements and risk tolerance.\n- Engineering effort and reliability risk.\n- Support and operations impact.\n- Dependencies and timing constraints.\n\nNext, I would define decision roles. A framework like DACI helps: driver, approver, contributors, informed. The TPM may drive the decision, but the approver may be a product leader, compliance owner, or executive depending on the risk.\n\nThen I would present options with consequences. Avoid hiding tradeoffs. A good decision memo says what we gain, what we give up, what risk remains, and how we will monitor it.\n\nAfter the decision, I would communicate it clearly. Stakeholders may disagree, but they should understand why the decision was made and what would cause us to revisit it.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is stakeholder conflict normal in product work?",
    "What is the difference between demands and underlying outcomes?",
    "Why should decision roles be explicit?",
    "What should an options memo include?",
    "How do you keep alignment after a decision is made?"
  ],
  "interviewAnswer": "I would clarify the actual decision, identify the outcome each stakeholder is optimizing for, gather evidence, define decision roles, and present options with tradeoffs. Then I would help the right approver make a decision and communicate the rationale.\n\nA strong answer shows that alignment is not about pleasing everyone. It is about making tradeoffs visible, tying them to goals, and moving the team forward with a clear decision.",
  "sourceLinks": [
    {
      "label": "Atlassian Team Playbook: DACI",
      "url": "https://www.atlassian.com/team-playbook/plays/daci"
    },
    {
      "label": "Atlassian Team Playbook: Trade-offs",
      "url": "https://www.atlassian.com/team-playbook/plays/trade-offs"
    }
  ],
  "beginnerExplanation": "Conflicting stakeholder priorities are normal. Sales may want a feature for a large prospect. Compliance may want stricter controls. Engineering may want to reduce technical debt. Support may want fewer manual escalations. Leadership may want growth. Users may want the product to be simpler.\n\nThe TPM's job is not to make everyone equally happy. The job is to make the tradeoff explicit, connect it to product and business goals, and help the right decision-maker choose with the best available information.\n\nThe beginner mistake is to treat stakeholder management as persuasion only. A stronger TPM treats it as decision design. Who decides? What evidence matters? What are the options? What are the consequences? What are we optimizing for right now?",
  "example": "Imagine a team building a new onboarding flow.\n\nSales wants it faster because prospects abandon setup. Compliance wants additional verification. Engineering wants to fix the architecture first because the current flow is hard to change. Support wants clearer status messages because users keep opening tickets.\n\nIf you ask each group what they want, you get a list of demands. If you ask what risk or outcome they care about, you get something more useful.\n\nSales cares about activation and revenue.\n\nCompliance cares about regulatory exposure and fraud.\n\nEngineering cares about delivery risk and maintainability.\n\nSupport cares about customer confusion and operational load.\n\nNow the TPM can frame options:\n\n1. Launch the faster flow with current controls.\n2. Add all compliance checks before launch.\n3. Launch a progressive flow with required checks before risky actions.\n4. Delay launch to refactor first.\n\nEach option has tradeoffs. The conversation becomes about choosing deliberately, not arguing forever.",
  "commonMistakes": "A common mistake is trying to solve conflict through more meetings without clarifying the decision. Meetings help only when the decision and decision-maker are clear.\n\nAnother mistake is using volume as priority. The loudest stakeholder is not automatically the most important stakeholder.\n\nA third mistake is pretending there is no tradeoff. Mature product work often means choosing between good things under constraints."
};
