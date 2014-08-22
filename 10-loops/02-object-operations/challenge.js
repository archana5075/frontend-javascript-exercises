module.exports.copy = function(object){
     var newObject = {};
	for (var key in object){
	  newObject[key] = object[key];
   }
  return newObject;
};

module.exports.extend = function(dest, src){
   for(var key in src)
   	dest[key] = src[key];
     return dest;
};

module.exports.hasElems = function(object, array){
	for(var i=0; i<array.length ; i++){
		   if( object[array[i]] === undefined){
              	return false;
              }	
 	}
	return true;
};