var net = require('net');

var server=net.createServer();

var sockets= [];

server.on('error',function  (err) {
	console.log('Server error :'+err.message);
});

server.on('close',function  () {
	console.log('connection closed');
	var index=sockets.indexOf(socket);
	sockets.splice(index,1);
	console.log('Socket count',sockets.length);
});

server.on('connection',function  (socket) {
	
	console.log('yeni bir connection açıldı');
		
		sockets.push(socket);
        console.log('Socket count : '+sockets.length);
		socket.on('data',function(data){

			//And echo tcp :) Bu bölümde bir hata var ' Object has no method 'trim' diye
			//Biara bakıp düzelteceğim.
		if (data.trim().toLowerCase()==='quit')
		 {
		 	socket.write('güle gülee..');
		 	return socket.end();
		 }

			console.log('Gelen data :'+data);
			sockets.forEach(function  (otherSocket) {
				if(otherSocket!==socket)
					otherSocket.write(data);
			})
		});
});


server.listen(4001);

//For test use Coomand window,     telnet localhost:4001  and 
// open newother  Command window   nc localhost 4001      .enjoy!