import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-fraud-compliance-tradeoffs",
  "track": "TPM",
  "category": "Risk & Compliance",
  "level": "Intermediate",
  "question": "How would you balance fraud prevention, compliance, and user experience?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Fraud prevention, compliance, and user experience often pull against each other.\n\nFraud teams want to block bad actors. Compliance teams want required checks and audit evidence. Product teams want legitimate users to complete their jobs without unnecessary friction. The hard part is that all three goals are valid.\n\nThe beginner mistake is treating this as a simple slider:\n\n```txt\nMore checks = safer.\nFewer checks = better UX.\n```\n\nReality is more nuanced. Bad checks can block good users and still miss risky ones. Good controls use risk signals to apply the right amount of friction to the right users at the right time.\n\nThe mental model is:\n\n```txt\nDo not ask every user for everything.\nDo not let every user do everything.\nUse risk to decide what is allowed, what is reviewed, and what needs more proof.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a remittance app sees rising fraud on new accounts.\n\nA blunt solution is:\n\n```txt\nRequire every new user to upload ID, proof of address, selfie, source of funds, and manual review before sending any amount.\n```\n\nThat may reduce some fraud, but it will also hurt many legitimate users. It may overwhelm operations and increase abandonment.\n\nA better solution is risk-based:\n\n```txt\nLow-risk user:\n- Can create account.\n- Can verify basic identity.\n- Gets low initial limits.\n\nMedium-risk user:\n- Needs document verification before sending.\n- May have lower transaction limits.\n- May trigger extra review for unusual behavior.\n\nHigh-risk user:\n- Cannot send until manual review.\n- May need extra documents.\n- May be blocked if risk is unacceptable.\n```\n\nThe product goal is not \"zero friction.\" The goal is appropriate friction."
    },
    {
      "title": "Make it practical",
      "body": "I would define the decision system with compliance, fraud, operations, and engineering.\n\n```txt\nRisk decision table\n\nSignal:\nNew device + high amount + risky corridor\n\nDecision:\nStep-up verification before payment submission\n\nUser experience:\nExplain that extra verification is needed to protect the account and transfer.\n\nOperations:\nRoute to manual review if automatic checks fail.\n\nMetric:\nFraud rate, false-positive rate, completion rate, review time, support contacts.\n```\n\nThe TPM needs to track both protection and harm.\n\n```txt\nProtection metrics:\n- Fraud loss\n- Dispute rate\n- Suspicious activity flags\n- Confirmed bad accounts blocked\n\nUser harm metrics:\n- False positives\n- Legitimate users blocked\n- Verification drop-off\n- Manual review wait time\n- Support complaints\n```\n\nIf fraud decreases but false positives explode, the product may be safer on paper but worse in practice."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing only for conversion. In regulated or fraud-heavy products, unsafe growth can create major losses.\n\nAnother mistake is optimizing only for blocking. Blocking many good users is also product harm.\n\nA third mistake is hiding decisions from users. You may not be able to reveal fraud logic, but users still need clear, safe explanations and next steps."
    }
  ],
  "answer": "Fraud prevention, compliance, and user experience often pull against each other.",
  "reasoning": "I would define the decision system with compliance, fraud, operations, and engineering.\n\n```txt\nRisk decision table\n\nSignal:\nNew device + high amount + risky corridor\n\nDecision:\nStep-up verification before payment submission\n\nUser experience:\nExplain that extra verification is needed to protect the account and transfer.\n\nOperations:\nRoute to manual review if automatic checks fail.\n\nMetric:\nFraud rate, false-positive rate, completion rate, review time, support contacts.\n```\n\nThe TPM needs to track both protection and harm.\n\n```txt\nProtection metrics:\n- Fraud loss\n- Dispute rate\n- Suspicious activity flags\n- Confirmed bad accounts blocked\n\nUser harm metrics:\n- False positives\n- Legitimate users blocked\n- Verification drop-off\n- Manual review wait time\n- Support complaints\n```\n\nIf fraud decreases but false positives explode, the product may be safer on paper but worse in practice.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is \"more checks\" not always the best answer?",
    "What is a false positive in fraud prevention?",
    "Why should risk controls be tiered?",
    "What metrics show whether controls are too strict?",
    "How can product copy help without exposing fraud logic?"
  ],
  "interviewAnswer": "I would balance fraud, compliance, and UX by using a risk-based model. Low-risk users get lower friction, higher-risk users get step-up checks or review, and unacceptable-risk users are blocked. I would measure fraud loss, dispute rate, false positives, conversion, review time, and support contacts.\n\nA strong TPM answer shows that safety and UX are not enemies. The job is to apply the right control at the right moment and measure both protection and user harm.",
  "sourceLinks": [
    {
      "label": "Stripe Docs: Fraud prevention rules",
      "url": "https://docs.stripe.com/radar/rules"
    },
    {
      "label": "Federal Reserve: Risk-based customer due diligence",
      "url": "https://www.federalreserve.gov/supervisionreg/srletters/SR2205.htm"
    }
  ],
  "beginnerExplanation": "Fraud prevention, compliance, and user experience often pull against each other.\n\nFraud teams want to block bad actors. Compliance teams want required checks and audit evidence. Product teams want legitimate users to complete their jobs without unnecessary friction. The hard part is that all three goals are valid.\n\nThe beginner mistake is treating this as a simple slider:\n\n```txt\nMore checks = safer.\nFewer checks = better UX.\n```\n\nReality is more nuanced. Bad checks can block good users and still miss risky ones. Good controls use risk signals to apply the right amount of friction to the right users at the right time.\n\nThe mental model is:\n\n```txt\nDo not ask every user for everything.\nDo not let every user do everything.\nUse risk to decide what is allowed, what is reviewed, and what needs more proof.\n```",
  "example": "Imagine a remittance app sees rising fraud on new accounts.\n\nA blunt solution is:\n\n```txt\nRequire every new user to upload ID, proof of address, selfie, source of funds, and manual review before sending any amount.\n```\n\nThat may reduce some fraud, but it will also hurt many legitimate users. It may overwhelm operations and increase abandonment.\n\nA better solution is risk-based:\n\n```txt\nLow-risk user:\n- Can create account.\n- Can verify basic identity.\n- Gets low initial limits.\n\nMedium-risk user:\n- Needs document verification before sending.\n- May have lower transaction limits.\n- May trigger extra review for unusual behavior.\n\nHigh-risk user:\n- Cannot send until manual review.\n- May need extra documents.\n- May be blocked if risk is unacceptable.\n```\n\nThe product goal is not \"zero friction.\" The goal is appropriate friction.",
  "commonMistakes": "A common mistake is optimizing only for conversion. In regulated or fraud-heavy products, unsafe growth can create major losses.\n\nAnother mistake is optimizing only for blocking. Blocking many good users is also product harm.\n\nA third mistake is hiding decisions from users. You may not be able to reveal fraud logic, but users still need clear, safe explanations and next steps."
};
