import type { Question } from "../questionTypes";

export const lesson: Question = {
  "id": "fe-data-fetching-cache-invalidation",
  "track": "Frontend",
  "category": "React",
  "level": "Intermediate",
  "question": "How should frontend apps handle data fetching and cache invalidation?",
  "lessonSections": [
    {
      "title": "Learn it",
      "body": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.\n\nThe beginner mistake is thinking the problem ends after `fetch()` returns. Real apps need loading states, error states, retries, stale data, background refresh, mutations, and consistency after the user changes something.\n\nServer data is different from local UI state. A dropdown open state belongs to the browser session. A list of invoices belongs to the server. The frontend can cache it, but the server is the real source of truth."
    },
    {
      "title": "Walkthrough",
      "body": "Imagine an issues page.\n\n```jsx\nconst queryKey = [\"issues\", { status, owner }];\n```\n\nThat key means: \"the issues list for this status and owner.\" If the user changes the filter, the key changes and the app needs a different data set.\n\nNow imagine the user closes an issue. The old list may be wrong because one item changed status. Cache invalidation tells the app: \"the issues query may be stale, refetch it.\"\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: closeIssue,\n  onSuccess: () => {\n    queryClient.invalidateQueries({ queryKey: [\"issues\"] });\n  },\n});\n```\n\nThe key idea is that fetching is not just making requests. It is managing the relationship between UI state, server state, and time."
    },
    {
      "title": "Make it practical",
      "body": "A good data-fetching plan answers:\n\n1. What is the query key?\n2. What loading UI appears?\n3. What error UI appears?\n4. When is cached data considered stale?\n5. What mutations change this data?\n6. Which queries should be invalidated after mutation?\n7. Should the UI update optimistically?\n8. How does pagination or filtering affect the cache?\n\nHere is a simple optimistic update shape:\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: updateTodo,\n  onMutate: async (nextTodo) => {\n    await queryClient.cancelQueries({ queryKey: [\"todos\"] });\n    const previousTodos = queryClient.getQueryData([\"todos\"]);\n\n    queryClient.setQueryData([\"todos\"], (todos) =>\n      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)\n    );\n\n    return { previousTodos };\n  },\n  onError: (_error, _nextTodo, context) => {\n    queryClient.setQueryData([\"todos\"], context.previousTodos);\n  },\n  onSettled: () => {\n    queryClient.invalidateQueries({ queryKey: [\"todos\"] });\n  },\n});\n```\n\nThis shows the tradeoff. Optimistic updates feel fast, but the app must recover if the server rejects the change."
    },
    {
      "title": "Common mistakes",
      "body": "A common mistake is using one generic key for data that actually depends on filters or user ID. That mixes unrelated data.\n\nAnother mistake is refetching everything after every mutation. That works at small scale but becomes slow and noisy.\n\nA third mistake is forgetting error and stale states. Users need to know whether data is loading, failed, refreshing, or possibly outdated."
    }
  ],
  "answer": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.",
  "reasoning": "A good data-fetching plan answers:\n\n1. What is the query key?\n2. What loading UI appears?\n3. What error UI appears?\n4. When is cached data considered stale?\n5. What mutations change this data?\n6. Which queries should be invalidated after mutation?\n7. Should the UI update optimistically?\n8. How does pagination or filtering affect the cache?\n\nHere is a simple optimistic update shape:\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: updateTodo,\n  onMutate: async (nextTodo) => {\n    await queryClient.cancelQueries({ queryKey: [\"todos\"] });\n    const previousTodos = queryClient.getQueryData([\"todos\"]);\n\n    queryClient.setQueryData([\"todos\"], (todos) =>\n      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)\n    );\n\n    return { previousTodos };\n  },\n  onError: (_error, _nextTodo, context) => {\n    queryClient.setQueryData([\"todos\"], context.previousTodos);\n  },\n  onSettled: () => {\n    queryClient.invalidateQueries({ queryKey: [\"todos\"] });\n  },\n});\n```\n\nThis shows the tradeoff. Optimistic updates feel fast, but the app must recover if the server rejects the change.",
  "tests": "Use the prompts to check whether the idea is clear enough to explain without memorizing.",
  "followUps": [
    "Why is server data different from local UI state?",
    "What is a query key?",
    "What does invalidation mean?",
    "When might optimistic updates be useful?",
    "What can go wrong if cache keys are too vague?"
  ],
  "interviewAnswer": "Frontend data fetching should treat server data as cached, asynchronous state. I would define query keys, loading and error states, stale timing, mutation behavior, invalidation rules, and optimistic update recovery.\n\nA strong answer shows that the hard part is not calling `fetch`. The hard part is keeping the UI honest when data changes, requests fail, filters change, or cached data becomes stale.",
  "sourceLinks": [
    {
      "label": "TanStack Query: Query invalidation",
      "url": "https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation"
    },
    {
      "label": "React: Fetching data with Effects",
      "url": "https://react.dev/reference/react/useEffect#fetching-data-with-effects"
    }
  ],
  "beginnerExplanation": "Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.\n\nThe beginner mistake is thinking the problem ends after `fetch()` returns. Real apps need loading states, error states, retries, stale data, background refresh, mutations, and consistency after the user changes something.\n\nServer data is different from local UI state. A dropdown open state belongs to the browser session. A list of invoices belongs to the server. The frontend can cache it, but the server is the real source of truth.",
  "example": "Imagine an issues page.\n\n```jsx\nconst queryKey = [\"issues\", { status, owner }];\n```\n\nThat key means: \"the issues list for this status and owner.\" If the user changes the filter, the key changes and the app needs a different data set.\n\nNow imagine the user closes an issue. The old list may be wrong because one item changed status. Cache invalidation tells the app: \"the issues query may be stale, refetch it.\"\n\n```jsx\nconst mutation = useMutation({\n  mutationFn: closeIssue,\n  onSuccess: () => {\n    queryClient.invalidateQueries({ queryKey: [\"issues\"] });\n  },\n});\n```\n\nThe key idea is that fetching is not just making requests. It is managing the relationship between UI state, server state, and time.",
  "commonMistakes": "A common mistake is using one generic key for data that actually depends on filters or user ID. That mixes unrelated data.\n\nAnother mistake is refetching everything after every mutation. That works at small scale but becomes slow and noisy.\n\nA third mistake is forgetting error and stale states. Users need to know whether data is loading, failed, refreshing, or possibly outdated."
};
