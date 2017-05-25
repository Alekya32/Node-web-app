var fs=require("fs")
var filepath="./sample.txt";
var readable=fs.createReadStream(filepath,{encoding:"utf-8",highWaterMark:32 * 1024});

var writable=fs.createWriteStream("./new.txt");
readable.on("data",function(chunk){
	console.log(chunk.length)
	setInterval(function(chunk){
	writable.write(chunk)
	},5000)
})

readable.pipe(writable); //it reads sample.txt and writes to new.txt
readable.pause();
console.log("Paused")
readable.isPaused();
console.log(readable.isPaused())

