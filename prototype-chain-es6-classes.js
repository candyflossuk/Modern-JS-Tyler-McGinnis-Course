/*
Notes for the Prototype Chain and ES6 classes module on TylerMcginnis.com
*/

// Simplest way to define an object is as follows (defined as curly braces)
 let animal = {}
 animal.name = 'Leo'
 animal.energy = 10

 animal.eat = function (amount) {
   console.log(`${this.name} is eating.`)
   this.energy += amount
   )
 }

animal.sleep = function (length) {
  console.log(`${this.name} is sleeping`)
  this.energy += length
}

animal.play = function (length){
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

/*
  Encapsulate the logic inside of a function that we can invoke
  whenver we need to create a new anmal. This pattern is called
  'Functional Instantation' and we will call the funciton
  a 'constructor function' since it will construct a new object

  In memory - each method is recreated and stored in memory per instance.
  And therefore - this is costly (on memeory) the methods can be moved
  out into their own object and then refeerenced. - this is known as Functional
  Instantation with Shared Methods - also shown below.
*/

// Functional Instantiation

function Animal(name, energy){
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

 animal.sleep = function (length) {
   console.log(`${this.name} is sleeping`)
   this.energy += length
 }

 animal.play = function (length){
   console.log(`${this.name} is playing.`)
   this.energy -= length
 }
}

// Functional Instantation with Shared Methods

const animalMethods = {
  eat(amount){
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
  },
  play(length){
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

// When adding methods to the shared methods you have to add it to the functional instantation.
// So instaed use Object.create - this allows you to create an object which will
// delegate to another object on failed lookups.

/*
  So ... you create an object and whenever theres a failed property lookup
  on that object it can consult another object to see if that other object has the property.
*/

const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish (delegates the lookup to the parent)

/**
  Now we can use Object.create to delegate the animalMethods object instead
  of shared methods.
**/

const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping`)
    this.energy += energy
  },
  play(length) {
    console.log(`{this.name} is playing`)
    this.energy -= length
  }
}

function Animal (name, energy) {
  let animal = Object.create(animalMethods)
  animal.name = name
  animal.energy = energy
  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)

/*
Calling leo.eat will look for eat on the leo object. The lookup will fail
then it will delegate to the animalMethods object where it will find eat

This is a bit hacky - turns out this is why prototype was made

In JS - every function in JS has a prototype property that references and object.
 */

function doThing () {}
console.log(doThing.prototype) // {}

/*
 Instead of a separate object for our methods - put each of these methods on the Animal function's prototype.
 Call to Object.create to delegate the animalMethods - which would delegate to Animal.prototype - this
 is called Prototypal Instantiation
 */

function Animal (name, energy) {
  let animal = Object.create(Animal.prototype)
  animal.name = name
  animal.energy = energy

  return animal
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`)
  this.energy += amount
}

Animal.prototype.sleep = function(length){
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = Animal('Leo', 7 )
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)

/**
 * prototype is just a property that every function in JS has - allowing us to share methods across
 * all instances of a function.
 *
 * All functionallity is the same - instead of having to manage a separate object for each method -
 * we just use another object - that comes built into Animal - Animal.prototype
 */

/*
 There is a way to create a constructor function, add methods to a constructor prototype and use Object.create to
 delegate failed lookups to the function prototype and its the 'new' keyword
 */

/*
Looking at our Animal constructor - the two most important parts are:
  > Create the object (Object.create)
  > Return the object (return)
 */

function Animal (name, energy) {
  let animal = Object.create(Animal.prototype)
  animal.name = name
  animal.energy = energy

  return animal
}

// new keyword gives you those two lines for free - doing them implictly (under the hood) and the object created is called this.

function Animal ( name, energy ) {
  // const this = Object.create(Animal.prototype)

  this.name = name
  this.energy = energy

  // return this
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

// Without the 'under the hood' comments

function Animal(name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`)
  this.energy += amount
}

Animal.prototype.sleep = function(length){
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

/*
This works because the 'this' object is created - because we called the constructor function with the new
keyword. If you leave off 'new' when you invoke the function, that 'this' object never gets created, nor
is it implicitly returned.
 */

function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

const leo = Animal('Leo', 7)
console.log(leo) // defined

// The name for this pattern is Pseudoclassical Instantation

// in 2015 the 'class' keyword was added to the language.
// Using this class syntax our class would look something like this

class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }

  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Scoop', 10)




