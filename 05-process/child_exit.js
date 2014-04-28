//Buna dedikodu oluşturma 
var spawn=require('child_process').spawn;

//Bunada yumurtlama denilebilir :))
var child=spawn('ls',['not_says.txt']);



child.on('exit',function  (code) {
	console.log('Yalan oldugu anlaşıldı.. :) '+code);
})

child =spawn('sleep',['10']);
	setTimeout(function(){
		console.log('kill em all');
		//Signalli kill
		child.kill('SIGUSR2');
	},1000);