var fs=require('fs');

require('http').createServer(function  (req,res) {

	//Stream i create et
	var rs=fs.createReadStream('stream-data.txt');

	rs.on('data',function(data){
		if(!res.write(data)){
			rs.pause();
		}
	});

	res.on('drain',function  () {
		rs.resume();
	});

	rs.on('end',function  () {
		res.end();
	});

}).listen(8080);