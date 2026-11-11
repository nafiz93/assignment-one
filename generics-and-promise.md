# Generics and `Promise<T>` in TypeScript — Explained Simply

## Introduction

Generics help us use one function with different types of data. In TypeScript, we usually write `T` as a placeholder for a type. The real type becomes clear when we call the function. This saves us from writing the same function again and again.

## How Generics Work

Imagine we want to return whatever value we receive:

```ts
function returnValue<T>(value: T): T {
  return value;
}

const age = returnValue(25);       // T is number
const name = returnValue("Sara"); // T is string
```

When we pass `25`, TypeScript understands that `T` is `number`. When we pass `"Sara"`, `T` is `string`. The function stays the same, but TypeScript remembers the correct type.

## Generics with Asynchronous `Promise<T>`

Sometimes we need to wait for data, such as a response from an API. An `async` function returns a promise. `Promise<T>` tells us what type of value we expect after the promise succeeds.

```ts
type User = { id: number; name: string };

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Request failed");
  return (await response.json()) as T;
}

async function showUser() {
  try {
    const user = await getData<User>("/api/users/1");
    console.log(user.name);
  } catch {
    console.log("Could not load the user");
  }
}

showUser();
```

Here, `getData<User>` means we expect user data. After `await`, TypeScript treats the result as a `User`, so we can write `user.name`. However, `as T` does not check whether the API actually returned the right data. We should validate important API responses.

## Conclusion

Generics make our functions reusable and keep types clear. With `Promise<T>`, they also help us understand the data returned by asynchronous functions.