/*var string="I am from Import...";*/

var wish=function(name){
	return "Hello"+name;
}

var displayMessage=function(){
	return "This is Message function"
}

/*module.exports=wish;*/
/*module.exports={
	wish:wish,
	display:displayMessage
}
*/
module.exports.display=function(){
	return "This is my function"
}

