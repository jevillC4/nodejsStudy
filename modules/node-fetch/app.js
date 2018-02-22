const fetch = require('node-fetch');

fetch('https://api.github.com/users/jevillC4').then( (res) => {
      return res.json();
}).then((json) => {
      console.log(json);
});
