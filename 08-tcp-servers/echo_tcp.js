var server = require('net').createServer(function(socket){

	console.log('new connection');

	socket.setEncoding('utf8');

	socket.write("Merhaba çıkmak için 'quit' komutunu kullanabilirsiniz.\n");

	socket.on('data',function(data){
		console.log('got:',data.toString())
		if (data.trim().toLowerCase()==='quit') {
			socket.write('Güle güle...');
			return socket.end();
		}else if(data.trim().toLowerCase()==='name'){
			socket.write('Abdullah');
		}
		//socket.write(data);
	});

socket.on('end',function(){
	console.log('Cliend connection ended');
});

}).listen(4001);