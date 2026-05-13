export type Theme = "light" | "dark";

export type Question = {
  id: string;
  track?: string;
  category: string;
  level: string;
  question: string;
  answer: string;
  reasoning: string;
  tests: string;
  followUps: string[];
};

export type AnswerDepth = {
  mentalModel: string;
  engineeringUse: string;
  interviewSignal: string;
};

export type ProgressMap = Record<string, true>;

export type StoredState = {
  revealed: ProgressMap;
  reviewed: ProgressMap;
  starred: ProgressMap;
  theme: Theme;
  hasThemePreference: boolean;
  storageAvailable: boolean;
};

export type ProgressUpdate = Partial<Record<"revealed" | "reviewed" | "starred", boolean>>;

export type SerializedProgress = {
  revealed: string[];
  reviewed: string[];
  starred: string[];
  theme: Theme;
};
