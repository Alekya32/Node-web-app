var buffer=new Buffer("Hello","utf-8");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write("GoodMorinng");
console.log(buffer.toString());


var buffer=new Buffer(" welcome NOdejs")
console.log(buffer)
console.log(buffer.toString())
buffer.write("New buffer class on wednesday")
console.log(buffer.toString())
