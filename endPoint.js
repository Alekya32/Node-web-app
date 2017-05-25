var express=require("express");
var app=express();
var router=express.Router();
router.get("/",function(request,response){
	response.json({message:"Start of endpoint"})
})



router.get("/customer",function(request,response){
	var customers=[{
		"name":"Alekya",
		"location":"Visakhapatnam"
	},
	{
		"name":"Sathya",
		"location":"Akp"
	},
	{
		"name":"Bangaram",
		"location":"GWK"
	}]
	response.json(customers);	
})
app.use("/",router)
app.use("/api",router)
app.use("/api/customer",router)

var PORT=process.env.PORT||1330;
app.listen(PORT,function(){
	console.log("Server Listening!!")
}) 