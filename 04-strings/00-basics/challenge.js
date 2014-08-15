module.exports.formLetter = function(firstName, senderName, message) {

	return "Hello " + firstName + "," + "\n\n" + message + "\n\nSincerely," + "\n" + senderName ;

};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  
  var firstString  = bigString.substring(startA,endA);
  var secondString  = bigString.substring(startB,endB);
  return firstString + secondString ;  
};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);

};

module.exports.substringBetweenMatches = function(text, searchString) {

	 var startX = text.indexOf(searchString);
	 var endX = text.lastIndexOf(searchString);
	 var len = searchString.length;
	 return  text.substring(startX + len, endX)  ;  
};