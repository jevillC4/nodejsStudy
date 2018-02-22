console.log('started');
const fs = require('fs');

//mode assync
/*fs.readFile('data.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});*/

//mode sync
/*let data = fs.readFileSync('data.txt','utf-8');
console.log(data);*/



/*fs.rename('data.txt', 'data_raname', (error) => {
    if(error) throw error;
    console.log('renamed');
});*/

//add text to text form async   
/*fs.appendFile('data.txt', '\nthanks for following' , (error) => {
    if(error) console.log(`Error ${error}`);
});

fs.unlink('data1.txt', (error) =>{
    if(error)throw error;
    console.log('deleted');
});
*/
//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

//read contend directory
/*fs.readdir('./../file-system/',(error, files) =>{
    files.forEach(file => {
        console.log(file);
    });
});*/
fs.readdirSync('./../functions-arrow/').forEach(file => {
    console.log(file);
});


console.log('finalized');