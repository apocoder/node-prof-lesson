//Declare buffer
var buf = new Buffer('Hello World');
console.log(buf[1]);


//Slice Buffer
console.log("slicing buffer..");
var buffer =new Buffer("this is content of buffer");
var smallerBuffer=buffer.slice(8,19);
	
console.log(smallerBuffer.toString());
//this display "content of""

//Copyng buffer
console.log("\ncopying buffer..");
var buffer1=new Buffer("this is content of my buffer");
var buffer2=new Buffer(11);

var targetStart=0;
var sourceStart=3;
var sourceEnd=19;

buffer1.copy(buffer2,targetStart,sourceStart,sourceEnd);
console.log(buffer2.toString());

//Encoding
console.log("\nencoding buffer...");
var utf8String='utf8 string';
var buf = new Buffer(utf8String);
var base64String=buf.toString('base64');
console.log("UTF8 Version :"+utf8String+"\nBASE64 Version :"+base64String);
