---
title: The JavaScript
---

## JavaScript has no limits!

With no shadow of doubt JavaScript is one of the languages that was most hated by developers. Weak type, object orientation works totally different from the "traditional" languages and numerous gotchas have frustrated developers for a very long time. But this scenario is changing.

Nowadays, hardly a sucessful tool will have a good user experience without JavaScript use. However, we need to know its main features.

Let's go?

## Variables, types and values

We can declare variables in one of the two ways: with or without the `var` reserved word.

```javascript

// The following code will have the
// same result on browser.

var foo = 0; // "0"

foo = 0; // "0"
```

You might be asking yourself what is the difference between the two declarations. When you declare a variable with `var`, it will be reduced to the minimum possible scope. In case you declare the variable without it, it will belong to the global scope, which in the browser will be the scope of the `window` object, which is bad.

With the latest version of ECMAScript, we have this problem solved. We can declare a variable using `let`, which will make it to have block scope.

```javascript
var a = 1;
let b = 2;
console.log(a); // 1
console.log(b); // 2

if (true) {
  var a = 2;
  let b = 3;
  console.log(a); // 2
  console.log(b); // 3
}

console.log(a); // 2
console.log(b); // 2
```

Besides `let`, on the new version of JavaScript we have also gained the `const` keyword. With it, we can declare a readonly variable, so, after giving it a value, the same can't be changed.

```javascript
const foobar = 1;
var foobar = 2;

console.log(foobar); // 1
```

As we already said, JavaScript is a weakly typed language. Therefore, we can define the type of a variable in the assignment of its value. We have the following types to work from: **Int**, **Float**, **String**, **Booleans**, **Arrays** and ** Objects**.

```javascript
// Int
var foo = 0;

// Float
var bar = 3.14;

// String
var foobar = "foobar";

// Booleans
var foo = true;

// Array
var arr = [2, 4, 6, 8];

// Object
var obj = {
  foo: "foo",
  bar: "bar"
}
```

Speaking of values, JavaScript recognizes 6 primitive types:

- `number` (`1`, `2`, `3.14`, ...)
- `boolean` (`true` ou `false`)
- `string` (`"foobar"`)
- `null` (non-existent value or object)
- `undefined` (when a variable has an undefined value)
- `symbol` (`Symbol("foobar")`)

## Operators

// TODO

## Control structures

// TODO

## Loops and iterators

// TODO

## Functions

// TODO

### Arrow Functions

// TODO

## Objects

// TODO

## DOM

// TODO

## Modularity

// TODO

## Beware JavaScript

// TODO
