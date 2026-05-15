import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-onboarding-activation-metrics",
  "track": "TPM",
  "category": "Metrics",
  "level": "Foundational",
  "question": "How would you measure onboarding and activation for a product?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.\n\nThe beginner mistake is treating signup as activation. A signup means someone entered the door. Activation means they did something that makes future usage more likely.\n\nFor a remittance app, activation might be completing the first successful transfer. For a developer API, activation might be making the first successful sandbox request and receiving a webhook. For a TPM, the work is to define the behavior that proves value, then measure the path to that behavior."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a money transfer product.\n\nThe onboarding funnel might be:\n\n```txt\n1. Account created.\n2. Profile completed.\n3. Identity submitted.\n4. Identity approved.\n5. Recipient added.\n6. Quote viewed.\n7. Transfer started.\n8. Transfer funded.\n9. Transfer completed.\n```\n\nThe activation metric may be \"first successful transfer completed within seven days of signup.\" That is stronger than \"user clicked send\" because it captures the real product promise.\n\nBut activation can have guardrails. If users activate faster but failed transfers or fraud alerts rise, the product may be creating risk."
    },
    {
      "title": "Make it practical",
      "body": "I would define metrics in layers.\n\n```txt\nPrimary activation metric\n- First successful transfer within seven days.\n\nFunnel metrics\n- Signup completion.\n- Profile completion.\n- Verification approval.\n- Recipient creation.\n- Quote view.\n- Transfer start.\n- Transfer completion.\n\nQuality metrics\n- Verification retry rate.\n- Transfer failure rate.\n- Time stuck in pending.\n- Support contacts during onboarding.\n\nRisk guardrails\n- Fraud alerts.\n- Compliance review rate.\n- Mistaken recipient reports.\n- Chargebacks or reversals.\n```\n\nThen I would segment the metrics. New users from one country may fail identity checks more often. Mobile users may abandon document capture. Users with unsupported payout methods may stop at recipient setup. Segmentation turns \"activation is low\" into a fixable product problem.\n\nI would also define event instrumentation before launch. If the app does not log each step consistently, the team will not know where users are dropping."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is choosing an activation metric because it is easy to measure. The metric should represent value, not convenience.\n\nAnother mistake is ignoring time. Activation in one day and activation in sixty days mean different things.\n\nA third mistake is optimizing conversion while damaging trust or risk. In regulated products, guardrails matter."
    }
  ],
  "answer": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.",
  "reasoning": "I would define metrics in layers.\n\n```txt\nPrimary activation metric\n- First successful transfer within seven days.\n\nFunnel metrics\n- Signup completion.\n- Profile completion.\n- Verification approval.\n- Recipient creation.\n- Quote view.\n- Transfer start.\n- Transfer completion.\n\nQuality metrics\n- Verification retry rate.\n- Transfer failure rate.\n- Time stuck in pending.\n- Support contacts during onboarding.\n\nRisk guardrails\n- Fraud alerts.\n- Compliance review rate.\n- Mistaken recipient reports.\n- Chargebacks or reversals.\n```\n\nThen I would segment the metrics. New users from one country may fail identity checks more often. Mobile users may abandon document capture. Users with unsupported payout methods may stop at recipient setup. Segmentation turns \"activation is low\" into a fixable product problem.\n\nI would also define event instrumentation before launch. If the app does not log each step consistently, the team will not know where users are dropping.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "What is the difference between signup and activation?",
    "Why should activation represent meaningful value?",
    "What funnel steps might matter in a remittance app?",
    "Why do guardrail metrics matter?",
    "How can segmentation make onboarding problems easier to fix?"
  ],
  "interviewAnswer": "I would define activation as the first behavior that proves the user experienced meaningful value, then measure the onboarding funnel leading to that behavior. For a remittance app, that might be first successful transfer within seven days.\n\nA strong answer includes funnel metrics, quality metrics, risk guardrails, segmentation, and instrumentation. It avoids treating signup or clicks as proof of activation.",
  "sourceLinks": [
    {
      "label": "Amplitude: Activation metric",
      "url": "https://amplitude.com/blog/activation-metric"
    },
    {
      "label": "Atlassian Team Playbook: Goals, signals, measures",
      "url": "https://www.atlassian.com/team-playbook/plays/goals-signals-measures"
    }
  ],
  "beginnerExplanation": "Onboarding is the path that helps a new user become ready to use the product. Activation is the moment or behavior that shows the user has reached meaningful value.\n\nThe beginner mistake is treating signup as activation. A signup means someone entered the door. Activation means they did something that makes future usage more likely.\n\nFor a remittance app, activation might be completing the first successful transfer. For a developer API, activation might be making the first successful sandbox request and receiving a webhook. For a TPM, the work is to define the behavior that proves value, then measure the path to that behavior.",
  "example": "Imagine a money transfer product.\n\nThe onboarding funnel might be:\n\n```txt\n1. Account created.\n2. Profile completed.\n3. Identity submitted.\n4. Identity approved.\n5. Recipient added.\n6. Quote viewed.\n7. Transfer started.\n8. Transfer funded.\n9. Transfer completed.\n```\n\nThe activation metric may be \"first successful transfer completed within seven days of signup.\" That is stronger than \"user clicked send\" because it captures the real product promise.\n\nBut activation can have guardrails. If users activate faster but failed transfers or fraud alerts rise, the product may be creating risk.",
  "commonMistakes": "A common mistake is choosing an activation metric because it is easy to measure. The metric should represent value, not convenience.\n\nAnother mistake is ignoring time. Activation in one day and activation in sixty days mean different things.\n\nA third mistake is optimizing conversion while damaging trust or risk. In regulated products, guardrails matter."
};
