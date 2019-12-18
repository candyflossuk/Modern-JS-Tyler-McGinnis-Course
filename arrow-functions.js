/**
  Arrow Functions in JS

  Two benefits:
    > Terse (less typing)
    > Make managing the 'this' keyword easier

  Syntax is hard.

**/

function add (x, y) {
  return x + y
}

// as a function expression
var add = function(x,y) {
  return x + y
})

// with arrow syntax (same as the above)
var add = (x, y) = > {
  return x + y
}

add(1,2)

// anonymous functions
users map(function (user){
  // something here
})

// using arrow functions - same as above with less typing
users map(() => {
  // something here
})

function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then(function(response){
      return response.json()
    })
    .then(function (response){
      return response.data
    })
    .then(function (tweets){
      return tweets.filter(function (){
        return tweet.stars > 50
      })
    })
    .then(function(tweets){
      return tweets.filter(function(){
        return tweets.rts > 50
      })
    })
}

// with arrows we can make it cleaner
// arrow functions have an implicit return (i.e don't have to include the return)
function getTweets (uid) {
  return fetch('https://api.users.com/' + uid)
    .then(response => response.json()) // if on same line - dont need to define the return
    .then(response => response.data)
    .then(tweets => tweets.filter(tweet) => tweet.stars > 50)
    .then(tweets => tweets.filter(tweet) => tweets.rts > 50)
}

// if only argument parsed - you can remove the parens
// makes it easy to read

// dealing with 'this' keyword

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount () {
    this.updateLanguage('javascript')
  }
  updateLanguage(lang) {
    api.fetchPopularRepos(lang)
      .then(function (repos) {
        // if referencing this keyword inside another function 'function'
        // inner context is going to be different than the outer context
        this.setState(function () {
          return {
            repos: repos
          }
        });
      }); // problem here when you remove the bind(this)
  }
  render() {
    // Stuff
  }
}

// instead change to:
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount () {
    this.updateLanguage('javascript')
  }
  updateLanguage(lang) {
    api.fetchPopularRepos(lang)
      .then((repos) => {
        // now your using the arrow function your not creating a new context
        // use the or operator to run an operation and then return repos
        this.setState(() => console.log('repos', repos) || ({
          repos:repos
        }));
      }); // problem here when you remove the bind(this)
  }
  render() {
    // Stuff
  }
