/*

  Destructuring

  Allows us to extract mutliple properties from an object

*/

var user = {
  name: 'Ross',
  handle: 'Candyflossuk',
  location: 'Eden, Utah'
};

// What used to be this
var name = user.name;
var handler = user.handle;
var location = user.location

// Becomes this...

// Extract on the left (add on the right right of the equals)
var { name, handle, location } = user;

function getUser (){
  return {
    name: 'Ross',
    handle: 'Candyflossuk',
    location: 'Eden, Utah'
  };
}

// Array Destructuring
// Useful - when the location of an item is the differentiator

var user = ['Ross', '@rosshumphreyuk', 'UK'];

var name = user[0];
// .. etc etc

var [ name, handle, location ] = user;

var csv = '1997, Ford, F350, Must Sell!'
var [ year, make, model, description ] = csv.split(',');


// ADVANCED FEATURES
var user = {
  n: 'Ross',
  h: '@rosshumphreyuk',
  l: 'UK'
}

var { n: name, h: handle, l: location} = user;


// Function args params
fetchRepos(language, minStars, maxStars, createdBefore, createdAfter)
fetchRepos('Javascript', 100, null, new Data('01/01/2017').getTime(), null)

//instead parse and object - Becomes
fetchRepos({language='All', minStars=0, maxStars='', createdBefore='', createdAfter=''}){
}

fetchRepos({
  language: 'Javascript',
  createdBefore: new Date('01/01/2017').getTime(),
  minStars: 100
})

// arrays can also be destructuring as above - and move it into the params of
// a promise return
