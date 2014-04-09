var printModule=require('./my_modules/lib/print_module');
var mathModule=require('./my_modules/lib/math_module');
console.log('Loading text modules..');
console.log(printModule.printA());

console.log('Loading math modules..');
printModule.print(mathModule.toplam(1,2));	