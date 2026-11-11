# Type Aliases vs Interfaces in TypeScript: Which Should  Use?

## Introduction

TypeScript uses both `type` aliases and `interface` declarations to describe the expected shape of data. They often look similar, but a few important differences affect how we design and maintain applications.

## Core Differences

An `interface` primarily describes an object structure and can be extended using `extends`. A `type` alias can describe objects too, but it also supports primitives, union types, intersections, and tuples.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

type Status = "pending" | "approved" | "rejected";
type Point = [number, number];
type UserWithStatus = User & { status: Status };
```

Another difference is **declaration merging**. TypeScript automatically combines multiple `interface` declarations with the same name in the same scope, while declaring the same `type` alias twice causes an error.

```ts
interface Product { id: number; }
interface Product { price: number; } // Merged with the first

const item: Product = { id: 1, price: 50 };

// type ProductId = number;
// type ProductId = string; // Error: duplicate identifier
```

## When Should we Choose Each?

Choose `interface` when defining object contracts, especially for classes, reusable models, or APIs where extension and declaration merging are useful. Choose `type` for unions, tuples, utility combinations, or object shapes assembled with intersections. Both support object typing, so consistency with wer project's conventions also matters.

## Conclusion

Neither option is universally better. Use `interface` for extendable object contracts and `type` when we need more flexible type expressions.