var logFileName= "date-logs.txt"

var fs=require('fs');

process.stdin.resume();


process.stdin.on('data',function  (data) {
	

	 try{
	 	
	 	var date = Date(data);

	 	//Burda dosyaya yazma event ı fırlatıcaz.
	 	openAndWriteDateLog(new Buffer(date.toString()),function done (err) {
	 		if (err) {
	 			console.log('Dosya açılışında ve okunuşunda bir sorun oluştu',err.message);return;
	 		}
	 		console.log('Dosya okuma ve yazma başarılı');
	 	})

	 	process.stdout.write(date);

	 }catch(err)
	 {
	 	process.stderr.write(err.message);
	 }
});

function readDateLogFileStream(callback){
   var rs=fs.createReadStream('date-logs.txt');
   		rs.on('data',function(data)
   		{
   			process.stdout.write(data);
   		});
   		rs.on('end',function  () {
   			callback(date);
   		});

}

function openAndWriteDateLog(writeBuffer,callback){

    fs.open(logFileName,'a',function opened (err,fd) {
    	if (err) {
    		callback(err)
    	};

    	function notifyError(err){
    		fs.close(fd,function(){
    			callback(err);
    		});
    	}

    	var bufferOffset=0;
    	var bufferLength=writeBuffer.length;
    	var filePosition=null;

    	fs.write(fd,writeBuffer,bufferOffset,bufferLength,filePosition,function wrote (err,written) {
    		if (err) {
    			return notifyError(err);
    		};
				fs.close(fd,function  () {
						callback(err);
				});    		
    	});

    })

}


