module.exports.getKeys = function(object){
    var newArray = [];
	for(var key in object){
       newArray.push(key);
	}
return newArray;
};

module.exports.getValues =  function(object){
    var newArray = [];
	for(var key in object){
       newArray.push(object[key]);
	}
return newArray;
};

module.exports.objectToArray =  function(object){
    var newArray = [];
	for(var key in object){
       newArray.push(key + " is " + object[key]  );
	}
return newArray;
};;