module.exports.sumNumbers = function(array){
   var sum = 0;
   for(var i=0; i<array.length ; i++)
   {
   	    sum += array[i];
   } 
	return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
   var lowerCaseString =  inputString.toLowerCase();       
   var lowerCaseArray  = lowerCaseString.split(",");
	return lowerCaseArray;
};

module.exports.addIndex = function(array){
	var newArray = [];
	for(var i=0; i<array.length; i++){
       newArray.push( i + " is " + array[i]);
	}
	return  newArray;
};
