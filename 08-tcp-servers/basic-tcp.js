require('net').createServer(function  (socket) {
	//new connection
	socket.on('data',function  (data) {
		// Datayı al
	});

	socket.on('end',function  (data) {
		//connection close
	});

	socket.write('Bişeyler..');
}).listen(4001);