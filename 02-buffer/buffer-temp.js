var buff= new Buffer('Abdullah');
console.log(buff[1]);

var buffer=	 new Buffer('this is the content of buffer');
var smallerBuffer=buffer.slice(8,19);
console.log(smallerBuffer.toString());

buff.copy(buffer,0,0,3);

console.log(buffer.toString('utf8'));	