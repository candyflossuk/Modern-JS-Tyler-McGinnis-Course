/*
  Default parameters

  When you define a function, you can default the values
*/

// es5
function calculatePayment (price, salesTax, discount){
  // defaulting values - in ES5
  salesTax = typeof salesTax === 'undefined' ? 0.047: salesTax
  discount = typeof discount === 'undefined' ? 0: discount

  console.log('tax', salesTax)
  console.log('discount', discount)
  // math

}

// calculatePayment(100, 0, 0 ) << in ES5 because 0, salesTax not getting the defaulting

// in es6
function calculatePayment (price = isRequired('price'), salesTax = 0.047, discount = 0){
  // defaulting values - in ES6 is a lot cleaner with default params
}

// But wait there's more -
function isRequired(name){
  throw new Error(name + ' is required')
}

/*
  If we dont pass in price - you will now get an error.
  Default params aren't built for this - but its handy
*/
