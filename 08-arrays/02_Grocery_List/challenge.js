module.exports.addItem = function(item, list){
while(list.indexOf(item) ==  -1)
{
  list.push(item);
}
  return list;
};

module.exports.reverseSortedList = function(array){
	var newArray = array.sort();
	return newArray.reverse();
};