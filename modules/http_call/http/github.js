const https = require('https');

let username = 'jevillC4';

let CHROME_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0';
let FIREFOX_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0';
let IE_USER_AGENT = 'Mozilla/5.0 (Windows; U; Windows NT 6.1; rv:2.2) Gecko/20110201';

let options = {
      host: 'api.github.com',
      path: '/users/' + username,
      method: 'GET',
      headers: {'user-agent': IE_USER_AGENT}
};

let request = https.request(options, (response) =>{
      let body = '';
      response.on('data', (out) =>{
            body += out;
      });
      response.on('end', (out) =>{
            let json = JSON.parse(body);
            console.log(json);
            console.log(json.id);
      });
});

request.on('error', (e)=>{
      console.log(e);
});

request.end();
