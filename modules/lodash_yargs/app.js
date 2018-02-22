const _ = require('lodash');
//use yargs
const argv = require('yargs').argv;
//console.log(argv);

/************parte 2 use yargs*****************/
if (argv.usuario === 'jevill') {
            let x = {"nombre" : "jean"};
            let y = {"apodo" : "jevill"};
            let z = [
                  {nombre: "jean", apellido: "villarreal", edad: 24},
                  {nombre: "jevill", apellido: "code", edad: 24}
            ];

            //let resultado = _.assign(x,y);
            //console.log(resultado);

            let resultado = _.find(z, {nombre: "jevill"});
            console.log(resultado);
      }else{
            console.log('usuario no valido');
}
/************parte 1***********/
/*let comando = process.argv[2];
console.log(comando);

if (comando === 'usuario') {
      if (process.argv[3] === 'jevill') {
            let x = {"nombre" : "jean"};
            let y = {"apodo" : "jevill"};
            let z = [
                  {nombre: "jean", apellido: "villarreal", edad: 24},
                  {nombre: "jevill", apellido: "code", edad: 24}
            ];

            /*let resultado = _.assign(x,y);
            console.log(resultado);*/

            //ejecutar n veces
            //_.times(3,()=> console.log('suscribete'));

            /*encontrar objetos
            let resultado = _.find(z, {nombre: "jevill"});
            console.log(resultado);
      }else{
            console.log('usuario no valido');
      }
}*/
