module.exports.reversePlusOne = function(array){
	var newArray  = array.reverse();
	    newArray.unshift(1); 
     return newArray;
};

module.exports.plusesEverywhere = function(array){
    var newString =  array.join("+");
    return newString;       
};

module.exports.arrayQuantityPlusOne = function(array){
	return array.length + 1 ;
};