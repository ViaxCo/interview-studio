---
id: fe-promises-async-await
track: Frontend
category: JavaScript
level: Foundational
question: Explain Promises and async/await in JavaScript.
sources:
  - label: MDN: Promise
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - label: MDN: async function
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
---

## Learn it

A Promise represents a value you do not have yet. The work may still be happening. Later, the Promise will either succeed with a value or fail with a reason.

This is useful because frontend apps are full of waiting: waiting for a network request, waiting for a file to load, waiting for permission, waiting for an animation, or waiting for a database response from an API.

A Promise has three states:

- Pending: the work is still in progress.
- Fulfilled: the work succeeded and produced a value.
- Rejected: the work failed and produced an error reason.

Here is a basic Promise chain:

```js
fetch("/api/user")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.name);
  })
  .catch((error) => {
    console.error(error);
  });
```

`async` and `await` do not replace Promises. They give you a more readable way to work with Promises.

```js
async function loadUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}
```

The important idea is: `await` pauses the async function until the Promise settles, but it does not freeze the whole browser.

## Walkthrough

Suppose a user opens a profile page. The app asks the server for profile data.

```js
async function getProfile(userId) {
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    throw new Error("Could not load profile");
  }

  return response.json();
}
```

When JavaScript reaches `await fetch(...)`, the async function waits for that Promise. Other browser work can continue. The user can still move the mouse. Other events can still be scheduled. JavaScript is not sitting in a blocking loop.

If the request succeeds, execution continues and `response` is available. If the Promise rejects, control jumps to the nearest `catch`.

```js
async function showProfile(userId) {
  try {
    const profile = await getProfile(userId);
    renderProfile(profile);
  } catch (error) {
    renderError("We could not load this profile.");
  }
}
```

This reads like normal step-by-step code, but it is still Promise-based underneath.

## Make it practical

The main frontend skill is not just knowing syntax. It is knowing what should happen in each state.

When loading data, the UI usually needs:

1. A loading state while the Promise is pending.
2. A success state when data arrives.
3. An error state when the request fails.
4. A retry or recovery path if the user can try again.

```jsx
function Profile({ userId }) {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const profile = await getProfile(userId);
        if (!ignore) setState({ status: "success", profile });
      } catch (error) {
        if (!ignore) setState({ status: "error" });
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (state.status === "loading") return <p>Loading...</p>;
  if (state.status === "error") return <p>Could not load profile.</p>;
  return <h1>{state.profile.name}</h1>;
}
```

This example also shows a real bug to avoid: stale async results. If `userId` changes before the first request finishes, you do not want the old request to overwrite the new page state.

## Common mistakes

A common mistake is forgetting to return or await a Promise. If you call an async function without awaiting it, the surrounding code continues immediately.

Another mistake is using `try/catch` but only wrapping synchronous code. Errors from awaited Promises are caught by `try/catch`, but errors from Promises you do not await may escape that block.

A third mistake is accidentally running async work one at a time when it could run in parallel.

```js
const user = await fetchUser();
const teams = await fetchTeams();
```

If those two requests do not depend on each other, this may be slower than:

```js
const [user, teams] = await Promise.all([fetchUser(), fetchTeams()]);
```

## Check yourself

- What are the three Promise states?
- What does `await` actually wait for?
- Does `await` block the whole browser?
- Why does UI need loading, success, and error states?
- When should you use `Promise.all`?

## Interview version

A Promise represents an asynchronous result that is pending, fulfilled, or rejected. `async/await` is syntax for writing Promise-based code in a more sequential style. `await` pauses the async function until the Promise settles, but it does not block the whole browser thread.

A strong frontend answer should connect Promises to UI states: loading, success, error, retry, cancellation or stale-result handling, and parallel work with `Promise.all` when requests do not depend on each other.
