const express = require('express');
const app = express();

let isLogin = () => true;

let logger = (req, res, next ) =>{
      console.log('Peticion de tipo ', req.method);
};
let showIp = (req, res, next ) =>{
      console.log('127.0.0.1');
      next();
};


app.use((req, res, next) => {
      if (isLogin) {
            next();
      }else{
            res.send('No estas logeado');
      }
}, logger, showIp);

app.get('/:user', (req, res) => {
      let usuario = req.params.user;
      console.log(`Bienvenido ${usuario}`);
});
app.post('/', (req, res) => {
      res.send(`hello world! ${req.method}`);
});
app.put('/', (req, res) => {
      res.send(`hello world! ${req.method}`);
});
app.delete('/', (req, res) => {
      res.send(`hello world! ${req.method}`);
});
app.listen(3000, () => {
      console.log('Start server');
});
