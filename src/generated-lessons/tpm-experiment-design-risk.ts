import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-experiment-design-risk",
  "track": "TPM",
  "category": "Metrics & Experimentation",
  "level": "Intermediate",
  "question": "How would you design an experiment when the product area has compliance or user-risk constraints?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.\n\nThe beginner mistake is thinking \"experiment\" always means \"ship two versions and see which wins.\" In regulated, financial, health, safety, privacy, or trust-sensitive products, some experiments can harm users, create unfair treatment, or violate policy.\n\nThe TPM still needs learning, but the learning method must match the risk.\n\nThe mental model is:\n\n```txt\nLow-risk change:\nUse normal A/B test if measurement is clean.\n\nMedium-risk change:\nUse limited rollout, guardrails, and monitoring.\n\nHigh-risk change:\nUse research, simulation, backtesting, expert review, or staged release before live exposure.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine a remittance app wants to reduce identity-verification drop-off.\n\nThe growth idea is: \"Ask fewer questions upfront.\"\n\nThat might improve conversion. But it may also allow risky users to move further into the product before required checks happen.\n\nA weak experiment plan says:\n\n```txt\nVariant A: current onboarding\nVariant B: shorter onboarding\nPrimary metric: signup completion\nShip to 50 percent of users\n```\n\nThat ignores compliance and risk.\n\nA stronger experiment plan says:\n\n```txt\nHypothesis:\nMoving low-risk profile questions later will improve signup completion without increasing risky account progression.\n\nEligible users:\nOnly users in low-risk corridors and low transaction limits.\n\nPrimary metric:\nVerified signup completion.\n\nGuardrail metrics:\n- Manual review rate\n- Suspicious activity flags\n- Failed verification rate\n- Support contacts about missing information\n- Time to compliance decision\n\nRollout:\n5 percent for 48 hours, then 20 percent if guardrails stay healthy.\n\nStop condition:\nPause if manual review rate or suspicious flags exceed threshold.\n```\n\nNow the experiment has a learning goal and a safety model."
    },
    {
      "title": "Make it practical",
      "body": "If live experimentation is too risky, I would choose another learning method.\n\n```txt\nAlternatives to a risky A/B test\n\nUser research:\nWatch users complete the flow and identify confusion.\n\nPrototype test:\nTest comprehension before changing production behavior.\n\nBacktesting:\nRun proposed risk rules against historical data.\n\nShadow mode:\nCompute the new decision in the background without affecting users.\n\nLimited beta:\nExpose a small, low-risk group with active monitoring.\n\nPolicy review:\nConfirm the experiment does not violate compliance requirements.\n```\n\nThe TPM should also decide what \"success\" means before the experiment starts. If signup completion improves but manual review doubles, that may not be a win."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is optimizing the primary metric while ignoring harm. More signups are not useful if the product creates more fraud, support burden, or compliance exposure.\n\nAnother mistake is using an experiment where research would answer the question faster and more safely.\n\nA third mistake is failing to define stop conditions. If the team has no pause rule, it may argue while users are already being affected."
    }
  ],
  "answer": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.",
  "reasoning": "If live experimentation is too risky, I would choose another learning method.\n\n```txt\nAlternatives to a risky A/B test\n\nUser research:\nWatch users complete the flow and identify confusion.\n\nPrototype test:\nTest comprehension before changing production behavior.\n\nBacktesting:\nRun proposed risk rules against historical data.\n\nShadow mode:\nCompute the new decision in the background without affecting users.\n\nLimited beta:\nExpose a small, low-risk group with active monitoring.\n\nPolicy review:\nConfirm the experiment does not violate compliance requirements.\n```\n\nThe TPM should also decide what \"success\" means before the experiment starts. If signup completion improves but manual review doubles, that may not be a win.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is an A/B test not always the right experiment?",
    "What is a guardrail metric?",
    "Why might signup completion be a misleading success metric?",
    "What is shadow mode?",
    "When would user research be better than a live experiment?"
  ],
  "interviewAnswer": "I would design the experiment by defining the hypothesis, eligible population, primary metric, guardrail metrics, rollout size, stop conditions, monitoring plan, and compliance review. If live exposure is too risky, I would use research, prototype testing, backtesting, shadow mode, or a small controlled beta.\n\nA strong TPM answer shows that experimentation is about learning responsibly, not just moving a metric.",
  "sourceLinks": [
    {
      "label": "Microsoft Research: Trustworthy experimentation",
      "url": "https://www.microsoft.com/en-us/research/group/experimentation-platform-exp/articles/patterns-of-trustworthy-experimentation-during-experiment-stage/"
    },
    {
      "label": "GOV.UK Service Manual: Plan user research",
      "url": "https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service"
    }
  ],
  "beginnerExplanation": "An experiment is a way to learn whether a change improves an outcome. In many product areas, you can run an A/B test. But not every product decision should be tested by casually exposing users to risk.\n\nThe beginner mistake is thinking \"experiment\" always means \"ship two versions and see which wins.\" In regulated, financial, health, safety, privacy, or trust-sensitive products, some experiments can harm users, create unfair treatment, or violate policy.\n\nThe TPM still needs learning, but the learning method must match the risk.\n\nThe mental model is:\n\n```txt\nLow-risk change:\nUse normal A/B test if measurement is clean.\n\nMedium-risk change:\nUse limited rollout, guardrails, and monitoring.\n\nHigh-risk change:\nUse research, simulation, backtesting, expert review, or staged release before live exposure.\n```",
  "example": "Imagine a remittance app wants to reduce identity-verification drop-off.\n\nThe growth idea is: \"Ask fewer questions upfront.\"\n\nThat might improve conversion. But it may also allow risky users to move further into the product before required checks happen.\n\nA weak experiment plan says:\n\n```txt\nVariant A: current onboarding\nVariant B: shorter onboarding\nPrimary metric: signup completion\nShip to 50 percent of users\n```\n\nThat ignores compliance and risk.\n\nA stronger experiment plan says:\n\n```txt\nHypothesis:\nMoving low-risk profile questions later will improve signup completion without increasing risky account progression.\n\nEligible users:\nOnly users in low-risk corridors and low transaction limits.\n\nPrimary metric:\nVerified signup completion.\n\nGuardrail metrics:\n- Manual review rate\n- Suspicious activity flags\n- Failed verification rate\n- Support contacts about missing information\n- Time to compliance decision\n\nRollout:\n5 percent for 48 hours, then 20 percent if guardrails stay healthy.\n\nStop condition:\nPause if manual review rate or suspicious flags exceed threshold.\n```\n\nNow the experiment has a learning goal and a safety model.",
  "commonMistakes": "A common mistake is optimizing the primary metric while ignoring harm. More signups are not useful if the product creates more fraud, support burden, or compliance exposure.\n\nAnother mistake is using an experiment where research would answer the question faster and more safely.\n\nA third mistake is failing to define stop conditions. If the team has no pause rule, it may argue while users are already being affected."
};
