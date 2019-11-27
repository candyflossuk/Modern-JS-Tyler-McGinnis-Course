/*
  Comptued property names

  Expression be computed as a property name on an object

*/

// old way
function objectify(key, value) {
  let obj = {}
  obj[key] = value
  return obj
}

// using computed property names
function objectify(key, value) {
  return {
    [key]: value
  }
}

// invoking either one of them gives the same object
