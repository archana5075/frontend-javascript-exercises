module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
 var course = 
 {   
      title    : courseTitle,
      duration : courseDuration,
      students : courseStudents
 };
 return course;
};

module.exports.addProperty = function(object, newProp, newValue){

	  if(!object.hasOwnProperty(newProp)){
	  	 object[newProp] = newValue;
	  	 return object;
	  }
	  	return object;
};

module.exports.formLetter = function(email){
	return "Hello " + email.recipient + ","
	                + "\n\n" + email.msg 
	                + "\n\nSincerely,"
	                + "\n" + email.sender ;

};

module.exports.canIGet = function(item, money){
	var price = { 
                   'MacBook Air' :  999,
                   'MacBook Pro' : 1299,
                   'Mac Pro'     : 2499,
                   'Apple Sticker' : 1 
                 };
      return (money >= price[item]); 
};