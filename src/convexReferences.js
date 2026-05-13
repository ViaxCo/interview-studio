import { makeFunctionReference } from "convex/server";

export const convexApi = {
  progress: {
    get: makeFunctionReference("progress:get"),
    importProgress: makeFunctionReference("progress:importProgress"),
    reset: makeFunctionReference("progress:reset"),
    setQuestion: makeFunctionReference("progress:setQuestion"),
    setTheme: makeFunctionReference("progress:setTheme")
  }
};
