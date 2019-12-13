/*
  Template literals

  a.k.a String literals

*/
//old style
function makeGreeting( name, email, id){
  return 'Hello, ' + name +
  '. We\'ve emailed you at ' + email +
  '. Your user id is "' + id + '".'
}

makeGreeting('Ross', 'ross.a.humphrey@gmail.com', '122')

//new style
function makeGreeting(name, email, id){
  return `Hello, ${name}. We've emailed you at ${email}. Your user id is ${id}`
}

// we can do the same with html

function makeGreetingTemplate(name, email, id){
  return `
    <div>
      <h1>Hello, ${name}</h1>
      <p>
        We've emailed you at ${email}
        Your user is is "${id}".
      </p>
    </div>
  `
}
