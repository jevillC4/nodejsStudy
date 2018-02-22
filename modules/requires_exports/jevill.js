console.log(module);
console.log('use file external 1');

//expose variable
let tester = 'tester an usage vsc, use modules exports 2';

module.exports.tester = tester;

//expose functions
function greetings(){
    console.log('greetings of function 3');    
}

module.exports.greetings = greetings();

//expose inner module function
module.exports.greet = function(){
    console.log('inner module, general form');
}

//form json
module.exports = {
    subs : tester,
    subss : function(){
        console.log('form json array');
    }
}