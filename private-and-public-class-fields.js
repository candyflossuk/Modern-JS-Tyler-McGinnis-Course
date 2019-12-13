/*
  Public and private class fields
*/

// simple player class

class Player {
  constructor() {
    this.points = 0
    this.assists = 0
    this.rebounds = 0
    this.steals = 0
  }
  addPoints(amount){
    this.points += amount
  }
  addAssist(){
    this.assists++
  }
  addRebound(){
    this.rebounds++
  }
  addSteal(){
    this.steals++
  }
}

/*
 Moving towards the Class Fields Declaration proposal,
 currently in Stage 3 in the TC-39 process. Allows you to add instance
 properties directly as a property without a constructor method
*/
class Player {
  points = 0
  assists = 0
  rebounds = 0
  steals = 0

  addPoints(amount){
    this.points += amount
  }
  addAssist(){
    this.assists++
  }
  addRebound(){
    this.rebounds++
  }
  addSteal(){
    this.steals++
  }
}

// This particularly shines when we look at react code.

class PlayerInput extends Component {
  state = {
    username: ''
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.string.isRequired,
  }

  static defaultProps = {
    label: 'Username',
  }
  handleChange = (event) => {
    this.setState({ // references the component - can get rid of constructor
      // this references the class lexically
      username: event.target.value
    })
  }
  render(){
    ...
  }
}

// Downsides

class Animal {
  eat () {}
  sleep = () => {}
}

function Animal(){
  this.sleep = function () {}
  /*
   this may cause performance issues,
  is developer experience outweighing performance hit
  */
}

Animal.prototype.eat = function () {
  ...
}

// Class fields - private
// private fields are marked with an underscore

class Car {
  #milesDriven = 0
  drive(distance){
    #milesdDriven += distance
  }
  getMilesDriven(){
    return #milesDriven
  }
}

const tesla = new Car()
tesla.drive(20)
console.loge(tesla.#milesDriven)  // THIS WONT WORK BECAUSE OF THE #

// class fields can help us create private fields using #
// not for use YET - requires Babel pull request until its in Babel
