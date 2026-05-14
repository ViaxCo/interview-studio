---
id: fe-data-fetching-cache-invalidation
track: Frontend
category: React
level: Intermediate
question: How should frontend apps handle data fetching and cache invalidation?
sources:
  - label: TanStack Query: Query invalidation
    url: https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation
  - label: React: Fetching data with Effects
    url: https://react.dev/reference/react/useEffect#fetching-data-with-effects
---

## Learn it

Data fetching is how the UI gets server data. Cache invalidation is how the UI decides that cached data may be stale and should be refreshed.

The beginner mistake is thinking the problem ends after `fetch()` returns. Real apps need loading states, error states, retries, stale data, background refresh, mutations, and consistency after the user changes something.

Server data is different from local UI state. A dropdown open state belongs to the browser session. A list of invoices belongs to the server. The frontend can cache it, but the server is the real source of truth.

## Walkthrough

Imagine an issues page.

```jsx
const queryKey = ["issues", { status, owner }];
```

That key means: "the issues list for this status and owner." If the user changes the filter, the key changes and the app needs a different data set.

Now imagine the user closes an issue. The old list may be wrong because one item changed status. Cache invalidation tells the app: "the issues query may be stale, refetch it."

```jsx
const mutation = useMutation({
  mutationFn: closeIssue,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["issues"] });
  },
});
```

The key idea is that fetching is not just making requests. It is managing the relationship between UI state, server state, and time.

## Make it practical

A good data-fetching plan answers:

1. What is the query key?
2. What loading UI appears?
3. What error UI appears?
4. When is cached data considered stale?
5. What mutations change this data?
6. Which queries should be invalidated after mutation?
7. Should the UI update optimistically?
8. How does pagination or filtering affect the cache?

Here is a simple optimistic update shape:

```jsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onMutate: async (nextTodo) => {
    await queryClient.cancelQueries({ queryKey: ["todos"] });
    const previousTodos = queryClient.getQueryData(["todos"]);

    queryClient.setQueryData(["todos"], (todos) =>
      todos.map((todo) => todo.id === nextTodo.id ? nextTodo : todo)
    );

    return { previousTodos };
  },
  onError: (_error, _nextTodo, context) => {
    queryClient.setQueryData(["todos"], context.previousTodos);
  },
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
```

This shows the tradeoff. Optimistic updates feel fast, but the app must recover if the server rejects the change.

## Common mistakes

A common mistake is using one generic key for data that actually depends on filters or user ID. That mixes unrelated data.

Another mistake is refetching everything after every mutation. That works at small scale but becomes slow and noisy.

A third mistake is forgetting error and stale states. Users need to know whether data is loading, failed, refreshing, or possibly outdated.

## Check yourself

- Why is server data different from local UI state?
- What is a query key?
- What does invalidation mean?
- When might optimistic updates be useful?
- What can go wrong if cache keys are too vague?

## Interview version

Frontend data fetching should treat server data as cached, asynchronous state. I would define query keys, loading and error states, stale timing, mutation behavior, invalidation rules, and optimistic update recovery.

A strong answer shows that the hard part is not calling `fetch`. The hard part is keeping the UI honest when data changes, requests fail, filters change, or cached data becomes stale.
