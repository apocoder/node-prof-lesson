//Child process modulunu use ettik
var spawn =require('child_process').spawn;

var child=spawn('node',['child_proc.js']);

//Fonksiyonu her bir saniyede çağırıyoruz.
setInterval(function  () {
	var number =Math.floor(Math.random()*10000);

   //Child processe datayı gönderdik
	child.stdin.write(number+"\n");

	child.stdout.once("data",function(data){
		console.log("Child Process cevabı "+ number +
			" : bu sayıya karşılık Bu cevap :"+data);
	});

	child.on('exit', function(code) {
	console.log('Child process ten çıkıldı.' + code); 
});
},1000);

//Hata durumu
child.stderr.on('data',function(data){
	process.stdout.write(data);
});

