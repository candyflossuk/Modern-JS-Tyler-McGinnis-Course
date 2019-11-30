/*
  Compiling vs Polyfills

  5 stages of approval for Emacscript
  Babel compiles back to 'old' versions
  of JS - to make them compatible with other
  browsers

  The goal of babel is to make modern JS
  work with any browser version.

  Compiling only gets our code part of the way
  there.

  Compiling - Taking syntax running it thru transforms
  Polyfilling - Adds methods or objects to browsers
  global objects. (Adding new functionallity to the browser)

  Arrow Functions -> Compiled
  Classes -> Compiled
  Promises -> Polyfilled
  Destructuring - Compiled
  Includes - Polyfilled
  Features that need to be compiled

  Arrow functions
  Async functions
  Async generator functions
  Block scoping
  Block scoped functions
  Classes
  Class properties
  Computed property names
  Constants
  Decorators
  Default parameters
  Destructuring
  Do expressions
  Exponentiation operator
  For-of
  Function bind
  Generators
  Modules
  Module export extensions
  New literals
  Object rest/spread
  Property method assignment
  Property name shorthand
  Rest parameters
  Spread
  Sticky regex
  Template literals
  Trailing function commas
  Type annotations
  Unicode regex

  Features that need to be polyfilled

  ArrayBuffer
  Array.from
  Array.of
  Array#copyWithin
  Array#fill
  Array#find
  Array#findIndex
  Function#name
  Map
  Math.acosh
  Math.hypot
  Math.imul
  Number.isNaN
  Number.isInteger
  Object.assign
  Object.getOwnPropertyDescriptors
  Object.is
  Object.entries
  Object.values
  Object.setPrototypeOf
  Promise
  Reflect
  RegExp#flags
  Set
  String#codePointAt
  String#endsWith
  String.fromCodePoint
  String#includes
  String.raw
  String#repeat
  String#startsWith
  String#padStart
  String#padEnd
  Symbol
  WeakMap
  WeakSet

*/
