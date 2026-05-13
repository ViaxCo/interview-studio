import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  questionProgress: defineTable({
    userId: v.id("users"),
    questionId: v.string(),
    revealed: v.boolean(),
    reviewed: v.boolean(),
    starred: v.boolean(),
    updatedAt: v.number()
  })
    .index("by_user", ["userId"])
    .index("by_user_question", ["userId", "questionId"]),
  userPreferences: defineTable({
    userId: v.id("users"),
    theme: v.union(v.literal("light"), v.literal("dark")),
    updatedAt: v.number()
  }).index("by_user", ["userId"])
});
