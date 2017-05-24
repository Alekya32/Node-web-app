var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();

var fs=require("fs")
var path=require("path")	//Joining path

/*var filepath=__dirname+"/sample.txt"*/
var filepath=path.join(__dirname,"sample23.txt")//Joining path
console.log(filepath)

emitter.on("start_reading",function(filePath){		//on event to read file


	console.log("start reading the file...!!")		

	fs.readFile(filepath,"utf-8",function(err,data){ //reading file utf-8 to see data in string format
		if(err){
			/*console.log(err);*/
			emitter.emit("error",err)
			return ;
		}
		/*console.log(data)*/
		emitter.emit("print_content",data);
	})
})
emitter.on("print_content",function(data){			//printing file
	console.log(data);
	emitter.emit("done","Successfully done reading the file")//invokes done event
})

emitter.on("error",function(message){
	console.log("There is an error.....")
	console.log("error details:"+message);
	console.log("COuldnt read........")

})

emitter.on("done",function(message){
	console.log(message);
})

emitter.emit("start_reading",filepath)