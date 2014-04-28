var util=require('util');
var customClass=require('./custom_class');

var EventEmitter=require('events').EventEmitter;


//Here is a custom class constructor



util.inherits(customClass,EventEmitter);

customClass.prototype.someMethod=function  () {
	this.emit("custom event","argument 1","argument 2");
};


