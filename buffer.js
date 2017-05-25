 var buffer=new Buffer("Hello");
buffer.setEncoding("utf-8");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write("GoodMorinng");
console.log(buffer);


var buffer=new Buffer(" welcome NOdejs")
console.log(buffer)
console.log(buffer.toString())
buffer.write("New buffer class on wednesday")
console.log(buffer.toString())


var buffer2 = new Buffer(16);
buffer2.write("alekya" , "utf-8");
console.log(buffer2+"")