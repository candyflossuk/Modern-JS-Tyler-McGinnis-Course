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
