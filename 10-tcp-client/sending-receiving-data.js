var net=require('net');

var conn=net.createConnection('4001');

//Düz hali
conn.write('some string');

//Encoding lisi
conn.write('ASDSdcadsnkalsdf','base64');

//Genelde buffer kullanacagımızdan
var buffer=new Buffer('Hello World');
conn.write(buffer);

conn.write('Hey!',function  () {
	console.log('data yazıldı.');
});

//please mix this sample 08-tcp-servers -> chat-tcp
//Yo will see how connect and write data on server..


