let calcular = (num1, num2) =>{
      return new Promise((res, rej) => {
            setTimeout(() =>{
                  let suma = num1 + num2;
                  if (suma > 5) {
                        res(num1 + num2)
                  }else{
                        rej('Error los datos')
                  }
            },2000)
      });
}

module.exports = {
      calcular
}
