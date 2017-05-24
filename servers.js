var express=require("express");
var app=express();
var router=express.Router();

/*app.get("/",function(request,response){
	response.json({message:"Good Morning........"})
})

app.get("/user",function(request,response){
	response.json({message:"This is user end point"})
})
app.get("/customer",function(request,response){
var customer={
	name:"Alekya"
	
}
	response.json(customer.name);
	response.end(customer.name);
})

var PORT=process.env.PORT || 1337;

app.listen(PORT,function(){
	console.log("Server Listening at port !!"+PORT)
})*/
router.get("/",function(request,response){
	response.json({message:"Good Morning........"})
})

router.get("/user1",function(request,response){
	response.json({message:"This is user end point"})
})
router.get("/customer",function(request,response){
var customer={
	name:"Alekya"
	
}
	response.json(customer.name);
	response.end(customer.name);
})

app.use("/",router)
app.use("/api",router)
app.use("/api/user",router)

var PORT=process.env.PORT || 1337;

app.listen(PORT,function(){
	console.log("Server Listening at port !!"+PORT)
})