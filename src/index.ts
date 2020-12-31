export type StudentId = string;

const firstStudent: StudentId = `5`;
const lastStudent: StudentId = `123`;

let x: number;
let y: Number;

// x = y  this would produce an error.

/*
Number

All numbers in TypeScript are treated equally, so a number with
a decimal has the same type of a whole number
*/

// inferred number
const pi = Math.PI;

// inferred number
const year = 2020;

// explicit number
const quantity: number = 92;

/*
String

Strings in TypeScript can be represented in 3 ways
1. using single quotes
2. Using double quotes
3. Using backtick introduced in ES2015 - officially known as template literals
*/

const firstName = `Elijah`;
const lastName = `Hallan`;

const greeting: string = `Hi! My name is ${firstName} ${lastName} !`;
console.log(greeting);

const twoPlusTwo: string = `2 + 2 = ${2 + 2}`;
console.log(twoPlusTwo);

const html = `
<div>
  <h1>Hello World!</h1>
  <section>
    <p>This is a paragraph.</p>
  </section>
</div>
`;

// String Literal Types
// All strings are assignable to a string. IF need a type that is only assignable to a specific string literal, we can use string literal types to ensure that only a specific string is accepted.

type FirstDay = `Monday`;
type DaysOfTheWeek =
  | `Sunday`
  | `Monday`
  | `Tuesday`
  | `Wednesday`
  | `Thursday`
  | `Friday`;
const xx: FirstDay = `Monday`;
const yy: DaysOfTheWeek = `Tuesday`;
console.log(xx, yy);

/*
Boolean

the boolean type represents true or false.
*/

const isTrue = true;
const isFalse = false;

console.log(isTrue, isFalse);

const negatedTrue = !isTrue;
console.log(`negatedTrue is ${negatedTrue}`);

/*
Null and undefined

by default, the null and undefined types are assignable to all types
*/

// const numberNull: number = null;
// const stringNull: string = null;
// const undefinedNull: undefined = null;

/*
Void

The void type represents the lack of ANY type. Null and undefined are assignable to void, but the only recommended use for void is as the return type for functions that return no value.
*/

function log(msg: string): void {
  console.log(msg);
}

log(`Pretty brown eyes`);
