module.exports.equalStrings = function(stringOne, stringTwo) {
  return  stringOne == stringTwo ;
};

module.exports.notEqual = function(one, two) {
 return one !== two ;
};

module.exports.inBetween = function(lower, middle, upper) {
	return (lower < middle) && (middle < upper) ; 
};

module.exports.outsideRanges = function(number) {

	return  !(10 <= number && number <= 20) 
	     && !(42 < number && number <= 75) 
	     && !(1 < number && number < 6) ; 
/*
	if  ((number >= 10 && number <= 20) 
	  || (number > 42 && number <= 75) 
	  || (number > 1 && number < 6))
	     return false;
	else
		return true;
*/
};

module.exports.nameAndPrice = function(name, price) {
  return  ((name == 'NYTimes' || name == 'LATimes') && (price >= 1));
};