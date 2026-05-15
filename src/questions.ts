import type { Question } from "./questionTypes";
import { questionSummaries } from "./questionSummaries";

export const questions: Question[] = questionSummaries;
const lessonModules = import.meta.glob<{ lesson: Question }>("./generated-lessons/*.ts");
const questionOrder = new Map(questions.map((question, index) => [question.id, index]));

export async function loadQuestionSearchIndex() {
  const { questionSearchIndex } = await import("./questionSearchIndex");
  return questionSearchIndex;
}

export async function loadQuestions() {
  const loadedQuestions = await Promise.all(Object.values(lessonModules).map((load) => load().then((module) => module.lesson)));
  return loadedQuestions.sort((left, right) => (questionOrder.get(left.id) || 0) - (questionOrder.get(right.id) || 0));
}

export async function loadQuestion(questionId: string) {
  const load = lessonModules[`./generated-lessons/${questionId}.ts`];
  if (!load) throw new Error(`Unknown question: ${questionId}`);
  const { lesson } = await load();
  return lesson;
}

export function questionTrack(question: Question) {
  return question.track || "Frontend";
}

export const tracks = [...new Set(questions.map(questionTrack))];
export const categories = [...new Set(questions.map((question) => question.category))];
export const levels = [...new Set(questions.map((question) => question.level))];
