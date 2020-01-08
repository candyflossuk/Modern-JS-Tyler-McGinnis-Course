/*
  Callbacks, Promises, Async and Await

  We have created patterns for handling and fetching external data

  The three most common patterns are:
    > Callbacks
    > Promises
    > Await
*/

/*
  Callbacks
*/

function add(x,y) {
  return x + y
}

// start the functions
add(3,5)

// Anything can call the function
const me = add
me(4,5)
const you = add
you(1,2)

/* We can create as many references to the function as we want
 You can pass the reference to a function into another function, and invoke
 the original function.
*/
function addFive (x, addReference){
  return addReference(5, x)
}
addFive(10, add)

/* When you have a function that accepts another function as an argument
   it is known as a higher order function. The argument you are parsing
   into that function is called a callback
*/
function higherOrderFunction(x, callback) {
  return callback(5, x)
}

higherOrderFunction(10, add)
// callback functions are extremely common across the JS space.

// with callbacks you can delay the execution of a function until a particular point in time
// here is an example using jquery. This function won't be called until element '#btn' has
// been called.
$('#btn').on('click', () =>
  console.log('Callbacks are everywhere')
)

const id = 'tylermcginnis'

// using callbacks to make an asynchronous request.
/*
  Makes an ajax request to the url,
  on success - update the UI,
  if there is an error then call 'showError'
*/
$.getJSON({
  url: `https://api.github.com/users/${id}`,
  success: updateUI,
  error: showError,
})

/* It is also possible to nest callbacks - i.e nest another request inside
 the 'success' callback above. DONT DO CALLBACK HELL by nesting perpetually.
 It makes code incredibly hard to read and maintain, instead break out the
 callbacks into functions - it just makes it a little easier to read.
 Callbacks are  still tricky to read.
*/

function criticalFunction(){
  //does anything important
}

thirdPartyLib(criticalFunction)
/* Interface with 3rd party libs is done via callback functions
 We assume the thirdparty lib invokes our callback function properly.
 This may not be the case however - they may change the API,
 remove the params etc. Its up to the third party - we have 0 control.
 i.e - Inversion of Control. When you use a callback as the API for interacting
 with third party service - your losing all control of the function and giving
 it to the third party service.
*/

// PROMISES.
/* Restaraunt anology - no tables, give phone number, text when theres a table.
   However they may start texting you ads instead. Which is like an inversion of
   control.

   Instead - use pager, get the benefits of freedom without giving up control.
   There are three states:
     > default (pending)
     > fulfilled
     > rejected

   The solution to this is called 'Promise'

   Promises exist - to make asyncronous requests more manageable and less complex.
   The states are the same - (defalt (pending), fulfilled, rejected)

*/

// How do you create a promise?
const promise = new Promise()
// How do you change the status of a Promise
const promise = new Promise((resolve, reject) => {
  // resolve changes status to fulfilled - resolve()
  // reject  changes status to rejected - reject()
})
// How do you listen for when the status of a promise changes?
function onSuccess(){
  console.log('Success!')
}
function onError(){
  console.log('💩')
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve() //reject() if you want to call the onError function
  },2000)
})

promise.then(onSuccess)
promise.catch(onError)
// promise waits 2 seconds then status changes

// promises make callback code a little easier to understand.
function getPromise() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

function logA(){
  console.log('A')
}

function logB(){
  console.log('B')
}

function logCAndThrow(){
  console.log('C')
  throw new Error()
}

function catchError(){
  console.log('Error!')
}

getPromise()
  .then(logA)
  .then(logB) // can chain function calls
  .then(logCAndThrow) //error thrown
  .catch(catchError) // error then caught using catch

// using fetch
fetch('api/users.json')
  .then((response) => response.json())
  .then((user) => //user is the json)


// You can invoke resolve() passing in params of stuff you want to make accessible in the returned promise
// this data can then be used.

// It would be even better if we could async - just like a normal function
// i.e wait until the promise is resolved and then carry on.

 $('#btn').on("click", async () => { //js knows that inside there is some async inside
   const user = await getUser('candyflossuk') // use await to tell js we are calling async
   const weather = await getWeather(user)
   updateUI({
     user,
     weather
   })
 });

 // This is a nice clean implementation - and pretty much inline with how we normally code!
 async function getPromise(){} // will always return a promise using 'async'
