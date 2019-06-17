

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
  var startSixDigits = cardNumber.slice(0, 6);
  var len = cardNumber.length;
  if ((len === 14) && (start === '38' || start === '39')) {
  	return "Diner's Club";
  } else if ((len === 15) && (start === '34' || start === '37')) {
  	return 'American Express';
  } else if((len === 16 || len === 18 || len === 19) && (startFourDigits === '4903' || startFourDigits === '4905' || startFourDigits === '4911' || startFourDigits === '4936' || startSixDigits === '564182' || startSixDigits === '633110' || startFourDigits === '6333' || startFourDigits === '6759')){
    return 'Switch';
  } else if ((len === 13 || len === 16 || len === 19) && start.slice(0,1) === '4') {
  	return 'Visa';
  } else if ((len === 16) && (start === '51' || start === '52' || start === '53' || start === '54' || start === '55')) {
  	return 'MasterCard';
  } else if ((len === 16 || len === 19) && (startFourDigits === '6011' || (Number(startThreeDigits) >= 644 && Number(startThreeDigits) <= 649) || start === '65')){
  	return 'Discover';
  } else if ((len >= 12 && len <= 19) && (startFourDigits === '5018' || startFourDigits === '5020' || startFourDigits === '5038' || startFourDigits === '6304')){
  	return 'Maestro';
  } else if ((len >= 16 && len <= 19) && ((Number(startThreeDigits) >= 624 && Number(startThreeDigits) <= 626) || (Number(startFourDigits) >= 6282 && Number(startFourDigits) <= 6288) || (Number(startSixDigits) >= 622126 && Number(startSixDigits) <= 622925))){
  	return 'China UnionPay';
  }
  
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - 
  // in any apparent conflict, you should choose the network with the longer prefix.
  
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
};


