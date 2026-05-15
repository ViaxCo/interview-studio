import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const contentDir = join(root, "content", "lessons");
const outputFile = join(root, "src", "generatedQuestions.ts");
const summariesFile = join(root, "src", "questionSummaries.ts");
const searchIndexFile = join(root, "src", "questionSearchIndex.ts");
const lessonDetailsDir = join(root, "src", "generated-lessons");

function parseValue(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(source, file) {
  if (!source.startsWith("---\n")) throw new Error(`${file} is missing frontmatter`);
  const end = source.indexOf("\n---\n", 4);
  if (end < 0) throw new Error(`${file} has unterminated frontmatter`);

  const raw = source.slice(4, end).split("\n");
  const data = {};
  let currentList = null;
  let currentItem = null;

  for (const line of raw) {
    if (!line.trim()) continue;

    const listStart = line.match(/^([a-zA-Z0-9_]+):\s*$/);
    if (listStart) {
      currentList = listStart[1];
      data[currentList] = [];
      currentItem = null;
      continue;
    }

    const itemStart = line.match(/^\s*-\s+([a-zA-Z0-9_]+):\s*(.*)$/);
    if (itemStart && currentList) {
      currentItem = { [itemStart[1]]: parseValue(itemStart[2]) };
      data[currentList].push(currentItem);
      continue;
    }

    const itemProp = line.match(/^\s+([a-zA-Z0-9_]+):\s*(.*)$/);
    if (itemProp && currentItem) {
      currentItem[itemProp[1]] = parseValue(itemProp[2]);
      continue;
    }

    const prop = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (prop) {
      currentList = null;
      currentItem = null;
      data[prop[1]] = parseValue(prop[2]);
    }
  }

  return { data, body: source.slice(end + 5).trim() };
}

function parseSections(body) {
  const sections = [];
  const matches = [...body.matchAll(/^##\s+(.+)$/gm)];

  for (let index = 0; index < matches.length; index += 1) {
    const match = matches[index];
    const next = matches[index + 1];
    const title = match[1].trim();
    const raw = body.slice(match.index + match[0].length, next?.index ?? body.length).trim();

    sections.push({ title, body: raw });
  }

  return sections;
}

function bulletsFromSection(section) {
  if (!section) return [];
  return section.body
    .split("\n")
    .map((line) => line.match(/^\s*-\s+(.+)$/)?.[1]?.trim())
    .filter(Boolean);
}

function firstSection(sections, title) {
  return sections.find((section) => section.title.toLowerCase() === title.toLowerCase());
}

function buildQuestion(file) {
  const source = readFileSync(join(contentDir, file), "utf8");
  const { data, body } = parseFrontmatter(source, file);
  const sections = parseSections(body);
  const learn = firstSection(sections, "Learn it");
  const walkthrough = firstSection(sections, "Walkthrough");
  const practical = firstSection(sections, "Make it practical");
  const mistakes = firstSection(sections, "Common mistakes");
  const check = firstSection(sections, "Check yourself");
  const interview = firstSection(sections, "Interview version");

  return {
    id: data.id,
    track: data.track,
    category: data.category,
    level: data.level,
    question: data.question,
    lessonSections: sections.filter((section) => !["Check yourself", "Interview version"].includes(section.title)),
    answer: learn?.body.split(/\n{2,}/)[0] || data.question,
    reasoning: practical?.body || walkthrough?.body || "",
    tests: data.tests || "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
    followUps: bulletsFromSection(check),
    interviewAnswer: interview?.body || "",
    sourceLinks: data.sources || [],
    beginnerExplanation: learn?.body || "",
    example: walkthrough?.body || practical?.body || "",
    commonMistakes: mistakes?.body || ""
  };
}

const trackOrder = new Map([
  ["TPM", 0],
  ["Frontend", 1]
]);
const files = readdirSync(contentDir).filter((file) => file.endsWith(".md")).sort();
const questions = files
  .map(buildQuestion)
  .sort((left, right) => {
    const leftTrack = trackOrder.get(left.track) ?? trackOrder.size;
    const rightTrack = trackOrder.get(right.track) ?? trackOrder.size;
    return leftTrack - rightTrack || left.id.localeCompare(right.id);
  });
const content = `import type { Question } from "./questionTypes";

export const generatedQuestions: Question[] = ${JSON.stringify(questions, null, 2)};
`;
const summaries = questions.map((item) => ({
  id: item.id,
  track: item.track,
  category: item.category,
  level: item.level,
  question: item.question,
  answer: "",
  reasoning: "",
  tests: "",
  followUps: []
}));
const searchIndex = Object.fromEntries(
  questions.map((item) => [
    item.id,
    [
    item.question,
    item.track,
    item.category,
    item.level,
    item.beginnerExplanation,
    item.answer,
    item.interviewAnswer,
    item.example,
    item.reasoning,
    item.commonMistakes,
    item.tests,
    ...(item.sourceLinks || []).flatMap((source) => [source.label, source.url])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
  ])
);
const summariesContent = `import type { Question } from "./questionTypes";

export const questionSummaries: Question[] = ${JSON.stringify(summaries, null, 2)};
`;
const searchIndexContent = `export const questionSearchIndex: Record<string, string> = ${JSON.stringify(searchIndex, null, 2)};
`;

mkdirSync(dirname(outputFile), { recursive: true });
rmSync(lessonDetailsDir, { force: true, recursive: true });
mkdirSync(lessonDetailsDir, { recursive: true });

for (const question of questions) {
  const lessonContent = `import type { Question } from "../questionTypes";

export const lesson: Question = ${JSON.stringify(question, null, 2)};
`;
  writeFileSync(join(lessonDetailsDir, `${question.id}.ts`), lessonContent);
}

writeFileSync(outputFile, content);
writeFileSync(summariesFile, summariesContent);
writeFileSync(searchIndexFile, searchIndexContent);
