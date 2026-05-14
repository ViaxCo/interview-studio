import type { Question } from "./questionTypes";
import { questionSummaries } from "./questionSummaries";

export const questions: Question[] = questionSummaries;

export async function loadQuestions() {
  const { generatedQuestions } = await import("./generatedQuestions");
  return generatedQuestions;
}

export function questionTrack(question: Question) {
  return question.track || "Frontend";
}

export const tracks = [...new Set(questions.map(questionTrack))];
export const categories = [...new Set(questions.map((question) => question.category))];
export const levels = [...new Set(questions.map((question) => question.level))];
