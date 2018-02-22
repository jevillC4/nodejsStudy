const arrow = require('./source');

console.log(arrow.dat);
let response = arrow.adds(10,10);
console.log(response);

let adds1 = arrow.adds1(2,2);
let adds2 = arrow.adds2(9);

console.log(adds1);
console.log(adds2);

//function arrow
setTimeout( () => {
    console.log('use setTimeout past 2000 seconds');
},2000);