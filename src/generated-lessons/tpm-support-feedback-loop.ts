import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "tpm-support-feedback-loop",
  "track": "TPM",
  "category": "Discovery & Feedback",
  "level": "Foundational",
  "question": "How would you turn support tickets and customer feedback into product decisions?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.\n\nThe beginner mistake is reacting to the latest loud complaint. One angry ticket may reveal a real issue, but it may also be an edge case. A thousand vague tickets may hide several different problems. The TPM needs a feedback loop that separates noise from evidence.\n\nThe mental model is:\n\n```txt\nTicket:\n\"I cannot send money.\"\n\nSignal:\nThe user got stuck.\n\nInsight:\nUsers do not understand pending verification.\n\nProduct decision:\nImprove status explanation, support visibility, and recovery path.\n```"
    },
    {
      "title": "Walkthrough",
      "body": "Imagine support receives many tickets saying:\n\n```txt\n\"My transfer is stuck.\"\n\"Why is this taking so long?\"\n\"Did my money disappear?\"\n\"Cancel this now.\"\n```\n\nA weak product response is: \"Add a tooltip saying transfers can take time.\"\n\nA stronger TPM asks:\n\n```txt\nWhat exact status are these users in?\nWhich corridors are affected?\nHow long have they waited?\nWhat did the UI say?\nCould support see the real status?\nDid the partner send delayed webhooks?\nDid users have any action they could take?\n```\n\nAfter tagging and analysis, the TPM might find three different issues:\n\n```txt\nPattern 1:\nUsers in \"processing\" status do not know what it means.\n\nPattern 2:\nPartner delays are concentrated in one corridor.\n\nPattern 3:\nSupport cannot see whether the payout is retrying or waiting for partner confirmation.\n```\n\nEach pattern needs a different solution."
    },
    {
      "title": "Make it practical",
      "body": "I would create a feedback loop with clear steps.\n\n```txt\nSupport-to-product loop\n\n1. Capture\nCollect tickets, chat logs, call notes, app feedback, sales notes, and support tags.\n\n2. Normalize\nGroup feedback by user job, product area, status, segment, and severity.\n\n3. Quantify\nCount frequency, affected revenue, affected customer segment, and repeat contacts.\n\n4. Qualify\nRead real examples so the team understands the user pain.\n\n5. Diagnose\nSeparate symptom from root cause.\n\n6. Decide\nCreate product fixes, operational fixes, documentation updates, or monitoring improvements.\n\n7. Close the loop\nTell support what changed and how to explain it.\n```\n\nA good product decision is not always a new feature. Sometimes the fix is better copy, a status page, clearer error codes, support tooling, partner escalation, or a policy change."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is counting tickets without reading them. Volume matters, but language and context reveal why users are confused.\n\nAnother mistake is letting support become a one-way inbox. Product should tell support what changed, what is coming, and what evidence is still needed.\n\nA third mistake is treating every request as a feature request. Many tickets are symptoms of unclear status, broken expectations, poor onboarding, or missing operational visibility."
    }
  ],
  "answer": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.",
  "reasoning": "I would create a feedback loop with clear steps.\n\n```txt\nSupport-to-product loop\n\n1. Capture\nCollect tickets, chat logs, call notes, app feedback, sales notes, and support tags.\n\n2. Normalize\nGroup feedback by user job, product area, status, segment, and severity.\n\n3. Quantify\nCount frequency, affected revenue, affected customer segment, and repeat contacts.\n\n4. Qualify\nRead real examples so the team understands the user pain.\n\n5. Diagnose\nSeparate symptom from root cause.\n\n6. Decide\nCreate product fixes, operational fixes, documentation updates, or monitoring improvements.\n\n7. Close the loop\nTell support what changed and how to explain it.\n```\n\nA good product decision is not always a new feature. Sometimes the fix is better copy, a status page, clearer error codes, support tooling, partner escalation, or a policy change.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is a ticket not automatically an insight?",
    "What is the difference between symptom and root cause?",
    "Why should feedback be grouped by product state or user job?",
    "How can support feedback improve internal tools?",
    "What does it mean to close the loop with support?"
  ],
  "interviewAnswer": "I would turn support feedback into product decisions by capturing signals, grouping them into patterns, quantifying impact, reading examples, diagnosing root cause, deciding the right type of fix, and closing the loop with support.\n\nA strong TPM answer shows that feedback is evidence, not instructions. The TPM must convert raw complaints into product understanding and better decisions.",
  "sourceLinks": [
    {
      "label": "Productboard: Customer insights",
      "url": "https://www.productboard.com/use-cases/customer-insights/"
    },
    {
      "label": "GOV.UK Service Manual: User needs",
      "url": "https://www.gov.uk/service-manual/user-centred-design/user-needs"
    }
  ],
  "beginnerExplanation": "Support tickets are not automatically product insight. They are raw signals. A TPM has to turn those signals into patterns, user needs, product problems, and decisions.\n\nThe beginner mistake is reacting to the latest loud complaint. One angry ticket may reveal a real issue, but it may also be an edge case. A thousand vague tickets may hide several different problems. The TPM needs a feedback loop that separates noise from evidence.\n\nThe mental model is:\n\n```txt\nTicket:\n\"I cannot send money.\"\n\nSignal:\nThe user got stuck.\n\nInsight:\nUsers do not understand pending verification.\n\nProduct decision:\nImprove status explanation, support visibility, and recovery path.\n```",
  "example": "Imagine support receives many tickets saying:\n\n```txt\n\"My transfer is stuck.\"\n\"Why is this taking so long?\"\n\"Did my money disappear?\"\n\"Cancel this now.\"\n```\n\nA weak product response is: \"Add a tooltip saying transfers can take time.\"\n\nA stronger TPM asks:\n\n```txt\nWhat exact status are these users in?\nWhich corridors are affected?\nHow long have they waited?\nWhat did the UI say?\nCould support see the real status?\nDid the partner send delayed webhooks?\nDid users have any action they could take?\n```\n\nAfter tagging and analysis, the TPM might find three different issues:\n\n```txt\nPattern 1:\nUsers in \"processing\" status do not know what it means.\n\nPattern 2:\nPartner delays are concentrated in one corridor.\n\nPattern 3:\nSupport cannot see whether the payout is retrying or waiting for partner confirmation.\n```\n\nEach pattern needs a different solution.",
  "commonMistakes": "A common mistake is counting tickets without reading them. Volume matters, but language and context reveal why users are confused.\n\nAnother mistake is letting support become a one-way inbox. Product should tell support what changed, what is coming, and what evidence is still needed.\n\nA third mistake is treating every request as a feature request. Many tickets are symptoms of unclear status, broken expectations, poor onboarding, or missing operational visibility."
};
