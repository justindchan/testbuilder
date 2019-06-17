

// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  //access first two chars and store in var 'start'
  var start = cardNumber.slice(0, 2);
  var startFourDigits = cardNumber.slice(0, 4);
  var startThreeDigits = cardNumber.slice(0, 3);
  var len = cardNumber.length;
  if ((len === 14) && (start === '38' || start === '39')) {
  	return "Diner's Club";
  } else if ((len === 15) && (start === '34' || start === '37')) {
  	return 'American Express';
  } else if ((len === 13 || len === 16 || len === 19) && start.slice(0,1) === '4') {
  	return 'Visa';
  } else if ((len === 16) && (start === '51' || start === '52' || start === '53' || start === '54' || start === '55')) {
  	return 'MasterCard';
  } else if ((len === 16 || len === 19) && (startFourDigits === '6011' || (Number(startThreeDigits) >= 644 && Number(startThreeDigits) <= 649) || start === '65')){
  	return 'Discover';
  } else if ((len >= 12 && len <= 19) && (startFourDigits === '5018' || startFourDigits === '5020' || startFourDigits === '5038' || startFourDigits === '6304')){
  	return 'Maestro';
  }
  
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
};


