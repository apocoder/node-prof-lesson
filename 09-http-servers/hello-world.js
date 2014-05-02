var http =require('http');

var server =http.createServer();

server.on('request',function  (req,res) {
	console.log(req.url);
	//200 ok demek
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hello World');
	res.end();
});

//util.inspect() set edilen objeyi analiz etmek için kullanılır

server.listen(4000);
