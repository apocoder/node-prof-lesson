//Only Ports , Sadece portlu
var net =require('net');
var port =4000;
var conn =net.createConnection(port);

//With Hostname, Host ile birlikte

var net2=require('net');
var port=4000;
var host="www.someplace.com";
var conn2=net.createConnection(port,host);

//Connection ı karşılayacağımız metod

function connectionListener (conn) {
	console.log("We have a new connection");
}

//Callback olayı ile fire ettik
var conn=net.createConnection(port,connectionListener);

var conn2=net.createConnection(port,connectionListener);

//Event emitter olayı ile hallettik.
conn2.once('connect',connectionListener);

