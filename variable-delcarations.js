/*

  Variable Declaration Vs Initalization
    >Introduces new identified using var
*/

var declaration
console.log(declaration) //undefined

declaration = 'This is initalization'

/*
  Scope (Function Scope)
    > Where variables and functions are accessible

    Two scopes:
      > Global
      > Function

    variable statement in FunctionDeclaration, variables defined with
    function-local scope. Otherwise they have global scope - created as
    members of global object

    if var is used - then its function-local, otherwise if var
    is not used - the variable is part of global scope
*/

function getDate() {
  var date = new Date();
  // only this function can access 'date'

  function formatDate(){
    // can use date variable
    return date.toDateString().slice(4);
  }

  return formatDate();
}

getDate();
console.log(date) // reference error

function discountPrices(prices, discount) {
  var discounted = []; //function scoped
  for (var i=0; i < prices.length; i++){
    var discountedPrice = prices[i] * (1-discount);
    var finalPrice = Math.round(discountedPrice *100)/100;
    discounted.push(finalPrice);
  }

  console.log(i);
  console.log(discountedPrice)
  console.log(finalPrice)

  return discounted;
}

//invoking this yields
discountPrices([100, 200,300], .5); // [50,100,150]


/*
  Hoisting

  All variables are hoisted to the top of the code
*/

// Write this:
console.log(hoisted) // undefined
var hoisted

// interpretter changes it to this
var hoisted
console.log(hoisted)

console.log(hoisted) // ReferenceError
let hoisted

//interpreted as
let hoisted
console.log(hoisted) // ReferenceError - still hoiseted but ref error

// Hoisted version from earlier - once interpretted looks like this:
function discountPrices(prices, discount) {
  var discounted; // variables hoised - but not to the global level (scope)
  var i;
  var discountedPrice;
  var finalPrice;

  var discounted = [];

  for (var i=0; i < prices.length; i++){
    discountedPrice = prices[i] * (1-discount);
    finalPrice = Math.round(discountedPrice *100)/100;
    discounted.push(finalPrice);
  }
  return discounted;
}


/*

var vs let vs const

var
  - function scoped
  - undefined (referencing before defined)

let
  - block scoped (available in block and any nested blocks)
  - let will hoist the variable up and cause a reference error

*/

// changed to let
function discountPrices(prices, discount) {
  let discounted = []; //function scoped
  for (let i=0; i < prices.length; i++){
    let discountedPrice = prices[i] * (1-discount);
    let finalPrice = Math.round(discountedPrice *100)/100;
    discounted.push(finalPrice);
  }

  console.log(i); //undefined!!!
  console.log(discountedPrice)
  console.log(finalPrice)

  return discounted;
}


// const is like let - apart from value cant be re assigned
let name = 'Ross'

const handle = 'Ross'

name = 'Rossy' // This is fine

handle = 'Rossy' //TypeError - NOT ALLOWED
