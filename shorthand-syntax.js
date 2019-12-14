/*
  Shorthand syntax

  Property
  Method names

  Makes objects concise
*/

// Shorthand property names
function formatMessage(name, id, avatar){
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now()
  }
}

// if key or property name is the same get rid of it

function formatMessage(name, id, avatar){
  return {
    name,
    id,
    avatar,
    timestamp: Date.now()
  }
}

// Short hand method names

function formatMessage(name, id, avatar){
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save(){
      // save messag method
    }
  }
}
