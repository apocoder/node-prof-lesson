var fs = require('fs');
var logFileName='logs.txt';
function openAndWriteToSystemLog(writeBuffer, callback) {
	fs.open(logFileName, 'a', function opened(err, fd) { 
		if (err) { return callback(err); 
		}

		function notifyError(err) {
			fs.close(fd, function() { callback(err);
			
			}); 
		}
		var bufferOffset = 0,bufferLength =writeBuffer.length, filePosition =null;


		fs.write( fd, writeBuffer, bufferOffset, bufferLength, filePosition, function wrote(err, written) {
				if (err) { return notifyError(err); } 
						fs.close(fd, function() {
								callback(err); });
				});


			});
	}

function readLogFile(fileName,callback){
	
fs.readFile(fileName, 'utf8', function (err,data) {
  if (err) {
    return notifyError(err);
  }
  callback(err,data);
 
});

}

openAndWriteToSystemLog(new Buffer('writing this string'), function done(err) {
	if (err) {
		console.log("error while opening and writing:", err.message); return;
	}
	console.log('All done with no errors');

});

readLogFile(logFileName,function done (err,data) {
	if (err) {
		console.log('error is '+err );
	};
	console.log(data);
})