import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel";

type ProgressKey = "revealed" | "reviewed" | "starred";

async function requireUserId(ctx: QueryCtx | MutationCtx): Promise<Id<"users">> {
  const userId = await getAuthUserId(ctx);
  if (userId === null) throw new Error("Sign in before saving account progress.");
  return userId;
}

async function getQuestionProgress(ctx: QueryCtx | MutationCtx, userId: Id<"users">, questionId: string) {
  return await ctx.db
    .query("questionProgress")
    .withIndex("by_user_question", (q) => q.eq("userId", userId).eq("questionId", questionId))
    .unique();
}

function idsFromRows(rows: Doc<"questionProgress">[], key: ProgressKey) {
  return rows.filter((row) => row[key]).map((row) => row.questionId);
}

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;

    const rows = await ctx.db
      .query("questionProgress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const preferences = await ctx.db
      .query("userPreferences")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();

    return {
      revealed: idsFromRows(rows, "revealed"),
      reviewed: idsFromRows(rows, "reviewed"),
      starred: idsFromRows(rows, "starred"),
      theme: preferences?.theme || "light",
      updatedAt: Math.max(
        preferences?.updatedAt || 0,
        ...rows.map((row) => row.updatedAt)
      ),
      userId
    };
  }
});

export const setQuestion = mutation({
  args: {
    questionId: v.string(),
    revealed: v.optional(v.boolean()),
    reviewed: v.optional(v.boolean()),
    starred: v.optional(v.boolean())
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const existing = await getQuestionProgress(ctx, userId, args.questionId);
    const progress = {
      revealed: args.revealed ?? existing?.revealed ?? false,
      reviewed: args.reviewed ?? existing?.reviewed ?? false,
      starred: args.starred ?? existing?.starred ?? false,
      updatedAt: Date.now(),
      userId,
      questionId: args.questionId
    };

    if (existing) {
      await ctx.db.patch(existing._id, progress);
      return existing._id;
    }

    return await ctx.db.insert("questionProgress", progress);
  }
});

export const setTheme = mutation({
  args: {
    theme: v.union(v.literal("light"), v.literal("dark"))
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const existing = await ctx.db
      .query("userPreferences")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique();
    const preferences = { theme: args.theme, updatedAt: Date.now(), userId };

    if (existing) {
      await ctx.db.patch(existing._id, preferences);
      return existing._id;
    }

    return await ctx.db.insert("userPreferences", preferences);
  }
});

export const importProgress = mutation({
  args: {
    revealed: v.array(v.string()),
    reviewed: v.array(v.string()),
    starred: v.array(v.string())
  },
  handler: async (ctx, args) => {
    const userId = await requireUserId(ctx);
    const questionIds = new Set([...args.revealed, ...args.reviewed, ...args.starred]);

    for (const questionId of questionIds) {
      const existing = await getQuestionProgress(ctx, userId, questionId);
      const progress = {
        revealed: Boolean(existing?.revealed || args.revealed.includes(questionId)),
        reviewed: Boolean(existing?.reviewed || args.reviewed.includes(questionId)),
        starred: Boolean(existing?.starred || args.starred.includes(questionId)),
        updatedAt: Date.now(),
        userId,
        questionId
      };

      if (existing) {
        await ctx.db.patch(existing._id, progress);
      } else {
        await ctx.db.insert("questionProgress", progress);
      }
    }
  }
});

export const reset = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUserId(ctx);
    const rows = await ctx.db
      .query("questionProgress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    for (const row of rows) {
      await ctx.db.delete(row._id);
    }
  }
});
