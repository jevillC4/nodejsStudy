
//import modules
const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
console.log(cpu);

let systems = os.platform();
console.log(systems);

let user = os.hostname();
console.log(user);

/*fs.appendFile('jevillNod.txt','testear node up',function(err){
    console.log('error');
});*/

//string templates
let cpuString = JSON.stringify(cpu);
fs.appendFile('jevillNod.txt',` info ${cpuString}`,function(err){
    console.log('err');
});