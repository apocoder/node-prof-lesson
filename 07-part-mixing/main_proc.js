var spawn=require('child_process').spawn;

var child=spawn('node',['child_stream_proc.js']);

var http=require('http');

	
setInterval(function  () {
	//Yeni tarihi bastık
	var date=new Date();
	child.stdin.write(date.toString());

	child.stdout.once("data",function  (data) {
		console.log(data.toString());
        
	});
	
	},8000);






