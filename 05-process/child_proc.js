process.stdin.resume();



//data event ı yakalandı.
process.stdin.on('data',function  (data) {
	var number;
	try {
		//gelen data integer a çevrildi.
		number=parseInt(data.toString(),10);
        //bir artırıldı
        number+=1;
        //Numarayı çıkışta yazdık.
        process.stdout.write(number+"\n");


	}catch(err){
		//Hata halinde
		process.stderr.write(err.message +"\n");
	}
})