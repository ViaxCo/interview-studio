import type { AnswerDepth } from "./questionTypes";
import { expandedQuestions, questionAngles, sentenceCase, topicSpecs } from "./questionExpansion";

export const expandedAnswerDepth: Record<string, AnswerDepth> = Object.fromEntries(
  topicSpecs.flatMap((spec, specIndex) =>
    questionAngles.map((angle, angleIndex) => {
      const [, , concept, practice, trap, example] = spec;
      const question = expandedQuestions[specIndex * questionAngles.length + angleIndex];
      const byKind: Record<typeof angle.kind, AnswerDepth> = {
        concept: {
          mentalModel: `${sentenceCase(concept)} is not trivia. It is a model for deciding how the interface should behave when content, state, users, or runtime conditions change.`,
          engineeringUse: `Use it in ${example} by treating this as an implementation rule: ${practice}. That rule should make the happy path clear and the failure path recoverable.`,
          interviewSignal: `A strong answer connects ${concept} to a concrete product bug, then explains how the team would avoid ${trap}.`
        },
        application: {
          mentalModel: `Application questions test whether the candidate can move from definition to product behavior. ${sentenceCase(concept)} should change a decision, not decorate an answer.`,
          engineeringUse: `In ${example}, start with the user workflow, then design the state, accessibility, performance, and error behavior needed to support ${practice}.`,
          interviewSignal: `A strong answer names what to build first, what to defer, and how to keep this failure mode from becoming a hidden release risk: ${trap}.`
        },
        trap: {
          mentalModel: `Most frontend failures come from a mistaken assumption that works in one demo. With ${concept}, the trap is usually ${trap}.`,
          engineeringUse: `Prevent the mistake by writing the safer rule into component contracts, tests, review checklists, or design-system guidance for ${example}.`,
          interviewSignal: `A strong answer does not just name the trap. It explains why the trap is tempting and how to make the correct path easier for the next engineer.`
        },
        verification: {
          mentalModel: `Testing ${concept} means proving the browser-visible behavior and the important boundary conditions, not simply exercising implementation details.`,
          engineeringUse: `Use user-level tests for the main workflow in ${example}, then add focused checks for timing, data, permissions, or performance around this rule: ${practice}.`,
          interviewSignal: `A strong answer chooses evidence deliberately: a test for repeatability, browser tooling for diagnosis, and production signals for confidence after release.`
        }
      };

      return [question.id, byKind[angle.kind]];
    })
  )
);
