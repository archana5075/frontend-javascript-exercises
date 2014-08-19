module.exports.newArray = function(first, second, third, fourth){
    
    var array = [] ;

    array[0] = first;
    array[1] = second;
    array[2] = third;
    array[3] = fourth;

    return arr;

};

module.exports.firstAndLast = function(array) {

  var newArray = [array[0] , array[array.length - 1]]; 

  return newArray;

};